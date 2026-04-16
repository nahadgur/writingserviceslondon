import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { LOCATIONS, toSlug } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { blogArticles } from '@/data/blog';

// Fixed build date — do NOT use new Date() here.
// Google treats a sitemap that changes lastmod on every build as unreliable.
// Update these dates manually when you actually edit a page.
const SITE_LAUNCH = '2025-01-01';
const LAST_CONTENT_UPDATE = '2026-01-15';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const allCities = Object.values(LOCATIONS).flat();

  // Tier 1 — homepage (1.0)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];

  // Tier 2 — hub pages (0.8)
  const hubPages: MetadataRoute.Sitemap = [
    {
      url: `${base}/services/`,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${base}/location/`,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ];

  if (blogArticles.length > 0) {
    hubPages.push({
      url: `${base}/blog/`,
      lastModified: blogArticles[0]?.publishDate ?? SITE_LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  // Tier 3 — individual service pages (0.7)
  const servicePages: MetadataRoute.Sitemap = services.map(s => ({
    url: `${base}/services/${s.slug}/`,
    lastModified: SITE_LAUNCH,
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  // Tier 4 — blog posts (0.6)
  const blogPages: MetadataRoute.Sitemap = blogArticles.map(article => ({
    url: `${base}/blog/${article.slug}/`,
    lastModified: article.publishDate,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  // Tier 5 — city hub pages (0.5)
  const locationPages: MetadataRoute.Sitemap = allCities.map(city => ({
    url: `${base}/location/${toSlug(city)}/`,
    lastModified: SITE_LAUNCH,
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  // Tier 6 — service×location combinatorial pages (0.3)
  // Low priority: thin programmatic content. Consider culling in Phase 2.
  const serviceLocationPages: MetadataRoute.Sitemap = [];
  for (const service of services) {
    for (const city of allCities) {
      serviceLocationPages.push({
        url: `${base}/services/${service.slug}/${toSlug(city)}/`,
        lastModified: SITE_LAUNCH,
        changeFrequency: 'yearly' as const,
        priority: 0.3,
      });
    }
  }

  return [
    ...staticPages,
    ...hubPages,
    ...servicePages,
    ...blogPages,
    ...locationPages,
    ...serviceLocationPages,
  ];
}
