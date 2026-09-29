import { withPageSeo } from '@/lib/pageMetadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = withPageSeo("/privacy/", {
  title: 'Privacy notice',
  description:
    'How Will Writing Services London collects, uses, and protects personal data submitted through this site. UK GDPR notice covering enquiry data, cookies, and your rights.',
  alternates: { canonical: '/privacy/' },
  robots: { index: true, follow: true },
});

const LAST_REVIEWED = '4 May 2026';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main data-edition-page="privacy" id="main-content" className="flex-grow" style={{ background: 'var(--parchment)' }}>
        <section data-edition-hero style={{ background: 'var(--ink)', color: '#fff' }}>
          <div className="container-width pt-8 pb-12">
            <p className="eyebrow mb-4" style={{ color: "rgba(255,255,255,0.76)" }}>Legal — Privacy notice</p>
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
              Privacy <em style={{ color: 'var(--brand)' }}>notice</em>
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
              How {siteConfig.name} collects, uses, and protects personal data submitted through this site. Written to satisfy UK GDPR and PECR.
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
          <Breadcrumbs items={[{ label: 'Privacy' }]} />

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
            <Section title="Plain-English summary">
              <p>
                We collect your name, contact details, and the type of will or estate-planning help you need, so that we can contact you about your enquiry and carry out the work if you go ahead. We do not pass your details to any other company. They are never sold and never shared for marketing. You have full UK GDPR rights, including the right to ask us to delete your data and the right to complain to the ICO.
              </p>
            </Section>

            <Section title="1. Who we are">
              <p>
                {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates {' '}
                <strong>{siteConfig.url.replace(/https?:\/\//, '')}</strong>{' '}
                as a will writing and estate planning service for London. We are the data controller for personal information submitted via this site.
              </p>
              <p>
                <strong>We are not a firm of solicitors.</strong> Will writing is not a regulated activity in England and Wales. We handle your enquiry ourselves and do not pass it to any other company.
              </p>
            </Section>

            <Section title="2. What data we collect">
              <p>When you submit the enquiry form we collect:</p>
              <ul>
                <li><strong>Full name</strong> — so we can address you correctly when we get in touch.</li>
                <li><strong>Email address</strong> — to acknowledge your enquiry and follow up.</li>
                <li><strong>Phone number</strong> — so we can call you to arrange the consultation.</li>
                <li><strong>Service type</strong> — the kind of will or estate planning support you&apos;re seeking.</li>
                <li><strong>Optional message</strong> — any additional context you choose to provide.</li>
                <li><strong>Page you submitted from, and how you reached the site</strong> — the referring page and any campaign tags, so we know which pages generate enquiries.</li>
                <li><strong>IP address</strong> — used briefly to rate-limit submissions and block automated spam. It is not stored alongside your enquiry record.</li>
              </ul>
              <p>
                We do <strong>not</strong> collect estate values, asset details, beneficiary information, or any specific testamentary content through our forms. Those details are discussed at the consultation rather than collected through a web form.
              </p>
              <p>
                If you accept analytics cookies, we also collect anonymised browsing data through Google Analytics 4 — see &quot;Cookies&quot; below.
              </p>
            </Section>

            <Section title="3. Why we collect it (lawful basis)">
              <p>
                We process enquiry data on the basis of <strong>your consent</strong> (UK GDPR Article 6(1)(a)). You tick a box on the form to confirm you want us to contact you about your enquiry. You can withdraw consent at any time by emailing us, and withdrawal does not affect the lawfulness of processing carried out before you withdrew.
              </p>
              <p>
                If you go on to instruct us, we then process your data on the basis of <strong>performance of a contract</strong> (Article 6(1)(b)) for the work itself, and on the basis of our <strong>legal obligations</strong> (Article 6(1)(c)) where we are required to keep records of it.
              </p>
            </Section>

            <Section title="4. Who we share it with">
              <p>
                We do not share your enquiry with any other will writer, firm, or introducer. Your details stay with us. The only third parties involved are the technology providers we use to run the site and hold our records, listed below. They act as our processors and may not use your data for their own purposes.
              </p>
              <p>The form submission itself is processed using:</p>
              <ul>
                <li><strong>Vercel Inc.</strong> — hosts this website and passes the form submission on to our enquiry record.</li>
                <li><strong>Google Apps Script</strong> (Google LLC) — receives the form submission and writes it to our enquiry record.</li>
                <li><strong>Google Workspace</strong> (Google LLC) — stores the enquiry record and sends our notification email.</li>
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
                Enquiry records for people who do not go on to instruct us are kept for <strong>24 months</strong> from the date of submission, after which they are deleted. We keep them this long to handle follow-up questions and complaints. Where you do instruct us, we keep the client file for as long as we are required to, because a will can be relied on decades after it is signed and we may need to evidence how it was prepared and executed.
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
                Data submitted through the form is transmitted over HTTPS. Stored enquiry records are protected by Google Workspace account access controls (two-factor authentication enforced). Access is limited to the people who deal with enquiries and client work.
              </p>
              <p>
                No system is perfectly secure. If we ever suffer a personal data breach that is likely to affect your rights, we will notify you and the ICO within 72 hours, as UK GDPR requires.
              </p>
            </Section>

            <Section title="9. Sensitive nature of will-writing enquiries">
              <p>
                We recognise that estate planning enquiries can touch on health status, family relationships, bereavement, and other sensitive matters. We deliberately limit what the form collects — name, contact details, and the broad type of help you need — so that more sensitive information is discussed with us directly at the consultation rather than typed into a web form.
              </p>
              <p>
                If you accidentally include sensitive information in the optional message field, you can ask us to delete the enquiry record at any time using the contact details above.
              </p>
            </Section>

            <Section title="10. Changes to this notice">
              <p>
                We review this notice at least once per year and whenever the service changes materially. The &quot;Last reviewed&quot; date at the top of the page reflects the most recent revision.
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
                Looking for the services?{' '}
                <Link href="/services/" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>
                  See the six services
                </Link>{' '}
                we offer across London, or read our{' '}
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
      <div
        className="space-y-4"
        style={{
          fontFamily: 'var(--font-inter), Arial, sans-serif',
          fontWeight: 400,
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
