import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { AREA_HUBS } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { blogArticles } from '@/data/blog';

const SITE_LAUNCH = '2025-01-01';
const LAST_CONTENT_UPDATE = '2026-01-15';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  // Tier 1 — Homepage (1.0)
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 1.0 },
  ];

  // Tier 2 — Hub pages (0.8)
  const hubPages: MetadataRoute.Sitemap = [
    { url: `${base}/services/`, lastModified: SITE_LAUNCH, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/location/`, lastModified: SITE_LAUNCH, changeFrequency: 'yearly', priority: 0.8 },
  ];

  if (blogArticles.length > 0) {
    hubPages.push({
      url: `${base}/blog/`,
      lastModified: blogArticles[0]?.publishDate ?? SITE_LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  // Tier 3 — Service pages (0.7)
  const servicePages: MetadataRoute.Sitemap = services.map(s => ({
    url: `${base}/services/${s.slug}/`,
    lastModified: SITE_LAUNCH,
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  // Tier 4 — Blog posts (0.6)
  const blogPages: MetadataRoute.Sitemap = blogArticles.map(article => ({
    url: `${base}/blog/${article.slug}/`,
    lastModified: article.publishDate,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  // Tier 5 — 15 curated area hub pages (0.6)
  // Each page is genuinely differentiated with original content — higher priority than Phase 1's 83 thin pages
  const locationPages: MetadataRoute.Sitemap = AREA_HUBS.map(hub => ({
    url: `${base}/location/${hub.slug}/`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  // Tier 6 — 90 service x location pages (0.5)
  // 6 services x 15 hubs, each with unique per-hub per-service content
  const serviceLocationPages: MetadataRoute.Sitemap = [];
  for (const service of services) {
    for (const hub of AREA_HUBS) {
      serviceLocationPages.push({
        url: `${base}/services/${service.slug}/${hub.slug}/`,
        lastModified: LAST_CONTENT_UPDATE,
        changeFrequency: 'yearly' as const,
        priority: 0.5,
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
