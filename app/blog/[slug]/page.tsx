'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { getArticleBySlug, blogArticles } from '@/data/blog';
import { FAQ } from '@/components/FAQ';
import { siteConfig } from '@/data/site';
import type { ContentBlock } from '@/data/blog';

function renderBlock(block: ContentBlock, index: number, onModal: () => void) {
  switch (block.type) {
    case 'p':
      return <p key={index} className="article-p">{block.text || ''}</p>;

    case 'h2':
      return (
        <h2 key={index} className="article-h2">{block.text || ''}</h2>
      );

    case 'h3':
      return (
        <h3 key={index} style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 20, fontStyle: 'italic', color: 'var(--ink)', marginTop: 28, marginBottom: 10 }}>
          {block.text || ''}
        </h3>
      );

    case 'list':
      return (
        <ul key={index} style={{ marginBottom: 20, paddingLeft: 0, listStyle: 'none' }}>
          {(block.items || []).map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--brand)', flexShrink: 0, marginTop: 8 }} />
              <span className="article-p" style={{ marginBottom: 0 }}>{item}</span>
            </li>
          ))}
        </ul>
      );

    case 'image':
      return (
        <figure key={index} style={{ margin: '28px 0' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={block.src || ''} alt={block.alt || ''} style={{ width: '100%', borderRadius: 6, objectFit: 'cover' }} loading="lazy" />
          {block.alt && <figcaption className="body-sm text-center" style={{ marginTop: 8 }}>{block.alt}</figcaption>}
        </figure>
      );

    case 'external-link':
      return (
        <div key={index} style={{ margin: '4px 0 20px', paddingLeft: 16, borderLeft: '2px solid var(--border)' }}>
          <a
            href={block.href || '#'}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: 12,
              fontWeight: 500,
              color: 'var(--brand)',
              textDecoration: 'none',
              display: 'block',
              marginBottom: 2,
            }}
          >
            {block.linkText || block.href} ↗
          </a>
          {block.text && (
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 12, fontWeight: 300, color: 'var(--dust)', lineHeight: 1.5, margin: 0 }}>
              {block.text}
            </p>
          )}
        </div>
      );

    case 'cta':
      return (
        <div key={index} style={{ background: 'var(--ink)', borderRadius: 8, padding: '24px 20px', textAlign: 'center', margin: '28px 0' }}>
          <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 20, fontStyle: 'italic', color: '#fff', marginBottom: 6 }}>
            {block.text || 'Get your free will writing match'}
          </p>
          <p className="body-sm mb-4" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
            Vetted will writing professionals across London. Free matching service.
          </p>
          <button onClick={onModal} className="btn-primary">Find my specialist</button>
        </div>
      );

    case 'related-articles':
      return (
        <div key={index} style={{ margin: '24px 0' }}>
          <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 18, fontStyle: 'italic', color: 'var(--ink)', marginBottom: 12 }}>
            Related reading
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {(block.articles || []).map((rel, i) => (
              <Link key={i} href={`/blog/${rel.slug}/`} className="card-parchment"
                style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 6, textDecoration: 'none' }}>
                {rel.image && (
                  <div style={{ width: 44, height: 36, borderRadius: 4, overflow: 'hidden', flexShrink: 0 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={rel.image} alt={rel.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                  </div>
                )}
                <span style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 14, color: 'var(--stone)' }}>{rel.title}</span>
              </Link>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const [modal, setModal] = useState(false);
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = blogArticles
    .filter(a => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.metaTitle,
    description: article.metaDescription,
    image: article.featuredImage || undefined,
    datePublished: article.publishDate,
    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${article.slug}/`,
    },
  };

  // Find 2nd h2 to inject pull quote
  let h2Count = 0;
  let secondH2 = -1;
  for (let i = 0; i < article.content.length; i++) {
    if (article.content[i].type === 'h2') {
      h2Count++;
      if (h2Count === 2) { secondH2 = i; break; }
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main>
        {/* Hero */}
        <section className="hero-dark" style={{ minHeight: 220 }}>
          {article.featuredImage && (
            <div className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${article.featuredImage}')`, opacity: 0.28 }} />
          )}
          <div className="g-bot" />
          <div className="relative z-10 container-width py-10 md:py-12 w-full">
            <Breadcrumbs dark items={[{ label: 'Blog', href: '/blog/' }, { label: article.title }]} />
            <div className="flex flex-wrap items-center gap-3 mt-4 mb-4">
              <span className="loc-pill">
                <Tag size={10} /> {article.category}
              </span>
              <span className="eyebrow flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
                <Calendar size={10} /> {article.publishDate}
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(28px,4vw,48px)', fontStyle: 'italic', fontWeight: 400, color: '#fff', lineHeight: 1.15, maxWidth: 680 }}>
              {article.title}
            </h1>
          </div>
        </section>

        {/* Body */}
        <div className="container-width py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-10 lg:gap-12">

            {/* Article */}
            <article>
              <Link href="/blog/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 28, textDecoration: 'none', color: 'var(--dust)' }}
                className="body-sm hover:text-ink">
                <ArrowLeft size={12} /> All articles
              </Link>

              <p className="article-lede" style={{ marginBottom: 28 }}>{article.excerpt}</p>

              {(() => {
                const blocks = article.content;
                const rendered: React.ReactNode[] = [];
                let i = 0;
                while (i < blocks.length) {
                  const block = blocks[i];

                  // Detect FAQ section: h2 with "Frequently Asked Questions"
                  if (block.type === 'h2' && (block.text || '').includes('Frequently Asked Questions')) {
                    // Collect all h3+p pairs that follow
                    const faqs: { question: string; answer: string }[] = [];
                    let j = i + 1;
                    while (j < blocks.length) {
                      const q = blocks[j];
                      const a = blocks[j + 1];
                      if (q && q.type === 'h3' && a && a.type === 'p') {
                        faqs.push({ question: q.text || '', answer: a.text || '' });
                        j += 2;
                      } else if (q && q.type === 'h3') {
                        // h3 with no following p — skip it
                        j += 1;
                      } else {
                        break;
                      }
                    }
                    if (faqs.length > 0) {
                      rendered.push(
                        <div key={i} style={{ marginTop: 40 }}>
                          <FAQ faqs={faqs} title="Frequently Asked Questions" />
                        </div>
                      );
                      i = j;
                      continue;
                    }
                  }

                  // Pull quote before second h2
                  if (i === secondH2) {
                    rendered.push(
                      <div key={`pq-${i}`} className="pull-quote" style={{ marginBottom: 24 }}>
                        <p>Making a will is one of the most important things you can do for the people you love most.</p>
                      </div>
                    );
                  }

                  rendered.push(
                    <div key={i}>
                      {renderBlock(block, i, () => setModal(true))}
                    </div>
                  );
                  i++;
                }
                return rendered;
              })()}
            </article>

            {/* Sidebar */}
            <aside>
              <div className="lg:sticky" style={{ top: 28 }}>
                <div className="sidebar-box">
                  <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 20, fontStyle: 'italic', color: 'var(--ink)', marginBottom: 6 }}>
                    Get matched free
                  </h3>
                  <p className="body-sm mb-4">
                    Ready to write your will? We match you with a vetted specialist in London at no cost.
                  </p>
                  <button onClick={() => setModal(true)} className="btn-primary w-full justify-center">
                    Find my specialist
                  </button>
                </div>

                {related.length > 0 && (
                  <div className="sidebar-box">
                    <p className="eyebrow mb-3">More articles</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {related.map(rel => (
                        <div key={rel.slug}>
                          <p className="eyebrow-brand mb-0.5">{rel.category}</p>
                          <Link href={`/blog/${rel.slug}/`}
                            style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 14, color: 'var(--stone)', textDecoration: 'none', transition: 'color 0.12s' }}
                            className="hover:text-brand-500">
                            {rel.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {(() => {
                  const serviceMap: Record<string, { slug: string; title: string }> = {
                    'will-writing-services-london-2026-guide-for-families':                { slug: 'single-will',               title: 'Single will writing' },
                    'how-to-choose-a-will-writing-service-in-london':                      { slug: 'single-will',               title: 'Single will writing' },
                    'solicitor-vs-will-writing-service-in-london-key-differences':         { slug: 'single-will',               title: 'Single will writing' },
                    'home-visit-will-writing-services-in-london-explained':                { slug: 'single-will',               title: 'Single will writing' },
                    'online-will-writing-services-for-london-residents':                   { slug: 'single-will',               title: 'Single will writing' },
                    'will-writing-costs-in-london-in-2026':                                { slug: 'single-will',               title: 'Single will writing' },
                    'is-will-writing-regulated-in-the-uk-what-london-clients-should-know': { slug: 'single-will',               title: 'Single will writing' },
                    'mirror-wills-and-joint-wills-for-couples-in-london':                  { slug: 'mirror-wills',              title: 'Mirror wills for couples' },
                    'updating-or-changing-your-will-in-london-when-and-how':               { slug: 'estate-planning',           title: 'Estate planning review' },
                    'lasting-power-of-attorney-and-will-writing-services-in-london':       { slug: 'lasting-power-of-attorney', title: 'Lasting power of attorney' },
                    'inheritance-tax-planning-and-will-writing-in-london':                 { slug: 'trust-planning',            title: 'Trust planning' },
                    'will-writing-for-london-homeowners-with-multiple-properties':         { slug: 'trust-planning',            title: 'Trust planning' },
                    'free-and-lowcost-will-writing-options-in-london':                     { slug: 'single-will',               title: 'Single will writing' },
                    'will-writing-and-charitable-gifts-in-london':                         { slug: 'estate-planning',           title: 'Estate planning review' },
                    'common-will-writing-mistakes-london-families-make':                   { slug: 'single-will',               title: 'Single will writing' },
                    'will-reviews-and-second-opinions-in-london':                          { slug: 'estate-planning',           title: 'Estate planning review' },
                    'emergency-will-writing-services-in-london':                           { slug: 'single-will',               title: 'Single will writing' },
                    'what-to-expect-at-a-will-writing-home-visit-in-london':               { slug: 'single-will',               title: 'Single will writing' },
                  };
                  const svc = serviceMap[article.slug];
                  if (!svc) return null;
                  return (
                    <div className="sidebar-box">
                      <p className="eyebrow mb-3">Related service</p>
                      <Link
                        href={`/services/${svc.slug}/`}
                        style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 15, color: 'var(--stone)', textDecoration: 'none', lineHeight: 1.4, display: 'block', transition: 'color 0.12s' }}
                        className="hover:text-brand-500"
                      >
                        {svc.title} →
                      </Link>
                    </div>
                  );
                })()}
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
