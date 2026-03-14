// data/pricing.ts
export interface PricingTier { treatment: string; slug: string; priceFrom: number; priceTo: number; typicalDuration: string; serviceIncludes: string; description: string; }
export const pricingTiers: PricingTier[] = [
  { "treatment": "Business Copywriting", "slug": "business-copywriting", "priceFrom": 300, "priceTo": 2500, "typicalDuration": "Per project", "serviceIncludes": "Brief consultation, copy drafts, two revision rounds, final delivery", "description": "Pricing reflects scope and experience level. A single landing page differs from a full website rewrite. Senior brand copywriters with agency backgrounds sit at the higher end but deliver measurably stronger commercial copy." },
  { "treatment": "Academic Writing Support", "slug": "academic-writing-support", "priceFrom": 50, "priceTo": 120, "typicalDuration": "Per hour", "serviceIncludes": "Structural guidance, argument development, feedback sessions, editing", "description": "Hourly rates reflect the writer's academic background and subject specialism. Postgraduate-level support and STEM disciplines typically sit towards the higher end of the range." },
  { "treatment": "CV and Cover Letter Writing", "slug": "cv-cover-letter-writing", "priceFrom": 150, "priceTo": 400, "typicalDuration": "Per CV package", "serviceIncludes": "Discovery call, full CV rewrite, tailored cover letter, one revision round", "description": "Rates vary by seniority level. Graduate CVs sit at the lower end while director and executive profiles with LinkedIn optimisation are priced higher. Most clients recoup the cost within their first month of job searching." },
  { "treatment": "Blog and SEO Content", "slug": "blog-seo-content", "priceFrom": 80, "priceTo": 350, "typicalDuration": "Per article", "serviceIncludes": "Brief review, research, SEO-optimised draft, one revision round", "description": "Per-article pricing depends on word count, research depth, and whether keyword research is included. Monthly retainer arrangements offer better value for consistent content needs." },
  { "treatment": "Proofreading and Editing", "slug": "proofreading-editing", "priceFrom": 0.01, "priceTo": 0.03, "typicalDuration": "Per word", "serviceIncludes": "Full proofread or copy edit, tracked changes, style notes", "description": "Industry-standard per-word pricing makes costs predictable for any document length. Copy editing (deeper structural work) sits at the higher end. Rush turnaround incurs an additional fee." },
  { "treatment": "Technical and Grant Writing", "slug": "technical-grant-writing", "priceFrom": 60, "priceTo": 150, "typicalDuration": "Per hour", "serviceIncludes": "Project scoping, research, drafting, review rounds, final submission support", "description": "Technical writers charge by the hour given the unpredictable scope of documentation projects. Grant writers may offer fixed-fee packages for specific applications — discuss at matching stage." }
];
export const servicePricingMap: Record<string, string[]> = {
  "business-copywriting": ["business-copywriting"],
  "academic-writing-support": ["academic-writing-support"],
  "cv-cover-letter-writing": ["cv-cover-letter-writing"],
  "blog-seo-content": ["blog-seo-content"],
  "proofreading-editing": ["proofreading-editing"],
  "technical-grant-writing": ["technical-grant-writing"]
};
export function getPricingForService(serviceId: string): PricingTier[] {
  const slugs = servicePricingMap[serviceId] || ['business-copywriting'];
  return pricingTiers.filter(p => slugs.includes(p.slug));
}
export const treatmentIncludes = [
  "Brief consultation, copy drafts, two revision rounds, final delivery",
  "Structural guidance, argument development, feedback sessions, editing",
  "Discovery call, full CV rewrite, tailored cover letter, one revision round",
  "Brief review, research, SEO-optimised draft, one revision round",
  "Full proofread or copy edit, tracked changes, style notes",
  "Project scoping, research, drafting, review rounds, final submission support"
];
export const financeInfo = { available: false, interestFree: false, monthlyFrom: 0, spreadOver: '', description: 'Most writers and agencies accept staged payments for larger projects. Discuss payment terms directly with your matched professional.' };
