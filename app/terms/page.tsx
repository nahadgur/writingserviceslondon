import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Terms of use',
  description:
    'Terms of use for Will Writing Services London — a free matching service connecting London families with vetted will writers. Read the rules of using this site and the limits of our liability.',
  alternates: { canonical: '/terms/' },
  robots: { index: true, follow: true },
};

const LAST_REVIEWED = '4 May 2026';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow" style={{ background: 'var(--parchment)' }}>
        <section style={{ background: 'var(--ink)', color: '#fff' }}>
          <div className="container-width pt-20 pb-12">
            <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>Legal — terms of use</p>
            <h1
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
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
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 300,
                fontSize: 17,
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.72)',
              }}
            >
              The rules that apply when you use this site or submit an enquiry through the matching service. Plain English wherever possible.
            </p>
            <p
              className="mt-4"
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: 11,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
              }}
            >
              Last reviewed · {LAST_REVIEWED}
            </p>
          </div>
        </section>

        <section className="container-width py-14">
          <Breadcrumbs items={[{ label: 'Terms' }]} />

          <article
            className="max-w-3xl mx-auto"
            style={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 300,
              fontSize: 16,
              lineHeight: 1.75,
              color: 'rgba(28,24,20,0.85)',
            }}
          >
            <Section title="1. About these terms">
              <p>
                These terms govern your use of {siteConfig.url.replace(/https?:\/\//, '')} and the matching service operated by {siteConfig.name}. By using the site or submitting an enquiry, you agree to these terms. If you don&apos;t agree, please don&apos;t use the service.
              </p>
              <p>
                We may update these terms from time to time. The &quot;Last reviewed&quot; date at the top of the page reflects the most recent change. Continued use of the site after changes means you accept the updated terms.
              </p>
            </Section>

            <Section title="2. What we are">
              <p>
                {siteConfig.name} is a referral and introduction service. We connect you with vetted, independent will writers and estate planning specialists serving London.
              </p>
              <p>
                <strong>We are not a law firm or will writing practice.</strong> We do not draft wills, witness signatures, store original documents, hold client funds, or provide legal advice. We make introductions; the work is done by the professional you engage.
              </p>
            </Section>

            <Section title="3. The matching service is free to clients">
              <p>
                You pay nothing to be matched. We are paid by the will writers in our network when an introduction leads to engaged work. You only pay the will writer you choose to engage, on the terms agreed directly with them.
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
                <li>You consent to your details being shared with up to three matched professionals (you tick a box on the form to confirm this).</li>
                <li>You will not use the site to submit malicious, abusive, or fraudulent enquiries, or to attempt to interfere with the site&apos;s operation.</li>
              </ul>
            </Section>

            <Section title="6. Our role ends at introduction">
              <p>
                Once we have introduced you to a matched professional, the relationship is between you and that professional. The will writer is responsible for:
              </p>
              <ul>
                <li>Their own quote and fee, and the terms on which work is engaged.</li>
                <li>The advice they give and the documents they draft.</li>
                <li>Their professional indemnity cover and regulatory standing.</li>
                <li>Witnessing arrangements and document storage.</li>
                <li>Handling any complaints about the service they provide, in line with their professional body&apos;s rules.</li>
              </ul>
              <p>
                We are not responsible for the work of matched professionals. If you encounter a problem, please tell us — we use the feedback to maintain network standards and may re-match you with an alternative if appropriate.
              </p>
            </Section>

            <Section title="7. Limitation of liability">
              <p>
                To the extent permitted by law, our liability is limited to the introduction itself. We are not liable for:
              </p>
              <ul>
                <li>The accuracy, suitability, or quality of work performed by matched professionals.</li>
                <li>Disputes between you and a matched professional.</li>
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
                borderRadius: 8,
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
                  how the matching service works
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
          fontFamily: 'var(--font-cormorant), Georgia, serif',
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
