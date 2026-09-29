import Link from 'next/link';
import Image from 'next/image';
import { FooterGroup } from './FooterGroup';
const serviceLinks = [
  { href: '/services/single-will/', label: 'Single will' },
  { href: '/services/mirror-wills/', label: 'Mirror wills' },
  { href: '/services/lasting-power-of-attorney/', label: 'Lasting power of attorney' },
  { href: '/services/trust-planning/', label: 'Trust planning' },
  { href: '/services/estate-planning/', label: 'Estate planning review' },
  { href: '/services/probate-support/', label: 'Probate support' },
];
const areaLinks = [
  { href: '/location/mayfair/', label: 'Mayfair' }, { href: '/location/hampstead/', label: 'Hampstead' },
  { href: '/location/islington/', label: 'Islington' }, { href: '/location/clapham/', label: 'Clapham' },
  { href: '/location/canary-wharf/', label: 'Canary Wharf' }, { href: '/location/richmond/', label: 'Richmond' },
  { href: '/location/', label: 'All areas →' },
];
const information = [
  { href: '/guides/', label: 'Guides' }, { href: '/blog/', label: 'Guides and articles' },
  { href: '/tools/', label: 'Tools' }, { href: '/about/', label: 'About the service' },
  { href: '/contact/', label: 'Contact us' },
];
export function Footer() {
  const list = (links: {href: string; label: string}[]) => <ul>{links.map(link => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul>;
  return <footer className="edition-footer">
    <div className="container-width edition-footer-grid">
      <div className="edition-footer-brand">
        <Link href="/" className="edition-logo"><Image src="/logo-transparent.webp" width={52} height={48} alt="" /><span>Will Writing Services London</span></Link>
        <p>Wills, mirror wills, lasting powers of attorney, trust planning and probate support for families across every London borough.</p>
        <p>Fixed fees quoted before any work begins. Home visits throughout London, including evenings and weekends.</p>
      </div>
      <FooterGroup title="Services">{list(serviceLinks)}</FooterGroup>
      <FooterGroup title="London areas">{list(areaLinks)}</FooterGroup>
      <FooterGroup title="Information">{list(information)}</FooterGroup>
    </div>
    <div className="container-width edition-footer-bottom">
      <div><p>&copy; {new Date().getFullYear()} Will Writing Services London. All rights reserved.</p><nav aria-label="Legal"><Link href="/privacy/">Privacy notice</Link><Link href="/terms/">Terms of use</Link></nav></div>
      <p>Will writing is not a regulated activity in England and Wales and we are not a firm of solicitors. Information on this site is general guidance about the law, not advice on your individual circumstances.</p>
    </div>
  </footer>;
}
