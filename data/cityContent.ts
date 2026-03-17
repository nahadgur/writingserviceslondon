// data/cityContent.ts
export const cityPageContent = {
  introHeading: (cityName: string) => `Will Writing and Estate Planning Services in ${cityName}`,
  introParagraphs: (cityName: string) => [
    `Finding the right will writer or estate planning specialist in ${cityName} means going beyond a generic directory search. Our matching service connects you with professionals who have specific experience with estates like yours — complex family situations, London property values, and the kinds of assets London residents accumulate.`,
    `Whether you need a straightforward single will, mirror wills for you and your partner, a Lasting Power of Attorney, trust planning, or probate support, our ${cityName} network includes specialists across every aspect of estate planning. The matching is free — you only pay the specialist for their work.`
  ],
  matchingHeading: (cityName: string) => `Why ${cityName} Clients Choose Our Will Writing Matching Service`,
  matchingCards: (cityName: string) => [
    { iconName: 'Star', title: "Situation-Based Matching", desc: `We read your circumstances carefully and match based on your specific estate, family situation, and planning needs — not just who is available. The right specialist for your ${cityName} situation makes a measurable difference to the outcome.` },
    { iconName: 'Shield', title: "Vetted Specialists Only", desc: `Every will writer and estate planning specialist in our network has been assessed on qualifications, professional memberships, and client references. We turn away more applicants than we accept so you don't have to filter the poor options.` },
    { iconName: 'Clock', title: "24-Hour Introductions", desc: `Most ${cityName} clients receive their first introduction within 24 hours of contacting us. For urgent situations — where health concerns make speed essential — same-day matching is often possible.` },
    { iconName: 'CheckCircle', title: "Free Re-Match Guarantee", desc: `If your first introduction isn't the right fit, we'll find you another with no fuss and no charge. Our reputation depends on the quality of every match we make, so we take re-matching seriously.` }
  ],
  sidebarCta: (cityName: string) => ({ heading: `Find a Will Writing Specialist in ${cityName}`, description: `Tell us about your situation and we'll introduce you to the right estate planning professional in ${cityName} within 24 hours. No commitment, no cost to you.` }),
  sidebarFinance: (cityName: string) => ({ heading: `Staged Payment Plans Available`, description: `Most specialists serving ${cityName} offer staged payment arrangements for comprehensive estate planning packages. Discuss payment terms directly with your matched professional.` }),
  bottomCta: (cityName: string) => ({ heading: `Find Your Will Writing Specialist in ${cityName} Today`, description: `Free matching service. No commitment until you choose to proceed. Introductions within 24 hours.` }),
  schemaServiceTypes: ["single-will", "mirror-wills", "lasting-power-of-attorney", "trust-planning", "estate-planning", "probate-support"],
};
