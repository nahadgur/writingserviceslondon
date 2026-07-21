import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getPublishedArticles, getArticlesByHub, type ContentBlock } from '@/data/blog';
import { getGuideBySlug } from '@/data/guides';
import { siteConfig } from '@/data/site';
import { articleSchema, breadcrumbSchema, faqSchema, editorialAuthorSchema } from '@/lib/schema';
import { BlogPostClient } from './BlogPostClient';

export function generateStaticParams() {
  // Draft spokes are not pre-rendered; they 404 until the publisher flips them.
  return getPublishedArticles().map(a => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: 'Article not found' };

  const url = `${siteConfig.url}/blog/${article.slug}/`;
  const image = `${siteConfig.url}${article.featuredImage}`;

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `/blog/${article.slug}/` },
    openGraph: {
      type: 'article',
      url,
      siteName: siteConfig.name,
      title: article.metaTitle,
      description: article.metaDescription,
      locale: 'en_GB',
      publishedTime: article.publishDate,
      modifiedTime: article.dateModified || article.publishDate,
      images: article.featuredImage ? [{ url: image, width: 1536, height: 1024, alt: article.featuredImageAlt || article.title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle,
      description: article.metaDescription,
      images: article.featuredImage ? [image] : undefined,
    },
    robots: { index: true, follow: true },
  };
}

// Extract a FAQ list from content (the "Frequently Asked Questions" h2 followed
// by h3/p pairs) for FAQPage schema. Falls back to an explicit faqs field.
function extractFaqs(content: ContentBlock[]): { question: string; answer: string }[] {
  for (let i = 0; i < content.length; i++) {
    const b = content[i];
    if (b.type === 'h2' && (b.text || '').includes('Frequently Asked Questions')) {
      const faqs: { question: string; answer: string }[] = [];
      let j = i + 1;
      while (j < content.length) {
        const q = content[j];
        const a = content[j + 1];
        if (q && q.type === 'h3' && a && a.type === 'p') {
          faqs.push({ question: q.text || '', answer: a.text || '' });
          j += 2;
        } else if (q && q.type === 'h3') {
          j += 1;
        } else break;
      }
      return faqs;
    }
  }
  return [];
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article || article.draft) notFound();

  // Related = live spokes in the same hub (tighter than category).
  const related = getArticlesByHub(article.hub)
    .filter(a => a.slug !== article.slug)
    .slice(0, 3);

  const hubGuide = getGuideBySlug(article.hub);
  const hub = hubGuide ? { slug: hubGuide.slug, title: hubGuide.title } : null;

  const url = `${siteConfig.url}/blog/${article.slug}/`;
  const dateModified = article.dateModified || article.publishDate;
  const faqs = article.faqs && article.faqs.length > 0 ? article.faqs : extractFaqs(article.content);

  const schemas: object[] = [
    editorialAuthorSchema(),
    breadcrumbSchema([{ label: 'Blog', href: '/blog/' }, { label: article.title }]),
    articleSchema({
      url,
      headline: article.metaTitle,
      description: article.metaDescription,
      datePublished: article.publishDate,
      dateModified,
      image: article.featuredImage ? `${siteConfig.url}${article.featuredImage}` : undefined,
    }),
  ];
  if (faqs.length > 0) schemas.push(faqSchema(faqs));

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <BlogPostClient article={article} related={related} hub={hub} />
    </>
  );
}
