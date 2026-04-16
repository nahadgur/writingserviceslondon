'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import type { BlogArticle } from '@/data/blog';

interface Props {
  articles: BlogArticle[];
}

export default function BlogIndexClient({ articles }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(articles.map(a => a.category)));
    return ['All', ...cats];
  }, [articles]);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return articles;
    return articles.filter(a => a.category === activeCategory);
  }, [activeCategory, articles]);

  return (
    <>
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Header onOpenModal={() => setModalOpen(true)} />

      <main>
        {/* ── Hero ──────────────────────────────────── */}
        <section className="bg-parchment border-b border-border py-12 md:py-20">
          <div className="container-width max-w-3xl">
            <p className="eyebrow mb-4">Guides and advice</p>
            <h1 className="font-display text-4xl md:text-5xl italic text-ink mb-4 leading-tight">
              Will writing and<br className="hidden sm:block" />estate planning guides
            </h1>
            <p className="body-lg max-w-xl">
              Practical advice for London residents on wills, LPAs, trusts, inheritance tax, and probate.
            </p>
          </div>
        </section>

        {/* ── Articles ──────────────────────────────── */}
        <section className="section-padding">
          <div className="container-width">

            {articles.length === 0 ? (
              <div className="text-center py-14">
                <p className="font-display text-2xl italic text-dust">No articles yet. Check back soon.</p>
              </div>
            ) : (
              <>
                {/* Category filter */}
                {categories.length > 2 && (
                  <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`font-sans text-xs font-medium px-4 py-2 rounded-full border transition-all ${
                          activeCategory === cat
                            ? 'bg-ink text-white border-ink'
                            : 'bg-white text-stone border-border hover:border-brand/40'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}

                {/* Featured article */}
                {filtered.length > 0 && (
                  <Link
                    href={`/blog/${filtered[0].slug}/`}
                    className="card group flex flex-col sm:flex-row gap-0 overflow-hidden mb-5"
                  >
                    {filtered[0].featuredImage && (
                      <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden bg-parchment-2 flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={filtered[0].featuredImage}
                          alt={filtered[0].title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="eager"
                        />
                      </div>
                    )}
                    <div className="p-5 md:p-7 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="eyebrow-brand">{filtered[0].category}</span>
                        <span className="body-sm">{filtered[0].publishDate}</span>
                      </div>
                      <h2 className="font-display text-2xl md:text-3xl italic text-ink group-hover:text-brand transition-colors mb-3 leading-tight">
                        {filtered[0].title}
                      </h2>
                      <p className="body-md line-clamp-2 md:line-clamp-3 mb-4">{filtered[0].excerpt}</p>
                      <span className="eyebrow-brand text-xs">Read article →</span>
                    </div>
                  </Link>
                )}

                {/* Grid */}
                {filtered.length > 1 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {filtered.slice(1).map(article => (
                      <Link key={article.slug} href={`/blog/${article.slug}/`} className="card group overflow-hidden">
                        {article.featuredImage && (
                          <div className="h-40 md:h-44 overflow-hidden bg-parchment-2">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={article.featuredImage}
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div className="p-4 md:p-5">
                          <div className="flex items-center gap-3 mb-2.5">
                            <span className="eyebrow-brand">{article.category}</span>
                            <span className="body-sm">{article.publishDate}</span>
                          </div>
                          <h2 className="font-display text-lg md:text-xl italic text-ink group-hover:text-brand transition-colors mb-2 leading-snug">
                            {article.title}
                          </h2>
                          <p className="body-sm line-clamp-2">{article.excerpt}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {filtered.length === 0 && (
                  <p className="text-center body-md py-10 text-dust">No articles in this category yet.</p>
                )}
              </>
            )}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────── */}
        <section className="bg-ink py-14 md:py-16">
          <div className="container-width text-center">
            <h2 className="font-display text-3xl md:text-4xl italic text-white mb-4">
              Ready to make your will?
            </h2>
            <p className="body-lg text-white/55 max-w-lg mx-auto mb-7">
              Our free matching service connects you with the right specialist in London within 24 hours.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-white text-ink font-sans font-medium text-sm px-7 py-3.5 rounded"
            >
              Find my specialist
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
