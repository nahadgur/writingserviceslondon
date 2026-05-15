/** @type {import('next').NextConfig} */

// 2026-05-04: dead-URL handling moved to middleware.ts (returns branded
// 410 Gone instead of 308 redirect). The previous CULLED_LOCATION_SLUGS
// list and per-combo redirect generation lived here — see middleware.ts
// for the current keep-list and 410 logic.

const nextConfig = {
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // No remote image domains — all imagery is local in /public/images/.
    // Stock-image hosts (unsplash, pexels) and autoblog assets were
    // removed; never reintroduce them (memory: feedback_no_stock_images).
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
          // HSTS — force HTTPS for 2 years; submit to hstspreload.org after deploy
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
