// data/cityContent.ts
export const cityPageContent = {
  introHeading: (cityName: string) => `Writing Services Available in ${cityName}`,
  introParagraphs: (cityName: string) => [
    `Finding the right writer in ${cityName} means going beyond a generic freelancer search. Our matching service connects you with writing professionals who have specific experience in your discipline, sector, and format — making every introduction relevant rather than just available.`,
    `Whether you need business copy that converts, content that ranks, academic support, or a CV that gets interviews, our ${cityName} network includes specialists across every writing discipline. The matching is free — you only pay the writer or agency for the work.`
  ],
  matchingHeading: (cityName: string) => `Why ${cityName} Clients Choose Our Writing Matching Service`,
  matchingCards: (cityName: string) => [
    { iconName: 'Star', title: "Brief-Based Matching", desc: `We read your brief carefully and match based on specific expertise — subject matter, format, and sector — not just who is available. The right match for your ${cityName} project makes a measurable difference to the outcome.` },
    { iconName: 'Shield', title: "Vetted Professionals Only", desc: `Every writer and agency in our network has been assessed on portfolio quality, client references, and professional conduct. We turn away more applicants than we accept so you don't have to filter the poor options.` },
    { iconName: 'Clock', title: "24-Hour Introductions", desc: `Most ${cityName} clients receive their first introduction within 24 hours of submitting a brief. For urgent projects, same-day matching is often possible. London business moves fast — we match the pace.` },
    { iconName: 'CheckCircle', title: "Free Re-Match Guarantee", desc: `If your first introduction isn't the right fit, we'll find you another with no fuss and no charge. Our reputation depends on the quality of every match we make, so we take re-matching seriously.` }
  ],
  sidebarCta: (cityName: string) => ({ heading: `Find a Writer in ${cityName}`, description: `Tell us about your project and we'll introduce you to the right writing professional in ${cityName} within 24 hours. No commitment, no cost to you.` }),
  sidebarFinance: (cityName: string) => ({ heading: `Flexible Payment Arrangements`, description: `Most writers and agencies in our network accommodate staged payments for larger projects. Discuss terms directly with your matched professional — we'll facilitate introductions and let you agree what works for both parties.` }),
  bottomCta: (cityName: string) => ({ heading: `Find Your Writer in ${cityName} Today`, description: `Free matching service. No commitment until you choose to proceed. Introductions within 24 hours.` }),
  schemaServiceTypes: ["business-copywriting", "academic-writing-support", "cv-cover-letter-writing", "blog-seo-content", "proofreading-editing", "technical-grant-writing"],
};
