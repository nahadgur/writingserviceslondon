'use client';

import { useState } from 'react';

const serif = (size: number | string, extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: 'var(--font-cormorant), Georgia, serif',
  fontSize: size, fontStyle: 'italic', fontWeight: 400,
  color: 'var(--ink)', lineHeight: 1.2, ...extra,
});

const TRIGGERS = [
  {
    id: 'nowill',
    label: 'You do not have a will at all',
    urgent: true,
    reason: 'Without a will your estate passes under the intestacy rules. An unmarried partner inherits nothing. Your wishes have no legal force.',
    verdict: 'You need a will -- not a review',
    detail: 'Dying without a will means the Administration of Estates Act 1925 decides who gets everything, not you. For unmarried couples this is especially severe -- a partner of 20 years receives nothing under intestacy.',
    cta: 'Make your will now',
    href: '/services/single-will/',
  },
  {
    id: 'marriage',
    label: 'Got married or formed a civil partnership',
    urgent: true,
    reason: 'Marriage automatically revokes any existing will under s.18 Wills Act 1837. You are currently intestate even if you have a document.',
    verdict: 'Your existing will is legally void',
    detail: 'Marriage revokes a will in England and Wales as a matter of law. Your previous will has no legal effect. You need new mirror wills made immediately -- ideally with provisions that reflect your new family structure.',
    cta: 'Make new mirror wills',
    href: '/services/mirror-wills/',
  },
  {
    id: 'divorce',
    label: 'Divorced or separated',
    urgent: true,
    reason: 'Divorce removes your ex-spouse as beneficiary and executor under s.18A Wills Act 1837 -- but leaves gaps where their gifts were.',
    verdict: 'Your will has critical gaps',
    detail: 'Your ex-spouse is removed from your will automatically on divorce -- but nothing replaces their share. Gifts that were going to them may now fall into residue, or cause a partial intestacy. A full rewrite is needed.',
    cta: 'Rewrite your will',
    href: '/services/single-will/',
  },
  {
    id: 'bereavement',
    label: 'An executor or main beneficiary has died',
    urgent: true,
    reason: 'A deceased executor cannot act and must be replaced. A deceased beneficiary\'s gift may lapse and pass to unintended recipients.',
    verdict: 'Your will needs immediate updating',
    detail: 'If your named executor has died, your estate faces an administration problem at a difficult time. If a main beneficiary has died and there is no substitute gift clause, their share may go to the wrong people or trigger a partial intestacy.',
    cta: 'Update your will',
    href: '/services/single-will/',
  },
  {
    id: 'child',
    label: 'Had a child or grandchild',
    urgent: false,
    reason: 'A new child may not be named in your will. Guardianship and distribution provisions may need updating.',
    verdict: 'Your will should be reviewed now',
    detail: 'A will that does not appoint a guardian for children under 18 leaves that decision to the courts. If your existing will names specific children only, new arrivals may not be adequately provided for. A review and update is advisable.',
    cta: 'Review your will',
    href: '/services/estate-planning/',
  },
  {
    id: 'property',
    label: 'Bought or sold a property',
    urgent: false,
    reason: 'A purchase may push your estate above the IHT threshold. A sale may make specific bequests in your will meaningless.',
    verdict: 'Your IHT position may have changed significantly',
    detail: 'London property values mean a purchase can tip an estate from non-taxable to owing tens of thousands in inheritance tax. Use our IHT calculator to check your current position, then consider trust planning if your estate is now above the threshold.',
    cta: 'Check your IHT position',
    href: '/guides/inheritance-tax-guide-london/',
  },
  {
    id: 'business',
    label: 'Started, sold, or significantly changed a business',
    urgent: false,
    reason: 'Business assets require specialist will provisions -- BPR, succession planning, and shareholder agreement coordination that a standard will does not address.',
    verdict: 'Your will needs specialist review',
    detail: 'A sold business changes your estate composition entirely -- the business property relief that sheltered shares from IHT disappears. A new business creates assets and liabilities a standard will cannot handle. Specialist drafting is needed.',
    cta: 'Speak to a business specialist',
    href: '/services/trust-planning/',
  },
  {
    id: 'assets',
    label: 'Significant change in asset values',
    urgent: false,
    reason: 'Estate value growth -- particularly London property -- may now create an IHT liability where none existed when your will was made.',
    verdict: 'Your estate may now owe inheritance tax',
    detail: 'The nil-rate band has been frozen at £325,000 since 2009. If your estate has grown since your will was made, you may now owe substantial IHT that your family is not prepared for. An estate planning review will quantify this and identify what can be done.',
    cta: 'Calculate your IHT exposure',
    href: '/tools/',
  },
  {
    id: 'overseas',
    label: 'Acquired overseas property or moved abroad',
    urgent: false,
    reason: 'Overseas assets may not pass under your UK will. Many countries require a local will for property in that jurisdiction.',
    verdict: 'You may need a separate overseas will',
    detail: 'UK wills can direct overseas assets in principle, but Spain, France, and many other countries require local succession law to apply to property within their borders. A UK-only will may leave foreign property in legal limbo for years.',
    cta: 'Speak to a specialist',
    href: '/services/estate-planning/',
  },
  {
    id: 'fiveyears',
    label: 'More than 5 years since your last review',
    urgent: false,
    reason: 'Tax law, thresholds, and family circumstances all change. A will written 5+ years ago may be missing planning opportunities that now exist.',
    verdict: 'A periodic review is overdue',
    detail: 'The residence nil-rate band was introduced in 2017. Pension IHT rules change in 2027. If your will predates these changes, it may be missing £175,000 or more in available allowances. A review costs a fraction of what outdated provisions can cost your estate.',
    cta: 'Get a will review',
    href: '/services/estate-planning/',
  },
];

export function ReviewDateCalculator() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => setChecked(prev => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  const selected = TRIGGERS.filter(t => checked.has(t.id));
  const hasUrgent = selected.some(t => t.urgent);
  const primary = selected.find(t => t.urgent) ?? selected[0];
  const others = primary ? selected.filter(t => t.id !== primary.id) : [];

  return (
    <div style={{ background: 'var(--parchment-2)', border: '0.5px solid var(--border)', borderRadius: 8, padding: '24px 22px', marginTop: 20, marginBottom: 20 }}>
      <p style={serif(22, { marginBottom: 6 })}>Will review checker</p>
      <p style={{ fontFamily: 'var(--font-inter)', fontSize: 14, fontWeight: 300, color: 'var(--dust)', marginBottom: 20 }}>
        Tick any events that have occurred since your will was last made or reviewed.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
        {TRIGGERS.map(t => (
          <label key={t.id} style={{
            display: 'flex', alignItems: 'flex-start', gap: 12, cursor: 'pointer',
            padding: '12px 16px', borderRadius: 6,
            background: checked.has(t.id) ? (t.urgent ? 'rgba(200,50,50,0.06)' : 'rgba(212,105,25,0.06)') : 'var(--parchment)',
            border: `0.5px solid ${checked.has(t.id) ? (t.urgent ? 'rgba(200,50,50,0.3)' : 'rgba(212,105,25,0.3)') : 'var(--border)'}`,
            transition: 'all 0.12s',
          }}>
            <input
              type="checkbox"
              checked={checked.has(t.id)}
              onChange={() => toggle(t.id)}
              style={{ marginTop: 3, flexShrink: 0, accentColor: '#D46919', width: 15, height: 15 }}
            />
            <div>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: 14, fontWeight: 400, color: 'var(--ink)', marginBottom: checked.has(t.id) ? 5 : 0 }}>
                {t.label}
              </p>
              {checked.has(t.id) && (
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: 13, fontWeight: 300, color: t.urgent ? '#c0392b' : 'var(--stone)', lineHeight: 1.6 }}>
                  {t.reason}
                </p>
              )}
            </div>
          </label>
        ))}
      </div>

      {selected.length === 0 && (
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: 14, fontWeight: 300, color: 'var(--dust)', textAlign: 'center' }}>
          Tick any events above to see what action is needed.
        </p>
      )}

      {primary && (
        <div style={{
          background: hasUrgent ? 'rgba(200,50,50,0.05)' : 'rgba(212,105,25,0.07)',
          border: `0.5px solid ${hasUrgent ? 'rgba(200,50,50,0.3)' : 'rgba(212,105,25,0.3)'}`,
          borderRadius: 8, padding: '22px 22px',
        }}>
          {selected.length > 1 && (
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: hasUrgent ? '#c0392b' : '#D46919', marginBottom: 8 }}>
              {selected.length} triggers identified -- showing most urgent
            </p>
          )}
          <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 24, fontStyle: 'italic', fontWeight: 400, color: hasUrgent ? '#c0392b' : '#D46919', marginBottom: 10, lineHeight: 1.2 }}>
            {primary.verdict}
          </p>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: 14, fontWeight: 300, color: 'var(--stone)', lineHeight: 1.7, marginBottom: 18 }}>
            {primary.detail}
          </p>
          <a href={primary.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', fontFamily: 'var(--font-inter)', fontSize: 13, fontWeight: 500, color: '#fff', background: hasUrgent ? '#c0392b' : '#D46919', padding: '11px 22px', borderRadius: 4 }}>
            {primary.cta} →
          </a>

          {others.length > 0 && (
            <div style={{ marginTop: 18, paddingTop: 16, borderTop: `0.5px solid ${hasUrgent ? 'rgba(200,50,50,0.2)' : 'rgba(212,105,25,0.2)'}` }}>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: 11, fontWeight: 500, color: 'var(--dust)', marginBottom: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Also flagged
              </p>
              {others.map(t => (
                <p key={t.id} style={{ fontFamily: 'var(--font-inter)', fontSize: 13, fontWeight: 300, color: 'var(--stone)', lineHeight: 1.6, marginBottom: 4 }}>
                  · {t.verdict}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
