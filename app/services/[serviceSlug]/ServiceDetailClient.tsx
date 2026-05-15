'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react';
import { services, type Service } from '@/data/services';
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

// Editorial pairing — for each service, the adjacent service most often
// taken alongside it. Hand-curated rather than alphabetical so the
// cross-link reflects how clients actually buy.
const PAIRS_WITH: Record<string, { slug: string; reason: string }> = {
  'single-will': {
    slug: 'lasting-power-of-attorney',
    reason: 'Most clients drafting their first will also need an LPA — both make decisions on your behalf, just at different points (one after death, one during life). Setting them up together at the same appointment saves time and reduces total fees.',
  },
  'mirror-wills': {
    slug: 'lasting-power-of-attorney',
    reason: 'Mirror wills protect each spouse on death; mirror LPAs protect each spouse if they lose mental capacity during life. Couples almost always need both — and bundling them with a single specialist is materially cheaper than separate engagements.',
  },
  'lasting-power-of-attorney': {
    slug: 'single-will',
    reason: 'An LPA without a will leaves a critical gap — your attorney can manage your affairs while you live, but on death the estate falls to intestacy rules unless a will is in place. Most LPA clients don\'t already have an up-to-date will.',
  },
  'trust-planning': {
    slug: 'estate-planning',
    reason: 'Trusts only work as part of a coordinated estate plan — the trust deed, the will, the lifetime gifts, and the IHT calculations have to align. Engaging a full estate planning review at the same time ensures the trust isn\'t built in isolation.',
  },
  'estate-planning': {
    slug: 'trust-planning',
    reason: 'A full estate planning review almost always identifies one or more trust opportunities — protective property trusts for property, discretionary trusts for IHT mitigation, life interest trusts for second-marriage protection. Booking both together avoids the back-and-forth of returning to discuss trusts after the review.',
  },
  'probate-support': {
    slug: 'estate-planning',
    reason: 'Going through probate often surfaces gaps in your own estate planning that you hadn\'t considered. Many probate clients book an estate planning review for themselves shortly after — the experience of administering an estate makes the value of clean planning vivid.',
  },
};

// Common mistakes per service — hand-written. High E-E-A-T value for
// a regulated estate-planning niche where the failure modes are
// well-known and rarely surfaced upfront.
const COMMON_MISTAKES: Record<string, { headline: string; mistakes: { what: string; why: string }[] }> = {
  'single-will': {
    headline: 'Three mistakes that invalidate a will',
    mistakes: [
      {
        what: 'Witnesses who are also beneficiaries',
        why: 'Under Section 15 of the Wills Act 1837, a beneficiary who witnesses a will (or whose spouse witnesses) loses their gift entirely. The will itself stays valid — but they get nothing. A specialist will writer brings independent witnesses or arranges them properly.',
      },
      {
        what: 'No proper revocation of earlier wills',
        why: 'Without an explicit revocation clause, an old will can survive alongside a new one — creating two competing documents at probate. The default revocation language used by template kits is often legally insufficient, especially where assets have moved jurisdictions.',
      },
      {
        what: 'Forgetting digital assets and pension nominations',
        why: 'Pensions, life insurance, and ISAs typically pass via separate nomination forms, not the will. A will that "leaves everything to my children" doesn\'t automatically include pension death benefits — those need to be nominated separately, and many people never do it.',
      },
    ],
  },
  'mirror-wills': {
    headline: 'Three mistakes couples make with mirror wills',
    mistakes: [
      {
        what: 'Assuming mirror wills protect the surviving partner forever',
        why: 'After the first death, the survivor can change their mirror will entirely — including disinheriting the children of the deceased. Mutual wills (a different legal instrument) can prevent this; specialist drafting protects against it explicitly.',
      },
      {
        what: 'No protection for property if the survivor remarries',
        why: 'A mirror will leaves everything to the survivor outright. If the survivor later remarries and dies without updating the will, the new spouse may inherit instead of the children. A protective property trust within the wills solves this — most couples don\'t know to ask for it.',
      },
      {
        what: 'Ignoring the cohabiting-couple gap',
        why: 'Mirror wills only work for married couples and civil partners. Cohabiting couples need carefully drafted individual wills — the survivor of a cohabiting couple has no automatic inheritance right, regardless of how long they\'ve lived together. A specialist will writer asks the relationship-status question upfront.',
      },
    ],
  },
  'lasting-power-of-attorney': {
    headline: 'Three mistakes that delay or derail an LPA',
    mistakes: [
      {
        what: 'Not registering the LPA until it\'s needed',
        why: 'An LPA only takes effect once registered with the Office of the Public Guardian, which currently takes 16-20 weeks. Waiting until you need the LPA (e.g. after a sudden stroke) means months of delay during which no-one can act. A specialist registers it immediately, then it sits ready to use.',
      },
      {
        what: 'Choosing only one attorney with no replacement',
        why: 'If your sole attorney dies, becomes incapacitated, or refuses to act, the LPA fails entirely and the Court of Protection takes over (slow, expensive, and your wishes are no longer the deciding factor). A specialist always recommends a replacement attorney structure.',
      },
      {
        what: 'Combining property/financial and health/welfare into one decision',
        why: 'These are two separate LPAs requiring separate forms, separate registration fees, and often different attorneys. Many people set up only the property/financial one and discover at the worst moment that no-one is authorised to make health decisions on their behalf.',
      },
    ],
  },
  'trust-planning': {
    headline: 'Three mistakes that turn trust planning into a tax problem',
    mistakes: [
      {
        what: 'Setting up a trust without considering the IHT entry charge',
        why: 'Settlements over the £325k nil-rate band can trigger an immediate 20% lifetime IHT charge plus 10-yearly periodic charges. A trust that "saves IHT" can actually accelerate it if structured carelessly. Specialists model the full cost over a 30-year horizon before recommending any trust.',
      },
      {
        what: 'Naming yourself or your spouse as trustee and beneficiary',
        why: 'A trust where the settlor retains too much control can be treated as a "gift with reservation of benefit" and pulled back into the estate for IHT — defeating the entire purpose. Independent professional trusteeship or carefully structured arrangements protect against this.',
      },
      {
        what: 'Ignoring the trust\'s own income tax and capital gains exposure',
        why: 'Trusts pay income tax at the trust rate (45% on most income above £1,000) and CGT at 24% on residential property gains. A trust that holds a buy-to-let or investment portfolio may produce a worse net-of-tax outcome than direct ownership. Specialist tax advice up front prevents this.',
      },
    ],
  },
  'estate-planning': {
    headline: 'Three mistakes that hollow out an estate plan',
    mistakes: [
      {
        what: 'Doing the will, then never reviewing it',
        why: 'A will written before children, second marriages, business sales, or property purchases is often actively dangerous by the time it takes effect. Specialist plans build in scheduled review triggers — typically every 3-5 years and after every major life event.',
      },
      {
        what: 'Not coordinating wills, LPAs, pensions, and trusts',
        why: 'Each instrument controls different assets and operates under different rules. A pension nomination naming an ex-spouse, a trust deed that contradicts the will, or an LPA appointing a different attorney from the will\'s executor are all common — and all surface only at the worst moment.',
      },
      {
        what: 'Treating IHT planning as a one-off exercise',
        why: 'IHT thresholds, rates, and reliefs change with every Budget. A plan that worked under the 2017 rules may have £50k+ of unintended exposure under the current regime. Estate plans need scheduled tax-planning reviews, not just legal reviews.',
      },
    ],
  },
  'probate-support': {
    headline: 'Three mistakes that delay or inflate probate',
    mistakes: [
      {
        what: 'Taking on personal liability without realising it',
        why: 'Executors who distribute the estate before settling all debts and claims can become personally liable for the shortfall. The s27 Trustee Act 1925 advertisement and proper waiting period protect against this — generalists often skip it; specialists never do.',
      },
      {
        what: 'Missing the 6-month deemed-domicile and IHT instalment windows',
        why: 'IHT must be paid before the grant of probate is issued (with limited instalment options for property). Missing the structuring windows costs interest at HMRC\'s rate. A specialist sequences the probate application around these deadlines.',
      },
      {
        what: 'Failing to claim the unused nil-rate band from a predeceased spouse',
        why: 'A surviving spouse can claim up to 100% of the deceased spouse\'s unused nil-rate band — potentially adding £325k of IHT-free allowance to the second estate. The claim has a strict two-year window from the second death. Generalist probate often misses this entirely.',
      },
    ],
  },
};

export function ServiceDetailClient({ service }: { service: Service }) {
  const [modal, setModal] = useState(false);

  const pricing = pricingMap[service.slug];
  const pair = PAIRS_WITH[service.slug];
  const pairedService = pair ? services.find(s => s.slug === pair.slug) : undefined;
  const mistakes = COMMON_MISTAKES[service.slug];

  const content = serviceContent[service.id] || serviceContent[services[0].id];
  const related = services.filter(s => s.id !== service.id);
  const combinedFaqs = [...(service.faqs || []), ...FAQS_SERVICES];

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

              {/* Common mistakes — hand-written, high E-E-A-T value */}
              {mistakes && (
                <section className="mb-12">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle size={16} style={{ color: 'var(--brand)', flexShrink: 0 }} />
                    <p className="eyebrow" style={{ color: 'var(--brand)', margin: 0 }}>Common mistakes</p>
                  </div>
                  <h2 style={h('clamp(22px,2.5vw,30px)', { marginBottom: 16 })}>
                    {mistakes.headline}
                  </h2>
                  <div className="space-y-4">
                    {mistakes.mistakes.map((m, i) => (
                      <div
                        key={i}
                        style={{
                          background: 'var(--parchment-2)',
                          border: '0.5px solid var(--border)',
                          borderLeft: '3px solid var(--brand)',
                          borderRadius: 6,
                          padding: '18px 22px',
                        }}
                      >
                        <p
                          style={{
                            fontFamily: 'var(--font-cormorant), Georgia, serif',
                            fontSize: 18,
                            fontStyle: 'italic',
                            color: 'var(--ink)',
                            marginBottom: 8,
                            lineHeight: 1.3,
                          }}
                        >
                          {i + 1}. {m.what}
                        </p>
                        <p className="body-md" style={{ lineHeight: 1.7, color: 'var(--stone)' }}>
                          {m.why}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Pairs well with — editorial cross-link */}
              {pairedService && pair && (
                <section className="mb-12">
                  <div
                    className="card-parchment p-6"
                    style={{ borderLeft: '3px solid var(--brand)' }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <ArrowRight size={14} style={{ color: 'var(--brand)', flexShrink: 0 }} />
                      <p className="eyebrow" style={{ color: 'var(--brand)', margin: 0 }}>Pairs well with</p>
                    </div>
                    <h3 style={h(22, { marginBottom: 10 })}>
                      {pairedService.title}
                    </h3>
                    <p className="body-md mb-4" style={{ lineHeight: 1.7 }}>{pair.reason}</p>
                    <Link
                      href={`/services/${pairedService.slug}/`}
                      style={{
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: 13,
                        fontWeight: 500,
                        color: 'var(--brand)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                      }}
                    >
                      See {pairedService.title.toLowerCase()} <ArrowRight size={12} />
                    </Link>
                  </div>
                </section>
              )}

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
