/** @type {import('next').NextConfig} */

// ── Culled city slugs → redirect to parent service page ─────────────────────
// These were the 68 location pages removed in Phase 2 (83 → 15).
// Each redirects permanently (308) to preserve any inbound link equity.
// NOTE: 6 surviving hubs (islington, camden, canary-wharf, shoreditch,
// stratford, battersea) were previously in this list — removed so the
// dynamic /location/[city] route can serve them.
const CULLED_LOCATION_SLUGS = [
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
];

// Service slugs — used to build service×location redirect rules
const SERVICE_SLUGS = [
  'single-will','mirror-wills','lasting-power-of-attorney',
  'trust-planning','estate-planning','probate-support',
];

// Build location page redirects: /location/[culled-slug]/ → /location/
const locationRedirects = CULLED_LOCATION_SLUGS.map(slug => ({
  source: `/location/${slug}/`,
  destination: '/location/',
  permanent: true,
}));

// Build service×location redirects: /services/[service]/[culled-slug]/ → /services/[service]/
const serviceLocationRedirects = [];
for (const service of SERVICE_SLUGS) {
  for (const slug of CULLED_LOCATION_SLUGS) {
    serviceLocationRedirects.push({
      source: `/services/${service}/${slug}/`,
      destination: `/services/${service}/`,
      permanent: true,
    });
  }
}

// Note: the 15 surviving hubs now have full service x location pages
// generated at build time, so no redirects apply to them.

const nextConfig = {
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'files.autoblogging.ai' },
    ],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      ...locationRedirects,
      ...serviceLocationRedirects,
    ];
  },
};

module.exports = nextConfig;
