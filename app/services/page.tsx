import type { Metadata } from 'next';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';
import { ServicesIndexClient } from './ServicesIndexClient';

export const metadata: Metadata = {
  title: 'Will Writing Services in London | Single Wills, LPAs, Trusts, Probate',
  description: 'Free matching with vetted London will writers across six services — single and mirror wills, lasting powers of attorney, trust planning, estate planning reviews, and probate support.',
  alternates: { canonical: '/services/' },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/services/`,
    siteName: siteConfig.name,
    title: 'Will Writing Services in London',
    description: 'Six core services from vetted London estate planning specialists. Free matching, 24-hour introductions.',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Will Writing Services in London',
    description: 'Six core services from vetted London estate planning specialists.',
  },
  robots: { index: true, follow: true },
};

export default function ServicesIndexPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteConfig.url}/services/#webpage`,
    name: 'Will Writing and Estate Planning Matching -- London',
    description: 'Free referral service connecting London residents with vetted will writers and estate planning specialists. We introduce clients to professionals -- we are not a law firm or will writing practice.',
    url: `${siteConfig.url}/services/`,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    mentions: services.map(s => ({
      '@type': 'Service',
      name: s.title,
      description: s.description,
      url: `${siteConfig.url}/services/${s.slug}/`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServicesIndexClient />
    </>
  );
}
