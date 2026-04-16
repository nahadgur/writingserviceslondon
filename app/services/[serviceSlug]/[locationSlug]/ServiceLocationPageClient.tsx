'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Star } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import type { Service } from '@/data/services';

interface Props {
  service: Service;
  cityName: string;
  locationSlug: string;
  heroDesc: string;
  heroBullets: string[];
  trustLine: string;
  benefits: { title: string; desc: string }[];
  intro: string[];
  introHeading: string;
  stepsHeading: string;
  whyHeading: string;
  steps: string[];
  whyPoints: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: Service[];
  nearbyCities: string[];
}

export default function ServiceLocationPageClient({
  service, cityName, locationSlug,
  heroDesc, heroBullets, trustLine,
  benefits, intro, introHeading,
  stepsHeading, whyHeading, steps, whyPoints, faqs,
  relatedServices, nearbyCities,
}: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultService={service.title} defaultCity={cityName} />
      <Header onOpenModal={() => setModalOpen(true)} />

      <main>
        {/* ── Hero ──────────────────────────────────── */}
        <section className="hero-dark min-h-[380px] flex items-end">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${service.image}')`, opacity: 0.4 }}
          />
          <div className="hero-gradient-bottom" />

          <div className="relative z-10 container-width w-full py-14">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-end">
              <div>
                <Breadcrumbs
                  dark
                  items={[
                    { label: 'Services', href: '/services/' },
                    { label: service.title, href: `/services/${service.slug}/` },
                    { label: cityName },
                  ]}
                />
                <div className="location-pill mt-5 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand inline-block" />
                  Will writing specialists in {cityName}
                </div>
                <h1 className="font-display text-5xl lg:text-6xl italic text-white mb-4 leading-tight">
                  {service.title} in{' '}
                  <span className="text-brand-light">{cityName}</span>
                </h1>
                <p className="body-lg text-white/60 max-w-[420px] mb-5">{heroDesc}</p>
                <div className="flex flex-col gap-2 mb-4">
                  {heroBullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle size={13} className="text-brand flex-shrink-0" />
                      <span className="body-md text-white/70">{b}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-brand text-brand" />)}
                  </div>
                  <span className="body-sm text-white/40">{trustLine}</span>
                </div>
              </div>
              <HeroLeadForm city={cityName} service={service.title} />
            </div>
          </div>
        </section>

        {/* ── Benefits row ──────────────────────────── */}
        <div className="bg-white border-b border-border">
          <div className="container-width py-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-1.5" />
                <div>
                  <p className="font-sans font-medium text-xs text-ink mb-0.5">{b.title}</p>
                  <p className="body-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Body ──────────────────────────────────── */}
        <div className="container-width py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">

            {/* Main */}
            <div>
              <h2 className="font-display text-3xl italic text-ink mb-5">{introHeading}</h2>
              <div className="space-y-4 mb-12">
                {intro.map((p, i) => <p key={i} className="body-md">{p}</p>)}
              </div>

              <h2 className="font-display text-2xl italic text-ink mb-5">{stepsHeading}</h2>
              <div className="space-y-3 mb-12">
                {steps.map((step, i) => (
                  <div key={i} className="step-row">
                    <span className="step-num">{i + 1}</span>
                    <p className="body-md font-medium text-ink">{step}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-2xl italic text-ink mb-5">{whyHeading}</h2>
              <div className="space-y-2.5 mb-12">
                {whyPoints.map((p, i) => (
                  <div key={i} className="flex items-start gap-3 card-parchment p-4 rounded-md">
                    <CheckCircle size={14} className="text-brand flex-shrink-0 mt-0.5" />
                    <span className="body-md font-medium">{p}</span>
                  </div>
                ))}
              </div>

              {/* Nearby areas */}
              {nearbyCities.length > 0 && (
                <div className="mb-12">
                  <h2 className="font-display text-2xl italic text-ink mb-4">
                    {service.title} in nearby areas
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {nearbyCities.slice(0, 6).map(city => (
                      <Link
                        key={city}
                        href={`/services/${service.slug}/${city.toLowerCase().replace(/[^a-z0-9]+/g,'-')}/`}
                        className="card p-3 body-md hover:text-brand transition-colors"
                      >
                        {service.title} in {city}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <h2 className="font-display text-2xl italic text-ink mb-5">What clients say</h2>
              <div className="mb-12">
                <Testimonials limit={2} />
              </div>

              {faqs.length > 0 && (
                <FAQ faqs={faqs} title={`${service.title} in ${cityName} — common questions`} />
              )}
            </div>

            {/* Sidebar */}
            <aside>
              <div className="sticky top-8 space-y-4">
                <div className="sidebar-box">
                  <h3 className="font-display text-xl italic text-ink mb-2">
                    Get matched in {cityName}
                  </h3>
                  <p className="body-sm mb-4">
                    Vetted {service.title.toLowerCase()} specialists covering {cityName}. Free, within 24 hours.
                  </p>
                  <button onClick={() => setModalOpen(true)} className="btn-primary w-full justify-center">
                    Find a specialist
                  </button>
                </div>

                <div className="sidebar-box">
                  <p className="eyebrow mb-3">Typical cost</p>
                  <p className="font-display text-2xl text-ink mb-1">£150 – £550</p>
                  <p className="body-sm">Fixed-fee quote before any work begins</p>
                </div>

                <div className="sidebar-box">
                  <p className="eyebrow mb-3">Other services in {cityName}</p>
                  <div className="space-y-2">
                    {relatedServices.slice(0, 4).map(s => (
                      <Link
                        key={s.id}
                        href={`/services/${s.slug}/${locationSlug}/`}
                        className="block body-md hover:text-brand transition-colors"
                      >
                        {s.title} in {cityName}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Bottom CTA */}
          <div className="bg-ink rounded-lg p-10 text-center mt-4">
            <h2 className="font-display text-3xl italic text-white mb-3">
              Get {service.title} advice in {cityName}
            </h2>
            <p className="body-lg text-white/55 max-w-xl mx-auto mb-7">
              Submit your enquiry in under two minutes. We match you with vetted specialists in {cityName} with no obligation.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-white text-ink font-sans font-medium text-sm px-8 py-3.5 rounded"
            >
              Get your free quotes
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
