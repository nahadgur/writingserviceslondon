'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';
import { siteConfig } from '@/data/site';

export function ContactPageClient() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />
      <main id="main-content" className="flex-grow" style={{ background: 'var(--parchment)' }}>
        <section style={{ background: 'var(--ink)', color: '#fff' }}>
          <div className="container-width pt-20 pb-12">
            <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>Contact — get in touch</p>
            <h1
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                lineHeight: 1.05,
                color: '#fff',
              }}
              className="mb-4"
            >
              How to reach <em style={{ color: 'var(--brand)' }}>{siteConfig.name}</em>
            </h1>
            <p
              className="max-w-2xl"
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 300,
                fontSize: 17,
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.72)',
              }}
            >
              The fastest way to engage the matching service is the enquiry form. For questions about how the service works, data requests, or feedback about a matched professional, use the channels below.
            </p>
          </div>
        </section>

        <section className="container-width py-14">
          <Breadcrumbs items={[{ label: 'Contact' }]} />

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8">

            {/* Get matched */}
            <div
              style={{
                background: '#fff',
                border: '0.5px solid var(--border)',
                borderRadius: 8,
                padding: 28,
              }}
            >
              <p className="eyebrow mb-3" style={{ color: 'var(--brand)' }}>Get matched</p>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 24,
                  fontWeight: 400,
                  lineHeight: 1.2,
                  color: 'var(--ink)',
                  marginBottom: 12,
                }}
              >
                Start a free enquiry
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 300,
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: 'rgba(28,24,20,0.7)',
                  marginBottom: 20,
                }}
              >
                Tell us your situation. We&apos;ll introduce you to up to three vetted will writers within 24 hours. Free, no obligation.
              </p>
              <button onClick={() => setModal(true)} className="btn-primary">
                Open the enquiry form
              </button>
            </div>

            {/* General questions */}
            <div
              style={{
                background: 'var(--parchment-2)',
                border: '0.5px solid var(--border)',
                borderRadius: 8,
                padding: 28,
              }}
            >
              <p className="eyebrow mb-3" style={{ color: 'rgba(28,24,20,0.5)' }}>General questions</p>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 24,
                  fontWeight: 400,
                  lineHeight: 1.2,
                  color: 'var(--ink)',
                  marginBottom: 12,
                }}
              >
                Email or write to us
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 300,
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: 'rgba(28,24,20,0.7)',
                  marginBottom: 20,
                }}
              >
                Questions about how the matching service works, complaints about a matched professional, or feedback. We aim to respond within two working days.
              </p>
              <p
                style={{
                  fontFamily: 'ui-monospace, monospace',
                  fontSize: 14,
                  color: 'var(--ink)',
                }}
              >
                hello@willwritingserviceslondon.co.uk
              </p>
            </div>

            {/* Data requests */}
            <div
              style={{
                background: 'var(--parchment-2)',
                border: '0.5px solid var(--border)',
                borderRadius: 8,
                padding: 28,
              }}
            >
              <p className="eyebrow mb-3" style={{ color: 'rgba(28,24,20,0.5)' }}>UK GDPR data requests</p>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 24,
                  fontWeight: 400,
                  lineHeight: 1.2,
                  color: 'var(--ink)',
                  marginBottom: 12,
                }}
              >
                Privacy and data
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 300,
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: 'rgba(28,24,20,0.7)',
                  marginBottom: 20,
                }}
              >
                Subject access requests, data deletion requests, or any other UK GDPR matter. We respond within one calendar month, as the regulation requires.
              </p>
              <p
                style={{
                  fontFamily: 'ui-monospace, monospace',
                  fontSize: 14,
                  color: 'var(--ink)',
                }}
              >
                privacy@willwritingserviceslondon.co.uk
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 300,
                  fontSize: 12,
                  color: 'rgba(28,24,20,0.55)',
                  marginTop: 12,
                  lineHeight: 1.6,
                }}
              >
                See our full{' '}
                <Link href="/privacy/" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>
                  privacy notice
                </Link>
                {' '}for details on what we collect and your rights.
              </p>
            </div>

            {/* Joining the network */}
            <div
              style={{
                background: 'var(--parchment-2)',
                border: '0.5px solid var(--border)',
                borderRadius: 8,
                padding: 28,
              }}
            >
              <p className="eyebrow mb-3" style={{ color: 'rgba(28,24,20,0.5)' }}>For will writers</p>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 24,
                  fontWeight: 400,
                  lineHeight: 1.2,
                  color: 'var(--ink)',
                  marginBottom: 12,
                }}
              >
                Join the network
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 300,
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: 'rgba(28,24,20,0.7)',
                  marginBottom: 20,
                }}
              >
                Vetted will writers and estate planning specialists serving London — get in touch about joining the matched network. We check qualifications, professional indemnity, and complaints history before accepting any new partner.
              </p>
              <p
                style={{
                  fontFamily: 'ui-monospace, monospace',
                  fontSize: 14,
                  color: 'var(--ink)',
                }}
              >
                partners@willwritingserviceslondon.co.uk
              </p>
            </div>

          </div>

          <p
            className="max-w-3xl mx-auto mt-10 text-center"
            style={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 300,
              fontSize: 13,
              lineHeight: 1.7,
              color: 'rgba(28,24,20,0.55)',
            }}
          >
            We are not a law firm and do not provide legal advice. We introduce clients to qualified will writers and estate planning specialists. See our{' '}
            <Link href="/about/" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>about page</Link>
            {' '}for how the matching service works, or our{' '}
            <Link href="/terms/" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>terms</Link>
            {' '}for the rules of using this site.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
