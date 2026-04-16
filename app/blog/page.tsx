'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { blogArticles } from '@/data/blog';

export default function BlogIndexPage() {
  const [modal, setModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(blogArticles.map(a => a.category)));
    return ['All', ...cats];
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return blogArticles;
    return blogArticles.filter(a => a.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main>
        {/* Hero */}
        <section style={{ background: 'var(--parchment)', borderBottom: '0.5px solid var(--border)', padding: '56px 0 48px' }}>
          <div className="container-width max-w-3xl">
            <p className="eyebrow mb-4">Guides and advice</p>
            <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(32px,4vw,52px)', fontStyle: 'italic', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.12, marginBottom: 16 }}>
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
              <div className="text-center py-16">
                <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 22, fontStyle: 'italic', color: 'var(--dust)' }}>
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
                          fontFamily: 'var(--font-inter), sans-serif',
                          fontSize: 12,
                          fontWeight: 500,
                          padding: '7px 16px',
                          borderRadius: 20,
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
                            alt={filtered[0].title}
                            className="w-full h-full object-cover"
                            style={{ transition: 'transform 0.5s' }}
                            loading="eager"
                          />
                        </div>
                      )}
                      <div style={{ padding: '24px 28px' }}>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="eyebrow-brand">{filtered[0].category}</span>
                          <span className="body-sm">{filtered[0].publishDate}</span>
                        </div>
                        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(20px,2.5vw,28px)', fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.2, marginBottom: 10, transition: 'color 0.12s' }}
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
                              alt={article.title}
                              className="w-full h-full object-cover"
                              style={{ transition: 'transform 0.5s' }}
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div style={{ padding: '16px 18px' }}>
                          <div className="flex items-center gap-3 mb-2.5">
                            <span className="eyebrow-brand">{article.category}</span>
                            <span className="body-sm">{article.publishDate}</span>
                          </div>
                          <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 18, fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.2, marginBottom: 6, transition: 'color 0.12s' }}
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
        <section style={{ background: 'var(--ink)', padding: '64px 0' }}>
          <div className="container-width text-center">
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(26px,3.5vw,40px)', fontStyle: 'italic', color: '#fff', marginBottom: 14, lineHeight: 1.2 }}>
              Ready to make your will?
            </h2>
            <p className="body-lg mb-7 mx-auto" style={{ maxWidth: 440, color: 'rgba(255,255,255,0.5)' }}>
              Our free matching service connects you with the right specialist in London within 24 hours.
            </p>
            <button
              onClick={() => setModal(true)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: 'var(--ink)', fontFamily: 'var(--font-inter), sans-serif', fontSize: 13, fontWeight: 500, padding: '13px 28px', borderRadius: 4, border: 'none', cursor: 'pointer' }}
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
