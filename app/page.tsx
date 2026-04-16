'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, CheckCircle, ArrowRight, Shield, Clock, Star, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { services } from '@/data/services';
import { AREA_HUBS } from '@/data/locations';
import { FAQS_HOME } from '@/data/site';

const trustItems = [
  { icon: <Clock size={13} style={{ color: 'var(--brand)' }} />, head: 'Matched in 24 hours',     body: 'A relevant introduction — not a generic list' },
  { icon: <Shield size={13} style={{ color: 'var(--brand)' }} />, head: 'Every specialist vetted', body: 'Qualifications, insurance and feedback checked' },
  { icon: <Star size={13} style={{ color: 'var(--brand)' }} />,   head: 'Free to all clients',     body: 'Paid by our network, never by you' },
  { icon: <Users size={13} style={{ color: 'var(--brand)' }} />,  head: 'Home visits available',   body: 'Most specialists will come to you' },
];

const urgencyCards = [
  { head: 'You bought a property together',  body: 'Unmarried partners have zero rights under the Intestacy Rules. A will protects your partner\'s right to your shared home.', cta: 'Mirror wills for couples →', href: '/services/mirror-wills/' },
  { head: 'You have children',               body: 'Without a will, a court decides who raises your children if both parents die. A will names their guardian.', cta: 'Single wills with guardianship →', href: '/services/single-will/' },
  { head: 'Your estate has grown',           body: 'London property values mean most families exceed the £325k IHT threshold. Planning now can reduce or eliminate the bill.', cta: 'Estate planning review →', href: '/services/estate-planning/' },
  { head: 'A parent\'s health is declining', body: 'An LPA must be registered while capacity exists. Once it\'s lost, the application cannot be made — ever.', cta: 'Lasting power of attorney →', href: '/services/lasting-power-of-attorney/' },
];

const whyUs = [
  { head: 'We read your situation, not just your postcode', body: 'Generic referral services match on geography. We match on the nature of your estate — a cohabiting couple needing urgent protection, a Hampstead family with a seven-figure IHT exposure, or an executor dealing with a complex probate.' },
  { head: 'Every specialist independently vetted',         body: 'We check qualifications, membership of recognised bodies (Society of Will Writers, Solicitors Regulation Authority), professional indemnity insurance, and recent client feedback before any specialist joins our network.' },
  { head: 'Transparent about what we are',                body: 'We are a matching service, not a will writing firm. We do not draft wills, provide legal advice, or take a cut of your specialist\'s fee. Our income comes from the professionals in our network.' },
];

const processSteps = [
  { n: '1', head: 'Tell us what you need', body: 'Leave your email, phone number, and the type of service you\'re looking for. Two minutes of context means a far better match.' },
  { n: '2', head: 'We identify the right specialist', body: 'We review your situation and identify will writers in our London network who handle estates like yours regularly — a considered introduction, not an algorithm.' },
  { n: '3', head: 'You choose, with no pressure', body: 'Review the introduction, speak to the specialist, decide whether to proceed. You agree terms directly with them. Free re-matching if it\'s not right.' },
];

const featuredAreas = AREA_HUBS.slice(0, 8);

export default function HomePage() {
  const [modal, setModal] = useState(false);

  const serif = (size: number | string, extra?: React.CSSProperties): React.CSSProperties => ({
    fontFamily: 'var(--font-cormorant), Georgia, serif',
    fontSize: size,
    fontStyle: 'italic',
    fontWeight: 400,
    color: 'var(--ink)',
    lineHeight: 1.15,
    ...extra,
  });

  return (
    <>
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main>

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section className="hero-dark flex flex-col" style={{ minHeight: 'clamp(520px, 85vh, 680px)' }}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-main.png')" }}
            aria-hidden="true"
          />
          <div className="g-top" />
          <div className="g-bot" />

          <div className="relative z-10 mt-auto container-width py-14 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-10 lg:gap-14 items-end">

              {/* Copy */}
              <div>
                <p className="eyebrow anim-0" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 18 }}>
                  Free will writing matching service &nbsp;·&nbsp; London
                </p>
                <h1 className="anim-1" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(38px,5.5vw,66px)', fontStyle: 'italic', fontWeight: 400, lineHeight: 1.07, color: '#fff', marginBottom: 18, letterSpacing: '-0.01em' }}>
                  Because the people<br />
                  you love deserve<br />
                  to be protected
                </h1>
                <p className="anim-2" style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 14, fontWeight: 300, lineHeight: 1.78, color: 'rgba(255,255,255,0.65)', maxWidth: 460, marginBottom: 28 }}>
                  More than half of UK adults have no will in place. For London families
                  with property, pensions, and children depending on them — the consequences
                  of dying without one are serious and avoidable. We match you with the right
                  specialist, free, within 24 hours.
                </p>
                <div className="flex flex-wrap items-center gap-3 anim-3">
                  <button onClick={() => setModal(true)} className="btn-primary">Find my specialist</button>
                  <Link href="/services/" className="btn-ghost">See all services</Link>
                </div>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 10, fontWeight: 300, color: 'rgba(255,255,255,0.28)', marginTop: 16, lineHeight: 1.8 }}>
                  Free to all clients &nbsp;&middot;&nbsp; No obligation &nbsp;&middot;&nbsp; Every specialist vetted and insured
                </p>
              </div>

              {/* Services card — SOLID dark background for legibility */}
              <div
                className="hidden lg:block anim-2"
                style={{
                  background: 'rgba(20,14,8,0.92)',
                  border: '0.5px solid rgba(255,255,255,0.15)',
                  borderRadius: 8,
                  padding: '22px 20px',
                  backdropFilter: 'blur(4px)',
                }}
              >
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 9, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 16 }}>
                  We match you with
                </p>
                {[
                  { label: 'Single & mirror wills',       href: '/services/single-will/' },
                  { label: 'Lasting power of attorney',   href: '/services/lasting-power-of-attorney/' },
                  { label: 'Trust & estate planning',     href: '/services/trust-planning/' },
                  { label: 'Probate support',             href: '/services/probate-support/' },
                ].map((s, i) => (
                  <Link key={i} href={s.href} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, textDecoration: 'none', transition: 'opacity 0.15s' }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--brand)', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 16, fontStyle: 'italic', color: '#fff' }}>
                      {s.label}
                    </span>
                  </Link>
                ))}
                <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.12)', marginTop: 16, paddingTop: 16 }}>
                  <button
                    onClick={() => setModal(true)}
                    style={{ width: '100%', background: 'var(--brand)', color: '#fff', fontFamily: 'var(--font-inter), sans-serif', fontSize: 12, fontWeight: 500, padding: '10px', borderRadius: 4, border: 'none', cursor: 'pointer', letterSpacing: '0.02em' }}
                  >
                    Get matched free →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST STRIP ──────────────────────────────────────── */}
        <div className="trust-strip">
          {trustItems.map((t, i) => (
            <div key={i} className="trust-item">
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                {t.icon}
                <p className="trust-head">{t.head}</p>
              </div>
              <p className="trust-body">{t.body}</p>
            </div>
          ))}
        </div>

        {/* ── WHY IT MATTERS ───────────────────────────────────── */}
        <section className="section-padding" style={{ background: '#fff' }}>
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-start">
              <div>
                <p className="eyebrow mb-3">Why this matters</p>
                <h2 style={serif('clamp(28px,3.5vw,42px)', { marginBottom: 16 })}>
                  Most people leave it<br />too long
                </h2>
                <p className="body-lg mb-5">
                  The triggers are predictable — buying a property, having a child,
                  a parent's health declining. But most families act only after
                  something has already gone wrong.
                </p>
                <p className="body-md mb-8">
                  A will takes two weeks to complete. An LPA takes five months to register.
                  A grant of probate on an intestate estate takes six months or more.
                  Every day without the right documents in place is a risk your family carries for you.
                </p>
                <button onClick={() => setModal(true)} className="btn-primary">Get matched today</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {urgencyCards.map((card, i) => (
                  <div key={i} style={{ background: 'var(--parchment)', border: '0.5px solid var(--border)', borderRadius: 8, padding: '20px 18px', borderLeft: '2px solid var(--brand)' }}>
                    <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 17, color: 'var(--ink)', marginBottom: 8 }}>{card.head}</h3>
                    <p className="body-sm mb-4" style={{ lineHeight: 1.65 }}>{card.body}</p>
                    <Link href={card.href} className="eyebrow-brand flex items-center gap-1" style={{ fontSize: 10 }}>
                      {card.cta} <ArrowRight size={10} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────────────── */}
        <section className="section-padding" style={{ background: 'var(--parchment)' }}>
          <div className="container-width">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <p className="eyebrow mb-3">What we match you with</p>
                <h2 style={serif('clamp(28px,3.5vw,42px)')}>Every aspect of will writing<br className="hidden sm:block" /> and estate planning</h2>
              </div>
              <Link href="/services/" className="btn-secondary self-start sm:self-auto">All services →</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {services.map(s => (
                <Link key={s.id} href={`/services/${s.slug}/`} className="card group overflow-hidden">
                  <div style={{ height: 148, overflow: 'hidden', background: 'var(--parchment-2)' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.image} alt={`${s.title} specialists in London`} className="w-full h-full object-cover" style={{ transition: 'transform 0.5s' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                      loading="lazy" />
                  </div>
                  <div style={{ padding: '16px 18px' }}>
                    <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 19, color: 'var(--ink)', marginBottom: 5, transition: 'color 0.12s' }} className="group-hover:text-brand-500">
                      {s.title}
                    </h3>
                    <p className="body-sm line-clamp-2 mb-3">{s.description}</p>
                    <span className="eyebrow-brand flex items-center gap-1">Find a specialist <ArrowRight size={10} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY USE US ───────────────────────────────────────── */}
        <section className="section-padding" style={{ background: '#fff' }}>
          <div className="container-width">
            <div className="max-w-2xl mb-12">
              <p className="eyebrow mb-3">Why use this service</p>
              <h2 style={serif('clamp(28px,3.5vw,42px)')}>Not a directory.<br />A considered match.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {whyUs.map((w, i) => (
                <div key={i} style={{ paddingLeft: 20, borderLeft: '2px solid var(--brand)' }}>
                  <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 19, color: 'var(--ink)', marginBottom: 10 }}>{w.head}</h3>
                  <p className="body-md">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS + TESTIMONIALS ───────────────────────────── */}
        <section className="section-padding" style={{ background: 'var(--parchment)' }}>
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
              <div>
                <p className="eyebrow mb-3">How it works</p>
                <h2 style={serif('clamp(28px,3.5vw,42px)', { marginBottom: 28 })}>Three steps to the<br />right specialist</h2>
                <div className="space-y-4 mb-10">
                  {processSteps.map(step => (
                    <div key={step.n} className="step-row">
                      <span className="step-num">{step.n}</span>
                      <div>
                        <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 13, fontWeight: 500, color: 'var(--ink)', marginBottom: 3 }}>{step.head}</p>
                        <p className="body-sm leading-relaxed">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button onClick={() => setModal(true)} className="btn-primary">Start your free enquiry</button>
                <p className="body-sm mt-3" style={{ color: 'var(--dust)' }}>No obligation. Free re-matching if the first introduction is not right.</p>
              </div>
              <div>
                <p className="eyebrow mb-4">What clients say</p>
                <Testimonials limit={3} />
              </div>
            </div>
          </div>
        </section>

        {/* ── AREAS ────────────────────────────────────────────── */}
        <section className="section-padding" style={{ background: '#fff' }}>
          <div className="container-width">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <p className="eyebrow mb-3">London areas we cover</p>
                <h2 style={serif('clamp(28px,3.5vw,42px)')}>Every part of London,<br className="hidden sm:block" /> every type of estate</h2>
              </div>
              <Link href="/location/" className="btn-secondary self-start sm:self-auto">All 15 areas →</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {featuredAreas.map(hub => (
                <Link key={hub.slug} href={`/location/${hub.slug}/`} className="card p-4 group">
                  <div className="flex items-start gap-2 mb-1.5">
                    <MapPin size={11} style={{ color: 'var(--brand)', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 16, color: 'var(--ink)', transition: 'color 0.12s', lineHeight: 1.2 }} className="group-hover:text-brand-500">
                        {hub.name}
                      </p>
                      <p className="body-sm">{hub.postcode}</p>
                    </div>
                  </div>
                  <p className="body-sm line-clamp-1 hidden sm:block" style={{ paddingLeft: 19 }}>
                    {hub.subAreas.slice(0, 2).map(s => s.name).join(', ')}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="section-padding" style={{ background: 'var(--parchment)' }}>
          <div className="container-width max-w-3xl">
            <p className="eyebrow mb-3">Common questions</p>
            <FAQ faqs={FAQS_HOME} title="Will writing in London — what you need to know" />
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────── */}
        <section style={{ background: 'var(--ink)', padding: '80px 0' }}>
          <div className="container-width text-center">
            <p className="eyebrow mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Free will writing matching service &nbsp;·&nbsp; London
            </p>
            <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(30px,4vw,50px)', fontStyle: 'italic', fontWeight: 400, color: '#fff', marginBottom: 16, lineHeight: 1.15 }}>
              Don't leave the people you love<br className="hidden sm:block" /> without protection
            </h2>
            <p className="mx-auto mb-8" style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.5)', maxWidth: 480, lineHeight: 1.78 }}>
              A will takes two weeks. Getting matched takes two minutes.
            </p>
            <button onClick={() => setModal(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-inter), sans-serif', fontSize: 13, fontWeight: 500, padding: '14px 32px', borderRadius: 4, border: 'none', cursor: 'pointer', letterSpacing: '0.02em' }}>
              Find my specialist
            </button>
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 10, fontWeight: 300, color: 'rgba(255,255,255,0.22)', marginTop: 14 }}>
              Free &nbsp;&middot;&nbsp; No obligation &nbsp;&middot;&nbsp; Vetted specialists &nbsp;&middot;&nbsp; 24hr response
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
