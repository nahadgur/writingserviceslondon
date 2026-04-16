// SERVER COMPONENT
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { guides, getGuideBySlug, guideCategories } from '@/data/guides';
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
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    openGraph: { title: guide.metaTitle, description: guide.metaDescription },
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

  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Article', 'FAQPage'],
    headline: guide.title,
    description: guide.metaDescription,
    author: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    datePublished: guide.publishDate,
    mainEntityOfPage: `${siteConfig.url}/guides/${guide.slug}/`,
    mainEntity: guide.faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      <main>
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
        </div>
      </main>

      <Footer />
    </>
  );
}
