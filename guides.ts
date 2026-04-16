// data/guides.ts
// 12 authoritative estate planning guides for London residents
// Legal citations accurate as of 2026. No em dashes. Apostrophes escaped.

export interface GuideSection {
  id: string;
  heading: string;
  body: string[];
  legalNote?: string;
  tip?: string;
  toolSlot?: string;
}

export interface Guide {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: 'wills' | 'tax' | 'lpa' | 'trusts' | 'probate' | 'planning';
  publishDate: string;
  readingTime: number;
  heroHeading: string;
  heroParagraph: string;
  sections: GuideSection[];
  faqs: { question: string; answer: string }[];
  relatedGuides: string[];
  relatedService: string;
  relatedLocations: string[];
}

export const guides: Guide[] = [

  // ─── 1. How to write a will ───────────────────────────────────────────────
  {
    slug: 'how-to-write-a-will-in-london',
    title: 'How to Write a Will in London',
    metaTitle: 'How to Write a Will in London — 2026 Guide',
    metaDescription: 'Step-by-step guide to writing a legally valid will in London. Covers the Wills Act 1837 requirements, what to include, executors, witnesses, and when to use a specialist.',
    category: 'wills',
    publishDate: '2026-01-15',
    readingTime: 12,
    heroHeading: 'A will written badly is almost as dangerous as no will at all',
    heroParagraph: 'Every year, London families face contested probates, invalid documents, and unintended distributions -- all because a will was drafted without understanding the formal requirements. This guide covers everything you need to know before putting pen to paper, including the legal rules that most people get wrong.',
    relatedService: 'single-will',
    relatedLocations: ['islington', 'clapham', 'hackney'],
    relatedGuides: ['intestacy-rules-uk', 'updating-your-will', 'will-for-unmarried-couples'],
    sections: [
      {
        id: 'legal-requirements',
        heading: 'The legal requirements for a valid will',
        body: [
          'A will is only legally valid in England and Wales if it meets specific formal requirements. These have not changed in their essentials since 1837, which is both reassuring and misleading -- the rules are simple, but the consequences of getting them wrong are severe.',
          'The testator (the person making the will) must be at least 18 years old and of "sound mind" -- meaning they understand the nature of making a will, the extent of their property, and the claims of the people they might reasonably be expected to benefit. This is called testamentary capacity.',
          'The will must be in writing and signed by the testator, or by someone else in their presence and at their direction. Critically, that signature must be made or acknowledged in the presence of two witnesses, both present at the same time, who then sign the will themselves. A witness who is also a beneficiary (or the spouse of a beneficiary) loses their gift -- the will itself remains valid, but their inheritance does not.',
        ],
        legalNote: 'Section 9 of the Wills Act 1837 sets out the formal execution requirements: the will must be in writing, signed by the testator, and witnessed by two people present at the same time. Section 15 provides that a gift to a witness (or their spouse) is void, though the will itself remains valid.',
      },
      {
        id: 'what-to-include',
        heading: 'What your will needs to cover',
        body: [
          'A professionally drafted will typically covers several distinct areas. First, the appointment of executors -- the people responsible for administering your estate. You should name at least two, and ideally consider a professional executor for complex estates. Executors have personal liability for errors, so the choice matters.',
          'If you have children under 18, the appointment of guardians is essential. Without this, a court decides who raises your children. Many parents assume a surviving partner automatically assumes sole guardianship, which is broadly true for married couples -- but not for unmarried parents, where the position is more complicated.',
          'Specific bequests cover named items or sums to particular people: the grandmother\'s ring to a specific daughter, a cash legacy to a charity, a share portfolio to a sibling. The residue clause covers everything left after specific bequests and debts are settled -- this is usually the most financially significant part of the will and must be clearly drafted.',
          'Funeral wishes can be included, though they are not legally binding and may not be seen before the funeral takes place. A letter of wishes attached to the will is more practical for specific guidance about funeral arrangements or the distribution of sentimental items.',
        ],
        tip: 'For London residents with high-value properties, include a specific instruction about what happens to the property -- whether it should be sold or transferred. Ambiguity about property creates the most contested probates.',
      },
      {
        id: 'digital-assets',
        heading: 'Digital assets -- the clause most wills miss',
        body: [
          'Cryptocurrency, online bank accounts, domain names, revenue-generating platforms, and digital intellectual property are all assets that can pass under a will -- but most wills written before 2020 make no provision for them. For many London professionals, these are now material assets.',
          'The practical problem is access. A will can direct that your Bitcoin passes to a beneficiary, but if no one knows the private keys or seed phrase, the asset is unrecoverable. Specialist drafters include provisions for a separate asset memorandum -- a document stored securely alongside the will that contains access instructions, referenced by but not included in the will itself. See our [guide to digital assets and wills](/guides/digital-assets-and-wills/) for more detail.',
        ],
        legalNote: 'The UK Law Commission published provisional conclusions in 2023 confirming that crypto-tokens are capable of being property under English law and can therefore pass under a will. The Final Report is expected to result in legislative reform clarifying digital asset ownership.',
      },
      {
        id: 'diy-vs-professional',
        heading: 'DIY wills versus professional drafting',
        body: [
          'DIY will kits are legal in England and Wales. The question is not legality but adequacy. A will that is technically valid under s.9 of the Wills Act 1837 can still fail to reflect your wishes -- through ambiguous language, missing provisions, or clauses that conflict with each other. Solicitors and specialist will writers spend years learning to spot these issues before they reach probate.',
          'For straightforward estates -- single person, no property, clear beneficiaries -- a well-completed DIY will may be adequate. For most London residents, the combination of property values, relationship complexity, and inheritance tax exposure makes professional drafting the better choice. The cost difference between a professionally drafted will (£150-£350) and a DIY kit (£20-£50) is negligible against the estate value at stake.',
          'Our [free matching service](/services/single-will/) connects you with vetted will writers across London. Most clients receive a fixed-fee quote within 24 hours.',
        ],
      },
      {
        id: 'signing',
        heading: 'The signing ceremony',
        body: [
          'Once the will is drafted and you are satisfied with its contents, the formal execution must be carried out correctly. You and both witnesses must be physically present together. You sign first, then each witness signs. The order matters -- a witness who signs before the testator has signed has not technically witnessed the signature.',
          'Witnesses must be over 18. They cannot be beneficiaries or the spouses of beneficiaries. They should be independent adults -- a professional drafter will often offer to arrange independent witnesses if needed.',
          'Video witnessing, introduced as a temporary measure during COVID-19, is no longer available for standard will execution in England and Wales. Physical presence of all three parties is required.',
        ],
        legalNote: 'The Wills Act 1837 (Electronic Communications) (Amendment) (Coronavirus) Order 2020 temporarily permitted video-witnessed wills during the pandemic. This provision expired on 31 January 2024. All wills must now be physically witnessed in accordance with s.9 of the Wills Act 1837.',
      },
      {
        id: 'storage',
        heading: 'Storing your will safely',
        body: [
          'A will that cannot be found is as useless as a will that was never made. Storage should be secure but locatable by your executors. Options include: with your solicitor or will writer (most professional drafters offer storage), with a bank, at home in a fireproof safe with executors informed of the location, or registered with the National Will Register (Certainty), which charges a small fee but provides a searchable database for executors and probate professionals.',
          'Keeping a photocopy is sensible, but a photocopy has no legal standing -- only the original signed document can be submitted for probate. If the original cannot be found, there is a rebuttable presumption in law that it was destroyed with the intention of revoking it.',
        ],
      },
      {
        id: 'when-to-update',
        heading: 'When to update your will',
        body: [
          'Marriage automatically revokes a will under s.18 of the Wills Act 1837. If you married after making your will and have not made a new one, your existing will is legally void. Divorce does not revoke a will but removes an ex-spouse as beneficiary and executor under s.18A -- which may or may not reflect your wishes.',
          'Other triggers for review include: birth of a child or grandchild, death of an executor or beneficiary, significant change in assets, property purchase, business sale, or simply the passage of time. Our full guide to [updating your will](/guides/updating-your-will/) covers each scenario in detail.',
        ],
        legalNote: 'Section 18 of the Wills Act 1837 provides that marriage revokes any existing will. Section 18A (inserted by the Law Reform (Succession) Act 1995) provides that divorce removes an ex-spouse as beneficiary and executor but does not revoke the rest of the will.',
      },
    ],
    faqs: [
      { question: 'Does a will need to be witnessed by a solicitor?', answer: 'No. Any two independent adults over 18 can witness a will, provided neither is a beneficiary or married to a beneficiary. A solicitor is not required as a witness, though using one to draft the will ensures the document is correctly prepared.' },
      { question: 'Can I write my own will by hand?', answer: 'Yes. A handwritten will is valid if it meets all the requirements of s.9 of the Wills Act 1837 -- signed by you and witnessed by two independent adults present at the same time. However, handwritten wills are more prone to ambiguity and drafting errors than professionally prepared documents.' },
      { question: 'What happens if one of my witnesses dies before I do?', answer: 'Nothing -- the will remains valid. The witness signed at the time of execution, and their subsequent death does not affect the validity of the document. Courts can accept other evidence that the will was properly executed if needed.' },
      { question: 'How much does a professionally drafted will cost in London?', answer: 'A single will drafted by a professional will writer in London typically costs £150-£350. Mirror wills for couples typically cost £250-£550 for the pair. Wills involving trusts or complex provisions cost more. All specialists in our network provide fixed-fee quotes before work begins. See our [guide to will writing costs](/blog/will-writing-costs-in-london-in-2026/) for a full breakdown.' },
      { question: 'Is a will made in Scotland valid in England?', answer: 'Broadly yes, though there are differences in Scottish law that can cause complications. A will made in Scotland is generally recognised in England and Wales, but if you have moved from Scotland and your estate includes English property, having an English will drafted is advisable.' },
      { question: 'Can I leave my pension in my will?', answer: 'No. Pensions sit outside your estate and do not pass under your will. They pass according to your pension provider\'s nomination form. Keeping nomination forms current is essential -- an outdated nomination can send your pension to the wrong person regardless of what your will says.' },
    ],
  },

  // ─── 2. Inheritance tax guide ─────────────────────────────────────────────
  {
    slug: 'inheritance-tax-guide-london',
    title: 'Inheritance Tax -- The London Homeowner\'s Guide',
    metaTitle: 'Inheritance Tax London — 2026 Homeowner\'s Guide',
    metaDescription: 'How inheritance tax works for London homeowners. Covers the nil-rate band, residence nil-rate band, 7-year rule, trust strategies, and how to calculate your potential IHT liability.',
    category: 'tax',
    publishDate: '2026-01-15',
    readingTime: 15,
    heroHeading: 'London estates routinely pay inheritance tax their owners never expected to owe',
    heroParagraph: 'The nil-rate band has been frozen at £325,000 since 2009. Over the same period, London house prices have risen sharply. Hundreds of thousands of families who do not consider themselves wealthy now hold estates that will generate a 40% tax bill on death. This guide explains how the tax works, what allowances are available, and what planning can achieve.',
    relatedService: 'estate-planning',
    relatedLocations: ['hampstead', 'richmond', 'dulwich'],
    relatedGuides: ['trust-planning-guide', 'estate-planning-over-50', 'updating-your-will'],
    sections: [
      {
        id: 'what-is-iht',
        heading: 'What inheritance tax is and who pays it',
        body: [
          'Inheritance tax (IHT) is a tax on the estate of someone who has died. In England and Wales, it is charged at 40% on the value of the estate above the available threshold. The tax is paid by the estate before beneficiaries receive anything -- which means executors must find the cash to pay HMRC before probate is granted, even if the estate\'s wealth is tied up in property.',
          'Most estates do not pay IHT. HMRC data suggests around 4-5% of UK estates are liable each year. But in London, that proportion is significantly higher -- because the nil-rate band has remained at £325,000 while property values have grown substantially over the past two decades.',
          'IHT is paid by the estate, not the beneficiaries directly. However, the practical effect is the same: a £200,000 IHT bill on a £700,000 London flat means the beneficiaries receive £500,000, not £700,000.',
        ],
        legalNote: 'Inheritance tax is governed primarily by the Inheritance Tax Act 1984 (IHTA 1984). The charge arises under s.1 IHTA 1984 on the value transferred by a chargeable transfer -- which includes transfers on death (s.4). The standard rate of 40% is set by s.7.',
      },
      {
        id: 'nil-rate-band',
        heading: 'The nil-rate band and residence nil-rate band',
        body: [
          'Every individual has a nil-rate band (NRB) -- the amount of their estate that is free from IHT. The NRB has been £325,000 since April 2009. Under the Finance Act 2023, it is frozen at this level until at least April 2030. There is no indexation. Every year the freeze continues, more London estates fall into the taxable band simply because of inflation.',
          'Married couples and civil partners can transfer unused NRB to the surviving spouse on the first death. This means a couple can have a combined NRB of up to £650,000. This transfer is not automatic -- it must be claimed during the administration of the survivor\'s estate, but there is no time limit for the claim.',
          'In addition to the NRB, there is a residence nil-rate band (RNRB) of £175,000 per person, available when a residential property is left to direct descendants (children, grandchildren, or their spouses). This brings the potential combined threshold for a married couple passing a family home to children to £1,000,000. However, the RNRB is tapered away for estates above £2,000,000 at £1 for every £2 of excess.',
        ],
        legalNote: 'The RNRB was introduced by s.8D-8M IHTA 1984, inserted by the Finance (No. 2) Act 2015. The current rate of £175,000 has applied since April 2020. The taper for large estates operates under s.8D(5) IHTA 1984. The transferable NRB is governed by s.8A-8C IHTA 1984.',
      },
      {
        id: 'iht-calculator',
        heading: 'Calculating your potential inheritance tax liability',
        body: [
          'Understanding your estate\'s IHT position requires totalling all assets -- property, savings, investments, business interests, life policies held in your own name -- and deducting liabilities including mortgage balances and other debts. Pensions are generally outside the estate and excluded from this calculation.',
          'Once you have a gross estate figure, subtract the available NRB and RNRB to find the taxable estate. Apply 40% to the taxable estate to find the estimated IHT liability. The calculator below walks through this calculation with your own figures.',
        ],
        toolSlot: 'iht-calculator',
      },
      {
        id: 'gifts-seven-year-rule',
        heading: 'Gifts and the seven-year rule',
        body: [
          'Gifts made during your lifetime can reduce your estate for IHT purposes, but most gifts only fall outside the estate if you survive seven years from the date of the gift. These are called potentially exempt transfers (PETs). If you die within seven years, the gift is brought back into the estate calculation -- though taper relief reduces the effective rate between years three and seven.',
          'There are several exemptions where gifts are immediately outside the estate regardless of when you die. The annual exemption allows gifts of up to £3,000 per year (and you can carry forward one unused year). Small gifts of up to £250 per person per year to any number of people are exempt. Gifts out of normal expenditure from income -- regular payments from surplus income that do not reduce your standard of living -- can be exempt without limit, though detailed records are required.',
          'Wedding gifts are exempt up to £5,000 from a parent, £2,500 from a grandparent, and £1,000 from anyone else. Charitable gifts are fully exempt from IHT, and leaving 10% or more of your net estate to charity reduces the IHT rate on the remainder from 40% to 36%.',
        ],
        legalNote: 'Potentially exempt transfers are defined under s.3A IHTA 1984. Taper relief operates under s.7(4) IHTA 1984 for gifts between 3-7 years before death. The normal expenditure exemption is at s.21 IHTA 1984. The annual exemption is at s.19 and the small gifts exemption at s.20. The charitable exemption is at s.23 and the 36% reduced rate at Schedule 1A IHTA 1984.',
      },
      {
        id: 'trust-strategies',
        heading: 'Trust strategies for reducing IHT',
        body: [
          'Trusts can form part of an IHT planning strategy, though the rules are complex and the benefits depend heavily on the type of trust, the assets involved, and the timing. A protective property trust in a will ring-fences one partner\'s share of the family home, ensuring that share is not included in the survivor\'s estate for care cost or IHT assessment purposes.',
          'Discretionary trusts during lifetime allow assets to be moved outside the estate after seven years, subject to the ten-year anniversary charge and exit charges under the relevant property regime. Nil-rate band trusts, once common, are less used since the introduction of the transferable NRB, but may still have a role in some estates.',
          'IHT planning through trusts requires specialist advice. The interaction between IHT, capital gains tax, and income tax within trusts is complex. Our [trust planning guide](/guides/trust-planning-guide/) covers the main structures in detail, and our [matching service](/services/trust-planning/) connects you with specialists.',
        ],
        legalNote: 'The relevant property regime for discretionary trusts is set out in Part III Chapter III IHTA 1984 (ss.58-85). Ten-year anniversary charges apply under s.64. Exit charges apply under s.65. Business property relief (ss.103-114) and agricultural property relief (ss.115-124) can significantly reduce IHT on qualifying assets.',
      },
      {
        id: 'london-context',
        heading: 'The London-specific IHT problem',
        body: [
          'A family that bought a three-bedroom house in Islington, Dulwich, or Richmond in the 1990s for £200,000-£300,000 may now hold a property worth £1,000,000-£2,000,000. Combined with savings and pensions, these estates can generate IHT bills of £200,000-£400,000 or more -- on assets that are entirely illiquid until the property is sold.',
          'The executors must pay IHT before probate is granted, creating a timing problem for property-heavy estates. HMRC offers an instalment option for property -- IHT on real property can be paid in ten annual instalments, with interest charged on the outstanding balance. But this requires careful planning and is not automatic.',
          'For London homeowners, the conversation about IHT planning is not optional. If you own property in London and have not reviewed your estate plan, the probability that your estate owes IHT is significant. An [estate planning review](/services/estate-planning/) with one of our matched specialists typically takes 90 minutes and produces a clear picture of your current position.',
        ],
      },
    ],
    faqs: [
      { question: 'What is the inheritance tax threshold in 2026?', answer: 'The standard nil-rate band is £325,000 per person. Married couples and civil partners can combine allowances for a total of £650,000. If you are leaving a residential property to direct descendants, the residence nil-rate band adds up to £175,000 per person (£350,000 per couple), bringing the maximum combined threshold to £1,000,000. The NRB is frozen at £325,000 until April 2030.' },
      { question: 'Do I pay inheritance tax if I leave everything to my spouse?', answer: 'No. Transfers between UK-domiciled spouses and civil partners are fully exempt from IHT under s.18 IHTA 1984. However, the surviving spouse\'s estate will then include both partners\' assets, and IHT will apply on the second death above the combined available thresholds.' },
      { question: 'Are pensions subject to inheritance tax?', answer: 'Currently, most pension funds sit outside the estate and are not subject to IHT. However, from April 2027, pension funds will be brought within the scope of IHT under proposals announced in the Autumn Budget 2024. This is a significant change for anyone using a pension as an IHT planning tool. Review your estate plan with a specialist before 2027.' },
      { question: 'Can I give my house to my children to avoid inheritance tax?', answer: 'This is a common misconception. If you give your house to your children but continue to live in it, the gift is a "gift with reservation of benefit" and remains in your estate under s.102 Finance Act 1986. To remove the property from your estate, you must genuinely vacate it and pay a market rent if you continue to live there. Specialist advice is essential before attempting this.' },
      { question: 'How is IHT paid if the estate is mostly property?', answer: 'IHT on property can be paid in ten annual instalments under s.227 IHTA 1984. Interest accrues on the outstanding balance. Alternatively, executors can arrange a mortgage against the property or use a probate loan to fund the IHT payment before sale. In practice, most London estates sell the property and pay IHT from the proceeds.' },
    ],
  },

  // ─── 3. LPA guide ────────────────────────────────────────────────────────
  {
    slug: 'lasting-power-of-attorney-guide',
    title: 'Lasting Power of Attorney -- Complete UK Guide',
    metaTitle: 'Lasting Power of Attorney Guide UK — 2026',
    metaDescription: 'Complete guide to lasting power of attorney in England and Wales. Covers both types, who can be an attorney, registration, costs, and what happens without an LPA.',
    category: 'lpa',
    publishDate: '2026-01-15',
    readingTime: 13,
    heroHeading: 'An LPA drafted in good health is the only one that works when health fails',
    heroParagraph: 'A lasting power of attorney can only be created while you have mental capacity. By the time most families think about it -- when a parent begins to show signs of cognitive decline, or after a stroke -- it is already too late. The alternative is a Court of Protection application that costs thousands of pounds and takes months. This guide explains both types of LPA, how to set them up, and why the timing matters.',
    relatedService: 'lasting-power-of-attorney',
    relatedLocations: ['hampstead', 'richmond', 'kensington'],
    relatedGuides: ['how-to-write-a-will-in-london', 'estate-planning-over-50', 'updating-your-will'],
    sections: [
      {
        id: 'what-is-lpa',
        heading: 'What a lasting power of attorney is',
        body: [
          'A lasting power of attorney (LPA) is a legal document that authorises one or more people (attorneys) to make decisions on your behalf. Unlike an ordinary power of attorney, an LPA continues to have effect even if you lose mental capacity -- which is precisely when it is most needed.',
          'LPAs were introduced by the Mental Capacity Act 2005 and replaced the older enduring power of attorney (EPA). EPAs made before October 2007 are still valid if properly executed, but no new EPAs can be created. If you have an EPA, it covers property and financial affairs only -- you would need an LPA to cover health and welfare decisions.',
          'There are two types of LPA: one covering property and financial affairs, and one covering health and welfare. They are separate documents that must each be registered with the Office of the Public Guardian before they can be used. Most people should have both.',
        ],
        legalNote: 'LPAs are created under s.9 of the Mental Capacity Act 2005 and governed by Schedule 1 of that Act. The registration process is administered by the Office of the Public Guardian under Part 3 of the Act and the Lasting Powers of Attorney, Enduring Powers of Attorney and Public Guardian Regulations 2007 (SI 2007/1253).',
      },
      {
        id: 'two-types',
        heading: 'The two types of LPA -- and why you need both',
        body: [
          'A property and financial affairs LPA authorises your attorneys to manage your bank accounts, collect income, pay bills, manage investments, and deal with property on your behalf. It can be used while you still have capacity, with your consent -- which is useful if you travel frequently or want to delegate financial management. When you lose capacity, it continues to operate without any additional steps.',
          'A health and welfare LPA authorises your attorneys to make decisions about medical treatment, care arrangements, where you live, and day-to-day personal welfare. It can only be used when you lack capacity to make the decision yourself. Without a registered health and welfare LPA, doctors and care providers make decisions based on their clinical judgment and a "best interests" assessment -- your family has no legal authority to direct your care, even if they know exactly what you would want.',
          'The two types of attorney do not need to be the same person. Many people appoint a financially experienced person (an accountant, a trusted friend) for financial affairs, and a family member who knows their personal wishes for health and welfare. The choice of attorney is the most important decision in the LPA.',
        ],
      },
      {
        id: 'who-can-be-attorney',
        heading: 'Choosing your attorneys',
        body: [
          'An attorney must be over 18 and not bankrupt (for a property and financial affairs LPA). Beyond those requirements, the choice is yours. You can appoint up to four attorneys and can specify whether they must act jointly (all must agree on every decision) or jointly and severally (any attorney can act alone). Joint and several authority is more practical for day-to-day management; joint authority provides greater protection against a single attorney acting improperly.',
          'You can also appoint replacement attorneys who step in if a primary attorney cannot act. This is recommended -- if your only attorney predeceases you, the LPA becomes inoperable unless there is a replacement.',
          'Choose attorneys who you trust absolutely and who are capable of the administrative and decision-making burden. Being an attorney, especially for a person with significant assets or complex care needs, is a substantial responsibility. A certificate provider must confirm that you understand the LPA and are not being coerced -- this is a safeguard against exploitation.',
        ],
        tip: 'Avoid appointing attorneys who have conflicting financial interests with your own. For property and financial affairs, consider appointing a professional attorney (such as a solicitor) alongside a family member to provide independent oversight.',
      },
      {
        id: 'registration-process',
        heading: 'Registering your LPA',
        body: [
          'An LPA must be registered with the Office of the Public Guardian (OPG) before it can be used. Registration costs £82 per LPA (reduced to £41 or free if you receive means-tested benefits or have an income under £12,000). The application is submitted either online via the OPG\'s digital service or on paper using the prescribed forms.',
          'Registration currently takes approximately 20 weeks from submission. This is the single most important timing consideration for LPAs -- you cannot use an unregistered LPA even in an emergency. Families who create an LPA only after a health event often find themselves waiting months for registration while decisions cannot be made.',
          'During registration, the OPG notifies the people you have named as "persons to be notified" (if any) and your certificate provider. There is a 3-week waiting period during which anyone can raise an objection to the registration. If no objections are raised, the OPG registers the document and returns it with a stamp -- this stamped original is the document your attorneys will use.',
        ],
        toolSlot: 'lpa-estimator',
        legalNote: 'The OPG registration fee is set by the Lasting Powers of Attorney, Enduring Powers of Attorney and Public Guardian (Amendment) Regulations 2023. Fee remission is available under Regulation 8 for applicants on qualifying benefits or with income below the threshold.',
      },
      {
        id: 'without-lpa',
        heading: 'What happens if you have no LPA',
        body: [
          'If you lose capacity without a registered LPA, nobody -- not your spouse, your adult children, or your closest relatives -- has legal authority to manage your finances or make decisions about your care. Banks will freeze accounts. Utility companies will not accept instructions from family members. Decisions about care placement and medical treatment fall entirely to clinical and social care professionals.',
          'The alternative is an application to the Court of Protection to appoint a deputy. This process costs £3,000-£5,000 in court fees and professional costs, takes 3-6 months, and results in an ongoing annual fee and reporting requirement to the OPG. Deputies are also subject to restrictions that attorneys under an LPA are not.',
          'By contrast, an LPA costs £82 per document in OPG fees plus professional drafting costs of around £250-£500 per LPA. The cost difference is stark, and the LPA is available immediately when needed.',
        ],
        legalNote: 'Court of Protection deputyship is governed by Part 8 of the Mental Capacity Act 2005 (ss.16-23). The court has jurisdiction where a person lacks capacity and no valid LPA is in place. Application fees are set by the Court of Protection Fees Order 2023.',
      },
      {
        id: 'activating-revoking',
        heading: 'Using, activating, and revoking an LPA',
        body: [
          'A property and financial affairs LPA can be used as soon as it is registered, with your consent. Many people use it straightaway for convenience -- allowing an attorney to manage accounts on their behalf. A health and welfare LPA can only be used when the donor lacks capacity to make the specific decision in question.',
          'To revoke an LPA, you must have capacity at the time of revocation. You can revoke an LPA at any time while you have capacity by signing a written revocation and notifying the OPG. The revocation is effective immediately, but the OPG should be notified so the registration is cancelled. An attorney cannot revoke an LPA -- only the donor can.',
          'If your attorneys die, disclaim, or become bankrupt (for property LPAs), they can no longer act. If all attorneys are unable to act and there are no replacement attorneys, the LPA is spent -- which is why appointing replacements is important.',
        ],
      },
    ],
    faqs: [
      { question: 'How long does it take to register an LPA?', answer: 'The OPG currently takes approximately 20 weeks to register an LPA from the date of receipt of a complete application. This includes a mandatory 3-week notification period. There is no expedited process for urgent cases -- the only way to have an LPA available quickly is to register it well in advance.' },
      { question: 'Can I use an old enduring power of attorney?', answer: 'Yes, if it was properly executed before 1 October 2007. EPAs are still valid and can be used for property and financial affairs. However, an EPA does not cover health and welfare decisions. If you have an EPA, you should create a health and welfare LPA to cover the gap, and consider whether your EPA still reflects your wishes.' },
      { question: 'Do I need a solicitor to make an LPA?', answer: 'No. You can complete an LPA yourself using the OPG\'s online service or paper forms. However, errors in LPA documents can delay or prevent registration. Professional drafting reduces this risk and ensures the document reflects your wishes accurately. For complex situations -- multiple attorneys, joint and several authorities, restrictions or conditions -- professional help is particularly valuable.' },
      { question: 'Can my attorney make gifts from my estate?', answer: 'A property and financial affairs attorney can make gifts on your behalf only within the limits set out in s.12 of the Mental Capacity Act 2005 -- gifts on customary occasions (birthdays, weddings) of a reasonable value relative to the size of the estate. Larger gifts require Court of Protection approval. An attorney who makes gifts beyond these limits is acting improperly and can be removed by the OPG.' },
      { question: 'What is a certificate provider and who can be one?', answer: 'A certificate provider signs the LPA to confirm that you understand what you are signing, are not being pressured, and have the capacity to make an LPA. They must be someone who has known you for at least two years (a personal acquaintance) or a professional such as a doctor, solicitor, or social worker. They cannot be a family member, an attorney named in the LPA, or a business partner of an attorney.' },
    ],
  },

  // ─── 4. Intestacy rules ───────────────────────────────────────────────────
  {
    slug: 'intestacy-rules-uk',
    title: 'Intestacy Rules -- Who Inherits If You Die Without a Will',
    metaTitle: 'Intestacy Rules UK 2026 — Who Inherits Without a Will',
    metaDescription: 'Explains the UK intestacy rules: who inherits if you die without a will, what unmarried partners receive (nothing), and the statutory legacy amounts for 2026.',
    category: 'wills',
    publishDate: '2026-01-15',
    readingTime: 11,
    heroHeading: 'Three million unmarried couples in the UK believe their partner will inherit -- they are wrong',
    heroParagraph: 'The intestacy rules determine what happens to your estate if you die without a valid will. They are fixed by statute and have no regard for your wishes, your relationships, or your circumstances. For unmarried couples in particular, the outcome can be devastating. This guide explains who inherits under the current rules, with worked examples for the situations most relevant to London residents.',
    relatedService: 'single-will',
    relatedLocations: ['islington', 'hackney', 'shoreditch'],
    relatedGuides: ['how-to-write-a-will-in-london', 'will-for-unmarried-couples', 'mirror-wills-guide'],
    sections: [
      {
        id: 'what-is-intestacy',
        heading: 'What intestacy means',
        body: [
          'Intestacy occurs when a person dies without a valid will, or with a will that does not dispose of all their estate. In England and Wales, the Administration of Estates Act 1925 sets out a fixed hierarchy of beneficiaries who inherit in these circumstances. The rules apply regardless of the deceased\'s relationships, wishes, or what they may have told family members verbally.',
          'Partial intestacy can also occur -- where a will exists but fails to cover some assets, or where a beneficiary has predeceased the testator and there is no substitute gift. In these cases, the intestacy rules apply to the uncovered assets alongside the will.',
          'Intestacy also determines who has the right to administer the estate. Without an appointed executor, the court grants letters of administration to the next of kin according to a priority order set by the Non-Contentious Probate Rules 1987.',
        ],
        legalNote: 'The intestacy rules are primarily contained in Part IV of the Administration of Estates Act 1925 (ss.46-49), as amended by the Intestates\' Estates Act 1952, the Family Law Reform Act 1987, and the Inheritance and Trustees\' Powers Act 2014, which increased the statutory legacy to its current level.',
      },
      {
        id: 'married-with-children',
        heading: 'Married or civil partners with children',
        body: [
          'If you are married or in a civil partnership and have children, your spouse receives all personal chattels (personal possessions, furniture, jewellery), a statutory legacy of £322,000, and half the residue of the estate above that. Your children share the other half of the residue equally. Children under 18 hold their share on statutory trust until they reach 18.',
          'This outcome frequently surprises families. A London estate worth £1,000,000 with a mortgage balance of £200,000 leaves a net estate of £800,000. The surviving spouse receives chattels, the £322,000 statutory legacy, and half the remaining £478,000 (£239,000) -- a total of £561,000. The children share £239,000 equally.',
          'If the estate is worth less than £322,000, the spouse receives everything and the children receive nothing under intestacy.',
        ],
        legalNote: 'The statutory legacy of £322,000 was set by the Inheritance and Trustees\' Powers Act 2014 (Commencement) Order 2014 and the Administration of Estates Act 1925 (Fixed Net Sum) Order 2020, which increased the amount from £270,000 to £322,000 with effect from 6 February 2020.',
      },
      {
        id: 'married-no-children',
        heading: 'Married or civil partners with no children',
        body: [
          'If you are married or in a civil partnership and have no children, your spouse inherits the entire estate. Other relatives -- parents, siblings, nephews and nieces -- receive nothing regardless of your relationship with them or any promises you may have made.',
          'This is the simplest intestacy outcome, and for many married couples it reflects what they would have wanted. The problem arises on the second death: the surviving spouse will die intestate too (unless they make a will), and their estate then passes under the same rules -- which may be to siblings or their children rather than to the people the couple jointly intended.',
        ],
      },
      {
        id: 'unmarried-couples',
        heading: 'Unmarried couples -- the cohabitation trap',
        body: [
          'If you are not married and not in a civil partnership, your partner has no automatic right to inherit anything from your estate. It does not matter how long you have lived together, whether you have children together, whether your partner\'s name is on the mortgage, or what you have told each other. Under the intestacy rules, an unmarried partner is a legal stranger.',
          'The estate passes instead to your children (if any), or your parents, or your siblings, or further relatives down the hierarchy. In the absence of any living relatives within the defined classes, the estate passes to the Crown as bona vacantia.',
          'For London couples who cohabit in a jointly owned property, the position depends on how the property is owned. Joint tenants hold the property with a right of survivorship -- on one partner\'s death, the property passes automatically to the survivor regardless of the intestacy rules. But property held as tenants in common does not pass automatically -- the deceased\'s share falls into the estate and passes under intestacy, not to the surviving partner.',
        ],
        toolSlot: 'intestacy-calculator',
        tip: 'If you are cohabiting and own property as tenants in common, check the Land Registry title to confirm how the property is held. A declaration of trust or a deed of severance can change the ownership basis. But only a will can ensure your share of the estate reaches your partner.',
      },
      {
        id: 'children-only',
        heading: 'No spouse, children only',
        body: [
          'If you are unmarried (or your spouse has predeceased you) and you have children, your estate passes equally to your children. If a child has predeceased you, that child\'s share passes to their own children (your grandchildren) if they have any, subject to the statutory trust for those under 18.',
          'For unmarried parents, this means the surviving parent receives nothing automatically -- the children inherit everything. If the children are under 18, a trustee must be appointed to manage the inheritance until they reach 18. This trustee may not be the person you would have chosen, and the court may appoint someone you would not have wanted.',
        ],
      },
      {
        id: 'hierarchy',
        heading: 'The full intestacy hierarchy',
        body: [
          'If there is no surviving spouse and no children, the estate passes in the following order: to parents; then to full siblings (or their children if deceased); then to half-siblings; then to grandparents; then to aunts and uncles (full blood); then to aunts and uncles (half blood). If none of these classes survive, the estate goes to the Crown.',
          'Friends, step-children, unmarried partners, and godchildren receive nothing under intestacy regardless of the deceased\'s wishes or the closeness of the relationship. The only protection for people outside the statutory hierarchy is a valid will or, in limited circumstances, a claim under the Inheritance (Provision for Family and Dependants) Act 1975.',
        ],
        legalNote: 'The order of priority for intestacy is set out in s.46 of the Administration of Estates Act 1925. A claim for financial provision by a dependent who is not a statutory beneficiary must be brought under s.1 of the Inheritance (Provision for Family and Dependants) Act 1975 within 6 months of the grant of representation.',
      },
    ],
    faqs: [
      { question: 'What is the statutory legacy for surviving spouses in 2026?', answer: 'The statutory legacy is £322,000. This is the amount a surviving spouse receives from the estate before any further division with children. It was last increased in February 2020 by the Administration of Estates Act 1925 (Fixed Net Sum) Order 2020.' },
      { question: 'Can an unmarried partner make a claim on the estate?', answer: 'Possibly, under the Inheritance (Provision for Family and Dependants) Act 1975. A cohabiting partner who lived with the deceased for at least two years immediately before the death can apply to the court for reasonable financial provision. However, this is expensive, uncertain, and contested -- it is not a substitute for a will.' },
      { question: 'What happens to jointly owned property under intestacy?', answer: 'It depends on how the property is owned. Joint tenants: the surviving owner inherits the deceased\'s share automatically by right of survivorship, regardless of the intestacy rules. Tenants in common: the deceased\'s share falls into the estate and passes under intestacy to the statutory beneficiaries, not the surviving owner.' },
      { question: 'Do stepchildren inherit under the intestacy rules?', answer: 'No. The intestacy rules refer to "children" in the sense of biological or legally adopted children. Stepchildren have no automatic right to inherit under intestacy, even if they were treated as children of the family during the deceased\'s lifetime. Only a valid will can make provision for stepchildren.' },
      { question: 'How long does it take to sort out an intestate estate?', answer: 'Intestate estates typically take longer to administer than testate estates. Identifying and locating all beneficiaries takes time, and the absence of an appointed executor means the court must grant letters of administration. Contested intestacies -- particularly where a partner or dependent applies under the 1975 Act -- can take years.' },
    ],
  },

  // ─── 5. Mirror wills guide ────────────────────────────────────────────────
  {
    slug: 'mirror-wills-guide',
    title: 'Mirror Wills for Couples -- Everything You Need to Know',
    metaTitle: 'Mirror Wills for Couples — Complete UK Guide 2026',
    metaDescription: 'Everything about mirror wills for couples in the UK. How they work, the difference from joint wills, the second marriage problem, costs, and when to use them.',
    category: 'wills',
    publishDate: '2026-01-15',
    readingTime: 10,
    heroHeading: 'Most couples have identical wishes -- mirror wills are how those wishes become legally binding',
    heroParagraph: 'Mirror wills are the most common estate planning document for couples in England and Wales, and among the most commonly misunderstood. They are not a single document -- they are two legally independent wills with matching provisions. Understanding the distinction matters, particularly when relationships change.',
    relatedService: 'mirror-wills',
    relatedLocations: ['clapham', 'islington', 'battersea'],
    relatedGuides: ['how-to-write-a-will-in-london', 'will-for-unmarried-couples', 'trust-planning-guide'],
    sections: [
      {
        id: 'what-are-mirror-wills',
        heading: 'What mirror wills are',
        body: [
          'Mirror wills are two separate wills -- one for each partner -- that contain matching provisions. Typically, each partner leaves their entire estate to the other, and then both wills specify the same secondary beneficiaries (usually children) and the same executors. The "mirroring" refers to the symmetry of the provisions, not any legal link between the documents.',
          'Each will is a legally independent document. Either partner can amend or revoke their will at any time without the other\'s knowledge or consent. This is both the strength and the perceived weakness of mirror wills: they give each partner full autonomy, which also means either can change their mind.',
          'Mirror wills are the most common form of estate planning for married couples and civil partners in England and Wales. They are straightforward to draft, cost-effective (a pair typically costs £250-£550), and appropriate for most straightforward couples with aligned interests.',
        ],
      },
      {
        id: 'joint-will-difference',
        heading: 'Mirror wills versus joint wills -- a critical distinction',
        body: [
          'A joint will is a single document signed by both partners, which is legally binding on both. In theory, this prevents either partner from changing the provisions after the first death. In practice, joint wills are almost never recommended by English law practitioners, for two reasons.',
          'First, the law is unclear. English courts have held in various cases that a joint will may or may not be mutually binding -- the position depends on whether a "mutual wills doctrine" can be established, which requires proof of an agreement not to revoke. This uncertainty creates litigation risk rather than protection.',
          'Second, even if the survivor is bound by the joint will, the restriction is inequitable. If your spouse dies and leaves everything to you, your circumstances may change significantly -- you may need to sell assets, support dependents, or face unexpected care costs. Being irrevocably bound to provisions agreed before those changes is rarely in anyone\'s best interests.',
          'The mutual wills doctrine, which achieves a similar outcome to a joint will by treating the surviving partner as a constructive trustee, is technically available -- but courts are reluctant to find a binding agreement without very clear evidence. Any couple who want to protect their estate from changes after the first death should consider a life interest trust within their wills rather than a joint will.',
        ],
        legalNote: 'The mutual wills doctrine derives from equity and has been considered in cases including Re Goodchild [1997] 1 WLR 1216 and Olins v Walters [2008] EWCA Civ 782. The courts require clear and satisfactory evidence of an agreement not to revoke before imposing a constructive trust on the survivor.',
      },
      {
        id: 'second-marriage-problem',
        heading: 'The second marriage problem',
        body: [
          'The most significant risk with straightforward mirror wills arises when one partner remarries after the first death. If partner A dies and leaves everything to partner B, and partner B subsequently remarries, the new marriage automatically revokes partner B\'s existing will under s.18 of the Wills Act 1837. If partner B dies without making a new will, the estate passes under intestacy -- potentially to the new spouse rather than the children from the original relationship.',
          'Even if partner B makes a new will after remarrying, they are free to leave the inherited estate (including assets that originally belonged to partner A) to the new spouse or anyone else. The children from the original relationship have no automatic protection.',
          'This is not a theoretical risk. In London, where estate values are high and longevity is increasing, the gap between the first and second death is often 20 or more years. A lot can change. The solution is to include a life interest trust in the will for the survivor -- the survivor can use and benefit from the estate during their lifetime, but the capital passes to the agreed beneficiaries on the second death. This is covered in our [trust planning guide](/guides/trust-planning-guide/).',
        ],
        tip: 'If you have children from a previous relationship, or if your partner does, straightforward mirror wills may not adequately protect their inheritance. Ask your will writer about a life interest trust provision.',
      },
      {
        id: 'unmarried-couples-mirror',
        heading: 'Mirror wills for unmarried couples',
        body: [
          'Mirror wills are equally important -- arguably more important -- for unmarried couples than for married ones. Married partners at least receive the statutory legacy of £322,000 under the intestacy rules. An unmarried partner receives nothing. Mirror wills are the only mechanism that ensures each partner inherits from the other.',
          'For cohabiting couples in London, mirror wills should be combined with a review of property ownership. Property held as joint tenants passes automatically on the first death regardless of the will; property held as tenants in common does not. Our [guide to wills for unmarried couples](/guides/will-for-unmarried-couples/) covers this in full.',
        ],
      },
      {
        id: 'when-to-update',
        heading: 'When mirror wills need to change',
        body: [
          'Marriage revokes existing wills. If you are making mirror wills in contemplation of marriage, they should be expressed as "wills made in contemplation of marriage to [name]" to survive the marriage under s.18(3) of the Wills Act 1837. Otherwise, the marriage will automatically revoke both documents.',
          'The arrival of children is another common trigger for review. A mirror will that leaves everything to the surviving partner with no secondary provision for children is adequate while both partners are alive -- but creates vulnerability if both die in the same accident. Mirror wills for couples with children should include a clear secondary distribution to the children and a guardian appointment.',
          'Separation or divorce is the most important trigger. Divorce removes an ex-spouse as beneficiary and executor under s.18A of the Wills Act 1837, but the will is not revoked. This means a divorced person who has not updated their will may die intestate in effect -- the former spouse cannot inherit, but the existing provisions for them are void, and there is no valid substitute.',
        ],
        legalNote: 'S.18(3) of the Wills Act 1837 (inserted by the Law Reform (Succession) Act 1995) provides that a will expressed to be made in contemplation of a marriage to a specified person is not revoked by the solemnisation of that marriage. The provision is strict -- the marriage must be to the named person.',
      },
    ],
    faqs: [
      { question: 'Can I change my mirror will without telling my partner?', answer: 'Yes. Mirror wills are two independent documents. Either partner can revoke or amend their will at any time without the other\'s knowledge or consent. This is intentional -- English law does not generally permit irrevocable wills. If you want to prevent changes after the first death, a life interest trust within the will is the appropriate mechanism.' },
      { question: 'Are mirror wills cheaper than two separate wills?', answer: 'Yes, typically. Most will writers charge a reduced combined fee for mirror wills -- usually £250-£550 for the pair, compared to £150-£350 each for single wills drafted separately. The saving reflects the similarity of the drafting work.' },
      { question: 'What happens to mirror wills if we separate but do not divorce?', answer: 'Nothing automatically -- the wills remain in force. Separation alone does not revoke or amend a will. If you separate, you should review your will immediately. Divorce subsequently removes the former spouse as beneficiary and executor under s.18A of the Wills Act 1837, but does not substitute other provisions.' },
      { question: 'Do mirror wills need to be updated if we have another child?', answer: 'Not necessarily if the existing wills already make provision for "my children" generically rather than naming specific children. But if the wills name specific children, or if the distribution provisions need adjusting, an update is advisable. In any case, a review on the birth of each child is good practice.' },
    ],
  },

  // ─── 6. Trust planning guide ──────────────────────────────────────────────
  {
    slug: 'trust-planning-guide',
    title: 'Property Trusts and Estate Trusts -- The London Guide',
    metaTitle: 'Trust Planning Guide London — Property & Estate Trusts 2026',
    metaDescription: 'How trusts work for London homeowners and families. Covers protective property trusts, discretionary trusts, life interest trusts, and care cost protection under the Care Act 2014.',
    category: 'trusts',
    publishDate: '2026-01-15',
    readingTime: 14,
    heroHeading: 'A trust is not a tax dodge -- it is a mechanism for ensuring the right people receive the right assets at the right time',
    heroParagraph: 'Trusts have a reputation for complexity and opacity that puts most families off considering them. In reality, the most commonly used trusts in English estate planning are straightforward in purpose: they protect assets from care costs, ensure property reaches intended beneficiaries, and give flexibility to accommodate changing circumstances. This guide explains the main types and when each is appropriate.',
    relatedService: 'trust-planning',
    relatedLocations: ['dulwich', 'hampstead', 'richmond'],
    relatedGuides: ['inheritance-tax-guide-london', 'mirror-wills-guide', 'estate-planning-over-50'],
    sections: [
      {
        id: 'what-is-a-trust',
        heading: 'What a trust is in plain English',
        body: [
          'A trust is a legal arrangement in which one person (the settlor) transfers assets to another person or persons (the trustees) to hold for the benefit of specified people or purposes (the beneficiaries). The trustees are the legal owners of the assets but must manage and apply them for the benefit of the beneficiaries, in accordance with the terms of the trust.',
          'In estate planning, trusts most commonly arise on death -- created by a clause in the will that directs assets into trust rather than outright to a beneficiary. They can also be created during lifetime by a deed of settlement, which has different tax implications.',
          'Trustees have legal duties governed primarily by the Trustee Act 2000 and the general law of equity. They must act in the best interests of the beneficiaries, invest prudently (the "prudent investor" standard under the Trustee Act 2000), keep accounts, and act impartially between different classes of beneficiary.',
        ],
        legalNote: 'The modern framework for trustee duties is set out in the Trustee Act 2000, which introduced a statutory duty of care (s.1) and a general power of investment (s.3). The requirement to act in the best interests of beneficiaries is a fundamental principle of equity, most clearly stated in Cowan v Scargill [1985] Ch 270.',
      },
      {
        id: 'protective-property-trust',
        heading: 'Protective property trust -- shielding the family home from care costs',
        body: [
          'A protective property trust (PPT), sometimes called a property trust will, is the most widely used trust in English estate planning for homeowning couples. It works by ensuring that when the first partner dies, their share of the family home does not pass outright to the survivor but instead passes into a trust, with the survivor as the primary beneficiary.',
          'The practical effect is that the deceased\'s share of the property is ring-fenced. If the surviving partner later needs residential care, the local authority means-tests their assets -- including property. But the deceased\'s share, held in trust, is not the survivor\'s asset and should not be assessed. The survivor\'s own share may still be assessed, but protecting half the property significantly reduces exposure.',
          'The survivor has the right to live in the property during their lifetime under the trust terms. On the survivor\'s death, both shares of the property pass to the ultimate beneficiaries -- typically the children. The trust also provides protection if the survivor remarries, ensuring the deceased\'s share does not ultimately pass to a new spouse.',
        ],
        toolSlot: 'care-cost-calculator',
        legalNote: 'Means-testing for residential care is governed by the Care Act 2014 and the Care and Support (Charging and Assessment of Resources) Regulations 2014. The upper threshold above which a person is fully self-funding is currently £100,000 (increased from £23,250 in October 2025). The treatment of property held in trust depends on the nature of the interest -- a life interest does not give the beneficiary a capital asset for means-testing purposes.',
        tip: 'A PPT only works if the property is owned as tenants in common rather than joint tenants. If your property is held as joint tenants, a deed of severance must be executed before the wills are made. Your will writer will advise on this.',
      },
      {
        id: 'discretionary-trust',
        heading: 'Discretionary trust -- flexibility for uncertain futures',
        body: [
          'A discretionary trust gives trustees the power to decide which beneficiaries receive income or capital from the trust, and in what proportions, within the class of beneficiaries defined by the trust deed. There are no fixed entitlements -- the trustees exercise genuine discretion.',
          'Discretionary trusts are used where flexibility is needed: where the needs of beneficiaries cannot be predicted at the time the trust is created, where some beneficiaries may need protection from creditors or divorce, or where tax planning flexibility is valuable. They are also used in nil-rate band trust planning, though this is less common since the introduction of the transferable NRB.',
          'The main disadvantage of discretionary trusts is the relevant property regime -- the trust pays tax at ten-year anniversary points (the periodic charge) and on distributions from the trust (the exit charge). These charges are relatively modest for most estates but add administrative complexity.',
        ],
        legalNote: 'Discretionary trusts fall within the relevant property regime under Part III Chapter III of the Inheritance Tax Act 1984. The periodic charge (ten-year anniversary tax) is governed by s.64 IHTA 1984 at a rate of up to 6% of the value of the trust fund above the nil-rate band. Exit charges under s.65 apply on distributions.',
      },
      {
        id: 'life-interest-trust',
        heading: 'Life interest trust -- balancing the survivor and the children',
        body: [
          'A life interest trust gives the surviving partner (the "life tenant") the right to receive income from the trust assets -- and in many cases, the right to live in the property -- during their lifetime. On the life tenant\'s death, the trust capital passes to the remainder beneficiaries (typically children).',
          'This structure is the most effective solution to the second marriage problem with mirror wills. The survivor is provided for during their lifetime, but the capital of the estate is preserved for the intended beneficiaries and cannot be redirected by the survivor\'s subsequent marriage or will.',
          'Life interest trusts are also used for disability planning -- where a beneficiary with mental health challenges or vulnerability needs income support without the risk of capital being exploited. And they are used for complex family situations: blended families, children from previous relationships, or situations where the testator wants to ensure the family home remains available for children rather than being sold.',
        ],
      },
      {
        id: 'trust-registration',
        heading: 'Trust registration requirements',
        body: [
          'Most trusts created on or after 6 October 2020 must be registered with HMRC\'s Trust Registration Service (TRS). This includes trusts created by a will that hold assets for longer than two years. The registration must include details of the trust, the trustees, and the beneficial owners.',
          'Failure to register when required is a criminal offence under the Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017 and can result in financial penalties. Your solicitor or will writer will advise on registration obligations when the trust is created.',
        ],
        legalNote: 'The Trust Registration Service was established under the Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017 (SI 2017/692), as amended by the Money Laundering and Terrorist Financing (Amendment) (No.2) Regulations 2022. Trusts that are not registered when required face penalties under Regulation 86.',
      },
    ],
    faqs: [
      { question: 'Does a protective property trust actually work for care costs?', answer: 'It can, when correctly structured. The local authority cannot assess the deceased\'s share of the property held in trust as the survivor\'s capital. However, the rules are complex and subject to change, and the outcome depends on the specific structure of the trust. A local authority that suspects a trust was created solely to avoid care costs can challenge it. Obtaining specialist advice at the time of drafting is essential.' },
      { question: 'How much does it cost to set up a trust in a will?', answer: 'Adding a protective property trust to mirror wills typically costs an additional £300-£600 on top of the will drafting fees. Standalone lifetime trusts are more complex and cost £1,000-£3,000 depending on the type and assets involved. Annual trustee costs (accounting, administration) also apply.' },
      { question: 'Who should be a trustee?', answer: 'Trustees must be over 18, of sound mind, and willing to take on the role. For family property trusts, the surviving spouse/partner and adult children are common choices. For larger or more complex trusts, a professional trustee (solicitor or trust company) provides additional protection and expertise. You can have up to four trustees on a trust holding land.' },
      { question: 'Can a trust avoid inheritance tax?', answer: 'Trusts can form part of an IHT mitigation strategy, but they do not simply avoid the tax. Assets in a discretionary trust are subject to the relevant property regime with ten-year and exit charges. A protective property trust ring-fences the deceased\'s share from the survivor\'s estate but does not reduce the overall IHT position. Lifetime trusts used to move assets outside the estate are subject to the seven-year rule for PETs or the relevant property regime for chargeable lifetime transfers.' },
    ],
  },

  // ─── 7. Probate guide ─────────────────────────────────────────────────────
  {
    slug: 'probate-guide-london',
    title: 'Probate in London -- A Step by Step Guide',
    metaTitle: 'Probate Guide London — How It Works, Costs & Timeline 2026',
    metaDescription: 'How probate works in London estates. Covers the grant of probate, HMCTS application, IHT payment, probate fees, typical timelines, and when to use a professional.',
    category: 'probate',
    publishDate: '2026-01-15',
    readingTime: 12,
    heroHeading: 'Probate is where the complexity of a London estate becomes most visible -- and most expensive',
    heroParagraph: 'Probate is the legal process of administering a deceased person\'s estate. For London estates -- which often include high-value property, pension portfolios, and sometimes overseas assets -- it is rarely simple. This guide explains the process step by step, what it costs, how long it takes, and when professional help is essential.',
    relatedService: 'probate-support',
    relatedLocations: ['mayfair', 'kensington', 'chelsea'],
    relatedGuides: ['how-to-write-a-will-in-london', 'inheritance-tax-guide-london', 'trust-planning-guide'],
    sections: [
      {
        id: 'what-is-probate',
        heading: 'What probate is and when it is needed',
        body: [
          'Probate is the legal confirmation of an executor\'s authority to deal with a deceased person\'s estate. Where there is a will, the court issues a grant of probate. Where there is no will, the court issues letters of administration to the next of kin. Both documents are referred to collectively as "a grant of representation."',
          'Not every estate requires probate. Small estates, or estates consisting entirely of jointly owned assets (which pass automatically by survivorship), often do not need a formal grant. Banks and financial institutions each set their own threshold -- typically between £5,000 and £50,000 -- above which they require sight of the grant before releasing funds. Land Registry always requires a grant to register a transfer of property.',
          'If the deceased owned property in their sole name, a grant of probate is almost always required. For most London estates, probate is unavoidable.',
        ],
        legalNote: 'Probate jurisdiction in England and Wales is exercised by the Family Division of the High Court under Part 57 of the Civil Procedure Rules 1998 and the Non-Contentious Probate Rules 1987. Applications are made to HMCTS through the online probate service or on paper using form PA1P (with a will) or PA1A (without a will).',
      },
      {
        id: 'application-process',
        heading: 'The probate application process',
        body: [
          'The executor (or applicant for letters of administration) must first prepare a full account of the estate -- all assets and their values at the date of death, and all liabilities. For most London estates this includes property valuations, bank and investment account balances, pension fund values (if a death benefit is payable to the estate), and details of any gifts made in the seven years before death.',
          'Where the estate is subject to inheritance tax, form IHT400 must be completed and submitted to HMRC. Any IHT due must be paid (or at least the first instalment in the case of property) before HMRC issues a receipt that accompanies the probate application. This creates the well-known probate catch-22 for illiquid estates: IHT must be paid before the grant is issued, but the assets typically cannot be sold without the grant.',
          'The probate application itself is made online via the HMCTS probate service at probate.service.gov.uk, or on paper. The original will and death certificate must be submitted. HMCTS will issue the grant once satisfied that the application is complete and any IHT has been accounted for.',
        ],
        toolSlot: 'probate-fee-calculator',
        legalNote: 'The probate fee is set by the Probate Fees Order 2021: £300 for estates over £5,000, reduced to nil for estates of £5,000 or less. Certified copies of the grant cost £1.50 each. The online probate service was made available as the primary route for personal applications following the Courts and Tribunals Service\'s digital reform programme.',
      },
      {
        id: 'iht-catch22',
        heading: 'Inheritance tax and the probate catch-22',
        body: [
          'For London estates where the bulk of the value is in property, the IHT payment requirement before probate creates a significant practical problem. The executor cannot sell the property without the grant, but cannot obtain the grant without paying the IHT -- which may be several hundred thousand pounds.',
          'The solutions available include: using funds from accessible accounts (savings, investment ISAs) to pay the IHT; applying for a grant on credit from a bank or specialist probate lender; paying IHT on property by instalments (ten annual payments, with interest on the outstanding balance); or using a Direct Payment Scheme, which allows banks to transfer funds directly to HMRC from the deceased\'s accounts before probate is granted.',
          'Advance planning significantly reduces this problem. Life insurance held in trust (so it pays outside the estate, bypassing probate and providing immediate cash) is one of the most effective tools. A solicitor reviewing the estate plan in advance can identify the IHT liability and structure assets to make the payment manageable.',
        ],
        legalNote: 'Payment of IHT on land and buildings by instalments is permitted under s.227 of the Inheritance Tax Act 1984. Interest accrues on unpaid instalments under s.233. The Direct Payment Scheme operates under informal HMRC and banking industry agreements, not primary legislation.',
      },
      {
        id: 'executor-duties',
        heading: 'Executor duties and personal liability',
        body: [
          'Once the grant of probate is issued, the executor has full authority to collect assets, pay debts, and distribute the estate. This includes collecting all bank accounts, claiming life insurance proceeds, selling or transferring property, and filing any outstanding tax returns on behalf of the deceased.',
          'Executors have personal liability for errors. An executor who distributes the estate before paying all debts -- including unknown creditors -- can be personally liable to those creditors. An executor who fails to account for tax correctly can be liable for penalties. Advertising for creditors in the London Gazette and a national newspaper provides protection under the Trustee Act 1925 s.27.',
          'For complex estates, professional probate support removes this personal liability risk and speeds the administration. Our [probate support service](/services/probate-support/) connects executors with vetted probate professionals across London.',
        ],
        legalNote: 'Executor liability to unknown creditors is governed by s.27 of the Trustee Act 1925, which provides protection to executors who advertise in the prescribed manner before distributing the estate. The limitation period for creditor claims against estates is six years for most claims under the Limitation Act 1980.',
      },
      {
        id: 'london-complexity',
        heading: 'London-specific probate complexity',
        body: [
          'London estates introduce probate complexities that rarely arise elsewhere. Leasehold properties require engagement with freeholders and managing agents -- ground rent arrears and service charge disputes must be resolved before sale. Help to Buy equity loans require notification and repayment on sale. Overseas assets require separate legal processes in the relevant jurisdiction.',
          'High-value estates above £2,000,000 face the RNRB taper, meaning the IHT calculation becomes more complex. Estates with business assets may qualify for business property relief, which reduces the taxable value but requires careful documentation and specialist review.',
          'Timeline expectations for London estates should be realistic. A straightforward estate with a clean title, no IHT, and willing beneficiaries might complete in 4-6 months. An estate with property, IHT, overseas assets, and multiple beneficiaries routinely takes 12-24 months.',
        ],
      },
    ],
    faqs: [
      { question: 'How much does probate cost in London?', answer: 'The court fee is £300 for estates over £5,000. Professional probate support costs vary: fixed fee for simple estates from around £1,500-£3,000; percentage-based fees (typically 1-2% of the gross estate value) for larger or more complex estates. The total cost for a £1,000,000 London estate with property and IHT might be £15,000-£25,000 in professional fees and court costs.' },
      { question: 'How long does probate take?', answer: 'HMCTS currently processes straightforward probate applications in 8-16 weeks. The overall estate administration -- from death to final distribution -- takes an average of 9-12 months for straightforward estates and 12-24 months where property sales, IHT, or disputes are involved.' },
      { question: 'Do I need a solicitor for probate?', answer: 'No. Executors can apply for probate personally using the HMCTS online service or paper forms. However, for estates involving IHT, property in sole names, disputes between beneficiaries, or overseas assets, professional help significantly reduces the risk of errors and delays. The cost of putting things right after an error typically exceeds the cost of professional advice upfront.' },
      { question: 'What is the difference between probate and letters of administration?', answer: 'A grant of probate is issued where the deceased left a valid will naming an executor who is applying. Letters of administration are issued where there is no will (or no executor able and willing to act) -- the court appoints an administrator from the statutory next of kin hierarchy. Both documents give the holder authority to collect and distribute the estate.' },
      { question: 'Can probate be contested?', answer: 'Yes. A will can be contested on grounds including lack of testamentary capacity, undue influence, fraud, or improper execution. A claim for financial provision under the Inheritance (Provision for Family and Dependants) Act 1975 can also delay distribution. Contested probates are expensive and time-consuming -- claims must generally be brought within 6 months of the grant.' },
    ],
  },

  // ─── 8. Digital assets ────────────────────────────────────────────────────
  {
    slug: 'digital-assets-and-wills',
    title: 'Digital Assets and Wills -- Crypto, Accounts and IP',
    metaTitle: 'Digital Assets and Wills UK — Crypto, Accounts & IP 2026',
    metaDescription: 'How to include digital assets in your will. Covers cryptocurrency, online accounts, digital IP, access problems, the asset memorandum approach, and HMRC treatment.',
    category: 'wills',
    publishDate: '2026-01-15',
    readingTime: 10,
    heroHeading: 'A Bitcoin wallet with no access instructions is a bequest your executor cannot deliver',
    heroParagraph: 'Digital assets present a challenge that no previous generation of will writers has faced: assets that are simultaneously valuable, intangible, and inaccessible without specific technical knowledge. A will can direct that cryptocurrency passes to a beneficiary -- but if no one knows the private key, the asset is gone forever. This guide covers what digital assets are, how they can pass under a will, and the practical steps to ensure executors can act.',
    relatedService: 'single-will',
    relatedLocations: ['shoreditch', 'hackney', 'canary-wharf'],
    relatedGuides: ['how-to-write-a-will-in-london', 'updating-your-will', 'business-owner-wills'],
    sections: [
      {
        id: 'what-counts',
        heading: 'What counts as a digital asset',
        body: [
          'Digital assets encompass a wide range of property. Cryptocurrency -- Bitcoin, Ethereum, and thousands of other tokens -- is the most discussed, but the category is much broader. Online bank accounts and investment portfolios are digital assets, as are domain names, revenue-generating websites and YouTube channels, Substack subscriptions, digital photography libraries with licensing rights, NFTs, software source code, and intellectual property held in digital form.',
          'For London professionals in technology, media, and financial services, digital assets can represent a significant proportion of total wealth. A freelance developer with valuable domain names, a photographer with a licensing library, or a crypto investor may have digital assets worth more than their physical property.',
          'The common characteristic is that access depends on credentials -- passwords, private keys, seed phrases, two-factor authentication codes -- that exist only in the owner\'s control. Unlike a bank account where the executor can present the death certificate and grant of probate to access the funds, digital assets without access credentials are simply unrecoverable.',
        ],
      },
      {
        id: 'legal-ownership',
        heading: 'The legal ownership problem',
        body: [
          'Many digital "assets" are not assets at all in the traditional sense -- they are licences. A digital music library purchased on Apple iTunes, an ebook collection on Amazon Kindle, or a video game library on Steam consists of personal licences that are typically non-transferable on death under the platform\'s terms of service. These do not form part of the estate and cannot be inherited.',
          'Cryptocurrency is different. The UK Law Commission confirmed in its 2023 paper on digital assets that crypto-tokens are capable of being property under English law, and can therefore be inherited. The question is purely one of access -- legal title passes under the will, but physical delivery requires the private key.',
          'Domain names sit in a middle category. They are registered through registrars under contracts that typically allow transfer, but the transfer process requires access to the registrar account. Social media accounts, email accounts, and similar platforms each have their own policies on what happens on death -- some provide legacy contact or inactive account management tools, others simply terminate accounts.',
        ],
        legalNote: 'The UK Law Commission\'s "Digital Assets: Final Report" (Law Com No 412, 2023) confirmed that certain digital assets, including crypto-tokens, can constitute property under English law and can therefore be subject to proprietary remedies and pass under a will. The report recommended legislative reform to provide greater certainty.',
      },
      {
        id: 'asset-memorandum',
        heading: 'The asset memorandum -- how to make digital assets accessible',
        body: [
          'The solution adopted by specialist will drafters is the asset memorandum -- a separate document, not part of the will itself, that contains the information executors need to access digital assets. The will references the memorandum and directs executors to it, without containing the sensitive information itself.',
          'The memorandum should include: a list of all digital assets and their approximate values; the exchange, wallet, or platform where each asset is held; access instructions (without necessarily including the actual credentials in the memorandum itself, which should not be stored alongside the will in a solicitor\'s office); the location of hardware wallets, seed phrases, and private keys stored securely; and instructions for what to do with each asset.',
          'The memorandum itself should be stored in a secure location known to your executor -- a home safe, a safety deposit box, or with a trusted person. Crucially, it must not be included in the will or stored with the will in a solicitor\'s file. If access credentials are in the will, they become a matter of public record on probate. And if they are stored with the will in a third-party\'s custody, access is delayed until the grant is issued.',
        ],
        tip: 'Review and update your asset memorandum every year. Crypto addresses, exchange accounts, and platform credentials change regularly. An outdated memorandum may be as useless as no memorandum.',
      },
      {
        id: 'hmrc-treatment',
        heading: 'HMRC treatment of digital assets on death',
        body: [
          'HMRC treats cryptocurrency as a capital asset for tax purposes. On death, there is no capital gains tax charge -- the asset is inherited at the market value at the date of death (the "CGT-free uplift"). However, the value of the cryptocurrency at the date of death is included in the estate for IHT purposes.',
          'For executors, this means obtaining a market value of all cryptocurrency held at the date of death -- using the exchange rate on the relevant platform at the time. HMRC accepts the closing price on the date of death on a recognised exchange as the valuation basis. If the cryptocurrency is held on an exchange, this is relatively straightforward. If it is held in a self-custody wallet, the executor needs to access the wallet to establish the balance.',
          'Income generated by digital assets -- staking rewards, yield farming returns, rental income from digital property -- is taxable as income in the deceased\'s hands up to the date of death and must be reported on the estate\'s income tax return.',
        ],
      },
    ],
    faqs: [
      { question: 'Can I leave my cryptocurrency in my will?', answer: 'Yes. Cryptocurrency is property under English law following the UK Law Commission\'s 2023 confirmation. It can be left to beneficiaries in your will. The practical challenge is ensuring your executor can access it -- which requires a secure record of your private keys or seed phrases, ideally in an asset memorandum separate from the will itself.' },
      { question: 'What happens to my social media accounts when I die?', answer: 'It depends on the platform. Facebook allows a "Legacy Contact" to manage the memorialised account or request deletion. Google offers an Inactive Account Manager to designate what happens to your data. Apple provides a Digital Legacy programme allowing nominated legacy contacts to access data. Twitter/X currently has no formal legacy process. Check each platform\'s current policy and set up their legacy tools now.' },
      { question: 'Are NFTs inheritance tax free?', answer: 'No. NFTs are digital assets and are included in your estate for IHT purposes at their market value at the date of death. Valuing NFTs for probate can be challenging given the volatility and illiquidity of some NFT markets. HMRC expects a good-faith valuation based on available market data at the date of death.' },
      { question: 'What if I cannot find my deceased relative\'s crypto?', answer: 'Without the private key or seed phrase, the cryptocurrency is inaccessible and cannot be recovered. There is no equivalent of a bank\'s lost account recovery process for self-custody wallets. Professional crypto forensic services can sometimes identify holdings on exchanges (where KYC records exist), but self-custody wallets are genuinely irrecoverable without the key material.' },
    ],
  },

  // ─── 9. Wills for unmarried couples ───────────────────────────────────────
  {
    slug: 'will-for-unmarried-couples',
    title: 'Wills for Unmarried Couples in London',
    metaTitle: 'Wills for Unmarried Couples London — Cohabitation Rights 2026',
    metaDescription: 'Why unmarried couples in London need wills urgently. Covers the intestacy trap, joint tenancy vs tenancy in common, pension nominations, and protection options.',
    category: 'wills',
    publishDate: '2026-01-15',
    readingTime: 11,
    heroHeading: 'The cohabitation trap is not theoretical -- in London, it costs families millions every year',
    heroParagraph: 'England and Wales has no concept of a common-law spouse. Regardless of how long two people have lived together, shared a mortgage, raised children, or conducted themselves as a married couple, an unmarried partner has no automatic right to inherit on death. The Law Commission has recommended reform repeatedly; Parliament has not acted. Until it does, the only protection is a valid will.',
    relatedService: 'mirror-wills',
    relatedLocations: ['islington', 'hackney', 'clapham'],
    relatedGuides: ['intestacy-rules-uk', 'mirror-wills-guide', 'how-to-write-a-will-in-london'],
    sections: [
      {
        id: 'the-cohabitation-trap',
        heading: 'What the law actually says about cohabiting couples',
        body: [
          'The Cohabitation Rights Bill has been introduced in Parliament on multiple occasions and has repeatedly failed to progress into law. As of 2026, England and Wales remains one of the few common law jurisdictions with no statutory protection for cohabiting partners on death. Scotland introduced the Family Law (Scotland) Act 2006 which provides limited rights; England has not followed.',
          'The practical consequence is that if you die without a will and you are not married or in a civil partnership, your partner receives nothing. The estate passes according to the intestacy rules -- to children, then parents, then siblings, then more distant relatives. A partner who has lived with the deceased for 30 years and contributed to the home in every respect has exactly the same legal standing as a stranger.',
          'This is not a failure to appreciate the law -- it is a failure to act on it. HMRC estimates that over 3 million couples cohabit without marriage in England and Wales. A significant proportion of them are exposed to the intestacy trap.',
        ],
        legalNote: 'The intestacy rules under Part IV of the Administration of Estates Act 1925 do not recognise cohabiting partners. The Inheritance (Provision for Family and Dependants) Act 1975 s.1(1A) allows a cohabiting partner who lived with the deceased for at least two years to apply for reasonable financial provision -- but this requires litigation, is uncertain, and is not a substitute for a will.',
      },
      {
        id: 'property-ownership',
        heading: 'Joint tenancy versus tenancy in common -- the property question',
        body: [
          'For cohabiting couples who own property together, how the property is legally held is critical. Joint tenants hold the property with a right of survivorship: when one dies, the survivor automatically becomes the sole owner, regardless of any will or intestacy rules. This provides effective protection for the property.',
          'Tenants in common each hold a defined share of the property. There is no right of survivorship. On death, the deceased\'s share falls into their estate and passes under their will (if any) or the intestacy rules. For an unmarried couple holding as tenants in common, the surviving partner has no automatic right to the deceased\'s share -- it could pass to the deceased\'s parents, siblings, or children from a previous relationship.',
          'Most couples who buy property together do so as joint tenants by default. But a deed of severance (converting from joint tenancy to tenancy in common) is commonly used in estate planning -- for example, when implementing a protective property trust, or when partners have different financial contributions and want to reflect this. If you are unsure how your property is held, the Land Registry title register will confirm it.',
        ],
        tip: 'Check your Land Registry title register. If the property is held as tenants in common, it will say "No disposition by a sole proprietor... etc." (a restriction is entered). If it is silent on this, it is likely held as joint tenants. Your conveyancing solicitor can confirm and advise on whether severance is appropriate for your situation.',
      },
      {
        id: 'pension-nominations',
        heading: 'Pensions -- the nomination problem',
        body: [
          'Pensions do not pass under your will. They pass according to a nomination (or expression of wishes) form submitted to your pension provider. The pension trustees have discretion as to whom they pay -- but a current, clearly expressed nomination to your partner is persuasive.',
          'Many people have outdated nomination forms that name an ex-partner, a parent who has since died, or simply no one. For unmarried partners, an up-to-date nomination is especially important because the pension trustees are not required to pay to the estate -- and if the estate passes under intestacy, the partner receives nothing from either the estate or the pension.',
          'Review your nomination forms annually or after any significant relationship change. This takes minutes and could determine who receives a substantial asset. Contact your pension provider to request the current form and update it.',
        ],
      },
      {
        id: 'life-insurance',
        heading: 'Life insurance in trust',
        body: [
          'A life insurance policy can be an effective way to provide for an unmarried partner without relying on the estate or the will. The key is to write the policy in trust -- which means it pays out to the named beneficiary (your partner) directly, bypassing the estate entirely. This avoids probate delays and, in many cases, IHT.',
          'If you hold a life insurance policy but have not written it in trust, the proceeds will form part of your estate on death, increase the IHT exposure, and be delayed by the probate process. Most life insurance providers offer a free trust deed -- it is a simple document worth completing.',
          'For unmarried couples without significant savings, a term life insurance policy written in trust provides immediate, accessible financial protection for the surviving partner during the most financially vulnerable period after bereavement.',
        ],
      },
      {
        id: 'what-to-do',
        heading: 'What to do now',
        body: [
          'The priority actions for cohabiting couples are: make mirror wills naming each other as primary beneficiary; review how your property is held and take advice if you own as tenants in common; update pension nomination forms; write any life insurance in trust; and check whether either partner has assets in their sole name that need addressing.',
          'These steps can be completed in a matter of weeks. The cost of mirror wills is £250-£550. The cost of not having them, for a London couple with a jointly owned property, could be the entire value of the estate.',
          'Our [mirror wills service](/services/mirror-wills/) matches you with a vetted specialist covering your area within 24 hours.',
        ],
        toolSlot: 'intestacy-calculator',
      },
    ],
    faqs: [
      { question: 'Are we common-law married after living together for X years?', answer: 'No. There is no such thing as common-law marriage in England and Wales. Regardless of how long you have cohabited, you do not acquire the legal rights of a married couple. This applies to inheritance, pension rights, and tax treatment. The only way to acquire those rights is to marry, form a civil partnership, or make specific legal arrangements such as wills and cohabitation agreements.' },
      { question: 'Can we get married just to protect our estate?', answer: 'Yes, and it is a legitimate planning consideration. Marriage confers full spousal rights including automatic inheritance under the intestacy rules, the spousal IHT exemption, and transferable nil-rate bands. A civil partnership has the same legal effect. However, marriage automatically revokes any existing will under s.18 of the Wills Act 1837, so you must make new wills promptly after the ceremony.' },
      { question: 'What is a cohabitation agreement and do we need one?', answer: 'A cohabitation agreement is a contract between cohabiting partners that records how assets are owned, how expenses are shared, and what happens if the relationship ends. It is not the same as a will -- it does not deal with inheritance. But it can clarify property ownership and reduce disputes. A cohabitation agreement combined with mirror wills provides much stronger protection than either alone.' },
      { question: 'If we have children together, does that give us any rights?', answer: 'Having children together does not create any inheritance rights between the parents. However, your children are each other\'s next of kin and would inherit under the intestacy rules if both of you died without wills. The issue is that an unmarried surviving partner who is the primary carer has no automatic authority over the children\'s inherited assets without being appointed as trustee in a will.' },
    ],
  },

  // ─── 10. Estate planning over 50 ─────────────────────────────────────────
  {
    slug: 'estate-planning-over-50',
    title: 'Estate Planning Checklist for Londoners Over 50',
    metaTitle: 'Estate Planning Checklist London — Over 50s Guide 2026',
    metaDescription: 'Complete estate planning checklist for Londoners over 50. Covers wills, LPAs, pension nominations, IHT gifting strategies, property, and the family conversation.',
    category: 'planning',
    publishDate: '2026-01-15',
    readingTime: 13,
    heroHeading: 'At 50, most London homeowners have accumulated a taxable estate without planning for one',
    heroParagraph: 'The combination of a frozen nil-rate band and rising London property values means that many people over 50 hold estates that will generate a significant inheritance tax bill -- often without realising it. This guide provides a practical checklist for taking stock and taking action, covering wills, lasting powers of attorney, gifting strategies, pensions, and trust planning.',
    relatedService: 'estate-planning',
    relatedLocations: ['hampstead', 'richmond', 'dulwich'],
    relatedGuides: ['inheritance-tax-guide-london', 'trust-planning-guide', 'lasting-power-of-attorney-guide'],
    sections: [
      {
        id: 'estate-inventory',
        heading: 'Step one -- the estate inventory',
        body: [
          'Before any planning can happen, you need a clear picture of what you own. An estate inventory should list: all property (residential and investment) with current valuations and outstanding mortgage balances; all bank and savings accounts; all investments, ISAs, and share portfolios; all life insurance policies (noting whether written in trust); all pension funds and their current transfer values; any business interests; and any other significant assets.',
          'Liabilities reduce the estate: outstanding mortgages, secured loans, credit card balances, and outstanding tax liabilities should all be listed and deducted. The resulting net figure is your gross taxable estate for IHT purposes before allowances.',
          'For most London homeowners over 50, this exercise produces a number that is larger -- sometimes significantly larger -- than they expected. Property purchased in the 1990s or early 2000s may have tripled or quadrupled in value. Combined with pension funds and ISAs accumulated over a working life, estates of £1,000,000-£3,000,000 are common for people who do not consider themselves wealthy.',
        ],
        toolSlot: 'iht-calculator',
      },
      {
        id: 'wills-review',
        heading: 'Review your will',
        body: [
          'If you do not have a will, make one immediately. If you do have one, review it critically. When was it last updated? Do the executors named still have capacity and are they still willing? Are the beneficiaries still appropriate? If you have divorced and remarried, does the will reflect your current family structure? If the will predates the introduction of the RNRB in 2017, the IHT provisions may be outdated.',
          'For couples, consider whether a simple mirror will is still appropriate or whether a life interest trust should be incorporated to protect the estate on the second death. For people with children from previous relationships, the adequacy of protection for each set of children needs careful review.',
          'A will review with a specialist typically takes one to two hours and produces a clear picture of whether the existing document is adequate. Our [estate planning review service](/services/estate-planning/) includes a will review as a standard element.',
        ],
      },
      {
        id: 'lpa-review',
        heading: 'Lasting powers of attorney',
        body: [
          'If you do not have both a property and financial affairs LPA and a health and welfare LPA, the priority action is to create them now. The registration process currently takes approximately 20 weeks. A health event at 60 or 65 is not uncommon -- the window for creating LPAs while you still have capacity may be shorter than you expect.',
          'If you have existing LPAs, check that the attorneys named are still appropriate, willing, and able to act. An attorney who is themselves elderly, unwell, or estranged from you may not be the right person to manage your affairs. Updating attorneys requires creating a new LPA -- the existing one cannot simply be amended.',
        ],
      },
      {
        id: 'pension-nominations',
        heading: 'Pension nominations -- the overlooked asset',
        body: [
          'Pensions are typically outside the estate for IHT purposes -- making them one of the most tax-efficient assets to pass to the next generation. But from April 2027, most pension funds will be brought within the scope of IHT under changes announced in the Autumn Budget 2024. If you have a significant pension fund, the planning implications of this change are material and require specialist advice before 2027.',
          'Regardless of the IHT position, pension nominations must be kept current. A nomination naming a former spouse, a deceased parent, or simply no one is a significant problem. Contact your pension provider and request a copy of your current nomination form. If it is outdated, update it now.',
        ],
        legalNote: 'The current exemption for pension funds from IHT derives from the way pension funds are structured under trust, meaning the fund does not technically form part of the deceased\'s estate under s.5 IHTA 1984. The proposed changes announced in October 2024 would bring pension funds within the estate from April 2027. Regulations have not yet been finalised.',
      },
      {
        id: 'gifting-strategies',
        heading: 'Gifting strategies to reduce IHT',
        body: [
          'Regular gifting from surplus income and capital can significantly reduce an estate over time, without the seven-year clock applying to all gifts. The annual exemption of £3,000 per person per year allows £6,000 per couple to leave the estate free from IHT each year (with one year\'s unused exemption carried forward). Small gifts of up to £250 per person to any number of recipients are immediately exempt.',
          'More significantly, the normal expenditure out of income exemption under s.21 IHTA 1984 allows regular gifts from income -- gifts that are habitual, made from surplus income after meeting normal living expenses, and that do not reduce the donor\'s standard of living -- to be immediately exempt from IHT without the seven-year rule. For someone with a large pension income, structured annual payments to children can remove substantial sums from the estate over time.',
          'Larger one-off gifts are potentially exempt transfers (PETs) and fall outside the estate only if the donor survives seven years. If death occurs within seven years, the gift is brought back into the estate, though taper relief applies after three years. Anyone considering large gifts as an IHT strategy should consider term insurance on their own life to fund any IHT that would arise from the gift if they died within seven years.',
        ],
        legalNote: 'The annual exemption is provided by s.19 IHTA 1984. The small gifts exemption is under s.20. The normal expenditure from income exemption is under s.21. Taper relief on gifts within seven years of death operates under s.7(4) -- reducing the rate by 20% per year from year 3 onwards.',
        toolSlot: 'review-date-calculator',
      },
    ],
    faqs: [
      { question: 'Is it too early to think about estate planning at 50?', answer: 'No. At 50, most people have accumulated significant assets and are at the peak of their earning and wealth-building years. LPAs, gifting strategies, and trust structures all work better the earlier they are established. The seven-year clock for IHT-efficient gifting means that gifts made at 50 fall outside the estate by 57 -- leaving plenty of scope for further planning.' },
      { question: 'Should I use a financial advisor or a solicitor for estate planning?', answer: 'Both have a role. A solicitor drafts wills, LPAs, trust deeds, and deed of variations. A financial advisor reviews investment and pension structures for tax efficiency. For comprehensive estate planning, you typically need both working together. Our matched specialists are often able to work alongside your existing advisors.' },
      { question: 'What is a deed of variation and can it reduce IHT?', answer: 'A deed of variation allows beneficiaries who have already inherited to redirect their inheritance to someone else within two years of the death, as if the redirection had been made by the deceased\'s will. Under s.142 IHTA 1984, the variation is treated as if it was made by the deceased, which means it can reduce the IHT charge on the original estate. It requires the agreement of all affected beneficiaries and careful legal drafting.' },
      { question: 'How do I reduce IHT on my London property?', answer: 'Options include: ensuring you are claiming the full RNRB by leaving property to direct descendants; using a protective property trust in your will to ring-fence one partner\'s share; making lifetime gifts subject to the seven-year rule; leaving part of your estate to charity to qualify for the 36% reduced IHT rate; or structuring the ownership of the property in a way that maximises available reliefs. None of these strategies is simple -- all require specialist advice.' },
    ],
  },

  // ─── 11. Business owner wills ─────────────────────────────────────────────
  {
    slug: 'business-owner-wills',
    title: 'Wills for London Business Owners',
    metaTitle: 'Wills for Business Owners London — BPR & Succession 2026',
    metaDescription: 'Why business owners in London need specialist will drafting. Covers business property relief, shareholder agreements, the executor problem, and CGT on death.',
    category: 'planning',
    publishDate: '2026-01-15',
    readingTime: 12,
    heroHeading: 'A business owner\'s will must address what happens to the business itself, not just the shares',
    heroParagraph: 'For most individuals, a will is a relatively simple document. For a business owner, it intersects with shareholder agreements, articles of association, partnership deeds, key person insurance, and tax reliefs that can either preserve or destroy the value of the business interest for the next generation. This guide covers the estate planning considerations specific to London business owners.',
    relatedService: 'trust-planning',
    relatedLocations: ['canary-wharf', 'shoreditch', 'mayfair'],
    relatedGuides: ['inheritance-tax-guide-london', 'trust-planning-guide', 'estate-planning-over-50'],
    sections: [
      {
        id: 'bpr',
        heading: 'Business property relief -- the most valuable IHT exemption',
        body: [
          'Business property relief (BPR) is a relief from inheritance tax that can reduce the taxable value of business assets by 100% or 50%, depending on the type of asset. For qualifying unquoted trading company shares and assets of a sole trader or partnership, the relief is 100% -- meaning no IHT is payable on those assets, regardless of their value.',
          'For London business owners, BPR can be the single most significant IHT planning tool available. A founder who holds £5,000,000 of shares in a qualifying private trading company pays no IHT on those shares -- a saving of up to £2,000,000 compared to the 40% standard rate.',
          'The key conditions are: the business must be a trading business (not mainly investment); the owner must have held the shares or assets for at least two years before death; and the business must not hold "excepted assets" -- assets not used in the business, such as excessive cash holdings or investment property.',
        ],
        legalNote: 'Business property relief is governed by ss.103-114 of the Inheritance Tax Act 1984. The 100% rate applies to unquoted shares in a trading company (s.105(1)(bb)), sole trader assets (s.105(1)(a)), and interest in a trading partnership (s.105(1)(a)). The 50% rate applies to listed shares giving control, and land or buildings used in the business but owned personally. The two-year ownership requirement is under s.106.',
      },
      {
        id: 'shareholder-agreements',
        heading: 'Shareholder agreements and articles of association',
        body: [
          'The will cannot override the articles of association or a shareholders\' agreement. If the articles of a company contain pre-emption rights on death -- requiring the deceased\'s shares to be offered to existing shareholders at a valuation before they can pass under the will -- the executor must comply. The shares pass under the will in terms of beneficial ownership, but the articles govern what happens to the legal title.',
          'Many shareholders\' agreements contain "drag-along" or "tag-along" provisions, cross-option agreements (allowing surviving shareholders to purchase the deceased\'s shares, funded by key person insurance), or put and call options that activate on death. These can significantly affect the value of what actually passes under the will.',
          'Before finalising a will, a business owner should review their shareholder\'s agreement and articles with their solicitor to understand what constraints apply on death and whether the will\'s provisions are consistent with them.',
        ],
      },
      {
        id: 'executor-problem',
        heading: 'The executor problem -- who runs the business while probate proceeds',
        body: [
          'Probate for an estate containing a significant business interest typically takes 12-18 months. During that time, who runs the business? The executor has limited powers under the Administration of Estates Act 1925 -- they can carry on the business for the purpose of the beneficial winding up, but management of an ongoing trading business as if they were the owner is much more difficult.',
          'The practical solutions are: ensuring the shareholders\' agreement includes clear provisions for business continuity on death; appointing a professional executor or co-executor with relevant business experience; considering a business LPA (a power of attorney for the business as a separate entity); and ensuring that key person insurance or a life policy written in trust provides liquidity for the estate without dependence on the business.',
          'For sole traders, the business effectively ceases on death -- the executor must wind it up or sell it as a going concern. For companies, the company continues to exist and its shares form an asset of the estate, but the deceased\'s personal role in the business ends immediately.',
        ],
        legalNote: 'The executor\'s power to carry on the deceased\'s business is governed by s.39 of the Administration of Estates Act 1925, which provides authority to carry on the business for the purpose of the beneficial winding up. This is not a general management power. Executors who exceed this authority may incur personal liability.',
      },
      {
        id: 'cgt-death',
        heading: 'Capital gains tax on death -- the free uplift',
        body: [
          'On death, there is no capital gains tax charge on the deceased\'s assets. Instead, the beneficiary acquires the assets at the market value at the date of death -- this is the "CGT-free uplift" or "base cost uplift." For a business owner holding shares with a very low original cost (common for founders) and a high current value, this uplift can save an enormous amount of CGT.',
          'The implication for estate planning is significant: inheriting business assets is more tax-efficient than receiving them as a gift. A gift of shares during lifetime would trigger CGT (potentially at 24% for higher rate taxpayers on business assets from April 2025 onward) on the gain since acquisition. The same shares inherited on death pass at market value with no CGT charge.',
          'This does not mean business owners should defer all transfers until death -- the IHT position, BPR availability, and the owner\'s own financial needs all influence the optimal strategy. But it does mean that lifetime transfers of highly appreciated business assets should be considered carefully.',
        ],
        legalNote: 'The CGT-free uplift on death is provided by s.62(1) of the Taxation of Chargeable Gains Act 1992, which treats the deceased as acquiring all assets immediately before death at their market value. This eliminates any chargeable gain up to that point. CGT rates on business assets were increased to 18%/24% (basic/higher rate) from 30 October 2024 under the Autumn Budget 2024.',
      },
    ],
    faqs: [
      { question: 'Does my company qualify for business property relief?', answer: 'It depends on whether it is a trading company or an investment company. A trading company qualifies; a company that is mainly holding investments does not. Mixed trading and investment companies are assessed on whether the "wholly or mainly" test is met. HMRC\'s IHTM manual provides guidance but the analysis requires professional review of your specific business, its activities, and its balance sheet.' },
      { question: 'What is a key person insurance policy and do I need one?', answer: 'Key person insurance is a life policy taken out by the company on the life of a key individual (director, founder, or key employee), with the company as the beneficiary. On the death of the insured, the company receives the payout, providing funds to recruit a replacement and cushion the impact of the loss. For estate planning purposes, key person insurance is separate from personal life insurance written in trust -- both may be appropriate for a business owner.' },
      { question: 'Can I leave my shares to my children and still use BPR?', answer: 'Yes, subject to the beneficiary meeting the holding period requirements if they subsequently wish to rely on BPR themselves. Shares inherited at death acquire the deceased\'s ownership period for BPR purposes under s.109 IHTA 1984 -- so a beneficiary who inherits shares and then dies relatively quickly after can still benefit from BPR on those shares.' },
      { question: 'What about my partnership interest?', answer: 'A partnership interest in a trading partnership qualifies for 100% BPR in the same way as sole trader assets. However, the partnership agreement may restrict or prevent the transfer of partnership interests on death. Many partnership agreements provide for the deceased\'s interest to be automatically purchased by the surviving partners, with the estate receiving a capital payment rather than an ongoing interest. The will should be coordinated with the partnership agreement.' },
    ],
  },

  // ─── 12. Updating your will ───────────────────────────────────────────────
  {
    slug: 'updating-your-will',
    title: 'When and How to Update Your Will',
    metaTitle: 'How to Update Your Will UK — When & Why 2026',
    metaDescription: 'When you need to update your will and how to do it correctly. Covers the events that trigger a review, codicils versus new wills, marriage and divorce effects, and deed of variation.',
    category: 'wills',
    publishDate: '2026-01-15',
    readingTime: 9,
    heroHeading: 'Marriage revokes your existing will. Most people do not know this until it is too late',
    heroParagraph: 'A will is not a permanent document. Life events change the appropriate distribution of an estate, the suitability of named executors and guardians, and the tax efficiency of existing provisions. Several events -- including marriage -- have automatic legal effects on an existing will. This guide explains which events require a review, what to do when they occur, and how to make changes correctly.',
    relatedService: 'estate-planning',
    relatedLocations: ['islington', 'clapham', 'richmond'],
    relatedGuides: ['how-to-write-a-will-in-london', 'mirror-wills-guide', 'estate-planning-over-50'],
    sections: [
      {
        id: 'automatic-revocation',
        heading: 'Events that automatically affect your will',
        body: [
          'Marriage automatically revokes a will in England and Wales. If you made a will before your marriage and have not made a new one since, your existing will is legally void -- you are intestate regardless of the will\'s existence. This surprises many people, including some who assume that naming a spouse in the will is sufficient protection. It is not. The will is void from the date of marriage.',
          'The exception is a will that is expressed to be "made in contemplation of marriage to [specific person]." Such a will, if it contains the necessary declaration, is not revoked by the subsequent marriage to that person. This requires specific drafting and must name the intended spouse.',
          'Divorce does not revoke the will, but it removes an ex-spouse as a beneficiary and as executor, as if they had died on the date the decree absolute (or final divorce order) was made. This can leave a will with gaps -- if the entire estate was left to the now-removed spouse with no alternative provisions, the estate may pass partially intestate.',
        ],
        legalNote: 'The revocation of a will by marriage is governed by s.18 of the Wills Act 1837. The exception for wills in contemplation of marriage is under s.18(3), inserted by the Law Reform (Succession) Act 1995. The effect of divorce on existing wills is under s.18A, also inserted by the 1995 Act.',
      },
      {
        id: 'life-events',
        heading: 'Life events that should trigger a review',
        body: [
          'Birth of a child or grandchild: a will that does not name a new child may still adequately provide for them if residue passes to "my children" -- but specific bequests, guardian appointments, and trust provisions should be reviewed.',
          'Death of an executor or beneficiary: an executor who has predeceased you cannot act. A beneficiary who has predeceased you may cause gifts to lapse (fall into the residue) unless the will includes a substitution clause. A will should name at least two executors and should include appropriate substitution provisions.',
          'Significant change in assets: the introduction of business interests, substantial property acquisitions, large investment portfolios, or significant debts may change the tax efficiency of existing provisions. A will drafted when you rented a flat may not be adequate after you have become a London homeowner with a property above the IHT threshold.',
          'Relationship breakdown: separation does not automatically affect a will. A separated partner named in your will retains their gift until the divorce is finalised. Many separated couples do not want their ex-partner to inherit during the separation period -- which may last years.',
        ],
        toolSlot: 'review-date-calculator',
      },
      {
        id: 'codicil-vs-new-will',
        heading: 'Codicil versus new will -- almost always the new will',
        body: [
          'A codicil is a supplement to an existing will that modifies specific provisions without replacing the whole document. It must be executed with the same formalities as a will -- signed by the testator and witnessed by two independent witnesses. In principle, it is a cheaper and simpler option for minor changes.',
          'In practice, most estate planning solicitors recommend a new will rather than a codicil, for several reasons. Multiple codicils create complexity and potential for interpretation disputes -- the will and all its codicils must be read together and the relationship between them resolved. A codicil executed many years after the original will may suggest changes in the testator\'s circumstances that invite scrutiny. And the cost difference is modest -- a professionally drafted updated will costs little more than a codicil.',
          'One situation where a codicil is appropriate is the targeted amendment of a small provision -- for example, updating a specific bequest -- where the rest of the will is entirely satisfactory and the risk of any dispute is negligible.',
        ],
      },
      {
        id: 'what-not-to-do',
        heading: 'What not to do to your will',
        body: [
          'Never write on your will. Any alteration to a will after execution is presumed not to be valid unless it is itself executed with the same formalities as a will -- which informal handwritten amendments are not. A crossed-out clause or handwritten addition may raise questions about whether the original provision was validly revoked.',
          'Never remove pages from your will. A will with missing pages raises presumptions in probate that are difficult to rebut. If the original is damaged or tampered with, its validity may be challenged. Keep the original in a safe place, unchanged, and update it through a properly executed codicil or new will.',
          'Never assume that your previous will remains valid after a major life event. Review it with a solicitor after marriage, divorce, a significant change in assets, or the birth of a child. The few hundred pounds spent on a review is insignificant against the cost of an invalid or inadequate will reaching probate.',
        ],
      },
      {
        id: 'deed-of-variation',
        heading: 'Deed of variation -- changing an inheritance after death',
        body: [
          'A deed of variation allows beneficiaries who have already received (or are entitled to receive) an inheritance to redirect it to someone else, within two years of the date of death. The variation is treated for IHT and CGT purposes as if it had been made by the deceased\'s will -- meaning it can reduce the IHT on the original estate and change the CGT base cost for the redirected assets.',
          'Deeds of variation are used in several contexts: to redirect an inheritance to a lower-generation beneficiary to skip a generation of IHT; to introduce charitable gifts that qualify for the 36% reduced IHT rate; to correct a poorly drafted will; or to improve the overall tax efficiency of a distribution that the family agrees was not optimal.',
          'All beneficiaries affected by the variation must consent. HMRC must be notified if the variation affects the IHT or CGT position. The variation must be in writing and must state that it is intended to take effect under the relevant legislation.',
        ],
        legalNote: 'Deeds of variation are governed by s.142 of the Inheritance Tax Act 1984 (for IHT) and s.62(7) of the Taxation of Chargeable Gains Act 1992 (for CGT). The variation must be made within two years of the death and must contain a statement that the parties intend it to take effect under s.142 IHTA 1984 / s.62(7) TCGA 1992.',
      },
    ],
    faqs: [
      { question: 'How often should I review my will?', answer: 'As a minimum, every three to five years. Additionally, after any major life event: marriage, divorce or separation, birth of a child or grandchild, death of an executor or beneficiary, significant change in assets or business interests, or a major change in tax law. Setting a calendar reminder for a periodic review is the simplest way to ensure it happens.' },
      { question: 'Does divorce automatically protect my children?', answer: 'Under s.18A of the Wills Act 1837, divorce removes your ex-spouse as a beneficiary and executor as if they had died on the date of the divorce. If your will then says "if my spouse does not survive me, to my children," the children inherit. But if there is no fallback provision, the gift to the spouse lapses and falls into the residue -- which may or may not reach the children. Review the will carefully after divorce.' },
      { question: 'Can I update my will online?', answer: 'Some online will services allow updates. However, any update must be properly executed -- signed by you and witnessed by two independent adults present at the same time. An online will that is filled in electronically but executed on paper using the correct formalities is valid. One that is entirely electronic is not valid in England and Wales under current law.' },
      { question: 'What is the cost of updating a will?', answer: 'A straightforward updated single will costs £150-£350. Updated mirror wills for couples cost £250-£550 for the pair. A codicil to address a small change typically costs £100-£200. A full estate planning review that includes a will update, LPA review, and IHT assessment costs more but provides comprehensive assurance.' },
    ],
  },

];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug);
}

export function getGuidesByCategory(category: Guide['category']): Guide[] {
  return guides.filter(g => g.category === category);
}

export const guideCategories: Record<Guide['category'], string> = {
  wills:    'Wills',
  tax:      'Inheritance Tax',
  lpa:      'Power of Attorney',
  trusts:   'Trusts',
  probate:  'Probate',
  planning: 'Estate Planning',
};
