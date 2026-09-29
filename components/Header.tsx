'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
const links = [
  { href: '/services/', label: 'Services' }, { href: '/location/', label: 'Areas' },
  { href: '/guides/', label: 'Guides' }, { href: '/tools/', label: 'Tools' }, { href: '/blog/', label: 'Blog' },
];
export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const breakpoint = window.matchMedia('(min-width: 1000px)');
    const resize = () => { if (breakpoint.matches) setOpen(false); };
    breakpoint.addEventListener('change', resize);
    return () => breakpoint.removeEventListener('change', resize);
  }, []);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [open]);
  return <>
    <header className="edition-header">
      <div className="container-width edition-header-row">
        <Link href="/" className="edition-logo" aria-label="Will Writing Services London">
          <Image src="/logo-transparent.webp" width={52} height={48} alt="" priority />
          <span>Will Writing Services London</span>
        </Link>
        <nav className="edition-desktop-nav" aria-label="Site navigation">
          {links.map(link => <Link key={link.href} href={link.href} aria-current={pathname.startsWith(link.href) ? 'page' : undefined}>{link.label}</Link>)}
          <Link href="/contact/#enquiry" onClick={() => setOpen(false)} className="btn-primary">Speak to someone</Link>
        </nav>
        <button ref={toggle} className="edition-menu-toggle" aria-controls="edition-mobile-menu" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(value => !value)}>
          {open ? 'Close' : 'Menu'}<span aria-hidden="true">{open ? '−' : '+'}</span>
        </button>
      </div>
      <nav id="edition-mobile-menu" className={`edition-mobile-menu ${open ? 'is-open' : ''}`} aria-label="Mobile navigation" aria-hidden={!open}>
        <div className="container-width">
          {links.map(link => <Link key={link.href} href={link.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <Link href="/contact/#enquiry" tabIndex={open ? 0 : -1} className="btn-primary" onClick={() => setOpen(false)}>Speak to someone</Link>
        </div>
      </nav>
    </header>
    <div className="edition-mobile-action"><span>Will Writing Services London</span><Link href="/contact/#enquiry" className="btn-primary" onClick={() => setOpen(false)}>Book a consultation</Link></div>
  </>;
}
