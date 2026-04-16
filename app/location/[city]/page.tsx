// SERVER COMPONENT — no 'use client'
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services } from '@/data/services';
import { AREA_HUBS, getAreaHubBySlug } from '@/data/locations';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';

// Pre-build all hub pages at deploy time (fixes dynamic-route 404s)
export function generateStaticParams() {
  return AREA_HUBS.map(hub => ({ city: hub.slug }));
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

  const faqs = buildFaqs(hub.name, hub.subAreas.map(s => s.name));
  const nearbyHubs = AREA_HUBS.filter(h => h.region === hub.region && h.slug !== hub.slug);

  return (
    <>
      <Header />

      <main>
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="hero-dark" style={{ minHeight: 320 }}>
          <div className="absolute inset-0" style={{ background: '#18120a' }} />
          <div className="g-bot" />

          <div className="relative z-10 container-width py-12 md:py-14 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 lg:gap-10 items-end">
              <div>
                <Breadcrumbs dark items={[{ label: 'Areas', href: '/location/' }, { label: hub.name }]} />
                <div className="flex items-center gap-2 mt-4 mb-4">
                  <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.4)' }}>
                    {hub.postcode}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 10 }}>&middot;</span>
                  <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.4)' }}>
                    {hub.region} London
                  </span>
                </div>
                <h1 style={{ ...serif('clamp(34px,5vw,56px)' as any, { color: '#fff', marginBottom: 14 }) }}>
                  Will writing in{' '}
                  <span style={{ color: '#e8943a' }}>{hub.name}</span>
                </h1>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.6)', maxWidth: 440, lineHeight: 1.75, marginBottom: 22 }}>
                  Free matching with vetted will writers and estate planning specialists
                  covering {hub.name} and all surrounding areas. Within 24 hours.
                </p>
                <a href="#get-matched" className="btn-primary lg:hidden">
                  Find my specialist
                </a>
              </div>
              <div id="get-matched" className="hidden lg:block">
                <HeroLeadForm city={hub.name} />
              </div>
            </div>
          </div>
        </section>

        {/* Mobile form (also serves as anchor target on mobile) */}
        <div id="get-matched-mobile" className="lg:hidden px-5 py-6" style={{ background: 'var(--parchment)', borderBottom: '0.5px solid var(--border)' }}>
          <HeroLeadForm city={hub.name} />
        </div>

        {/* ── Body ──────────────────────────────────────────────── */}
        <div className="container-width py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-10 lg:gap-14">

            <div>
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
                    </div>
                  ))}
                </div>
              </section>

              {/* Services */}
              <section className="mb-12">
                <h2 style={serif('clamp(20px,2.5vw,26px)' as any, { marginBottom: 16 })}>
                  Services available in {hub.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map(s => (
                    <Link key={s.id} href={`/services/${s.slug}/${hub.slug}/`} className="card group flex gap-3 p-4 items-start">
                      <div style={{ width: 64, height: 52, borderRadius: 5, overflow: 'hidden', flexShrink: 0, background: 'var(--parchment-2)' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={s.image} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <h3
                          style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 15, color: 'var(--ink)', marginBottom: 3, transition: 'color 0.12s', lineHeight: 1.2 }}
                          className="group-hover:text-brand-500"
                        >
                          {s.title} in {hub.name}
                        </h3>
                        <p className="body-sm line-clamp-2">{s.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

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
                <div className="sidebar-box">
                  <h3 style={serif(20, { marginBottom: 6 })}>Find a specialist</h3>
                  <p className="body-sm mb-4">
                    Free match with vetted will writers covering {hub.name} and surrounding areas.
                  </p>
                  <a href="#get-matched" className="btn-primary w-full justify-center">
                    Get matched free
                  </a>
                  <ul className="mt-4 space-y-1.5 pt-4" style={{ borderTop: '0.5px solid var(--border)' }}>
                    {['Matched within 24 hours', 'Vetted and insured', 'Free to all clients'].map((p, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--brand)', flexShrink: 0 }} />
                        <span className="body-sm">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

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
                    style={{ display: 'block', textAlign: 'center', textDecoration: 'none', width: '100%', background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-inter), sans-serif', fontSize: 12, fontWeight: 500, padding: '10px', borderRadius: 4, border: 'none', cursor: 'pointer' }}
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
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-inter), sans-serif', fontSize: 13, fontWeight: 500, padding: '13px 28px', borderRadius: 4, border: 'none', cursor: 'pointer' }}
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
