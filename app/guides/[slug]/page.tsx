import { withPageSeo } from '@/lib/pageMetadata';
// SERVER COMPONENT
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { guides, getGuideBySlug, guideCategories } from '@/data/guides';
import { getArticlesByHub } from '@/data/blog';
import { articleSchema, breadcrumbSchema, faqSchema, editorialAuthorSchema } from '@/lib/schema';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/site';
import { GuideBody } from './GuideBody';

export function generateStaticParams() {
  return guides.map(g => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return { title: 'Guide not found' };
  const url = `${siteConfig.url}/guides/${guide.slug}/`;
  const image = `${siteConfig.url}${guide.featuredImage}`;
  return withPageSeo('/guides/' + guide.slug + '/', {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `/guides/${guide.slug}/` },
    openGraph: {
      type: 'article',
      url,
      siteName: siteConfig.name,
      title: guide.metaTitle,
      description: guide.metaDescription,
      locale: 'en_GB',
      publishedTime: guide.publishDate,
      modifiedTime: guide.publishDate,
      images: [{ url: image, width: 1536, height: 1024, alt: guide.featuredImageAlt }],
    },
    twitter: { card: 'summary_large_image', title: guide.metaTitle, description: guide.metaDescription, images: [image] },
    robots: { index: true, follow: true },
  });
}

const serif = (size: number | string, extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: 'var(--font-inter), Arial, sans-serif',
  fontSize: size, fontStyle: 'normal', fontWeight: 400,
  color: 'var(--ink)', lineHeight: 1.15, ...extra,
});

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const related = guide.relatedGuides
    .map(s => guides.find(g => g.slug === s))
    .filter(Boolean) as typeof guides;

  // Live child spokes of this hub (drafts excluded).
  const spokes = getArticlesByHub(guide.slug);

  const url = `${siteConfig.url}/guides/${guide.slug}/`;
  // YMYL schema: Article + BreadcrumbList + FAQPage, author/reviewer @id to the
  // WWSL editorial entity (emitted below). No fabricated named person.
  const schemas = [
    editorialAuthorSchema(),
    breadcrumbSchema([{ label: 'Guides', href: '/guides/' }, { label: guide.title }]),
    articleSchema({
      url,
      headline: guide.title,
      description: guide.metaDescription,
      datePublished: guide.publishDate,
      dateModified: guide.publishDate,
      image: `${siteConfig.url}${guide.featuredImage}`,
    }),
    faqSchema(guide.faqs),
  ];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Header />

      <main className="edition-reading-page" data-edition-page="guides" id="main-content">
        <section data-edition-hero data-article-hero className="edition-reading-hero">
          <div className="container-width" style={{ position: 'relative', zIndex: 10, paddingTop: 32, paddingBottom: 32 }}>
            <Breadcrumbs items={[{ label: 'Guides', href: '/guides/' }, { label: guideCategories[guide.category], href: '/guides/' }, { label: guide.title }]} />
            <div className="edition-article-meta">
              <span style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(212,105,25,0.18)', border: '0.5px solid rgba(212,105,25,0.45)', color: "#f29264", fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.02em', padding: "4px 12px", borderRadius: 0 }}>
                {guideCategories[guide.category]}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(255,255,255,0.08)', border: '0.5px solid rgba(255,255,255,0.15)', color: "rgba(255,255,255,0.76)", fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 11, fontWeight: 400, padding: "4px 12px", borderRadius: 0 }}>
                {guide.readingTime} min read
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 'clamp(28px,4.5vw,50px)', fontWeight: 400, fontStyle: 'normal', color: '#fff', lineHeight: 1.1, marginBottom: 14, maxWidth: 640 }}>
              {guide.heroHeading}
            </h1>
            <p className="edition-article-intro">
              {guide.heroParagraph}
            </p>
            {/* YMYL byline. No fabricated named author per fleet rule —
                the editorial team IS the publisher. */}
            <p className="edition-article-byline">
              <span>Published and reviewed by WWSL, the {siteConfig.name} editorial team</span>
              <span aria-hidden="true">·</span>
              <span>
                <time dateTime={guide.publishDate}>{new Date(guide.publishDate).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              </span>
            </p>
            <div className="edition-article-image">
              <Image src={guide.featuredImage} alt={guide.featuredImageAlt} fill priority sizes="(min-width: 1104px) 1024px, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        {/* Body */}
        <div className="container-width edition-reading-shell">
          <details className="edition-mobile-toc">
            <summary>In this guide</summary>
            <nav aria-label="In this guide">{guide.sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.heading}</a>)}</nav>
          </details>
          <div className="edition-reading-grid">

            {/* Main content — client component handles tool rendering */}
            <GuideBody guide={guide} />

            {/* Sidebar */}
            <aside className="edition-reading-sidebar">
              <div className="lg:sticky" style={{ top: 28 }}>

                {/* In this guide */}
                <div className="sidebar-box">
                  <p className="eyebrow mb-3">In this guide</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {guide.sections.map(s => (
                      <a key={s.id} href={`#${s.id}`}
                        style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 12, fontWeight: 400, color: 'var(--stone)', textDecoration: 'none', lineHeight: 1.4, transition: 'color 0.12s' }}
                        className="hover:text-brand-500">
                        {s.heading}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Book a consultation */}
                <div className="sidebar-box">
                  <h3 style={serif(18, { marginBottom: 6 })}>Book a consultation</h3>
                  <p className="body-sm mb-4">Wills, LPAs and probate support across London. Fixed fees from £150.</p>
                  <Link href="/contact/#enquiry" className="btn-primary w-full justify-center" style={{ display: 'flex', textDecoration: 'none' }}>
                    Find a specialist
                  </Link>
                </div>

                {/* Related service */}
                <div className="sidebar-box">
                  <p className="eyebrow mb-3">Related service</p>
                  <Link href={`/services/${guide.relatedService}/`}
                    style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 15, color: 'var(--stone)', textDecoration: 'none', lineHeight: 1.4, display: 'block', transition: 'color 0.12s' }}
                    className="hover:text-brand-500">
                    {guide.relatedService.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} →
                  </Link>
                </div>

                {/* Related guides */}
                {related.length > 0 && (
                  <div className="sidebar-box">
                    <p className="eyebrow mb-3">Related guides</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {related.map(r => (
                        <Link key={r.slug} href={`/guides/${r.slug}/`}
                          style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 14, color: 'var(--stone)', textDecoration: 'none', lineHeight: 1.4, transition: 'color 0.12s' }}
                          className="hover:text-brand-500">
                          {r.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>

          {/* Child spokes in this hub (drafts excluded) */}
          {spokes.length > 0 && (
            <section className="edition-related-reading">
              <p className="eyebrow mb-4">More on {guide.title.toLowerCase()}</p>
              <div className="edition-related-list">
                {spokes.map(sp => (
                  <Link key={sp.slug} href={`/blog/${sp.slug}/`} className="card-parchment"
                    style={{ display: 'block', padding: "18px 18px", borderRadius: 0, textDecoration: 'none' }}>
                    <p className="eyebrow-brand mb-1">{sp.category}</p>
                    <h3 style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 17, fontStyle: 'normal', color: 'var(--ink)', lineHeight: 1.3, marginBottom: 6 }}>{sp.title}</h3>
                    <p className="body-sm" style={{ margin: 0 }}>{sp.excerpt}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
