// SERVER COMPONENT — no 'use client'
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/data/services';
import { AREA_HUBS, getAreaHubBySlug } from '@/data/locations';
import { serviceLocationData } from '@/data/serviceLocationData';
import { getAreaContent } from '@/data/areaContent';
import { ServiceLocationClient } from './ServiceLocationClient';
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

  return <ServiceLocationClient service={service} hub={hub} content={content} areaContent={areaContent} />;
}
