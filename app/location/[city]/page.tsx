// SERVER COMPONENT — no 'use client'
import { notFound } from 'next/navigation';
import { AREA_HUBS, getAreaHubBySlug } from '@/data/locations';
import { CityPageClient } from './CityPageClient';

export function generateStaticParams() {
  return AREA_HUBS.map(hub => ({ city: hub.slug }));
}

export default function CityPage({ params }: { params: { city: string } }) {
  const hub = getAreaHubBySlug(params.city);
  if (!hub) notFound();
  return <CityPageClient hub={hub} />;
}
