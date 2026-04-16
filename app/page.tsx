'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, CheckCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { services } from '@/data/services';
import { AREA_HUBS } from '@/data/locations';
import { FAQS_HOME } from '@/data/site';

const trust = [
  { head: 'Matched in 24 hours',     body: 'A relevant introduction — not a generic list of names' },
  { head: 'Every specialist vetted', body: 'Qualifications, insurance, and client feedback all checked' },
  { head: 'Free to all clients',     body: 'Paid by the professionals in our network, never by you' },
  { head: 'Home visits available',   body: 'Most specialists will come to you, across all London areas' },
];

const steps = [
  {
    n: '1',
    head: 'Tell us about your situation',
    body: 'Share your family circumstances, the assets involved, and any specific requirements — blended family, home visit, urgent timeline. The more context you give, the better the match.',
  },
  {
    n: '2',
    head: 'We identify the right specialist',
    body: 'We review your situation and identify will writers in our London network who handle estates like yours every day. Not a directory search — a considered introduction.',
  },
  {
    n: '3',
    head: 'You choose, with no pressure',
    body: 'Review the introduction, speak to the specialist, and decide whether to proceed. Terms agreed directly with them. Free re-matching included if anything is not right.',
  },
];

const whyUs = [
  {
    head: 'We read your situation, not just your postcode',
    body: 'Generic referral services match on geography. We match on the nature of your estate — whether you are a cohabiting couple needing urgent protection, a Hampstead family with a £2m IHT exposure, or an executor dealing with a complex probate. The distinction matters.',
  },
  {
    head: 'Every specialist in our network is independently vetted',
    body: 'We check professional qualifications, membership of recognised bodies (Society of Will Writers, Solicitors Regulation Authority), professional indemnity insurance, and recent client feedback before any specialist joins our network. You are not taking a risk.',
  },
  {
    head: 'We are transparent about what we are',
    body: 'We are a matching service, not a will writing firm. We do not draft wills, provide legal advice, or take a cut of the fee you pay your specialist. Our income comes from the professionals in our network. There is no conflict of interest.',
  },
];

const featuredAreas = AREA_HUBS.slice(0, 8);

export default function HomePage() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          className="hero-dark flex flex-col"
          style={{ minHeight: 'clamp(520px,85vh,680px)' }}
        >
          {/* Photo — swap src for real image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-main.png')" }}
            aria-hidden="true"
          />
          <div className="g-top" />
          <div className="g-bot" />

          <div className="relative z-10 mt-auto container-width py-14 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-10 lg:gap-16 items-end">

              {/* Copy */}
              <div>
                <p className="eyebrow anim-0" style={{ color: 'rgba(255,255,255,0.45)', marginBottom: 18 }}>
                  Free estate planning matching &nbsp;·&nbsp; London
                </p>
                <h1
                  className="anim-1"
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: 'clamp(38px,5.5vw,68px)',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    lineHeight: 1.07,
                    color: '#fff',
                    marginBottom: 20,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Because the people<br />
                  you love deserve<br />
                  to be protected
                </h1>
                <p
                  className="anim-2"
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: 14,
                    fontWeight: 300,
                    lineHeight: 1.78,
                    color: 'rgba(255,255,255,0.62)',
                    maxWidth: 460,
                    marginBottom: 30,
                  }}
                >
                  We connect London families with vetted will writers and estate planning
                  specialists — matched to your specific situation, not a generic list.
                  Free service. Introductions within 24 hours.
                </p>
                <div className="flex flex-wrap items-center gap-3 anim-3">
                  <button onClick={() => setModal(true)} className="btn-primary">
                    Find my specialist
                  </button>
                  <Link href="/services/" className="btn-ghost">
                    Our services
                  </Link>
                </div>
                <p
                  className="anim-3"
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: 10,
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.28)',
                    marginTop: 18,
                    lineHeight: 1.8,
                  }}
                >
                  Free to all clients &nbsp;&middot;&nbsp; No obligation &nbsp;&middot;&nbsp; Every specialist vetted and insured<br />
                  We are paid by the professionals in our network, never by you
                </p>
              </div>

              {/* Services card — desktop only, white text on semi-transparent bg */}
              <div
                className="hidden lg:block"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '0.5px solid rgba(255,255,255,0.13)',
                  borderRadius: 8,
                  padding: '22px 22px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: 9,
                    fontWeight: 400,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.4)',
                    marginBottom: 16,
                  }}
                >
                  Services we match
                </p>
                {[
                  'Single &amp; mirror wills',
                  'Lasting power of attorney',
                  'Trust &amp; estate planning',
                  'Probate support',
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-2.5 mb-3">
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--brand)', flexShrink: 0 }} />
                    <span
                      style={{
                        fontFamily: 'var(--font-cormorant), serif',
                        fontSize: 15,
                        color: 'rgba(255,255,255,0.78)',
                      }}
                      dangerouslySetInnerHTML={{ __html: s }}
                    />
                  </div>
                ))}
                <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.1)', marginTop: 16, paddingTop: 16 }}>
                  <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7 }}>
                    Free matching &nbsp;·&nbsp; 24hr response<br />Covering all London areas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust strip ──────────────────────────────────────── */}
        <div className="trust-strip">
          {trust.map((t, i) => (
            <div key={i} className="trust-item">
              <p className="trust-head">{t.head}</p>
              <p className="trust-body">{t.body}</p>
            </div>
          ))}
        </div>

        {/* ── Services ─────────────────────────────────────────── */}
        <section className="section-padding" style={{ background: '#fff' }}>
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-start">
              <div>
                <p className="eyebrow mb-3">What we match you with</p>
                <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(28px,3.5vw,42px)', fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.15, marginBottom: 16 }}>
                  Every aspect of will writing and estate planning
                </h2>
                <p className="body-lg mb-6">
                  Our London network covers the full range — from a first will for a young couple
                  who just bought a property together, to comprehensive IHT planning for an
                  established family facing a seven-figure inheritance tax bill.
                </p>
                <p className="body-md mb-8">
                  The matching matters. A specialist who drafts simple wills for young professionals
                  is not the right person for a complex trust structure. We match based on the
                  nature of your estate, not just your postcode.
                </p>
                <button onClick={() => setModal(true)} className="btn-primary">
                  Tell us your situation
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map(s => (
                  <Link key={s.id} href={`/services/${s.slug}/`} className="card group overflow-hidden">
                    <div style={{ height: 140, overflow: 'hidden', background: 'var(--parchment-2)' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={s.image} alt={`${s.title} in London`}
                        className="w-full h-full object-cover"
                        style={{ transition: 'transform 0.5s' }}
                        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                        loading="lazy" />
                    </div>
                    <div style={{ padding: '16px 18px' }}>
                      <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 18, color: 'var(--ink)', marginBottom: 4, transition: 'color 0.12s' }}
                        className="group-hover:text-brand-500">
                        {s.title}
                      </h3>
                      <p className="body-sm line-clamp-2 mb-3">{s.description}</p>
                      <span className="eyebrow-brand flex items-center gap-1">
                        Find a specialist <ArrowRight size={10} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Why us ───────────────────────────────────────────── */}
        <section className="section-padding" style={{ background: 'var(--parchment)' }}>
          <div className="container-width">
            <div className="max-w-2xl mb-12">
              <p className="eyebrow mb-3">Why use this service</p>
              <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(28px,3.5vw,42px)', fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.15 }}>
                Not a directory. A considered match.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyUs.map((w, i) => (
                <div key={i} style={{ paddingLeft: 20, borderLeft: '2px solid var(--brand)' }}>
                  <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 18, color: 'var(--ink)', marginBottom: 10 }}>
                    {w.head}
                  </h3>
                  <p className="body-md">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ─────────────────────────────────────── */}
        <section className="section-padding" style={{ background: '#fff' }}>
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
              <div>
                <p className="eyebrow mb-3">The process</p>
                <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(28px,3.5vw,42px)', fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.15, marginBottom: 32 }}>
                  Three steps to the right specialist
                </h2>
                <div className="space-y-4">
                  {steps.map(step => (
                    <div key={step.n} className="step-row">
                      <span className="step-num">{step.n}</span>
                      <div>
                        <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 13, fontWeight: 500, color: 'var(--ink)', marginBottom: 3 }}>
                          {step.head}
                        </p>
                        <p className="body-sm leading-relaxed">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 32 }}>
                  <button onClick={() => setModal(true)} className="btn-primary">
                    Start your free enquiry
                  </button>
                  <p className="body-sm mt-3" style={{ color: 'var(--dust)' }}>
                    No obligation. Free re-matching if the first introduction is not right.
                  </p>
                </div>
              </div>

              {/* Testimonials */}
              <div>
                <p className="eyebrow mb-4">What clients say</p>
                <Testimonials limit={3} />
              </div>
            </div>
          </div>
        </section>

        {/* ── Areas ────────────────────────────────────────────── */}
        <section className="section-padding" style={{ background: 'var(--parchment)' }}>
          <div className="container-width">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <p className="eyebrow mb-3">Coverage</p>
                <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(28px,3.5vw,42px)', fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.15 }}>
                  London areas we serve
                </h2>
              </div>
              <Link href="/location/" className="btn-secondary self-start sm:self-auto">
                All 15 areas →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {featuredAreas.map(hub => (
                <Link key={hub.slug} href={`/location/${hub.slug}/`} className="card p-4 group">
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin size={11} style={{ color: 'var(--brand)', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 16, color: 'var(--ink)', transition: 'color 0.12s', lineHeight: 1.2 }}
                        className="group-hover:text-brand-500">
                        {hub.name}
                      </p>
                      <p className="body-sm">{hub.postcode}</p>
                    </div>
                  </div>
                  <p className="body-sm line-clamp-1" style={{ paddingLeft: 19 }}>
                    {hub.subAreas.slice(0, 2).map(s => s.name).join(', ')}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="section-padding" style={{ background: '#fff' }}>
          <div className="container-width max-w-3xl">
            <FAQ faqs={FAQS_HOME} title="Common questions about our matching service" />
          </div>
        </section>

        {/* ── Final CTA ────────────────────────────────────────── */}
        <section style={{ background: 'var(--ink)', padding: '80px 0' }}>
          <div className="container-width text-center">
            <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Free estate planning matching &nbsp;·&nbsp; London
            </p>
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(30px,4vw,48px)', fontStyle: 'italic', color: '#fff', marginBottom: 16, lineHeight: 1.15 }}>
              Ready to protect the people<br className="hidden sm:block" /> you love most?
            </h2>
            <p className="body-lg mb-8 mx-auto" style={{ maxWidth: 480, color: 'rgba(255,255,255,0.52)' }}>
              Most London families leave estate planning too long. The right specialist
              is waiting — and the first step takes two minutes.
            </p>
            <button
              onClick={() => setModal(true)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#fff', color: 'var(--ink)',
                fontFamily: 'var(--font-inter), sans-serif', fontSize: 13, fontWeight: 500,
                padding: '14px 32px', borderRadius: 4, border: 'none', cursor: 'pointer',
                letterSpacing: '0.02em',
              }}
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
