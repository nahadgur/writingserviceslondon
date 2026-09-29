'use client';

import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import { getPricingSummary } from '@/data/pricing';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export function ServicesIndexClient() {

  return (
    <>
      <Header />

      <main data-edition-page="services" id="main-content">
        {/* Hero */}
        <section data-edition-hero data-directory-hero style={{ background: 'var(--parchment)', borderBottom: '0.5px solid var(--border)', padding: "32px 0 32px" }}>
          <div className="container-width max-w-3xl">
            <p className="eyebrow mb-4">Estate planning services</p>
            <h1 style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 'clamp(32px,4vw,52px)', fontStyle: 'normal', color: 'var(--ink)', lineHeight: 1.12, marginBottom: 16 }}>
              Our Services
            </h1>
            <p className="body-lg max-w-xl">
              We cover every aspect of will writing and estate planning.
              Tell us your situation and quote a fixed fee before any work begins,
              not a directory listing.
            </p>
          </div>
        </section>

        {/* Services list */}
        <section className="section-padding">
          <div className="container-width">
            <div style={{ borderTop: '0.5px solid var(--border)' }}>
              {services.map(s => {
                const p = getPricingSummary(s.slug);
                return (
                  <article key={s.id} className="directory-service">
                    <div className="directory-service-image"><Image src={s.image} alt={s.title} fill sizes="(min-width:1000px) 180px, 88px" className="object-cover" /></div>
                    <div className="directory-service-copy"><h2><Link href={'/services/' + s.slug + '/'}>{s.title}</Link></h2><p>{s.description}</p></div>
                    <div className="directory-service-action">
                      {p && <div><p className="directory-price">{p.range}</p><p className="directory-price-note">{p.note}</p></div>}
                      <Link href="/contact/#enquiry" className="btn-secondary">Find a specialist</Link>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div style={{ background: 'var(--ink)', borderRadius: 0, padding: "32px 28px", marginTop: 24, display: 'flex', flexDirection: 'column', gap: 16 }}
              className="md:flex-row md:items-center md:justify-between">
              <div>
                <p style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 24, fontStyle: 'normal', color: '#fff', marginBottom: 4 }}>
                  Not sure what you need?
                </p>
                <p className="body-md" style={{ color: "rgba(255,255,255,0.76)" }}>
                  Tell us your situation and we will advise which services apply
                </p>
              </div>
              <Link href="/contact/#enquiry"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 13, fontWeight: 500, padding: "13px 24px", borderRadius: 0, border: 'none', cursor: 'pointer', flexShrink: 0 }}>
                Speak to someone
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
