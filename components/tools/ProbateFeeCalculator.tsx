'use client';

import { useState } from 'react';

const serif = (size: number | string, extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: 'var(--font-cormorant), Georgia, serif',
  fontSize: size, fontStyle: 'italic', fontWeight: 400,
  color: 'var(--ink)', lineHeight: 1.2, ...extra,
});

function parse(s: string) {
  const n = parseFloat(s.replace(/[^0-9.]/g, ''));
  return isNaN(n) ? 0 : n;
}
function fmt(n: number) { return '£' + Math.round(n).toLocaleString('en-GB'); }

export function ProbateFeeCalculator() {
  const [estate,     setEstate]     = useState('');
  const [hasWill,    setHasWill]    = useState<boolean | null>(null);
  const [properties, setProperties] = useState('1');
  const [overseas,   setOverseas]   = useState<boolean | null>(null);

  const estateVal = parse(estate);
  const courtFee  = estateVal >= 5000 ? 300 : 0;
  const copies    = Math.max(1, parseInt(properties) + 1);
  const copyFee   = copies * 1.5;

  const profMin = estateVal * 0.01;
  const profMax = estateVal * 0.02;

  const totalMin = courtFee + copyFee + (estateVal > 0 ? profMin : 0);
  const totalMax = courtFee + copyFee + (estateVal > 0 ? profMax : 0);

  const simpleWeeks  = overseas ? '12-24' : '8-16';
  const complexWeeks = overseas ? '18-36 months' : '12-24 months';
  const isComplex    = parseInt(properties) > 1 || overseas;

  const btnStyle = (active: boolean): React.CSSProperties => ({
    padding: '9px 20px', fontSize: 12, fontFamily: 'var(--font-inter), sans-serif',
    fontWeight: 500, borderRadius: 4, cursor: 'pointer', border: '0.5px solid',
    borderColor: active ? '#D46919' : 'var(--border)',
    background: active ? 'rgba(212,105,25,0.1)' : 'var(--parchment)',
    color: active ? '#D46919' : 'var(--stone)',
  });
  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-inter)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dust)',
    display: 'block', marginBottom: 8,
  };
  const fieldStyle: React.CSSProperties = {
    padding: '9px 12px', fontSize: 13, fontFamily: 'var(--font-inter), sans-serif',
    fontWeight: 300, background: 'var(--parchment)', border: '0.5px solid var(--border)',
    borderRadius: 4, color: 'var(--ink)', outline: 'none',
  };

  const ready = hasWill !== null && overseas !== null;

  return (
    <div style={{ background: 'var(--parchment-2)', border: '0.5px solid var(--border)', borderRadius: 8, padding: '24px 22px', marginTop: 20, marginBottom: 20 }}>
      <p style={serif(18, { marginBottom: 4 })}>Probate fee estimator</p>
      <p className="body-sm mb-5" style={{ color: 'var(--dust)' }}>HMCTS court fee: £300 for estates over £5,000. Professional fees: typically 1-2% of estate value.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 20px', marginBottom: 16 }}>
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={labelStyle}>Gross estate value</label>
          <input style={fieldStyle} type="text" placeholder="£ e.g. 850000" value={estate} onChange={e => setEstate(e.target.value)} />
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <p style={labelStyle}>Is there a valid will?</p>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={btnStyle(hasWill === true)}  onClick={() => setHasWill(true)}>Yes (grant of probate)</button>
          <button style={btnStyle(hasWill === false)} onClick={() => setHasWill(false)}>No (letters of administration)</button>
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <p style={labelStyle}>Number of properties in the estate</p>
        <div style={{ display: 'flex', gap: 8 }}>
          {['1','2','3','4+'].map(n => (
            <button key={n} style={btnStyle(properties === n)} onClick={() => setProperties(n)}>{n}</button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p style={labelStyle}>Any overseas assets?</p>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={btnStyle(overseas === true)}  onClick={() => setOverseas(true)}>Yes</button>
          <button style={btnStyle(overseas === false)} onClick={() => setOverseas(false)}>No</button>
        </div>
      </div>

      {ready && (
        <div style={{ borderTop: '0.5px solid var(--border)', paddingTop: 18 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'var(--parchment)', borderRadius: 5, border: '0.5px solid var(--border)' }}>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: 12, color: 'var(--stone)' }}>HMCTS probate court fee</span>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: 13, color: 'var(--ink)' }}>{fmt(courtFee)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'var(--parchment)', borderRadius: 5, border: '0.5px solid var(--border)' }}>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: 12, color: 'var(--stone)' }}>Certified copies of grant (x{copies} at £1.50)</span>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: 13, color: 'var(--ink)' }}>{fmt(copyFee)}</span>
            </div>
            {estateVal > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'var(--parchment)', borderRadius: 5, border: '0.5px solid var(--border)' }}>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: 12, color: 'var(--stone)' }}>Professional fees (1-2% of estate)</span>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: 13, color: 'var(--ink)' }}>{fmt(profMin)} -- {fmt(profMax)}</span>
              </div>
            )}
          </div>

          {estateVal > 0 && (
            <div style={{ background: 'rgba(212,105,25,0.08)', border: '0.5px solid rgba(212,105,25,0.3)', borderRadius: 6, padding: '14px 18px', textAlign: 'center', marginBottom: 14 }}>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dust)', marginBottom: 4 }}>Estimated total cost</p>
              <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 30, fontWeight: 400, fontStyle: 'italic', color: '#D46919', lineHeight: 1 }}>
                {fmt(totalMin)} -- {fmt(totalMax)}
              </p>
            </div>
          )}

          <div style={{ background: 'var(--parchment)', border: '0.5px solid var(--border)', borderRadius: 6, padding: '12px 16px' }}>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: 12, fontWeight: 500, color: 'var(--ink)', marginBottom: 6 }}>Estimated timeline</p>
            <p className="body-sm" style={{ color: 'var(--stone)', marginBottom: 4 }}>
              {isComplex
                ? `Complex estate (multiple properties${overseas ? ', overseas assets' : ''}): ${complexWeeks}`
                : `Straightforward estate: ${simpleWeeks} weeks`}
            </p>
            {!hasWill && (
              <p className="body-sm" style={{ color: '#D46919', marginTop: 4 }}>Without a will, letters of administration add time and complexity to the process.</p>
            )}
          </div>

          <p className="body-sm mt-3" style={{ color: 'var(--dust)' }}>
            Court fee per Probate Fees Order 2021. Professional fee range is indicative. Actual costs vary by estate complexity and professional.
          </p>
        </div>
      )}
    </div>
  );
}
