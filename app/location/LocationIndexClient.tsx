'use client';

import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { useState } from 'react';
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const byRegion = hubs.reduce<Record<string, AreaHub[]>>((acc, hub) => {
    if (!acc[hub.region]) acc[hub.region] = [];
    acc[hub.region].push(hub);
    return acc;
  }, {});

  const sortedRegions = Object.keys(byRegion).sort((a, b) => (regionOrder[a] ?? 9) - (regionOrder[b] ?? 9));

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        <section className="bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/30 via-gray-900/0 to-transparent pointer-events-none" />
          <div className="container-width py-16 md:py-24 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
                Will Writing Services Across London
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our network of vetted will writers and estate planning specialists covers all of London.
                Each area page includes specific information about local estate planning needs and the
                neighbourhoods we serve.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-width">
            <div className="space-y-14">
              {sortedRegions.map(region => (
                <div key={region}>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                    {region} London
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {byRegion[region].map(hub => (
                      <Link
                        key={hub.slug}
                        href={`/location/${hub.slug}/`}
                        className="group block bg-white rounded-2xl border border-gray-100 hover:border-brand-300 hover:shadow-lg transition-all p-5"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="bg-brand-100 p-2 rounded-lg flex-shrink-0">
                            <MapPin className="w-4 h-4 text-brand-600" />
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-gray-900 group-hover:text-brand-600">
                              {hub.name}
                            </h3>
                            <p className="text-xs text-gray-400 mt-0.5">{hub.postcode}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {hub.subAreas.slice(0, 4).map(sub => (
                            <span
                              key={sub.name}
                              className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100"
                            >
                              {sub.name}
                            </span>
                          ))}
                          {hub.subAreas.length > 4 && (
                            <span className="text-xs text-brand-600 px-2 py-0.5">
                              +{hub.subAreas.length - 4} more
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-width max-w-3xl">
            <FAQ faqs={faqs} title="Will Writing Services Across London: Your Questions" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
