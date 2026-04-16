// lib/schema.ts — shared JSON-LD builder functions
import { siteConfig } from '@/data/site';

export function breadcrumbSchema(items: { label: string; href?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      ...items
        .filter(i => i.href)
        .map((item, idx) => ({
          '@type': 'ListItem',
          position: idx + 2,
          name: item.label,
          item: `${siteConfig.url}${item.href}`,
        })),
      // Last item (current page) — no item URL
      ...(() => {
        const last = items[items.length - 1];
        if (last && !last.href) {
          return [{ '@type': 'ListItem', position: items.length + 1, name: last.label }];
        }
        return [];
      })(),
    ],
  };
}

export function serviceSchema({
  name,
  slug,
  description,
  cityName,
}: {
  name: string;
  slug: string;
  description: string;
  cityName?: string;
}) {
  const url = cityName
    ? `${siteConfig.url}/services/${slug}/${citySlug(cityName)}/`
    : `${siteConfig.url}/services/${slug}/`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: cityName ? `${name} in ${cityName}` : name,
    url,
    description,
    provider: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: cityName
      ? { '@type': 'City', name: cityName, containedInPlace: { '@type': 'AdministrativeArea', name: 'London' } }
      : { '@type': 'AdministrativeArea', name: 'London' },
    serviceType: name,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
      description: 'Free matching service — no charge to the client for introductions',
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function locationPageSchema(cityName: string, description: string, serviceTypes: string[]) {
  const slug = citySlug(cityName);
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/location/${slug}/#service`,
    name: `Will Writing Services in ${cityName}`,
    url: `${siteConfig.url}/location/${slug}/`,
    description,
    provider: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
    },
    areaServed: {
      '@type': 'City',
      name: cityName,
      containedInPlace: { '@type': 'AdministrativeArea', name: 'London' },
    },
    serviceType: serviceTypes,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
      description: 'Free matching service',
    },
  };
}

function citySlug(city: string) {
  return city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
