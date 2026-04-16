'use client';

import { useState } from 'react';

const serif = (size: number | string, extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: 'var(--font-cormorant), Georgia, serif',
  fontSize: size, fontStyle: 'italic', fontWeight: 400,
  color: 'var(--ink)', lineHeight: 1.2, ...extra,
});

const STATUTORY_LEGACY = 322000;

function fmt(n: number) {
  return '£' + Math.round(n).toLocaleString('en-GB');
}

function parse(s: string): number {
  const n = parseFloat(s.replace(/[^0-9.]/g, ''));
  return isNaN(n) ? 0 : n;
}

interface Row { who: string; amount: string; warning?: boolean; safe?: boolean; }

function calcOutcome(married: boolean, children: number, cohabiting: boolean, estateStr: string): Row[] {
  const estate = parse(estateStr);
  const rows: Row[] = [];

  if (married && children > 0) {
    const residue = Math.max(0, estate - STATUTORY_LEGACY);
    const spouseShare = STATUTORY_LEGACY + residue / 2;
    const childShare  = residue / 2;
    rows.push({ who: 'Spouse / civil partner', amount: estate > 0 ? fmt(spouseShare) : 'Statutory legacy + half residue', safe: true });
    rows.push({ who: `Children (${children}) -- share equally`, amount: estate > 0 ? fmt(childShare) : 'Half residue above £322,000' });
    if (cohabiting) rows.push({ who: 'Cohabiting partner', amount: 'Nothing', warning: true });
  } else if (married && children === 0) {
    rows.push({ who: 'Spouse / civil partner', amount: estate > 0 ? fmt(estate) : 'Entire estate', safe: true });
    if (cohabiting) rows.push({ who: 'Cohabiting partner', amount: 'Nothing', warning: true });
    rows.push({ who: 'Parents / siblings', amount: 'Nothing' });
  } else if (!married && children > 0) {
    rows.push({ who: `Children (${children}) -- share equally`, amount: estate > 0 ? fmt(estate) : 'Entire estate' });
    if (cohabiting) rows.push({ who: 'Cohabiting partner', amount: 'Nothing', warning: true });
  } else {
    // No spouse, no children
    if (cohabiting) rows.push({ who: 'Cohabiting partner', amount: 'Nothing', warning: true });
    rows.push({ who: 'Parents (if surviving)', amount: estate > 0 ? fmt(estate) : 'Entire estate' });
    rows.push({ who: 'Siblings (if no parents)', amount: estate > 0 ? fmt(estate) : 'Entire estate' });
    rows.push({ who: 'More distant relatives', amount: 'In descending priority' });
    rows.push({ who: 'Crown (bona vacantia, if no relatives)', amount: estate > 0 ? fmt(estate) : 'Entire estate', warning: true });
  }

  return rows;
}

export function IntestacyCalculator() {
  const [step,       setStep]       = useState(1);
  const [married,    setMarried]    = useState<boolean | null>(null);
  const [children,   setChildren]   = useState('0');
  const [cohabiting, setCohabiting] = useState<boolean | null>(null);
  const [estate,     setEstate]     = useState('');

  const fieldStyle: React.CSSProperties = {
    padding: '9px 12px', fontSize: 13, fontFamily: 'var(--font-inter), sans-serif',
    fontWeight: 300, background: 'var(--parchment)', border: '0.5px solid var(--border)',
    borderRadius: 4, color: 'var(--ink)', outline: 'none',
  };
  const btnStyle = (active: boolean): React.CSSProperties => ({
    padding: '9px 20px', fontSize: 12, fontFamily: 'var(--font-inter), sans-serif',
    fontWeight: 500, borderRadius: 4, cursor: 'pointer', border: '0.5px solid',
    borderColor: active ? '#D46919' : 'var(--border)',
    background: active ? 'rgba(212,105,25,0.1)' : 'var(--parchment)',
    color: active ? '#D46919' : 'var(--stone)',
  });

  const showResult = married !== null && cohabiting !== null && step >= 3;
  const rows = showResult ? calcOutcome(married!, parseInt(children) || 0, cohabiting!, estate) : [];
  const hasWarning = rows.some(r => r.warning);

  return (
    <div style={{ background: 'var(--parchment-2)', border: '0.5px solid var(--border)', borderRadius: 8, padding: '24px 22px', marginTop: 20, marginBottom: 20 }}>
      <p style={serif(18, { marginBottom: 4 })}>Intestacy outcome calculator</p>
      <p className="body-sm mb-5" style={{ color: 'var(--dust)' }}>See who inherits if you die without a will under the Administration of Estates Act 1925.</p>

      {/* Step 1 */}
      <div style={{ marginBottom: 16 }}>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dust)', marginBottom: 8 }}>Are you married or in a civil partnership?</p>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={btnStyle(married === true)}  onClick={() => { setMarried(true);  setStep(s => Math.max(s, 2)); }}>Yes</button>
          <button style={btnStyle(married === false)} onClick={() => { setMarried(false); setStep(s => Math.max(s, 2)); }}>No</button>
        </div>
      </div>

      {/* Step 2 */}
      {step >= 2 && (
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dust)', marginBottom: 8 }}>How many children do you have?</p>
          <div style={{ display: 'flex', gap: 8 }}>
            {['0','1','2','3','4+'].map(n => (
              <button key={n} style={btnStyle(children === n)} onClick={() => setChildren(n)}>{n}</button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step >= 2 && (
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dust)', marginBottom: 8 }}>Do you have an unmarried partner living with you?</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={btnStyle(cohabiting === true)}  onClick={() => { setCohabiting(true);  setStep(s => Math.max(s, 3)); }}>Yes</button>
            <button style={btnStyle(cohabiting === false)} onClick={() => { setCohabiting(false); setStep(s => Math.max(s, 3)); }}>No</button>
          </div>
        </div>
      )}

      {/* Estate value */}
      {step >= 3 && (
        <div style={{ marginBottom: 20 }}>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dust)', marginBottom: 8 }}>Estimated estate value (optional)</p>
          <input style={{ ...fieldStyle, width: 200 }} type="text" placeholder="£ e.g. 750000" value={estate} onChange={e => setEstate(e.target.value)} />
        </div>
      )}

      {/* Results */}
      {showResult && (
        <div style={{ borderTop: '0.5px solid var(--border)', paddingTop: 18 }}>
          {hasWarning && (
            <div style={{ background: 'rgba(212,105,25,0.08)', border: '0.5px solid rgba(212,105,25,0.35)', borderRadius: 6, padding: '12px 16px', marginBottom: 16 }}>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: 12, fontWeight: 500, color: '#D46919', marginBottom: 4 }}>Without a will, your partner inherits nothing</p>
              <p className="body-sm" style={{ color: 'var(--stone)' }}>Under the intestacy rules, an unmarried partner has no legal right to inherit. A will is the only protection.</p>
            </div>
          )}
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dust)', marginBottom: 10 }}>Who inherits under intestacy</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {rows.map((r, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', borderRadius: 5, background: r.warning ? 'rgba(200,50,50,0.06)' : r.safe ? 'rgba(212,105,25,0.05)' : 'var(--parchment)', border: `0.5px solid ${r.warning ? 'rgba(200,50,50,0.25)' : 'var(--border)'}` }}>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: 12, fontWeight: 300, color: r.warning ? '#c0392b' : 'var(--stone)' }}>{r.who}</span>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: 13, fontWeight: r.warning ? 500 : 400, color: r.warning ? '#c0392b' : 'var(--ink)' }}>{r.amount}</span>
              </div>
            ))}
          </div>
          <p className="body-sm mt-3" style={{ color: 'var(--dust)' }}>Based on the Administration of Estates Act 1925. Statutory legacy £322,000. For guidance only -- take professional advice.</p>
        </div>
      )}
    </div>
  );
}
