'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { AREA_HUBS } from '@/data/locations';
import { FAQS_SERVICES } from '@/data/site';
import { serviceContent } from '@/data/serviceContent';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';

const pricingMap: Record<string, { from: string; to: string; note: string }> = {
  'single-will':               { from: '£150', to: '£350', note: 'One-off, fixed fee' },
  'mirror-wills':              { from: '£250', to: '£550', note: 'For a pair, fixed fee' },
  'lasting-power-of-attorney': { from: '£300', to: '£900', note: 'Per LPA + £82 OPG fee' },
  'trust-planning':            { from: '£500', to: '£1,500', note: 'Depends on type' },
  'estate-planning':           { from: '£400', to: '£1,200', note: 'Full review, fixed fee' },
  'probate-support':           { from: '£1,500', to: '£3,500', note: 'Straightforward estates' },
};

export default function ServicePage({ params }: { params: { serviceSlug: string } }) {
  const [modal, setModal] = useState(false);
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) notFound();

  const content   = serviceContent[service.id] || serviceContent[services[0].id];
  const related   = services.filter(s => s.id !== service.id);
  const combinedFaqs = [...(service.faqs || []), ...FAQS_SERVICES];
  const pricing   = pricingMap[service.slug];

  const h = (size: number | string, style?: React.CSSProperties) => ({
    fontFamily: 'var(--font-cormorant), Georgia, serif',
    fontSize: size,
    fontStyle: 'italic' as const,
    fontWeight: 400 as const,
    color: 'var(--ink)',
    lineHeight: 1.18,
    ...style,
  });

  return (
    <>
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} defaultService={service.title} />
      <Header onOpenModal={() => setModal(true)} />

      <main>
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="hero-dark" style={{ minHeight: 360 }}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${service.image}')`, opacity: 0.35 }}
          />
          <div className="g-bot" />
          <div className="relative z-10 container-width py-12 md:py-16 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 lg:gap-10 items-end">
              <div>
                <Breadcrumbs dark items={[{ label: 'Services', href: '/services/' }, { label: service.title }]} />
                <h1 style={{ ...h('clamp(36px,5vw,60px)' as any), color: '#fff', marginTop: 20, marginBottom: 14 }}>
                  {service.title}
                </h1>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.6)', maxWidth: 420, lineHeight: 1.75, marginBottom: 22 }}>
                  {service.description}
                </p>
                <div className="flex flex-col gap-2 mb-6">
                  {['Compare up to 3 specialist quotes', 'Every professional vetted and insured', 'Covering all London areas'].map((b, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle size={13} style={{ color: 'var(--brand)', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,0.68)' }}>{b}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => setModal(true)} className="btn-primary lg:hidden">
                  Find my specialist
                </button>
              </div>
              <div className="hidden lg:block">
                <HeroLeadForm service={service.title} />
              </div>
            </div>
          </div>
        </section>

        {/* Mobile form */}
        <div className="lg:hidden px-5 py-6" style={{ background: 'var(--parchment)', borderBottom: '0.5px solid var(--border)' }}>
          <HeroLeadForm service={service.title} />
        </div>

        {/* ── Body ──────────────────────────────────────────────── */}
        <div className="container-width py-14 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 lg:gap-14">

            {/* Main */}
            <div>
              {/* What you need to know */}
              <h2 style={h('clamp(22px,2.5vw,30px)', { marginBottom: 16 })}>
                {service.title}: what you need to know
              </h2>
              <div className="space-y-4 mb-12">
                {content.intro.map((p, i) => (
                  <p key={i} className="body-md">{p}</p>
                ))}
              </div>

              {/* Benefits */}
              <h2 style={h('clamp(20px,2vw,26px)', { marginBottom: 16 })}>
                Why it matters for your estate
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
                {content.benefits.map((b, i) => (
                  <div key={i} className="benefit-card">
                    <h3 className="benefit-head">{b.title}</h3>
                    <p className="body-sm leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>

              {/* Is it right for you */}
              <h2 style={h('clamp(20px,2vw,26px)', { marginBottom: 12 })}>
                Is {service.title.toLowerCase()} right for you?
              </h2>
              <p className="body-md mb-4">{content.candidateIntro}</p>
              <div className="card-parchment p-5 mb-12">
                <ul className="space-y-3">
                  {content.candidates.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--brand)', flexShrink: 0, marginTop: 8 }} />
                      <span className="body-md">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <h2 style={h('clamp(20px,2vw,26px)', { marginBottom: 16 })}>How the process works</h2>
              <div className="space-y-3 mb-12">
                {content.process.map((step, i) => (
                  <div key={i} className="step-row">
                    <span className="step-num">{i + 1}</span>
                    <div>
                      <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 13, fontWeight: 500, color: 'var(--ink)', marginBottom: 2 }}>{step.title}</p>
                      <p className="body-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* London areas */}
              <h2 style={h('clamp(20px,2vw,26px)', { marginBottom: 12 })}>
                {service.title} across London
              </h2>
              <p className="body-md mb-5">
                Our network covers {service.title.toLowerCase()} specialists across all major London areas.
                Select your area to find specialists who serve your neighbourhood specifically.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-12">
                {AREA_HUBS.map(hub => (
                  <Link
                    key={hub.slug}
                    href={`/location/${hub.slug}/`}
                    className="card p-3 group"
                    style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--brand)', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 14, color: 'var(--ink)', transition: 'color 0.12s' }}
                      className="group-hover:text-brand-500">
                      {hub.name}
                    </span>
                    <span className="body-sm ml-auto">{hub.postcode}</span>
                  </Link>
                ))}
              </div>

              <FAQ faqs={combinedFaqs} title={`${service.title} — common questions`} />
            </div>

            {/* Sidebar */}
            <aside>
              <div className="lg:sticky" style={{ top: 28 }}>
                <div className="sidebar-box">
                  <h3 style={h(20, { color: 'var(--ink)', marginBottom: 6 })}>Get matched free</h3>
                  <p className="body-sm mb-4">Vetted {service.title.toLowerCase()} specialists covering your area. Most introductions within 24 hours.</p>
                  <button onClick={() => setModal(true)} className="btn-primary w-full justify-center">
                    Find a specialist
                  </button>
                  <ul className="mt-4 space-y-2 pt-4" style={{ borderTop: '0.5px solid var(--border)' }}>
                    {['Matched within 24 hours', 'Vetted and insured', 'Free to all clients'].map((p, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--brand)', flexShrink: 0 }} />
                        <span className="body-sm">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {pricing && (
                  <div className="sidebar-box">
                    <p className="eyebrow mb-3">Typical cost</p>
                    <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 26, color: 'var(--ink)', marginBottom: 3 }}>
                      {pricing.from} – {pricing.to}
                    </p>
                    <p className="body-sm">{pricing.note}</p>
                  </div>
                )}

                <div className="sidebar-dark p-5 rounded-lg">
                  <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 20, fontStyle: 'italic', color: '#fff', marginBottom: 6 }}>
                    Free matching service
                  </p>
                  <p className="body-sm mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    We are paid by the specialists in our network — never by clients.
                  </p>
                  <button onClick={() => setModal(true)}
                    style={{ width: '100%', background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-inter), sans-serif', fontSize: 12, fontWeight: 500, padding: '10px', borderRadius: 4, border: 'none', cursor: 'pointer' }}>
                    Get free quotes
                  </button>
                </div>

                <div className="sidebar-box mt-4">
                  <p className="eyebrow mb-3">Further reading</p>
                  {(() => {
                    const blogMap: Record<string, { slug: string; title: string }> = {
                      'single-will':               { slug: 'will-writing-services-london-2026-guide-for-families', title: 'Will Writing Guide for London Families' },
                      'mirror-wills':              { slug: 'mirror-wills-and-joint-wills-for-couples-in-london', title: 'Mirror Wills and Joint Wills for Couples' },
                      'lasting-power-of-attorney': { slug: 'lasting-power-of-attorney-and-will-writing-services-in-london', title: 'LPA and Will Writing Services in London' },
                      'trust-planning':            { slug: 'inheritance-tax-planning-and-will-writing-in-london', title: 'Inheritance Tax Planning and Will Writing' },
                      'estate-planning':           { slug: 'will-reviews-and-second-opinions-in-london', title: 'Will Reviews and Second Opinions in London' },
                      'probate-support':           { slug: 'common-will-writing-mistakes-london-families-make', title: 'Common Will Writing Mistakes London Families Make' },
                    };
                    const article = blogMap[service.slug];
                    if (!article) return null;
                    return (
                      <Link href={`/blog/${article.slug}/`}
                        style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 15, color: 'var(--stone)', textDecoration: 'none', lineHeight: 1.4, display: 'block', transition: 'color 0.12s' }}
                        className="hover:text-brand-500">
                        {article.title} →
                      </Link>
                    );
                  })()}
                </div>

                <div className="sidebar-box mt-4">
                  <p className="eyebrow mb-3">Other services</p>
                  <div className="space-y-2">
                    {related.map(s => (
                      <Link key={s.id} href={`/services/${s.slug}/`}
                        className="flex items-center gap-2 body-md"
                        style={{ transition: 'color 0.12s' }}>
                        <ArrowRight size={10} style={{ color: 'var(--dust)', flexShrink: 0 }} />
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
