'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { getAreaHubBySlug } from '@/data/locations';
import { getAreaContent } from '@/data/areaContent';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SubAreasGrid } from '@/components/SubAreasGrid';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';

const areaFaqsFor = (hubName: string, subAreaNames: string[]) => [
  {
    question: `How quickly can I be matched with a will writer covering ${hubName}?`,
    answer: `Most clients are matched within 24 hours. For urgent situations — serious illness, imminent surgery — we prioritise same-day introductions. We cover ${hubName} and all surrounding areas including ${subAreaNames.slice(0, 4).join(', ')}.`,
  },
  {
    question: `Is the matching service free for ${hubName} clients?`,
    answer: `Completely free. You only pay the specialist directly for their work. Our service is funded by the professionals in our network — there is no charge to clients at any stage.`,
  },
  {
    question: `Do will writers offer home visits in ${hubName}?`,
    answer: `Yes. Most specialists in our network offer home visits across ${hubName} and surrounding areas. For elderly clients or those with mobility issues, this is standard practice rather than an exception.`,
  },
  {
    question: `What estate planning services are available in ${hubName}?`,
    answer: `Our network covering ${hubName} includes specialists in single wills, mirror wills, both types of Lasting Power of Attorney, protective property trusts, discretionary trusts, comprehensive estate planning reviews, and probate support.`,
  },
];

export default function CityPage({ params }: { params: { city: string } }) {
  const [modal, setModal] = useState(false);

  const hub     = getAreaHubBySlug(params.city);
  if (!hub) notFound();

  const content = getAreaContent(hub.slug);
  const faqs    = content?.faqOverride ?? areaFaqsFor(hub.name, hub.subAreas.map(s => s.name));

  const serif = (size: number | string, extra?: React.CSSProperties) => ({
    fontFamily: 'var(--font-cormorant), Georgia, serif',
    fontSize: size,
    fontStyle: 'italic' as const,
    fontWeight: 400 as const,
    color: 'var(--ink)',
    lineHeight: 1.18,
    ...extra,
  });

  return (
    <>
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} defaultCity={hub.name} />
      <Header onOpenModal={() => setModal(true)} />

      <main>
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="hero-dark" style={{ minHeight: 340 }}>
          <div className="absolute inset-0" style={{ background: '#18120a' }} />
          <div className="g-bot" />

          <div className="relative z-10 container-width py-12 md:py-14 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 lg:gap-10 items-end">
              <div>
                <Breadcrumbs dark items={[{ label: 'Areas', href: '/location/' }, { label: hub.name }]} />
                <div className="flex items-center gap-2 mt-5 mb-4">
                  <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.36)' }}>
                    {hub.postcode}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.18)', fontSize: 10 }}>&middot;</span>
                  <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.36)' }}>
                    {hub.region} London
                  </span>
                </div>
                <h1 style={{ ...serif('clamp(34px,5vw,56px)' as any, { color: '#fff', marginBottom: 14 }) }}>
                  Will writing in{' '}
                  <span style={{ color: 'var(--brand-light)' }}>{hub.name}</span>
                </h1>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.58)', maxWidth: 440, lineHeight: 1.75, marginBottom: 22 }}>
                  {content?.heroParagraph ?? `Connect with vetted will writers and estate planning specialists covering ${hub.name} and all surrounding areas. Free matching, no obligation.`}
                </p>
                <button onClick={() => setModal(true)} className="btn-primary lg:hidden">
                  Find my specialist
                </button>
              </div>
              <div className="hidden lg:block">
                <HeroLeadForm city={hub.name} />
              </div>
            </div>
          </div>
        </section>

        {/* Mobile form */}
        <div className="lg:hidden px-5 py-6" style={{ background: 'var(--parchment)', borderBottom: '0.5px solid var(--border)' }}>
          <HeroLeadForm city={hub.name} />
        </div>

        {/* ── Body ──────────────────────────────────────────────── */}
        <div className="container-width py-14 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-10 lg:gap-14">

            <div>
              {/* Intro — genuinely unique per area */}
              {content && (
                <section className="mb-12">
                  <h2 style={serif('clamp(22px,2.5vw,30px)' as any, { marginBottom: 14 })}>
                    {content.introHeading}
                  </h2>
                  <div className="space-y-4">
                    {content.introParagraphs.map((p, i) => (
                      <p key={i} className="body-md">{p}</p>
                    ))}
                  </div>
                </section>
              )}

              {/* Sub-areas — the SEO neighbourhood signal */}
              <SubAreasGrid hubName={hub.name} subAreas={hub.subAreas} />

              {/* Why specialist matters — area-specific pull quote */}
              {content?.whySpecialistMatters && (
                <div className="pull-quote mb-12">
                  <p>{content.whySpecialistMatters}</p>
                </div>
              )}

              {/* Services */}
              <section className="mb-12">
                <h2 style={serif('clamp(22px,2.5vw,28px)' as any, { marginBottom: 18 })}>
                  Services available in {hub.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map(s => (
                    <Link key={s.id} href={`/services/${s.slug}/`} className="card group flex gap-3 p-4 items-start">
                      <div style={{ width: 64, height: 52, borderRadius: 5, overflow: 'hidden', flexShrink: 0, background: 'var(--parchment-2)' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={s.image} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 15, color: 'var(--ink)', marginBottom: 3, transition: 'color 0.12s', lineHeight: 1.2 }}
                          className="group-hover:text-brand-500">
                          {s.title} in {hub.name}
                        </h3>
                        <p className="body-sm line-clamp-2">{s.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Who we match — area-specific */}
              {content?.clientProfile && (
                <section className="mb-12">
                  <h2 style={serif('clamp(22px,2.5vw,28px)' as any, { marginBottom: 14 })}>
                    {content.clientProfile.heading}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {content.clientProfile.points.map((p, i) => (
                      <div key={i} className="flex items-start gap-3 card-parchment p-3.5 rounded-md">
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--brand)', flexShrink: 0, marginTop: 7 }} />
                        <span className="body-md">{p}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Common triggers */}
              {content?.commonTriggers && content.commonTriggers.length > 0 && (
                <section className="mb-12">
                  <h2 style={serif('clamp(22px,2.5vw,28px)' as any, { marginBottom: 10 })}>
                    When {hub.name} residents get in touch
                  </h2>
                  <p className="body-md mb-5">Estate planning conversations here are usually triggered by one of these moments:</p>
                  <div className="space-y-2.5">
                    {content.commonTriggers.map((t, i) => (
                      <div key={i} className="step-row">
                        <span className="step-num">{i + 1}</span>
                        <p className="body-md">{t}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Local context */}
              {content?.localContext && (
                <div className="flex gap-3 p-5 card-parchment rounded-md mb-12">
                  <span style={{ width: 2, background: 'var(--brand)', borderRadius: 1, flexShrink: 0, minHeight: 40 }} />
                  <p className="body-md leading-relaxed">{content.localContext}</p>
                </div>
              )}

              <h2 style={serif('clamp(22px,2.5vw,28px)' as any, { marginBottom: 14 })}>What our clients say</h2>
              <div className="mb-12">
                <Testimonials limit={3} />
              </div>

              <FAQ faqs={faqs} title={`Will writing in ${hub.name} — your questions`} />
            </div>

            {/* Sidebar */}
            <aside>
              <div className="lg:sticky" style={{ top: 28 }}>
                <div className="sidebar-box">
                  <h3 style={serif(20, { marginBottom: 6 })}>Find a specialist</h3>
                  <p className="body-sm mb-4">
                    Free match with vetted will writers covering {hub.name} and all surrounding areas.
                  </p>
                  <button onClick={() => setModal(true)} className="btn-primary w-full justify-center">
                    Get matched free
                  </button>
                  <ul className="mt-4 space-y-1.5 pt-4" style={{ borderTop: '0.5px solid var(--border)' }}>
                    {['Matched within 24 hours', 'Vetted and insured specialists', 'Free to all clients'].map((p, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--brand)', flexShrink: 0 }} />
                        <span className="body-sm">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Postcodes */}
                <div className="sidebar-box">
                  <p className="eyebrow mb-3">Postcodes covered</p>
                  <div className="space-y-1.5">
                    {hub.subAreas.map(a => (
                      <div key={a.name} className="flex items-center gap-2">
                        <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(212,105,25,0.4)', flexShrink: 0 }} />
                        <span className="body-sm">
                          {a.postcode && <span style={{ fontWeight: 500, color: 'var(--ink)' }}>{a.postcode}</span>}
                          {a.postcode && ' · '}{a.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="sidebar-dark p-5 rounded-lg">
                  <p style={serif(20, { color: '#fff', marginBottom: 4 })}>From £150</p>
                  <p className="body-sm mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>Fixed-fee quotes, no hidden costs.</p>
                  <button onClick={() => setModal(true)}
                    style={{ width: '100%', background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-inter), sans-serif', fontSize: 12, fontWeight: 500, padding: '10px', borderRadius: 4, border: 'none', cursor: 'pointer' }}>
                    Get free quotes
                  </button>
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
            <button onClick={() => setModal(true)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-inter), sans-serif', fontSize: 13, fontWeight: 500, padding: '13px 28px', borderRadius: 4, border: 'none', cursor: 'pointer' }}>
              Get your free match
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
