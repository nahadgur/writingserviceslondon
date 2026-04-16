// SERVER COMPONENT — no 'use client'
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/data/services';
import { AREA_HUBS, getAreaHubBySlug } from '@/data/locations';
import { serviceLocationData } from '@/data/serviceLocationData';
import { getAreaContent } from '@/data/areaContent';
import { ServiceLocationClient } from './ServiceLocationClient';
import { siteConfig } from '@/data/site';
import { serviceLocationMeta } from '@/data/serviceLocationMeta';
import type { Metadata } from 'next';

// Unique meta per page — derived from heroHeading + heroParagraph
export async function generateMetadata(
  { params }: { params: { serviceSlug: string; locationSlug: string } }
): Promise<Metadata> {
  const meta = serviceLocationMeta[params.serviceSlug]?.[params.locationSlug];
  if (!meta) return { title: 'Will Writing Services London' };
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
    },
  };
}

// Pre-build all 90 service x location pages at build time
export function generateStaticParams() {
  const params: { serviceSlug: string; locationSlug: string }[] = [];
  for (const service of services) {
    for (const hub of AREA_HUBS) {
      params.push({ serviceSlug: service.slug, locationSlug: hub.slug });
    }
  }
  return params;
}

export default function ServiceLocationPage({ params }: { params: { serviceSlug: string; locationSlug: string } }) {
  const service = getServiceBySlug(params.serviceSlug);
  const hub     = getAreaHubBySlug(params.locationSlug);
  if (!service || !hub) notFound();

  const content = serviceLocationData[service.slug]?.[hub.slug];
  if (!content) notFound();

  const areaContent = getAreaContent(hub.slug);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteConfig.url}/services/${service.slug}/${hub.slug}/#webpage`,
    name: `${service.title} in ${hub.name} -- Free Specialist Matching`,
    description: content.heroParagraph,
    url: `${siteConfig.url}/services/${service.slug}/${hub.slug}/`,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    about: {
      '@type': 'Service',
      name: `${service.title} Referral Service -- ${hub.name}`,
      provider: { '@id': `${siteConfig.url}/#organization` },
      areaServed: { '@type': 'City', name: hub.name },
      serviceType: 'Will Writing Referral and Matching Service',
    },
    mainEntityOfPage: `${siteConfig.url}/services/${service.slug}/${hub.slug}/`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/services/` },
        { '@type': 'ListItem', position: 3, name: service.title, item: `${siteConfig.url}/services/${service.slug}/` },
        { '@type': 'ListItem', position: 4, name: hub.name, item: `${siteConfig.url}/services/${service.slug}/${hub.slug}/` },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServiceLocationClient service={service} hub={hub} content={content} areaContent={areaContent} />
    </>
  );
}
