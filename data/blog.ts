// data/blog.ts - Writing Services London

export interface ContentBlock {
  type: string; text?: string; src?: string; alt?: string;
  items?: string[]; articles?: { slug: string; title: string; image?: string }[];
}
export interface BlogArticle {
  slug: string; title: string; metaTitle: string; metaDescription: string;
  category: string; publishDate: string; featuredImage: string; excerpt: string;
  content: ContentBlock[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'how-to-brief-a-copywriter',
    title: 'How to Brief a Copywriter: What Good Looks Like',
    metaTitle: 'How to Brief a Copywriter | Writing Services London',
    metaDescription: 'A poor brief produces poor copy. Here is what a good copywriting brief includes and why it matters more than most clients realise.',
    category: 'Working with Writers',
    publishDate: '2026-01-14',
    featuredImage: '',
    excerpt: 'The quality of your copywriting brief directly determines the quality of the copy you receive. Here is what to include and why it matters.',
    content: [
      { type: 'p', text: 'Most clients who are disappointed with their copywriting didn\'t have a bad writer — they had a bad brief. A copywriter can only produce work as good as the information they\'ve been given. Vague briefs produce generic copy; specific briefs produce work that hits.' },
      { type: 'h2', text: 'What a good brief includes' },
      { type: 'list', items: ['Who is the audience — specific, not "professionals aged 25-45"', 'What action you want the reader to take after reading', 'What makes your offering genuinely different from competitors', 'Tone of voice — examples of writing you admire help more than adjectives', 'What the reader currently believes and what you want them to believe instead', 'Any constraints — length, format, regulatory requirements'] },
      { type: 'h2', text: 'The most common brief mistake' },
      { type: 'p', text: 'Describing what the copy is rather than what it needs to do. "A homepage" is not a brief. "A homepage that makes senior marketing managers at mid-size B2B companies feel that this is the CRM they\'ve been looking for" is a brief. The more specific your objective, the more precisely the writer can work towards it.' },
      { type: 'cta', text: 'Get Matched with a London Copywriter' },
      { type: 'related-articles', articles: [{ slug: 'freelance-writer-vs-agency', title: 'Freelance Writer vs Agency: Which Is Right for Your Project?' }] }
    ]
  },
  {
    slug: 'freelance-writer-vs-agency',
    title: 'Freelance Writer vs Agency: Which Is Right for Your Project?',
    metaTitle: 'Freelance Writer vs Writing Agency | Writing Services London',
    metaDescription: 'Freelance writers and writing agencies each suit different projects. Here is how to decide which is right for your specific needs and budget.',
    category: 'Working with Writers',
    publishDate: '2026-02-01',
    featuredImage: '',
    excerpt: 'Both freelance writers and agencies have genuine advantages. The right choice depends on your project scope, budget, and how you like to work.',
    content: [
      { type: 'p', text: 'The choice between a freelance writer and a writing agency is less about quality — you can find excellent professionals in both categories — and more about how the work gets done and what it costs.' },
      { type: 'h2', text: 'When a freelance writer makes sense' },
      { type: 'list', items: ['You want to work directly with the person writing your content', 'Your project has a defined scope and a clear brief', 'Budget is a consideration and you want to avoid agency overhead', 'You want a long-term relationship with someone who deeply knows your brand', 'Your project is in a specialist area where one expert is better than a team'] },
      { type: 'h2', text: 'When an agency makes sense' },
      { type: 'list', items: ['You need multiple formats simultaneously — copy, content, editing — from one relationship', 'Volume and consistency matter more than a single unique voice', 'You need built-in quality assurance and a backup if your main writer is unavailable', 'Your project is large enough that agency overhead is proportionate to the scope'] },
      { type: 'cta', text: 'Find the Right Match for Your Project' },
      { type: 'related-articles', articles: [{ slug: 'how-to-brief-a-copywriter', title: 'How to Brief a Copywriter: What Good Looks Like' }] }
    ]
  }
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find(a => a.slug === slug);
}
