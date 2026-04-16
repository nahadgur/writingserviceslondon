'use client';

import { useState } from 'react';

interface Props { city?: string; service?: string; }

const serviceOptions = [
  'Single will',
  'Mirror wills for a couple',
  'Lasting power of attorney',
  'Trust planning',
  'Estate planning review',
  'Probate support',
  'Not sure — please advise',
];

export function HeroLeadForm({ city, service }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // TODO: replace with real webhook/CRM endpoint
    await new Promise(r => setTimeout(r, 800));
    setSubmitting(false); setDone(true);
  }

  return (
    <div style={{ background: 'var(--parchment)', border: '0.5px solid var(--border)', borderRadius: 8, padding: '22px 20px' }}>
      {done ? (
        <div className="text-center py-4">
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(212,105,25,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8l3.5 3.5L13 5" stroke="#D46919" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 20, fontStyle: 'italic', color: 'var(--ink)', marginBottom: 6 }}>
            Thank you
          </p>
          <p className="body-sm">We will be in touch within 24 hours.</p>
        </div>
      ) : (
        <>
          <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 19, fontStyle: 'italic', color: 'var(--ink)', marginBottom: 3 }}>
            {city ? `Get matched in ${city}` : 'Get matched free'}
          </p>
          <p className="body-sm mb-4">Free &nbsp;·&nbsp; No obligation &nbsp;·&nbsp; 24hr response</p>

          <form onSubmit={submit} noValidate className="space-y-3">

            <div>
              <label className="field-label" htmlFor="hlf-name">Your name *</label>
              <input
                id="hlf-name"
                type="text"
                required
                className="field-input"
                placeholder="e.g. Sarah Johnson"
                autoComplete="name"
              />
            </div>

            <div>
              <label className="field-label" htmlFor="hlf-email">Email address *</label>
              <input
                id="hlf-email"
                type="email"
                required
                className="field-input"
                placeholder="your@email.com"
                autoComplete="email"
              />
            </div>

            <div>
              <label className="field-label" htmlFor="hlf-phone">Phone number *</label>
              <input
                id="hlf-phone"
                type="tel"
                required
                className="field-input"
                placeholder="07700 900000"
                autoComplete="tel"
              />
            </div>

            <div>
              <label className="field-label" htmlFor="hlf-svc">Type of service *</label>
              <div style={{ position: 'relative' }}>
                <select id="hlf-svc" required className="field-select" defaultValue={service ?? ''}>
                  <option value="">Please select...</option>
                  {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <svg style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--dust)' }} width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div>
              <label className="field-label" htmlFor="hlf-msg">
                Message <span style={{ fontWeight: 300, textTransform: 'none', letterSpacing: 0 }}>(optional)</span>
              </label>
              <textarea
                id="hlf-msg"
                rows={2}
                className="field-input resize-none"
                placeholder="e.g. blended family, home visit needed, urgent..."
              />
            </div>

            <button type="submit" disabled={submitting} className="btn-primary w-full justify-center">
              {submitting ? 'Sending...' : 'Find my specialist →'}
            </button>
          </form>

          <p className="body-sm text-center mt-3" style={{ color: 'var(--dust)' }}>
            Paid by our network, never by you
          </p>
        </>
      )}
    </div>
  );
}
