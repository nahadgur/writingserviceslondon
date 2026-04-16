// app/page.tsx — SERVER COMPONENT
import type { Metadata } from 'next';
import { siteConfig, FAQS_HOME } from '@/data/site';
import { services } from '@/data/services';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: `${siteConfig.name} | Find Vetted Will Writing Specialists in London`,
  description: siteConfig.description,
  alternates: { canonical: `${siteConfig.url}/` },
};

const homepageServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${siteConfig.url}/#matching-service`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  provider: { '@type': 'Organization', '@id': `${siteConfig.url}/#organization` },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'London',
    containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Will Writing and Estate Planning Services',
    itemListElement: services.map(s => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title },
    })),
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free matching service — no charge to clients',
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS_HOME)) }} />
      <HomePageClient />
    </>
  );
}
