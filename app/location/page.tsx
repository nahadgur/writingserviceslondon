// app/location/page.tsx — SERVER COMPONENT (Phase 2)
import type { Metadata } from 'next';
import { siteConfig, FAQS_LOCATION } from '@/data/site';
import { AREA_HUBS } from '@/data/locations';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import LocationIndexClient from './LocationIndexClient';

export const metadata: Metadata = {
  title: `Will Writing Services London by Area | ${siteConfig.name}`,
  description: 'Find vetted will writers and estate planning specialists across London. Browse by area to see specialists covering your neighbourhood — from Mayfair to Stratford, Hampstead to Dulwich.',
  alternates: { canonical: `${siteConfig.url}/location/` },
};

export default function LocationIndexPage() {
  const ldBreadcrumb = breadcrumbSchema([{ label: 'Locations' }]);
  const ldFaq = faqSchema(FAQS_LOCATION);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFaq) }} />
      <LocationIndexClient hubs={AREA_HUBS} faqs={FAQS_LOCATION} />
    </>
  );
}
