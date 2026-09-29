import { withPageSeo } from '@/lib/pageMetadata';
import type { Metadata } from 'next';
import { siteConfig, FAQS_HOME } from '@/data/site';
import { HomePageClient } from './HomePageClient';

export const metadata: Metadata = withPageSeo("/", {
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Wills, LPAs and Probate Support`,
    description: siteConfig.description,
    locale: 'en_GB',
  },
});

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS_HOME.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteConfig.url}/#webpage`,
    name: 'Will Writing Services London',
    description: 'Will writing service for London families. Single wills, mirror wills, lasting powers of attorney, trust planning and probate support, with home visits across every London borough.',
    url: siteConfig.url,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    about: { '@id': `${siteConfig.url}/#organization` },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url }],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HomePageClient />
    </>
  );
}
