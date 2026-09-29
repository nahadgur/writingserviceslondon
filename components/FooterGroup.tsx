'use client';
import { useEffect, useRef, type ReactNode } from 'react';
export function FooterGroup({ title, children }: { title: string; children: ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 720px)');
    const update = () => { if (ref.current) ref.current.open = desktop.matches; };
    update(); desktop.addEventListener('change', update);
    return () => desktop.removeEventListener('change', update);
  }, []);
  return <details open ref={ref} className="edition-footer-group">
    <summary onClick={event => { if (window.matchMedia('(min-width:720px)').matches) event.preventDefault(); }}>{title}</summary>
    {children}
  </details>;
}
