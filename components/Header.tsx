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
];

export function Header({ onOpenModal }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="site-nav" aria-label="Main navigation">
        <Link href="/" className="nav-logo">
          Will Writing Services London
        </Link>

        {/* Desktop links */}
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
          className="md:hidden p-2 -mr-2 text-stone"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-parchment border-b border-border px-6 py-5 space-y-4">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="block nav-link py-1 text-base"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => { onOpenModal(); setOpen(false); }}
            className="btn-primary w-full justify-center mt-2"
          >
            Speak to someone
          </button>
        </div>
      )}
    </header>
  );
}
