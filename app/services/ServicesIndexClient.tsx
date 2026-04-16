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
  'lasting-power-of-attorney': '£300 – £900 per LPA',
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
        <section className="bg-parchment border-b border-border py-16 md:py-20">
          <div className="container-width max-w-3xl">
            <p className="eyebrow mb-4">Estate planning services</p>
            <h1 className="font-display text-5xl italic text-ink mb-5 leading-tight">
              What we match you with
            </h1>
            <p className="body-lg max-w-xl">
              Our network covers every aspect of will writing and estate planning. Tell us your situation and we find the right specialist — not a generic list, a relevant match.
            </p>
          </div>
        </section>

        {/* ── Services list ─────────────────────────── */}
        <section className="section-padding">
          <div className="container-width">
            <div className="divide-y divide-border">
              {services.map(s => (
                <div key={s.id} className="service-list-row py-8">
                  {/* Image */}
                  <div className="w-24 h-16 rounded overflow-hidden bg-parchment-2 flex-shrink-0">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Title + desc */}
                  <div>
                    <h2 className="font-display text-2xl text-ink mb-2">{s.title}</h2>
                    <p className="body-md max-w-md">{s.description}</p>
                  </div>

                  {/* Price */}
                  <div className="hidden md:block text-right">
                    <p className="font-display text-xl text-ink">{pricingMap[s.slug] ?? '—'}</p>
                    <p className="body-sm mt-0.5">Fixed fee, quoted upfront</p>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/services/${s.slug}/`}
                    className="btn-secondary whitespace-nowrap flex-shrink-0"
                  >
                    Find a specialist <ArrowRight size={12} />
                  </Link>
                </div>
              ))}
            </div>

            {/* Bottom CTA bar */}
            <div className="bg-ink rounded-lg p-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="font-display text-2xl italic text-white mb-1">Not sure what you need?</p>
                <p className="body-md text-white/50">Tell us your situation and we will advise which services apply</p>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 bg-white text-ink font-sans font-medium text-sm px-7 py-3.5 rounded flex-shrink-0"
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
