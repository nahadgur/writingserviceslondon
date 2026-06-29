'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';
import type { BlogArticle, ContentBlock } from '@/data/blog';

// Parse inline markdown links [text](href) into React nodes.
// Internal /path/ links render as next/link <Link>; external http(s) links
// render as <a target="_blank" rel="noopener noreferrer">.
function renderRich(text: string): React.ReactNode {
  if (!text) return '';
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const label = m[1];
    const href = m[2];
    if (/^https?:\/\//i.test(href)) {
      nodes.push(
        <a key={`l${k++}`} href={href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)' }}>
          {label}
        </a>
      );
    } else {
      nodes.push(
        <Link key={`l${k++}`} href={href} style={{ color: 'var(--brand)' }}>
          {label}
        </Link>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes.length ? nodes : text;
}

function renderBlock(block: ContentBlock, index: number, onModal: () => void) {
  switch (block.type) {
    case 'p':
      return <p key={index} className="article-p">{renderRich(block.text || '')}</p>;

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
              <span className="article-p" style={{ marginBottom: 0 }}>{renderRich(item)}</span>
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

export function BlogPostClient({ article }: { article: BlogArticle; related?: BlogArticle[]; hub?: { slug: string; title: string } | null }) {
  const [modal, setModal] = useState(false);

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
      <Header onOpenModal={() => setModal(true)} />

      <main id="main-content">
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
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.35)' }}>By WWSL</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(28px,4vw,48px)', fontStyle: 'italic', fontWeight: 400, color: '#fff', lineHeight: 1.15, maxWidth: 680 }}>
              {article.title}
            </h1>
          </div>
        </section>

        {/* Body */}
        <div className="container-width py-10 md:py-14">
          <div>

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

                  // Mid-article CTA banner + pull quote before second h2
                  if (i === secondH2) {
                    rendered.push(
                      <div
                        key={`mid-cta-${i}`}
                        className="rounded-xl px-6 py-6 md:px-10 md:py-7 my-10"
                        style={{ background: 'var(--ink)' }}
                      >
                        <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.45)', marginBottom: 8 }}>
                          Free specialist matching
                        </p>
                        <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(22px,2.6vw,28px)', fontStyle: 'italic', fontWeight: 400, color: '#fff', lineHeight: 1.2, marginBottom: 8 }}>
                          Want a fixed-fee quote before you read on?
                        </p>
                        <p className="body-sm" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 18, maxWidth: 520 }}>
                          We match you with vetted will writers across London who quote upfront, with no obligation and no cost to you.
                        </p>
                        <button onClick={() => setModal(true)} className="btn-primary">
                          Get matched free
                        </button>
                      </div>
                    );
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

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
