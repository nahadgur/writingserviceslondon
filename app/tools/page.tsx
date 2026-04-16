'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { IHTCalculator } from '@/components/tools/IHTCalculator';
import { IntestacyCalculator } from '@/components/tools/IntestacyCalculator';
import { LPAEstimator } from '@/components/tools/LPAEstimator';
import { ProbateFeeCalculator } from '@/components/tools/ProbateFeeCalculator';
import { CareCalculator } from '@/components/tools/CareCalculator';
import { ReviewDateCalculator } from '@/components/tools/ReviewDateCalculator';

const tools = [
  {
    id: 'iht',
    title: 'Inheritance tax calculator',
    desc: 'Estimate your estate\'s IHT liability using current 2026 thresholds including the nil-rate band and residence nil-rate band.',
    guide: '/guides/inheritance-tax-guide-london/',
    guideLabel: 'IHT guide',
    component: <IHTCalculator />,
  },
  {
    id: 'intestacy',
    title: 'Intestacy outcome calculator',
    desc: 'See who inherits if you die without a will under the Administration of Estates Act 1925 -- including what unmarried partners receive.',
    guide: '/guides/intestacy-rules-uk/',
    guideLabel: 'Intestacy guide',
    component: <IntestacyCalculator />,
  },
  {
    id: 'lpa',
    title: 'LPA cost estimator',
    desc: 'Calculate the cost of registering a lasting power of attorney including OPG fees, fee reductions, and the current 20-week timeline.',
    guide: '/guides/lasting-power-of-attorney-guide/',
    guideLabel: 'LPA guide',
    component: <LPAEstimator />,
  },
  {
    id: 'probate',
    title: 'Probate fee calculator',
    desc: 'Estimate HMCTS court fees and professional costs for probate on a London estate, including timeline by complexity.',
    guide: '/guides/probate-guide-london/',
    guideLabel: 'Probate guide',
    component: <ProbateFeeCalculator />,
  },
  {
    id: 'care',
    title: 'Care cost protection estimator',
    desc: 'Illustrates the potential benefit of a protective property trust in shielding your estate from residential care cost means-testing.',
    guide: '/guides/trust-planning-guide/',
    guideLabel: 'Trust planning guide',
    component: <CareCalculator />,
  },
  {
    id: 'review',
    title: 'Will review checker',
    desc: 'Find out whether your will needs reviewing based on life events since it was last made -- including marriage, divorce, and asset changes.',
    guide: '/guides/updating-your-will/',
    guideLabel: 'Updating your will guide',
    component: <ReviewDateCalculator />,
  },
];

export default function ToolsPage() {
  const [modal, setModal] = useState(false);

  const serif = (size: number | string, extra?: React.CSSProperties): React.CSSProperties => ({
    fontFamily: 'var(--font-cormorant), Georgia, serif',
    fontSize: size, fontStyle: 'italic', fontWeight: 400,
    color: 'var(--ink)', lineHeight: 1.15, ...extra,
  });

  return (
    <>
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />
      <main>
        {/* Dark hero */}
        <section style={{ background: '#1c1814', position: 'relative', overflow: 'hidden' }}>
          <svg aria-hidden="true" style={{ position: 'absolute', right: 0, bottom: 0, opacity: 0.12, pointerEvents: 'none' }} width="240" height="160" viewBox="0 0 240 160" fill="none">
            <rect x="10"  y="80"  width="28" height="80"  fill="white"/>
            <rect x="46"  y="50"  width="32" height="110" fill="white"/>
            <rect x="86"  y="28"  width="38" height="132" fill="white"/>
            <rect x="96"  y="44"  width="7"  height="9"   fill="#1c1814"/>
            <rect x="108" y="44"  width="7"  height="9"   fill="#1c1814"/>
            <rect x="96"  y="62"  width="7"  height="9"   fill="#1c1814"/>
            <rect x="132" y="68"  width="26" height="92"  fill="white"/>
            <rect x="166" y="40"  width="34" height="120" fill="white"/>
            <rect x="175" y="54"  width="6"  height="8"   fill="#1c1814"/>
            <rect x="185" y="54"  width="6"  height="8"   fill="#1c1814"/>
            <rect x="208" y="60"  width="26" height="100" fill="white"/>
          </svg>
          <div className="container-width" style={{ position: 'relative', zIndex: 10, paddingTop: 48, paddingBottom: 56 }}>
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#e8943a', marginBottom: 16 }}>
              Free tools
            </p>
            <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(30px,5vw,50px)', fontWeight: 400, fontStyle: 'italic', color: '#fff', lineHeight: 1.1, marginBottom: 16, maxWidth: 580 }}>
              Estate planning calculators for London residents
            </h1>
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.58)', lineHeight: 1.65, maxWidth: 500 }}>
              Six free tools covering inheritance tax, intestacy, LPA costs, probate fees, care cost protection, and will reviews. All figures current for 2026.
            </p>
          </div>
        </section>

        {/* Tools grid with jump links */}
        <div className="container-width py-12">

          {/* Jump links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 48, paddingBottom: 20, borderBottom: '0.5px solid var(--border)' }}>
            {tools.map(t => (
              <a key={t.id} href={`#${t.id}`} style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 11, fontWeight: 400, color: 'var(--stone)', textDecoration: 'none', padding: '5px 12px', borderRadius: 20, border: '0.5px solid var(--border)', background: 'var(--parchment)', transition: 'all 0.12s' }}
                className="hover:text-brand-500">
                {t.title}
              </a>
            ))}
          </div>

          {/* Tools */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
            {tools.map(t => (
              <section key={t.id} id={t.id} style={{ scrollMarginTop: 80 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginBottom: 6 }}>
                  <h2 style={serif('clamp(20px,2.5vw,28px)')}>{t.title}</h2>
                  <Link href={t.guide} style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 11, fontWeight: 400, color: 'var(--brand)', textDecoration: 'none', whiteSpace: 'nowrap', padding: '4px 12px', border: '0.5px solid rgba(212,105,25,0.35)', borderRadius: 20, background: 'rgba(212,105,25,0.06)' }}>
                    Read {t.guideLabel} →
                  </Link>
                </div>
                <p className="body-md mb-2" style={{ maxWidth: 580 }}>{t.desc}</p>
                {t.component}
              </section>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ background: 'var(--ink)', borderRadius: 8, padding: '40px 36px', textAlign: 'center', marginTop: 56 }}>
            <h2 style={serif('clamp(20px,3vw,30px)', { color: '#fff', marginBottom: 10 })}>
              Ready to speak to a specialist?
            </h2>
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,0.5)', marginBottom: 20, maxWidth: 400, margin: '0 auto 20px' }}>
              Free matching with vetted will writers and estate planning professionals across London. Most clients are introduced within 24 hours.
            </p>
            <button onClick={() => setModal(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-inter), sans-serif', fontSize: 13, fontWeight: 500, padding: '13px 28px', borderRadius: 4, border: 'none', cursor: 'pointer' }}>
              Get your free match
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
