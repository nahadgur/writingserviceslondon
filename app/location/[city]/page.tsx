// SERVER COMPONENT — no 'use client'
//
// 2026-05-04 deepening: previously rendered only sub-areas grid +
// service cards + FAQ, leaving 600+ lines of rich data unused in
// areaContent.ts and locationProfiles.ts. Now surfaces:
//   - areaContent.heroParagraph + introParagraphs (local intro)
//   - areaContent.whySpecialistMatters
//   - areaContent.clientProfile + locationProfiles.clientMix
//   - areaContent.commonTriggers (when people engage this service)
//   - locationProfiles.estateProfile + planningNeeds
//   - areaContent.localContext
//   - areaContent.faqOverride when present
//
// Also fixed dead combo links: services grid now links to
// /services/{slug}/ (combo route was removed in the same commit).
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import { AREA_HUBS, getAreaHubBySlug } from '@/data/locations';
import { areaContent } from '@/data/areaContent';
import { locationProfiles } from '@/data/locationProfiles';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';
import { siteConfig } from '@/data/site';

export function generateStaticParams() {
  return AREA_HUBS.map(hub => ({ city: hub.slug }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const hub = getAreaHubBySlug(params.city);
  if (!hub) return { title: 'Area not found' };

  const title = `Will Writers in ${hub.name} ${hub.postcode} | Vetted London Specialists`;
  const description = `Free matching with vetted will writers and estate planning specialists covering ${hub.name} (${hub.postcode}) and surrounding areas including ${hub.subAreas.slice(0, 3).map(a => a.name).join(', ')}. Most introductions within 24 hours.`;
  const url = `${siteConfig.url}/location/${hub.slug}/`;

  return {
    title,
    description,
    alternates: { canonical: `/location/${hub.slug}/` },
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

const serif = (size: number | string, extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: 'var(--font-cormorant), Georgia, serif',
  fontSize: size,
  fontStyle: 'italic',
  fontWeight: 400,
  color: 'var(--ink)',
  lineHeight: 1.15,
  ...extra,
});

function buildFaqs(hubName: string, subAreaNames: string[]) {
  return [
    {
      question: `How quickly can I be matched with a will writer covering ${hubName}?`,
      answer: `Most clients are matched within 24 hours. For urgent situations we can often arrange same-day introductions. We cover ${hubName} and all surrounding areas including ${subAreaNames.slice(0, 4).join(', ')}.`,
    },
    {
      question: `Is the matching service free for ${hubName} clients?`,
      answer: `Completely free. You only pay the specialist directly for their work. Our service is funded by the professionals in our network — no charge to clients at any stage.`,
    },
    {
      question: `Do will writers offer home visits in ${hubName}?`,
      answer: `Yes. Most specialists in our network offer home visits across ${hubName} and surrounding areas. For elderly clients or those with mobility issues this is standard practice.`,
    },
    {
      question: `What estate planning services are available in ${hubName}?`,
      answer: `Our network covering ${hubName} includes specialists in single wills, mirror wills, both types of Lasting Power of Attorney, protective property trusts, discretionary trusts, estate planning reviews, and probate support.`,
    },
  ];
}

export default function CityPage({ params }: { params: { city: string } }) {
  const hub = getAreaHubBySlug(params.city);
  if (!hub) notFound();

  // Optional rich-content modules. Both files cover most but not all
  // hubs — the page degrades gracefully when an entry is missing.
  const ac = areaContent[hub.slug];
  const lp = locationProfiles[hub.slug];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteConfig.url}/location/${hub.slug}/#webpage`,
    name: `Will Writing Referral Service -- ${hub.name}`,
    description: `Free matching with vetted will writers and estate planning specialists covering ${hub.name} and surrounding areas including ${hub.subAreas.slice(0, 3).map(a => a.name).join(', ')}.`,
    url: `${siteConfig.url}/location/${hub.slug}/`,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    about: {
      '@type': 'Service',
      name: `Will Writing Referral Service -- ${hub.name}`,
      provider: { '@id': `${siteConfig.url}/#organization` },
      areaServed: { '@type': 'City', name: hub.name, containedInPlace: { '@type': 'City', name: 'London' } },
      serviceType: 'Will Writing Referral and Matching Service',
    },
    mainEntityOfPage: `${siteConfig.url}/location/${hub.slug}/`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Areas', item: `${siteConfig.url}/location/` },
        { '@type': 'ListItem', position: 3, name: hub.name, item: `${siteConfig.url}/location/${hub.slug}/` },
      ],
    },
  };

  const faqs = ac?.faqOverride ?? buildFaqs(hub.name, hub.subAreas.map(s => s.name));
  const nearbyHubs = AREA_HUBS.filter(h => h.region === hub.region && h.slug !== hub.slug);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  // H1 + hero subhead — prefer richer copy from areaContent when available.
  const heroH1 = ac?.heroHeading ?? `Will writing in ${hub.name}`;
  const heroSubhead = ac?.heroParagraph
    ?? `Free matching with vetted estate planning specialists covering ${hub.postcode} and surrounding areas.`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <main id="main-content">
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section style={{ background: '#1c1814', position: 'relative', overflow: 'hidden', minHeight: 200 }}>
          <div className="container-width" style={{ position: 'relative', zIndex: 10, paddingTop: 44, paddingBottom: 52 }}>
            <div style={{ marginBottom: 20 }}>
              <Breadcrumbs dark items={[{ label: 'Areas', href: '/location/' }, { label: hub.name }]} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18, flexWrap: 'wrap' as const }}>
              {[hub.region + ' London', hub.postcode].map((label, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: 'rgba(212,105,25,0.18)',
                    border: '0.5px solid rgba(212,105,25,0.45)',
                    color: '#e8943a',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    padding: '5px 14px',
                    borderRadius: 20,
                  }}
                >
                  {label}
                </span>
              ))}
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(34px, 5vw, 58px)',
                fontWeight: 400,
                color: '#ffffff',
                lineHeight: 1.08,
                letterSpacing: '-0.01em',
                marginBottom: 16,
                maxWidth: 720,
              }}
            >
              {heroH1}
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: 15,
                fontWeight: 300,
                color: 'rgba(255,255,255,0.66)',
                lineHeight: 1.7,
                maxWidth: 640,
              }}
            >
              {heroSubhead}
            </p>

            {/* Local one-liner from locationProfiles when available */}
            {lp && (
              <p
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: 16,
                  color: 'rgba(232,148,58,0.85)',
                  marginTop: 18,
                  maxWidth: 640,
                  lineHeight: 1.5,
                }}
              >
                {lp.character}
              </p>
            )}
          </div>
        </section>

        {/* Mobile form */}
        <div className="lg:hidden px-5 py-6" style={{ background: 'var(--parchment)', borderBottom: '0.5px solid var(--border)' }}>
          <HeroLeadForm city={hub.name} />
        </div>

        {/* ── Trust strip ──────────────────────────────────────── */}
        <div className="trust-strip">
          {[
            { head: 'Matched in 24 hours',     body: 'A relevant introduction, not a list' },
            { head: 'Every specialist vetted', body: 'Qualifications and insurance checked' },
            { head: 'Free to all clients',     body: 'Paid by our network, never by you' },
            { head: 'Home visits available',   body: 'Most specialists will come to you' },
          ].map((t, i) => (
            <div key={i} className="trust-item">
              <p className="trust-head">{t.head}</p>
              <p className="trust-body">{t.body}</p>
            </div>
          ))}
        </div>

        {/* ── Body ──────────────────────────────────────────────── */}
        <div className="container-width py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-14">

            <div>
              {/* Local intro — from areaContent.introParagraphs */}
              {ac && ac.introParagraphs.length > 0 && (
                <section className="mb-12">
                  <h2 style={serif('clamp(22px,3vw,32px)' as any, { marginBottom: 16 })}>
                    {ac.introHeading}
                  </h2>
                  <div className="space-y-4">
                    {ac.introParagraphs.map((p, i) => (
                      <p key={i} className="body-md">{p}</p>
                    ))}
                  </div>
                </section>
              )}

              {/* Why specialist matters here */}
              {ac?.whySpecialistMatters && (
                <section className="mb-12">
                  <div
                    className="card-parchment p-6"
                    style={{ borderLeft: '3px solid var(--brand)' }}
                  >
                    <p className="eyebrow mb-3" style={{ color: 'var(--brand)' }}>Why a specialist matters here</p>
                    <p className="body-md" style={{ fontStyle: 'italic', color: 'var(--ink)' }}>
                      {ac.whySpecialistMatters}
                    </p>
                  </div>
                </section>
              )}

              {/* Estate profile band — from locationProfiles */}
              {lp && (
                <section className="mb-12">
                  <h2 style={serif('clamp(20px,2.5vw,26px)' as any, { marginBottom: 16 })}>
                    What estates in {hub.name} typically look like
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="card-parchment p-5">
                      <p className="eyebrow mb-2" style={{ color: 'var(--brand)' }}>Estate profile</p>
                      <p className="body-md" style={{ lineHeight: 1.65 }}>{lp.estateProfile}</p>
                    </div>
                    <div className="card-parchment p-5">
                      <p className="eyebrow mb-2" style={{ color: 'var(--brand)' }}>Planning needs</p>
                      <p className="body-md" style={{ lineHeight: 1.65 }}>{lp.planningNeeds}</p>
                    </div>
                  </div>
                  {lp.marketContext && (
                    <p className="body-md mt-5" style={{ color: 'var(--stone)' }}>
                      {lp.marketContext}
                    </p>
                  )}
                </section>
              )}

              {/* Who we match here */}
              {ac?.clientProfile && (
                <section className="mb-12">
                  <h2 style={serif('clamp(20px,2.5vw,26px)' as any, { marginBottom: 16 })}>
                    {ac.clientProfile.heading}
                  </h2>
                  <div className="card-parchment p-6">
                    <ul className="space-y-3">
                      {ac.clientProfile.points.map((p, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--brand)', flexShrink: 0, marginTop: 8 }} />
                          <span className="body-md">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}

              {/* Common triggers */}
              {ac?.commonTriggers && ac.commonTriggers.length > 0 && (
                <section className="mb-12">
                  <h2 style={serif('clamp(20px,2.5vw,26px)' as any, { marginBottom: 12 })}>
                    Why people in {hub.name} engage us
                  </h2>
                  <p className="body-md mb-5">
                    The most common triggers we see for {hub.name} clients starting estate planning:
                  </p>
                  <ul className="space-y-2">
                    {ac.commonTriggers.map((t, i) => (
                      <li
                        key={i}
                        style={{
                          background: 'var(--parchment-2)',
                          border: '0.5px solid var(--border)',
                          borderRadius: 6,
                          padding: '12px 16px',
                        }}
                      >
                        <span className="body-md">{t}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Sub-areas */}
              <section className="mb-12">
                <h2 style={serif('clamp(20px,2.5vw,28px)' as any, { marginBottom: 10 })}>
                  Areas we cover around {hub.name}
                </h2>
                <p className="body-md mb-5">
                  Our will writers serve clients across {hub.name} and all surrounding
                  neighbourhoods — including {hub.subAreas.slice(0, 3).map(s => s.name).join(', ')} and beyond.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 mb-5">
                  {hub.subAreas.map(a => (
                    <div key={a.name} className="subarea-item">
                      <p className="subarea-name">{a.name}</p>
                      {a.postcode && <p className="subarea-post">{a.postcode}</p>}
                      {a.note && (
                        <p
                          style={{
                            fontFamily: 'var(--font-inter), sans-serif',
                            fontSize: 11,
                            fontWeight: 300,
                            color: 'var(--stone)',
                            marginTop: 4,
                            lineHeight: 1.45,
                          }}
                        >
                          {a.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Services available — links to /services/{slug}/ NOT combo */}
              <section className="mb-12">
                <h2 style={serif('clamp(20px,2.5vw,26px)' as any, { marginBottom: 16 })}>
                  Services available in {hub.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map(s => (
                    <Link key={s.id} href={`/services/${s.slug}/`} className="card group flex gap-3 p-4 items-start">
                      <div style={{ width: 64, height: 52, borderRadius: 5, overflow: 'hidden', flexShrink: 0, background: 'var(--parchment-2)', position: 'relative' }}>
                        <Image src={s.image} alt={s.title} fill sizes="64px" className="object-cover" />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <h3
                          style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 15, color: 'var(--ink)', marginBottom: 3, transition: 'color 0.12s', lineHeight: 1.2 }}
                          className="group-hover:text-brand-500"
                        >
                          {s.title}
                        </h3>
                        <p className="body-sm line-clamp-2">{s.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Local context — closing prose */}
              {ac?.localContext && (
                <section className="mb-12">
                  <div
                    style={{
                      background: 'var(--parchment-2)',
                      border: '0.5px solid var(--border)',
                      borderRadius: 8,
                      padding: '24px 28px',
                    }}
                  >
                    <p className="eyebrow mb-3">{hub.name} in context</p>
                    <p className="body-md" style={{ lineHeight: 1.75, color: 'var(--ink)' }}>
                      {ac.localContext}
                    </p>
                  </div>
                </section>
              )}

              {/* Nearby hubs */}
              {nearbyHubs.length > 0 && (
                <section className="mb-12">
                  <h2 style={serif('clamp(20px,2.5vw,26px)' as any, { marginBottom: 12 })}>
                    Nearby areas we cover
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {nearbyHubs.map(h => (
                      <Link
                        key={h.slug}
                        href={`/location/${h.slug}/`}
                        className="card p-3 group"
                        style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                      >
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--brand)', flexShrink: 0 }} />
                        <span
                          style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 15, color: 'var(--ink)', transition: 'color 0.12s' }}
                          className="group-hover:text-brand-500"
                        >
                          {h.name}
                        </span>
                        <span className="body-sm ml-auto">{h.postcode}</span>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              <FAQ faqs={faqs} title={`Will writing in ${hub.name} — your questions`} />
            </div>

            {/* Sidebar */}
            <aside>
              <div className="lg:sticky" style={{ top: 28 }}>

                {/* Desktop form */}
                <div className="hidden lg:block mb-4">
                  <HeroLeadForm city={hub.name} />
                </div>

                {/* Client mix from locationProfiles */}
                {lp && lp.clientMix.length > 0 && (
                  <div className="sidebar-box">
                    <p className="eyebrow mb-3">Who we typically match in {hub.name}</p>
                    <ul className="space-y-1.5">
                      {lp.clientMix.slice(0, 5).map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(212,105,25,0.6)', flexShrink: 0, marginTop: 7 }} />
                          <span className="body-sm" style={{ textTransform: 'capitalize' }}>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="sidebar-box">
                  <p className="eyebrow mb-3">Postcodes covered</p>
                  <div className="space-y-1.5">
                    {hub.subAreas.map(a => (
                      <div key={a.name} className="flex items-center gap-2">
                        <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(212,105,25,0.5)', flexShrink: 0 }} />
                        <span className="body-sm">
                          {a.postcode && <span style={{ fontWeight: 500, color: 'var(--ink)' }}>{a.postcode}</span>}
                          {a.postcode && ' · '}{a.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: 'var(--ink)', borderRadius: 8, padding: '20px 18px' }}>
                  <p style={serif(20, { color: '#fff', marginBottom: 4 })}>From £150</p>
                  <p className="body-sm mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>Fixed-fee quotes, no hidden costs.</p>
                  <a
                    href="#get-matched"
                    style={{ display: 'block', textAlign: 'center', textDecoration: 'none', background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-inter), sans-serif', fontSize: 12, fontWeight: 500, padding: '10px', borderRadius: 4 }}
                  >
                    Get free quotes
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* Bottom CTA */}
          <div style={{ background: 'var(--ink)', borderRadius: 8, padding: '40px 36px', textAlign: 'center', marginTop: 24 }}>
            <h2 style={serif('clamp(22px,3vw,34px)' as any, { color: '#fff', marginBottom: 12 })}>
              Find a will writing specialist in {hub.name}
            </h2>
            <p className="body-lg mb-6 mx-auto" style={{ maxWidth: 500, color: 'rgba(255,255,255,0.5)' }}>
              Free matching covering {hub.name}, {hub.subAreas.slice(0, 3).map(s => s.name).join(', ')}, and all surrounding areas.
            </p>
            <a
              href="#get-matched"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-inter), sans-serif', fontSize: 13, fontWeight: 500, padding: '13px 28px', borderRadius: 4 }}
            >
              Get your free match
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
