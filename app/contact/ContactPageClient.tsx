'use client';

import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { siteConfig } from '@/data/site';

export function ContactPageClient() {

  return (
    <>
      <Header />
      <main data-edition-page="contact" id="main-content" className="flex-grow" style={{ background: 'var(--parchment)' }}>
        <section data-edition-hero style={{ background: 'var(--ink)', color: '#fff' }}>
          <div className="container-width pt-8 pb-12">
            <p className="eyebrow mb-4" style={{ color: "rgba(255,255,255,0.76)" }}>Contact — get in touch</p>
            <h1
              style={{
                fontFamily: 'var(--font-inter), Arial, sans-serif',
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
                fontFamily: 'var(--font-inter), Arial, sans-serif',
                fontWeight: 400,
                fontSize: 17,
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.72)',
              }}
            >
              The fastest way to get started is the enquiry form. For questions about how the service works, data requests, or feedback about work we have done, use the channels below.
            </p>
          </div>
        </section>

        <section className="container-width py-8">
          <Breadcrumbs items={[{ label: 'Contact' }]} />

          <div className="edition-contact-layout">

            {/* Book a consultation */}
            <div id="enquiry" className="edition-contact-booking"
              style={{
                background: '#fff',
                border: '0.5px solid var(--border)',
                borderRadius: 0,
                padding: 28,
              }}
            >
              <p className="eyebrow mb-3" style={{ color: 'var(--brand)' }}>Book a consultation</p>
              <h2
                style={{
                  fontFamily: 'var(--font-inter), Arial, sans-serif',
                  fontSize: 24,
                  fontWeight: 400,
                  lineHeight: 1.2,
                  color: 'var(--ink)',
                  marginBottom: 12,
                }}
              >
                Book a consultation
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-inter), Arial, sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: 'rgba(28,24,20,0.7)',
                  marginBottom: 20,
                }}
              >
                Tell us your situation. We will get back to you within one working day to arrange a consultation. Free, no obligation.
              </p>
              <div className="edition-contact-form">
                <HeroLeadForm />
              </div>
            </div>

            <div className="edition-contact-support">
            {/* General questions */}
            <div
              style={{
                background: 'var(--parchment-2)',
                border: '0.5px solid var(--border)',
                borderRadius: 0,
                padding: 28,
              }}
            >
              <p className="eyebrow mb-3" style={{ color: 'rgba(28,24,20,0.5)' }}>General questions</p>
              <h2
                style={{
                  fontFamily: 'var(--font-inter), Arial, sans-serif',
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
                  fontFamily: 'var(--font-inter), Arial, sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: 'rgba(28,24,20,0.7)',
                  marginBottom: 20,
                }}
              >
                Questions about how we work, or a complaint about work we have done, or feedback. We aim to respond within two working days.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-inter), Arial, sans-serif',
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
                borderRadius: 0,
                padding: 28,
              }}
            >
              <p className="eyebrow mb-3" style={{ color: 'rgba(28,24,20,0.5)' }}>UK GDPR data requests</p>
              <h2
                style={{
                  fontFamily: 'var(--font-inter), Arial, sans-serif',
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
                  fontFamily: 'var(--font-inter), Arial, sans-serif',
                  fontWeight: 400,
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
                  fontFamily: 'var(--font-inter), Arial, sans-serif',
                  fontSize: 14,
                  color: 'var(--ink)',
                }}
              >
                privacy@willwritingserviceslondon.co.uk
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-inter), Arial, sans-serif',
                  fontWeight: 400,
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
            </div>


          </div>

          <p
            className="max-w-3xl mx-auto mt-10 text-center"
            style={{
              fontFamily: 'var(--font-inter), Arial, sans-serif',
              fontWeight: 400,
              fontSize: 13,
              lineHeight: 1.7,
              color: 'rgba(28,24,20,0.55)',
            }}
          >
            We are not a firm of solicitors. Information on this site is general guidance about the law, not advice on your circumstances and estate planning specialists. See our{' '}
            <Link href="/about/" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>about page</Link>
            {' '}for how we work, or our{' '}
            <Link href="/terms/" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>terms</Link>
            {' '}for the rules of using this site.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
