import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy notice',
  description:
    'How Will Writing Services London collects, uses, and protects personal data submitted through our matching service. UK GDPR notice covering enquiry data, cookies, and your rights.',
  alternates: { canonical: '/privacy/' },
  robots: { index: true, follow: true },
};

const LAST_REVIEWED = '4 May 2026';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow" style={{ background: 'var(--parchment)' }}>
        <section style={{ background: 'var(--ink)', color: '#fff' }}>
          <div className="container-width pt-20 pb-12">
            <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>Legal — Privacy notice</p>
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
              Privacy <em style={{ color: 'var(--brand)' }}>notice</em>
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
              How {siteConfig.name} collects, uses, and protects personal data submitted through the matching service. Written to satisfy UK GDPR and PECR.
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
          <Breadcrumbs items={[{ label: 'Privacy' }]} />

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
            <Section title="Plain-English summary">
              <p>
                We collect your name, contact details, and the type of will or estate-planning help you need solely to match you with up to three vetted will writers. We share your details only with those matched professionals — never sold, never shared with third parties for marketing. You have full UK GDPR rights, including the right to ask us to delete your data and the right to complain to the ICO.
              </p>
            </Section>

            <Section title="1. Who we are">
              <p>
                {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates {' '}
                <strong>{siteConfig.url.replace(/https?:\/\//, '')}</strong>{' '}
                as a free matching service connecting London residents with vetted will writers and estate planning specialists. We are the data controller for personal information submitted via this site.
              </p>
              <p>
                <strong>We are not a law firm or will writing practice.</strong> Once we pass your enquiry to one or more matched professionals, those professionals act as independent data controllers for any further work you instruct them to do.
              </p>
            </Section>

            <Section title="2. What data we collect">
              <p>When you submit the matching form we collect:</p>
              <ul>
                <li><strong>Full name</strong> — to address you correctly when matched professionals contact you.</li>
                <li><strong>Email address</strong> — to send a match confirmation and follow-up.</li>
                <li><strong>Phone number</strong> — to allow matched professionals to contact you directly.</li>
                <li><strong>Service type</strong> — the kind of will or estate planning support you&apos;re seeking.</li>
                <li><strong>Optional message</strong> — any additional context you choose to provide.</li>
                <li><strong>Page you submitted from</strong> — to give the matched professional context.</li>
              </ul>
              <p>
                We do <strong>not</strong> collect estate values, asset details, beneficiary information, or any specific testamentary content through our forms. Any such information is shared directly between you and the will writer you choose to engage.
              </p>
              <p>
                If you accept analytics cookies, we also collect anonymised browsing data through Google Analytics 4 — see &quot;Cookies&quot; below.
              </p>
            </Section>

            <Section title="3. Why we collect it (lawful basis)">
              <p>
                We process enquiry data on the basis of <strong>your consent</strong> (UK GDPR Article 6(1)(a)) — you tick a box on the form to confirm you want to be matched with a will writer. You can withdraw consent at any time by emailing us; withdrawal does not affect lawfulness of processing carried out before withdrawal.
              </p>
              <p>
                Once we share your enquiry with a matched professional, that professional&apos;s lawful basis for follow-up contact is also your consent, plus their <strong>legitimate interest</strong> in responding to a referred enquiry.
              </p>
            </Section>

            <Section title="4. Who we share it with">
              <p>
                Your enquiry is shared with up to three vetted will writers from our London-area network. Each receives your name, email, phone, service requested, and any message you wrote. They are required to treat that information confidentially and use it only to respond to your enquiry.
              </p>
              <p>The form submission itself is processed using:</p>
              <ul>
                <li><strong>Google Apps Script</strong> (Google LLC) — receives the form submission and routes it to our enquiry record.</li>
                <li><strong>Google Workspace</strong> (Google LLC) — stores the enquiry record and sends notification email.</li>
              </ul>
              <p>
                Google may transfer data outside the UK; transfers are covered by the UK Addendum to the EU Standard Contractual Clauses, which provides the safeguards UK GDPR requires.
              </p>
              <p>
                <strong>We do not sell or rent your data to third parties for marketing.</strong>
              </p>
            </Section>

            <Section title="5. How long we keep it">
              <p>
                Enquiry records are kept for <strong>24 months</strong> from the date of submission, after which they are deleted. We keep them this long to handle re-matching requests, complaints, or follow-up questions about a previous match.
              </p>
              <p>
                Anonymised analytics data is retained for 14 months in Google Analytics, then automatically deleted by Google.
              </p>
            </Section>

            <Section title="6. Cookies">
              <p>This site uses two categories of cookie:</p>
              <ul>
                <li>
                  <strong>Strictly necessary</strong> — a small cookie that records your cookie-banner choice. No consent required (PECR exemption).
                </li>
                <li>
                  <strong>Analytics</strong> — Google Analytics 4 (cookies starting <code>_ga</code>) records anonymised page-view data so we can see which pages are useful. Loaded only if you click &quot;Accept&quot; on the cookie banner. You can withdraw consent at any time by clearing site data in your browser; the banner will reappear.
                </li>
              </ul>
              <p>We do not use advertising, retargeting, or social-media tracking cookies.</p>
            </Section>

            <Section title="7. Your rights">
              <p>Under UK GDPR you have the right to:</p>
              <ul>
                <li>Ask for a copy of the personal data we hold about you (subject access request).</li>
                <li>Ask us to correct inaccurate data.</li>
                <li>Ask us to delete your data (right to erasure).</li>
                <li>Withdraw consent at any time.</li>
                <li>Object to processing or restrict it.</li>
                <li>Complain to the UK supervisory authority — the Information Commissioner&apos;s Office at{' '}
                  <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">
                    ico.org.uk/make-a-complaint
                  </a>.
                </li>
              </ul>
              <p>
                To exercise any of these rights, contact us via the details on our{' '}
                <Link href="/contact/">contact page</Link>. We will respond within one calendar month.
              </p>
            </Section>

            <Section title="8. Security">
              <p>
                Data submitted through the form is transmitted over HTTPS. Stored enquiry records are protected by Google Workspace account access controls (two-factor authentication enforced). Access is limited to the people responsible for processing matches.
              </p>
              <p>
                No system is perfectly secure. If we ever suffer a personal data breach that is likely to affect your rights, we will notify you and the ICO within 72 hours, as UK GDPR requires.
              </p>
            </Section>

            <Section title="9. Sensitive nature of will-writing enquiries">
              <p>
                We recognise that estate planning enquiries can touch on health status, family relationships, bereavement, and other sensitive matters. We deliberately limit what the form collects — name, contact details, and the broad type of help you need — so that more sensitive information stays under your control and is shared only with the matched professional you choose to engage.
              </p>
              <p>
                If you accidentally include sensitive information in the optional message field, you can ask us to delete the enquiry record at any time using the contact details above.
              </p>
            </Section>

            <Section title="10. Changes to this notice">
              <p>
                We review this notice at least once per year and whenever the matching service changes materially. The &quot;Last reviewed&quot; date at the top of the page reflects the most recent revision.
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
                Looking for the matching service?{' '}
                <Link href="/services/" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>
                  See the six services
                </Link>{' '}
                we connect London residents with, or read our{' '}
                <Link href="/terms/" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>
                  terms of use
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
      <div
        className="space-y-4"
        style={{
          fontFamily: 'var(--font-inter), system-ui, sans-serif',
          fontWeight: 300,
        }}
      >
        {children}
      </div>
      <style>{`
        section a { color: var(--brand); text-decoration: underline; }
        section a:hover { color: var(--brand-light); }
        section ul { list-style: disc; padding-left: 24px; margin: 0 0 16px; }
        section ul li { margin-bottom: 8px; }
        section code { font-family: ui-monospace, monospace; font-size: 13px; background: rgba(28,24,20,0.06); padding: 1px 6px; border-radius: 3px; }
        section strong { font-weight: 500; color: var(--ink); }
      `}</style>
    </section>
  );
}
