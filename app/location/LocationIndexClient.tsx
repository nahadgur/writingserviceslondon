'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { MapPin, Search } from 'lucide-react';
import { toSlug } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { FAQ } from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';

interface Props {
  locations: Record<string, string[]>;
  faqs: { question: string; answer: string }[];
}

export default function LocationIndexClient({ locations, faqs }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = useMemo(() => {
    if (!searchQuery) return locations;
    const result: Record<string, string[]> = {};
    Object.entries(locations).forEach(([region, cities]) => {
      const filtered = cities.filter(city =>
        city.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filtered.length > 0) result[region] = filtered;
    });
    return result;
  }, [searchQuery, locations]);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">
        <Hero
          title="Will Writing Services by London Area"
          subtitle="We cover all London boroughs and areas. Search for your location to find vetted will writing and estate planning specialists near you."
          image="/images/hero-main.png"
          onOpenModal={() => setIsModalOpen(true)}
        />

        <section className="section-padding">
          <div className="container-width">
            <div className="max-w-xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search your town or area..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {Object.keys(filteredLocations).length === 0 ? (
              <p className="text-center text-gray-500 py-8">No areas found for &ldquo;{searchQuery}&rdquo;. Try a different search term.</p>
            ) : (
              <div className="space-y-12">
                {Object.entries(filteredLocations).map(([region, cities]) => (
                  <div key={region}>
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">{region}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                      {cities.map(city => (
                        <Link
                          key={city}
                          href={`/location/${toSlug(city)}/`}
                          className="group block bg-gray-50 hover:bg-brand-50 border border-gray-100 hover:border-brand-200 rounded-xl p-4 transition-all"
                        >
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0" />
                            <span className="font-medium text-gray-700 group-hover:text-brand-700 text-sm">{city}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-width max-w-3xl">
            <FAQ faqs={faqs} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
