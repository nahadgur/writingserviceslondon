'use client';
interface Item { question: string; answer: string; }
interface Props { faqs: Item[]; title?: string; }
export function FAQ({ faqs, title }: Props) {
  return <section>
    {title && <h2 className="edition-faq-title">{title}</h2>}
    <div className="edition-faq">
      {faqs.map((faq, index) => <details key={index}>
        <summary onPointerEnter={event => {
          if (event.pointerType === 'mouse' && window.matchMedia('(any-hover:hover)').matches) {
            const detail = event.currentTarget.parentElement as HTMLDetailsElement;
            detail.open = true;
          }
        }}>{faq.question}</summary>
        <p>{faq.answer}</p>
      </details>)}
    </div>
  </section>;
}
