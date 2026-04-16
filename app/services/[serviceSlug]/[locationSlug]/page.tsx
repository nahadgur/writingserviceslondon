// app/services/[serviceSlug]/[locationSlug]/page.tsx — SERVER COMPONENT
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import { AREA_HUBS, getAreaHubBySlug, getAllAreaSlugs } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { serviceLocationContent } from '@/data/serviceLocationContent';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';
import ServiceLocationPageClient from './ServiceLocationPageClient';

interface Props {
  params: { serviceSlug: string; locationSlug: string };
}

export async function generateStaticParams() {
  const params: { serviceSlug: string; locationSlug: string }[] = [];
  for (const serviceSlug of getAllServiceSlugs()) {
    for (const locationSlug of getAllAreaSlugs()) {
      params.push({ serviceSlug, locationSlug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.serviceSlug);
  const hub = getAreaHubBySlug(params.locationSlug);
  if (!service || !hub) return {};

  const content = serviceLocationContent[service.id] || serviceLocationContent['single-will'];
  const description = content.heroDesc(hub.name);
  const title = `${service.title} in ${hub.name} | Vetted Specialists`;
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
  const hub = getAreaHubBySlug(params.locationSlug);
  if (!service || !hub) notFound();

  const content = serviceLocationContent[service.id] || serviceLocationContent['single-will'];
  const cityName = hub.name;

  // Pre-compute everything server-side
  const heroDesc      = content.heroDesc(cityName);
  const heroBullets   = content.heroBullets(cityName);
  const trustLine     = content.trustLine(cityName);
  const benefits      = content.benefits(cityName);
  const intro         = content.intro(cityName);
  const introHeading  = content.introHeading(cityName);
  const stepsHeading  = content.stepsHeading(cityName);
  const whyHeading    = content.whyHeading(cityName);
  const steps         = content.steps(cityName);
  const whyPoints     = content.whyPoints(cityName);
  const faqs          = content.faqs(cityName);

  const relatedServices = services.filter(s => s.id !== service.id);

  // Nearby cities = other hubs in same region
  const nearbyCities = AREA_HUBS
    .filter(h => h.region === hub.region && h.slug !== hub.slug)
    .map(h => h.name);

  const ldService    = serviceSchema({ name: service.title, slug: service.slug, description: heroDesc, cityName });
  const ldFaq        = faqSchema(faqs);
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
        nearbyCities={nearbyCities}
      />
    </>
  );
}
