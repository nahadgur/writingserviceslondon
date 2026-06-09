import type { Metadata } from 'next';
import { getPublishedArticles } from '@/data/blog';
import { siteConfig } from '@/data/site';
import { BlogIndexClient } from './BlogIndexClient';

export const metadata: Metadata = {
  title: 'Will Writing and Estate Planning Guides | London',
  description: 'Practical guides for London residents on wills, LPAs, trusts, inheritance tax, and probate, written for people making these decisions for the first time.',
  alternates: { canonical: '/blog/' },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/blog/`,
    siteName: siteConfig.name,
    title: 'Will Writing and Estate Planning Guides | London',
    description: 'Practical guides on wills, LPAs, trusts, inheritance tax, and probate for London residents.',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Will Writing and Estate Planning Guides | London',
    description: 'Practical guides on wills, LPAs, trusts, inheritance tax, and probate for London residents.',
  },
  robots: { index: true, follow: true },
};

export default function BlogIndexPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${siteConfig.url}/blog/#blog`,
    name: 'Will Writing and Estate Planning Guides -- London',
    description: 'Practical advice for London residents on wills, LPAs, trusts, inheritance tax, and probate.',
    url: `${siteConfig.url}/blog/`,
    publisher: { '@id': `${siteConfig.url}/#organization` },
    blogPost: getPublishedArticles().slice(0, 10).map(a => ({
      '@type': 'BlogPosting',
      headline: a.title,
      url: `${siteConfig.url}/blog/${a.slug}/`,
      datePublished: a.publishDate,
      description: a.metaDescription,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BlogIndexClient />
    </>
  );
}
