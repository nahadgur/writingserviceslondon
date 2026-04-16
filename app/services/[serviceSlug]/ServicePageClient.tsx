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
        <section className="hero-dark">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${service.image}')`, opacity: 0.35 }}
          />
          <div className="hero-gradient-bottom" />

          <div className="relative z-10 container-width py-10 md:py-14">
            <Breadcrumbs
              dark
              items={[{ label: 'Services', href: '/services/' }, { label: service.title }]}
            />
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 lg:gap-10 mt-5 items-start">
              <div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl italic text-white mb-4 leading-tight">
                  {service.title}
                </h1>
                <p className="body-lg text-white/60 max-w-[420px] mb-5">{service.description}</p>
                <div className="flex flex-col gap-2 mb-6">
                  {['Compare up to 3 free quotes', 'Every specialist vetted and insured', 'Covering all London areas'].map((b, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle size={13} className="text-brand flex-shrink-0" />
                      <span className="body-md text-white/70">{b}</span>
                    </div>
                  ))}
                </div>
                {/* CTA button on mobile instead of form */}
                <button
                  onClick={() => setModalOpen(true)}
                  className="btn-primary lg:hidden"
                >
                  Find my specialist
                </button>
              </div>
              {/* Form — desktop only in hero */}
              <div className="hidden lg:block">
                <HeroLeadForm service={service.title} />
              </div>
            </div>
          </div>
        </section>

        {/* ── Inline form on mobile (below hero) ────── */}
        <div className="lg:hidden bg-parchment border-b border-border px-5 py-6">
          <HeroLeadForm service={service.title} />
        </div>

        {/* ── Body ──────────────────────────────────── */}
        <div className="container-width py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 lg:gap-12">

            {/* Main content */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl italic text-ink mb-4">
                {service.title}: what you need to know
              </h2>
              <div className="space-y-4 mb-12">
                {content.intro.map((p, i) => <p key={i} className="body-md">{p}</p>)}
              </div>

              <h2 className="font-display text-xl md:text-2xl italic text-ink mb-4">Why it matters</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-12">
                {content.benefits.map((b, i) => (
                  <div key={i} className="benefit-card">
                    <h3 className="benefit-card-head">{b.title}</h3>
                    <p className="body-sm leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-xl md:text-2xl italic text-ink mb-4">
                Is {service.title.toLowerCase()} right for you?
              </h2>
              <p className="body-md mb-4">{content.candidateIntro}</p>
              <div className="card-parchment p-5 mb-12">
                <ul className="space-y-3">
                  {content.candidates.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-brand flex-shrink-0 mt-2" />
                      <span className="body-md">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="font-display text-xl md:text-2xl italic text-ink mb-4">How the process works</h2>
              <div className="space-y-3 mb-12">
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

              <h2 className="font-display text-xl md:text-2xl italic text-ink mb-4">What our clients say</h2>
              <div className="mb-12">
                <Testimonials limit={2} />
              </div>

              <FAQ faqs={combinedFaqs} title={`${service.title} — common questions`} />
            </div>

            {/* Sidebar — stacks below on mobile */}
            <aside>
              <div className="lg:sticky lg:top-8 space-y-4">
                <div className="sidebar-box">
                  <h3 className="font-display text-xl italic text-ink mb-2">Get matched free</h3>
                  <p className="body-sm mb-4">Vetted specialists covering your area. Most introductions within 24 hours.</p>
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
                  <button onClick={() => setModalOpen(true)} className="w-full bg-white text-ink font-sans font-medium text-xs py-2.5 rounded">
                    Get free quotes
                  </button>
                </div>

                <div className="sidebar-box">
                  <p className="eyebrow mb-3">Other services</p>
                  <div className="space-y-2">
                    {relatedServices.map(s => (
                      <Link key={s.id} href={`/services/${s.slug}/`} className="flex items-center gap-2 body-md hover:text-brand transition-colors">
                        <ArrowRight size={10} className="flex-shrink-0 text-dust" />{s.title}
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
