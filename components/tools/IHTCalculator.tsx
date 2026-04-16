'use client';

import { useState } from 'react';

const serif = (size: number | string, extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: 'var(--font-cormorant), Georgia, serif',
  fontSize: size, fontStyle: 'italic', fontWeight: 400,
  color: 'var(--ink)', lineHeight: 1.2, ...extra,
});

const NRB  = 325000;
const RNRB = 175000;
const RATE = 0.40;
const CHARITY_RATE = 0.36;

function fmt(n: number) {
  return '£' + Math.round(n).toLocaleString('en-GB');
}

function parse(s: string): number {
  const n = parseFloat(s.replace(/[^0-9.]/g, ''));
  return isNaN(n) ? 0 : n;
}

export function IHTCalculator() {
  const [property,   setProperty]   = useState('');
  const [savings,    setSavings]    = useState('');
  const [other,      setOther]      = useState('');
  const [debts,      setDebts]      = useState('');
  const [charity,    setCharity]    = useState('');
  const [married,    setMarried]    = useState(false);
  const [widowed,    setWidowed]    = useState(false);
  const [toChildren, setToChildren] = useState(false);

  const gross = parse(property) + parse(savings) + parse(other);
  const net   = Math.max(0, gross - parse(debts));
  const charityAmt = parse(charity);

  const availNRB  = NRB  * (widowed ? 2 : 1);
  const availRNRB = toChildren ? (RNRB * (widowed ? 2 : 1)) : 0;

  // RNRB taper: £1 for every £2 above £2m
  const taperReduction = Math.max(0, (net - 2_000_000) / 2);
  const effectiveRNRB  = Math.max(0, availRNRB - taperReduction);

  const taxable = Math.max(0, net - availNRB - effectiveRNRB - charityAmt);
  const charityPct = net > 0 ? charityAmt / net : 0;
  const rate = charityPct >= 0.10 ? CHARITY_RATE : RATE;
  const iht  = Math.round(taxable * rate);

  const fieldStyle: React.CSSProperties = {
    width: '100%', padding: '9px 12px', fontSize: 13,
    fontFamily: 'var(--font-inter), sans-serif', fontWeight: 300,
    background: 'var(--parchment)', border: '0.5px solid var(--border)',
    borderRadius: 4, color: 'var(--ink)', outline: 'none', boxSizing: 'border-box',
  };
  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-inter), sans-serif', fontSize: 10, fontWeight: 400,
    letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dust)',
    display: 'block', marginBottom: 5,
  };
  const checkLabel: React.CSSProperties = {
    fontFamily: 'var(--font-inter), sans-serif', fontSize: 12, fontWeight: 300,
    color: 'var(--stone)', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer',
  };

  return (
    <div style={{ background: 'var(--parchment-2)', border: '0.5px solid var(--border)', borderRadius: 8, padding: '24px 22px', marginTop: 20, marginBottom: 20 }}>
      <p style={serif(18, { marginBottom: 4 })}>Inheritance tax estimator</p>
      <p className="body-sm mb-5" style={{ color: 'var(--dust)' }}>2026 figures -- NRB £325,000, RNRB £175,000, rate 40%. For guidance only.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 20px' }}>
        <div>
          <label style={labelStyle}>Property value</label>
          <input style={fieldStyle} type="text" placeholder="£ e.g. 850000" value={property} onChange={e => setProperty(e.target.value)} />
        </div>
        <div>
          <label style={labelStyle}>Savings &amp; investments</label>
          <input style={fieldStyle} type="text" placeholder="£ e.g. 150000" value={savings} onChange={e => setSavings(e.target.value)} />
        </div>
        <div>
          <label style={labelStyle}>Other assets</label>
          <input style={fieldStyle} type="text" placeholder="£ business, art, etc." value={other} onChange={e => setOther(e.target.value)} />
        </div>
        <div>
          <label style={labelStyle}>Debts &amp; liabilities</label>
          <input style={fieldStyle} type="text" placeholder="£ mortgage, loans" value={debts} onChange={e => setDebts(e.target.value)} />
        </div>
        <div>
          <label style={labelStyle}>Charitable gifts in will</label>
          <input style={fieldStyle} type="text" placeholder="£ 0" value={charity} onChange={e => setCharity(e.target.value)} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 16, marginBottom: 20 }}>
        <label style={checkLabel}>
          <input type="checkbox" checked={married} onChange={e => { setMarried(e.target.checked); if (!e.target.checked) setWidowed(false); }} />
          Married / civil partner
        </label>
        {married && (
          <label style={checkLabel}>
            <input type="checkbox" checked={widowed} onChange={e => setWidowed(e.target.checked)} />
            Surviving spouse (transfer unused NRB)
          </label>
        )}
        <label style={checkLabel}>
          <input type="checkbox" checked={toChildren} onChange={e => setToChildren(e.target.checked)} />
          Leaving property to direct descendants
        </label>
      </div>

      {/* Results */}
      <div style={{ borderTop: '0.5px solid var(--border)', paddingTop: 18 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px', marginBottom: 16 }}>
          <div>
            <p style={{ ...labelStyle, marginBottom: 2 }}>Gross estate</p>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: 14, fontWeight: 400, color: 'var(--ink)' }}>{fmt(gross)}</p>
          </div>
          <div>
            <p style={{ ...labelStyle, marginBottom: 2 }}>Net estate (after debts)</p>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: 14, fontWeight: 400, color: 'var(--ink)' }}>{fmt(net)}</p>
          </div>
          <div>
            <p style={{ ...labelStyle, marginBottom: 2 }}>Nil-rate band available</p>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: 14, fontWeight: 400, color: 'var(--ink)' }}>{fmt(availNRB)}</p>
          </div>
          <div>
            <p style={{ ...labelStyle, marginBottom: 2 }}>Residence NRB available</p>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: 14, fontWeight: 400, color: 'var(--ink)' }}>{fmt(effectiveRNRB)}</p>
          </div>
          <div>
            <p style={{ ...labelStyle, marginBottom: 2 }}>Taxable estate</p>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: 14, fontWeight: 400, color: 'var(--ink)' }}>{fmt(taxable)}</p>
          </div>
          <div>
            <p style={{ ...labelStyle, marginBottom: 2 }}>Rate applied</p>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: 14, fontWeight: 400, color: 'var(--ink)' }}>{(rate * 100).toFixed(0)}%{charityPct >= 0.10 ? ' (charitable rate)' : ''}</p>
          </div>
        </div>

        <div style={{ background: iht > 0 ? 'rgba(212,105,25,0.08)' : 'rgba(0,0,0,0.03)', border: `0.5px solid ${iht > 0 ? 'rgba(212,105,25,0.3)' : 'var(--border)'}`, borderRadius: 6, padding: '14px 18px', textAlign: 'center' }}>
          <p style={labelStyle}>Estimated inheritance tax</p>
          <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 36, fontWeight: 400, color: iht > 0 ? '#D46919' : 'var(--stone)', lineHeight: 1 }}>{fmt(iht)}</p>
          {iht > 0 && (
            <p className="body-sm mt-2" style={{ color: 'var(--dust)' }}>
              Trust planning and gifting strategies could reduce this. Speak to a specialist.
            </p>
          )}
          {iht === 0 && net > 0 && (
            <p className="body-sm mt-2" style={{ color: 'var(--dust)' }}>
              No inheritance tax estimated with current allowances.
            </p>
          )}
        </div>
        <p className="body-sm mt-3" style={{ color: 'var(--dust)', textAlign: 'center' }}>
          This tool provides estimates only. Pensions are generally excluded from the estate. Take professional advice before making planning decisions.
        </p>
      </div>
    </div>
  );
}
