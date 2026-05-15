import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'About the matching service',
  description:
    'Will Writing Services London is a free matching service connecting London families with vetted will writers and estate planning specialists. We are not a law firm — we introduce clients to qualified professionals.',
  alternates: { canonical: '/about/' },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow" style={{ background: 'var(--parchment)' }}>
        <section style={{ background: 'var(--ink)', color: '#fff' }}>
          <div className="container-width pt-20 pb-12">
            <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>About — the matching service</p>
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
              How we match London families with the <em style={{ color: 'var(--brand)' }}>right will writer</em>
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
              {siteConfig.name} is a free, no-obligation matching service. We read your circumstances, then introduce you to up to three vetted will writers and estate planning specialists who already work with situations like yours.
            </p>
          </div>
        </section>

        <section className="container-width py-14">
          <Breadcrumbs items={[{ label: 'About' }]} />

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
            <Section title="What we are — and aren't">
              <p>
                We are a referral and matching service. We are <strong>not</strong> a law firm, a will writing practice, or a regulated legal service provider. We do not draft wills, witness signatures, store original documents, or hold client funds.
              </p>
              <p>
                What we do: we read your enquiry, identify which of our vetted will writers are best placed to help, and introduce you. Once an introduction has been made, the relationship is between you and the will writer — including their fee, their service terms, and their professional accountability.
              </p>
            </Section>

            <Section title="How matching works">
              <p>The process from enquiry to first call typically takes 24 hours:</p>
              <ol>
                <li><strong>You submit the form.</strong> Name, contact details, what type of will or estate planning support you need, and any context you want to share.</li>
                <li><strong>We read it.</strong> A real person reviews every enquiry — we don&apos;t auto-route. The complexity of your situation (mirror wills, trusts, overseas property, blended families, business interests) determines which specialists we shortlist.</li>
                <li><strong>We make up to three introductions.</strong> You receive contact details for the matched professionals. They contact you to arrange a free initial conversation, usually within a working day.</li>
                <li><strong>You choose.</strong> Compare quotes, ask questions, and engage whichever professional you&apos;re most comfortable with — or none, if none are right for you. There is no obligation either way.</li>
              </ol>
            </Section>

            <Section title="How we vet professionals in our network">
              <p>Every will writer in our network is checked for the following before joining:</p>
              <ul>
                <li><strong>Qualifications.</strong> Membership of a recognised professional body — typically the Society of Will Writers, the Institute of Professional Willwriters, the Society of Trust and Estate Practitioners (STEP), or a Solicitors Regulation Authority (SRA) registration.</li>
                <li><strong>Professional indemnity insurance.</strong> Current cover at a level appropriate to the value and complexity of work undertaken.</li>
                <li><strong>Practical experience.</strong> A demonstrated track record of producing legally valid documents in line with the Wills Act 1837 and current estate planning legislation, including supervised drafting and witnessing arrangements.</li>
                <li><strong>Disclosure of any complaints.</strong> We ask about, and verify, any active or unresolved complaints with the relevant professional body.</li>
              </ul>
              <p>
                We re-check qualifications and insurance annually. If a professional&apos;s status changes, they are removed from the network until the issue is resolved.
              </p>
            </Section>

            <Section title="What it costs you">
              <p>
                Nothing. The matching service is free to clients — we are paid by the will writers in our network when an introduction leads to engaged work. This means:
              </p>
              <ul>
                <li>You never pay us — only the professional you choose to engage.</li>
                <li>You see the will writer&apos;s actual fee before committing. There is no markup added by us.</li>
                <li>Our incentive is to match well — a poor match means you don&apos;t engage, which means we&apos;re not paid.</li>
              </ul>
            </Section>

            <Section title="What kinds of situations we handle">
              <p>
                Our network covers the full range of personal estate planning work for London families and individuals — single wills, mirror wills for couples, lasting powers of attorney for property and welfare, trust planning, broader estate planning reviews, and probate support after bereavement. See the{' '}
                <Link href="/services/">services page</Link>
                {' '}for a fuller breakdown of each.
              </p>
              <p>
                Some situations need specialist input — overseas property, business interests, beneficiaries with disabilities, Sharia-compliant wills, large estates with significant inheritance tax exposure, or culturally specific inheritance traditions. Our matching process surfaces these requirements and connects you with professionals who handle them regularly rather than rarely.
              </p>
            </Section>

            <Section title="How we handle your data">
              <p>
                We collect only what we need to make the introduction — see our{' '}
                <Link href="/privacy/">privacy notice</Link>
                {' '}for the full UK GDPR detail. The headline is: name, contact, broad service type, optional message. We never sell or share data outside the matched professionals you authorise.
              </p>
            </Section>

            <Section title="What happens after a match">
              <p>
                Once you and the matched professional are speaking directly, we step back. The professional handles the work end-to-end — initial consultation, drafting, witnessing arrangements, document storage, and any subsequent updates. If you encounter any issue with a matched professional, please tell us — we use that feedback to maintain network standards and may re-match you with an alternative if appropriate.
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
              <p className="eyebrow mb-3" style={{ color: 'var(--brand)' }}>Get started</p>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(28,24,20,0.85)' }}>
                Ready to be matched?{' '}
                <Link href="/services/" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>
                  Browse the six services
                </Link>{' '}
                or{' '}
                <Link href="/contact/" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>
                  contact us
                </Link>
                {' '}with a question first.
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
        section ul, section ol { padding-left: 24px; margin: 0 0 16px; }
        section ul { list-style: disc; }
        section ol { list-style: decimal; }
        section ul li, section ol li { margin-bottom: 8px; }
        section strong { font-weight: 500; color: var(--ink); }
      `}</style>
    </section>
  );
}
