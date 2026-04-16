'use client';

import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultCity?: string;
}

const GAS_URL = 'https://script.google.com/macros/s/AKfycbwyvWIDUWZCeIaLRn91S3BxMCPTFIKBHE8tG4jEtKtLQyfEZrAPi-nd1MZgH20gP4j1Sw/exec';

const serviceOptions = [
  'Single will',
  'Mirror wills for a couple',
  'Lasting power of attorney',
  'Trust planning',
  'Estate planning review',
  'Probate support',
  'Not sure — please advise',
];

export function LeadFormModal({ isOpen, onClose, defaultService = '', defaultCity = '' }: Props) {
  const [mounted,    setMounted]    = useState(false);
  const [closing,    setClosing]    = useState(false);
  const [submitted,  setSubmitted]  = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error,      setError]      = useState('');
  const nameRef    = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      setMounted(true); setClosing(false); setSubmitted(false); setError('');
      document.body.style.overflow = 'hidden';
      setTimeout(() => nameRef.current?.focus(), 60);
    } else if (mounted) {
      doClose();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  function doClose() {
    setClosing(true);
    document.body.style.overflow = '';
    setTimeout(() => {
      setMounted(false); setClosing(false);
      triggerRef.current?.focus();
      onClose();
    }, 200);
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const payload = {
      name:    (form.querySelector('#m-name')    as HTMLInputElement).value.trim(),
      email:   (form.querySelector('#m-email')   as HTMLInputElement).value.trim(),
      phone:   (form.querySelector('#m-phone')   as HTMLInputElement).value.trim(),
      service: (form.querySelector('#m-svc')     as HTMLSelectElement).value,
      message: (form.querySelector('#m-msg')     as HTMLTextAreaElement).value.trim(),
      page:    window.location.pathname,
      source:  'modal',
    };

    try {
      await fetch(GAS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      // no-cors means we can't read the response — assume success if no throw
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try calling us directly.');
    } finally {
      setSubmitting(false);
    }
  }

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Free specialist matching enquiry"
      className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center ${closing ? 'anim-bdout' : 'anim-bdin'}`}
      style={{ background: 'rgba(10,6,2,0.75)' }}
      onClick={e => { if (e.target === e.currentTarget) doClose(); }}
      onKeyDown={e => e.key === 'Escape' && doClose()}
    >
      <div
        className={`w-full sm:max-w-md sm:mx-4 sm:rounded-lg rounded-t-2xl max-h-[92vh] overflow-y-auto ${closing ? 'anim-mout' : 'anim-min'}`}
        style={{ background: 'var(--parchment)', border: '0.5px solid var(--border)' }}
      >
        {/* Mobile drag pill */}
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <div style={{ width: 32, height: 4, borderRadius: 2, background: 'var(--border)' }} />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-5 pb-4 sm:px-7" style={{ borderBottom: '0.5px solid var(--border)' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 22, fontStyle: 'italic', fontWeight: 400, color: 'var(--ink)', marginBottom: 3 }}>
              Find your specialist
            </h2>
            <p className="body-sm">Free &nbsp;·&nbsp; No obligation &nbsp;·&nbsp; We call you back within 24hrs</p>
          </div>
          <button onClick={doClose} aria-label="Close"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--dust)', padding: 4, marginRight: -4 }}>
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 sm:px-7 sm:py-6">
          {submitted ? (
            <div className="text-center py-8">
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(212,105,25,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10l4.5 4.5L16 6" stroke="#D46919" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 22, fontStyle: 'italic', color: 'var(--ink)', marginBottom: 8 }}>
                Thank you
              </h3>
              <p className="body-md">We will be in touch within 24 hours with a relevant introduction.</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className="space-y-4">

                <div>
                  <label className="field-label" htmlFor="m-name">Your name *</label>
                  <input ref={nameRef} id="m-name" type="text" required className="field-input"
                    placeholder="e.g. Sarah Johnson" autoComplete="name" />
                </div>

                <div>
                  <label className="field-label" htmlFor="m-email">Email address *</label>
                  <input id="m-email" type="email" required className="field-input"
                    placeholder="your@email.com" autoComplete="email" />
                </div>

                <div>
                  <label className="field-label" htmlFor="m-phone">Phone number *</label>
                  <input id="m-phone" type="tel" required className="field-input"
                    placeholder="07700 900000" autoComplete="tel" />
                </div>

                <div>
                  <label className="field-label" htmlFor="m-svc">Type of service *</label>
                  <div style={{ position: 'relative' }}>
                    <select id="m-svc" required className="field-select" defaultValue={defaultService}>
                      <option value="">Please select...</option>
                      {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <svg style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--dust)' }} width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <div>
                  <label className="field-label" htmlFor="m-msg">
                    Message <span style={{ fontWeight: 300, textTransform: 'none', letterSpacing: 0 }}>(optional)</span>
                  </label>
                  <textarea id="m-msg" rows={3} className="field-input resize-none"
                    placeholder="e.g. blended family, home visit needed, urgent..."
                    defaultValue={defaultCity ? `Enquiring from ${defaultCity}` : ''} />
                </div>

                {error && (
                  <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 12, color: '#c0392b' }}>{error}</p>
                )}

                <button type="submit" disabled={submitting} className="btn-primary w-full justify-center" style={{ marginTop: 4 }}>
                  {submitting ? 'Sending...' : 'Find my specialist →'}
                </button>

                <p className="body-sm text-center" style={{ color: 'var(--dust)' }}>
                  We are paid by the professionals in our network, never by you
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
