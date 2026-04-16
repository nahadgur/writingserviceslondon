'use client';

import { useState } from 'react';

interface Props {
  city?: string;
  service?: string;
}

export function HeroLeadForm({ city, service }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 900));
    setSubmitting(false);
    setDone(true);
  }

  return (
    <div className="bg-parchment rounded-lg p-6" style={{ border: '0.5px solid var(--border)' }}>
      {done ? (
        <div className="text-center py-4">
          <div className="w-8 h-8 rounded-full bg-brand/15 flex items-center justify-center mx-auto mb-3">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 3" stroke="#D46919" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <p className="font-display text-lg italic text-ink mb-1">Thank you</p>
          <p className="body-sm">We will be in touch within 24 hours.</p>
        </div>
      ) : (
        <>
          <p className="font-display text-xl italic text-ink mb-1">
            {city ? `Get matched in ${city}` : 'Get matched free'}
          </p>
          <p className="body-sm mb-5">Free &nbsp;·&nbsp; No obligation &nbsp;·&nbsp; 24hr response</p>

          <form onSubmit={handleSubmit} noValidate className="space-y-3">
            <div>
              <label className="field-label" htmlFor="hlf-name">Your name</label>
              <input id="hlf-name" type="text" required className="field-input" placeholder="e.g. Sarah Johnson" />
            </div>

            {!city && (
              <div>
                <label className="field-label" htmlFor="hlf-area">Your area</label>
                <input id="hlf-area" type="text" className="field-input" placeholder="e.g. Hampstead, Clapham..." />
              </div>
            )}

            <div>
              <label className="field-label" htmlFor="hlf-notes">Any specific requirements?</label>
              <input
                id="hlf-notes"
                type="text"
                className="field-input"
                placeholder={city ? `e.g. blended family, home visit...` : `e.g. ${service ?? 'mirror wills'}, home visit...`}
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-primary w-full justify-center"
            >
              {submitting ? 'Sending...' : 'Find my specialist →'}
            </button>
          </form>

          <p className="body-sm text-center mt-3 text-dust">
            Paid by our network, never by you
          </p>
        </>
      )}
    </div>
  );
}
