// app/api/lead/route.ts
//
// Server-side lead handler. Replaces the previous direct browser →
// Google Apps Script POST. Adds the lead-pipeline hardening missing
// from the original setup:
//
//   - Honeypot field (_hp_company must be empty)
//   - Form timing (must be filled in >= 1.5s; bots auto-fill in ~0.1s)
//   - Content spam check (rejects URLs and spam patterns)
//   - Same-origin check (basic CSRF protection)
//   - Per-IP sliding-window rate limit (5 / 60s)
//   - UTM / gclid / referrer / first-landing persistence (captured
//     client-side via sessionStorage, forwarded here)
//
// The Google Apps Script URL is hard-coded (see fleet pattern in
// feedback_hardcode_webhook_urls).

import { NextResponse, type NextRequest } from 'next/server';
import { siteConfig } from '@/data/site';

const GAS_URL = 'https://script.google.com/macros/s/AKfycbwyvWIDUWZCeIaLRn91S3BxMCPTFIKBHE8tG4jEtKtLQyfEZrAPi-nd1MZgH20gP4j1Sw/exec';

const MIN_FILL_MS = 1500;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60_000;

// Sliding-window per-IP limit. Module-scope Map survives across
// requests on a warm instance and resets on cold start (attackers
// can't carry state across colds either).
const ipHits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const cutoff = now - RATE_LIMIT_WINDOW_MS;
  const hits = (ipHits.get(ip) ?? []).filter(t => t > cutoff);
  if (hits.length >= RATE_LIMIT_MAX) {
    ipHits.set(ip, hits);
    return true;
  }
  hits.push(now);
  ipHits.set(ip, hits);
  return false;
}

const SPAM_PATTERNS = [
  /https?:\/\//i,
  /\bwww\./i,
  /\bbit\.ly\b/i,
  /<a\s/i,
  /\[url=/i,
  /\bbinary options\b/i,
  /\bcrypto trading\b/i,
  /\bSEO services\b/i,
];

function isSpammy(text: string): boolean {
  if (!text) return false;
  if (text.length > 2000) return true;
  return SPAM_PATTERNS.some(p => p.test(text));
}

function getClientIp(req: NextRequest): string {
  const xff = req.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0]!.trim();
  return req.headers.get('x-real-ip') ?? 'unknown';
}

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false;
  if (origin === siteConfig.url) return true;
  if (origin === siteConfig.url.replace('https://www.', 'https://')) return true;
  if (origin.startsWith('http://localhost:')) return true;
  if (origin.startsWith('http://127.0.0.1:')) return true;
  // Vercel preview URLs
  if (/^https:\/\/[a-z0-9-]+\.vercel\.app$/.test(origin)) return true;
  return false;
}

export async function POST(req: NextRequest) {
  // 1. Origin check (CSRF)
  if (!isAllowedOrigin(req.headers.get('origin'))) {
    return NextResponse.json({ ok: false, error: 'invalid_origin' }, { status: 403 });
  }

  // 2. Rate limit
  const ip = getClientIp(req);
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_body' }, { status: 400 });
  }

  // 3. Honeypot — pretend success so the bot moves on
  if (typeof body._hp_company === 'string' && body._hp_company.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  // 4. Form-fill timing
  const formStarted = Number(body._form_started);
  if (!Number.isFinite(formStarted) || Date.now() - formStarted < MIN_FILL_MS) {
    return NextResponse.json({ ok: true });
  }

  // 5. Required fields
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const service = typeof body.service === 'string' ? body.service.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name || !email || !phone || !service) {
    return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
  }

  // 6. Content spam check
  if (isSpammy(message) || isSpammy(name)) {
    return NextResponse.json({ ok: true });
  }

  const utm = (k: string): string => (typeof body[k] === 'string' ? (body[k] as string) : '');

  const payload = {
    name,
    email,
    phone,
    service,
    message,
    page: utm('page'),
    source: utm('source'),
    utm_source: utm('utm_source'),
    utm_medium: utm('utm_medium'),
    utm_campaign: utm('utm_campaign'),
    utm_term: utm('utm_term'),
    utm_content: utm('utm_content'),
    gclid: utm('gclid'),
    first_referrer: utm('first_referrer'),
    first_landing_page: utm('first_landing_page'),
    submitted_at: new Date().toISOString(),
  };

  // 7. Forward to Google Apps Script
  try {
    await fetch(GAS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error('GAS forward failed:', err);
    return NextResponse.json({ ok: false, error: 'forward_failed' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
