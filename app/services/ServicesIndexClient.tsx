'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import type { Service } from '@/data/services';

const pricingMap: Record<string, string> = {
  'single-will':               '£150 – £350',
  'mirror-wills':              '£250 – £550',
  'lasting-power-of-attorney': '£300 – £900',
  'trust-planning':            '£500 – £1,500',
  'estate-planning':           '£400 – £1,200',
  'probate-support':           '£1,500 – £3,500',
};

interface Props {
  services: Service[];
}

export default function ServicesIndexClient({ services }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Header onOpenModal={() => setModalOpen(true)} />

      <main>
        {/* ── Hero ──────────────────────────────────── */}
        <section className="bg-parchment border-b border-border py-12 md:py-20">
          <div className="container-width max-w-3xl">
            <p className="eyebrow mb-4">Estate planning services</p>
            <h1 className="font-display text-4xl md:text-5xl italic text-ink mb-4 leading-tight">
              What we match you with
            </h1>
            <p className="body-lg max-w-xl">
              Our network covers every aspect of will writing and estate planning. Tell us your situation and we find the right specialist.
            </p>
          </div>
        </section>

        {/* ── Services list ─────────────────────────── */}
        <section className="section-padding">
          <div className="container-width">
            <div className="divide-y divide-border">
              {services.map(s => (
                <div key={s.id} className="py-6 md:py-8">
                  {/* Mobile layout: image + title row, then desc, then price + cta */}
                  <div className="flex gap-4 items-start mb-3">
                    <div className="w-20 h-14 md:w-24 md:h-16 rounded overflow-hidden bg-parchment-2 flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="font-display text-xl md:text-2xl text-ink mb-1 leading-tight">{s.title}</h2>
                      {/* Price on mobile — shows here */}
                      <p className="font-display text-base text-brand md:hidden">
                        {pricingMap[s.slug] ?? '—'}
                      </p>
                    </div>
                  </div>

                  <p className="body-md mb-4 md:max-w-lg">{s.description}</p>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link href={`/services/${s.slug}/`} className="btn-primary text-sm">
                      Find a specialist <ArrowRight size={12} />
                    </Link>
                    {/* Price on desktop — inline with CTA */}
                    <p className="hidden md:block font-display text-lg text-ink">
                      {pricingMap[s.slug] ?? '—'}
                      <span className="body-sm ml-2">fixed fee</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="bg-ink rounded-lg p-7 md:p-8 mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div>
                <p className="font-display text-2xl italic text-white mb-1">Not sure what you need?</p>
                <p className="body-md text-white/50">Tell us your situation and we will advise which services apply</p>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 bg-white text-ink font-sans font-medium text-sm px-6 py-3 rounded flex-shrink-0"
              >
                Speak to someone
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
