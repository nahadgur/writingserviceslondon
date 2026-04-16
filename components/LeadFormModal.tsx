'use client';

import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultCity?: string;
}

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
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const firstInputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      setMounted(true);
      setClosing(false);
      setSubmitted(false);
      setError('');
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstInputRef.current?.focus(), 50);
    } else {
      if (mounted) handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  function handleClose() {
    setClosing(true);
    document.body.style.overflow = '';
    setTimeout(() => {
      setMounted(false);
      setClosing(false);
      triggerRef.current?.focus();
      onClose();
    }, 200);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') handleClose();
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    await new Promise(r => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center ${closing ? 'animate-backdrop-out' : 'animate-backdrop-in'}`}
      style={{ background: 'rgba(10,6,2,0.72)', padding: '0' }}
      onClick={e => { if (e.target === e.currentTarget) handleClose(); }}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-label="Free specialist matching enquiry"
    >
      {/* Sheet on mobile (slides from bottom), modal on sm+ */}
      <div
        className={`bg-parchment w-full sm:max-w-lg sm:mx-4 sm:rounded-lg rounded-t-2xl max-h-[92vh] overflow-y-auto ${closing ? 'animate-modal-out' : 'animate-modal-in'}`}
        style={{ border: '0.5px solid var(--border)' }}
      >
        {/* Drag indicator on mobile */}
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <div className="w-8 h-1 rounded-full bg-border" />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-4 pb-4 sm:px-7 sm:pt-6 border-b border-border">
          <div>
            <h2 className="font-display text-2xl italic text-ink mb-1">Find your specialist</h2>
            <p className="body-sm">Free matching &nbsp;·&nbsp; No obligation &nbsp;·&nbsp; 24hr response</p>
          </div>
          <button
            onClick={handleClose}
            className="text-dust hover:text-ink transition-colors mt-0.5 flex-shrink-0 p-1 -mr-1"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 sm:px-7 sm:py-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-10 h-10 rounded-full bg-brand/15 flex items-center justify-center mx-auto mb-4">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3 9l4.5 4.5L15 5" stroke="#D46919" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-display text-xl italic text-ink mb-2">Thank you</h3>
              <p className="body-md">We will be in touch within 24 hours with a relevant introduction.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-4">
                <div>
                  <label className="field-label" htmlFor="modal-name">Your name *</label>
                  <input
                    ref={firstInputRef}
                    id="modal-name"
                    type="text"
                    required
                    className="field-input"
                    style={{ fontSize: 16 }}
                    placeholder="e.g. Sarah Johnson"
                  />
                </div>

                <div>
                  <label className="field-label" htmlFor="modal-service">What do you need help with? *</label>
                  <select
                    id="modal-service"
                    required
                    className="field-select"
                    style={{ fontSize: 16 }}
                    defaultValue={defaultService}
                  >
                    <option value="">Please select...</option>
                    {serviceOptions.map(o => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="field-label" htmlFor="modal-area">Your area in London</label>
                  <input
                    id="modal-area"
                    type="text"
                    className="field-input"
                    style={{ fontSize: 16 }}
                    placeholder="e.g. Hampstead, Clapham..."
                    defaultValue={defaultCity}
                  />
                </div>

                <div>
                  <label className="field-label" htmlFor="modal-notes">Anything else we should know?</label>
                  <textarea
                    id="modal-notes"
                    rows={3}
                    className="field-input resize-none"
                    style={{ fontSize: 16 }}
                    placeholder="e.g. blended family, home visit needed, urgent..."
                  />
                </div>

                {error && <p role="alert" className="body-sm text-red-600">{error}</p>}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full justify-center"
                >
                  {submitting ? 'Sending...' : 'Find my specialist →'}
                </button>

                <p className="body-sm text-center text-dust">
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
