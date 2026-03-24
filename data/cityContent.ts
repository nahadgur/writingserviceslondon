// data/cityContent.ts
import { getLocationProfileByName, type LocationProfile } from './locationProfiles';

function prof(city: string): LocationProfile | null { return getLocationProfileByName(city) || null; }
function titleCase(str: string): string { return str.replace(/\b\w/g, c => c.toUpperCase()); }
function sizeLabel(p: LocationProfile): string {
  switch (p.avgClientType) { case 'young-professional': return 'young professionals'; case 'family': return 'families'; case 'affluent': return 'high-value estate holders'; case 'elderly': return 'elderly residents'; case 'diverse': return 'local residents'; default: return 'residents'; }
}

export const cityPageContent = {
  heroDesc: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return `Connect with expert will writers and estate planning specialists covering ${cityName}. Free matching, no obligation.`;
    return `From ${p.clientMix[0]} to ${p.clientMix[2] || p.clientMix[1]} — whatever your estate planning situation in ${cityName}, we match you with a specialist who handles your type of work every day. Free matching, no obligation.`;
  },
  introHeading: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return `Will Writing and Estate Planning in ${cityName}`;
    return `Will Writing for ${cityName}'s ${titleCase(p.clientMix[0])} and Beyond`;
  },
  introParagraphs: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return [`Will writing in ${cityName} needs to reflect your specific circumstances.`, `Our matching service connects you with specialists who understand your situation.`];
    return [
      `${p.marketContext} Our matching service connects you with will writers who understand this local demographic — not generic services that apply the same template to every client.`,
      `The estate planning needs here are specific to ${cityName}'s character: ${p.planningNeeds.charAt(0).toLowerCase() + p.planningNeeds.slice(1)}. ${cityName}'s ${sizeLabel(p)} need specialists who understand the ${p.postcode} area and the specific will writing challenges it creates.`
    ];
  },
  matchingHeading: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return `Benefits of Expert Will Writing in ${cityName}`;
    return `Why ${cityName}'s ${titleCase(p.clientMix[0])} Need Specialist Will Writing`;
  },
  matchingCards: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return [
      { iconName: 'Star', title: "Will Writing Expertise", desc: `Specialists in wills, LPAs, trusts, and estate planning covering ${cityName}.` },
      { iconName: 'Shield', title: "Qualified Specialists", desc: `All will writers vetted for qualifications and insurance.` },
      { iconName: 'Clock', title: "Fast Matching", desc: `Connected with specialists within 48 hours.` },
      { iconName: 'CheckCircle', title: "Fixed Fees", desc: `Clear pricing with no hidden costs.` }
    ];
    return [
      { iconName: 'Star', title: `${titleCase(p.clientMix[0])} Expertise`, desc: `${cityName}'s estate planning needs centre on ${p.clientMix.slice(0, 3).join(', ')}. We match you with will writers who handle these exact situations — not generalists using templates.` },
      { iconName: 'Shield', title: "Legally Valid Documents", desc: `Every matched specialist drafts professionally witnessed, legally valid documents that withstand challenge. No DIY templates, no online form-fillers.` },
      { iconName: 'Clock', title: `${p.area} Coverage`, desc: `${p.estateProfile.split(' — ')[0]}. Your matched specialist understands the property values and estate profiles that define ${cityName}.` },
      { iconName: 'CheckCircle', title: "Complete Estate Planning", desc: `${p.planningNeeds.split(',')[0]}. Your specialist coordinates wills, LPAs, trusts, and IHT planning into a coherent plan.` }
    ];
  },
  sidebarCta: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return { heading: `Will Writing in ${cityName}`, description: `Expert will writers serving ${cityName} residents.` };
    return { heading: `Will Writers for ${cityName}'s ${titleCase(p.clientMix[0])}`, description: `Get matched with specialists who handle ${p.clientMix[0]} estate planning in the ${p.postcode} area. Free matching, no obligation.` };
  },
  sidebarFinance: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return { heading: `Fixed-Fee Will Writing`, description: `Will writers in ${cityName} provide fixed-fee quotes with no hidden costs.` };
    return { heading: `Transparent Fees for ${cityName} Clients`, description: `Single wills from £150, mirror wills from £250, LPAs from £300. All specialists provide fixed-fee quotes after your free consultation.` };
  },
  sidebarTrustPoints: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return [{ text: "Free consultation within 48 hours" }, { text: "All will writers qualified and insured" }, { text: "Fixed fees with no hidden costs" }];
    return [
      { text: `Specialists experienced with ${p.clientMix[0]} in the ${p.postcode} area` },
      { text: `Qualified, insured will writers serving ${p.area} clients` },
      { text: `Free initial consultation — no obligation at any stage` },
    ];
  },
  bottomCta: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return { heading: `Find Your Will Writing Specialist in ${cityName}`, description: `Connect with experts who handle wills, LPAs, trusts, and estate planning.` };
    return { heading: `Get Matched With a ${cityName} Will Writing Specialist`, description: `Whether you need a first will, mirror wills, LPAs, or comprehensive estate planning in ${cityName}, we match you with a specialist who handles your situation every day.` };
  },
  faqs: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return [
      { question: `Do your specialists cover ${cityName}?`, answer: `Yes, our network includes qualified will writers serving clients throughout ${cityName}.` },
      { question: `Why use a will writing specialist?`, answer: `Professionally drafted wills are legally valid, properly witnessed, and resistant to challenge. DIY templates are not.` },
      { question: `How much does will writing cost?`, answer: `Single wills from £150, mirror wills from £250, LPAs from £300. Fixed fees quoted after free consultation.` },
    ];
    return [
      { question: `What will writing services do your ${cityName} specialists offer?`, answer: `Our ${cityName} network handles the full range — single wills, mirror wills for couples, lasting powers of attorney, trust planning, comprehensive estate planning, and probate support. ${p.planningNeeds.split('.')[0]}. Whether you need a straightforward first will or complex estate planning, we match you with the right specialist.` },
      { question: `Why choose a ${cityName} specialist over an online will service?`, answer: `${p.marketContext.split('.')[0]}. Online services use generic templates that don't accommodate the specific circumstances of ${cityName} ${sizeLabel(p)}. A local specialist asks the right questions, understands your situation, and drafts a document that actually works for your family.` },
      { question: `How much does will writing cost in ${cityName}?`, answer: `Single wills £150-£500, mirror wills £250-£600, LPAs £300-£500 each. Comprehensive estate planning £1,000-£5,000. All ${cityName} specialists in our network provide fixed-fee quotes after a free initial consultation — no hourly billing and no hidden costs.` },
      { question: `Can I meet a will writer in ${cityName}?`, answer: `Yes — most specialists offer face-to-face consultations in ${cityName}, plus video and phone options. ${p.avgClientType === 'elderly' ? 'Home visits are available throughout ' + cityName + ' for clients who prefer to be seen at home.' : 'Evening and weekend appointments are available for busy ' + cityName + ' professionals.'} The initial consultation is free and without obligation.` },
    ];
  },
  schemaServiceTypes: ["single-will", "mirror-wills", "lasting-power-of-attorney", "trust-planning", "estate-planning", "probate-support"],
};
