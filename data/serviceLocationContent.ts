// data/serviceLocationContent.ts
export const serviceLocationContent: Record<string, {
  intro: (city: string) => string[]; steps: (city: string) => string[]; whyPoints: (city: string) => string[];
}> = {
  "business-copywriting": {
    intro: (city) => [
      `Business copywriting in ${city} requires writers who understand the local commercial landscape and the audiences your business is trying to reach. Whether you need a website rewrite, sales collateral, or ongoing content, the right copywriter understands how to position your business for London's sophisticated buyers.`,
      `We match ${city} businesses with copywriters who have sector-specific experience, commercial track records, and the ability to work to the pace that London business demands.`
    ],
    steps: (city) => [
      `Tell us about your ${city} business, the copy you need, your target audience, and your objectives`,
      `We identify copywriters in our network with specific experience in your sector and format`,
      `Introductions made within 24 hours — review writer profiles and portfolio samples`,
      `Discovery conversation with your chosen writer to brief the project thoroughly`,
      `Copy drafted, reviewed, and refined through agreed revision rounds`,
      `Final copy delivered ready to use, with brand voice documentation for ongoing consistency`
    ],
    whyPoints: (city) => [
      `Writers with proven experience in ${city}'s key business sectors including finance, tech, law, and professional services`,
      `Commercial focus — copy written to achieve business objectives, not just fill pages`,
      `Fast, professional turnaround suited to ${city}'s business pace`,
      `Free re-match guarantee if your first introduction isn't the right fit`
    ],
  },
  "academic-writing-support": {
    intro: (city) => [
      `Academic writing support in ${city} connects students and researchers with specialists who can help develop their work without compromising academic integrity. London's universities set high standards — the right support makes those standards achievable.`,
      `Our matched academic writing specialists serving ${city} understand the expectations of UK institutions and can work with students across all disciplines and levels from undergraduate to doctoral.`
    ],
    steps: (city) => [
      `Share details of your project — institution, level, discipline, what you need help with, and your deadline`,
      `We match you with an academic writing specialist with relevant subject knowledge`,
      `Initial session to review your work, identify priorities, and agree how support will be structured`,
      `Working sessions focused on structure, argument, language, and referencing as needed`,
      `Final review with written feedback to guide your revisions`,
      `Follow-up support available as further drafts develop`
    ],
    whyPoints: (city) => [
      `Specialists with postgraduate qualifications who understand ${city} university standards and expectations`,
      `Subject-specific matching — not generic editorial support`,
      `Development-focused approach that builds your skills, not dependency`,
      `Flexible scheduling to work around ${city} student and professional commitments`
    ],
  },
  "cv-cover-letter-writing": {
    intro: (city) => [
      `CV writing in ${city} requires professionals who understand the local job market — which sectors dominate, what recruiters in those sectors look for, and how to position candidates against the international competition that London attracts.`,
      `Our matched CV writers know the ${city} recruitment landscape and produce CVs that get interviews, not just read.`
    ],
    steps: (city) => [
      `Tell us your target role, sector, seniority level, and current situation`,
      `We match you with a CV writer with specific experience in your sector and level`,
      `Discovery conversation to understand your career story and target opportunity`,
      `Full CV draft produced, reviewed against ${city} market expectations`,
      `One revision round to refine and finalise`,
      `Cover letter and optional LinkedIn profile review included`
    ],
    whyPoints: (city) => [
      `Writers who understand ${city} recruitment across finance, tech, law, media, and other key sectors`,
      `ATS optimisation alongside compelling human-readable narrative`,
      `Proven track record placing professionals at all levels in ${city} roles`,
      `Fast turnaround available for urgent applications`
    ],
  },
  "blog-seo-content": {
    intro: (city) => [
      `SEO content for ${city} businesses needs to compete in some of the UK's most contested search markets. Quality, consistency, and genuine expertise are what separate content that ranks from content that gets ignored.`,
      `Our matched content writers serving ${city} understand search intent, topical authority, and how to produce content that serves both readers and search engines simultaneously.`
    ],
    steps: (city) => [
      `Share your content goals, target keywords, publishing frequency, and brand voice guidelines`,
      `We match you with a content writer experienced in your sector and comfortable with your subject matter`,
      `Content strategy and calendar developed for ongoing work, or brief agreed for one-off projects`,
      `Articles researched, written, and optimised to brief`,
      `Review and revision round before final delivery`,
      `Performance tracking available for retainer clients`
    ],
    whyPoints: (city) => [
      `Writers who understand the competitive search landscape in ${city}'s key sectors`,
      `Both SEO expertise and genuine subject knowledge — not keyword stuffing`,
      `Consistent brand voice maintained across all content`,
      `Retainer arrangements available for businesses with regular content needs`
    ],
  },
  "proofreading-editing": {
    intro: (city) => [
      `Professional proofreading and editing in ${city} ensures that every document you publish or submit reflects the quality of the work it represents. Errors and inconsistencies undermine credibility in London's high-stakes professional environment.`,
      `Our matched editors working in ${city} bring subject-matter knowledge alongside editorial precision, ensuring corrections are accurate and appropriate for your specific context and audience.`
    ],
    steps: (city) => [
      `Share your document, intended audience, publication deadline, and any style guide requirements`,
      `We match you with an editor with relevant subject knowledge for your content`,
      `Editorial review completed with all changes tracked in your preferred format`,
      `Style and consistency check against your guide or an agreed standard`,
      `Edited document returned with editorial notes and a clean final version`,
      `Follow-up questions answered promptly`
    ],
    whyPoints: (city) => [
      `Editors with subject expertise across ${city}'s key professional sectors`,
      `Both proofreading and copy editing available depending on your needs`,
      `Fast turnaround for urgent documents`,
      `Consistent, reliable quality across all document types and lengths`
    ],
  },
  "technical-grant-writing": {
    intro: (city) => [
      `Technical and grant writing in ${city} requires specialists who combine domain expertise with the ability to communicate clearly for a specific audience — whether that is engineers reading documentation or funding panels assessing applications.`,
      `Our matched specialists serving ${city} have genuine backgrounds in their subject areas and track records on the specific types of documents or applications you need.`
    ],
    steps: (city) => [
      `Describe your project — document type, subject matter, target audience, and timeline`,
      `We match you with a technical or grant writer with relevant domain experience`,
      `Scoping session with your subject matter experts to establish requirements`,
      `Structure and outline agreed before drafting begins`,
      `Draft produced and reviewed iteratively with your team`,
      `Final document delivered polished and ready for its intended use`
    ],
    whyPoints: (city) => [
      `Domain specialists — not generalists attempting technical subjects`,
      `Grant writers with track records on Innovate UK, UKRI, and charitable trust applications`,
      `Accurate from the first draft due to genuine subject knowledge`,
      `Structured, navigable documents that work as reference materials`
    ],
  }
};
