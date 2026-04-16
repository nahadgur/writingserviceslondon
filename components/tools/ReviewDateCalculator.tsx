'use client';

import { useState } from 'react';

const serif = (size: number | string, extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: 'var(--font-cormorant), Georgia, serif',
  fontSize: size, fontStyle: 'italic', fontWeight: 400,
  color: 'var(--ink)', lineHeight: 1.2, ...extra,
});

const TRIGGERS = [
  { id: 'marriage',    label: 'Got married or formed a civil partnership',        urgent: true,  reason: 'Marriage automatically revokes your existing will under s.18 Wills Act 1837.' },
  { id: 'divorce',     label: 'Divorced or separated',                            urgent: true,  reason: 'Divorce removes your ex-spouse as beneficiary and executor but does not revoke the rest of your will -- review needed.' },
  { id: 'child',       label: 'Had a child or grandchild',                        urgent: false, reason: 'Your will may not include provisions for new arrivals, including guardianship appointments.' },
  { id: 'bereavement', label: 'An executor or main beneficiary has died',         urgent: true,  reason: 'A deceased executor cannot act. A deceased beneficiary\'s gift may lapse. Review immediately.' },
  { id: 'property',    label: 'Bought or sold a property',                        urgent: false, reason: 'Property acquisitions or disposals may affect your IHT position and existing specific bequests.' },
  { id: 'business',    label: 'Started, sold, or significantly changed a business', urgent: false, reason: 'Business assets require specific provisions for BPR, succession, and shareholder agreement coordination.' },
  { id: 'assets',      label: 'Significant change in asset values',               urgent: false, reason: 'A large increase in estate value may now create an IHT liability that did not previously exist.' },
  { id: 'overseas',    label: 'Acquired overseas property or moved abroad',       urgent: false, reason: 'Overseas assets may require separate wills in the relevant jurisdiction.' },
  { id: 'fiveyears',   label: 'More than 5 years since your last review',         urgent: false, reason: 'Tax law, thresholds, and family circumstances change. A periodic review is recommended every 3-5 years.' },
  { id: 'nowill',      label: 'You do not have a will at all',                    urgent: true,  reason: 'Without a will your estate passes under the intestacy rules, which may not reflect your wishes.' },
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
  const hasSome   = selected.length > 0;

  const verdict = !hasSome
    ? null
    : hasUrgent
    ? { label: 'Your will urgently needs review', color: '#c0392b', bg: 'rgba(200,50,50,0.06)', border: 'rgba(200,50,50,0.25)' }
    : selected.length >= 2
    ? { label: 'Your will should be reviewed soon', color: '#D46919', bg: 'rgba(212,105,25,0.08)', border: 'rgba(212,105,25,0.3)' }
    : { label: 'A review would be prudent', color: 'var(--stone)', bg: 'var(--parchment)', border: 'var(--border)' };

  return (
    <div style={{ background: 'var(--parchment-2)', border: '0.5px solid var(--border)', borderRadius: 8, padding: '24px 22px', marginTop: 20, marginBottom: 20 }}>
      <p style={serif(18, { marginBottom: 4 })}>Will review checker</p>
      <p className="body-sm mb-5" style={{ color: 'var(--dust)' }}>Tick any events that have occurred since your will was last made or reviewed.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
        {TRIGGERS.map(t => (
          <label key={t.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer', padding: '10px 12px', borderRadius: 5, background: checked.has(t.id) ? (t.urgent ? 'rgba(200,50,50,0.06)' : 'rgba(212,105,25,0.06)') : 'var(--parchment)', border: `0.5px solid ${checked.has(t.id) ? (t.urgent ? 'rgba(200,50,50,0.25)' : 'rgba(212,105,25,0.25)') : 'var(--border)'}`, transition: 'all 0.12s' }}>
            <input
              type="checkbox"
              checked={checked.has(t.id)}
              onChange={() => toggle(t.id)}
              style={{ marginTop: 2, flexShrink: 0, accentColor: '#D46919' }}
            />
            <div>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: 12, fontWeight: 400, color: 'var(--ink)', marginBottom: checked.has(t.id) ? 3 : 0 }}>{t.label}</p>
              {checked.has(t.id) && (
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: 11, fontWeight: 300, color: t.urgent ? '#c0392b' : 'var(--stone)', lineHeight: 1.5 }}>{t.reason}</p>
              )}
            </div>
          </label>
        ))}
      </div>

      {verdict && (
        <div style={{ background: verdict.bg, border: `0.5px solid ${verdict.border}`, borderRadius: 6, padding: '16px 18px', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 22, fontStyle: 'italic', fontWeight: 400, color: verdict.color, marginBottom: 8 }}>{verdict.label}</p>
          {selected.length > 0 && (
            <p className="body-sm" style={{ color: 'var(--stone)', marginBottom: 12 }}>
              {selected.length} trigger{selected.length > 1 ? 's' : ''} identified. {hasUrgent ? 'At least one requires immediate attention.' : 'A review with a specialist is recommended.'}
            </p>
          )}
          <a href="/services/estate-planning/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', fontFamily: 'var(--font-inter)', fontSize: 12, fontWeight: 500, color: '#fff', background: '#D46919', padding: '9px 20px', borderRadius: 4 }}>
            Get a free estate planning review
          </a>
        </div>
      )}

      {!hasSome && checked.size === 0 && (
        <p className="body-sm" style={{ color: 'var(--dust)', textAlign: 'center' }}>Tick any events above to see your review status.</p>
      )}

      {hasSome && !hasUrgent && selected.length < 2 && (
        <p className="body-sm mt-4" style={{ color: 'var(--dust)', textAlign: 'center' }}>No urgent triggers. A periodic review every 3-5 years is still recommended.</p>
      )}
    </div>
  );
}
