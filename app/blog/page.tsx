// app/blog/page.tsx — SERVER COMPONENT
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { blogArticles } from '@/data/blog';
import { breadcrumbSchema } from '@/lib/schema';
import BlogIndexClient from './BlogIndexClient';

export const metadata: Metadata = {
  title: `Will Writing Guides and Advice | ${siteConfig.name}`,
  description: 'Practical guides on will writing, estate planning, lasting power of attorney, trust planning, and probate for London residents.',
  alternates: { canonical: `${siteConfig.url}/blog/` },
};

export default function BlogIndexPage() {
  const ldBreadcrumb = breadcrumbSchema([{ label: 'Blog' }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />
      <BlogIndexClient articles={blogArticles} />
    </>
  );
}
