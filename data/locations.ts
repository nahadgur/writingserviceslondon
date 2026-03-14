// data/locations.ts
export const LOCATIONS: Record<string, string[]> = {
  "Central London": ["City of London","Canary Wharf","Clerkenwell","Farringdon","Barbican","Moorgate","Liverpool Street","Aldgate","Bishopsgate","Bank","Monument","Blackfriars","Holborn","Chancery Lane","Temple"],
  "West End and Soho": ["Soho","Covent Garden","Fitzrovia","Bloomsbury","Marylebone","Mayfair","Piccadilly","Oxford Street","Tottenham Court Road","King's Cross","Euston","Russell Square"],
  "East London": ["Shoreditch","Hoxton","Bethnal Green","Hackney","Dalston","Stoke Newington","Bow","Stratford","Canary Wharf","Poplar","Stepney","Whitechapel","Wapping","Bermondsey"],
  "North London": ["Islington","Angel","Camden","Kentish Town","Highbury","Archway","Finsbury Park","Crouch End","Muswell Hill","Highgate","Hampstead","Golders Green","Finchley","Barnet"],
  "South London": ["Brixton","Clapham","Battersea","Stockwell","Peckham","New Cross","Lewisham","Greenwich","Deptford","Elephant and Castle","Borough","Bermondsey","Herne Hill","Dulwich"],
  "West London": ["Hammersmith","Fulham","Chiswick","Ealing","Acton","Shepherd's Bush","Notting Hill","Kensington","Chelsea","Putney","Richmond","Wimbledon","Kingston","Twickenham"]
};
export function getCityBySlug(slug: string): string | undefined {
  const all = Object.values(LOCATIONS).flat();
  return all.find(city => toSlug(city) === slug);
}
export function toSlug(city: string): string {
  return city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
