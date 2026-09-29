'use client';

import Link from 'next/link';
import type { Guide } from '@/data/guides';
import { FAQ } from '@/components/FAQ';
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
  return (
    <>

      <article className="edition-prose edition-guide-prose">
        {guide.sections.map((section, i) => (
          <section key={section.id} id={section.id} style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 'clamp(20px,2.5vw,28px)', fontStyle: 'normal', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.2, marginBottom: 16 }}>
              {section.heading}
            </h2>

            {section.body.map((para, j) => (
              <p key={j} className="article-p" style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 14, fontWeight: 400, color: 'var(--stone)', lineHeight: 1.8, marginBottom: 14 }}>
                {parseBody(para)}
              </p>
            ))}

            {section.legalNote && (
              <div className="edition-article-note" style={{ borderLeft: '3px solid var(--brand)', background: 'var(--parchment-2)', padding: "12px 16px", borderRadius: '0 4px 4px 0', margin: '18px 0' }}>
                <p style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 12, fontWeight: 400, color: 'var(--stone)', lineHeight: 1.65, margin: 0 }}>
                  <span style={{ fontWeight: 500, color: 'var(--ink)' }}>Legal note: </span>
                  {section.legalNote}
                </p>
              </div>
            )}

            {section.tip && (
              <div className="edition-article-note" style={{ background: 'rgba(212,105,25,0.06)', border: '0.5px solid rgba(212,105,25,0.25)', borderRadius: 0, padding: "12px 16px", margin: '18px 0' }}>
                <p style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 12, fontWeight: 400, color: 'var(--stone)', lineHeight: 1.65, margin: 0 }}>
                  <span style={{ fontWeight: 500, color: "var(--brand)" }}>Tip: </span>
                  {section.tip}
                </p>
              </div>
            )}

            {section.toolSlot && <div className="edition-tool-embed">{renderTool(section.toolSlot)}</div>}

            {/* Mid-guide CTA after section 3 */}
            {i === 2 && (
              <div className="article-cta" style={{ background: 'var(--ink)', borderRadius: 0, padding: "22px 20px", textAlign: 'center', margin: '36px 0' }}>
                <p className="article-cta-title" style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 20, fontStyle: 'normal', color: '#fff', marginBottom: 6 }}>
                  Speak to a specialist about your estate
                </p>
                <p style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 12, fontWeight: 400, color: "rgba(255,255,255,0.76)", marginBottom: 14 }}>
                  Wills, LPAs and probate support and estate planning professionals across London.
                </p>
                <Link href="/contact/#enquiry" className="btn-primary">Find my specialist</Link>
              </div>
            )}
          </section>
        ))}

        {/* FAQ */}
        <FAQ faqs={guide.faqs} title={`${guide.title} -- common questions`} />

        {/* Bottom CTA */}
        <div className="article-cta" style={{ background: 'var(--ink)', borderRadius: 0, padding: "32px 32px", textAlign: 'center', marginTop: 32 }}>
          <h2 className="article-cta-title" style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 'clamp(22px,3vw,32px)', fontStyle: 'normal', fontWeight: 400, color: '#fff', marginBottom: 10 }}>
            Book a will writing consultation
          </h2>
          <p style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.76)", marginBottom: 20, maxWidth: 420, margin: '0 auto 20px' }}>
            Wills, LPAs and probate support covering your area. Most wills are drafted within 3 to 7 working days.
          </p>
          <Link href="/contact/#enquiry" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 13, fontWeight: 500, padding: "13px 28px", borderRadius: 0, border: 'none', cursor: 'pointer' }}>
            Book a consultation
          </Link>
        </div>
      </article>
    </>
  );
}
