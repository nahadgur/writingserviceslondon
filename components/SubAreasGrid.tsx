import type { SubArea } from '@/data/locations';

interface Props { hubName: string; subAreas: SubArea[]; }

export function SubAreasGrid({ hubName, subAreas }: Props) {
  return (
    <section className="mb-12">
      <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(20px,2.5vw,26px)', fontStyle: 'italic', color: 'var(--ink)', marginBottom: 8 }}>
        Areas we cover around {hubName}
      </h2>
      <p className="body-md mb-5">
        Our will writers serve clients across {hubName} and all surrounding neighbourhoods —
        including {subAreas.slice(0, 3).map(s => s.name).join(', ')} and beyond.
        We can match you with a specialist who covers your exact postcode.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 mb-5">
        {subAreas.map(a => (
          <div key={a.name} className="subarea-item">
            <p className="subarea-name">{a.name}</p>
            {a.postcode && <p className="subarea-post">{a.postcode}</p>}
          </div>
        ))}
      </div>
      {subAreas.filter(a => a.note).length > 0 && (
        <div className="space-y-2 pt-4" style={{ borderTop: '0.5px solid var(--border)' }}>
          {subAreas.filter(a => a.note).slice(0, 4).map(a => (
            <p key={a.name} className="body-sm leading-relaxed">
              <span style={{ fontWeight: 500, color: 'var(--ink)' }}>{a.name}</span>
              {a.postcode ? ` (${a.postcode})` : ''} — {a.note}
            </p>
          ))}
        </div>
      )}
    </section>
  );
}
