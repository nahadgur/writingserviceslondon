// app/sitemap.ts
//
// 2026-05-04: combo route /services/[svc]/[hub]/ removed entirely
// (was 90 hand-written pages — replaced by 6 service hubs + 15 area
// hubs covering the same ground without combinatoric inflation).
// Added /privacy/, /about/, /contact/, /terms/ legal pages.
//
// IMPORTANT: lastModified uses static dates not new Date() — every
// Google fetch with new Date() looks "fresh" and forces re-crawl,
// burning crawl budget on pages that haven't changed.

import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { AREA_HUBS } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { blogArticles } from '@/data/blog';
import { guides } from '@/data/guides';

const SITE_LAUNCH = '2025-01-01';
const LAST_CONTENT_UPDATE = '2026-05-04';

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

  // Tier — Guides hub (0.8)
  const guidesHub: MetadataRoute.Sitemap = [
    { url: `${base}/guides/`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.8 },
  ];

  // Tier — Individual guide pages (0.7)
  const guidePages: MetadataRoute.Sitemap = guides.map(g => ({
    url: `${base}/guides/${g.slug}/`,
    lastModified: g.publishDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

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
  const locationPages: MetadataRoute.Sitemap = AREA_HUBS.map(hub => ({
    url: `${base}/location/${hub.slug}/`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  // Tier 6 — Legal pages
  const legalPages: MetadataRoute.Sitemap = [
    { url: `${base}/about/`,   lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${base}/contact/`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${base}/privacy/`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${base}/terms/`,   lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  return [
    ...staticPages,
    ...hubPages,
    ...guidesHub,
    ...guidePages,
    ...servicePages,
    ...blogPages,
    ...locationPages,
    ...legalPages,
  ];
}
