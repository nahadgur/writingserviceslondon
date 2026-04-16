'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Item { question: string; answer: string; }
interface Props { faqs: Item[]; title?: string; }

export function FAQ({ faqs, title }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section>
      {title && (
        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(24px,3vw,32px)', fontStyle: 'italic', color: 'var(--ink)', marginBottom: 28 }}>
          {title}
        </h2>
      )}
      <div style={{ borderTop: '0.5px solid var(--border)' }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom: '0.5px solid var(--border)' }}>
            <button
              className="w-full flex items-start justify-between gap-4 py-5 text-left"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 18, color: 'var(--ink)' }}>
                {faq.question}
              </span>
              <ChevronDown
                size={15}
                style={{
                  flexShrink: 0,
                  marginTop: 3,
                  color: 'var(--dust)',
                  transition: 'transform 0.2s',
                  transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </button>
            {open === i && (
              <div className="pb-5">
                <p className="body-md leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
