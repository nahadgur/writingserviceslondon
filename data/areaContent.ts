// data/areaContent.ts
// Genuine differentiated content per area hub. No token-swap templates.
// Each entry is written for that area's actual demographic and estate profile.

import type { AreaHub } from './locations';

export interface AreaContent {
  heroHeading: string;
  heroParagraph: string;
  introHeading: string;
  introParagraphs: string[];
  whySpecialistMatters: string;
  clientProfile: {
    heading: string;
    points: string[];
  };
  commonTriggers: string[];
  localContext: string;
  faqOverride?: { question: string; answer: string }[];
}

export const areaContent: Record<string, AreaContent> = {

  mayfair: {
    heroHeading: 'Will Writing and Estate Planning in Mayfair',
    heroParagraph: 'Mayfair estates are among London\'s most complex. Multi-jurisdictional assets, offshore structures, and nine-figure portfolios require estate planning that goes far beyond a standard will. We match you with specialists who work with private wealth managers and international tax advisors as standard.',
    introHeading: 'Estate Planning for Mayfair\'s Complex Portfolios',
    introParagraphs: [
      'A Mayfair address typically signals an estate that exceeds seven figures — often by a significant margin. Art collections, international property, trust structures already in place, and business interests across jurisdictions mean that will writing here must coordinate with existing private wealth arrangements rather than work in isolation.',
      'The specialists we work with in this area are accustomed to coordinating with Mayfair\'s private banks, international tax advisors, and family offices. They understand that a will for a high-net-worth individual is not a document — it is one element of a structured wealth transfer plan that may span decades and multiple countries.',
      'Common estate planning challenges in W1 include: who controls offshore trusts after your death, how art and collectible valuations are handled, what happens to business interests when a shareholder dies, and how UK domicile rules affect the estate of internationally mobile residents.',
    ],
    whySpecialistMatters: 'An estate with international dimensions, trust structures, or assets under professional management needs a specialist who has worked with private wealth teams — not a generalist who will treat it as a standard residential estate.',
    clientProfile: {
      heading: 'Who We Match in Mayfair',
      points: [
        'High-net-worth individuals with estates spanning multiple jurisdictions',
        'International families with UK property and overseas assets requiring coordinated planning',
        'Business owners and entrepreneurs needing succession alongside personal estate planning',
        'Trust beneficiaries whose wills must dovetail with existing trust structures',
        'Art collectors needing specialist valuation and chattels provisions',
        'Residents with private wealth managers who need will specialists who can work with them',
      ],
    },
    commonTriggers: [
      'Change in domicile or UK tax residency status',
      'Major asset acquisition — London property, business, or significant investment',
      'Trust restructuring that requires coordinated will updates',
      'Marriage or divorce with international property implications',
      'Business succession following growth or sale preparation',
    ],
    localContext: 'Mayfair, Belgravia, Knightsbridge, St James\'s, Marylebone, and neighbouring W1 areas share a concentration of private wealth that demands specialist estate planning — the kind that coordinates with existing professional arrangements rather than starting from scratch.',
  },

  kensington: {
    heroHeading: 'Will Writing and Estate Planning in Kensington',
    heroParagraph: 'Property values in Kensington and the surrounding areas mean most family homes push estates well above inheritance tax thresholds. Add complex family structures — second marriages, blended families, international connections — and a generic will template is simply not adequate.',
    introHeading: 'Property Wealth and Complex Family Structures in W8',
    introParagraphs: [
      'A family home in Kensington worth £2 million or more creates an inheritance tax liability of hundreds of thousands of pounds that many families simply haven\'t planned for. Our matched specialists begin every conversation by understanding the full estate picture — not just what the client wants in their will, but what the tax implications of different distribution structures actually are.',
      'The demographic here includes a significant proportion of clients with complex family situations: second marriages where children from different relationships need protecting, international residents with assets in multiple countries, and elderly homeowners whose properties have appreciated far beyond what they originally paid.',
      'The Notting Hill and Holland Park end of this market particularly demands specialists comfortable with ultra-prime residential values, privacy-conscious clients, and estates that include art, international bank accounts, and company directorships alongside the family home.',
    ],
    whySpecialistMatters: 'A Kensington estate almost always involves property worth more than the IHT threshold, which means every will here needs to consider trust structures, gifting strategies, and how the surviving spouse\'s own estate will be affected — not just who gets what.',
    clientProfile: {
      heading: 'Who We Match in Kensington',
      points: [
        'Families with high-value properties where the home alone exceeds IHT thresholds',
        'Blended families needing wills that protect children from all relationships',
        'International residents with UK property and overseas connections',
        'Elderly homeowners who need LPAs before capacity becomes an issue',
        'Divorced individuals who need their wills updated and existing orders considered',
        'Couples where one partner\'s death would create a care cost exposure for the survivor',
      ],
    },
    commonTriggers: [
      'Property purchase or significant increase in property value',
      'Second marriage or serious relationship after divorce',
      'Birth of children or grandchildren changing desired distribution',
      'Diagnosis of a serious illness in the family',
      'Retirement and realisation that the estate has grown substantially',
    ],
    localContext: 'Kensington, Notting Hill, Holland Park, Earl\'s Court, Bayswater, and Shepherd\'s Bush all fall within this area hub. The estate planning needs vary from ultra-high-net-worth individuals in Holland Park to first-home buyers in Earl\'s Court — all of whom are better served by a specialist match than a generic will writing service.',
  },

  chelsea: {
    heroHeading: 'Will Writing and Estate Planning in Chelsea',
    heroParagraph: 'Chelsea estates frequently include art collections, antiques, business interests, and the complications of divorce in an affluent area. Standard will templates don\'t handle chattels, business succession, or post-divorce provisions well. Our specialists do.',
    introHeading: 'Art, Business, and Family Complexity in SW3',
    introParagraphs: [
      'Chelsea\'s estate planning needs are shaped by two distinctive features: the prevalence of valuable personal property — art, antiques, jewellery, wine — that requires specific will provisions, and the high rate of relationship change among affluent residents that means wills frequently need updating after divorce or remarriage.',
      'Art and chattels provisions in wills are often handled poorly by generalist will writers. Who gets a specific painting, how collections should be divided, whether items should be valued and distributed equally or left to a single beneficiary — these require careful drafting that goes beyond standard residuary estate clauses.',
      'Business owners in Chelsea\'s retail, hospitality, and creative sectors need succession provisions coordinated with shareholder agreements and employment contracts. The specialist we match you with will understand that personal and business estate planning must work together, not in isolation.',
    ],
    whySpecialistMatters: 'If your estate includes valuable personal property, business interests, or the aftermath of a divorce, a will needs to address these explicitly. Generalist will writers often miss the provisions that matter most for Chelsea-type estates.',
    clientProfile: {
      heading: 'Who We Match in Chelsea',
      points: [
        'Art and antique collectors needing specific chattels provisions',
        'Business owners requiring succession planning coordinated with their professional arrangements',
        'Divorced individuals needing wills that work with existing court orders',
        'Elderly residents approaching or in premium care settings who need both LPAs and updated wills',
        'International couples where one partner\'s home jurisdiction creates inheritance complications',
        'Couples in second marriages with children from previous relationships on both sides',
      ],
    },
    commonTriggers: [
      'Acquisition of significant art, antiques, or collectibles requiring will provisions',
      'Divorce finalised — previous will almost certainly needs complete replacement',
      'Business sale or acquisition creating new estate planning requirements',
      'Care planning discussions for an ageing parent or partner',
      'Second marriage requiring careful provision for all beneficiaries',
    ],
    localContext: 'Chelsea, Fulham, Battersea, South Kensington, Pimlico, and the Sloane Square area share an affluent residential character with distinctive estate planning needs around personal property, business interests, and complex family structures that require specialist handling.',
  },

  hampstead: {
    heroHeading: 'Will Writing and Estate Planning in Hampstead',
    heroParagraph: 'Hampstead estates combine significant period property wealth with intellectual and cultural assets — literary estates, academic IP, and long-held family homes that have become unexpectedly complex. Our specialists understand both the financial and cultural dimensions of estate planning here.',
    introHeading: 'Property Wealth, Intellectual Legacy, and Community in NW3',
    introParagraphs: [
      'Hampstead has one of the most distinctive estate profiles in London. Long-term residents in period properties have accumulated enormous equity without necessarily feeling wealthy — homes purchased for £80,000 in the 1970s now worth £2 million or more. The IHT exposure is significant and often underappreciated until it is almost too late to plan.',
      'The intellectual and cultural character of Hampstead, Belsize Park, and the Heath-edge villages creates estate planning needs that generic services miss entirely. Literary executorship — managing the estates of writers, academics, and artists — requires specialist knowledge. IP in academic work, royalty streams from published writing, and archive provisions all need careful drafting.',
      'The Jewish community in nearby Golders Green and Finchley, and the strong intergenerational planning culture that accompanies it, means our specialists must be comfortable with both the cultural expectations and the legal requirements that govern will writing for this community.',
    ],
    whySpecialistMatters: 'A Hampstead estate almost always involves both substantial property wealth and some form of intellectual or cultural legacy. The specialist who handles your will needs to understand both — and know when you need a literary executor as well as a financial one.',
    clientProfile: {
      heading: 'Who We Match in Hampstead',
      points: [
        'Long-term residents in period properties with significant accumulated equity',
        'Writers, academics, and cultural professionals with IP and archive estates',
        'Jewish community families in Golders Green and Finchley with intergenerational planning needs',
        'Elderly residents who need LPAs before capacity becomes an issue',
        'Widows and widowers whose circumstances have changed since their existing wills were made',
        'Academic staff from nearby universities with international pension and IP considerations',
      ],
    },
    commonTriggers: [
      'Long-held property reassessed for IHT purposes — often much higher than expected',
      'Publication of significant work creating an ongoing royalty and rights estate',
      'Bereavement of a spouse prompting will review',
      'Retirement triggering pension nomination and estate review',
      'Family member needing an LPA urgently due to declining health',
    ],
    localContext: 'Hampstead, Belsize Park, Golders Green, West Hampstead, Finchley, Highgate, and Swiss Cottage form a cluster of distinctive north London neighbourhoods with shared estate planning characteristics: substantial period property wealth, cultural and intellectual legacy considerations, and a community that understands why proper estate planning matters.',
  },

  islington: {
    heroHeading: 'Will Writing and Estate Planning in Islington',
    heroParagraph: 'Islington\'s young professional population creates urgent demand for first wills — particularly among cohabiting couples who have no inheritance rights under intestacy rules regardless of how long they have lived together. If you bought a property or started a family here, this is the conversation you need to have.',
    introHeading: 'First Wills, Cohabitation Protection, and Growing Estates in N1',
    introParagraphs: [
      'The single most common call we receive from Islington is from cohabiting couples who have just bought a property together and realised that if one of them dies without a will, the other has no automatic right to the home or the estate — regardless of the length of the relationship. The Intestacy Rules simply do not recognise unmarried partners.',
      'Islington\'s property values mean that first-home buyers are taking on significant financial commitments — and often have life insurance, pension death benefits, and savings alongside the property. A first will coordinates all of these into a coherent plan rather than leaving them to default rules that may produce the wrong outcome.',
      'Beyond cohabitation, the young professional demographic here has a second urgent planning need: guardianship. Parents with young children who die without a will leave the question of who raises their children to a court rather than a chosen guardian. The specialist we match you with will ensure your will includes this provision from day one.',
    ],
    whySpecialistMatters: 'In Islington, the most urgent need is usually a first will for a cohabiting couple after a property purchase. Getting this right — covering the property, life insurance, pension nominations, and guardianship in one coherent plan — requires a specialist, not a generic online template.',
    clientProfile: {
      heading: 'Who We Match in Islington',
      points: [
        'Cohabiting couples who have purchased property together without wills in place',
        'New parents who need guardianship provisions for young children',
        'Young professionals with growing pension and investment portfolios',
        'First-time buyers who triggered a will need with their mortgage application',
        'Small business owners who need personal and business succession coordinated',
        'Individuals who need to ensure a partner is protected if they die before marriage',
      ],
    },
    commonTriggers: [
      'Property purchase — the mortgage application often prompts the conversation',
      'Positive pregnancy test or birth of first child',
      'A friend or peer\'s unexpected death or illness',
      'Starting a business with co-founders who have succession discussions',
      'First significant salary increase creating estate planning awareness',
    ],
    localContext: 'Islington, Angel, Canonbury, Barnsbury, Highbury, and the N1 corridor share the same young professional demographic and the same urgent need: first wills for people who are building assets and starting families without the legal protection that comes from a properly drafted will.',
  },

  hackney: {
    heroHeading: 'Will Writing and Estate Planning in Hackney',
    heroParagraph: 'Hackney\'s creative and diverse community has estate planning needs that generic will writing services handle poorly: freelance business protection, Sharia-compliant options, cohabitation wills for unmarried parents, and culturally sensitive planning for multicultural families.',
    introHeading: 'Freelancers, Diverse Families, and Specialist Planning in E8',
    introParagraphs: [
      'Hackney\'s creative economy means a significant proportion of residents are self-employed, with income from freelance work, creative IP, and small business goodwill that a standard will does not automatically protect. The specialist we match you with will understand how to structure provisions around business interests that may not have a clear market value.',
      'The borough\'s diversity — one of London\'s most genuinely multicultural — creates demand for will specialists who are comfortable with Sharia-compliant inheritance provisions, Orthodox Jewish estate planning, and culturally sensitive drafting for families where inheritance expectations may differ from English default rules.',
      'Hackney also has one of London\'s highest concentrations of cohabiting couples — particularly in Shoreditch, London Fields, and Dalston — for whom the absence of a will is a serious financial risk. The area\'s rapidly appreciated property means the stakes of dying intestate are higher than ever.',
    ],
    whySpecialistMatters: 'A Hackney estate is rarely straightforward. Freelance income, creative IP, cohabitation, multicultural family structures, and rapidly appreciated property all require specific provisions that a generalist or online template will get wrong.',
    clientProfile: {
      heading: 'Who We Match in Hackney',
      points: [
        'Creative freelancers whose business interests and IP need protecting',
        'Cohabiting couples without wills facing serious financial risk if one partner dies',
        'Muslim families wanting Sharia-compliant inheritance provisions within English law',
        'Multicultural families needing culturally sensitive drafting',
        'Tech startup founders coordinating business succession with personal planning',
        'Young parents with children who need guardianship provisions urgently',
      ],
    },
    commonTriggers: [
      'Cohabiting partner dies without a will and the surviving partner faces losing the home',
      'Birth of a child prompting serious thought about guardianship for the first time',
      'Business becoming valuable enough that its fate on death matters',
      'Religious observation prompting consideration of Sharia-compliant distribution',
      'Property purchase with a partner triggering the will conversation',
    ],
    localContext: 'Hackney, Dalston, Shoreditch, Hoxton, Stoke Newington, Clapton, London Fields, and Bethnal Green share a creative and diverse character that demands estate planning specialists who are comfortable with non-standard family structures, cultural requirements, and business interests outside conventional sectors.',
  },

  'canary-wharf': {
    heroHeading: 'Will Writing and Estate Planning in Canary Wharf',
    heroParagraph: 'Canary Wharf professionals accumulate substantial estates faster than almost any other London demographic — through bonuses, share options, pension contributions, and property. Most reach IHT thresholds well before they expect to. Our specialists understand City compensation structures and international backgrounds.',
    introHeading: 'High-Earning Estates and International Dimensions in E14',
    introParagraphs: [
      'A banking professional in their mid-thirties in Canary Wharf may hold: a flat worth £700,000, a pension pot of £200,000 growing rapidly, share options vesting over several years, a significant cash ISA, and deferred bonus arrangements with their employer. Without a will, none of this is distributed the way they would want — and none of it is structured to minimise the tax liability.',
      'The international dimension compounds this. Many E14 residents have assets or family obligations in other countries — the US, continental Europe, South Asia, the Middle East. A UK will needs to either address these directly or be coordinated with wills in other jurisdictions to ensure the global estate plan is coherent.',
      'Share options and deferred compensation require specific will provisions. The fate of unvested options, the treatment of deferred bonuses, and whether carried interest passes to beneficiaries in the way the holder expects — these are not covered by standard will templates and require a specialist who understands financial sector compensation.',
    ],
    whySpecialistMatters: 'City compensation estates involve instruments — options, deferred bonuses, carried interest — that generic will writers do not know how to address. The specialist we match you with will have worked with finance professionals and will understand your compensation structure.',
    clientProfile: {
      heading: 'Who We Match in Canary Wharf',
      points: [
        'Finance professionals with share options, deferred bonuses, and significant pensions',
        'International professionals with assets or family obligations in multiple countries',
        'High-earning couples who have reached IHT thresholds without realising it',
        'New-build apartment buyers who need wills alongside their property purchase',
        'Professionals who travel frequently and need LPAs in place before extended absence',
        'Young professionals with complex employer benefit arrangements to coordinate',
      ],
    },
    commonTriggers: [
      'Annual bonus or significant vesting event creating awareness of estate value',
      'Property purchase in Canary Wharf or Docklands',
      'Marriage or long-term relationship becoming serious',
      'International move or extended work abroad prompting global estate review',
      'Colleague or friend\'s illness triggering urgent action on deferred planning',
    ],
    localContext: 'Canary Wharf, Poplar, Limehouse, Wapping, Isle of Dogs, and the surrounding Docklands developments share a high-earning professional character with distinctive needs around financial sector compensation, international family backgrounds, and new-build property ownership.',
  },

  clapham: {
    heroHeading: 'Will Writing and Estate Planning in Clapham',
    heroParagraph: 'Clapham is London\'s ground zero for first wills. Young professional couples buy property, have children, and realise they need a will — often all within a few years. The most urgent issue is almost always protecting a cohabiting partner who has no inheritance rights under the Intestacy Rules.',
    introHeading: 'First Wills for Clapham\'s Young Professionals',
    introParagraphs: [
      'Two events trigger almost every first will in Clapham: buying a property and having a baby. The first creates a situation where an unmarried partner could lose the home if their partner dies without a will. The second creates the urgent need for guardianship provisions — without a will, a court decides who raises your children.',
      'Clapham\'s professional demographic means most first wills here are not simple documents. Life insurance policies need to be written in trust so the payout doesn\'t increase the estate and create an IHT liability. Pension nominations need to be checked. The mortgage protection policy needs to be reviewed. Our specialists coordinate all of this in one conversation.',
      'The speed of life in Clapham — busy careers, young children, active social lives — means estate planning gets deferred. Our matching service is designed to make the process as efficient as possible: you share your situation, we find the right specialist, and the specialist comes to you rather than making you fit around them.',
    ],
    whySpecialistMatters: 'A first will for a young professional couple in Clapham is more complex than it looks. Life insurance trusts, pension nominations, guardianship provisions, and property protection all need to be coordinated — not addressed in isolation.',
    clientProfile: {
      heading: 'Who We Match in Clapham',
      points: [
        'Cohabiting couples who have bought property without wills in place',
        'New parents who urgently need guardianship provisions',
        'Married couples with growing assets who have never got around to making wills',
        'Single professionals with parents, siblings, or partners they want to protect',
        'Young professionals with life insurance policies that need to be in trust',
        'Couples preparing for a second child who want to make sure everything is in order',
      ],
    },
    commonTriggers: [
      'Mortgage offer — the broker or solicitor asks if you have a will',
      'Birth of first or second child — the urgency becomes very real',
      'Friend or colleague\'s death or serious illness at a young age',
      'Life insurance policy purchase — the insurer asks who the beneficiary is',
      'Marriage — updating beneficiaries and creating coordinated wills',
    ],
    localContext: 'Clapham, Brixton, Stockwell, Balham, Tooting, Streatham, and the surrounding SW4 area share the same young professional character and the same urgent need for first wills that protect partners and children in a way the Intestacy Rules simply do not.',
  },

  greenwich: {
    heroHeading: 'Will Writing and Estate Planning in Greenwich',
    heroParagraph: 'Greenwich combines historic family homes with growing new-build development, creating a range of estate planning needs from first wills for young families to IHT planning for long-term residents whose period properties have appreciated enormously.',
    introHeading: 'Family Estates Across Historic and New Greenwich in SE10',
    introParagraphs: [
      'Greenwich\'s estate planning market divides into two groups. Long-term residents in the historic properties of SE10 and Blackheath have been here for decades and have accumulated substantial equity — often without taking any steps to manage the inheritance tax exposure this creates. Their children\'s inheritance is at risk.',
      'The newer population in riverside developments and the expanding commuter zones around the DLR are young families who need first wills — triggered by property purchases, new children, and the sudden realisation that without a will, their partner has no guaranteed right to stay in the home they share.',
      'Maritime heritage adds an interesting dimension: some long-term Greenwich families have pension arrangements linked to the maritime industry, and the local NHS presence at Queen Elizabeth Hospital means a significant number of healthcare professional estates to serve. Both groups have specific pension and employment estate considerations.',
    ],
    whySpecialistMatters: 'Greenwich estates range from first-will needs for young riverside apartment buyers to substantial IHT planning for long-term Blackheath homeowners. The matching matters — a specialist suited to one is not necessarily suited to the other.',
    clientProfile: {
      heading: 'Who We Match in Greenwich',
      points: [
        'Long-term residents in period homes with significant accumulated equity and IHT exposure',
        'Young families in riverside developments who need first wills and guardianship provisions',
        'NHS healthcare professionals with specific employment pension arrangements',
        'Maritime and naval heritage families with traditional estate structures',
        'Couples with properties in multiple south-east London locations',
        'Bereaved spouses who need will updates following the death of a partner',
      ],
    },
    commonTriggers: [
      'Property reassessment revealing IHT exposure that was not previously considered',
      'Birth of a child in a household without current, valid wills',
      'Retirement from the NHS or maritime sector triggering pension review',
      'Bereavement of a parent prompting review of own arrangements',
      'Marriage or significant relationship change requiring updated provisions',
    ],
    localContext: 'Greenwich, Blackheath, Lewisham, Deptford, New Cross, Peckham, and the surrounding SE10 area have varied estate planning needs that span the full range from first-time buyers to established families — all requiring specialist matching rather than generic services.',
  },

  richmond: {
    heroHeading: 'Will Writing and Estate Planning in Richmond',
    heroParagraph: 'Richmond\'s established families have accumulated substantial multi-asset estates through decades of professional careers and property appreciation. The focus here is not first wills but comprehensive estate planning — IHT mitigation, trust structures, LPAs, and coordinating wealth across property, pensions, and investments.',
    introHeading: 'Comprehensive Estate Planning for Established Richmond Families',
    introParagraphs: [
      'A typical Richmond client has lived in the area for fifteen to twenty years, works in a senior professional role, owns a property now worth considerably more than they paid, has a substantial defined contribution pension, and perhaps an ISA portfolio that has grown steadily over the years. Their combined estate may be £2 million or more — well above the IHT threshold — and their existing will, if they have one, is almost certainly out of date.',
      'The planning challenge in TW9 is not creating a will from scratch but creating a comprehensive estate plan that coordinates all of these elements: the will, the LPAs, the pension nominations, the trust structure, the gifting strategy. Our specialists approach Richmond clients with a full-estate review rather than treating the will in isolation.',
      'Wimbledon, Putney, and Twickenham bring additional school-catchment premium to already significant property values, and the retiring professional demographic in all of these areas shares a common characteristic: they have built wealth steadily over careers and now need to ensure it transfers efficiently to the next generation.',
    ],
    whySpecialistMatters: 'A Richmond estate almost always requires more than a will update. The specialist we match you with will approach your situation as a comprehensive estate planning exercise — covering trust structures, IHT strategy, pension nominations, and LPAs, not just the will document.',
    clientProfile: {
      heading: 'Who We Match in Richmond',
      points: [
        'Established professionals with multi-asset estates requiring comprehensive IHT planning',
        'Retiring couples who need to ensure their estate transfers efficiently to children',
        'Families with ageing parents who need LPAs before capacity becomes an issue',
        'Business owners approaching retirement who need personal and business succession coordinated',
        'Families with holiday or investment properties alongside the family home',
        'Individuals with existing wills that predate significant changes in circumstances or tax law',
      ],
    },
    commonTriggers: [
      'Retirement or approaching retirement triggering estate review',
      'Property valuation revealing a much larger estate than assumed',
      'Parent\'s death revealing the consequences of inadequate planning',
      'Business sale or major asset event requiring complete plan review',
      'Pension reaching significant value requiring coordination with estate plan',
    ],
    localContext: 'Richmond, Wimbledon, Putney, Twickenham, Kew, Ham, and East Sheen form a cluster of affluent south-west London communities where the planning challenge is almost always comprehensive estate management for established families rather than first-will creation.',
  },

  camden: {
    heroHeading: 'Will Writing and Estate Planning in Camden',
    heroParagraph: 'Camden\'s estate planning market spans the full range — from complex IHT planning for Primrose Hill residents to royalty and IP succession for the music industry community, to basic wills for elderly council tenants who want to ensure their possessions go to the right people.',
    introHeading: 'From Primrose Hill Portfolios to Music Industry IP in NW1',
    introParagraphs: [
      'Camden\'s extraordinary diversity creates a genuine matching challenge. A Primrose Hill resident with a £3 million home and a significant investment portfolio needs comprehensive IHT planning and trust structuring. A music producer in Kentish Town needs a will that handles royalty income, master recording rights, and publishing rights alongside personal assets. An elderly council tenant in Gospel Oak needs a simple, affordable will that ensures their possessions and savings go to their children rather than the state.',
      'The music and entertainment industry presence in Camden creates estate planning needs that genuinely require specialist knowledge. Royalties continue after death — sometimes for seventy years. Master recordings, publishing rights, and performance rights all need specific succession provisions. Generalist will writers typically miss this entirely.',
      'Primrose Hill\'s celebrity and affluent professional concentration creates a different but equally specialist need: clients who may want confidential estate planning, complex trust structures, and provisions for blended families that do not become the subject of public knowledge.',
    ],
    whySpecialistMatters: 'Camden\'s range is too wide for a single approach. The matching matters here more than almost anywhere — a music industry estate and a Primrose Hill property portfolio need entirely different specialist expertise.',
    clientProfile: {
      heading: 'Who We Match in Camden',
      points: [
        'Primrose Hill affluent families with complex IHT planning needs',
        'Music and entertainment professionals with royalty and IP succession requirements',
        'Elderly residents who need straightforward wills to ensure basic provision',
        'Market traders and hospitality business owners needing succession planning',
        'Academic and cultural professionals from nearby universities and institutions',
        'Young professionals in Kentish Town and Chalk Farm buying their first properties',
      ],
    },
    commonTriggers: [
      'Royalty income growing to a point where succession provisions matter',
      'Primrose Hill property reassessment revealing serious IHT exposure',
      'Elderly parent\'s decline prompting urgent action on their and one\'s own planning',
      'Business acquisition or sale changing the estate picture significantly',
      'First property purchase in Kentish Town or Chalk Farm',
    ],
    localContext: 'Camden, Primrose Hill, Kentish Town, Chalk Farm, Gospel Oak, Belsize Village, and the NW1 corridor cover an extraordinary demographic range — from one of London\'s wealthiest postcodes to social housing estates — requiring specialists matched to the specific situation rather than a one-size approach.',
  },

  shoreditch: {
    heroHeading: 'Will Writing and Estate Planning in Shoreditch',
    heroParagraph: 'Shoreditch estates are often dominated by business interests rather than property. Startup equity, vesting schedules, agency goodwill, and digital assets need specific will provisions that most generalists don\'t know how to handle. Our tech-aware specialists do.',
    introHeading: 'Startup Equity, Creative IP, and Business Succession in EC2A',
    introParagraphs: [
      'The most common estate planning scenario in Shoreditch is a founder or co-founder whose company is worth more than their personal assets — often significantly more. What happens to startup equity when a shareholder dies? Is there a shareholders\' agreement with drag-along provisions? Are unvested options lost? These questions need answering in both the shareholder agreement and the will.',
      'Digital assets add another layer of complexity. Cryptocurrency holdings, domain portfolios, social media accounts with commercial value, and digital creative IP all need provisions in the will — and require an executor who understands how to access and manage them. Our specialists will prompt you to address these explicitly.',
      'The Bangladeshi community in adjacent Whitechapel and Spitalfields, and the Sharia-compliant will demand this creates, sits alongside the tech community in EC2A. Both need specialist matching — the creative founder and the devout Muslim businessman both deserve a specialist who understands their specific situation.',
    ],
    whySpecialistMatters: 'A Shoreditch estate usually has business complexity that a standard will handles badly. Startup equity, vesting schedules, digital assets, and shareholders\' agreement coordination all require a specialist who works with tech and creative founders regularly.',
    clientProfile: {
      heading: 'Who We Match in Shoreditch',
      points: [
        'Startup founders whose company equity represents a significant portion of their estate',
        'Agency owners who need business succession coordinated with personal estate planning',
        'Digital entrepreneurs with cryptocurrency, domains, and digital asset portfolios',
        'Creative professionals with IP portfolios including design, software, and content',
        'Muslim business owners wanting Sharia-compliant provisions within English law',
        'Cohabiting couples in a market where property purchases are often shared',
      ],
    },
    commonTriggers: [
      'Investment round valuing the business and making its succession suddenly important',
      'Shareholder agreement discussions that prompt consideration of personal will',
      'Significant cryptocurrency or digital asset accumulation',
      'Co-founder\'s illness or death making business succession planning urgent',
      'Property purchase with a partner in an expensive tech-area market',
    ],
    localContext: 'Shoreditch, Old Street, Hoxton, Clerkenwell, Farringdon, Spitalfields, Whitechapel, and the EC1/EC2 tech corridor share a combination of startup business complexity, creative IP, and community cultural diversity that requires specialist matching for each distinct client type.',
  },

  battersea: {
    heroHeading: 'Will Writing and Estate Planning in Battersea',
    heroParagraph: 'Battersea\'s transformation through Nine Elms has created a new generation of high-spec apartment owners who need first wills alongside their property purchase. The area\'s diverse community — including a significant Portuguese presence — has culturally specific estate planning needs alongside the new arrivals.',
    introHeading: 'New-Build Buyers and Community Diversity in SW11',
    introParagraphs: [
      'Nine Elms has been one of London\'s most significant residential developments of the past decade, attracting international buyers, young professionals, and families who need estate planning that addresses the specific ownership structures of high-spec new-build apartments. Shared ownership, help-to-buy, and standard leasehold all have different will implications.',
      'The established Battersea community south of the new developments has a different profile: settled families who have watched property values grow, Portuguese and Latin American residents who need wills addressing overseas family obligations, and an LGBTQ+ community centred around Vauxhall who need estate planning that properly protects non-traditional family structures.',
      'Wandsworth\'s strong school catchment has also driven significant family estate planning demand, with parents buying specifically for the school run creating estates where the family home represents the majority of wealth — and where protecting the surviving parent\'s ability to stay in that home is the primary planning objective.',
    ],
    whySpecialistMatters: 'Battersea\'s range of ownership structures — from Nine Elms leasehold to established Victorian terraces to Portuguese community homes — requires specialists who match the client\'s actual situation rather than applying a generic approach.',
    clientProfile: {
      heading: 'Who We Match in Battersea',
      points: [
        'Nine Elms new-build buyers needing first wills alongside their purchase',
        'International buyers whose ownership structures need specific will provisions',
        'Portuguese and Latin American residents with overseas family obligations',
        'LGBTQ+ couples and families needing wills that protect non-biological relationships',
        'School-catchment families where the home represents the majority of wealth',
        'Young professionals who have bought in Battersea in the past five years',
      ],
    },
    commonTriggers: [
      'New-build apartment purchase — often alongside mortgage and conveyancing',
      'International family obligation arising after a death in the home country',
      'Same-sex marriage or civil partnership prompting comprehensive planning',
      'Children enrolling in Wandsworth schools and the family settling for the long term',
      'Property value growth making IHT planning newly relevant',
    ],
    localContext: 'Battersea, Nine Elms, Wandsworth, Clapham Junction, Vauxhall, Queenstown Road, and South Lambeth share a mix of new development and established community that creates diverse estate planning needs requiring specialist matching.',
  },

  dulwich: {
    heroHeading: 'Will Writing and Estate Planning in Dulwich',
    heroParagraph: 'Dulwich\'s school reputation has driven property values to the point where most family homes here exceed IHT thresholds. The settled, family-oriented character of SE21 means that estate planning here is about comprehensive family protection — not just a will, but trusts, LPAs, and a strategy that works across generations.',
    introHeading: 'School Premium, Family Wealth, and Cultural Assets in SE21',
    introParagraphs: [
      'Dulwich\'s school catchment premium has transformed the estate profile of families who bought a decade or more ago. A home purchased for £400,000 in 2010 may now be worth £900,000 or more — and many families simply have not updated their estate planning to reflect this change. Combined with pensions and savings, many families face IHT liability they have not planned for.',
      'The Dulwich Picture Gallery and the area\'s cultural character create a distinctive dimension to some estates. Art collections, Gallery connections, and the creative professional community add valuation and succession complexity. Specialist provisions for cultural assets — who curates a collection, how donations to institutions are structured — require careful drafting.',
      'The stable, long-term character of Dulwich means many residents have elderly parents whose own planning is also needed. The specialist we match you with will often be asked to handle two generations of planning simultaneously — or to refer a parent to an appropriate LPA specialist while working on the primary client\'s will and estate plan.',
    ],
    whySpecialistMatters: 'Dulwich estates have typically outgrown the wills that originally covered them. The specialist we match you with will conduct a full estate review to identify the gap between the existing plan and what the current estate actually requires.',
    clientProfile: {
      heading: 'Who We Match in Dulwich',
      points: [
        'Families whose property has appreciated significantly since their last will review',
        'School-focused families where the home is the dominant asset and needs protecting',
        'Art collectors and Gallery-connected individuals with cultural estate provisions',
        'Elderly residents who need LPAs and will updates as circumstances change',
        'Professionals approaching retirement whose estates have grown substantially',
        'Second-generation Dulwich families managing intergenerational wealth transfer',
      ],
    },
    commonTriggers: [
      'School admissions driving a property purchase and triggering will review',
      'Parent\'s death revealing the consequences of inadequate planning',
      'Pension reaching maturity or significant value requiring coordination',
      'Property valuation revealing unexpected IHT exposure',
      'Retirement planning conversations that surface the estate planning gap',
    ],
    localContext: 'Dulwich, East Dulwich, Herne Hill, Crystal Palace, Forest Hill, Sydenham, Gipsy Hill, and West Norwood form a cluster of south-east London neighbourhoods with a family-oriented, school-driven character where estate planning needs tend to cluster around property appreciation, family protection, and intergenerational wealth transfer.',
  },

  stratford: {
    heroHeading: 'Will Writing and Estate Planning in Stratford',
    heroParagraph: 'Stratford\'s Olympic regeneration has attracted a young, diverse population of first-time buyers, shared ownership purchasers, and international families. Many residents have complex needs — overseas family obligations, culturally specific inheritance expectations, and new-build ownership structures that require specialist will provisions.',
    introHeading: 'Regeneration, Diversity, and First Wills in E15',
    introParagraphs: [
      'The Olympic Village and the surrounding developments have created a distinctive demographic: young professionals and families who have bought through shared ownership or Help to Buy schemes, often as their first property. Both schemes have specific implications for how the property passes on death — implications that a standard will needs to address explicitly.',
      'Stratford\'s international community reflects east London\'s diversity: Bangladeshi families with obligations to property and relatives in Bangladesh, West African families coordinating inheritance with home-country expectations, and Eastern European families needing wills that work alongside provisions in their home countries. The matching matters here because these situations require specialists with specific cultural and international experience.',
      'The area\'s rapid development means property values have grown significantly — early purchasers in the Olympic Village may have estates worth substantially more than they realise, and first-generation property owners who have never made wills may be sitting on assets that would pass in entirely the wrong direction under the Intestacy Rules.',
    ],
    whySpecialistMatters: 'Stratford\'s combination of shared ownership, international family structures, and community diversity means generic will writing services are likely to miss the specific provisions that matter most. Specialist matching is essential.',
    clientProfile: {
      heading: 'Who We Match in Stratford',
      points: [
        'Shared ownership and Help to Buy purchasers who need wills addressing these structures',
        'Bangladeshi families needing Sharia-compliant options and Bangladesh property provisions',
        'West African families with culturally specific inheritance expectations and overseas property',
        'Eastern European residents who need coordinated UK and home-country wills',
        'Young families in Olympic Village and surrounding developments',
        'First-generation property owners whose assets would pass incorrectly under intestacy',
      ],
    },
    commonTriggers: [
      'Shared ownership or Help to Buy purchase — ownership structure must be in the will',
      'Death of a parent in the home country revealing the need for a UK will',
      'Birth of a child in a household without any current will',
      'Religious observation or family expectation making Sharia compliance important',
      'Olympic Village property appreciating significantly and making the estate valuable',
    ],
    localContext: 'Stratford, West Ham, Bow, Forest Gate, Leyton, Leytonstone, Manor Park, and Plaistow form an east London cluster where regeneration, diversity, and first-time buying create estate planning needs that are genuinely varied and require specialist matching rather than generic provision.',
  },
};

export function getAreaContent(slug: string): AreaContent | undefined {
  return areaContent[slug];
}
