import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Page not found — Will Writing Services London',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        {/* Dark hero — matches site pattern */}
        <section style={{ background: '#1c1814', position: 'relative', overflow: 'hidden' }}>
          {/* Decorative buildings — same as location pages */}
          <svg
            aria-hidden="true"
            style={{ position: 'absolute', right: 0, bottom: 0, opacity: 0.12, pointerEvents: 'none' }}
            width="280" height="180" viewBox="0 0 280 180" fill="none"
          >
            <rect x="10"  y="100" width="28" height="80"  fill="white"/>
            <rect x="17"  y="112" width="5" height="7"   fill="#1c1814"/>
            <rect x="26"  y="112" width="5" height="7"   fill="#1c1814"/>
            <rect x="46"  y="68"  width="32" height="112" fill="white"/>
            <rect x="54"  y="82"  width="6" height="8"   fill="#1c1814"/>
            <rect x="64"  y="82"  width="6" height="8"   fill="#1c1814"/>
            <rect x="54"  y="98"  width="6" height="8"   fill="#1c1814"/>
            <rect x="64"  y="98"  width="6" height="8"   fill="#1c1814"/>
            <rect x="86"  y="40"  width="40" height="140" fill="white"/>
            <rect x="96"  y="56"  width="7" height="9"   fill="#1c1814"/>
            <rect x="110" y="56"  width="7" height="9"   fill="#1c1814"/>
            <rect x="96"  y="74"  width="7" height="9"   fill="#1c1814"/>
            <rect x="110" y="74"  width="7" height="9"   fill="#1c1814"/>
            <rect x="96"  y="92"  width="7" height="9"   fill="#1c1814"/>
            <rect x="110" y="92"  width="7" height="9"   fill="#1c1814"/>
            <rect x="134" y="90"  width="26" height="90"  fill="white"/>
            <rect x="141" y="102" width="5" height="7"   fill="#1c1814"/>
            <rect x="150" y="102" width="5" height="7"   fill="#1c1814"/>
            <rect x="168" y="55"  width="36" height="125" fill="white"/>
            <rect x="177" y="70"  width="7" height="9"   fill="#1c1814"/>
            <rect x="189" y="70"  width="7" height="9"   fill="#1c1814"/>
            <rect x="177" y="88"  width="7" height="9"   fill="#1c1814"/>
            <rect x="189" y="88"  width="7" height="9"   fill="#1c1814"/>
            <rect x="212" y="80"  width="30" height="100" fill="white"/>
            <rect x="220" y="94"  width="6" height="8"   fill="#1c1814"/>
            <rect x="230" y="94"  width="6" height="8"   fill="#1c1814"/>
            <rect x="248" y="110" width="24" height="70"  fill="white"/>
            <rect x="255" y="122" width="4" height="6"   fill="#1c1814"/>
            <rect x="263" y="122" width="4" height="6"   fill="#1c1814"/>
          </svg>

          <div className="container-width" style={{ position: 'relative', zIndex: 10, paddingTop: 60, paddingBottom: 68, textAlign: 'center' }}>
            <p style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#e8943a',
              marginBottom: 20,
            }}>
              404
            </p>
            <h1 style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(34px, 5vw, 56px)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#fff',
              lineHeight: 1.1,
              marginBottom: 16,
            }}>
              Page not found
            </h1>
            <p style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: 14,
              fontWeight: 300,
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.65,
              maxWidth: 420,
              margin: '0 auto 36px',
            }}>
              The page you are looking for does not exist or may have moved.
              Try one of the links below.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' as const }}>
              <Link href="/" className="btn-primary">Back to home</Link>
              <Link
                href="/services/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: 12,
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  border: '0.5px solid rgba(255,255,255,0.2)',
                  padding: '10px 20px',
                  borderRadius: 4,
                  transition: 'border-color 0.12s, color 0.12s',
                }}
              >
                Browse services
              </Link>
              <Link
                href="/location/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: 12,
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  border: '0.5px solid rgba(255,255,255,0.2)',
                  padding: '10px 20px',
                  borderRadius: 4,
                  transition: 'border-color 0.12s, color 0.12s',
                }}
              >
                Find your area
              </Link>
            </div>
          </div>
        </section>

        {/* Quick links body */}
        <div className="container-width py-14" style={{ maxWidth: 680, textAlign: 'center' }}>
          <p style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 20,
            fontStyle: 'italic',
            color: 'var(--ink)',
            marginBottom: 24,
          }}>
            Popular pages
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { href: '/services/single-will/',               label: 'Single will writing' },
              { href: '/services/mirror-wills/',              label: 'Mirror wills for couples' },
              { href: '/services/lasting-power-of-attorney/', label: 'Lasting power of attorney' },
              { href: '/services/trust-planning/',            label: 'Trust planning' },
              { href: '/services/estate-planning/',           label: 'Estate planning review' },
              { href: '/services/probate-support/',           label: 'Probate support' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="card p-3 group"
                style={{ display: 'block', textDecoration: 'none' }}
              >
                <span style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: 15,
                  color: 'var(--ink)',
                  transition: 'color 0.12s',
                }}
                  className="group-hover:text-brand-500"
                >
                  {l.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
