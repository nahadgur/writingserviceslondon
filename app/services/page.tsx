'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

const pricing: Record<string, { range: string; note: string }> = {
  'single-will':               { range: '£150 – £350', note: 'One-off, fixed fee' },
  'mirror-wills':              { range: '£250 – £550', note: 'For a pair of wills' },
  'lasting-power-of-attorney': { range: '£300 – £900', note: 'Per LPA, + £82 OPG fee' },
  'trust-planning':            { range: '£500 – £1,500', note: 'Depends on type' },
  'estate-planning':           { range: '£400 – £1,200', note: 'Full review, fixed fee' },
  'probate-support':           { range: '£1,500 – £3,500', note: 'Straightforward estates' },
};

export default function ServicesIndexPage() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main>
        {/* Hero */}
        <section style={{ background: 'var(--parchment)', borderBottom: '0.5px solid var(--border)', padding: '56px 0 48px' }}>
          <div className="container-width max-w-3xl">
            <p className="eyebrow mb-4">Estate planning services</p>
            <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(32px,4vw,52px)', fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.12, marginBottom: 16 }}>
              What we match you with
            </h1>
            <p className="body-lg max-w-xl">
              Our network covers every aspect of will writing and estate planning.
              Tell us your situation and we find the right specialist — a considered introduction,
              not a directory listing.
            </p>
          </div>
        </section>

        {/* Services list */}
        <section className="section-padding">
          <div className="container-width">
            <div style={{ borderTop: '0.5px solid var(--border)' }}>
              {services.map(s => {
                const p = pricing[s.slug];
                return (
                  <div key={s.id} className="svc-row">
                    {/* Mobile: image + title stacked */}
                    <div className="flex gap-4 items-start mb-3 lg:hidden">
                      <div style={{ width: 72, height: 52, borderRadius: 5, overflow: 'hidden', flexShrink: 0, background: 'var(--parchment-2)' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={s.image} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div>
                        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 20, color: 'var(--ink)', lineHeight: 1.2, marginBottom: 3 }}>
                          {s.title}
                        </h2>
                        {p && (
                          <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 16, color: 'var(--brand)' }}>{p.range}</p>
                        )}
                      </div>
                    </div>
                    <p className="body-md mb-4 lg:hidden">{s.description}</p>

                    {/* Desktop: 4-col grid */}
                    <div className="hidden lg:grid" style={{ gridTemplateColumns: '88px 1fr 1fr auto', gap: 24, alignItems: 'center' }}>
                      <div style={{ width: 88, height: 60, borderRadius: 5, overflow: 'hidden', background: 'var(--parchment-2)' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={s.image} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div>
                        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 22, color: 'var(--ink)', marginBottom: 4 }}>{s.title}</h2>
                        <p className="body-md line-clamp-2">{s.description}</p>
                      </div>
                      {p && (
                        <div>
                          <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 20, color: 'var(--ink)', marginBottom: 2 }}>{p.range}</p>
                          <p className="body-sm">{p.note}</p>
                        </div>
                      )}
                      <Link href={`/services/${s.slug}/`} className="btn-secondary" style={{ whiteSpace: 'nowrap' }}>
                        Find a specialist <ArrowRight size={11} />
                      </Link>
                    </div>

                    {/* Mobile CTA */}
                    <div className="flex flex-wrap gap-3 lg:hidden">
                      <Link href={`/services/${s.slug}/`} className="btn-primary">
                        Find a specialist <ArrowRight size={11} />
                      </Link>
                      {p && <p className="body-sm self-center">{p.note}</p>}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div style={{ background: 'var(--ink)', borderRadius: 8, padding: '32px 28px', marginTop: 24, display: 'flex', flexDirection: 'column', gap: 16 }}
              className="md:flex-row md:items-center md:justify-between">
              <div>
                <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 24, fontStyle: 'italic', color: '#fff', marginBottom: 4 }}>
                  Not sure what you need?
                </p>
                <p className="body-md" style={{ color: 'rgba(255,255,255,0.48)' }}>
                  Tell us your situation and we will advise which services apply
                </p>
              </div>
              <button onClick={() => setModal(true)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-inter), sans-serif', fontSize: 13, fontWeight: 500, padding: '13px 24px', borderRadius: 4, border: 'none', cursor: 'pointer', flexShrink: 0 }}>
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
