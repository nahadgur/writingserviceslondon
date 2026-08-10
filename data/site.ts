// data/site.ts
export const siteConfig = {
  name: 'Will Writing Services London',
  tagline: 'Wills, Lasting Powers of Attorney and Estate Planning Across London',
  url: 'https://www.willwritingserviceslondon.co.uk',
  description: 'Will writing service for London families. Single wills, mirror wills, lasting powers of attorney, trust planning and probate support. Fixed fees from £150, home visits across every London borough, urgent appointments when time is short.',
};

// Real testimonials only — do not add placeholder copy here.
// Collect genuine client feedback and add it in this format.
export const TESTIMONIALS: {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  text: string;
}[] = [];

export const testimonials = TESTIMONIALS;

export const TRUST_BADGES = [
  { icon: 'PoundSterling', title: 'Fixed Fees, Quoted Upfront',     description: 'You get the full price before any work starts. No hourly billing, no surprise charges, and no fee for the initial conversation about what you need.' },
  { icon: 'ShieldCheck',   title: 'Legally Compliant Documents',    description: 'Every will we draft complies with section 9 of the Wills Act 1837, and we take you through the signing and witnessing so the document holds up when it matters.' },
  { icon: 'Award',         title: 'Home Visits Across London',      description: 'We come to you, in any London borough. Evening and weekend appointments are available, and we visit hospitals, hospices and care homes where the situation calls for it.' },
  { icon: 'UserCheck',     title: 'Urgent Wills When Time Is Short', description: 'Where there is a diagnosis, imminent surgery or a sudden decline, we prioritise the appointment and can usually draft and complete a will within a day.' },
];

export const trustBadges = TRUST_BADGES;

export const FAQS_HOME = [
  {
    question: 'What happens if I die without a will in London?',
    answer: 'You die intestate, and the Intestacy Rules distribute your estate — not your wishes. Unmarried partners receive nothing regardless of how long you\'ve lived together. Children from previous relationships may be excluded. Your home could pass to the wrong person. A will is the only mechanism that ensures your estate goes where you intend.',
  },
  {
    question: 'How does the process work?',
    answer: 'You tell us your situation and we arrange a consultation, at your home or by phone or video, whichever suits. We take your instructions, draft the will, and send it to you to read through and amend. Once you are happy with it we take you through the signing appointment, which has to happen in person with two witnesses present at the same time.',
  },
  {
    question: 'How much does a will cost in London?',
    answer: 'A single will costs £150–£350 and mirror wills for a couple range from £250–£550 for the pair. Costs depend on complexity — straightforward wills sit at the lower end, while those involving trusts, business assets, or blended families require more detailed drafting. You get a fixed-fee quote before any work begins.',
  },
  {
    question: 'How quickly can a will be written?',
    answer: 'Most wills are drafted within 3–7 working days of the consultation, and the whole process from first contact to a signed will usually takes one to two weeks. Where there is real urgency — a serious diagnosis, imminent surgery, or a sudden decline — we prioritise the appointment and can often draft and complete a will within a day.',
  },
  {
    question: 'Do you visit people at home or in hospital?',
    answer: 'Yes. We cover every London borough and most appointments happen at the client\'s home, including evenings and weekends. We also attend hospitals, hospices and care homes, which matters because the signing has to be done in person with two witnesses physically present.',
  },
  {
    question: 'Do I need a solicitor or a will writer?',
    answer: 'Both can produce a valid will. Solicitors are regulated by the SRA. Will writing itself is not a regulated activity in England and Wales, so the practical difference is experience and the complexity of your estate rather than the job title. For estates involving overseas property, contentious family situations, or substantial business assets, a solicitor is generally advisable, and we will tell you plainly when your situation calls for one.',
  },
];

export const FAQS_SERVICES = [
  {
    question: 'What will writing and estate planning services do you provide?',
    answer: 'Single wills, mirror wills for couples, lasting powers of attorney (both property and financial affairs, and health and welfare), protective property trusts, discretionary trusts, comprehensive estate planning reviews, and probate support.',
  },
  {
    question: 'Can the whole process be handled remotely?',
    answer: 'Consultations and document review can be done by phone or video. The signing cannot. Since the temporary video witnessing rules expired on 31 January 2024, every will in England and Wales must be signed with two witnesses physically present at the same time, so there is always one in-person appointment. We come to you for it.',
  },
  {
    question: 'How do I know my documents will be legally valid?',
    answer: 'Every document we draft complies with the Wills Act 1837 and current legislation, and we take you through execution, witnessing and attestation rather than leaving you to work it out. Getting the signing right is where most home-made wills fail.',
  },
];

export const FAQS_LOCATION = [
  {
    question: 'Do you cover all areas of London?',
    answer: 'Yes. We work across all London areas and serve 15 major area hubs, each covering multiple surrounding neighbourhoods. Because we offer home visits throughout the capital, where you live within London is rarely a limiting factor.',
  },
  {
    question: 'Why use a London will writer rather than an online service?',
    answer: 'London estates carry complications an online form does not ask about: high property values pushing estates over the inheritance tax threshold, leasehold and share-of-freehold arrangements, business interests, and property held in more than one country. A conversation about your actual circumstances catches those before the will is drafted, not afterwards.',
  },
  {
    question: 'Do you offer ongoing estate planning reviews?',
    answer: 'Yes. Estate planning is not a one-time exercise. Wills should be reviewed after marriage, divorce, births, deaths, property purchases, and significant changes in asset values, and we offer review and update arrangements as your situation changes.',
  },
];
