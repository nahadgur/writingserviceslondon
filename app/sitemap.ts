// app/sitemap.ts
//
// lastmod per route is derived from the most recent git commit
// touching the underlying data file(s). That means a content edit
// to data/services.ts auto-bumps every service URL's lastmod
// without anyone having to remember to update a hardcoded string.
//
// Falls back to the build-time ISO date if git history is missing
// (e.g. a non-git build environment). Vercel does include git
// history on builds.

import type { MetadataRoute } from 'next';
import { execSync } from 'node:child_process';
import path from 'node:path';
import { services } from '@/data/services';
import { AREA_HUBS } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { blogArticles } from '@/data/blog';
import { guides } from '@/data/guides';

const ROOT = process.cwd();
const FALLBACK = new Date().toISOString();

function gitMtime(relPath: string): string {
  try {
    const out = execSync(`git log -1 --format=%cI -- "${relPath}"`, {
      cwd: ROOT,
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'ignore'],
    }).trim();
    if (out) return out;
  } catch {
    /* fall through */
  }
  return FALLBACK;
}

function newestOf(...paths: string[]): string {
  return paths.map(gitMtime).sort().pop() ?? FALLBACK;
}

const SITE_LAUNCH = '2025-01-01';

const HOMEPAGE_MTIME = newestOf(
  'app/HomePageClient.tsx',
  'app/page.tsx',
  'data/site.ts',
);
const SERVICES_MTIME = newestOf(
  'data/services.ts',
  'data/serviceContent.ts',
  'app/services/[serviceSlug]/page.tsx',
  'app/services/[serviceSlug]/ServiceDetailClient.tsx',
);
const SERVICES_HUB_MTIME = newestOf(
  'data/services.ts',
  'app/services/page.tsx',
  'app/services/ServicesIndexClient.tsx',
);
const LOCATIONS_MTIME = newestOf(
  'data/locations.ts',
  'data/areaContent.ts',
  'data/locationProfiles.ts',
  'app/location/[city]/page.tsx',
);
const LOCATIONS_HUB_MTIME = newestOf(
  'data/locations.ts',
  'app/location/page.tsx',
  'app/location/LocationIndexClient.tsx',
);
const BLOG_HUB_MTIME = newestOf(
  'data/blog.ts',
  'app/blog/page.tsx',
  'app/blog/BlogIndexClient.tsx',
);
const GUIDES_HUB_MTIME = newestOf(
  'data/guides.ts',
  'app/guides/page.tsx',
);
const LEGAL_MTIME = newestOf(
  'app/privacy/page.tsx',
  'app/about/page.tsx',
  'app/contact/page.tsx',
  'app/terms/page.tsx',
);

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: HOMEPAGE_MTIME, changeFrequency: 'monthly', priority: 1.0 },
  ];

  const hubPages: MetadataRoute.Sitemap = [
    { url: `${base}/services/`, lastModified: SERVICES_HUB_MTIME, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/location/`, lastModified: LOCATIONS_HUB_MTIME, changeFrequency: 'monthly', priority: 0.8 },
  ];

  if (blogArticles.length > 0) {
    hubPages.push({
      url: `${base}/blog/`,
      lastModified: BLOG_HUB_MTIME,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  const guidesHub: MetadataRoute.Sitemap = [
    { url: `${base}/guides/`, lastModified: GUIDES_HUB_MTIME, changeFrequency: 'monthly', priority: 0.8 },
  ];

  // Each guide's lastmod uses its own publishDate from data/guides.ts
  // — that's the authored "last reviewed" date for the article.
  const guidePages: MetadataRoute.Sitemap = guides.map(g => ({
    url: `${base}/guides/${g.slug}/`,
    lastModified: g.publishDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Service detail pages share the same data files, so all 6 get the
  // same lastmod = newest commit affecting services.ts / serviceContent.ts.
  const servicePages: MetadataRoute.Sitemap = services.map(s => ({
    url: `${base}/services/${s.slug}/`,
    lastModified: SERVICES_MTIME,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Blog articles use their authored publishDate (not git mtime) —
  // the article's own date is what matters for editorial freshness.
  const blogPages: MetadataRoute.Sitemap = blogArticles.map(article => ({
    url: `${base}/blog/${article.slug}/`,
    lastModified: article.publishDate,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  const locationPages: MetadataRoute.Sitemap = AREA_HUBS.map(hub => ({
    url: `${base}/location/${hub.slug}/`,
    lastModified: LOCATIONS_MTIME,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const legalPages: MetadataRoute.Sitemap = [
    { url: `${base}/about/`,   lastModified: LEGAL_MTIME, changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${base}/contact/`, lastModified: LEGAL_MTIME, changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${base}/privacy/`, lastModified: LEGAL_MTIME, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${base}/terms/`,   lastModified: LEGAL_MTIME, changeFrequency: 'yearly' as const, priority: 0.3 },
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

// Silence unused-var warning when SITE_LAUNCH isn't referenced after
// removing all hardcoded dates. Keeping the constant around for the
// historical record and as a sensible fallback for future routes.
void SITE_LAUNCH;
