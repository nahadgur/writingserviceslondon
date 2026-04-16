// data/site.ts
export const siteConfig = {
  name: 'Will Writing Services London',
  tagline: 'Connect with Expert Will Writers and Estate Planning Specialists in London',
  url: 'https://www.willwritingserviceslondon.co.uk',
  description: 'Free matching service connecting London families with vetted will writers and estate planning specialists. Single wills, mirror wills, LPAs, trust planning and probate support — matched to your situation within 24 hours.',
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
  { icon: 'Award',         title: 'Vetted specialists only',       description: 'Every will writer and estate planning specialist in our network is checked for qualifications, professional memberships, and insurance before joining.' },
  { icon: 'ShieldCheck',   title: 'Legally compliant documents',   description: 'All matched professionals produce legally valid, properly witnessed documents that comply with the Wills Act 1837 and current estate planning legislation.' },
  { icon: 'UserCheck',     title: 'Matched to your situation',     description: 'We read your circumstances and connect you with specialists who have experience with your specific type of estate and family situation.' },
  { icon: 'PoundSterling', title: 'Transparent fixed fees',        description: 'Clear upfront quotes before committing. No hidden fees, no surprise charges — honest pricing from London\'s best will writing professionals.' },
];

export const trustBadges = TRUST_BADGES;

export const FAQS_HOME = [
  {
    question: 'What happens if I die without a will in London?',
    answer: 'You die intestate, and the Intestacy Rules distribute your estate — not your wishes. Unmarried partners receive nothing regardless of how long you\'ve lived together. Children from previous relationships may be excluded. Your home could pass to the wrong person. A will is the only mechanism that ensures your estate goes where you intend.',
  },
  {
    question: 'How does the Will Writing Services London matching service work?',
    answer: 'Tell us your email, phone number, and what type of service you need. We connect you with will writers from our vetted London network who have proven experience with exactly that kind of estate. The matching service is completely free. Most clients are introduced within 24 hours.',
  },
  {
    question: 'How much does a will cost in London?',
    answer: 'A professionally drafted single will in London typically costs £150–£350. Mirror wills for couples range from £250–£550 for the pair. Costs depend on complexity — straightforward wills sit at the lower end, while those involving trusts, business assets, or blended families require more detailed drafting. All specialists provide fixed-fee quotes before any work begins.',
  },
  {
    question: 'How quickly can I be matched with a will writer in London?',
    answer: 'Most clients are matched within 24 hours. For urgent situations — serious illness, imminent surgery, or time-sensitive estate matters — we can often make same-day introductions.',
  },
  {
    question: 'Is the matching service genuinely free?',
    answer: 'Yes, completely free for clients. You only pay the will writer or specialist directly for their work once introduced and agreed. We are paid by the professionals in our network — there is no referral fee charged to you at any point.',
  },
  {
    question: 'Do I need a solicitor or a specialist will writer?',
    answer: 'Both can produce valid wills. Solicitors are regulated by the SRA and carry professional indemnity insurance. Specialist will writers may hold memberships such as the Society of Will Writers. For complex estates involving trusts, business assets, or international property, a solicitor is generally advisable. We\'ll recommend the right fit based on your situation.',
  },
];

export const FAQS_SERVICES = [
  {
    question: 'What will writing and estate planning services do London specialists provide?',
    answer: 'Our London network covers: single wills, mirror wills for couples, lasting powers of attorney (both property/financial and health/welfare), protective property trusts, discretionary trusts, comprehensive estate planning reviews, and probate support.',
  },
  {
    question: 'Can I work with a will writer remotely?',
    answer: 'Initial consultations and document review can often be handled remotely. For the formal signing and witnessing of wills and LPAs, a professional visit or notarised process is usually required. We can match you with specialists who offer home visits across London.',
  },
  {
    question: 'How do I know my documents will be legally valid?',
    answer: 'All professionals in our network produce documents compliant with the Wills Act 1837 and current legislation. They ensure proper execution, witnessing, and attestation.',
  },
];

export const FAQS_LOCATION = [
  {
    question: 'Do you cover all areas of London?',
    answer: 'Yes. Our network includes will writers and estate planning specialists across all London areas. We serve 15 major area hubs, each covering multiple surrounding neighbourhoods. Many specialists offer home visits, making location within London rarely a limiting factor.',
  },
  {
    question: 'Why use a London-based will writer rather than an online service?',
    answer: 'London specialists understand local property values, estate complexity, and the specific needs of London residents — including complex assets, business interests, or properties in multiple locations. Face-to-face advice ensures your specific circumstances are properly understood before documents are drafted.',
  },
  {
    question: 'Can you match specialists for ongoing estate planning reviews?',
    answer: 'Yes. Estate planning is not a one-time exercise. We can match you with specialists who offer ongoing review arrangements and update services as your situation evolves.',
  },
];
