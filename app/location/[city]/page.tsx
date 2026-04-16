// app/location/[city]/page.tsx — SERVER COMPONENT
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAreaHubBySlug, getAllAreaSlugs } from '@/data/locations';
import { getAreaContent } from '@/data/areaContent';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';
import { locationPageSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';
import CityPageClient from './CityPageClient';

interface Props {
  params: { city: string };
}

export async function generateStaticParams() {
  return getAllAreaSlugs().map(slug => ({ city: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const hub = getAreaHubBySlug(params.city);
  if (!hub) return {};

  const content = getAreaContent(hub.slug);
  const title = `Will Writing Services ${hub.name} | Estate Planning Specialists`;

  // Fix: ?? can't follow a non-nullable expression — compute description explicitly
  const description = content
    ? content.heroParagraph.slice(0, 155) + '...'
    : `Connect with vetted will writers and estate planning specialists covering ${hub.name} and surrounding areas.`;

  const url = `${siteConfig.url}/location/${hub.slug}/`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
  };
}

export default function CityPage({ params }: Props) {
  const hub = getAreaHubBySlug(params.city);
  if (!hub) notFound();

  const content = getAreaContent(hub.slug);

  const areaFaqs = content?.faqOverride ?? [
    {
      question: `How quickly can I be matched with a will writer covering ${hub.name}?`,
      answer: `Most clients covering ${hub.name} and surrounding areas including ${hub.subAreas.slice(0, 3).map(s => s.name).join(', ')} are matched within 24 hours. For urgent situations we prioritise same-day introductions.`,
    },
    {
      question: `Do will writers cover all the areas around ${hub.name}?`,
      answer: `Yes. Our network covers ${hub.name} and all surrounding neighbourhoods including ${hub.subAreas.map(s => s.name).join(', ')}. Many specialists offer home visits, so your postcode is rarely a limiting factor.`,
    },
    {
      question: `Is the matching service free for ${hub.name} clients?`,
      answer: `The matching service is completely free. You only pay the specialist directly for their work once introduced. Our service is funded by the professionals in our network.`,
    },
    {
      question: `What estate planning services are available in ${hub.name}?`,
      answer: `Our network covering ${hub.name} includes specialists in single wills, mirror wills, both types of Lasting Power of Attorney, protective property trusts, discretionary trusts, comprehensive estate planning reviews, and probate support.`,
    },
  ];

  const descriptionForSchema = content
    ? content.heroParagraph
    : `Free matching service connecting ${hub.name} residents with vetted will writers.`;

  const ldLocation = locationPageSchema(
    hub.name,
    descriptionForSchema,
    ['Will Writing', 'Mirror Wills', 'Lasting Power of Attorney', 'Trust Planning', 'Estate Planning', 'Probate Support']
  );
  const ldFaq = faqSchema(areaFaqs);
  const ldBreadcrumb = breadcrumbSchema([
    { label: 'Areas', href: '/location/' },
    { label: hub.name },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldLocation) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />
      <CityPageClient
        hub={hub}
        content={content}
        services={services}
        areaFaqs={areaFaqs}
      />
    </>
  );
}
