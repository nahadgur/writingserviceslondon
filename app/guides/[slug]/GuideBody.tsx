'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Guide } from '@/data/guides';
import { FAQ } from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';
import { IHTCalculator } from '@/components/tools/IHTCalculator';
import { IntestacyCalculator } from '@/components/tools/IntestacyCalculator';
import { LPAEstimator } from '@/components/tools/LPAEstimator';
import { ProbateFeeCalculator } from '@/components/tools/ProbateFeeCalculator';
import { CareCalculator } from '@/components/tools/CareCalculator';
import { ReviewDateCalculator } from '@/components/tools/ReviewDateCalculator';

interface Props { guide: Guide; }

// Parse [link text](/path/) to JSX
function parseBody(text: string): React.ReactNode {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      return <Link key={i} href={match[2]} style={{ color: 'var(--brand)', textDecoration: 'underline', textDecorationColor: 'rgba(212,105,25,0.35)' }}>{match[1]}</Link>;
    }
    return part;
  });
}

function renderTool(slot: string) {
  switch (slot) {
    case 'iht-calculator':        return <IHTCalculator />;
    case 'intestacy-calculator':  return <IntestacyCalculator />;
    case 'lpa-estimator':         return <LPAEstimator />;
    case 'probate-fee-calculator':return <ProbateFeeCalculator />;
    case 'care-cost-calculator':  return <CareCalculator />;
    case 'review-date-calculator':return <ReviewDateCalculator />;
    default:                      return null;
  }
}

export function GuideBody({ guide }: Props) {
  const [modal, setModal] = useState(false);

  const guidesSlugs = guide.relatedGuides;

  return (
    <>
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />

      <article style={{ maxWidth: 720 }}>
        {guide.sections.map((section, i) => (
          <section key={section.id} id={section.id} style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(20px,2.5vw,28px)', fontStyle: 'italic', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.2, marginBottom: 16 }}>
              {section.heading}
            </h2>

            {section.body.map((para, j) => (
              <p key={j} style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 14, fontWeight: 300, color: 'var(--stone)', lineHeight: 1.8, marginBottom: 14 }}>
                {parseBody(para)}
              </p>
            ))}

            {section.legalNote && (
              <div style={{ borderLeft: '3px solid var(--brand)', background: 'var(--parchment-2)', padding: '12px 16px', borderRadius: '0 4px 4px 0', margin: '18px 0' }}>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 12, fontWeight: 300, color: 'var(--stone)', lineHeight: 1.65, margin: 0 }}>
                  <span style={{ fontWeight: 500, color: 'var(--ink)' }}>Legal note: </span>
                  {section.legalNote}
                </p>
              </div>
            )}

            {section.tip && (
              <div style={{ background: 'rgba(212,105,25,0.06)', border: '0.5px solid rgba(212,105,25,0.25)', borderRadius: 6, padding: '12px 16px', margin: '18px 0' }}>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 12, fontWeight: 300, color: 'var(--stone)', lineHeight: 1.65, margin: 0 }}>
                  <span style={{ fontWeight: 500, color: '#D46919' }}>Tip: </span>
                  {section.tip}
                </p>
              </div>
            )}

            {section.toolSlot && renderTool(section.toolSlot)}

            {/* Mid-guide CTA after section 3 */}
            {i === 2 && (
              <div style={{ background: 'var(--ink)', borderRadius: 8, padding: '22px 20px', textAlign: 'center', margin: '36px 0' }}>
                <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 20, fontStyle: 'italic', color: '#fff', marginBottom: 6 }}>
                  Speak to a specialist about your estate
                </p>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 12, fontWeight: 300, color: 'rgba(255,255,255,0.5)', marginBottom: 14 }}>
                  Free matching with vetted will writers and estate planning professionals across London.
                </p>
                <button onClick={() => setModal(true)} className="btn-primary">Find my specialist</button>
              </div>
            )}
          </section>
        ))}

        {/* FAQ */}
        <FAQ faqs={guide.faqs} title={`${guide.title} -- common questions`} />

        {/* Bottom CTA */}
        <div style={{ background: 'var(--ink)', borderRadius: 8, padding: '36px 32px', textAlign: 'center', marginTop: 40 }}>
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(22px,3vw,32px)', fontStyle: 'italic', fontWeight: 400, color: '#fff', marginBottom: 10 }}>
            Get matched with a London specialist
          </h2>
          <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,0.5)', marginBottom: 20, maxWidth: 420, margin: '0 auto 20px' }}>
            Free matching with vetted professionals covering your area. Most clients receive an introduction within 24 hours.
          </p>
          <button onClick={() => setModal(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-inter), sans-serif', fontSize: 13, fontWeight: 500, padding: '13px 28px', borderRadius: 4, border: 'none', cursor: 'pointer' }}>
            Get your free match
          </button>
        </div>
      </article>
    </>
  );
}
