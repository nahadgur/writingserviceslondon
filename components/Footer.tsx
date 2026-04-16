import Link from 'next/link';

const serviceLinks = [
  { href: '/services/single-will/',               label: 'Single will' },
  { href: '/services/mirror-wills/',              label: 'Mirror wills' },
  { href: '/services/lasting-power-of-attorney/', label: 'Lasting power of attorney' },
  { href: '/services/trust-planning/',            label: 'Trust planning' },
  { href: '/services/estate-planning/',           label: 'Estate planning review' },
  { href: '/services/probate-support/',           label: 'Probate support' },
];

const areaLinks = [
  { href: '/location/mayfair/',       label: 'Mayfair' },
  { href: '/location/hampstead/',     label: 'Hampstead' },
  { href: '/location/islington/',     label: 'Islington' },
  { href: '/location/clapham/',       label: 'Clapham' },
  { href: '/location/canary-wharf/',  label: 'Canary Wharf' },
  { href: '/location/richmond/',      label: 'Richmond' },
  { href: '/location/',               label: 'All areas →' },
];

export function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'rgba(255,255,255,0.6)' }} className="mt-auto">
      <div className="container-width py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div className="md:col-span-1">
          <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 17, fontStyle: 'italic', color: '#fff' }} className="mb-4 leading-snug">
            Will Writing Services London
          </p>
          <p className="body-sm mb-5" style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>
            Free matching service connecting London residents with vetted will writers and estate planning specialists across all London areas.
          </p>
          <p className="body-sm" style={{ color: 'rgba(255,255,255,0.25)', lineHeight: 1.7 }}>
            We are not a law firm or will writing practice. We introduce clients to qualified professionals and are paid by those professionals — never by clients.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>Services</p>
          <ul className="space-y-2.5">
            {serviceLinks.map(l => (
              <li key={l.href}>
                <Link href={l.href} style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 14, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.12s' }}
                  className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>London areas</p>
          <ul className="space-y-2.5">
            {areaLinks.map(l => (
              <li key={l.href}>
                <Link href={l.href} style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 14, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.12s' }}
                  className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>Information</p>
          <ul className="space-y-2.5">
            {[
              { href: '/blog/', label: 'Guides and articles' },
              { href: '/about/', label: 'About the service' },
              { href: '/privacy/', label: 'Privacy policy' },
            ].map(l => (
              <li key={l.href}>
                <Link href={l.href} style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 14, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.12s' }}
                  className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.08)' }}>
        <div className="container-width py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="body-sm" style={{ color: 'rgba(255,255,255,0.25)' }}>
            &copy; {new Date().getFullYear()} Will Writing Services London. All rights reserved.
          </p>
          <p className="body-sm max-w-lg" style={{ color: 'rgba(255,255,255,0.18)' }}>
            Will Writing Services London is a referral and introduction service. We do not provide legal advice. All professionals in our network hold appropriate qualifications and professional indemnity insurance.
          </p>
        </div>
      </div>
    </footer>
  );
}
