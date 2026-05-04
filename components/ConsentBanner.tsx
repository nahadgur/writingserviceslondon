'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';

const STORAGE_KEY = 'cookie-consent-v1';
type Consent = 'accepted' | 'rejected' | null;

function readConsent(): Consent {
  if (typeof window === 'undefined') return null;
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === 'accepted' || v === 'rejected' ? v : null;
}

function writeConsent(value: Exclude<Consent, null>) {
  try { window.localStorage.setItem(STORAGE_KEY, value); } catch { /* ignore */ }
}

interface Props {
  gaId: string;
}

// Cookie banner + GA4 loader gated on user consent.
// PECR/GDPR: analytics cookies are non-essential and must not load
// until the visitor opts in. GA4 <Script> tags only render once
// consent === 'accepted'.
export function ConsentBanner({ gaId }: Props) {
  const [consent, setConsent] = useState<Consent>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setConsent(readConsent());
  }, []);

  const accept = () => { writeConsent('accepted'); setConsent('accepted'); };
  const reject = () => { writeConsent('rejected'); setConsent('rejected'); };

  return (
    <>
      {consent === 'accepted' && gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="gtag-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', { anonymize_ip: true });
          `}</Script>
        </>
      )}

      {mounted && consent === null && (
        <div
          role="region"
          aria-label="Cookie notice"
          className="fixed bottom-0 inset-x-0 z-40 px-3 sm:px-4 pb-3 sm:pb-4"
        >
          <div
            style={{
              background: 'var(--ink)',
              color: '#fff',
              borderRadius: 8,
              border: '0.5px solid rgba(255,255,255,0.08)',
            }}
            className="mx-auto max-w-3xl shadow-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5"
          >
            <div
              className="flex-1"
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 300,
                fontSize: 13,
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.78)',
              }}
            >
              We use a small cookie to remember this choice. With your permission we&apos;d also like to use Google Analytics to see which pages help London families. No advertising, no tracking across other sites.{' '}
              <Link href="/privacy/" style={{ color: '#fff', textDecoration: 'underline' }} className="whitespace-nowrap">
                Read our privacy notice
              </Link>
              .
            </div>
            <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
              <button
                onClick={reject}
                style={{
                  background: 'transparent',
                  color: '#fff',
                  border: '0.5px solid rgba(255,255,255,0.4)',
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: 13,
                  fontWeight: 400,
                  padding: '10px 18px',
                  borderRadius: 4,
                  cursor: 'pointer',
                }}
                className="flex-1 sm:flex-none"
              >
                Reject
              </button>
              <button
                onClick={accept}
                style={{
                  background: 'var(--brand)',
                  color: '#fff',
                  border: 'none',
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: 13,
                  fontWeight: 500,
                  padding: '10px 18px',
                  borderRadius: 4,
                  cursor: 'pointer',
                }}
                className="flex-1 sm:flex-none"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
