// app/blog/[slug]/page.tsx — SERVER COMPONENT
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticleBySlug, blogArticles } from '@/data/blog';
import { siteConfig } from '@/data/site';
import { breadcrumbSchema } from '@/lib/schema';
import BlogArticleClient from './BlogArticleClient';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogArticles.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  const url = `${siteConfig.url}/blog/${article.slug}/`;
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url,
      type: 'article',
      publishedTime: article.publishDate,
      images: article.featuredImage ? [{ url: article.featuredImage }] : undefined,
    },
  };
}

export default function BlogArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const relatedArticles = blogArticles
    .filter(a => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.metaTitle,
    description: article.metaDescription,
    image: article.featuredImage || undefined,
    datePublished: article.publishDate,
    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${article.slug}/`,
    },
  };

  const ldBreadcrumb = breadcrumbSchema([
    { label: 'Blog', href: '/blog/' },
    { label: article.title },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />
      <BlogArticleClient article={article} relatedArticles={relatedArticles} />
    </>
  );
}
