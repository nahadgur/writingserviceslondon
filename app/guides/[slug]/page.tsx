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
import { FAQ } from '@/components/FAQ';
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
  return {
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
  };
}

const serif = (size: number | string, extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: 'var(--font-cormorant), Georgia, serif',
  fontSize: size, fontStyle: 'italic', fontWeight: 400,
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

      <main id="main-content">
        <div className="relative h-[320px] md:h-[460px] overflow-hidden" style={{ background: 'var(--parchment-2)' }}>
          <Image
            src={guide.featuredImage}
            alt={guide.featuredImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Dark hero */}
        <section style={{ background: '#1c1814', position: 'relative', overflow: 'hidden' }}>
          <svg aria-hidden="true" style={{ position: 'absolute', right: 0, bottom: 0, opacity: 0.12, pointerEvents: 'none' }} width="260" height="180" viewBox="0 0 260 180" fill="none">
            <rect x="10"  y="100" width="28" height="80"  fill="white"/>
            <rect x="46"  y="68"  width="32" height="112" fill="white"/>
            <rect x="54"  y="82"  width="6"  height="8"   fill="#1c1814"/>
            <rect x="64"  y="82"  width="6"  height="8"   fill="#1c1814"/>
            <rect x="86"  y="40"  width="40" height="140" fill="white"/>
            <rect x="96"  y="56"  width="7"  height="9"   fill="#1c1814"/>
            <rect x="109" y="56"  width="7"  height="9"   fill="#1c1814"/>
            <rect x="96"  y="74"  width="7"  height="9"   fill="#1c1814"/>
            <rect x="134" y="90"  width="26" height="90"  fill="white"/>
            <rect x="168" y="55"  width="36" height="125" fill="white"/>
            <rect x="177" y="70"  width="7"  height="9"   fill="#1c1814"/>
            <rect x="189" y="70"  width="7"  height="9"   fill="#1c1814"/>
            <rect x="212" y="80"  width="30" height="100" fill="white"/>
            <rect x="220" y="94"  width="5"  height="7"   fill="#1c1814"/>
          </svg>

          <div className="container-width" style={{ position: 'relative', zIndex: 10, paddingTop: 40, paddingBottom: 48 }}>
            <Breadcrumbs dark items={[{ label: 'Guides', href: '/guides/' }, { label: guideCategories[guide.category], href: '/guides/' }, { label: guide.title }]} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16, marginBottom: 16, flexWrap: 'wrap' as const }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(212,105,25,0.18)', border: '0.5px solid rgba(212,105,25,0.45)', color: '#e8943a', fontFamily: 'var(--font-inter), sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.02em', padding: '4px 12px', borderRadius: 20 }}>
                {guideCategories[guide.category]}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(255,255,255,0.08)', border: '0.5px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-inter), sans-serif', fontSize: 11, fontWeight: 300, padding: '4px 12px', borderRadius: 20 }}>
                {guide.readingTime} min read
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(28px,4.5vw,50px)', fontWeight: 400, fontStyle: 'italic', color: '#fff', lineHeight: 1.1, marginBottom: 14, maxWidth: 640 }}>
              {guide.heroHeading}
            </h1>
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.58)', lineHeight: 1.65, maxWidth: 520 }}>
              {guide.heroParagraph}
            </p>
            {/* YMYL byline. No fabricated named author per fleet rule —
                the editorial team IS the publisher. */}
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 11, fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <span>Published and reviewed by WWSL, the {siteConfig.name} editorial team</span>
              <span aria-hidden="true">·</span>
              <span>
                <time dateTime={guide.publishDate}>{new Date(guide.publishDate).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              </span>
            </p>
          </div>
        </section>

        {/* Body */}
        <div className="container-width py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 lg:gap-14">

            {/* Main content — client component handles tool rendering */}
            <GuideBody guide={guide} />

            {/* Sidebar */}
            <aside>
              <div className="lg:sticky" style={{ top: 28 }}>

                {/* In this guide */}
                <div className="sidebar-box">
                  <p className="eyebrow mb-3">In this guide</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {guide.sections.map(s => (
                      <a key={s.id} href={`#${s.id}`}
                        style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 12, fontWeight: 300, color: 'var(--stone)', textDecoration: 'none', lineHeight: 1.4, transition: 'color 0.12s' }}
                        className="hover:text-brand-500">
                        {s.heading}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Get matched */}
                <div className="sidebar-box">
                  <h3 style={serif(18, { marginBottom: 6 })}>Get matched free</h3>
                  <p className="body-sm mb-4">Vetted will writers and estate planning specialists across London. Free matching, 24 hours.</p>
                  <Link href={`/services/${guide.relatedService}/`} className="btn-primary w-full justify-center" style={{ display: 'flex', textDecoration: 'none' }}>
                    Find a specialist
                  </Link>
                </div>

                {/* Related service */}
                <div className="sidebar-box">
                  <p className="eyebrow mb-3">Related service</p>
                  <Link href={`/services/${guide.relatedService}/`}
                    style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 15, color: 'var(--stone)', textDecoration: 'none', lineHeight: 1.4, display: 'block', transition: 'color 0.12s' }}
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
                          style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 14, color: 'var(--stone)', textDecoration: 'none', lineHeight: 1.4, transition: 'color 0.12s' }}
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
            <section style={{ marginTop: 8 }}>
              <p className="eyebrow mb-4">More on {guide.title.toLowerCase()}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {spokes.map(sp => (
                  <Link key={sp.slug} href={`/blog/${sp.slug}/`} className="card-parchment"
                    style={{ display: 'block', padding: '18px 18px', borderRadius: 8, textDecoration: 'none' }}>
                    <p className="eyebrow-brand mb-1">{sp.category}</p>
                    <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 17, fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.3, marginBottom: 6 }}>{sp.title}</h3>
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
