'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import type { BlogArticle } from '@/data/blog';

type ArticleSummary = Pick<BlogArticle, 'slug' | 'title' | 'category' | 'publishDate' | 'featuredImage' | 'featuredImageAlt' | 'excerpt'>;

export function BlogIndexClient({ blogArticles }: { blogArticles: ArticleSummary[] }) {
  const [modal, setModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(blogArticles.map(a => a.category)));
    return ['All', ...cats];
  }, [blogArticles]);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return blogArticles;
    return blogArticles.filter(a => a.category === activeCategory);
  }, [activeCategory, blogArticles]);

  return (
    <>
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header />

      <main data-edition-page="blog" id="main-content">
        {/* Hero */}
        <section data-edition-hero data-directory-hero style={{ background: 'var(--parchment)', borderBottom: '0.5px solid var(--border)', padding: "32px 0 32px" }}>
          <div className="container-width max-w-3xl">
            <h1 style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 'clamp(32px,4vw,52px)', fontStyle: 'normal', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.12, marginBottom: 16 }}>
              Will writing and estate planning guides
            </h1>
            <p className="body-lg max-w-xl">
              Practical advice for London residents on wills, LPAs, trusts, inheritance tax, and probate — written for people navigating these decisions for the first time.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-width">
            {blogArticles.length === 0 ? (
              <div className="text-center py-10">
                <p style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 22, fontStyle: 'normal', color: 'var(--dust)' }}>
                  No articles yet. Check back soon.
                </p>
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
                        style={{
                          fontFamily: 'var(--font-inter), Arial, sans-serif',
                          fontSize: 12,
                          fontWeight: 500,
                          padding: "7px 16px",
                          borderRadius: 0,
                          border: activeCategory === cat ? 'none' : '0.5px solid var(--border)',
                          background: activeCategory === cat ? 'var(--ink)' : 'transparent',
                          color: activeCategory === cat ? '#fff' : 'var(--stone)',
                          cursor: 'pointer',
                          transition: 'all 0.15s',
                        }}
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
                    className="card group"
                    style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', marginBottom: 20 }}
                  >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
                      {filtered[0].featuredImage && (
                        <div style={{ height: 220, overflow: 'hidden', background: 'var(--parchment-2)' }}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={filtered[0].featuredImage}
                            alt={filtered[0].featuredImageAlt || filtered[0].title}
                            className="w-full h-full object-cover"
                            style={{ transition: 'transform 0.5s' }}
                            loading="eager"
                          />
                        </div>
                      )}
                      <div style={{ padding: "24px 28px" }}>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="eyebrow-brand">{filtered[0].category}</span>
                          <span className="body-sm">{filtered[0].publishDate}</span>
                        </div>
                        <h2 style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 'clamp(20px,2.5vw,28px)', fontStyle: 'normal', color: 'var(--ink)', lineHeight: 1.2, marginBottom: 10, transition: 'color 0.12s' }}
                          className="group-hover:text-brand-500">
                          {filtered[0].title}
                        </h2>
                        <p className="body-md line-clamp-2 mb-4">{filtered[0].excerpt}</p>
                        <span className="eyebrow-brand text-xs">Read article →</span>
                      </div>
                    </div>
                  </Link>
                )}

                {/* Grid */}
                {filtered.length > 1 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {filtered.slice(1).map(article => (
                      <Link key={article.slug} href={`/blog/${article.slug}/`} className="card group overflow-hidden">
                        {article.featuredImage && (
                          <div style={{ height: 170, overflow: 'hidden', background: 'var(--parchment-2)' }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={article.featuredImage}
                              alt={article.featuredImageAlt || article.title}
                              className="w-full h-full object-cover"
                              style={{ transition: 'transform 0.5s' }}
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div style={{ padding: "16px 18px" }}>
                          <div className="flex items-center gap-3 mb-2.5">
                            <span className="eyebrow-brand">{article.category}</span>
                            <span className="body-sm">{article.publishDate}</span>
                          </div>
                          <h2 style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 18, fontStyle: 'normal', color: 'var(--ink)', lineHeight: 1.2, marginBottom: 6, transition: 'color 0.12s' }}
                            className="group-hover:text-brand-500">
                            {article.title}
                          </h2>
                          <p className="body-sm line-clamp-2">{article.excerpt}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {filtered.length === 0 && (
                  <p className="text-center body-md py-10" style={{ color: 'var(--dust)' }}>
                    No articles in this category yet.
                  </p>
                )}
              </>
            )}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--ink)', padding: "32px 0" }}>
          <div className="container-width text-center">
            <h2 style={{ fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 'clamp(26px,3.5vw,40px)', fontStyle: 'normal', color: '#fff', marginBottom: 14, lineHeight: 1.2 }}>
              Ready to make your will?
            </h2>
            <p className="body-lg mb-7 mx-auto" style={{ maxWidth: 440, color: "rgba(255,255,255,0.76)" }}>
              We can help you with the right specialist in London within 24 hours.
            </p>
            <button
              onClick={() => setModal(true)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-inter), Arial, sans-serif', fontSize: 13, fontWeight: 500, padding: "13px 28px", borderRadius: 0, border: 'none', cursor: 'pointer' }}
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
