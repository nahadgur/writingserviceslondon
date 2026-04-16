'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { AREA_HUBS } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { FAQS_LOCATION } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { FAQ } from '@/components/FAQ';

const regionOrder: Record<string, number> = { Central: 0, North: 1, East: 2, South: 3, West: 4 };

export default function LocationIndexPage() {
  const [modal, setModal] = useState(false);

  const byRegion = AREA_HUBS.reduce<Record<string, typeof AREA_HUBS>>((acc, hub) => {
    if (!acc[hub.region]) acc[hub.region] = [];
    acc[hub.region].push(hub);
    return acc;
  }, {});

  const sortedRegions = Object.keys(byRegion).sort(
    (a, b) => (regionOrder[a] ?? 9) - (regionOrder[b] ?? 9)
  );


  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteConfig.url}/location/#page`,
    name: 'Will Writing Services -- London Areas',
    description: 'Find vetted will writers and estate planning specialists across all London areas. Coverage across 15 London hubs from Mayfair to Stratford.',
    url: `${siteConfig.url}/location/`,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Areas', item: `${siteConfig.url}/location/` },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main>
        {/* Hero */}
        <section style={{ background: 'var(--parchment)', borderBottom: '0.5px solid var(--border)', padding: '56px 0 48px' }}>
          <div className="container-width max-w-3xl">
            <p className="eyebrow mb-4">Coverage across London</p>
            <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(32px,4vw,52px)', fontStyle: 'italic', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.12, marginBottom: 16 }}>
              Will writing across every<br className="hidden sm:block" /> London area
            </h1>
            <p className="body-lg max-w-xl">
              Our network of vetted specialists covers all of London. Select your area
              to see specialists, postcodes covered, and local estate planning information.
            </p>
          </div>
        </section>

        {/* Hub grid — every card links to a real page */}
        <section className="section-padding">
          <div className="container-width space-y-12 md:space-y-14">
            {sortedRegions.map(region => (
              <div key={region}>
                <div className="flex items-center gap-4 mb-6">
                  <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(18px,2vw,24px)', fontStyle: 'italic', color: 'var(--ink)', whiteSpace: 'nowrap', fontWeight: 400 }}>
                    {region} London
                  </h2>
                  <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                  {byRegion[region].map(hub => (
                    <Link key={hub.slug} href={`/location/${hub.slug}/`} className="card p-4 md:p-5 group">
                      <div className="flex items-start gap-3 mb-3">
                        <div style={{ width: 30, height: 30, borderRadius: 5, background: 'var(--parchment-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <MapPin size={12} style={{ color: 'var(--brand)' }} />
                        </div>
                        <div>
                          <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 18, color: 'var(--ink)', transition: 'color 0.12s', lineHeight: 1.2, fontWeight: 400 }}
                            className="group-hover:text-brand-500">
                            {hub.name}
                          </h3>
                          <p className="body-sm">{hub.postcode}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {hub.subAreas.slice(0, 3).map(sub => (
                          <span key={sub.name} className="body-sm px-2 py-0.5 rounded-full"
                            style={{ background: 'var(--parchment)', border: '0.5px solid var(--border-soft)', color: 'var(--dust)' }}>
                            {sub.name}
                          </span>
                        ))}
                        {hub.subAreas.length > 3 && (
                          <span className="body-sm" style={{ color: 'var(--brand)', fontWeight: 400, padding: '0 2px' }}>
                            +{hub.subAreas.length - 3} more
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

        {/* FAQ */}
        <section className="section-padding" style={{ background: 'var(--parchment)', borderTop: '0.5px solid var(--border)' }}>
          <div className="container-width max-w-3xl">
            <FAQ faqs={FAQS_LOCATION} title="Will writing services across London — your questions" />
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--ink)', padding: '64px 0' }}>
          <div className="container-width text-center">
            <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(26px,3.5vw,40px)', fontStyle: 'italic', fontWeight: 400, color: '#fff', marginBottom: 14, lineHeight: 1.2 }}>
              Not sure which area to choose?
            </h2>
            <p className="body-lg mb-7 mx-auto" style={{ maxWidth: 440, color: 'rgba(255,255,255,0.5)' }}>
              Leave your contact details and we will match you directly regardless of area.
            </p>
            <button
              onClick={() => setModal(true)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-inter), sans-serif', fontSize: 13, fontWeight: 500, padding: '13px 28px', borderRadius: 4, border: 'none', cursor: 'pointer' }}
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
