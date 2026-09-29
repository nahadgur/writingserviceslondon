import { withPageSeo } from '@/lib/pageMetadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = withPageSeo("/terms/", {
  title: 'Terms of use',
  description:
    'Terms of use for Will Writing Services London, a will writing and estate planning service for London. Read the rules of using this site and the limits of our liability.',
  alternates: { canonical: '/terms/' },
  robots: { index: true, follow: true },
});

const LAST_REVIEWED = '4 May 2026';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main data-edition-page="terms" id="main-content" className="flex-grow" style={{ background: 'var(--parchment)' }}>
        <section data-edition-hero style={{ background: 'var(--ink)', color: '#fff' }}>
          <div className="container-width pt-8 pb-12">
            <p className="eyebrow mb-4" style={{ color: "rgba(255,255,255,0.76)" }}>Legal — terms of use</p>
            <h1
              style={{
                fontFamily: 'var(--font-inter), Arial, sans-serif',
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                lineHeight: 1.05,
                color: '#fff',
              }}
              className="mb-4"
            >
              Terms of <em style={{ color: 'var(--brand)' }}>use</em>
            </h1>
            <p
              className="max-w-2xl"
              style={{
                fontFamily: 'var(--font-inter), Arial, sans-serif',
                fontWeight: 400,
                fontSize: 17,
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.72)',
              }}
            >
              The rules that apply when you use this site or instruct us to do work. Plain English wherever possible.
            </p>
            <p
              className="mt-4"
              style={{
                fontFamily: 'var(--font-inter), Arial, sans-serif',
                fontSize: 11,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: "rgba(255,255,255,0.76)",
              }}
            >
              Last reviewed · {LAST_REVIEWED}
            </p>
          </div>
        </section>

        <section className="container-width py-8">
          <Breadcrumbs items={[{ label: 'Terms' }]} />

          <article
            className="max-w-3xl mx-auto"
            style={{
              fontFamily: 'var(--font-inter), Arial, sans-serif',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: 1.75,
              color: 'rgba(28,24,20,0.85)',
            }}
          >
            <Section title="1. About these terms">
              <p>
                These terms govern your use of {siteConfig.url.replace(/https?:\/\//, '')} and the will writing and estate planning service operated by {siteConfig.name}. By using the site or submitting an enquiry, you agree to these terms. If you don&apos;t agree, please don&apos;t use the service.
              </p>
              <p>
                We may update these terms from time to time. The &quot;Last reviewed&quot; date at the top of the page reflects the most recent change. Continued use of the site after changes means you accept the updated terms.
              </p>
            </Section>

            <Section title="2. What we are">
              <p>
                {siteConfig.name} is a will writing and estate planning service for London. We take your instructions, draft the documents, and take you through signing and witnessing.
              </p>
              <p>
                <strong>We are not a firm of solicitors and we do not hold client funds.</strong> Will writing is not a regulated activity in England and Wales. Where a matter genuinely calls for a solicitor, for example contested estates, substantial business assets, or property held abroad, we will tell you so rather than take the work.
              </p>
            </Section>

            <Section title="3. Quotes and fees">
              <p>
                The initial consultation is free and carries no obligation to proceed. If you decide to go ahead we give you a fixed-fee quote in writing before any work begins, and that is the price you pay. We do not bill by the hour. Third-party fees, such as the Office of the Public Guardian registration fee for a lasting power of attorney, are payable separately and we will identify them in the quote.
              </p>
            </Section>

            <Section title="4. No legal advice">
              <p>
                Nothing on this site — including service descriptions, blog articles, location guides, or worked examples — constitutes legal advice. Content is general information only. Estate planning is highly personal and depends on your specific circumstances; only a qualified will writer or solicitor who has reviewed your full situation can advise you.
              </p>
              <p>
                Worked examples and case studies are illustrative composites based on typical situations. Names, figures, and outcomes are representative, not specific to a particular client unless explicitly stated otherwise.
              </p>
            </Section>

            <Section title="5. Your responsibilities">
              <p>When you use the service, you confirm that:</p>
              <ul>
                <li>You are at least 18 years old.</li>
                <li>The information you provide in the enquiry form is accurate and complete to the best of your knowledge.</li>
                <li>You consent to us contacting you about your enquiry (you tick a box on the form to confirm this).</li>
                <li>You will not use the site to submit malicious, abusive, or fraudulent enquiries, or to attempt to interfere with the site&apos;s operation.</li>
              </ul>
            </Section>

            <Section title="6. Our responsibilities to you">
              <p>
                When you instruct us, we are responsible for:
              </p>
              <ul>
                <li>Quoting a fixed fee in writing before work begins, and honouring it.</li>
                <li>Taking your instructions properly and drafting documents that reflect them.</li>
                <li>Explaining what the law requires for the document to be valid, including how it must be signed and witnessed.</li>
                <li>Setting out clearly what happens to the original document and how it can be retrieved.</li>
                <li>Responding to complaints about our work.</li>
              </ul>
              <p>
                You remain responsible for reading the draft and telling us if it does not say what you intend, and for signing the document in the way we explain. A will that is not executed correctly is not valid, however well it is drafted. If something is wrong with our work, tell us and we will put it right. If you are not satisfied with how we handle a complaint you may be able to take it further, and we will tell you what routes are open to you at that point.
              </p>
            </Section>

            <Section title="7. Limitation of liability">
              <p>
                Nothing in this section affects your statutory rights under the Consumer Rights Act 2015, which require us to carry out our service with reasonable care and skill. Subject to that, and to the extent permitted by law, we are not liable for:
              </p>
              <ul>
                <li>Loss caused by information you gave us that was inaccurate or incomplete.</li>
                <li>Loss caused by a document being signed or witnessed other than as we explained.</li>
                <li>Loss arising from reliance on general information published on this site.</li>
                <li>Indirect or consequential losses (lost income, lost opportunity, etc.).</li>
              </ul>
              <p>
                Nothing in these terms excludes or limits liability for fraud, fraudulent misrepresentation, death or personal injury caused by negligence, or any other liability that cannot be excluded under English law.
              </p>
            </Section>

            <Section title="8. Intellectual property">
              <p>
                The text, design, code, and other content on this site are owned by {siteConfig.name} or licensed for our use. You may view and share pages for personal, non-commercial use, but not republish or commercially redistribute content without permission.
              </p>
            </Section>

            <Section title="9. Privacy and cookies">
              <p>
                How we handle personal data is set out in our{' '}
                <Link href="/privacy/">privacy notice</Link>. The cookie banner on the site lets you accept or reject the analytics cookie before any non-essential cookies are loaded.
              </p>
            </Section>

            <Section title="10. Governing law">
              <p>
                These terms are governed by the laws of England and Wales. Disputes will be dealt with by the courts of England and Wales.
              </p>
            </Section>

            <Section title="11. Contact">
              <p>
                Questions about these terms — see the channels on our{' '}
                <Link href="/contact/">contact page</Link>.
              </p>
            </Section>

            <div
              className="mt-12 p-6"
              style={{
                background: 'var(--parchment-2)',
                border: '0.5px solid var(--border)',
                borderRadius: 0,
              }}
            >
              <p className="eyebrow mb-3" style={{ color: 'var(--brand)' }}>Related</p>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(28,24,20,0.85)' }}>
                See our{' '}
                <Link href="/privacy/" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>
                  privacy notice
                </Link>
                {' '}for what we collect, or read{' '}
                <Link href="/about/" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>
                  how we work
                </Link>.
              </p>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2
        style={{
          fontFamily: 'var(--font-inter), Arial, sans-serif',
          fontSize: 'clamp(22px, 3vw, 30px)',
          fontWeight: 400,
          letterSpacing: '-0.01em',
          lineHeight: 1.2,
          color: 'var(--ink)',
          marginBottom: 16,
        }}
      >
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
      <style>{`
        section a { color: var(--brand); text-decoration: underline; }
        section a:hover { color: var(--brand-light); }
        section ul { list-style: disc; padding-left: 24px; margin: 0 0 16px; }
        section ul li { margin-bottom: 8px; }
        section strong { font-weight: 500; color: var(--ink); }
      `}</style>
    </section>
  );
}
