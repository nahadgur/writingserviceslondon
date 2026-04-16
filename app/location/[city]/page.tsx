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
        {/* ── Hero — dark with geometric skyline SVG ─────────── */}
        <section style={{ background: '#1c1814', position: 'relative', overflow: 'hidden', minHeight: 200 }}>

          {/* Decorative skyline — right aligned, low opacity */}
          <svg
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              opacity: 0.15,
              pointerEvents: 'none',
              display: 'block',
            }}
            width="380" height="220" viewBox="0 0 380 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Building 1 — short */}
            <rect x="10"  y="140" width="34" height="80"  fill="white"/>
            <rect x="18"  y="152" width="7"  height="9"   fill="#1c1814"/>
            <rect x="30"  y="152" width="7"  height="9"   fill="#1c1814"/>
            <rect x="18"  y="168" width="7"  height="9"   fill="#1c1814"/>
            <rect x="30"  y="168" width="7"  height="9"   fill="#1c1814"/>

            {/* Building 2 — medium */}
            <rect x="52"  y="100" width="30" height="120" fill="white"/>
            <rect x="59"  y="112" width="6"  height="8"   fill="#1c1814"/>
            <rect x="70"  y="112" width="6"  height="8"   fill="#1c1814"/>
            <rect x="59"  y="128" width="6"  height="8"   fill="#1c1814"/>
            <rect x="70"  y="128" width="6"  height="8"   fill="#1c1814"/>
            <rect x="59"  y="144" width="6"  height="8"   fill="#1c1814"/>
            <rect x="70"  y="144" width="6"  height="8"   fill="#1c1814"/>

            {/* Building 3 — tall */}
            <rect x="90"  y="60"  width="40" height="160" fill="white"/>
            <rect x="99"  y="74"  width="8"  height="10"  fill="#1c1814"/>
            <rect x="113" y="74"  width="8"  height="10"  fill="#1c1814"/>
            <rect x="99"  y="92"  width="8"  height="10"  fill="#1c1814"/>
            <rect x="113" y="92"  width="8"  height="10"  fill="#1c1814"/>
            <rect x="99"  y="110" width="8"  height="10"  fill="#1c1814"/>
            <rect x="113" y="110" width="8"  height="10"  fill="#1c1814"/>
            <rect x="99"  y="128" width="8"  height="10"  fill="#1c1814"/>
            <rect x="113" y="128" width="8"  height="10"  fill="#1c1814"/>
            <rect x="99"  y="146" width="8"  height="10"  fill="#1c1814"/>
            <rect x="113" y="146" width="8"  height="10"  fill="#1c1814"/>

            {/* Building 4 — short wide */}
            <rect x="138" y="128" width="26" height="92"  fill="white"/>
            <rect x="145" y="140" width="5"  height="7"   fill="#1c1814"/>
            <rect x="155" y="140" width="5"  height="7"   fill="#1c1814"/>
            <rect x="145" y="154" width="5"  height="7"   fill="#1c1814"/>
            <rect x="155" y="154" width="5"  height="7"   fill="#1c1814"/>

            {/* Building 5 — medium tall */}
            <rect x="172" y="80"  width="32" height="140" fill="white"/>
            <rect x="180" y="94"  width="6"  height="8"   fill="#1c1814"/>
            <rect x="191" y="94"  width="6"  height="8"   fill="#1c1814"/>
            <rect x="180" y="110" width="6"  height="8"   fill="#1c1814"/>
            <rect x="191" y="110" width="6"  height="8"   fill="#1c1814"/>
            <rect x="180" y="126" width="6"  height="8"   fill="#1c1814"/>
            <rect x="191" y="126" width="6"  height="8"   fill="#1c1814"/>
            <rect x="180" y="142" width="6"  height="8"   fill="#1c1814"/>
            <rect x="191" y="142" width="6"  height="8"   fill="#1c1814"/>

            {/* Building 6 — narrow short */}
            <rect x="212" y="148" width="22" height="72"  fill="white"/>
            <rect x="218" y="158" width="4"  height="6"   fill="#1c1814"/>
            <rect x="226" y="158" width="4"  height="6"   fill="#1c1814"/>

            {/* Building 7 — tallest */}
            <rect x="242" y="40"  width="44" height="180" fill="white"/>
            <rect x="252" y="56"  width="8"  height="10"  fill="#1c1814"/>
            <rect x="266" y="56"  width="8"  height="10"  fill="#1c1814"/>
            <rect x="252" y="74"  width="8"  height="10"  fill="#1c1814"/>
            <rect x="266" y="74"  width="8"  height="10"  fill="#1c1814"/>
            <rect x="252" y="92"  width="8"  height="10"  fill="#1c1814"/>
            <rect x="266" y="92"  width="8"  height="10"  fill="#1c1814"/>
            <rect x="252" y="110" width="8"  height="10"  fill="#1c1814"/>
            <rect x="266" y="110" width="8"  height="10"  fill="#1c1814"/>
            <rect x="252" y="128" width="8"  height="10"  fill="#1c1814"/>
            <rect x="266" y="128" width="8"  height="10"  fill="#1c1814"/>
            <rect x="252" y="146" width="8"  height="10"  fill="#1c1814"/>
            <rect x="266" y="146" width="8"  height="10"  fill="#1c1814"/>

            {/* Building 8 — right edge */}
            <rect x="294" y="110" width="36" height="110" fill="white"/>
            <rect x="303" y="124" width="6"  height="8"   fill="#1c1814"/>
            <rect x="315" y="124" width="6"  height="8"   fill="#1c1814"/>
            <rect x="303" y="140" width="6"  height="8"   fill="#1c1814"/>
            <rect x="315" y="140" width="6"  height="8"   fill="#1c1814"/>
            <rect x="303" y="156" width="6"  height="8"   fill="#1c1814"/>
            <rect x="315" y="156" width="6"  height="8"   fill="#1c1814"/>

            <rect x="338" y="130" width="30" height="90"  fill="white"/>
            <rect x="346" y="142" width="5"  height="7"   fill="#1c1814"/>
            <rect x="357" y="142" width="5"  height="7"   fill="#1c1814"/>
            <rect x="346" y="157" width="5"  height="7"   fill="#1c1814"/>
            <rect x="357" y="157" width="5"  height="7"   fill="#1c1814"/>
          </svg>

          {/* Hero content */}
          <div
            className="container-width"
            style={{ position: 'relative', zIndex: 10, paddingTop: 44, paddingBottom: 52 }}
          >
            {/* Breadcrumb */}
            <div style={{ marginBottom: 20 }}>
              <Breadcrumbs dark items={[{ label: 'Areas', href: '/location/' }, { label: hub.name }]} />
            </div>

            {/* Pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18, flexWrap: 'wrap' as const }}>
              <span style={{
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
              }}>
                {hub.region} London
              </span>
              <span style={{
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
              }}>
                {hub.postcode}
              </span>
            </div>

            {/* H1 — Inter bold, matches screenshot */}
            <h1 style={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: 'clamp(30px, 5vw, 52px)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              marginBottom: 16,
              maxWidth: 620,
            }}>
              Will writing in {hub.name}
            </h1>

            {/* Subtext */}
            <p style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: 14,
              fontWeight: 300,
              color: 'rgba(255,255,255,0.58)',
              lineHeight: 1.65,
              maxWidth: 520,
            }}>
              Free matching with vetted estate planning specialists covering {hub.postcode} and surrounding areas.
            </p>
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

                {/* Desktop form */}
                <div className="hidden lg:block mb-4">
                  <HeroLeadForm city={hub.name} />
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
