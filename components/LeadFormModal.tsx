'use client';

import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultCity?: string;
}

const services = [
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
  const nameRef    = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      setMounted(true); setClosing(false); setSubmitted(false);
      document.body.style.overflow = 'hidden';
      setTimeout(() => nameRef.current?.focus(), 60);
    } else if (mounted) {
      close();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  function close() {
    setClosing(true);
    document.body.style.overflow = '';
    setTimeout(() => { setMounted(false); setClosing(false); triggerRef.current?.focus(); onClose(); }, 200);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 800));
    setSubmitting(false); setSubmitted(true);
  }

  if (!mounted) return null;

  return (
    <div
      role="dialog" aria-modal="true" aria-label="Free specialist matching enquiry"
      className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center ${closing ? 'anim-bdout' : 'anim-bdin'}`}
      style={{ background: 'rgba(10,6,2,0.72)' }}
      onClick={e => { if (e.target === e.currentTarget) close(); }}
      onKeyDown={e => e.key === 'Escape' && close()}
    >
      <div
        className={`w-full sm:max-w-lg sm:mx-4 sm:rounded-lg rounded-t-2xl max-h-[92vh] overflow-y-auto ${closing ? 'anim-mout' : 'anim-min'}`}
        style={{ background: 'var(--parchment)', border: '0.5px solid var(--border)' }}
      >
        {/* Mobile pill */}
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <div className="w-8 h-1 rounded-full" style={{ background: 'var(--border)' }} />
        </div>

        <div className="flex items-start justify-between px-6 pt-5 pb-4 sm:px-7" style={{ borderBottom: '0.5px solid var(--border)' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 24, fontStyle: 'italic', color: 'var(--ink)' }} className="mb-1">
              Find your specialist
            </h2>
            <p className="body-sm">Free &nbsp;·&nbsp; No obligation &nbsp;·&nbsp; Response within 24 hours</p>
          </div>
          <button onClick={close} className="p-1 -mr-1" style={{ color: 'var(--dust)' }} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <div className="px-6 py-5 sm:px-7 sm:py-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'rgba(212,105,25,0.12)' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3 9l4.5 4.5L15 5" stroke="#D46919" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 22, fontStyle: 'italic', color: 'var(--ink)' }} className="mb-2">
                Thank you
              </h3>
              <p className="body-md">We will be in touch within 24 hours with a relevant introduction.</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-4">
              <div>
                <label className="field-label" htmlFor="m-name">Your name *</label>
                <input ref={nameRef} id="m-name" type="text" required className="field-input" placeholder="e.g. Sarah Johnson" />
              </div>
              <div>
                <label className="field-label" htmlFor="m-svc">What do you need help with? *</label>
                <select id="m-svc" required className="field-select" defaultValue={defaultService}>
                  <option value="">Please select...</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="field-label" htmlFor="m-area">Your area</label>
                <input id="m-area" type="text" className="field-input" placeholder="e.g. Hampstead, Clapham..." defaultValue={defaultCity} />
              </div>
              <div>
                <label className="field-label" htmlFor="m-notes">Anything else?</label>
                <textarea id="m-notes" rows={3} className="field-input resize-none" placeholder="e.g. home visit needed, blended family, urgent..." />
              </div>
              <button type="submit" disabled={submitting} className="btn-primary w-full justify-center">
                {submitting ? 'Sending...' : 'Find my specialist →'}
              </button>
              <p className="body-sm text-center" style={{ color: 'var(--dust)' }}>
                We are paid by the professionals in our network, never by you
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
