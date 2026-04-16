'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { services } from '@/data/services';
import { AREA_HUBS } from '@/data/locations';
import { FAQS_HOME, siteConfig } from '@/data/site';

const trustItems = [
  { head: 'Matched in 24 hours', body: 'A relevant introduction, not a generic list' },
  { head: 'Every specialist vetted', body: 'Qualifications and insurance checked before joining our network' },
  { head: 'Free to all clients', body: 'Paid by the professionals in our network, never by you' },
  { head: 'Home visits available', body: 'Most specialists will come to you across all London areas' },
];

const featuredAreas = AREA_HUBS.slice(0, 8);

export default function HomePageClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Header onOpenModal={() => setModalOpen(true)} />

      <main>
        {/* ── Hero ──────────────────────────────────── */}
        <section className="hero-dark min-h-[520px] flex flex-col">
          {/* Photo placeholder — replace with next/image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-main.png')" }}
          />
          <div className="hero-gradient-top" />
          <div className="hero-gradient-bottom" />

          <div className="relative z-10 mt-auto container-width py-16 grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-14 items-end">
            <div>
              <p className="eyebrow text-white/40 mb-5 animate-fade-up">Free estate planning &middot; London</p>
              <h1 className="display-xl italic text-white mb-5 animate-fade-up-delay-1">
                Because the people<br />you love deserve<br />to be protected
              </h1>
              <p className="body-lg text-white/60 max-w-[460px] mb-8 animate-fade-up-delay-2">
                We match London families with the right will writer for their situation — vetted specialists, matched free, within 24 hours.
              </p>
              <div className="flex items-center gap-3 animate-fade-up-delay-3">
                <button onClick={() => setModalOpen(true)} className="btn-primary">
                  Find my specialist
                </button>
                <Link href="/services/" className="btn-ghost-light">
                  See our services
                </Link>
              </div>
              <p className="body-sm text-white/28 mt-5 leading-relaxed">
                Free to all clients &nbsp;&middot;&nbsp; No obligation &nbsp;&middot;&nbsp; Every specialist vetted and insured<br />
                We are paid by the professionals in our network, never by you
              </p>
            </div>

            {/* Services card */}
            <div className="services-dark-card hidden lg:block">
              <p className="eyebrow text-white/38 mb-4">We cover</p>
              {[
                'Single &amp; mirror wills',
                'Lasting power of attorney',
                'Trust planning',
                'Estate planning reviews',
                'Probate support',
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2.5 mb-3">
                  <span className="w-1 h-1 rounded-full bg-brand flex-shrink-0" />
                  <span
                    className="font-display text-sm text-white/68"
                    dangerouslySetInnerHTML={{ __html: s }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Trust strip ───────────────────────────── */}
        <div className="trust-strip">
          {trustItems.map((t, i) => (
            <div key={i} className="trust-item">
              <p className="trust-item-head">{t.head}</p>
              <p className="trust-item-body">{t.body}</p>
            </div>
          ))}
        </div>

        {/* ── Services ──────────────────────────────── */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-xl mb-12">
              <p className="eyebrow mb-3">Estate planning services</p>
              <h2 className="font-display text-4xl italic text-ink mb-4">
                What we match you with
              </h2>
              <p className="body-lg">
                Our network covers every aspect of will writing and estate planning. Tell us your situation and we find the right specialist.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map(s => (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}/`}
                  className="card group overflow-hidden"
                >
                  <div className="h-44 overflow-hidden bg-parchment-2">
                    <img
                      src={s.image}
                      alt={`${s.title} specialists in London`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl text-ink group-hover:text-brand transition-colors mb-2">
                      {s.title}
                    </h3>
                    <p className="body-sm line-clamp-2 mb-3">{s.description}</p>
                    <span className="eyebrow-brand flex items-center gap-1">
                      Find a specialist <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ──────────────────────────── */}
        <section className="section-padding bg-parchment">
          <div className="container-width">
            <div className="max-w-xl mb-14 mx-auto text-center">
              <p className="eyebrow mb-3">The process</p>
              <h2 className="font-display text-4xl italic text-ink mb-4">How the matching works</h2>
              <p className="body-lg">Three straightforward steps to being connected with the right specialist.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { n: '1', head: 'Tell us your situation', body: 'Share your family circumstances, assets, and any specific requirements. The more detail, the better the match. No obligation at this stage.' },
                { n: '2', head: 'We find your specialist', body: 'We identify will writers in our London network with specific experience in your type of estate. Introductions within 24 hours.' },
                { n: '3', head: 'You choose and get started', body: 'Review the introduction, ask questions, and decide. Agree terms directly with your specialist. Free re-matching included.' },
              ].map(step => (
                <div key={step.n} className="step-row flex-col items-start">
                  <span className="step-num mb-3">{step.n}</span>
                  <h3 className="font-display text-xl text-ink mb-2">{step.head}</h3>
                  <p className="body-md">{step.body}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button onClick={() => setModalOpen(true)} className="btn-primary">
                Start your free enquiry
              </button>
            </div>
          </div>
        </section>

        {/* ── Testimonials ──────────────────────────── */}
        <section className="section-padding bg-white">
          <div className="container-width grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="eyebrow mb-3">What clients say</p>
              <h2 className="font-display text-4xl italic text-ink mb-6">
                Real families,<br />real introductions
              </h2>
              <p className="body-lg mb-8">
                Every testimonial on this site is from a real client introduced through our matching service.
              </p>
              <button onClick={() => setModalOpen(true)} className="btn-primary">
                Find my specialist
              </button>
            </div>
            <Testimonials limit={3} />
          </div>
        </section>

        {/* ── Areas ─────────────────────────────────── */}
        <section className="section-padding bg-parchment">
          <div className="container-width">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="eyebrow mb-3">Coverage</p>
                <h2 className="font-display text-4xl italic text-ink">London areas we serve</h2>
              </div>
              <Link href="/location/" className="btn-secondary hidden md:inline-flex">
                All areas →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {featuredAreas.map(hub => (
                <Link
                  key={hub.slug}
                  href={`/location/${hub.slug}/`}
                  className="card p-4 group"
                >
                  <div className="flex items-start gap-2.5 mb-2">
                    <MapPin size={12} className="text-brand flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-display text-base text-ink group-hover:text-brand transition-colors">
                        {hub.name}
                      </p>
                      <p className="body-sm">{hub.postcode}</p>
                    </div>
                  </div>
                  <p className="body-sm line-clamp-1 pl-[22px]">
                    {hub.subAreas.slice(0, 2).map(s => s.name).join(', ')}...
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-6 md:hidden">
              <Link href="/location/" className="btn-secondary w-full justify-center">
                All areas →
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────── */}
        <section className="section-padding bg-white">
          <div className="container-width max-w-3xl">
            <FAQ faqs={FAQS_HOME} title="Common questions" />
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────── */}
        <section className="bg-ink py-20">
          <div className="container-width text-center">
            <h2 className="font-display text-4xl italic text-white mb-4">
              Ready to protect the people you love?
            </h2>
            <p className="body-lg text-white/55 max-w-xl mx-auto mb-8">
              Free matching with vetted will writers and estate planning specialists across London. No obligation. Within 24 hours.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-white text-ink font-sans font-medium text-sm px-8 py-4 rounded"
              style={{ letterSpacing: '.02em' }}
            >
              Find my specialist
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
