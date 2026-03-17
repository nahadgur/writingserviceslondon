// data/pricing.ts
export interface PricingTier { treatment: string; slug: string; priceFrom: number; priceTo: number; typicalDuration: string; serviceIncludes: string; description: string; }
export const pricingTiers: PricingTier[] = [
  { "treatment": "Single Will", "slug": "single-will", "priceFrom": 150, "priceTo": 350, "typicalDuration": "One-off", "serviceIncludes": "Consultation, will drafting, review, signing guidance, secure storage advice", "description": "Pricing reflects complexity of wishes and estate. Standard wills with clear beneficiaries sit at the lower end. Wills involving specific bequests, excluded relatives, or business assets require more detailed drafting." },
  { "treatment": "Mirror Wills", "slug": "mirror-wills", "priceFrom": 250, "priceTo": 550, "typicalDuration": "One-off (pair)", "serviceIncludes": "Joint consultation, two matching wills, review, signing guidance, storage advice", "description": "Priced as a pair. Most couples save 20-30% compared to two separate single wills. Complexity pricing applies where either partner has specific requirements around trusts, business assets, or blended family arrangements." },
  { "treatment": "Lasting Power of Attorney", "slug": "lasting-power-of-attorney", "priceFrom": 300, "priceTo": 900, "typicalDuration": "One-off per LPA", "serviceIncludes": "Consultation, LPA drafting, certificate provider guidance, OPG registration support", "description": "Priced per LPA. Health and Welfare, and Property and Financial Affairs LPAs priced separately. Having both together typically attracts a bundled discount. OPG registration fee of £82 per LPA is separate." },
  { "treatment": "Trust Planning", "slug": "trust-planning", "priceFrom": 500, "priceTo": 1500, "typicalDuration": "One-off", "serviceIncludes": "Estate review, trust recommendation, trust drafting, full explanation of implications", "description": "Pricing depends on trust type and complexity. Protective property trusts added to wills are at the lower end. Discretionary trusts for IHT planning, or trusts involving multiple properties or business assets, sit higher." },
  { "treatment": "Estate Planning Review", "slug": "estate-planning", "priceFrom": 400, "priceTo": 1200, "typicalDuration": "One-off review", "serviceIncludes": "Full asset review, IHT calculation, wills/LPA/trust recommendations, written report", "description": "Comprehensive review of your complete estate position including inheritance tax exposure, available reliefs, gifting strategies, and recommended actions. Delivered as a written report with clear, prioritised recommendations." },
  { "treatment": "Probate Support", "slug": "probate-support", "priceFrom": 1500, "priceTo": 3500, "typicalDuration": "3-12 months", "serviceIncludes": "Grant of probate application, asset collection, HMRC returns, estate distribution", "description": "Fixed-fee probate for straightforward estates. Complex estates with property sales, disputed assets, or international elements are quoted individually. OPG court fee of £300 is separate. Many clients prefer fixed fees for budget certainty." }
];
export const servicePricingMap: Record<string, string[]> = {
  "single-will": ["single-will"],
  "mirror-wills": ["mirror-wills"],
  "lasting-power-of-attorney": ["lasting-power-of-attorney"],
  "trust-planning": ["trust-planning"],
  "estate-planning": ["estate-planning"],
  "probate-support": ["probate-support"]
};
export function getPricingForService(serviceId: string): PricingTier[] {
  const slugs = servicePricingMap[serviceId] || ['single-will'];
  return pricingTiers.filter(p => slugs.includes(p.slug));
}
export const treatmentIncludes = [
  "Consultation, will drafting, review, signing guidance, secure storage advice",
  "Joint consultation, two matching wills, review, signing guidance, storage advice",
  "Consultation, LPA drafting, certificate provider guidance, OPG registration support",
  "Estate review, trust recommendation, trust drafting, full explanation of implications",
  "Full asset review, IHT calculation, wills/LPA/trust recommendations, written report",
  "Grant of probate application, asset collection, HMRC returns, estate distribution"
];
export const financeInfo = { available: true, interestFree: true, monthlyFrom: 25, spreadOver: '6 to 24 months', description: 'Staged payment plans available from most specialists. Many clients prefer to spread the cost of comprehensive estate planning over 6-12 months.' };
