import { withPageSeo } from '@/lib/pageMetadata';
import type { Metadata } from 'next';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';
import { ServicesIndexClient } from './ServicesIndexClient';

export const metadata: Metadata = withPageSeo("/services/", {
  title: 'Will Writing Services in London | Single Wills, LPAs, Trusts, Probate',
  description: 'Six services for London families: single and mirror wills, lasting powers of attorney, trust planning, estate planning reviews, and probate support. Fixed fees quoted upfront.',
  alternates: { canonical: '/services/' },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/services/`,
    siteName: siteConfig.name,
    title: 'Will Writing Services in London',
    description: 'Six core will writing and estate planning services for London, with fixed fees and home visits.',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Will Writing Services in London',
    description: 'Six core will writing and estate planning services for London.',
  },
  robots: { index: true, follow: true },
});

export default function ServicesIndexPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteConfig.url}/services/#webpage`,
    name: 'Will Writing and Estate Planning -- London',
    description: 'Will writing and estate planning for London families. Single and mirror wills, lasting powers of attorney, trusts, estate planning reviews and probate support.',
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
