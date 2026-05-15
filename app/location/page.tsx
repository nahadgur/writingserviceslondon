import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { LocationIndexClient } from './LocationIndexClient';

export const metadata: Metadata = {
  title: 'Will Writing Services Across London | 15 Area Hubs',
  description: 'Coverage across 15 London hubs from Mayfair and Hampstead to Canary Wharf and Richmond. Vetted estate planning specialists serving every borough — find your area below.',
  alternates: { canonical: '/location/' },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/location/`,
    siteName: siteConfig.name,
    title: 'Will Writing Across Every London Area',
    description: '15 London hubs covered by our vetted estate planning network. Free matching, 24-hour introductions.',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Will Writing Across Every London Area',
    description: '15 London hubs covered by our vetted estate planning network.',
  },
  robots: { index: true, follow: true },
};

export default function LocationIndexPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteConfig.url}/location/#page`,
    name: 'Will Writing Services -- London Areas',
    description: 'Find vetted will writers and estate planning specialists across all London areas. Coverage across 15 London hubs from Mayfair to Stratford.',
    url: `${siteConfig.url}/location/`,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Areas', item: `${siteConfig.url}/location/` },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LocationIndexClient />
    </>
  );
}
