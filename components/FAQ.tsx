'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  faqs: FAQItem[];
  title?: string;
}

export function FAQ({ faqs, title }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section>
      {title && (
        <h2 className="font-display text-3xl italic text-ink mb-8">{title}</h2>
      )}
      <div className="divide-y divide-border">
        {faqs.map((faq, i) => (
          <div key={i}>
            <button
              className="w-full flex items-start justify-between gap-4 py-5 text-left"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="font-display text-lg text-ink">{faq.question}</span>
              <ChevronDown
                size={16}
                className="flex-shrink-0 mt-1 text-dust transition-transform duration-200"
                style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
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
