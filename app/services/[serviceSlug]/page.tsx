import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/data/services';
import { FAQS_SERVICES, siteConfig } from '@/data/site';
import { ServiceDetailClient } from './ServiceDetailClient';

export function generateStaticParams() {
  return services.map(s => ({ serviceSlug: s.slug }));
}

const titleSuffix: Record<string, string> = {
  'single-will':               'Single Wills in London',
  'mirror-wills':              'Mirror Wills for London Couples',
  'lasting-power-of-attorney': 'Lasting Power of Attorney in London',
  'trust-planning':            'Trust Planning for London Estates',
  'estate-planning':           'Estate Planning Reviews in London',
  'probate-support':           'Probate Support in London',
};

export function generateMetadata({ params }: { params: { serviceSlug: string } }): Metadata {
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) return { title: 'Service not found' };

  const headline = titleSuffix[service.slug] ?? `${service.title} in London`;
  const title = `${headline} | Vetted Specialist Matching`;
  const description = service.description;
  const url = `${siteConfig.url}/services/${service.slug}/`;

  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}/` },
    openGraph: {
      type: 'article',
      url,
      siteName: siteConfig.name,
      title,
      description,
      locale: 'en_GB',
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: { index: true, follow: true },
  };
}

export default function ServicePage({ params }: { params: { serviceSlug: string } }) {
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) notFound();

  const combinedFaqs = [...(service.faqs || []), ...FAQS_SERVICES];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteConfig.url}/services/${service.slug}/#service`,
    name: `${service.title} -- London`,
    description: service.description,
    url: `${siteConfig.url}/services/${service.slug}/`,
    about: {
      '@type': 'Service',
      name: service.title,
      provider: { '@id': `${siteConfig.url}/#organization` },
      areaServed: { '@type': 'City', name: 'London' },
      serviceType: 'Will Writing Referral and Matching Service',
    },
    mainEntityOfPage: `${siteConfig.url}/services/${service.slug}/`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/services/` },
        { '@type': 'ListItem', position: 3, name: service.title, item: `${siteConfig.url}/services/${service.slug}/` },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: combinedFaqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServiceDetailClient service={service} />
    </>
  );
}
