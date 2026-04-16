// data/locations.ts — 15 curated London hubs (Phase 2 cull from 83 → 15)
// Sub-areas are listed per hub for content signals — they have no pages.

export interface AreaHub {
  name: string;
  slug: string;
  postcode: string;
  region: 'North' | 'South' | 'East' | 'West' | 'Central';
  subAreas: SubArea[];
}

export interface SubArea {
  name: string;
  postcode?: string;
  note?: string; // one-line descriptor for on-page use
}

export const AREA_HUBS: AreaHub[] = [
  {
    name: 'Mayfair',
    slug: 'mayfair',
    postcode: 'W1',
    region: 'Central',
    subAreas: [
      { name: 'Belgravia', postcode: 'SW1X', note: 'Ultra-prime estates with significant overseas property' },
      { name: 'Knightsbridge', postcode: 'SW1X', note: 'High-value residential with international family structures' },
      { name: 'St James\'s', postcode: 'SW1A', note: 'Club memberships and private wealth concentration' },
      { name: 'Marylebone', postcode: 'W1U', note: 'Medical professionals and village residential' },
      { name: 'Fitzrovia', postcode: 'W1T', note: 'Media and Harley Street medical estates' },
      { name: 'Soho', postcode: 'W1D', note: 'Creative industry and LGBTQ+ family planning' },
      { name: 'Bond Street', postcode: 'W1S', note: 'Art market professionals and international buyers' },
      { name: 'Piccadilly', postcode: 'W1J', note: 'Private members clubs and diplomatic community' },
    ],
  },
  {
    name: 'Kensington',
    slug: 'kensington',
    postcode: 'W8',
    region: 'West',
    subAreas: [
      { name: 'Notting Hill', postcode: 'W11', note: 'Celebrity and international family estates' },
      { name: 'Holland Park', postcode: 'W11', note: 'Ultra-prime residential with complex family structures' },
      { name: 'Earl\'s Court', postcode: 'SW5', note: 'International professionals and young professional renters' },
      { name: 'Olympia', postcode: 'W14', note: 'Mixed residential and exhibition venue connections' },
      { name: 'Shepherd\'s Bush', postcode: 'W12', note: 'BBC media professionals and multicultural community' },
      { name: 'Bayswater', postcode: 'W2', note: 'International residents and hotel-area professionals' },
      { name: 'Westbourne Grove', postcode: 'W2', note: 'Affluent boutique residential and creative professionals' },
    ],
  },
  {
    name: 'Chelsea',
    slug: 'chelsea',
    postcode: 'SW3',
    region: 'West',
    subAreas: [
      { name: 'Fulham', postcode: 'SW6', note: 'Family estates with unexpected IHT exposure from appreciation' },
      { name: 'Battersea', postcode: 'SW11', note: 'Nine Elms new-build buyers and young families' },
      { name: 'South Kensington', postcode: 'SW7', note: 'Museums quarter and international academic estates' },
      { name: 'Pimlico', postcode: 'SW1V', note: 'Civil servant and professional residential estates' },
      { name: 'World\'s End', postcode: 'SW10', note: 'Artists and creative professionals in Chelsea fringe' },
      { name: 'Sloane Square', postcode: 'SW1W', note: 'Affluent residential and retail professional community' },
      { name: 'Brompton', postcode: 'SW3', note: 'High-value residential close to V&A and museums' },
    ],
  },
  {
    name: 'Hampstead',
    slug: 'hampstead',
    postcode: 'NW3',
    region: 'North',
    subAreas: [
      { name: 'Golders Green', postcode: 'NW11', note: 'Jewish and Japanese community culturally sensitive estates' },
      { name: 'Finchley', postcode: 'N3', note: 'Jewish community with intergenerational planning traditions' },
      { name: 'Highgate', postcode: 'N6', note: 'Elderly affluent residents in heavily appreciated period homes' },
      { name: 'Belsize Park', postcode: 'NW3', note: 'Media and professional families in prime north London' },
      { name: 'Swiss Cottage', postcode: 'NW3', note: 'Jewish community and international professional residents' },
      { name: 'Cricklewood', postcode: 'NW2', note: 'Irish and diverse community family estates' },
      { name: 'West Hampstead', postcode: 'NW6', note: 'Young professional couples in a village-feel suburb' },
      { name: 'Fortune Green', postcode: 'NW6', note: 'Established residential with long-term community wealth' },
    ],
  },
  {
    name: 'Islington',
    slug: 'islington',
    postcode: 'N1',
    region: 'North',
    subAreas: [
      { name: 'Angel', postcode: 'N1', note: 'Young professional couples with first-property wills' },
      { name: 'Canonbury', postcode: 'N1', note: 'Media professionals and affluent family estates' },
      { name: 'Barnsbury', postcode: 'N1', note: 'Period terrace properties with significant IHT exposure' },
      { name: 'Highbury', postcode: 'N5', note: 'Affluent families with settled professional estates' },
      { name: 'Archway', postcode: 'N19', note: 'Irish heritage community and NHS Whittington staff' },
      { name: 'Finsbury Park', postcode: 'N4', note: 'Turkish and Kurdish community with overseas connections' },
      { name: 'Holloway', postcode: 'N7', note: 'Diverse young professional community in transition' },
      { name: 'Tufnell Park', postcode: 'N7', note: 'Creative and media families in village-feel location' },
    ],
  },
  {
    name: 'Hackney',
    slug: 'hackney',
    postcode: 'E8',
    region: 'East',
    subAreas: [
      { name: 'Dalston', postcode: 'E8', note: 'Turkish community and hospitality business succession' },
      { name: 'Stoke Newington', postcode: 'N16', note: 'Hasidic Jewish and Turkish community specialist planning' },
      { name: 'Shoreditch', postcode: 'EC2A', note: 'Tech founders and startup equity succession' },
      { name: 'Hoxton', postcode: 'N1', note: 'Gallery owners and creative IP succession planning' },
      { name: 'London Fields', postcode: 'E8', note: 'Young families with creative industry income' },
      { name: 'Bethnal Green', postcode: 'E2', note: 'Bangladeshi heritage and art scene gentrification' },
      { name: 'Homerton', postcode: 'E9', note: 'Diverse community with growing family estates' },
      { name: 'Clapton', postcode: 'E5', note: 'Orthodox Jewish community and young professional families' },
    ],
  },
  {
    name: 'Canary Wharf',
    slug: 'canary-wharf',
    postcode: 'E14',
    region: 'East',
    subAreas: [
      { name: 'Poplar', postcode: 'E14', note: 'Diverse Docklands community and new-build buyers' },
      { name: 'Limehouse', postcode: 'E14', note: 'Riverside professional estates and historic community' },
      { name: 'Wapping', postcode: 'E1W', note: 'Warehouse conversion owners with substantial equity' },
      { name: 'Isle of Dogs', postcode: 'E14', note: 'Finance professionals and new residential development' },
      { name: 'Millwall', postcode: 'E14', note: 'Docklands regeneration new-build community' },
      { name: 'Cubitt Town', postcode: 'E14', note: 'Island community with established residential estates' },
      { name: 'South Quay', postcode: 'E14', note: 'High-spec apartments close to Canary Wharf offices' },
      { name: 'Crossharbour', postcode: 'E14', note: 'Docklands residential with proximity to finance hub' },
    ],
  },
  {
    name: 'Clapham',
    slug: 'clapham',
    postcode: 'SW4',
    region: 'South',
    subAreas: [
      { name: 'Brixton', postcode: 'SW9', note: 'Caribbean heritage families with culturally sensitive planning' },
      { name: 'Stockwell', postcode: 'SW9', note: 'Portuguese and Latin American community overseas property' },
      { name: 'Balham', postcode: 'SW12', note: 'Young professional couples buying first family homes' },
      { name: 'Tooting', postcode: 'SW17', note: 'South Asian families with cultural inheritance traditions' },
      { name: 'Streatham', postcode: 'SW16', note: 'Diverse community with growing first-buyer demand' },
      { name: 'Clapham South', postcode: 'SW12', note: 'Young professional families with childcare and guardianship needs' },
      { name: 'Clapham North', postcode: 'SW4', note: 'Young renters transitioning to first-time buyers' },
      { name: 'Clapham Common', postcode: 'SW4', note: 'Established professional families with park-side premium' },
    ],
  },
  {
    name: 'Greenwich',
    slug: 'greenwich',
    postcode: 'SE10',
    region: 'South',
    subAreas: [
      { name: 'Blackheath', postcode: 'SE3', note: 'Affluent village families with substantial period property' },
      { name: 'Lewisham', postcode: 'SE13', note: 'Caribbean and African heritage overseas property planning' },
      { name: 'Deptford', postcode: 'SE8', note: 'Vietnamese community and creative gentrification wills' },
      { name: 'New Cross', postcode: 'SE14', note: 'Goldsmiths arts community and first-time buyer wills' },
      { name: 'Peckham', postcode: 'SE15', note: 'West African community with customary inheritance needs' },
      { name: 'Woolwich', postcode: 'SE18', note: 'Royal Arsenal regeneration and armed forces estates' },
      { name: 'Charlton', postcode: 'SE7', note: 'Family estates in a transitional south-east London area' },
      { name: 'Plumstead', postcode: 'SE18', note: 'Outer south-east London with moderate family estates' },
    ],
  },
  {
    name: 'Richmond',
    slug: 'richmond',
    postcode: 'TW9',
    region: 'South',
    subAreas: [
      { name: 'Wimbledon', postcode: 'SW19', note: 'Affluent suburb with intergenerational wealth transfer focus' },
      { name: 'Putney', postcode: 'SW15', note: 'Settled professionals approaching retirement with IHT exposure' },
      { name: 'Twickenham', postcode: 'TW1', note: 'School-catchment family estates with premium property values' },
      { name: 'Kew', postcode: 'TW9', note: 'Scientific and cultural professionals near the Gardens' },
      { name: 'Ham', postcode: 'TW10', note: 'Exclusive riverside estates with significant property wealth' },
      { name: 'Petersham', postcode: 'TW10', note: 'Rural enclave with affluent established family homes' },
      { name: 'East Sheen', postcode: 'SW14', note: 'Family estates with Richmond Park access premium' },
      { name: 'Mortlake', postcode: 'SW14', note: 'Riverside families with professional pension accumulation' },
    ],
  },
  {
    name: 'Camden',
    slug: 'camden',
    postcode: 'NW1',
    region: 'North',
    subAreas: [
      { name: 'Primrose Hill', postcode: 'NW1', note: 'Celebrity and affluent family estates with IHT complexity' },
      { name: 'Kentish Town', postcode: 'NW5', note: 'Irish heritage families and first-time buyer wills' },
      { name: 'Hampstead Heath Edge', postcode: 'NW3', note: 'Affluent properties on the edge of the Heath' },
      { name: 'Chalk Farm', postcode: 'NW1', note: 'Creative professionals and music industry estates' },
      { name: 'Mornington Crescent', postcode: 'NW1', note: 'Young professional transition from renting to buying' },
      { name: 'Tufnell Park', postcode: 'N7', note: 'Village-feel creative families with freelance business interests' },
      { name: 'Gospel Oak', postcode: 'NW5', note: 'Diverse community with mixed estate planning needs' },
      { name: 'Belsize Village', postcode: 'NW3', note: 'Affluent media and professional family estates' },
    ],
  },
  {
    name: 'Shoreditch',
    slug: 'shoreditch',
    postcode: 'EC2A',
    region: 'East',
    subAreas: [
      { name: 'Old Street', postcode: 'EC1V', note: 'Tech startup hub with complex equity succession needs' },
      { name: 'Spitalfields', postcode: 'E1', note: 'Bangladeshi community and creative gentrification' },
      { name: 'Whitechapel', postcode: 'E1', note: 'Bangladeshi community centre and hospital staff estates' },
      { name: 'Aldgate', postcode: 'E1', note: 'City fringe with Sharia-compliant and professional wills' },
      { name: 'Clerkenwell', postcode: 'EC1', note: 'Design professionals in heavily appreciated loft conversions' },
      { name: 'Farringdon', postcode: 'EC1', note: 'Elizabeth line hub with food and creative business succession' },
      { name: 'Stepney', postcode: 'E1', note: 'Diverse East End community intestacy prevention' },
      { name: 'Mile End', postcode: 'E1', note: 'University-adjacent community with diverse planning needs' },
    ],
  },
  {
    name: 'Battersea',
    slug: 'battersea',
    postcode: 'SW11',
    region: 'South',
    subAreas: [
      { name: 'Nine Elms', postcode: 'SW8', note: 'High-spec new-build buyers with international investors' },
      { name: 'Wandsworth', postcode: 'SW18', note: 'Family estates with strong school catchment premium' },
      { name: 'Clapham Junction', postcode: 'SW11', note: 'Young professional commuters with first-home wills' },
      { name: 'Queenstown Road', postcode: 'SW8', note: 'Young professional properties near Thames' },
      { name: 'Vauxhall', postcode: 'SW8', note: 'LGBTQ+ community and regeneration apartment owners' },
      { name: 'Lambeth North', postcode: 'SE1', note: 'Diverse riverside community and professional residents' },
      { name: 'South Lambeth', postcode: 'SW8', note: 'Portuguese community and young professional mix' },
      { name: 'Latchmere', postcode: 'SW11', note: 'Established Battersea village community with family estates' },
    ],
  },
  {
    name: 'Dulwich',
    slug: 'dulwich',
    postcode: 'SE21',
    region: 'South',
    subAreas: [
      { name: 'Herne Hill', postcode: 'SE24', note: 'Young creative families with village-suburb property wealth' },
      { name: 'Crystal Palace', postcode: 'SE19', note: 'Young families attracted by value and community' },
      { name: 'Forest Hill', postcode: 'SE23', note: 'Diverse families with growing south-east London estates' },
      { name: 'Sydenham', postcode: 'SE26', note: 'Family estates with school-driven community character' },
      { name: 'West Norwood', postcode: 'SE27', note: 'Diverse community with first-time buyer demand' },
      { name: 'Tulse Hill', postcode: 'SW2', note: 'Diverse south London families and growing estate wealth' },
      { name: 'Gipsy Hill', postcode: 'SE19', note: 'Young families buying into an improving area' },
      { name: 'East Dulwich', postcode: 'SE22', note: 'School-premium family estates with cultural character' },
    ],
  },
  {
    name: 'Stratford',
    slug: 'stratford',
    postcode: 'E15',
    region: 'East',
    subAreas: [
      { name: 'Bow', postcode: 'E3', note: 'Bangladeshi community and Olympic-adjacent professional buyers' },
      { name: 'Bethnal Green', postcode: 'E2', note: 'Heritage community and creative gentrifiers' },
      { name: 'Forest Gate', postcode: 'E7', note: 'Diverse families with South Asian community character' },
      { name: 'Manor Park', postcode: 'E12', note: 'Diverse outer east London community family estates' },
      { name: 'West Ham', postcode: 'E15', note: 'Long-term community residents and stadium-adjacent buyers' },
      { name: 'Leyton', postcode: 'E10', note: 'First-time buyers attracted by affordability and tube links' },
      { name: 'Leytonstone', postcode: 'E11', note: 'Young professional families and diverse community estates' },
      { name: 'Plaistow', postcode: 'E13', note: 'Outer east London with community-focused estate planning' },
    ],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

export function getAreaHubBySlug(slug: string): AreaHub | undefined {
  return AREA_HUBS.find(a => a.slug === slug);
}

export function getAllAreaSlugs(): string[] {
  return AREA_HUBS.map(a => a.slug);
}

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// Legacy shim — used in sitemap and service pages that still reference LOCATIONS
export const LOCATIONS: Record<string, string[]> = Object.fromEntries(
  AREA_HUBS.map(hub => [hub.name, [hub.name]])
);

// Legacy shim — resolves a slug to a city name (returns hub name only now)
export function getCityBySlug(slug: string): string | undefined {
  return getAreaHubBySlug(slug)?.name;
}
