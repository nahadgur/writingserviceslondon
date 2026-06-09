// lib/schema.ts — shared JSON-LD builder functions
import { siteConfig } from '@/data/site';

const ORG_ID = `${siteConfig.url}/#organization`;
export const AUTHOR_ID = `${siteConfig.url}/about/#author`;

// Editorial author entity. Brand byline "WWSL" (Will Writing Services London),
// not an invented person or credentials. Emitted on the About page and
// referenced by @id from guide hubs and blog spokes.
export function editorialAuthorSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': AUTHOR_ID,
    name: 'WWSL',
    alternateName: `${siteConfig.name} editorial team`,
    url: `${siteConfig.url}/about/`,
    parentOrganization: { '@id': ORG_ID },
    description:
      'Editorial team for Will Writing Services London. Legal points are checked against the Wills Act 1837, current HMRC and GOV.UK guidance, and Office of the Public Guardian sources.',
  };
}

// Article schema for hubs and spokes, with the WWSL author @id and dates.
export function articleSchema(opts: {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${opts.url}#article`,
    headline: opts.headline,
    description: opts.description,
    ...(opts.image ? { image: opts.image } : {}),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: { '@id': AUTHOR_ID },
    publisher: { '@id': ORG_ID },
    reviewedBy: { '@id': AUTHOR_ID },
    mainEntityOfPage: opts.url,
    inLanguage: 'en-GB',
  };
}

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
