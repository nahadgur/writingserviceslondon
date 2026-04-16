'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface Props { onOpenModal?: () => void; }

const links = [
  { href: '/services/', label: 'Services' },
  { href: '/location/', label: 'Areas' },
  { href: '/blog/',     label: 'Blog' },
];

export function Header({ onOpenModal }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="site-nav" aria-label="Site navigation">
        <Link href="/" className="nav-logo">
          Will Writing Services London
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
          ))}
          {onOpenModal && (
            <button onClick={onOpenModal} className="nav-cta ml-2">
              Speak to someone
            </button>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 -mr-1"
          style={{ color: 'var(--stone)' }}
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden border-b px-5 py-5 space-y-4"
          style={{ background: 'var(--parchment)', borderColor: 'var(--border)' }}
        >
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="block nav-link py-1 text-base"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          {onOpenModal && (
            <button
              onClick={() => { onOpenModal(); setOpen(false); }}
              className="btn-primary w-full justify-center mt-2"
            >
              Speak to someone
            </button>
          )}
        </div>
      )}
    </header>
  );
}
