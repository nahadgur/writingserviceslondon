// app/services/[serviceSlug]/page.tsx — SERVER COMPONENT
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import { LOCATIONS } from '@/data/locations';
import { FAQS_SERVICES, siteConfig } from '@/data/site';
import { serviceContent } from '@/data/serviceContent';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';
import ServicePageClient from './ServicePageClient';

interface Props {
  params: { serviceSlug: string };
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map(slug => ({ serviceSlug: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) return {};
  const title = `${service.title} London | Vetted Specialists`;
  const description = service.description;
  const url = `${siteConfig.url}/services/${service.slug}/`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
  };
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) notFound();

  const content = serviceContent[service.id] || serviceContent[services[0].id];
  const relatedServices = services.filter(s => s.id !== service.id);
  const allCities = Object.values(LOCATIONS).flat();
  const combinedFaqs = [...(service.faqs || []), ...FAQS_SERVICES];

  const ldService = serviceSchema({
    name: service.title,
    slug: service.slug,
    description: service.description,
  });
  const ldFaq = faqSchema(combinedFaqs);
  const ldBreadcrumb = breadcrumbSchema([
    { label: 'Services', href: '/services/' },
    { label: service.title },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />
      <ServicePageClient
        service={service}
        content={content}
        relatedServices={relatedServices}
        allCities={allCities}
        combinedFaqs={combinedFaqs}
      />
    </>
  );
}
