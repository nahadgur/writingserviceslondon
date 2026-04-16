// app/services/[serviceSlug]/[locationSlug]/page.tsx — SERVER COMPONENT
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import { LOCATIONS, getCityBySlug, toSlug } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { serviceLocationContent } from '@/data/serviceLocationContent';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';
import ServiceLocationPageClient from './ServiceLocationPageClient';

interface Props {
  params: { serviceSlug: string; locationSlug: string };
}

export async function generateStaticParams() {
  const allCities = Object.values(LOCATIONS).flat();
  const params: { serviceSlug: string; locationSlug: string }[] = [];
  for (const slug of getAllServiceSlugs()) {
    for (const city of allCities) {
      params.push({ serviceSlug: slug, locationSlug: toSlug(city) });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.serviceSlug);
  const cityName = getCityBySlug(params.locationSlug);
  if (!service || !cityName) return {};

  const title = `${service.title} in ${cityName} | Vetted Specialists`;
  const content = serviceLocationContent[service.id] || serviceLocationContent['single-will'];
  const description = content.heroDesc(cityName);
  const url = `${siteConfig.url}/services/${service.slug}/${params.locationSlug}/`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
  };
}

export default function ServiceLocationPage({ params }: Props) {
  const service = getServiceBySlug(params.serviceSlug);
  const cityName = getCityBySlug(params.locationSlug);
  if (!service || !cityName) notFound();

  const allCities = Object.values(LOCATIONS).flat();
  const content = serviceLocationContent[service.id] || serviceLocationContent['single-will'];

  // Pre-compute everything server-side
  const heroDesc = content.heroDesc(cityName);
  const heroBullets = content.heroBullets(cityName);
  const trustLine = content.trustLine(cityName);
  const benefits = content.benefits(cityName);
  const intro = content.intro(cityName);
  const introHeading = content.introHeading(cityName);
  const stepsHeading = content.stepsHeading(cityName);
  const whyHeading = content.whyHeading(cityName);
  const steps = content.steps(cityName);
  const whyPoints = content.whyPoints(cityName);
  const faqs = content.faqs(cityName);
  const relatedServices = services.filter(s => s.id !== service.id);

  const ldService = serviceSchema({ name: service.title, slug: service.slug, description: heroDesc, cityName });
  const ldFaq = faqSchema(faqs);
  const ldBreadcrumb = breadcrumbSchema([
    { label: 'Services', href: '/services/' },
    { label: service.title, href: `/services/${service.slug}/` },
    { label: cityName },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />
      <ServiceLocationPageClient
        service={service}
        cityName={cityName}
        locationSlug={params.locationSlug}
        heroDesc={heroDesc}
        heroBullets={heroBullets}
        trustLine={trustLine}
        benefits={benefits}
        intro={intro}
        introHeading={introHeading}
        stepsHeading={stepsHeading}
        whyHeading={whyHeading}
        steps={steps}
        whyPoints={whyPoints}
        faqs={faqs}
        relatedServices={relatedServices}
        allCities={allCities}
      />
    </>
  );
}
