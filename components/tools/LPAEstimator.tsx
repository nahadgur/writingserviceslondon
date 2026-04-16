'use client';

import { useState } from 'react';

const serif = (size: number | string, extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: 'var(--font-cormorant), Georgia, serif',
  fontSize: size, fontStyle: 'italic', fontWeight: 400,
  color: 'var(--ink)', lineHeight: 1.2, ...extra,
});

const OPG_FEE     = 82;
const OPG_REDUCED = 41;
const OPG_FREE    = 0;
const WEEKS       = 20;

export function LPAEstimator() {
  const [types,       setTypes]       = useState<string[]>([]);
  const [lowIncome,   setLowIncome]   = useState<boolean | null>(null);
  const [benefits,    setBenefits]    = useState<boolean | null>(null);
  const [professional,setProfessional]= useState<boolean | null>(null);

  const toggle = (t: string) =>
    setTypes(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);

  const count = types.length;

  const opgFeePerLPA = benefits ? OPG_FREE : lowIncome ? OPG_REDUCED : OPG_FEE;
  const opgTotal     = opgFeePerLPA * count;

  const profFeeMin = professional ? count * 250 : 0;
  const profFeeMax = professional ? count * 500 : 0;

  const totalMin = opgTotal + profFeeMin;
  const totalMax = opgTotal + profFeeMax;

  const fmt = (n: number) => '£' + n.toLocaleString('en-GB');

  const btnStyle = (active: boolean): React.CSSProperties => ({
    padding: '9px 20px', fontSize: 12, fontFamily: 'var(--font-inter), sans-serif',
    fontWeight: 500, borderRadius: 4, cursor: 'pointer', border: '0.5px solid',
    borderColor: active ? '#D46919' : 'var(--border)',
    background: active ? 'rgba(212,105,25,0.1)' : 'var(--parchment)',
    color: active ? '#D46919' : 'var(--stone)',
  });

  const typeBtn = (t: string, label: string) => (
    <button style={btnStyle(types.includes(t))} onClick={() => toggle(t)}>{label}</button>
  );

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-inter)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dust)',
    display: 'block', marginBottom: 8,
  };

  const ready = count > 0 && lowIncome !== null && benefits !== null && professional !== null;

  return (
    <div style={{ background: 'var(--parchment-2)', border: '0.5px solid var(--border)', borderRadius: 8, padding: '24px 22px', marginTop: 20, marginBottom: 20 }}>
      <p style={serif(18, { marginBottom: 4 })}>LPA cost estimator</p>
      <p className="body-sm mb-5" style={{ color: 'var(--dust)' }}>OPG fee £82 per LPA (2026). Registration currently takes approximately {WEEKS} weeks.</p>

      <div style={{ marginBottom: 16 }}>
        <p style={labelStyle}>Which LPAs do you need?</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {typeBtn('property', 'Property & financial affairs')}
          {typeBtn('health',   'Health & welfare')}
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <p style={labelStyle}>Do you receive means-tested benefits?</p>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={btnStyle(benefits === true)}  onClick={() => { setBenefits(true);  setLowIncome(false); }}>Yes (fee waived)</button>
          <button style={btnStyle(benefits === false)} onClick={() => setBenefits(false)}>No</button>
        </div>
      </div>

      {benefits === false && (
        <div style={{ marginBottom: 16 }}>
          <p style={labelStyle}>Is your annual income under £12,000?</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={btnStyle(lowIncome === true)}  onClick={() => setLowIncome(true)}>Yes (50% reduction)</button>
            <button style={btnStyle(lowIncome === false)} onClick={() => setLowIncome(false)}>No</button>
          </div>
        </div>
      )}

      <div style={{ marginBottom: 20 }}>
        <p style={labelStyle}>Are you using a professional to draft the LPA?</p>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={btnStyle(professional === true)}  onClick={() => setProfessional(true)}>Yes</button>
          <button style={btnStyle(professional === false)} onClick={() => setProfessional(false)}>No (completing myself)</button>
        </div>
      </div>

      {ready && count > 0 && (
        <div style={{ borderTop: '0.5px solid var(--border)', paddingTop: 18 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'var(--parchment)', borderRadius: 5, border: '0.5px solid var(--border)' }}>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: 12, color: 'var(--stone)' }}>OPG registration fee ({count} LPA{count > 1 ? 's' : ''} x {fmt(opgFeePerLPA)})</span>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: 13, fontWeight: 400, color: 'var(--ink)' }}>{fmt(opgTotal)}</span>
            </div>
            {professional && (
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'var(--parchment)', borderRadius: 5, border: '0.5px solid var(--border)' }}>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: 12, color: 'var(--stone)' }}>Professional preparation (estimate)</span>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: 13, fontWeight: 400, color: 'var(--ink)' }}>{fmt(profFeeMin)} -- {fmt(profFeeMax)}</span>
              </div>
            )}
          </div>

          <div style={{ background: 'rgba(212,105,25,0.08)', border: '0.5px solid rgba(212,105,25,0.3)', borderRadius: 6, padding: '14px 18px', textAlign: 'center', marginBottom: 14 }}>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dust)', marginBottom: 4 }}>Estimated total</p>
            <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 30, fontWeight: 400, fontStyle: 'italic', color: '#D46919', lineHeight: 1 }}>
              {professional ? `${fmt(totalMin)} -- ${fmt(totalMax)}` : fmt(totalMin)}
            </p>
          </div>

          <div style={{ background: 'var(--parchment)', border: '0.5px solid var(--border)', borderRadius: 6, padding: '12px 16px' }}>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: 12, fontWeight: 500, color: 'var(--ink)', marginBottom: 6 }}>Registration timeline</p>
            <p className="body-sm" style={{ color: 'var(--stone)', marginBottom: 4 }}>Current OPG processing time: approximately {WEEKS} weeks from submission of a complete application.</p>
            <p className="body-sm" style={{ color: 'var(--dust)' }}>An unregistered LPA cannot be used. Apply well in advance of any anticipated need.</p>
          </div>

          <p className="body-sm mt-3" style={{ color: 'var(--dust)' }}>
            OPG fee correct as of 2026. Professional fees are indicative. Take specialist advice for complex LPA structures.
          </p>
        </div>
      )}
    </div>
  );
}
