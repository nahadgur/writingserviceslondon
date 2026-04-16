'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface Props {
  onOpenModal: () => void;
}

const navLinks = [
  { href: '/services/', label: 'Services' },
  { href: '/location/', label: 'Areas' },
  { href: '/blog/', label: 'Blog' },
  { href: '#about', label: 'About' },
];

export function Header({ onOpenModal }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header>
      <nav className="site-nav" aria-label="Main navigation">
        <Link href="/" className="nav-logo">
          Will Writing Services London
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
          ))}
          <button onClick={onOpenModal} className="nav-cta ml-2">
            Speak to someone
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-stone"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-parchment border-b border-border px-6 py-4 space-y-3">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="block nav-link py-1"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => { onOpenModal(); setMobileOpen(false); }}
            className="btn-primary w-full mt-2"
          >
            Speak to someone
          </button>
        </div>
      )}
    </header>
  );
}
