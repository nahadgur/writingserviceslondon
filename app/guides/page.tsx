import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { guides, guideCategories } from '@/data/guides';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/data/site';

const TITLE = 'Estate Planning Guides | Will Writing Services London';
const DESCRIPTION = 'Clear London guides to wills, inheritance tax, lasting power of attorney, trusts, probate and estate planning.';
const SOCIAL_IMAGE = `${siteConfig.url}/images/guides/how-to-write-a-will-in-london.webp`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${siteConfig.url}/guides/` },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/guides/`,
    siteName: siteConfig.name,
    title: TITLE,
    description: DESCRIPTION,
    locale: 'en_GB',
    images: [{ url: SOCIAL_IMAGE, width: 1536, height: 1024, alt: 'London family reviewing a will with a professional adviser' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [SOCIAL_IMAGE] },
  robots: { index: true, follow: true },
};

export default function GuidesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Estate Planning Guides',
    url: `${siteConfig.url}/guides/`,
    description: DESCRIPTION,
    publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    hasPart: guides.map(guide => ({
      '@type': 'Article',
      headline: guide.title,
      url: `${siteConfig.url}/guides/${guide.slug}/`,
      datePublished: guide.publishDate,
      image: `${siteConfig.url}${guide.featuredImage}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main id="main-content">
        <section style={{ background: 'var(--parchment)', borderBottom: '0.5px solid var(--border)', padding: '56px 0 48px' }}>
          <div className="container-width max-w-3xl">
            <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(36px,5vw,56px)', fontStyle: 'italic', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.08, marginBottom: 18 }}>
              Estate planning guides for London residents
            </h1>
            <p className="body-lg max-w-2xl">
              Browse every guide in one place, from writing a valid will and choosing executors to inheritance tax, trusts, probate, LPAs and later-life planning.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-width">
            <div className="flex items-end justify-between gap-6 mb-8 md:mb-10">
              <div>
                <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(28px,3.5vw,40px)', fontStyle: 'italic', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.15, marginBottom: 6 }}>
                  All London estate-planning guides
                </h2>
                <p className="body-md">Choose the question closest to the decision you are making.</p>
              </div>
              <span className="body-sm" style={{ whiteSpace: 'nowrap' }}>{guides.length} guides</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {guides.map(guide => (
                <Link key={guide.slug} href={`/guides/${guide.slug}/`} className="card group overflow-hidden" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
                  <div className="relative aspect-[3/2] overflow-hidden" style={{ background: 'var(--parchment-2)' }}>
                    <Image src={guide.featuredImage} alt={guide.featuredImageAlt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <div style={{ padding: '20px 20px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 11, fontWeight: 500, color: 'var(--brand)' }}>{guideCategories[guide.category]}</span>
                      <span className="body-sm" style={{ whiteSpace: 'nowrap' }}>{guide.readingTime} min</span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 21, fontStyle: 'italic', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.22, marginBottom: 9 }} className="group-hover:text-brand-500">
                      {guide.title}
                    </h3>
                    <p className="body-sm line-clamp-3" style={{ marginBottom: 14, flex: 1 }}>{guide.metaDescription}</p>
                    <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 12, fontWeight: 500, color: 'var(--brand)' }}>Read guide →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
