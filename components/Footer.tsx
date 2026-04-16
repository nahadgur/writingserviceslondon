import Link from 'next/link';

const serviceLinks = [
  { href: '/services/single-will/', label: 'Single will' },
  { href: '/services/mirror-wills/', label: 'Mirror wills' },
  { href: '/services/lasting-power-of-attorney/', label: 'Lasting power of attorney' },
  { href: '/services/trust-planning/', label: 'Trust planning' },
  { href: '/services/estate-planning/', label: 'Estate planning review' },
  { href: '/services/probate-support/', label: 'Probate support' },
];

const areaLinks = [
  { href: '/location/mayfair/', label: 'Mayfair' },
  { href: '/location/hampstead/', label: 'Hampstead' },
  { href: '/location/islington/', label: 'Islington' },
  { href: '/location/clapham/', label: 'Clapham' },
  { href: '/location/canary-wharf/', label: 'Canary Wharf' },
  { href: '/location/', label: 'All areas →' },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white/70 mt-auto">
      <div className="container-width py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div className="md:col-span-1">
          <p className="font-display text-lg text-white mb-4 leading-tight">
            Will Writing Services London
          </p>
          <p className="body-sm text-white/50 leading-relaxed mb-6">
            Free matching service connecting London residents with vetted will writers and estate planning specialists.
          </p>
          <p className="body-sm text-white/30 leading-relaxed">
            We are not a law firm or will writing practice. We introduce clients to qualified professionals and are paid by the professionals in our network — never by clients.
          </p>
        </div>

        <div>
          <p className="eyebrow text-white/40 mb-4">Services</p>
          <ul className="space-y-2.5">
            {serviceLinks.map(l => (
              <li key={l.href}>
                <Link href={l.href} className="font-display text-sm text-white/60 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-white/40 mb-4">London areas</p>
          <ul className="space-y-2.5">
            {areaLinks.map(l => (
              <li key={l.href}>
                <Link href={l.href} className="font-display text-sm text-white/60 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-white/40 mb-4">Information</p>
          <ul className="space-y-2.5">
            {[
              { href: '/blog/', label: 'Guides and articles' },
              { href: '/about/', label: 'About the service' },
              { href: '/privacy/', label: 'Privacy policy' },
            ].map(l => (
              <li key={l.href}>
                <Link href={l.href} className="font-display text-sm text-white/60 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="container-width py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="body-sm text-white/30">
            &copy; {new Date().getFullYear()} Will Writing Services London. All rights reserved.
          </p>
          <p className="body-sm text-white/20 max-w-lg">
            Will Writing Services London is a referral and introduction service. We do not provide legal advice. All professionals in our network hold appropriate qualifications and professional indemnity insurance.
          </p>
        </div>
      </div>
    </footer>
  );
}
