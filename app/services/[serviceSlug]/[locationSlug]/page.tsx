'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Star, MapPin } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { AREA_HUBS, getAreaHubBySlug } from '@/data/locations';
import { serviceLocationContent } from '@/data/serviceLocationContent';
import { getAreaContent } from '@/data/areaContent';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';

export default function ServiceLocationPage({ params }: { params: { serviceSlug: string; locationSlug: string } }) {
  const [modal, setModal] = useState(false);

  const service = getServiceBySlug(params.serviceSlug);
  const hub     = getAreaHubBySlug(params.locationSlug);
  if (!service || !hub) notFound();

  const cityName    = hub.name;
  const content     = serviceLocationContent[service.id] || serviceLocationContent['single-will'];
  const areaContent = getAreaContent(hub.slug);
  const related     = services.filter(s => s.id !== service.id);
  const nearbyCities = AREA_HUBS.filter(h => h.region === hub.region && h.slug !== hub.slug);

  const heroDesc     = content.heroDesc(cityName);
  const heroBullets  = content.heroBullets(cityName);
  const trustLine    = content.trustLine(cityName);
  const benefits     = content.benefits(cityName);
  const intro        = content.intro(cityName);
  const introHeading = content.introHeading(cityName);
  const stepsHeading = content.stepsHeading(cityName);
  const whyHeading   = content.whyHeading(cityName);
  const steps        = content.steps(cityName);
  const whyPoints    = content.whyPoints(cityName);
  const faqs         = content.faqs(cityName);

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
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} defaultService={service.title} defaultCity={cityName} />
      <Header onOpenModal={() => setModal(true)} />

      <main>
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="hero-dark" style={{ minHeight: 380 }}>
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${service.image}')`, opacity: 0.38 }} />
          <div className="g-bot" />

          <div className="relative z-10 container-width py-12 md:py-16 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 lg:gap-10 items-end">
              <div>
                <Breadcrumbs dark items={[
                  { label: 'Services', href: '/services/' },
                  { label: service.title, href: `/services/${service.slug}/` },
                  { label: cityName },
                ]} />

                <div className="loc-pill mt-5 mb-4">
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--brand)', display: 'inline-block' }} />
                  Will writing specialists in {cityName}
                </div>

                <h1 style={{ ...serif('clamp(34px,5vw,58px)' as any, { color: '#fff', marginBottom: 14 }) }}>
                  {service.title} in{' '}
                  <span style={{ color: 'var(--brand-light)' }}>{cityName}</span>
                </h1>

                {/* Area-specific context paragraph if available */}
                {areaContent?.introParagraphs[0] && (
                  <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 16, fontStyle: 'italic', color: 'rgba(255,255,255,0.55)', maxWidth: 440, lineHeight: 1.6, marginBottom: 12 }}>
                    {areaContent.introParagraphs[0].slice(0, 160)}...
                  </p>
                )}

                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,0.6)', maxWidth: 420, lineHeight: 1.75, marginBottom: 18 }}>
                  {heroDesc}
                </p>

                <div className="flex flex-col gap-2 mb-4">
                  {heroBullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle size={12} style={{ color: 'var(--brand)', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 12, fontWeight: 300, color: 'rgba(255,255,255,0.68)' }}>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} size={11} style={{ fill: 'var(--brand)', color: 'var(--brand)' }} />
                    ))}
                  </div>
                  <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 10, fontWeight: 300, color: 'rgba(255,255,255,0.38)' }}>
                    {trustLine}
                  </span>
                </div>

                <button onClick={() => setModal(true)} className="btn-primary lg:hidden">
                  Find my specialist
                </button>
              </div>

              <div className="hidden lg:block">
                <HeroLeadForm city={cityName} service={service.title} />
              </div>
            </div>
          </div>
        </section>

        {/* Mobile form */}
        <div className="lg:hidden px-5 py-6" style={{ background: 'var(--parchment)', borderBottom: '0.5px solid var(--border)' }}>
          <HeroLeadForm city={cityName} service={service.title} />
        </div>

        {/* ── Benefits row ──────────────────────────────────────── */}
        <div style={{ background: '#fff', borderBottom: '0.5px solid var(--border)' }}>
          <div className="container-width py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--brand)', flexShrink: 0, marginTop: 6 }} />
                <div>
                  <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 12, fontWeight: 500, color: 'var(--ink)', marginBottom: 2 }}>{b.title}</p>
                  <p className="body-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Body ──────────────────────────────────────────────── */}
        <div className="container-width py-14 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-10 lg:gap-14">

            <div>
              {/* Intro — area-specific */}
              <h2 style={serif('clamp(20px,2.5vw,28px)' as any, { marginBottom: 14 })}>{introHeading}</h2>
              <div className="space-y-4 mb-12">
                {intro.map((p, i) => <p key={i} className="body-md">{p}</p>)}
              </div>

              {/* What makes this area distinctive */}
              {areaContent?.whySpecialistMatters && (
                <div className="pull-quote mb-12">
                  <p>{areaContent.whySpecialistMatters}</p>
                </div>
              )}

              {/* Steps */}
              <h2 style={serif('clamp(20px,2.5vw,26px)' as any, { marginBottom: 14 })}>{stepsHeading}</h2>
              <div className="space-y-3 mb-12">
                {steps.map((step, i) => (
                  <div key={i} className="step-row">
                    <span className="step-num">{i + 1}</span>
                    <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 13, fontWeight: 400, color: 'var(--ink)' }}>{step}</p>
                  </div>
                ))}
              </div>

              {/* Why points */}
              <h2 style={serif('clamp(20px,2.5vw,26px)' as any, { marginBottom: 14 })}>{whyHeading}</h2>
              <div className="space-y-2.5 mb-12">
                {whyPoints.map((p, i) => (
                  <div key={i} className="flex items-start gap-3 card-parchment p-4 rounded-md">
                    <CheckCircle size={13} style={{ color: 'var(--brand)', flexShrink: 0, marginTop: 1 }} />
                    <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 13, fontWeight: 400, color: 'var(--ink)' }}>{p}</span>
                  </div>
                ))}
              </div>

              {/* Client profile for this area */}
              {areaContent?.clientProfile && (
                <div className="mb-12">
                  <h2 style={serif('clamp(20px,2.5vw,26px)' as any, { marginBottom: 14 })}>
                    {areaContent.clientProfile.heading}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {areaContent.clientProfile.points.map((p, i) => (
                      <div key={i} className="flex items-start gap-3 card-parchment p-3.5 rounded-md">
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--brand)', flexShrink: 0, marginTop: 7 }} />
                        <span className="body-md">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Nearby areas */}
              {nearbyCities.length > 0 && (
                <div className="mb-12">
                  <h2 style={serif('clamp(20px,2.5vw,26px)' as any, { marginBottom: 12 })}>
                    {service.title} in nearby areas
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {nearbyCities.slice(0, 6).map(h => (
                      <Link key={h.slug} href={`/services/${service.slug}/${h.slug}/`} className="card p-3 group"
                        style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <MapPin size={10} style={{ color: 'var(--brand)', flexShrink: 0 }} />
                        <span style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 14, color: 'var(--ink)', transition: 'color 0.12s' }}
                          className="group-hover:text-brand-500">
                          {h.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <h2 style={serif('clamp(20px,2.5vw,26px)' as any, { marginBottom: 14 })}>What clients say</h2>
              <div className="mb-12">
                <Testimonials limit={2} />
              </div>

              {faqs.length > 0 && (
                <FAQ faqs={faqs} title={`${service.title} in ${cityName} — common questions`} />
              )}
            </div>

            {/* Sidebar */}
            <aside>
              <div className="lg:sticky" style={{ top: 28 }}>
                <div className="sidebar-box">
                  <h3 style={serif(20, { marginBottom: 6 })}>Get matched in {cityName}</h3>
                  <p className="body-sm mb-4">
                    Vetted {service.title.toLowerCase()} specialists covering {cityName}. Free, within 24 hours.
                  </p>
                  <button onClick={() => setModal(true)} className="btn-primary w-full justify-center">
                    Find a specialist
                  </button>
                </div>

                <div className="sidebar-box">
                  <p className="eyebrow mb-2">Typical cost</p>
                  <p style={serif(24, { marginBottom: 3 })}>£150 – £550</p>
                  <p className="body-sm">Fixed-fee quote before work begins</p>
                </div>

                <div className="sidebar-box">
                  <p className="eyebrow mb-3">Other services in {cityName}</p>
                  <div className="space-y-2">
                    {related.slice(0, 4).map(s => (
                      <Link key={s.id} href={`/services/${s.slug}/${params.locationSlug}/`}
                        className="block body-md" style={{ transition: 'color 0.12s' }}>
                        {s.title} in {cityName}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Bottom CTA */}
          <div style={{ background: 'var(--ink)', borderRadius: 8, padding: '40px 36px', textAlign: 'center', marginTop: 24 }}>
            <h2 style={serif('clamp(22px,3vw,34px)' as any, { color: '#fff', marginBottom: 12 })}>
              Get {service.title} advice in {cityName}
            </h2>
            <p className="body-lg mb-6 mx-auto" style={{ maxWidth: 480, color: 'rgba(255,255,255,0.5)' }}>
              Free matching with vetted specialists. No obligation. Within 24 hours.
            </p>
            <button onClick={() => setModal(true)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-inter), sans-serif', fontSize: 13, fontWeight: 500, padding: '13px 28px', borderRadius: 4, border: 'none', cursor: 'pointer' }}>
              Get your free quotes
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
