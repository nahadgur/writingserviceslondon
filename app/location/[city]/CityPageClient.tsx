'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SubAreasGrid } from '@/components/SubAreasGrid';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import type { AreaHub } from '@/data/locations';
import type { AreaContent } from '@/data/areaContent';
import type { Service } from '@/data/services';

interface Props {
  hub: AreaHub;
  content: AreaContent | undefined;
  services: Service[];
  areaFaqs: { question: string; answer: string }[];
}

export default function CityPageClient({ hub, content, services, areaFaqs }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  const heroParagraph = content?.heroParagraph ??
    `Connect with vetted will writers and estate planning specialists covering ${hub.name} and surrounding areas.`;

  return (
    <>
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultCity={hub.name} />
      <Header onOpenModal={() => setModalOpen(true)} />

      <main>
        {/* ── Hero ──────────────────────────────────── */}
        <section className="hero-dark">
          <div className="absolute inset-0" style={{ background: '#1a1410' }} />
          <div className="hero-gradient-bottom" />

          <div className="relative z-10 container-width py-10 md:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 lg:gap-10 items-start">
              <div>
                <Breadcrumbs dark items={[{ label: 'Areas', href: '/location/' }, { label: hub.name }]} />
                <div className="flex items-center gap-2 mt-4 mb-4">
                  <span className="eyebrow text-white/38">{hub.postcode}</span>
                  <span className="text-white/20 text-xs">&middot;</span>
                  <span className="eyebrow text-white/38">{hub.region} London</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl italic text-white mb-4 leading-tight">
                  Will writing in{' '}
                  <span className="text-brand-light">{hub.name}</span>
                </h1>
                <p className="body-lg text-white/60 max-w-[440px] mb-6">{heroParagraph}</p>
                <button onClick={() => setModalOpen(true)} className="btn-primary lg:hidden">
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
        <div className="lg:hidden bg-parchment border-b border-border px-5 py-6">
          <HeroLeadForm city={hub.name} />
        </div>

        {/* ── Body ──────────────────────────────────── */}
        <div className="container-width py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-10 lg:gap-12">

            <div>
              {/* Intro */}
              {content && (
                <section className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl italic text-ink mb-4">
                    {content.introHeading}
                  </h2>
                  <div className="space-y-4">
                    {content.introParagraphs.map((p, i) => (
                      <p key={i} className="body-md">{p}</p>
                    ))}
                  </div>
                </section>
              )}

              {/* Sub-areas */}
              <SubAreasGrid hubName={hub.name} subAreas={hub.subAreas} />

              {/* Why specialist matters */}
              {content?.whySpecialistMatters && (
                <div className="pull-quote mb-10">
                  <p>{content.whySpecialistMatters}</p>
                </div>
              )}

              {/* Services */}
              <section className="mb-12">
                <h2 className="font-display text-xl md:text-2xl italic text-ink mb-5">
                  Services available in {hub.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map(s => (
                    <Link
                      key={s.id}
                      href={`/services/${s.slug}/`}
                      className="card group flex gap-3 p-4 items-start"
                    >
                      <div className="w-16 h-14 rounded overflow-hidden flex-shrink-0 bg-parchment-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={s.image} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-base text-ink group-hover:text-brand transition-colors mb-1 leading-tight">
                          {s.title}
                        </h3>
                        <p className="body-sm line-clamp-2">{s.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Client profile */}
              {content?.clientProfile && (
                <section className="mb-12">
                  <h2 className="font-display text-xl md:text-2xl italic text-ink mb-4">
                    {content.clientProfile.heading}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {content.clientProfile.points.map((p, i) => (
                      <div key={i} className="flex items-start gap-3 card-parchment p-3.5 rounded-md">
                        <span className="w-1 h-1 rounded-full bg-brand flex-shrink-0 mt-2" />
                        <span className="body-md">{p}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Common triggers */}
              {content?.commonTriggers && content.commonTriggers.length > 0 && (
                <section className="mb-12">
                  <h2 className="font-display text-xl md:text-2xl italic text-ink mb-4">
                    When {hub.name} residents get in touch
                  </h2>
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

              <h2 className="font-display text-xl md:text-2xl italic text-ink mb-4">What our clients say</h2>
              <div className="mb-12">
                <Testimonials limit={3} />
              </div>

              <FAQ faqs={areaFaqs} title={`Will writing in ${hub.name} — your questions`} />
            </div>

            {/* Sidebar */}
            <aside>
              <div className="lg:sticky lg:top-8 space-y-4">
                <div className="sidebar-box">
                  <h3 className="font-display text-xl italic text-ink mb-2">Find a specialist</h3>
                  <p className="body-sm mb-4">
                    Free match with vetted will writers covering {hub.name} and all surrounding areas.
                  </p>
                  <button onClick={() => setModalOpen(true)} className="btn-primary w-full justify-center">
                    Get matched free
                  </button>
                  <ul className="mt-4 space-y-1.5 pt-4 border-t border-border">
                    {['Matched within 24 hours', 'Vetted and insured specialists', 'Free to all clients'].map((p, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-brand flex-shrink-0" />
                        <span className="body-sm">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Postcodes — hidden on very small screens */}
                <div className="sidebar-box hidden sm:block">
                  <p className="eyebrow mb-3">Postcodes covered</p>
                  <div className="space-y-1.5">
                    {hub.subAreas.map(a => (
                      <div key={a.name} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-brand/40 flex-shrink-0" />
                        <span className="body-sm">
                          {a.postcode && <span className="font-medium text-ink">{a.postcode}</span>}
                          {a.postcode && ' · '}{a.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="sidebar-box-dark p-5 rounded-lg">
                  <p className="font-display text-xl italic text-white mb-1">From £150</p>
                  <p className="body-sm text-white/50 mb-4">Fixed-fee quotes, no hidden costs.</p>
                  <button onClick={() => setModalOpen(true)} className="w-full bg-white text-ink font-sans font-medium text-xs py-2.5 rounded">
                    Get free quotes
                  </button>
                </div>
              </div>
            </aside>
          </div>

          {/* Bottom CTA */}
          <div className="bg-ink rounded-lg p-7 md:p-10 text-center mt-6">
            <h2 className="font-display text-2xl md:text-3xl italic text-white mb-3">
              Find a will writing specialist in {hub.name}
            </h2>
            <p className="body-lg text-white/55 max-w-xl mx-auto mb-6">
              Free matching covering {hub.name}, {hub.subAreas.slice(0, 3).map(s => s.name).join(', ')}, and surrounding areas.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-white text-ink font-sans font-medium text-sm px-7 py-3.5 rounded"
            >
              Get your free match
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
