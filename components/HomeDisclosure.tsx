'use client';
import { useEffect, useRef, type ReactNode } from 'react';

export function HomeDisclosure({ title, children, exclusive = false }: { title: string; children: ReactNode; exclusive?: boolean }) {
  const detail = useRef<HTMLDetailsElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const cancelHover = () => clearTimeout(timer.current);
  useEffect(() => () => clearTimeout(timer.current), []);
  return <details ref={detail} onToggle={event => {
    if (!exclusive || !event.currentTarget.open) return;
    const current = event.currentTarget;
    current.parentElement?.querySelectorAll('details').forEach(other => { if (other !== current && !other.contains(document.activeElement)) other.open = false; });
  }}>
    <summary onPointerEnter={event => {
      if (event.pointerType !== 'mouse' || !window.matchMedia('(any-hover:hover)').matches) return;
      cancelHover();
      timer.current = setTimeout(() => {
        const current = detail.current;
        if (current && !Array.from(current.parentElement?.children ?? []).some(other => other !== current && other.contains(document.activeElement))) current.open = true;
      }, 100);
    }} onPointerLeave={cancelHover} onPointerDown={cancelHover}>{title}</summary>
    <div className="home-disclosure-content">{children}</div>
  </details>;
}
