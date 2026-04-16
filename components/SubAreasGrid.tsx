import type { SubArea } from '@/data/locations';

interface Props {
  hubName: string;
  subAreas: SubArea[];
}

export function SubAreasGrid({ hubName, subAreas }: Props) {
  return (
    <section className="mb-14">
      <h2 className="font-display text-2xl italic text-ink mb-2">
        Areas we cover around {hubName}
      </h2>
      <p className="body-md mb-6">
        Our will writers serve clients across {hubName} and all surrounding neighbourhoods.
        Whether you are in {subAreas.slice(0, 3).map(s => s.name).join(', ')} or anywhere
        nearby — we can match you with a specialist who covers your postcode.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 mb-6">
        {subAreas.map(area => (
          <div key={area.name} className="subarea-item">
            <p className="subarea-name">{area.name}</p>
            {area.postcode && <p className="subarea-post">{area.postcode}</p>}
          </div>
        ))}
      </div>

      {subAreas.some(a => a.note) && (
        <div className="space-y-2 border-t border-border pt-4">
          {subAreas.filter(a => a.note).slice(0, 4).map(area => (
            <p key={area.name} className="body-sm leading-relaxed">
              <span className="font-medium text-ink">{area.name}</span>
              {area.postcode ? ` (${area.postcode})` : ''} — {area.note}
            </p>
          ))}
        </div>
      )}
    </section>
  );
}
