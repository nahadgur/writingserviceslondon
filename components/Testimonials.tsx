import { TESTIMONIALS } from '@/data/site';

interface Props { limit?: number; }

export function Testimonials({ limit = 3 }: Props) {
  return (
    <div className="space-y-4">
      {TESTIMONIALS.slice(0, limit).map(t => (
        <div key={t.id} className="testimonial-card">
          <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
          <p className="testimonial-attr">{t.name} &nbsp;&middot;&nbsp; {t.location} &nbsp;&middot;&nbsp; {t.service}</p>
        </div>
      ))}
    </div>
  );
}
