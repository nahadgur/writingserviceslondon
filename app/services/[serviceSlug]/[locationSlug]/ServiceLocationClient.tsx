'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Star, MapPin } from 'lucide-react';
import type { Service } from '@/data/services';
import type { AreaHub } from '@/data/locations';
import type { ServiceLocationContent } from '@/data/serviceLocationData';
import type { AreaContent } from '@/data/areaContent';
import { services } from '@/data/services';
import { AREA_HUBS } from '@/data/locations';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';

interface Props {
  service: Service;
  hub: AreaHub;
  content: ServiceLocationContent;
  areaContent: AreaContent | undefined;
}

export function ServiceLocationClient({ service, hub, content, areaContent }: Props) {
  const [modal, setModal] = useState(false);

  const cityName    = hub.name;
  const related     = services.filter(s => s.id !== service.id);
  const nearbyCities = AREA_HUBS.filter(h => h.region === hub.region && h.slug !== hub.slug);

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
                  {service.title} specialists in {cityName}
                </div>

                <h1 style={{ ...serif('clamp(30px,4.5vw,52px)' as any, { color: '#fff', marginBottom: 14 }) }}>
                  {content.heroHeading}
                </h1>

                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,0.65)', maxWidth: 480, lineHeight: 1.75, marginBottom: 18 }}>
                  {content.heroParagraph}
                </p>

                <div className="flex flex-col gap-2 mb-4">
                  {content.heroBullets.map((b, i) => (
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
                    Vetted {service.title.toLowerCase()} specialists across {cityName}
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

        {/* ── Body ──────────────────────────────────────────────── */}
        <div className="container-width py-14 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-10 lg:gap-14">

            <div>
              {/* Intro — area+service specific */}
              <h2 style={serif('clamp(20px,2.5vw,28px)' as any, { marginBottom: 14 })}>{content.introH2}</h2>
              <div className="space-y-4 mb-12">
                {content.introParagraphs.map((p, i) => <p key={i} className="body-md">{p}</p>)}
              </div>

              {/* Area-specific insight */}
              <h2 style={serif('clamp(20px,2.5vw,26px)' as any, { marginBottom: 14 })}>{content.areaSpecificH2}</h2>
              <div className="pull-quote mb-12">
                <p>{content.areaSpecificParagraph}</p>
              </div>

              {/* Who is it for */}
              <h2 style={serif('clamp(20px,2.5vw,26px)' as any, { marginBottom: 14 })}>{content.whoIsItForH2}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-12">
                {content.whoIsItFor.map((p, i) => (
                  <div key={i} className="flex items-start gap-3 card-parchment p-3.5 rounded-md">
                    <CheckCircle size={13} style={{ color: 'var(--brand)', flexShrink: 0, marginTop: 1 }} />
                    <span className="body-md">{p}</span>
                  </div>
                ))}
              </div>

              {/* Process */}
              <h2 style={serif('clamp(20px,2.5vw,26px)' as any, { marginBottom: 14 })}>{content.processH2}</h2>
              <div className="space-y-3 mb-12">
                {[
                  `Free initial consultation to discuss your ${cityName} situation and objectives`,
                  `Specialist matched to your service need and area profile within 24 hours`,
                  `Detailed instructions gathered, draft prepared, and review arranged on your schedule`,
                  `Final document signed, witnessed, and stored with guidance on periodic review`,
                ].map((step, i) => (
                  <div key={i} className="step-row">
                    <span className="step-num">{i + 1}</span>
                    <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 13, fontWeight: 400, color: 'var(--ink)' }}>{step}</p>
                  </div>
                ))}
              </div>

              {/* Area client profile */}
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

              {content.faqs.length > 0 && (
                <FAQ faqs={content.faqs} title={`${service.title} in ${cityName} — common questions`} />
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
                  <p className="eyebrow mb-3">Will writing in {cityName}</p>
                  <Link href={`/location/${hub.slug}/`}
                    style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 15, color: 'var(--stone)', textDecoration: 'none', lineHeight: 1.4, display: 'block', transition: 'color 0.12s' }}
                    className="hover:text-brand-500">
                    All estate planning services in {cityName} →
                  </Link>
                </div>

                <div className="sidebar-box">
                  <p className="eyebrow mb-3">Other services in {cityName}</p>
                  <div className="space-y-2">
                    {related.slice(0, 4).map(s => (
                      <Link key={s.id} href={`/services/${s.slug}/${hub.slug}/`}
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
            <p className="body-lg mb-6 mx-auto" style={{ maxWidth: 560, color: 'rgba(255,255,255,0.55)' }}>
              {content.ctaParagraph}
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
