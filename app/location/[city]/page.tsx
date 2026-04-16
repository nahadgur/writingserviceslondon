// app/location/[city]/page.tsx — SERVER COMPONENT
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LOCATIONS, getCityBySlug, toSlug } from '@/data/locations';
import { siteConfig, FAQS_LOCATION } from '@/data/site';
import { cityPageContent } from '@/data/cityContent';
import { locationPageSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';
import CityPageClient from './CityPageClient';

interface Props {
  params: { city: string };
}

export async function generateStaticParams() {
  const allCities = Object.values(LOCATIONS).flat();
  return allCities.map(city => ({ city: toSlug(city) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cityName = getCityBySlug(params.city);
  if (!cityName) return {};

  const title = `Will Writing Services ${cityName} | Find Vetted Specialists`;
  const description = cityPageContent.heroDesc(cityName);
  const url = `${siteConfig.url}/location/${params.city}/`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
  };
}

export default function CityPage({ params }: Props) {
  const cityName = getCityBySlug(params.city);
  if (!cityName) notFound();

  // Pre-compute server-side
  const cityFaqs = cityPageContent.faqs(cityName);
  const whyCards = cityPageContent.matchingCards(cityName);
  const introParagraphs = cityPageContent.introParagraphs(cityName);
  const introHeading = cityPageContent.introHeading(cityName);
  const matchingHeading = cityPageContent.matchingHeading(cityName);
  const heroDesc = cityPageContent.heroDesc(cityName);
  const sidebarCta = cityPageContent.sidebarCta(cityName);
  const sidebarFinance = cityPageContent.sidebarFinance(cityName);
  const sidebarTrustPoints = cityPageContent.sidebarTrustPoints(cityName);

  const ldLocation = locationPageSchema(cityName, heroDesc, cityPageContent.schemaServiceTypes);
  const ldFaq = faqSchema([...cityFaqs, ...FAQS_LOCATION]);
  const ldBreadcrumb = breadcrumbSchema([
    { label: 'Locations', href: '/location/' },
    { label: cityName },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldLocation) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />
      <CityPageClient
        cityName={cityName}
        citySlug={params.city}
        heroDesc={heroDesc}
        introHeading={introHeading}
        introParagraphs={introParagraphs}
        matchingHeading={matchingHeading}
        whyCards={whyCards}
        cityFaqs={cityFaqs}
        sidebarCta={sidebarCta}
        sidebarFinance={sidebarFinance}
        sidebarTrustPoints={sidebarTrustPoints}
      />
    </>
  );
}
