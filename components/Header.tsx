'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface Props { onOpenModal?: () => void; }

const links = [
  { href: '/services/', label: 'Services' },
  { href: '/location/', label: 'Areas' },
  { href: '/guides/',   label: 'Guides' },
  { href: '/blog/',     label: 'Blog' },
];

export function Header({ onOpenModal }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="site-nav" aria-label="Site navigation">
        {/* Logo + wordmark */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <Image
            src="/logo.png"
            alt="Will Writing Services London"
            width={32}
            height={32}
            style={{ objectFit: 'contain', flexShrink: 0 }}
            priority
          />
          <span className="nav-logo" style={{ fontStyle: 'italic' }}>
            Will Writing Services London
          </span>
        </Link>

        {/* Desktop links */}
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
          style={{ color: 'var(--stone)', background: 'none', border: 'none', cursor: 'pointer' }}
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
