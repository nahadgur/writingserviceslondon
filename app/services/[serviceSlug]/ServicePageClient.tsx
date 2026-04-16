'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
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
  content: {
    intro: string[];
    benefits: { title: string; desc: string }[];
    candidateIntro: string;
    candidates: string[];
    process: { title: string; desc: string }[];
  };
  relatedServices: Service[];
  combinedFaqs: { question: string; answer: string }[];
}

export default function ServicePageClient({ service, content, relatedServices, combinedFaqs }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultService={service.title} />
      <Header onOpenModal={() => setModalOpen(true)} />

      <main>
        {/* ── Hero ──────────────────────────────────── */}
        <section className="hero-dark min-h-[360px] flex items-end">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${service.image}')`, opacity: 0.35 }}
          />
          <div className="hero-gradient-bottom" />

          <div className="relative z-10 container-width pb-0 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-end py-14">
              <div>
                <Breadcrumbs
                  dark
                  items={[{ label: 'Services', href: '/services/' }, { label: service.title }]}
                />
                <h1 className="font-display text-5xl lg:text-6xl italic text-white mt-5 mb-4 leading-tight">
                  {service.title}
                </h1>
                <p className="body-lg text-white/60 max-w-[420px] mb-6">{service.description}</p>
                <div className="flex flex-col gap-2">
                  {['Compare up to 3 free quotes', 'Every specialist vetted and insured', 'Covering all London areas'].map((b, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle size={14} className="text-brand flex-shrink-0" />
                      <span className="body-md text-white/70">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
              <HeroLeadForm service={service.title} />
            </div>
          </div>
        </section>

        {/* ── Body ──────────────────────────────────── */}
        <div className="container-width py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12">

            {/* Main */}
            <div>
              <h2 className="font-display text-3xl italic text-ink mb-5">
                {service.title}: what you need to know
              </h2>
              <div className="space-y-4 mb-14">
                {content.intro.map((p, i) => (
                  <p key={i} className="body-md">{p}</p>
                ))}
              </div>

              <h2 className="font-display text-2xl italic text-ink mb-5">Why it matters</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-14">
                {content.benefits.map((b, i) => (
                  <div key={i} className="benefit-card">
                    <h3 className="benefit-card-head">{b.title}</h3>
                    <p className="body-sm leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-2xl italic text-ink mb-5">
                Is {service.title.toLowerCase()} right for you?
              </h2>
              <p className="body-md mb-4">{content.candidateIntro}</p>
              <div className="card-parchment p-6 mb-14">
                <ul className="space-y-3">
                  {content.candidates.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-brand flex-shrink-0 mt-2" />
                      <span className="body-md">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="font-display text-2xl italic text-ink mb-5">How the process works</h2>
              <div className="space-y-3 mb-14">
                {content.process.map((step, i) => (
                  <div key={i} className="step-row">
                    <span className="step-num">{i + 1}</span>
                    <div>
                      <p className="font-sans font-medium text-sm text-ink mb-0.5">{step.title}</p>
                      <p className="body-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-2xl italic text-ink mb-5">What our clients say</h2>
              <div className="mb-14">
                <Testimonials limit={2} />
              </div>

              <FAQ faqs={combinedFaqs} title={`${service.title} — common questions`} />
            </div>

            {/* Sidebar */}
            <aside>
              <div className="sticky top-8 space-y-4">
                <div className="sidebar-box">
                  <h3 className="font-display text-xl italic text-ink mb-2">
                    Get matched free
                  </h3>
                  <p className="body-sm mb-4">
                    Vetted specialists covering your area. Most introductions within 24 hours.
                  </p>
                  <button onClick={() => setModalOpen(true)} className="btn-primary w-full justify-center">
                    Find a specialist
                  </button>
                  <ul className="mt-4 space-y-2 pt-4 border-t border-border">
                    {['Matched within 24 hours', 'Vetted and insured', 'Free to all clients'].map((p, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-brand flex-shrink-0" />
                        <span className="body-sm">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar-box-dark p-5 rounded-lg">
                  <p className="font-display text-xl italic text-white mb-1">From £150</p>
                  <p className="body-sm text-white/50 mb-4">Fixed-fee quotes before any work begins.</p>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full bg-white text-ink font-sans font-medium text-xs py-2.5 rounded"
                  >
                    Get free quotes
                  </button>
                </div>

                <div className="sidebar-box">
                  <p className="eyebrow mb-3">Other services</p>
                  <div className="space-y-2">
                    {relatedServices.map(s => (
                      <Link
                        key={s.id}
                        href={`/services/${s.slug}/`}
                        className="flex items-center gap-2 body-md hover:text-brand transition-colors"
                      >
                        <ArrowRight size={10} className="flex-shrink-0 text-dust" />
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
