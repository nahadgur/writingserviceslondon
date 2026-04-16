'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { FAQ } from '@/components/FAQ';
import type { AreaHub } from '@/data/locations';

const regionOrder: Record<string, number> = { Central: 0, North: 1, East: 2, South: 3, West: 4 };

interface Props {
  hubs: AreaHub[];
  faqs: { question: string; answer: string }[];
}

export default function LocationIndexClient({ hubs, faqs }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  const byRegion = hubs.reduce<Record<string, AreaHub[]>>((acc, hub) => {
    if (!acc[hub.region]) acc[hub.region] = [];
    acc[hub.region].push(hub);
    return acc;
  }, {});

  const sortedRegions = Object.keys(byRegion).sort(
    (a, b) => (regionOrder[a] ?? 9) - (regionOrder[b] ?? 9)
  );

  return (
    <>
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Header onOpenModal={() => setModalOpen(true)} />

      <main>
        {/* ── Hero ──────────────────────────────────── */}
        <section className="bg-parchment border-b border-border py-12 md:py-20">
          <div className="container-width max-w-3xl">
            <p className="eyebrow mb-4">Coverage across London</p>
            <h1 className="font-display text-4xl md:text-5xl italic text-ink mb-4 leading-tight">
              Will writing across every London area
            </h1>
            <p className="body-lg max-w-xl">
              Our network of vetted specialists covers all of London. Each area page includes specific information about local estate planning needs and the surrounding neighbourhoods we serve.
            </p>
          </div>
        </section>

        {/* ── Hub grid ──────────────────────────────── */}
        <section className="section-padding">
          <div className="container-width space-y-12 md:space-y-14">
            {sortedRegions.map(region => (
              <div key={region}>
                <div className="flex items-center gap-4 mb-5 md:mb-6">
                  <h2 className="font-display text-xl md:text-2xl italic text-ink whitespace-nowrap">
                    {region} London
                  </h2>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                  {byRegion[region].map(hub => (
                    <Link key={hub.slug} href={`/location/${hub.slug}/`} className="card p-4 md:p-5 group">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded bg-parchment-2 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/10 transition-colors">
                          <MapPin size={12} className="text-brand" />
                        </div>
                        <div>
                          <h3 className="font-display text-lg md:text-xl text-ink group-hover:text-brand transition-colors leading-tight">
                            {hub.name}
                          </h3>
                          <p className="body-sm">{hub.postcode}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {hub.subAreas.slice(0, 3).map(sub => (
                          <span
                            key={sub.name}
                            className="body-sm bg-parchment border border-border-soft px-2 py-0.5 rounded-full text-dust"
                          >
                            {sub.name}
                          </span>
                        ))}
                        {hub.subAreas.length > 3 && (
                          <span className="body-sm text-brand font-sans font-medium px-1">
                            +{hub.subAreas.length - 3}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────── */}
        <section className="section-padding bg-parchment border-t border-border">
          <div className="container-width max-w-3xl">
            <FAQ faqs={faqs} title="Will writing services across London — your questions" />
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────── */}
        <section className="bg-ink py-14 md:py-16">
          <div className="container-width text-center">
            <h2 className="font-display text-3xl md:text-4xl italic text-white mb-4">
              Not sure which area to visit?
            </h2>
            <p className="body-lg text-white/55 max-w-lg mx-auto mb-7">
              Just tell us your situation and postcode — we will match you with the right specialist.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-white text-ink font-sans font-medium text-sm px-7 py-3.5 rounded"
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
