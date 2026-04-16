// SERVER COMPONENT
import type { Metadata } from 'next';
import Link from 'next/link';
import { guides, guideCategories } from '@/data/guides';
import type { Guide } from '@/data/guides';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Estate Planning Guides — Will Writing Services London',
  description: 'Comprehensive guides to wills, inheritance tax, lasting power of attorney, trusts, and probate -- written for London families navigating these decisions.',
  openGraph: {
    title: 'Estate Planning Guides — Will Writing Services London',
    description: 'Comprehensive guides to wills, inheritance tax, lasting power of attorney, trusts, and probate -- written for London families.',
  },
};

const categoryOrder: Guide['category'][] = ['wills', 'tax', 'lpa', 'trusts', 'probate', 'planning'];

const categoryColour: Record<Guide['category'], string> = {
  wills:    'rgba(212,105,25,0.15)',
  tax:      'rgba(90,120,200,0.12)',
  lpa:      'rgba(60,160,100,0.12)',
  trusts:   'rgba(160,80,200,0.12)',
  probate:  'rgba(200,80,80,0.12)',
  planning: 'rgba(80,160,200,0.12)',
};

export default function GuidesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Estate Planning Guides',
    url: `${siteConfig.url}/guides/`,
    description: 'Comprehensive guides to wills, inheritance tax, lasting power of attorney, trusts, and probate for London residents.',
    publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      <main>
        {/* Dark hero */}
        <section style={{ background: '#1c1814', position: 'relative', overflow: 'hidden' }}>
          <svg aria-hidden="true" style={{ position: 'absolute', right: 0, bottom: 0, opacity: 0.13, pointerEvents: 'none' }} width="320" height="200" viewBox="0 0 320 200" fill="none">
            <rect x="10"  y="120" width="32" height="80"  fill="white"/>
            <rect x="18"  y="132" width="6"  height="8"   fill="#1c1814"/>
            <rect x="28"  y="132" width="6"  height="8"   fill="#1c1814"/>
            <rect x="50"  y="88"  width="28" height="112" fill="white"/>
            <rect x="57"  y="100" width="5"  height="7"   fill="#1c1814"/>
            <rect x="66"  y="100" width="5"  height="7"   fill="#1c1814"/>
            <rect x="57"  y="115" width="5"  height="7"   fill="#1c1814"/>
            <rect x="86"  y="58"  width="36" height="142" fill="white"/>
            <rect x="95"  y="72"  width="7"  height="9"   fill="#1c1814"/>
            <rect x="108" y="72"  width="7"  height="9"   fill="#1c1814"/>
            <rect x="95"  y="90"  width="7"  height="9"   fill="#1c1814"/>
            <rect x="108" y="90"  width="7"  height="9"   fill="#1c1814"/>
            <rect x="95"  y="108" width="7"  height="9"   fill="#1c1814"/>
            <rect x="130" y="98"  width="24" height="102" fill="white"/>
            <rect x="137" y="110" width="4"  height="6"   fill="#1c1814"/>
            <rect x="145" y="110" width="4"  height="6"   fill="#1c1814"/>
            <rect x="162" y="72"  width="32" height="128" fill="white"/>
            <rect x="170" y="86"  width="6"  height="8"   fill="#1c1814"/>
            <rect x="181" y="86"  width="6"  height="8"   fill="#1c1814"/>
            <rect x="170" y="102" width="6"  height="8"   fill="#1c1814"/>
            <rect x="202" y="108" width="22" height="92"  fill="white"/>
            <rect x="209" y="120" width="4"  height="6"   fill="#1c1814"/>
            <rect x="232" y="48"  width="40" height="152" fill="white"/>
            <rect x="241" y="62"  width="8"  height="10"  fill="#1c1814"/>
            <rect x="255" y="62"  width="8"  height="10"  fill="#1c1814"/>
            <rect x="241" y="80"  width="8"  height="10"  fill="#1c1814"/>
            <rect x="255" y="80"  width="8"  height="10"  fill="#1c1814"/>
            <rect x="241" y="98"  width="8"  height="10"  fill="#1c1814"/>
            <rect x="280" y="88"  width="32" height="112" fill="white"/>
            <rect x="288" y="102" width="6"  height="8"   fill="#1c1814"/>
            <rect x="298" y="102" width="6"  height="8"   fill="#1c1814"/>
          </svg>

          <div className="container-width" style={{ position: 'relative', zIndex: 10, paddingTop: 48, paddingBottom: 56 }}>
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#e8943a', marginBottom: 16 }}>
              Estate planning guides
            </p>
            <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(32px,5vw,52px)', fontWeight: 400, fontStyle: 'italic', color: '#fff', lineHeight: 1.1, marginBottom: 16, maxWidth: 620 }}>
              Estate planning guides for London residents
            </h1>
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.58)', lineHeight: 1.65, maxWidth: 520 }}>
              Comprehensive guides to wills, inheritance tax, lasting power of attorney, trusts, and probate -- written for London families navigating these decisions.
            </p>
          </div>
        </section>

        {/* Guides by category */}
        <div className="container-width py-14">
          {categoryOrder.map(cat => {
            const catGuides = guides.filter(g => g.category === cat);
            if (catGuides.length === 0) return null;
            return (
              <section key={cat} className="mb-14">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                  <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(20px,2.5vw,28px)', fontStyle: 'italic', fontWeight: 400, color: 'var(--ink)', margin: 0 }}>
                    {guideCategories[cat]}
                  </h2>
                  <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {catGuides.map(g => (
                    <Link key={g.slug} href={`/guides/${g.slug}/`} className="card group" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', padding: '20px 18px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                        <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--brand)', background: categoryColour[g.category], padding: '3px 10px', borderRadius: 20 }}>
                          {guideCategories[g.category]}
                        </span>
                        <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 10, fontWeight: 300, color: 'var(--dust)' }}>{g.readingTime} min read</span>
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 17, fontStyle: 'italic', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.3, marginBottom: 8, flex: 1, transition: 'color 0.12s' }}
                        className="group-hover:text-brand-500">
                        {g.title}
                      </h3>
                      <p className="body-sm" style={{ color: 'var(--dust)', lineHeight: 1.55 }}>
                        {g.heroParagraph.split('.')[0]}.
                      </p>
                      <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 11, fontWeight: 500, color: 'var(--brand)', marginTop: 12 }}>Read guide →</span>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}
