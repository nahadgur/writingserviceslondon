// components/SubAreasGrid.tsx
// Content-only component — sub-areas are named for SEO signal but have no pages.
// No <Link> elements — these are anchor text mentions, not navigable URLs.

import { MapPin } from 'lucide-react';
import type { SubArea } from '@/data/locations';

interface Props {
  hubName: string;
  subAreas: SubArea[];
}

export function SubAreasGrid({ hubName, subAreas }: Props) {
  return (
    <section className="mb-14">
      <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">
        Areas We Cover Around {hubName}
      </h2>
      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
        Our will writers serve clients across {hubName} and the surrounding neighbourhoods.
        Whether you are in {subAreas.slice(0, 3).map(s => s.name).join(', ')} or anywhere
        nearby, we can match you with a specialist who covers your postcode.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {subAreas.map((area) => (
          <div
            key={area.name}
            className="flex items-start gap-2.5 p-3 bg-gray-50 rounded-xl border border-gray-100"
          >
            <MapPin className="w-3.5 h-3.5 text-brand-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-gray-800 leading-tight">{area.name}</p>
              {area.postcode && (
                <p className="text-xs text-gray-400 mt-0.5">{area.postcode}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      {subAreas.some(a => a.note) && (
        <div className="mt-6 space-y-2">
          {subAreas.filter(a => a.note).slice(0, 4).map((area) => (
            <p key={area.name} className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800">{area.name}</span>
              {area.postcode ? ` (${area.postcode})` : ''} — {area.note}
            </p>
          ))}
        </div>
      )}
    </section>
  );
}
