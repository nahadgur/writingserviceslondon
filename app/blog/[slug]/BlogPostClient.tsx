'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';
import type { BlogArticle, ContentBlock } from '@/data/blog';

import { articleText as renderRich } from '@/components/ArticleText';

function renderBlock(block: ContentBlock, index: number, onModal: () => void) {
  switch (block.type) {
    case 'p':
      return <p key={index} className="article-p">{renderRich(block.text || '')}</p>;

    case 'h2':
      return (
        <h2 key={index} className="article-h2">{renderRich(block.text || '')}</h2>
      );

    case 'h3':
      return (
        <h3 key={index}>
          {renderRich(block.text || '')}
        </h3>
      );

    case 'list':
    case 'unordered-list':
      return <ul key={index} className="article-list">{(block.items || []).map((item, i) => <li key={i}>{renderRich(item)}</li>)}</ul>;
    case 'ordered-list':
      return <ol key={index} className="article-list">{(block.items || []).map((item, i) => <li key={i}>{renderRich(item)}</li>)}</ol>;
    case 'quote':
    case 'blockquote':
      return <blockquote key={index}><p>{renderRich(block.text || '')}</p></blockquote>;

    case 'image':
      return (
        <figure key={index} style={{ margin: '28px 0' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={block.src || ''} alt={block.alt || ''} style={{ width: '100%', borderRadius: 0, objectFit: 'cover' }} loading="lazy" />
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
              fontFamily: 'var(--font-inter), Arial, sans-serif',
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
            <p style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 12, fontWeight: 400, color: 'var(--dust)', lineHeight: 1.5, margin: 0 }}>
              {block.text}
            </p>
          )}
        </div>
      );

    case 'cta':
      return <aside key={index} className="article-cta">
        <p className="article-cta-title">{renderRich(block.text || 'Book a will writing consultation')}</p>
        <p>Wills, LPAs and probate support across London. Fixed fees from £150.</p>
        <button onClick={onModal} className="btn-primary">Book a consultation</button>
      </aside>;

    case 'related-articles':
      return (
        <div key={index} style={{ margin: '24px 0' }}>
          <h3 style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 18, fontStyle: 'normal', color: 'var(--ink)', marginBottom: 12 }}>
            Related reading
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {(block.articles || []).map((rel, i) => (
              <Link key={i} href={`/blog/${rel.slug}/`} className="card-parchment"
                style={{ display: 'flex', alignItems: 'center', gap: 12, padding: "12px 14px", borderRadius: 0, textDecoration: 'none' }}>
                {rel.image && (
                  <div style={{ width: 44, height: 36, borderRadius: 0, overflow: 'hidden', flexShrink: 0 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={rel.image} alt={rel.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                  </div>
                )}
                <span style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 14, color: 'var(--stone)' }}>{rel.title}</span>
              </Link>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

export function BlogPostClient({ article, related = [], hub }: { article: BlogArticle; related?: BlogArticle[]; hub?: { slug: string; title: string } | null }) {
  const [modal, setModal] = useState(false);

  // Keep hand-picked related-reading blocks without repeating their links below.
  const embeddedRelatedSlugs = new Set(
    article.content.flatMap(block => block.type === 'related-articles'
      ? (block.articles || []).map(item => item.slug)
      : []),
  );
  const relatedArticles = related.filter((item, index, items) =>
    !item.draft && item.slug !== article.slug && item.hub === article.hub
    && !embeddedRelatedSlugs.has(item.slug)
    && items.findIndex(other => other.slug === item.slug) === index,
  );

  // Find 2nd h2 to inject the mid-article CTA banner and pull quote
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
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header />

      <main data-edition-page="blog" id="main-content">
        {article.featuredImage && (
          <div className="relative h-[320px] md:h-[460px] overflow-hidden" style={{ background: 'var(--parchment-2)' }}>
            <Image
              src={article.featuredImage}
              alt={article.featuredImageAlt || article.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        )}
        {/* Hero */}
        <section data-edition-hero data-article-hero className="hero-dark" style={{ minHeight: 220 }}>
          <div className="g-bot" />
          <div className="relative z-10 container-width py-10 md:py-12 w-full">
            <Breadcrumbs dark items={[{ label: 'Blog', href: '/blog/' }, { label: article.title }]} />
            <div className="flex flex-wrap items-center gap-3 mt-4 mb-4">
              <span className="loc-pill">
                <Tag size={10} /> {article.category}
              </span>
              <span className="eyebrow flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.76)" }}>
                <Calendar size={10} /> {article.publishDate}
              </span>
              <span className="eyebrow" style={{ color: "rgba(255,255,255,0.76)" }}>By WWSL</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 'clamp(28px,4vw,48px)', fontStyle: 'normal', fontWeight: 400, color: '#fff', lineHeight: 1.15, maxWidth: 680 }}>
              {article.title}
            </h1>
          </div>
        </section>

        {/* Body */}
        <div className="container-width article-shell py-10 md:py-8">
          <div>

            {/* Article */}
            <article className="edition-prose">
              <Link href="/blog/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 28, textDecoration: 'none', color: 'var(--dust)' }}
                className="body-sm hover:text-ink">
                <ArrowLeft size={12} /> All articles
              </Link>

              {hub && (
                <p className="body-sm" style={{ marginBottom: 24 }}>
                  Part of our guide:{' '}
                  <Link href={`/guides/${hub.slug}/`} style={{ color: 'var(--brand)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                    {hub.title}
                  </Link>
                </p>
              )}

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
                        <div key={i} style={{ marginTop: 32 }}>
                          <FAQ faqs={faqs} title="Frequently Asked Questions" />
                        </div>
                      );
                      i = j;
                      continue;
                    }
                  }

                  // Mid-article CTA banner + pull quote before second h2
                  if (i === secondH2) {
                    rendered.push(
                      <aside key={'mid-cta-' + i} className="article-cta">
                        <p className="article-cta-kicker">Book a consultation</p>
                        <p className="article-cta-title">Want a fixed-fee quote before you read on?</p>
                        <p>We write wills across London and quote upfront, with no obligation and no cost to you.</p>
                        <button onClick={() => setModal(true)} className="btn-primary">Book a consultation</button>
                      </aside>
                    );
                    rendered.push(
                      <blockquote key={"pq-" + i}>
                        <p>Making a will is one of the most important things you can do for the people you love most.</p>
                      </blockquote>
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

              {relatedArticles.length > 0 && (
                <nav aria-labelledby="related-articles-heading" style={{ marginTop: 32, paddingTop: 8, borderTop: '1px solid var(--border)' }}>
                  <h2 id="related-articles-heading" className="article-h2">Related articles</h2>
                  <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" style={{ padding: 0, listStyle: 'none' }}>
                    {relatedArticles.map(item => (
                      <li key={item.slug}>
                        <Link href={`/blog/${item.slug}/`} className="card-parchment body-md block h-full p-5 hover:underline" style={{ color: 'var(--ink)', textUnderlineOffset: 3 }}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </article>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
