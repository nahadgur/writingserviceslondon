import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/site';
import { editorialAuthorSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Will Writing Services London is a will writing and estate planning service for London families. Fixed fees, home visits across every borough, and the signing handled properly.',
  alternates: { canonical: '/about/' },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(editorialAuthorSchema()) }} />
      <Header />
      <main id="main-content" className="flex-grow" style={{ background: 'var(--parchment)' }}>
        <section style={{ background: 'var(--ink)', color: '#fff' }}>
          <div className="container-width pt-20 pb-12">
            <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>About us</p>
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
              Will Writing for <em style={{ color: 'var(--brand)' }}>London Families</em>
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
              {siteConfig.name} writes wills, lasting powers of attorney and trusts for people across London. We come to you, quote a fixed fee before starting, and take you through the signing so the document actually works when it is needed.
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
            <Section title="What We Do">
              <p>
                We draft single wills and mirror wills, prepare both types of lasting power of attorney, set up protective property and discretionary trusts, carry out estate planning reviews, and support executors through probate. The full breakdown is on the{' '}
                <Link href="/services/">services page</Link>.
              </p>
              <p>
                Most of the work happens at a client&apos;s kitchen table. We cover every London borough, including evenings and weekends, and we attend hospitals, hospices and care homes where health makes that necessary.
              </p>
            </Section>

            <Section title="What We Are Not">
              <p>
                We are <strong>not</strong> a firm of solicitors, and we do not hold client funds. Will writing is not a regulated activity in England and Wales, which is worth knowing when you compare providers: the job title alone tells you very little, so ask about experience with estates like yours.
              </p>
              <p>
                Some matters genuinely need a solicitor. Contested estates, property held abroad, substantial business assets, and situations where a claim against the estate looks likely all fall into that category. We will tell you when your situation is one of them rather than take the work.
              </p>
            </Section>

            <Section title="How the Process Works">
              <ol>
                <li><strong>Consultation.</strong> We talk through your family, your assets and what you want to happen. At your home, or by phone or video if that is easier. It is free and there is no obligation to go ahead.</li>
                <li><strong>Quote.</strong> A fixed fee in writing before any work starts. No hourly billing, and any third-party costs such as the Office of the Public Guardian registration fee are identified separately.</li>
                <li><strong>Drafting and review.</strong> Usually three to seven working days. You read the draft properly and come back with changes until it says exactly what you mean.</li>
                <li><strong>Signing and witnessing.</strong> We take you through the signing appointment in person. This is the step that decides whether the will works at all.</li>
              </ol>
            </Section>

            <Section title="Why the Signing Matters So Much">
              <p>
                Most home-made wills fail on execution rather than wording. Section 9 of the Wills Act 1837 requires the will to be signed by you, or by someone else in your presence and at your direction, in front of two witnesses who are both there at the same time and who each then sign while you watch.
              </p>
              <p>
                Two things catch people out. Video witnessing was permitted only between 31 January 2020 and 31 January 2024 under a temporary coronavirus order and has not been renewed, so witnesses must now be physically present. And under section 15, a beneficiary or their spouse who witnesses the will loses their gift, which is exactly what happens when the family in the room are the ones asked to sign.
              </p>
            </Section>

            <Section title="What It Costs">
              <p>
                A single will is £150 to £350 and mirror wills for a couple are £250 to £550 for the pair. Lasting powers of attorney are £300 to £900 each, plus the £82 Office of the Public Guardian registration fee. Trust planning runs from £500 to £1,500, estate planning reviews £400 to £1,200, and probate support for straightforward estates £1,500 to £3,500.
              </p>
              <p>
                Where a price sits in its range depends on complexity. The first conversation is free, and you get the full figure in writing before anything starts.
              </p>
            </Section>

            <Section title="Situations We See Often">
              <p>
                Cohabiting couples who assume they have rights they do not have. Blended families where the children of a first marriage need protecting after a second. Owners of leasehold flats and share-of-freehold arrangements. Business owners whose shareholder agreement and will contradict each other. Families whose London house alone pushes the estate past the inheritance tax threshold. Executors who have inherited a mess and need someone to untangle it.
              </p>
              <p>
                Overseas property, beneficiaries with disabilities, Sharia-compliant provisions and large estates with significant inheritance tax exposure all come up regularly enough that they are routine rather than exceptional.
              </p>
            </Section>

            <Section title="How We Handle Your Data">
              <p>
                We collect only what we need to respond to your enquiry: name, contact details, broad service type and an optional message. We do not pass your details to any other company, and we never sell or share them for marketing. The full UK GDPR detail is in our{' '}
                <Link href="/privacy/">privacy notice</Link>.
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
                Ready to start?{' '}
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
