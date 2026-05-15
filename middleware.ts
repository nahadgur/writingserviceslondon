// middleware.ts
//
// Returns HTTP 410 Gone with a branded HTML page for retired URLs.
// Replaces the 308 redirect approach previously in next.config.js —
// 410 is more decisive (Google drops it from the index promptly)
// while a branded body keeps the UX usable for anyone clicking an
// old SERP link.
//
// Two cull categories:
//   1. ALL service × hub combo URLs (/services/{svc}/{hub}/) —
//      the entire combo route was deleted 2026-05-04 because the
//      6 service hubs + 15 area hubs already cover every combination
//      and combo pages were diluting the index without adding
//      meaningful navigation value.
//   2. The 68 hub URLs from the Phase-2 cull (83 → 15) that
//      previously 308-redirected to /location/. They now return
//      410 instead so Google drops them rather than caching the
//      redirect chain.
//
// DO NOT redirect to / — that creates the soft-404 problem (every
// dead URL looks like a duplicate of the homepage to Google).

import { NextRequest, NextResponse } from 'next/server';

// Phase-2 cull list (83 → 15 hubs). Same slugs that were in
// next.config.js CULLED_LOCATION_SLUGS — moved here so all dead-URL
// handling lives in one place.
const CULLED_HUB_SLUGS = new Set<string>([
  'soho','covent-garden','fitzrovia','bloomsbury','marylebone','oxford-street',
  'piccadilly','tottenham-court-road','king-s-cross','euston','russell-square',
  'hoxton','bethnal-green','bow',
  'poplar','stepney','whitechapel','wapping','bermondsey','peckham',
  'new-cross','lewisham','deptford','elephant-and-castle','borough',
  'brixton','stockwell','herne-hill',
  'hammersmith','fulham','chiswick','ealing','acton','shepherd-s-bush',
  'notting-hill','bayswater','putney','wimbledon','kingston','twickenham',
  'angel','kentish-town','highbury','archway',
  'finsbury-park','crouch-end','muswell-hill','highgate','finchley',
  'golders-green','barnet','stoke-newington','dalston',
  'clerkenwell','farringdon','holborn','chancery-lane','temple','blackfriars',
  'bank','monument','moorgate','bishopsgate','aldgate','liverpool-street',
  'barbican','city-of-london',
]);

// Branded 410 page. Inline HTML because middleware runs on Edge and
// can't render React. Styled to roughly match the brand (parchment
// surface, ink text, brand orange, Cormorant serif headline).
const GONE_HTML = `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="robots" content="noindex,nofollow" />
<title>Page no longer available</title>
<style>
  *,*::before,*::after{box-sizing:border-box}
  html,body{margin:0;padding:0;background:#faf7f3;color:#1c1814;font-family:Georgia,'Cormorant Garamond',serif;-webkit-font-smoothing:antialiased}
  .wrap{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px 20px;text-align:center}
  .num{font-family:Georgia,'Cormorant Garamond',serif;font-style:italic;font-weight:400;font-size:clamp(96px,18vw,200px);line-height:1;color:#D46919;letter-spacing:-.02em;margin-bottom:8px}
  .eyebrow{font-family:'Inter',system-ui,sans-serif;font-size:11px;letter-spacing:.25em;text-transform:uppercase;color:rgba(28,24,20,.5);margin:0 0 24px;font-weight:400}
  h1{font-weight:400;font-size:clamp(28px,5vw,52px);letter-spacing:-.01em;line-height:1.1;margin:0 0 20px;max-width:34ch}
  p{font-family:'Inter',system-ui,sans-serif;font-weight:300;font-size:clamp(15px,1.6vw,17px);line-height:1.7;color:rgba(28,24,20,.7);max-width:60ch;margin:0 auto 36px}
  .btns{display:flex;flex-wrap:wrap;gap:12px;justify-content:center}
  a.btn{display:inline-flex;align-items:center;gap:8px;padding:14px 28px;border-radius:4px;font-family:'Inter',system-ui,sans-serif;font-weight:500;font-size:13px;letter-spacing:.02em;text-decoration:none;transition:background .15s,color .15s,border-color .15s}
  a.primary{background:#D46919;color:#fff}
  a.primary:hover{background:#e8943a}
  a.secondary{border:0.5px solid #1c1814;color:#1c1814;background:transparent}
  a.secondary:hover{background:#1c1814;color:#fff}
</style>
</head>
<body>
<main class="wrap">
  <div class="num">410</div>
  <div class="eyebrow">Page no longer available</div>
  <h1>This page has been retired</h1>
  <p>The page you were looking for was part of an earlier version of the site and has been removed. The matching service is still running &mdash; pick a destination below and we&rsquo;ll help you find a vetted London will writer.</p>
  <div class="btns">
    <a class="btn primary" href="/">Go to homepage <span aria-hidden="true">&rarr;</span></a>
    <a class="btn secondary" href="/services/">Browse services</a>
    <a class="btn secondary" href="/location/">Browse London areas</a>
  </div>
</main>
</body>
</html>`;

function gone() {
  return new NextResponse(GONE_HTML, {
    status: 410,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'x-robots-tag': 'noindex, nofollow',
      'cache-control': 'public, max-age=86400',
    },
  });
}

// Next.js metadata file conventions that share dynamic-route URL space
// with content pages. Without this list the combo-cull regex below
// would 410 /services/{slug}/opengraph-image and break social cards.
const NEXT_FILE_CONVENTIONS = new Set([
  'opengraph-image',
  'twitter-image',
  'icon',
  'apple-icon',
  'manifest',
  'sitemap.xml',
  'robots.txt',
]);

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1. Combo URLs — entire route deleted, so any /services/X/Y/ URL
  //    is dead. Match before /services/X/ so we don't 410 surviving
  //    service hub URLs. Skip Next.js metadata file-conventions that
  //    legitimately live at /services/{slug}/{convention}.
  if (/^\/services\/[^\/]+\/[^\/]+\/?$/.test(pathname)) {
    const segments = pathname.split('/').filter(Boolean);
    if (segments[2] && NEXT_FILE_CONVENTIONS.has(segments[2])) {
      return NextResponse.next();
    }
    return gone();
  }

  // 2. Phase-2 cull hubs — /location/{slug}/ where the slug is in
  //    the culled set. Slugs not in either kept-or-culled lists fall
  //    through to the route's notFound() so we don't 410 random typos.
  const cityMatch = pathname.match(/^\/location\/([^\/]+)\/?$/);
  if (cityMatch && CULLED_HUB_SLUGS.has(cityMatch[1])) {
    return gone();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/location/:path*',
    '/services/:path*',
  ],
};
