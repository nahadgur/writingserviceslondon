'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AREA_HUBS } from '@/data/locations';
import { FAQS_LOCATION } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FAQ } from '@/components/FAQ';

const regionOrder: Record<string, number> = { Central: 0, North: 1, East: 2, South: 3, West: 4 };

export function LocationIndexClient() {
  const [activeRegion, setActiveRegion] = useState('All');

  const byRegion = AREA_HUBS.reduce<Record<string, typeof AREA_HUBS>>((acc, hub) => {
    if (!acc[hub.region]) acc[hub.region] = [];
    acc[hub.region].push(hub);
    return acc;
  }, {});

  const sortedRegions = Object.keys(byRegion).sort(
    (a, b) => (regionOrder[a] ?? 9) - (regionOrder[b] ?? 9)
  );

  return (
    <>
      <Header />

      <main data-edition-page="location" id="main-content">
        {/* Hero */}
        <section data-edition-hero data-directory-hero style={{ background: 'var(--parchment)', borderBottom: '0.5px solid var(--border)', padding: "32px 0 32px" }}>
          <div className="container-width max-w-3xl">
            <p className="eyebrow mb-4">Coverage across London</p>
            <h1 style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 'clamp(32px,4vw,52px)', fontStyle: 'normal', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.12, marginBottom: 16 }}>
              Will writing across every<br className="hidden sm:block" /> London area
            </h1>
            <p className="body-lg max-w-xl">
              We cover all of London, with home visits in every borough. Select your area
              to see specialists, postcodes covered, and local estate planning information.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-width">
            <nav className="directory-filters" aria-label="London regions">
              {['All', ...sortedRegions].map(region => <button key={region} aria-pressed={activeRegion === region} onClick={() => setActiveRegion(region)}>{region === 'All' ? 'All areas' : region + ' London'}<span>{region === 'All' ? AREA_HUBS.length : byRegion[region].length}</span></button>)}
            </nav>
            <div className="area-directory" id="area-directory">
              {AREA_HUBS.filter(hub => activeRegion === 'All' || hub.region === activeRegion).map(hub => <Link key={hub.slug} href={'/location/' + hub.slug + '/'} className="area-directory-link">
                <div className="area-directory-meta"><span>{hub.region} London</span><span>{hub.postcode}</span></div>
                <h2>{hub.name}</h2>
                <div className="area-directory-neighbours">{hub.subAreas.slice(0, 3).map(sub => <span key={sub.name}>{sub.name}</span>)}</div>
                {hub.subAreas.length > 3 && <p className="area-directory-more">+{hub.subAreas.length - 3} more</p>}
              </Link>)}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding" style={{ background: 'var(--parchment)', borderTop: '0.5px solid var(--border)' }}>
          <div className="container-width max-w-3xl">
            <FAQ faqs={FAQS_LOCATION} title="Will writing services across London — your questions" />
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--ink)', padding: "32px 0" }}>
          <div className="container-width text-center">
            <h2 style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 'clamp(26px,3.5vw,40px)', fontStyle: 'normal', fontWeight: 400, color: '#fff', marginBottom: 14, lineHeight: 1.2 }}>
              Not sure which area to choose?
            </h2>
            <p className="body-lg mb-7 mx-auto" style={{ maxWidth: 440, color: "rgba(255,255,255,0.76)" }}>
              Leave your contact details and we will get back to you whichever area you are in.
            </p>
            <Link href="/contact/#enquiry"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 13, fontWeight: 500, padding: "13px 28px", borderRadius: 0, border: 'none', cursor: 'pointer' }}
            >
              Find my specialist
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
