// data/serviceLocationContent.ts
export const serviceLocationContent: Record<string, {
  intro: (city: string) => string[]; steps: (city: string) => string[]; whyPoints: (city: string) => string[];
}> = {
  "single-will": {
    intro: (city) => [
      `Will writing in ${city} connects residents with qualified specialists who understand local estate values and the specific circumstances that London clients bring to will planning. Whether your estate is straightforward or complex, a professionally drafted will ensures your wishes are carried out and your loved ones are protected.`,
      `We match ${city} residents with will writers who have experience with local property ownership, family circumstances common to London residents, and the pace that makes getting things done in the city essential.`
    ],
    steps: (city) => [
      `Tell us about your situation — your family, assets, wishes, and any specific requirements`,
      `We identify will writers in our network with experience relevant to your type of estate`,
      `Introductions made within 24 hours — review specialist profiles and qualifications`,
      `Initial consultation in ${city} (at home, in office, or remotely) to discuss your wishes in detail`,
      `Will drafted, reviewed, and amended until it precisely reflects your intentions`,
      `Formal execution with proper witnessing — your will writer guides you through every step`
    ],
    whyPoints: (city) => [
      `Specialists with experience of ${city} estates including property ownership, investments, and family complexity`,
      `Legally robust documents that satisfy the Wills Act 1837 requirements`,
      `Clear explanation of every provision so you fully understand what you are signing`,
      `Free re-match guarantee if your first introduction is not the right fit`
    ],
  },
  "mirror-wills": {
    intro: (city) => [
      `Mirror wills in ${city} provide both partners with legally valid, matching protection — ensuring your estate passes to each other and then to your chosen beneficiaries. For cohabiting couples in particular, wills are the only way to protect each other from the intestacy rules.`,
      `Our matched will writers serving ${city} conduct joint consultations, draft both wills simultaneously, and ensure both partners fully understand and approve every provision before execution.`
    ],
    steps: (city) => [
      `Share details of your situation as a couple — family, assets, and shared wishes`,
      `We match you with a will writer experienced in couples' estate planning`,
      `Joint consultation in ${city} to discuss both partners' wishes and any differences`,
      `Both wills drafted and provided for review simultaneously`,
      `Any amendments incorporated — one revision round included`,
      `Both wills formally executed with independent witnessing`
    ],
    whyPoints: (city) => [
      `Essential protection for unmarried couples who are not covered by intestacy rules`,
      `Cost-effective — significantly cheaper than two independent wills`,
      `Flexibility for both partners to update independently if circumstances change`,
      `Experience with blended families and complex beneficiary arrangements in ${city}`
    ],
  },
  "lasting-power-of-attorney": {
    intro: (city) => [
      `Lasting Powers of Attorney in ${city} give you control over who manages your affairs if you lose mental capacity. Without them, your family has no legal authority to act on your behalf — regardless of your relationship — and must apply to the Court of Protection at significant cost and delay.`,
      `Our matched LPA specialists serving ${city} ensure both types of LPA are properly drafted, correctly executed, and registered with the Office of the Public Guardian. They handle the entire process from initial consultation to confirmed registration.`
    ],
    steps: (city) => [
      `Discuss your circumstances — who you want as attorneys and any specific instructions`,
      `We match you with an LPA specialist experienced with ${city} clients`,
      `Consultation to explain both LPA types, attorney duties, and execution requirements`,
      `Both LPAs drafted and sent for review with full explanation of each provision`,
      `Execution coordinated — attorneys, certificate provider, and witnesses all guided through the process`,
      `OPG registration submitted and managed — confirmed registration received in approximately 20 weeks`
    ],
    whyPoints: (city) => [
      `Essential protection against the Court of Protection process if you lose capacity`,
      `Both LPA types handled together — often at a bundled discount`,
      `Specialist guidance on choosing and briefing attorneys`,
      `Full OPG registration management included in the service`
    ],
  },
  "trust-planning": {
    intro: (city) => [
      `Trust planning in ${city} addresses one of the most valuable estate planning opportunities for London residents — protecting assets from care fees, reducing inheritance tax, and ensuring assets pass to the right people at the right time. With London property values as they are, trust planning is relevant to far more families than realise it.`,
      `Our matched trust planning specialists serving ${city} combine technical expertise with clear, jargon-free explanation. They recommend trust structures that are genuinely appropriate for your situation — not the most complex or the most expensive option.`
    ],
    steps: (city) => [
      `Share your estate details — property, investments, family structure, and planning objectives`,
      `We match you with a trust specialist with relevant experience for your situation`,
      `Initial consultation to review your estate and identify appropriate trust structures`,
      `Options presented with clear explanation of costs, benefits, and implications`,
      `Trust documents drafted and reviewed — amendments incorporated as needed`,
      `Execution and, where applicable, asset transfer into the trust structure`
    ],
    whyPoints: (city) => [
      `Specialist understanding of ${city} property values and care fee protection planning`,
      `Inheritance tax modelling to quantify the potential savings`,
      `Trust structures recommended only where genuinely appropriate for your situation`,
      `Ongoing trustee support available as circumstances evolve`
    ],
  },
  "estate-planning": {
    intro: (city) => [
      `Estate planning in ${city} brings together all aspects of your financial and personal situation to ensure your estate passes efficiently and tax-effectively to the people you intend. For London residents with property, pension assets, and investments, this is typically more complex — and more rewarding to address — than expected.`,
      `Our matched estate planning specialists serving ${city} produce a comprehensive written review of your position and a prioritised action plan. Many clients are surprised both by the scale of their IHT exposure and by how much of it can be legitimately reduced with proper planning.`
    ],
    steps: (city) => [
      `Provide a complete picture of your assets — property, pensions, investments, business interests`,
      `We match you with an estate planning specialist experienced with ${city} clients`,
      `Comprehensive review meeting to discuss your estate, family, and planning objectives`,
      `IHT position calculated and planning options assessed`,
      `Written report produced with prioritised recommendations and suggested timeline`,
      `Implementation support — will updates, trust establishment, gifting strategies — as needed`
    ],
    whyPoints: (city) => [
      `Comprehensive review covering wills, LPAs, trusts, pensions, and gifting in one engagement`,
      `IHT calculation showing your current exposure and the impact of recommended strategies`,
      `Prioritised action plan — not everything needs to be done at once`,
      `Specialist understanding of ${city} estate values and the London property market`
    ],
  },
  "probate-support": {
    intro: (city) => [
      `Probate support in ${city} provides executors and families with professional guidance through the estate administration process after a bereavement. From obtaining the grant of probate to distributing the estate, specialist support ensures the process is handled correctly and as efficiently as possible.`,
      `Our matched probate specialists serving ${city} combine legal expertise with compassionate client handling. They understand that executors are often dealing with grief alongside administrative responsibility, and they take the burden of the legal process firmly off your shoulders.`
    ],
    steps: (city) => [
      `Contact us as soon as you are ready — there is no obligation to start immediately`,
      `We match you with a probate specialist experienced with ${city} estates`,
      `Initial consultation to assess the estate, identify requirements, and agree scope of support`,
      `Asset valuations arranged, IHT position assessed, and HMRC returns prepared`,
      `Grant of probate applied for — the OPG process is managed in full`,
      `Estate collected, debts settled, distribution made, and full accounts provided to beneficiaries`
    ],
    whyPoints: (city) => [
      `Compassionate, experienced professionals who understand the sensitivity of bereavement administration`,
      `Fixed-fee quotes for straightforward ${city} estates — no surprise costs`,
      `HMRC compliance managed in full — IHT400 and all supporting schedules`,
      `Experience with complex ${city} estates including property sales and investment portfolios`
    ],
  },
};
