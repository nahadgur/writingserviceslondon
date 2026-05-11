// scripts/clean-blog-artifacts.mjs
// Idempotent cleanup of autoblog tells in data/blog.ts for the will-writing site.

import fs from 'node:fs';
import path from 'node:path';

const FILE = path.resolve('data/blog.ts');
const src = fs.readFileSync(FILE, 'utf8');
let out = src;

out = out.replace(/\s*\(\d+ characters\)/g, '');
out = out.replace(/\s*using,z,z,z,z,z\?/g, '?');
out = out.replace(/,z,z,z,z,z/g, '');

// Remove inline image content blocks that hot-link the autoblog CDN.
out = out.replace(
  /^[ \t]*\{\s*type:\s*'img',\s*src:\s*'https:\/\/files\.autoblogging\.ai\/[^']+',\s*alt:\s*'[^']*'\s*\},?\s*\r?\n/gm,
  '',
);

// Map featuredImage by slug-keyword to topical local PNGs.
const featuredImageMap = [
  [/mirror|couples|joint/, '/images/mirror-wills.png'],
  [/lasting-power|lpa|attorney/, '/images/lasting-power-of-attorney.png'],
  [/probate/, '/images/probate-support.png'],
  [/trust|estate-planning|inheritance/, '/images/trust-planning.png'],
  [/single-will|will-writing-costs|home-visit|review|second-opinion|emergency|mistake|choose/, '/images/single-will.png'],
];

out = out.replace(
  /featuredImage:\s*'https:\/\/files\.autoblogging\.ai\/images\/([^()]+)\([^)]+\)_\d+\.jpe?g'/g,
  (match, slugFragment) => {
    for (const [re, img] of featuredImageMap) {
      if (re.test(slugFragment)) return `featuredImage: '${img}'`;
    }
    return `featuredImage: '/images/estate-planning.png'`;
  },
);

// Catch any remaining bare autoblog URL refs that aren't featuredImage.
out = out.replace(
  /'https:\/\/files\.autoblogging\.ai\/images\/[^']+'/g,
  `'/images/estate-planning.png'`,
);

// US-specific terms that may have bled in (less likely on this site but
// applied for safety).
const usToUk = [
  [/IRS Publication 583/g, 'the HMRC record-keeping guide'],
  [/IRS Publication 535/g, 'the HMRC allowable expenses guide'],
  [/Publication 583/g, 'the HMRC record-keeping guide'],
  [/Publication 535/g, 'the HMRC allowable expenses guide'],
  [/Schedule C/g, 'Self Assessment'],
  [/Form 1040/g, 'the SA100 return'],
  [/Form 4562/g, 'the capital allowances claim'],
  [/the IRS/g, 'HMRC'],
  [/\bIRS\b/g, 'HMRC'],
  // Will-writing specific US-isms
  [/probate court/gi, 'Probate Registry'],
  [/last will and testament/g, 'last will and testament'], // valid UK
  [/notary/g, 'solicitor'],
  // US spellings
  [/\bcategorize\b/g, 'categorise'],
  [/\bCategorize\b/g, 'Categorise'],
  [/\bcategorized\b/g, 'categorised'],
  [/\bcategorizes\b/g, 'categorises'],
  [/\bcategorizing\b/g, 'categorising'],
  [/\bcategorization\b/g, 'categorisation'],
  [/\borganize\b/g, 'organise'],
  [/\bOrganize\b/g, 'Organise'],
  [/\borganized\b/g, 'organised'],
  [/\borganizes\b/g, 'organises'],
  [/\borganizing\b/g, 'organising'],
  [/\borganization\b/g, 'organisation'],
  [/\boptimize\b/g, 'optimise'],
  [/\boptimized\b/g, 'optimised'],
  [/\boptimizing\b/g, 'optimising'],
  [/\bcustomize\b/g, 'customise'],
  [/\bcustomized\b/g, 'customised'],
  [/\bspecialize\b/g, 'specialise'],
  [/\bspecialized\b/g, 'specialised'],
  [/\brealize\b/g, 'realise'],
  [/\brealized\b/g, 'realised'],
  [/\banalyze\b/g, 'analyse'],
  [/\banalyzed\b/g, 'analysed'],
  [/\butilize\b/g, 'utilise'],
];

for (const [pattern, replacement] of usToUk) {
  out = out.replace(pattern, replacement);
}

if (out === src) {
  console.log('No changes — already clean.');
  process.exit(0);
}

fs.writeFileSync(FILE, out, 'utf8');

console.log(`autoblog refs: ${(src.match(/files\.autoblogging\.ai/g) || []).length} → ${(out.match(/files\.autoblogging\.ai/g) || []).length}`);
console.log(`IRS refs: ${(src.match(/\bIRS\b/g) || []).length} → ${(out.match(/\bIRS\b/g) || []).length}`);
console.log(`bytes: ${src.length} → ${out.length} (${out.length - src.length})`);
