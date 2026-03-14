// data/nearby-areas.ts
export const NEARBY_AREAS: Record<string, string[]> = {
  "city-of-london": ["Moorgate","Clerkenwell","Aldgate","Liverpool Street","Canary Wharf"],
  "canary-wharf": ["City of London","Poplar","Bermondsey","Greenwich","Wapping"],
  "shoreditch": ["Hoxton","Hackney","Bethnal Green","Clerkenwell","Liverpool Street"],
  "soho": ["Covent Garden","Fitzrovia","Mayfair","Bloomsbury","Piccadilly"],
  "brixton": ["Clapham","Stockwell","Herne Hill","Peckham","Streatham"],
  "islington": ["Angel","Clerkenwell","Hackney","Camden","Highbury"],
  "camden": ["Islington","Kentish Town","Hampstead","King's Cross","Bloomsbury"],
  "clapham": ["Brixton","Battersea","Stockwell","Putney","Balham"],
  "hammersmith": ["Fulham","Chiswick","Shepherd's Bush","Putney","Ealing"],
  "hackney": ["Shoreditch","Dalston","Stoke Newington","Islington","Bethnal Green"]
};
export function getNearbyAreas(slug: string): string[] {
  return NEARBY_AREAS[slug] || [];
}
