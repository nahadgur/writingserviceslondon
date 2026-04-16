'use client';

import { useState } from 'react';

const serif = (size: number | string, extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: 'var(--font-cormorant), Georgia, serif',
  fontSize: size, fontStyle: 'italic', fontWeight: 400,
  color: 'var(--ink)', lineHeight: 1.2, ...extra,
});

const UPPER_THRESHOLD = 100000; // from Oct 2025, Care Act 2014

function parse(s: string) {
  const n = parseFloat(s.replace(/[^0-9.]/g, ''));
  return isNaN(n) ? 0 : n;
}
function fmt(n: number) { return '£' + Math.round(n).toLocaleString('en-GB'); }

export function CareCalculator() {
  const [property, setProperty] = useState('');
  const [savings,  setSavings]  = useState('');

  const propVal  = parse(property);
  const savVal   = parse(savings);
  const halfProp = propVal / 2;
  const total    = propVal + savVal;

  // Without protection: survivor\'s full estate assessed (assumes first partner dies, survivor eventually needs care)
  const withoutProtection = Math.max(0, total - UPPER_THRESHOLD);
  // With PPT: only survivor\'s half of property + savings assessed
  const survivorAssets    = halfProp + savVal;
  const withProtection    = Math.max(0, survivorAssets - UPPER_THRESHOLD);
  const saving            = withoutProtection - withProtection;

  const fieldStyle: React.CSSProperties = {
    width: '100%', padding: '9px 12px', fontSize: 13,
    fontFamily: 'var(--font-inter), sans-serif', fontWeight: 300,
    background: 'var(--parchment)', border: '0.5px solid var(--border)',
    borderRadius: 4, color: 'var(--ink)', outline: 'none', boxSizing: 'border-box',
  };
  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-inter)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dust)',
    display: 'block', marginBottom: 6,
  };

  const hasInput = propVal > 0;

  return (
    <div style={{ background: 'var(--parchment-2)', border: '0.5px solid var(--border)', borderRadius: 8, padding: '24px 22px', marginTop: 20, marginBottom: 20 }}>
      <p style={serif(18, { marginBottom: 4 })}>Care cost protection estimator</p>
      <p className="body-sm mb-5" style={{ color: 'var(--dust)' }}>Illustrates the potential benefit of a protective property trust under the Care Act 2014. Self-funding threshold: £100,000 (from Oct 2025).</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 20px', marginBottom: 20 }}>
        <div>
          <label style={labelStyle}>Combined property value</label>
          <input style={fieldStyle} type="text" placeholder="£ e.g. 900000" value={property} onChange={e => setProperty(e.target.value)} />
        </div>
        <div>
          <label style={labelStyle}>Combined savings &amp; investments</label>
          <input style={fieldStyle} type="text" placeholder="£ e.g. 120000" value={savings} onChange={e => setSavings(e.target.value)} />
        </div>
      </div>

      {hasInput && (
        <div style={{ borderTop: '0.5px solid var(--border)', paddingTop: 18 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
            <div style={{ background: 'rgba(200,50,50,0.05)', border: '0.5px solid rgba(200,50,50,0.2)', borderRadius: 6, padding: '14px 16px' }}>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dust)', marginBottom: 6 }}>Without PPT</p>
              <p style={serif(13, { color: 'var(--stone)', marginBottom: 8 })}>Assets potentially assessed for care</p>
              <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 26, fontWeight: 400, color: '#c0392b', lineHeight: 1 }}>{fmt(withoutProtection)}</p>
              <p className="body-sm mt-2" style={{ color: 'var(--dust)' }}>Full estate above £100,000 threshold</p>
            </div>
            <div style={{ background: 'rgba(212,105,25,0.06)', border: '0.5px solid rgba(212,105,25,0.25)', borderRadius: 6, padding: '14px 16px' }}>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dust)', marginBottom: 6 }}>With PPT</p>
              <p style={serif(13, { color: 'var(--stone)', marginBottom: 8 })}>Assets potentially assessed for care</p>
              <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 26, fontWeight: 400, color: '#D46919', lineHeight: 1 }}>{fmt(withProtection)}</p>
              <p className="body-sm mt-2" style={{ color: 'var(--dust)' }}>Survivor\'s half of property + savings</p>
            </div>
          </div>

          {saving > 0 && (
            <div style={{ background: 'rgba(212,105,25,0.08)', border: '0.5px solid rgba(212,105,25,0.3)', borderRadius: 6, padding: '12px 16px', textAlign: 'center', marginBottom: 14 }}>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dust)', marginBottom: 4 }}>Potential assets protected</p>
              <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 28, fontWeight: 400, fontStyle: 'italic', color: '#D46919', lineHeight: 1 }}>{fmt(saving)}</p>
            </div>
          )}

          <p className="body-sm" style={{ color: 'var(--dust)' }}>
            A protective property trust ring-fences the deceased\'s share of the property from the surviving partner\'s care cost assessment. The analysis depends on ownership structure, local authority rules, and the specific trust terms. Take specialist advice. Self-funding threshold per Care and Support (Charging) Regulations 2014 as amended from October 2025.
          </p>
        </div>
      )}
    </div>
  );
}
