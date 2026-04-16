import { TESTIMONIALS } from '@/data/site';

interface Props { limit?: number; }

export function Testimonials({ limit = 3 }: Props) {
  const items = TESTIMONIALS.slice(0, limit);

  if (items.length === 0) {
    return (
      <div style={{ padding: '24px 20px', background: 'var(--parchment)', border: '0.5px solid var(--border)', borderRadius: 8 }}>
        <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 16, fontStyle: 'italic', color: 'var(--dust)', lineHeight: 1.6 }}>
          Client testimonials coming soon. We are currently collecting verified feedback from matched clients.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map(t => (
        <div key={t.id} className="testimonial-card">
          <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
          <p className="testimonial-attr">{t.name} &nbsp;&middot;&nbsp; {t.location} &nbsp;&middot;&nbsp; {t.service}</p>
        </div>
      ))}
    </div>
  );
}
