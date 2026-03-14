// data/serviceContent.ts
export const serviceContent: Record<string, {
  intro: string[]; benefits: { title: string; desc: string }[];
  candidateIntro: string; candidates: string[]; process: { title: string; desc: string }[];
}> = {
  "business-copywriting": {
    intro: [
      "Business copywriting is one of the most commercially impactful investments a London company can make. Whether it's the website that forms a prospect's first impression, the email sequence that turns leads into customers, or the brochure that closes deals in the room, the quality of your words determines the quality of your results.",
      "London's business environment is competitive and sophisticated. Generic copy that could belong to any company gets ignored. Effective business copy demonstrates that you understand your audience's problems better than they do, positions your solution clearly, and makes the next step obvious.",
      "Our matched copywriters have commercial track records — not just writing ability. They've worked on campaigns with measurable outcomes and understand how copy functions within a wider marketing and sales context. We match you based on your sector and format, not just availability."
    ],
    benefits: [
      { "title": "Sector-Specific Expertise", "desc": "We match you with copywriters who have worked in your industry. A fintech copywriter understands compliance constraints and sophisticated buyers. A retail copywriter knows how to write for consumer psychology. Sector knowledge shows in every sentence." },
      { "title": "Conversion-Focused Writing", "desc": "Good business copy doesn't just inform — it moves readers towards action. Our matched copywriters understand persuasion principles, calls to action, and how to structure copy for the way business audiences actually read." },
      { "title": "Brand Voice Consistency", "desc": "For ongoing work, we match you with a writer who invests time in understanding your brand voice. Consistent tone of voice builds brand recognition and trust — the opposite of the patchy output that results from using different writers each time." },
      { "title": "Fast Professional Turnaround", "desc": "London business moves fast. Our network includes copywriters who can work to tight deadlines without compromising quality, and who understand that responsive communication is as important as the writing itself." }
    ],
    candidateIntro: "Business copywriting is the right service for these London clients:",
    candidates: [
      "Startups and scaleups needing their website and sales copy to reflect their current positioning",
      "Established businesses refreshing brand voice or launching new products and services",
      "Marketing teams needing campaign copy, email sequences, or ad creative from a specialist writer",
      "Professional services firms needing authoritative, credible copy that builds trust with sophisticated buyers",
      "E-commerce businesses needing product descriptions, category copy, and conversion-focused landing pages"
    ],
    process: [
      { "title": "Brief and Discovery", "desc": "Your matched copywriter starts with a discovery conversation to understand your business, audience, competitors, and goals. A clear brief at this stage saves time and revision rounds later." },
      { "title": "Research and Strategy", "desc": "Good copy is built on research. Your copywriter will review competitor messaging, understand your audience's language, and develop a strategic approach before writing a single word." },
      { "title": "Draft and Review", "desc": "First draft delivered according to agreed timeline. You review against the brief and provide feedback. Most projects include two revision rounds to refine and finalise." },
      { "title": "Final Delivery", "desc": "Final copy delivered in your preferred format, ready to use. For ongoing relationships, your writer maintains a brand voice guide to ensure consistency across all future work." }
    ],
  },
  "academic-writing-support": {
    intro: [
      "Academic writing support helps students and researchers at London's universities produce better work by developing their ideas, structure, and argument rather than writing on their behalf. The best academic writing support builds capability — you come away a stronger writer, not just with a better document.",
      "London's academic institutions set high expectations and markers review thousands of submissions. The difference between a good piece of academic writing and an excellent one often comes down to structural clarity, argument coherence, and precise use of evidence — all areas where specialist support makes a measurable difference.",
      "Our matched academic writing specialists have postgraduate qualifications and understand the rigour expected across disciplines from humanities and social sciences to STEM and professional programmes. They work with your ideas and your voice, not over them."
    ],
    benefits: [
      { "title": "Structural Clarity", "desc": "Academic arguments fail most often at the structural level — the reader can't follow the logic from introduction to conclusion. Our specialists identify structural weaknesses and help you reorganise material so your argument is clear and convincing." },
      { "title": "Subject Matter Understanding", "desc": "Generic editorial support can't engage with your argument. Our academic specialists have subject-area knowledge and can assess whether your evidence supports your claims, your methodology is sound, and your conclusions follow from your analysis." },
      { "title": "Citation and Style Compliance", "desc": "Harvard, APA, MLA, MHRA, Vancouver — different institutions and disciplines require different citation styles. Our specialists ensure your referencing is accurate and consistent throughout, removing a common source of marks lost." },
      { "title": "Confidence and Development", "desc": "Good academic writing support doesn't create dependency — it builds your skills. Sessions focus on explaining why changes are needed, not just making them, so you become a more capable academic writer over time." }
    ],
    candidateIntro: "Academic writing support is suitable for these London students and researchers:",
    candidates: [
      "Undergraduate students struggling with essay structure, argument development, or academic conventions",
      "Postgraduate students working on dissertations, theses, or research papers requiring specialist guidance",
      "International students whose first language is not English needing language clarity alongside structural support",
      "Researchers preparing academic papers or journal submissions requiring editorial refinement",
      "Professionals undertaking part-time study alongside London careers needing efficient, focused support"
    ],
    process: [
      { "title": "Initial Assessment", "desc": "Your specialist reviews your current work or draft, identifies the key areas for improvement, and discusses your goals and deadline. This shapes the support plan." },
      { "title": "Structural and Argument Work", "desc": "Working through the structure and logical flow of your argument. This may involve reordering, strengthening transitions, or clarifying your central thesis before addressing sentence-level issues." },
      { "title": "Language and Referencing", "desc": "Once structure is sound, focus moves to clarity of expression, appropriate academic register, and accuracy of citations and bibliography." },
      { "title": "Final Review and Feedback", "desc": "A final read-through with written feedback explaining all suggestions. You implement changes and gain understanding that improves future work." }
    ],
  },
  "cv-cover-letter-writing": {
    intro: [
      "A professional CV is the most important document most people will ever have written on their behalf. In London's competitive job market, where recruiters scan dozens of CVs before shortlisting, the difference between a mediocre CV and a strong one is the difference between an interview and silence.",
      "London's job market has specific characteristics — sector concentrations in finance, tech, law, and media; a high proportion of competitive applicants from across the world; and recruitment processes increasingly filtered by ATS software before any human reads the document. A CV writer who understands this landscape writes very differently from a generic career coach.",
      "Our matched CV writers have helped professionals at every level — from graduates entering the London market to senior executives making board-level transitions. They understand what London hiring managers and recruiters actually look for, and how to position your experience to get the interview."
    ],
    benefits: [
      { "title": "London Market Understanding", "desc": "Our CV writers know what London recruiters in your target sector expect to see. Format preferences, keyword conventions, and the way experience should be framed vary by sector — finance CVs look different from tech CVs, which look different from creative CVs." },
      { "title": "ATS Optimisation", "desc": "Most London firms now use applicant tracking systems that filter CVs before human review. Our writers understand how to structure and keyword CVs to pass ATS screening while still reading naturally for the humans who follow." },
      { "title": "Compelling Narrative", "desc": "The best CVs tell a coherent career story, not just a list of jobs. Our writers find the thread through your experience that makes your trajectory logical and your application compelling for the specific role you're targeting." },
      { "title": "Tailored Cover Letters", "desc": "Generic cover letters are a waste of the reader's time and your opportunity. Our writers produce cover letters that are genuinely tailored — addressing the specific company, role, and what you bring to that particular context." }
    ],
    candidateIntro: "CV and cover letter writing is valuable for these London job seekers:",
    candidates: [
      "Recent graduates entering a competitive London job market for the first time",
      "Mid-career professionals targeting a step up or moving into a new sector",
      "Senior executives and directors seeking board-level or C-suite roles in London",
      "Professionals returning to work after a career break needing to reframe their experience",
      "International professionals relocating to London whose CVs need reformatting for the UK market"
    ],
    process: [
      { "title": "Discovery Conversation", "desc": "Your CV writer conducts a structured conversation to understand your career history, target roles, key achievements, and the narrative you want to convey. This shapes everything that follows." },
      { "title": "CV Draft", "desc": "Full rewrite based on your discovery conversation. Format, structure, language, and content are all reviewed and rebuilt for maximum impact in your target market." },
      { "title": "Review and Refinement", "desc": "You review the draft and provide feedback. One round of revisions included to refine language, adjust emphasis, and ensure the document truly reflects your professional identity." },
      { "title": "Cover Letter and Supporting Materials", "desc": "Tailored cover letter produced for your primary target role, with a template approach that makes future applications efficient. LinkedIn profile review available as an optional addition." }
    ],
  },
  "blog-seo-content": {
    intro: [
      "Effective blog and SEO content does two jobs simultaneously: it serves the reader genuinely and it signals relevance to search engines. Content that only does one of these things either fails to rank or fails to convert. The writers who do both well are genuinely hard to find.",
      "London businesses operate in some of the most competitive search landscapes in the UK. Finance, property, law, tech, and professional services are all industries where ranking for valuable terms requires consistent, high-quality content produced over time — not a quick burst of keyword-stuffed articles.",
      "Our matched content writers understand search intent, content structure for SEO, and how to write in a way that builds topical authority. They produce content that earns links, gets shared, and supports your commercial objectives — not just content that ticks a publishing schedule box."
    ],
    benefits: [
      { "title": "Search Intent Alignment", "desc": "Good SEO content starts by understanding what the searcher actually wants when they type that query. Our writers research intent before writing, ensuring content structure and answers align with what Google rewards." },
      { "title": "Topical Authority Building", "desc": "Ranking for competitive terms requires demonstrating expertise across a topic, not just targeting individual keywords. Our writers understand content clustering and how to build topical authority over a publishing programme." },
      { "title": "Readable, Engaging Writing", "desc": "Content that reads like it was written for an algorithm doesn't get shared, linked to, or read to the end. Our writers produce genuinely useful, well-structured content that serves real readers — which is also what Google increasingly rewards." },
      { "title": "Brand Voice Integration", "desc": "SEO content needs to sound like you, not like a content mill. Our writers invest time in understanding your brand voice and sector terminology so the content feels native to your brand, not outsourced." }
    ],
    candidateIntro: "Blog and SEO content services are right for these London clients:",
    candidates: [
      "Businesses investing in organic search as a primary acquisition channel and needing consistent quality content",
      "Marketing agencies needing to scale content production for client accounts without scaling headcount",
      "Professional services firms building thought leadership and brand authority through expert content",
      "E-commerce businesses needing category pages, buying guides, and comparison content that ranks",
      "Startups and scaleups needing to build topical authority in a new category from a standing start"
    ],
    process: [
      { "title": "Brief and Strategy", "desc": "Content brief reviewed, target keywords confirmed, search intent analysed. For ongoing programmes, a content calendar is developed aligned with your commercial and SEO objectives." },
      { "title": "Research and Outline", "desc": "Thorough research into the topic, competitor content analysis, and an outline agreed before writing begins. This prevents wasted drafts and ensures the finished article covers the right ground." },
      { "title": "Draft and Optimisation", "desc": "Article written to brief with on-page SEO best practice integrated naturally — not bolted on. Internal linking suggestions and meta description included." },
      { "title": "Review and Publish", "desc": "One revision round included. Final article delivered in your CMS or as a document, ready to publish. Performance reporting available for ongoing retainer arrangements." }
    ],
  },
  "proofreading-editing": {
    intro: [
      "Errors in professional documents undermine credibility in ways that are hard to recover from. A typo in a pitch deck, an inconsistency in a legal brief, or a grammatical error in a published article signals carelessness to the reader — even when the underlying work is excellent.",
      "Proofreading and copy editing are distinct services that serve different stages of the writing process. Proofreading is the final quality check — errors, typos, formatting issues. Copy editing is more substantive — clarity, flow, consistency, structure. Many projects benefit from both, in that order.",
      "Our London editors work across business documents, academic papers, manuscripts, website content, and specialist publications. We match you with editors who have subject-matter familiarity in your field, because editing technical or specialist content without understanding the subject produces surface corrections that miss deeper issues."
    ],
    benefits: [
      { "title": "Error-Free Final Documents", "desc": "A meticulous proofread catches the errors that spell-checkers miss — homophone confusion, missing words, punctuation inconsistencies, and formatting irregularities. Every document that goes out under your name deserves this standard." },
      { "title": "Improved Clarity and Flow", "desc": "Copy editing goes beyond error correction to improve how easily the reader moves through your document. Awkward phrasing, unclear antecedents, over-long sentences, and structural inconsistencies are all addressed." },
      { "title": "Subject-Specific Expertise", "desc": "Editing finance documents requires understanding financial terminology. Editing academic papers requires knowing citation conventions. We match you with editors who have the subject knowledge your content requires." },
      { "title": "Consistent Style and Voice", "desc": "For longer documents or multi-author publications, consistency of style is a significant challenge. Our editors apply your chosen style guide consistently throughout, creating a coherent reading experience from first page to last." }
    ],
    candidateIntro: "Proofreading and editing services are essential for these London clients:",
    candidates: [
      "Authors and writers preparing manuscripts for submission to agents, publishers, or self-publication",
      "Businesses producing reports, proposals, or pitch documents where errors damage credibility",
      "Academics and researchers preparing papers for journal submission or conference presentation",
      "Marketing teams publishing content at volume who need a quality gate before material goes live",
      "Legal and professional services firms requiring precise, error-free documents for client delivery"
    ],
    process: [
      { "title": "Document Assessment", "desc": "Your editor reviews the document type, length, subject matter, and the level of edit required to provide an accurate quote and timeline." },
      { "title": "Editorial Review", "desc": "Full document reviewed with all changes tracked in your preferred format (Word tracked changes, PDF markup, or Google Docs). Queries flagged for your attention." },
      { "title": "Style and Consistency Check", "desc": "Consistency of terminology, capitalisation, hyphenation, and formatting checked against your style guide or an agreed standard. A style sheet produced for longer documents." },
      { "title": "Final Delivery", "desc": "Edited document returned with all changes visible and a brief editorial note covering any significant issues found. Clean final version also provided if requested." }
    ],
  },
  "technical-grant-writing": {
    intro: [
      "Technical writing and grant writing are specialist disciplines that require something most writers don't have: the ability to understand complex subject matter and then explain it clearly, accurately, and compellingly to a specific audience. The audience might be engineers reading documentation, executives reading a white paper, or funding panels assessing a grant application.",
      "For technical writing, accuracy and clarity must coexist — a manual that is accurate but impenetrable fails users; one that is clear but inaccurate causes problems. Our technical writers have worked in or alongside the industries they write for, which is the only reliable way to achieve both.",
      "For grant writing, the stakes are high and the competition is intense. UK funding bodies including Innovate UK, UKRI, and major charitable trusts receive far more applications than they can fund. The writers in our network who specialise in grant applications understand how funders think, what they weight, and how to present your project in the terms that resonate with their priorities."
    ],
    benefits: [
      { "title": "Domain-Specific Knowledge", "desc": "Technical writers in our network have genuine backgrounds in technology, engineering, finance, healthcare, and other specialist sectors. They ask the right questions during briefing because they understand the subject, which means documentation and reports that are accurate from the first draft." },
      { "title": "Audience-Appropriate Clarity", "desc": "Technical content must be calibrated to its audience — developer documentation reads differently from a board-level white paper, even when they cover the same product. Our writers understand how to pitch complexity for the right reader." },
      { "title": "Grant Success Rates", "desc": "Our grant writing specialists have track records on Innovate UK, UKRI, lottery, and charitable trust applications. They understand funder priorities, scoring criteria, and how to frame your project as the most compelling use of their money." },
      { "title": "Structured, Navigable Documents", "desc": "Technical and grant documents often need to work as reference materials as well as linear reads. Our writers structure documents with navigation, cross-references, and summary sections that make complex material genuinely usable." }
    ],
    candidateIntro: "Technical and grant writing services are suited to these London clients:",
    candidates: [
      "Technology companies needing user documentation, API guides, or technical white papers",
      "Startups and SMEs applying for Innovate UK or UKRI funding for R&D projects",
      "Charities and non-profits needing compelling applications for foundation or lottery funding",
      "Research organisations preparing funding bids or knowledge transfer documentation",
      "Professional services firms producing white papers, thought leadership reports, or technical briefings"
    ],
    process: [
      { "title": "Scoping and Subject Briefing", "desc": "Your technical writer meets with the relevant subject matter experts, reviews existing documentation, and defines the scope, audience, and purpose of the document before any writing begins." },
      { "title": "Structure and Outline", "desc": "Agreed structure and outline reviewed before full drafting. For grant applications, funder guidance documents are reviewed in detail and a response framework developed." },
      { "title": "Draft and Technical Review", "desc": "First draft produced and reviewed by your technical team for accuracy. Changes incorporated efficiently — our writers are used to working iteratively with subject matter experts." },
      { "title": "Final Polish and Delivery", "desc": "Final document polished for language quality, consistency, and formatting. For grant applications, final submission review included to ensure all funder requirements are met." }
    ],
  }
};
