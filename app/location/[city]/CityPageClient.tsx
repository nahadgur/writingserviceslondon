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
    `Connect with vetted will writers and estate planning specialists covering ${hub.name} and surrounding areas. Free matching, no obligation.`;

  return (
    <>
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultCity={hub.name} />
      <Header onOpenModal={() => setModalOpen(true)} />

      <main>
        {/* ── Hero ──────────────────────────────────── */}
        <section className="hero-dark min-h-[340px] flex items-end">
          <div className="absolute inset-0" style={{ background: '#1a1410' }} />
          <div className="hero-gradient-bottom" />

          <div className="relative z-10 container-width w-full py-14">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-end">
              <div>
                <Breadcrumbs
                  dark
                  items={[{ label: 'Areas', href: '/location/' }, { label: hub.name }]}
                />
                <div className="flex items-center gap-2 mt-5 mb-4">
                  <span className="eyebrow text-white/38">{hub.postcode}</span>
                  <span className="text-white/18 text-xs">&middot;</span>
                  <span className="eyebrow text-white/38">{hub.region} London</span>
                </div>
                <h1 className="font-display text-5xl lg:text-6xl italic text-white mb-4 leading-tight">
                  Will writing in{' '}
                  <span className="text-brand-light">{hub.name}</span>
                </h1>
                <p className="body-lg text-white/60 max-w-[440px]">{heroParagraph}</p>
              </div>
              <HeroLeadForm city={hub.name} />
            </div>
          </div>
        </section>

        {/* ── Body ──────────────────────────────────── */}
        <div className="container-width py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">

            {/* Main */}
            <div>
              {/* Intro */}
              {content && (
                <section className="mb-14">
                  <h2 className="font-display text-3xl italic text-ink mb-5">{content.introHeading}</h2>
                  <div className="space-y-4">
                    {content.introParagraphs.map((p, i) => (
                      <p key={i} className="body-md">{p}</p>
                    ))}
                  </div>
                </section>
              )}

              {/* Sub-areas grid */}
              <SubAreasGrid hubName={hub.name} subAreas={hub.subAreas} />

              {/* Why specialist matters */}
              {content?.whySpecialistMatters && (
                <div className="pull-quote mb-12">
                  <p>{content.whySpecialistMatters}</p>
                </div>
              )}

              {/* Services */}
              <section className="mb-14">
                <h2 className="font-display text-2xl italic text-ink mb-6">
                  Services available in {hub.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {services.map(s => (
                    <Link
                      key={s.id}
                      href={`/services/${s.slug}/`}
                      className="card group overflow-hidden flex gap-4 p-4"
                    >
                      <div className="w-20 h-16 rounded overflow-hidden flex-shrink-0 bg-parchment-2">
                        <img
                          src={s.image}
                          alt={s.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h3 className="font-display text-base text-ink group-hover:text-brand transition-colors mb-1">
                          {s.title} in {hub.name}
                        </h3>
                        <p className="body-sm line-clamp-2">{s.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Who we match */}
              {content?.clientProfile && (
                <section className="mb-14">
                  <h2 className="font-display text-2xl italic text-ink mb-5">
                    {content.clientProfile.heading}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {content.clientProfile.points.map((p, i) => (
                      <div key={i} className="flex items-start gap-3 card-parchment p-4 rounded-md">
                        <span className="w-1 h-1 rounded-full bg-brand flex-shrink-0 mt-2" />
                        <span className="body-md">{p}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Common triggers */}
              {content?.commonTriggers && content.commonTriggers.length > 0 && (
                <section className="mb-14">
                  <h2 className="font-display text-2xl italic text-ink mb-4">
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

              <h2 className="font-display text-2xl italic text-ink mb-5">What our clients say</h2>
              <div className="mb-14">
                <Testimonials limit={3} />
              </div>

              <FAQ faqs={areaFaqs} title={`Will writing in ${hub.name} — your questions`} />
            </div>

            {/* Sidebar */}
            <aside>
              <div className="sticky top-8 space-y-4">
                <div className="sidebar-box">
                  <h3 className="font-display text-xl italic text-ink mb-2">
                    Find a specialist
                  </h3>
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

                {/* Postcodes covered */}
                <div className="sidebar-box">
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
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full bg-white text-ink font-sans font-medium text-xs py-2.5 rounded"
                  >
                    Get free quotes
                  </button>
                </div>
              </div>
            </aside>
          </div>

          {/* Bottom CTA */}
          <div className="bg-ink rounded-lg p-10 text-center mt-4">
            <h2 className="font-display text-3xl italic text-white mb-3">
              Find a will writing specialist in {hub.name}
            </h2>
            <p className="body-lg text-white/55 max-w-xl mx-auto mb-7">
              Free matching covering {hub.name}, {hub.subAreas.slice(0, 3).map(s => s.name).join(', ')}, and surrounding areas.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-white text-ink font-sans font-medium text-sm px-8 py-3.5 rounded"
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
