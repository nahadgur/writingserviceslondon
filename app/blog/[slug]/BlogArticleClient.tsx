'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Tag, Calendar } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { BlogArticle, ContentBlock } from '@/data/blog';

function renderBlock(block: ContentBlock, index: number, onOpenModal: () => void) {
  switch (block.type) {
    case 'p':
      return <p key={index} className="article-p">{block.text ?? ''}</p>;

    case 'h2':
      return <h2 key={index} className="article-h2">{block.text ?? ''}</h2>;

    case 'h3':
      return (
        <h3 key={index} className="font-display text-xl italic text-ink mt-7 mb-3">
          {block.text ?? ''}
        </h3>
      );

    case 'list':
      return (
        <ul key={index} className="space-y-2.5 mb-6">
          {(block.items ?? []).map((item, i) => (
            <li key={i} className="flex items-start gap-3 article-p mb-0">
              <span className="w-1 h-1 rounded-full bg-brand flex-shrink-0 mt-2.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case 'image':
      return (
        <figure key={index} className="my-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.src ?? ''}
            alt={block.alt ?? ''}
            className="w-full rounded-lg object-cover"
            loading="lazy"
          />
          {block.alt && (
            <figcaption className="body-sm text-center mt-2">{block.alt}</figcaption>
          )}
        </figure>
      );

    case 'cta':
      return (
        <div key={index} className="inline-cta">
          <p className="font-display text-xl italic text-white mb-2">
            {block.text ?? 'Get your free will writing match'}
          </p>
          <p className="body-sm text-white/50 mb-5">
            Vetted will writing professionals in London. Free matching service.
          </p>
          <button onClick={onOpenModal} className="btn-primary">
            Find my specialist
          </button>
        </div>
      );

    case 'related-articles':
      return (
        <div key={index} className="my-8">
          <h3 className="font-display text-lg italic text-ink mb-4">Related reading</h3>
          <div className="space-y-2">
            {(block.articles ?? []).map((rel, i) => (
              <Link
                key={i}
                href={`/blog/${rel.slug}/`}
                className="flex items-center gap-4 card-parchment p-3 rounded-md hover:border-brand/30 transition-colors group"
              >
                {rel.image && (
                  <div className="w-12 h-10 rounded overflow-hidden flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={rel.image} alt={rel.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                )}
                <span className="font-display text-sm text-stone group-hover:text-brand transition-colors">
                  {rel.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

interface Props {
  article: BlogArticle;
  relatedArticles: BlogArticle[];
}

export default function BlogArticleClient({ article, relatedArticles }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  // Find 2nd h2 to inject inline CTA
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
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Header onOpenModal={() => setModalOpen(true)} />

      <main>
        {/* ── Article hero ──────────────────────────── */}
        <section className="hero-dark min-h-[260px] flex items-end">
          {article.featuredImage && (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${article.featuredImage}')`, opacity: 0.28 }}
            />
          )}
          <div className="hero-gradient-bottom" />

          <div className="relative z-10 container-width py-12 w-full">
            <Breadcrumbs
              dark
              items={[{ label: 'Blog', href: '/blog/' }, { label: article.title }]}
            />
            <div className="flex items-center gap-4 mt-5 mb-4">
              <span className="location-pill">
                <Tag size={10} /> {article.category}
              </span>
              <span className="eyebrow text-white/35 flex items-center gap-1.5">
                <Calendar size={11} /> {article.publishDate}
              </span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl italic text-white max-w-2xl leading-tight">
              {article.title}
            </h1>
          </div>
        </section>

        {/* ── Body ──────────────────────────────────── */}
        <div className="container-width py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12">

            {/* Article */}
            <article>
              <Link
                href="/blog/"
                className="inline-flex items-center gap-2 body-sm text-dust hover:text-ink transition-colors mb-8"
              >
                <ArrowLeft size={12} /> All articles
              </Link>

              <p className="article-lede mb-8">{article.excerpt}</p>

              {article.content.map((block, i) => (
                <div key={i}>
                  {i === secondH2 && (
                    <div className="pull-quote mb-8">
                      <p>Making a will is one of the most important things you can do for the people you love most.</p>
                    </div>
                  )}
                  {renderBlock(block, i, () => setModalOpen(true))}
                </div>
              ))}
            </article>

            {/* Sidebar */}
            <aside>
              <div className="sticky top-8 space-y-4">
                <div className="sidebar-box">
                  <h3 className="font-display text-xl italic text-ink mb-2">Get matched free</h3>
                  <p className="body-sm mb-4">
                    Ready to write your will? We match you with a vetted specialist in London at no cost.
                  </p>
                  <button onClick={() => setModalOpen(true)} className="btn-primary w-full justify-center">
                    Find my specialist
                  </button>
                </div>

                {relatedArticles.length > 0 && (
                  <div className="sidebar-box">
                    <p className="eyebrow mb-3">More articles</p>
                    <div className="space-y-3">
                      {relatedArticles.map(rel => (
                        <div key={rel.slug}>
                          <p className="eyebrow-brand mb-0.5">{rel.category}</p>
                          <Link
                            href={`/blog/${rel.slug}/`}
                            className="font-display text-sm text-stone hover:text-brand transition-colors"
                          >
                            {rel.title}
                          </Link>
                        </div>
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
