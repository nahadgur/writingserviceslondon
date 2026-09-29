import type { Metadata } from 'next';
import { pageSeo } from '@/data/pageSeo';
import { siteConfig } from '@/data/site';

/** Keep search and social copy consistent without changing visible article text. */
export function withPageSeo(path: string, metadata: Metadata): Metadata {
  const copy = pageSeo[path];
  if (!copy) return metadata;
  return {
    ...metadata,
    // The root template must not repeat the full site name on every long title.
    title: { absolute: copy.title },
    description: copy.description,
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      locale: 'en_GB',
      ...metadata.openGraph,
      title: copy.title,
      description: copy.description,
    },
    twitter: {
      card: 'summary_large_image',
      ...metadata.twitter,
      title: copy.title,
      description: copy.description,
    },
  };
}
