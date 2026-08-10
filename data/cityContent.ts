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
    if (!p) return `Wills, lasting powers of attorney, trusts and probate support covering ${cityName}. Fixed fees, home visits, free first conversation.`;
    return `From ${p.clientMix[0]} to ${p.clientMix[2] || p.clientMix[1]} — whatever your estate planning situation in ${cityName}, we draft around the estate in front of us rather than filling in a standard form. Fixed fees, home visits, free first conversation.`;
  },
  introHeading: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return `Will Writing and Estate Planning in ${cityName}`;
    return `Will Writing for ${cityName}'s ${titleCase(p.clientMix[0])} and Beyond`;
  },
  introParagraphs: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return [`Will writing in ${cityName} needs to reflect your specific circumstances.`, `We draft around your circumstances rather than applying a standard template.`];
    return [
      `${p.marketContext} We know this local demographic and draft accordingly, rather than applying the same template to every client.`,
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
      { iconName: 'Shield', title: "Qualified Specialists", desc: `Fixed fees quoted in full before any work begins.` },
      { iconName: 'Clock', title: "Fast Turnaround", desc: `Most wills drafted within 3 to 7 working days.` },
      { iconName: 'CheckCircle', title: "Fixed Fees", desc: `Clear pricing with no hidden costs.` }
    ];
    return [
      { iconName: 'Star', title: `${titleCase(p.clientMix[0])} Expertise`, desc: `${cityName}'s estate planning needs centre on ${p.clientMix.slice(0, 3).join(', ')}. We handle these exact situations regularly, and the drafting reflects that rather than relying on a template.` },
      { iconName: 'Shield', title: "Legally Valid Documents", desc: `We draft legally valid documents and take you through the signing and witnessing, which is where most home-made wills fail.` },
      { iconName: 'Clock', title: `${p.area} Coverage`, desc: `${p.estateProfile.split(' — ')[0]}. We know the property values and estate profiles that define ${cityName}.` },
      { iconName: 'CheckCircle', title: "Complete Estate Planning", desc: `${p.planningNeeds.split(',')[0]}. Your specialist coordinates wills, LPAs, trusts, and IHT planning into a coherent plan.` }
    ];
  },
  sidebarCta: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return { heading: `Will Writing in ${cityName}`, description: `Expert will writers serving ${cityName} residents.` };
    return { heading: `Will Writers for ${cityName}'s ${titleCase(p.clientMix[0])}`, description: `Wills and estate planning for ${p.clientMix[0]} in the ${p.postcode} area. Fixed fees and a free first conversation.` };
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
      { text: `Free initial consultation, with no obligation at any stage` },
    ];
  },
  bottomCta: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return { heading: `Find Your Will Writing Specialist in ${cityName}`, description: `Connect with experts who handle wills, LPAs, trusts, and estate planning.` };
    return { heading: `Will Writing in ${cityName}`, description: `Whether you need a first will, mirror wills, LPAs, or comprehensive estate planning in ${cityName}, we handle these situations every day and quote a fixed fee before starting.` };
  },
  faqs: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return [
      { question: `Do you cover ${cityName}?`, answer: `Yes. We cover ${cityName} and the surrounding areas, and most appointments happen at the client's home.` },
      { question: `Why use a will writing specialist?`, answer: `Professionally drafted wills are legally valid, properly witnessed, and resistant to challenge. DIY templates are not.` },
      { question: `How much does will writing cost?`, answer: `Single wills from £150, mirror wills from £250, LPAs from £300. Fixed fees quoted after free consultation.` },
    ];
    return [
      { question: `What will writing services do you offer in ${cityName}?`, answer: `We handle the full range in ${cityName} — single wills, mirror wills for couples, lasting powers of attorney, trust planning, comprehensive estate planning, and probate support. ${p.planningNeeds.split('.')[0]}. Whether you need a straightforward first will or complex estate planning, we quote a fixed fee and draft it around your circumstances.` },
      { question: `Why use a ${cityName} will writer over an online service?`, answer: `${p.marketContext.split('.')[0]}. Online services use generic templates that don't accommodate the specific circumstances of ${cityName} ${sizeLabel(p)}. A local specialist asks the right questions, understands your situation, and drafts a document that actually works for your family.` },
      { question: `How much does will writing cost in ${cityName}?`, answer: `Single wills £150-£350, mirror wills £250-£550 for the pair, LPAs £300-£900 each plus the £82 OPG registration fee. Comprehensive estate planning reviews £400-£1,200. We provide fixed-fee quotes after a free initial consultation — no hourly billing and no hidden costs.` },
      { question: `Can I meet a will writer in ${cityName}?`, answer: `Yes — most specialists offer face-to-face consultations in ${cityName}, plus video and phone options. ${p.avgClientType === 'elderly' ? 'Home visits are available throughout ' + cityName + ' for clients who prefer to be seen at home.' : 'Evening and weekend appointments are available for busy ' + cityName + ' professionals.'} The initial consultation is free and without obligation.` },
    ];
  },
  schemaServiceTypes: ["single-will", "mirror-wills", "lasting-power-of-attorney", "trust-planning", "estate-planning", "probate-support"],
};
