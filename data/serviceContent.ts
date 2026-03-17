// data/serviceContent.ts
export const serviceContent: Record<string, {
  intro: string[]; benefits: { title: string; desc: string }[];
  candidateIntro: string; candidates: string[]; process: { title: string; desc: string }[];
}> = {
  "single-will": {
    intro: [
      "A single will is the foundation of any estate plan — the legal document that determines who receives your assets, who manages your estate as executor, and who cares for any minor children as guardian. Without one, the Intestacy Rules decide these matters, and they rarely reflect what you would actually want.",
      "London residents face additional complexity: high property values mean even modest estates can exceed the inheritance tax threshold; complex family arrangements require careful drafting; and the pace of London life means important documents are often deferred until circumstances make them urgent. A professionally drafted will removes all of this uncertainty.",
      "Our matched will writers produce documents that are legally robust, clearly expressed, and tailored to your specific circumstances. They take time to understand your wishes, explain the implications of different provisions, and ensure the final document truly reflects your intentions."
    ],
    benefits: [
      { "title": "Legal Certainty for Your Loved Ones", "desc": "A professionally drafted will removes ambiguity about your wishes and gives your executors clear authority to act. This prevents delays, reduces the risk of disputes, and ensures your estate is distributed as you intend — not as the Intestacy Rules dictate." },
      { "title": "Guardianship for Minor Children", "desc": "For parents of minor children, naming a guardian in your will is essential. Without this provision, a court decides who cares for your children if both parents die. Your will is the only legal mechanism for expressing this preference." },
      { "title": "Tax-Efficient Structuring", "desc": "A well-drafted will can make use of inheritance tax allowances, direct assets to exempt beneficiaries, and lay the groundwork for trust-based planning. Getting the structure right at will drafting stage avoids costly rectification later." },
      { "title": "Executor Clarity", "desc": "Naming the right executors — and providing appropriate guidance within the will — makes the estate administration process significantly smoother. Your will writer will advise on executor choice and what powers to include." }
    ],
    candidateIntro: "A single will is the right service for:",
    candidates: [
      "Adults of any age who do not yet have a will — particularly those who own property, have children, or have significant savings or assets",
      "Those whose existing will no longer reflects their circumstances following marriage, divorce, births, or deaths",
      "Single individuals, unmarried partners, or those without the need for a second will at this stage",
      "Individuals with specific bequest wishes, charitable intentions, or excluded family members requiring careful drafting",
      "Those with digital assets, cryptocurrency, or intellectual property requiring specialist provisions"
    ],
    process: [
      { "title": "Initial Consultation", "desc": "Your will writer conducts a structured consultation to understand your family situation, assets, wishes, and any specific requirements. This shapes the provisions to be included and identifies any areas requiring specialist attention." },
      { "title": "Will Drafting", "desc": "Your will is drafted in clear, legally precise language. You receive a draft to review, with a full explanation of each provision and its implications. This is your opportunity to clarify, adjust, or add instructions." },
      { "title": "Review and Amendment", "desc": "Any amendments following your review are incorporated. A final draft is provided for your approval before the formal execution process." },
      { "title": "Execution and Storage", "desc": "Your will writer guides you through the formal signing and witnessing process to ensure legal validity. Advice on secure storage and notifying your executors of the will's location is provided as standard." }
    ],
  },
  "mirror-wills": {
    intro: [
      "Mirror wills are two separate but matching wills — one for each partner — that leave everything to each other first, and then to the same chosen beneficiaries. They are the standard recommendation for married couples, civil partners, and cohabiting couples who share the same wishes for their estate.",
      "For cohabiting couples in particular, mirror wills are essential. The intestacy rules do not recognise unmarried partners — without a will, a partner receives nothing from your estate regardless of how long you have lived together. Mirror wills correct this and ensure both partners have proper legal protection.",
      "Our matched will writers draft mirror wills that are legally robust, clearly differentiated where circumstances require, and reviewed jointly with both partners to ensure the provisions truly reflect what both of you want. The process is straightforward and typically completed within two weeks."
    ],
    benefits: [
      { "title": "Protection for Unmarried Partners", "desc": "The intestacy rules offer no protection to unmarried partners. Mirror wills give both partners legal certainty that their estate passes to each other, not to the state or distant relatives." },
      { "title": "Flexibility for Both Partners", "desc": "As separate legal documents, mirror wills can be changed by either partner independently after the first death. This flexibility — absent from joint wills — means the surviving partner can update their provisions as circumstances change." },
      { "title": "Protection for Children", "desc": "Mirror wills typically provide for assets to pass to children after the second death. Combined with appropriate trust provisions, this ensures assets reach the intended beneficiaries even if the surviving partner remarries or circumstances change." },
      { "title": "Cost-Effective Protection", "desc": "Mirror wills as a pair are substantially cheaper than two independent single wills because much of the consultation and drafting work is shared. Most couples achieve complete mutual protection for significantly less than the cost of two separate wills." }
    ],
    candidateIntro: "Mirror wills are suitable for:",
    candidates: [
      "Married couples or civil partners who want to leave everything to each other and then to the same beneficiaries",
      "Cohabiting couples who are not legally married and need wills to protect each other from intestacy",
      "Couples with children — biological, adopted, or step-children — needing to ensure the right provisions for all",
      "Couples with straightforward shared wishes who want a cost-effective, jointly managed solution",
      "Those who need a starting point for estate planning before adding more complex trust provisions"
    ],
    process: [
      { "title": "Joint Consultation", "desc": "Your will writer meets with both partners together to understand your shared wishes, individual assets, and any specific provisions needed. A single consultation typically covers everything needed for both wills." },
      { "title": "Drafting Both Wills", "desc": "Two matching wills are drafted, with any differences in personal assets or specific bequests properly handled within each document. Both drafts are provided for review simultaneously." },
      { "title": "Review and Approval", "desc": "Both partners review their respective wills. Any amendments are incorporated before the final version is produced. Questions at this stage are encouraged — your will writer should ensure both of you fully understand every provision." },
      { "title": "Execution", "desc": "Both wills are formally signed and witnessed in accordance with the Wills Act 1837. Your will writer advises on independent witnessing to ensure validity. Secure storage advice is provided for both documents." }
    ],
  },
  "lasting-power-of-attorney": {
    intro: [
      "A Lasting Power of Attorney (LPA) is a legal document that allows you to appoint one or more trusted people — your attorneys — to make decisions on your behalf if you lose mental capacity. Without an LPA in place, your family has no legal authority to manage your affairs, regardless of your relationship. They would need to apply to the Court of Protection — a lengthy, expensive, and distressing process.",
      "There are two types of LPA: a Property and Financial Affairs LPA, which covers bank accounts, property, investments, and financial decisions; and a Health and Welfare LPA, which covers medical treatment, care arrangements, and daily living decisions. Both types are essential — a financial attorney has no authority over health decisions and vice versa.",
      "LPAs must be signed while you have mental capacity and registered with the Office of the Public Guardian — a process that currently takes approximately 20 weeks. This means starting early is essential. Our matched specialists ensure your LPAs are drafted correctly, executed properly, and registered efficiently."
    ],
    benefits: [
      { "title": "Avoid Court of Protection Proceedings", "desc": "Without an LPA, family members have no legal authority to manage your affairs if you lose capacity. A deputyship application to the Court of Protection can take 6-12 months, cost several thousand pounds, and requires ongoing annual reporting. An LPA prevents all of this." },
      { "title": "You Choose Your Attorneys", "desc": "An LPA gives you control over who makes decisions on your behalf. You can appoint multiple attorneys, specify how they must act (jointly or independently), and include specific instructions or preferences within the document itself." },
      { "title": "Health Decision Authority", "desc": "A Health and Welfare LPA allows your attorneys to make decisions about medical treatment, care home placements, and daily living — including the right to refuse or consent to life-sustaining treatment if you choose to include this power." },
      { "title": "Financial Management Continuity", "desc": "A Property and Financial Affairs LPA allows your attorneys to manage bank accounts, pay bills, collect income, deal with property, and make investment decisions on your behalf — essential for keeping finances running if you are unable to manage them yourself." }
    ],
    candidateIntro: "Lasting Powers of Attorney are essential for:",
    candidates: [
      "All adults — loss of mental capacity can happen at any age through accident, illness, or dementia, and an LPA cannot be made after capacity is lost",
      "Those approaching or in later life, particularly where cognitive decline is a concern",
      "Business owners needing to ensure business decisions can be made on their behalf without interruption",
      "Those with complex financial affairs including property, investments, or overseas assets",
      "Anyone who has seen a family member go through Court of Protection proceedings and wants to prevent the same for their loved ones"
    ],
    process: [
      { "title": "Consultation and Attorney Planning", "desc": "Your specialist discusses the two types of LPA, explains attorney duties and responsibilities, and helps you think through who to appoint, how they should act, and whether any specific instructions or restrictions are needed." },
      { "title": "LPA Drafting", "desc": "Both LPA documents are drafted and sent to you for review. Your specialist explains every section including the certificate provider requirement, how to notify people of your LPA, and the legal implications of each provision." },
      { "title": "Execution Process", "desc": "LPAs require signatures from you, your attorneys, and a certificate provider (an independent person who confirms you understand the document and are not under pressure). Your specialist guides everyone through this process correctly." },
      { "title": "OPG Registration", "desc": "Your completed LPAs are submitted to the Office of the Public Guardian for registration. Current processing time is approximately 20 weeks. Your specialist manages this process and notifies you when registration is confirmed." }
    ],
  },
  "trust-planning": {
    intro: [
      "Trusts are legal arrangements that hold assets for the benefit of named or described beneficiaries, managed by trustees. In estate planning, trusts serve several important purposes: protecting assets from care fee means testing, reducing inheritance tax exposure, controlling how and when beneficiaries receive assets, and protecting vulnerable or minor beneficiaries.",
      "London property values mean that many families now have estates that exceed the inheritance tax threshold. Proper trust planning — whether through protective property trusts incorporated into wills, or standalone discretionary trusts — can significantly reduce the tax burden on your estate and ensure more of what you have worked for passes to your family.",
      "Trust planning requires genuinely specialist advice. The wrong trust structure can create unintended tax consequences, complicate estate administration, or fail to achieve its intended purpose. Our matched trust planning specialists explain your options clearly, model the financial impact, and recommend solutions that are genuinely appropriate for your situation."
    ],
    benefits: [
      { "title": "Care Fee Asset Protection", "desc": "A protective property trust (or life interest trust) in your will can protect your share of the family home from being included in the surviving spouse's assets for care fee means testing after you die. This can preserve significant value for your children or other intended beneficiaries." },
      { "title": "Inheritance Tax Mitigation", "desc": "Various trust structures can reduce the inheritance tax payable on your estate. Nil-rate band trusts, charitable trusts, and strategic use of exemptions and reliefs can significantly reduce the IHT burden on larger London estates." },
      { "title": "Control Over Distribution", "desc": "Discretionary trusts allow trustees to decide who receives assets, how much, and when — giving flexibility to respond to changing family circumstances. This is particularly valuable for protecting assets from a beneficiary's divorce, creditors, or financial vulnerability." },
      { "title": "Protection for Vulnerable Beneficiaries", "desc": "Trusts can be structured to protect beneficiaries who are minors, have mental health difficulties, or receive means-tested benefits. A bare trust for a minor or a disabled persons trust can provide significant long-term protection for vulnerable family members." }
    ],
    candidateIntro: "Trust planning is particularly valuable for:",
    candidates: [
      "Couples with children who want to protect the family home from care fee means testing after the first death",
      "Those with estates exceeding the nil-rate band (£325,000 per person) who want to reduce their IHT exposure",
      "Parents wanting to control how and when children or grandchildren receive inheritances",
      "Those with vulnerable beneficiaries — minors, those with mental health difficulties, or those receiving means-tested benefits",
      "Business owners with significant business property that needs to be handled differently from personal assets"
    ],
    process: [
      { "title": "Estate and Objectives Review", "desc": "Your specialist reviews your assets, family circumstances, and planning objectives. This shapes which trust structures are relevant to your situation and identifies potential risks and opportunities." },
      { "title": "Options and Recommendations", "desc": "Suitable trust structures are explained in plain terms, with the financial modelling to show the potential impact on your estate. Recommendations are made based on your specific situation — not a generic template." },
      { "title": "Trust Drafting", "desc": "Trust documents are drafted in legally precise terms, with trustee guidance notes explaining their duties and powers. For trusts incorporated into wills, the will is amended accordingly." },
      { "title": "Review and Implementation", "desc": "You review all documents with a full explanation of every provision. Once approved, documents are executed and, where applicable, assets are transferred into the trust structure. Ongoing trustee support is available." }
    ],
  },
  "estate-planning": {
    intro: [
      "Comprehensive estate planning is a strategic review of your complete financial and personal picture, looking at how your assets will pass on your death and how much of your estate will be absorbed by inheritance tax. For most London residents, this is more complex than they realise — and more rewarding to address properly.",
      "An estate planning review looks at your wills, LPAs, trust provisions, pension nominations, insurance policies, gifting history, and asset ownership structures. The output is a clear picture of your current position, your likely inheritance tax liability under current rules, and practical recommendations for reducing that liability and ensuring your assets pass to the right people.",
      "The best time to undertake estate planning is before a crisis makes decisions urgent. Our matched specialists take a methodical, non-alarming approach — explaining your position clearly and making recommendations you can implement at your own pace."
    ],
    benefits: [
      { "title": "Complete Estate Visibility", "desc": "Many people are surprised by the scale of their estate when all assets are properly aggregated — property, pensions, investments, business interests, life insurance, and accumulated savings. A clear picture is the starting point for all planning decisions." },
      { "title": "Inheritance Tax Calculation", "desc": "Your specialist calculates your likely IHT liability under current rules, accounting for available allowances including nil-rate bands, residence nil-rate bands, business property relief, and agricultural property relief where applicable." },
      { "title": "Practical Recommendations", "desc": "Estate planning recommendations are prioritised by impact and urgency. Not everything needs to be done immediately — your specialist will identify what is most time-sensitive and what can be implemented progressively." },
      { "title": "Family Alignment", "desc": "Good estate planning often involves conversations with family members about intentions, expectations, and financial realities. Your specialist can facilitate these discussions and ensure everyone understands the plan." }
    ],
    candidateIntro: "A comprehensive estate planning review is right for:",
    candidates: [
      "Those with estates likely to exceed the IHT threshold (£325,000 per person, or £500,000 including the residence nil-rate band) who have not undertaken formal planning",
      "Those approaching retirement whose pension assets, property equity, and accumulated savings are growing into inheritance tax territory",
      "Following a significant change in circumstances — inheritance, property purchase, business sale, marriage, or divorce",
      "Those who have not reviewed their will or estate position for more than five years",
      "Business owners who need to understand how business property relief applies to their estate"
    ],
    process: [
      { "title": "Asset and Liability Review", "desc": "A comprehensive picture of your estate is assembled — property values, investment portfolios, pension funds, business interests, insurance policies, and any gifts made in the last seven years." },
      { "title": "IHT Position Assessment", "desc": "Your inheritance tax position is calculated under current rules, with all available allowances and reliefs identified and applied. This provides a clear baseline figure for planning purposes." },
      { "title": "Strategy Development", "desc": "Strategies for reducing IHT exposure are assessed — gifting, trust structures, will amendments, pension planning, and business relief optimisation — with each option's benefits and implications explained clearly." },
      { "title": "Written Report and Action Plan", "desc": "A comprehensive written report summarises your estate position, recommended actions, and suggested timeline. This serves as your ongoing reference document for estate planning decisions." }
    ],
  },
  "probate-support": {
    intro: [
      "Probate is the legal process of administering a deceased person's estate — collecting assets, paying debts and taxes, and distributing what remains to the beneficiaries. Obtaining the grant of probate (or letters of administration where there is no will) gives executors the legal authority to deal with banks, investment providers, and property registries.",
      "The probate process can be straightforward for simple estates, but it becomes complex when there is property to sell, inheritance tax to pay, overseas assets to address, or when family circumstances create complications. Professional probate support ensures the process is handled correctly, efficiently, and with appropriate care for the bereaved family.",
      "Our matched probate specialists are experienced, compassionate professionals who guide executors through every stage of the process — from the initial application to the final distribution of the estate. They handle HMRC correspondence, IHT calculations, and legal formalities so executors can focus on supporting their families."
    ],
    benefits: [
      { "title": "Executor Relief", "desc": "Being an executor is a significant legal responsibility. Professionals handle the paperwork, HMRC submissions, and legal formalities — allowing executors to focus on family support rather than administrative complexity during a difficult time." },
      { "title": "HMRC Compliance", "desc": "Inheritance tax returns must be accurate and submitted on time. Errors can trigger HMRC enquiries and penalties. Specialist probate professionals ensure all valuations, deductions, and reliefs are properly handled and the IHT400 is correctly completed." },
      { "title": "Faster Estate Administration", "desc": "Professional probate support typically results in faster estate resolution than DIY probate. Specialists know the process, understand common delays, and can escalate where necessary to keep things moving." },
      { "title": "Dispute Risk Reduction", "desc": "Professional involvement reduces the risk of executor errors that can lead to personal liability, and provides clear documentation of all decisions — important if beneficiaries later question how the estate was administered." }
    ],
    candidateIntro: "Probate support is valuable for:",
    candidates: [
      "Executors dealing with an estate for the first time and unfamiliar with the legal and administrative requirements",
      "Estates with significant assets including property, investments, or business interests requiring formal valuation",
      "Estates where inheritance tax is payable, requiring accurate completion of the IHT400 and supporting schedules",
      "Complex estates involving overseas assets, multiple properties, or disputed ownership",
      "Families where the executor lives overseas or is unable to manage the process personally due to their own health or circumstances"
    ],
    process: [
      { "title": "Estate Assessment", "desc": "Your specialist reviews the deceased's assets, liabilities, the will (if one exists), and the family situation. This identifies whether a grant of probate or letters of administration is needed, and whether inheritance tax applies." },
      { "title": "Asset Valuation and IHT", "desc": "All assets are valued at the date of death. If inheritance tax is payable, the IHT400 and relevant schedules are completed, submitted to HMRC, and any tax due is arranged from estate funds before the grant can be issued." },
      { "title": "Grant Application", "desc": "The probate application is submitted to the Probate Registry with the will (if applicable), death certificate, and inheritance tax forms. Current processing times vary — your specialist monitors progress and chases where necessary." },
      { "title": "Estate Administration", "desc": "Once the grant is received, assets are collected, debts paid, final accounts prepared, and the estate distributed to beneficiaries according to the will or intestacy rules. Full estate accounts are provided to all beneficiaries." }
    ],
  },
};
