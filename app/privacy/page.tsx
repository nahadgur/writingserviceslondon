// SERVER COMPONENT
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy Policy — Will Writing Services London',
  description: 'Privacy policy for Will Writing Services London. How we collect, use, and protect personal data submitted through our referral and matching service.',
  alternates: { canonical: `${siteConfig.url}/privacy/` },
  robots: { index: true, follow: true },
};

const serif = (size: number | string, extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: 'var(--font-cormorant), Georgia, serif',
  fontSize: size, fontStyle: 'italic', fontWeight: 400,
  color: 'var(--ink)', lineHeight: 1.15, ...extra,
});

const sections = [
  {
    id: 'who-we-are',
    heading: 'Who we are',
    body: [
      'Will Writing Services London operates at willwritingserviceslondon.co.uk. We are a referral and introduction service connecting members of the public with vetted will writers and estate planning specialists. We are not a law firm, solicitors\' practice, or regulated financial adviser.',
      'For the purposes of data protection law, Will Writing Services London is the data controller in respect of personal data collected through this website and our enquiry process.',
    ],
  },
  {
    id: 'what-we-collect',
    heading: 'What personal data we collect',
    body: [
      'When you submit an enquiry through our website, we collect: your full name, email address, telephone number, the type of service you are enquiring about, any additional information you provide in the message field, the URL of the page from which you submitted the enquiry, and the source of the enquiry (form type).',
      'We also collect standard website analytics data through Google Analytics, including pages visited, time on site, device type, and approximate geographic location. This data is aggregated and does not identify you individually.',
      'We do not collect financial information, identity documents, or any sensitive personal data through our website.',
    ],
  },
  {
    id: 'how-we-use-it',
    heading: 'How we use your personal data',
    body: [
      'We use the personal data you submit to: contact you to discuss your enquiry and confirm your requirements; identify and approach suitable specialists in our network; make an introduction between you and the specialist; and follow up to confirm the introduction was satisfactory.',
      'We do not use your personal data for automated decision-making or profiling. We do not use your data for marketing purposes without your explicit consent.',
      'Our legal basis for processing your enquiry data is legitimate interests -- specifically, the legitimate interest of fulfilling the referral service you have requested by contacting us.',
    ],
  },
  {
    id: 'who-we-share-with',
    heading: 'Who we share your data with',
    body: [
      'We share your name, contact details, and service requirements with the specialist or specialists we introduce you to. This is necessary to facilitate the introduction and is the core purpose of our service.',
      'We use Google Analytics to understand how visitors use our website. Google processes analytics data in accordance with Google\'s privacy policy. We use Google Sheets (via Google Apps Script) to store enquiry data securely.',
      'We do not sell your personal data to third parties. We do not share your data with marketing companies, data brokers, or any party not directly involved in facilitating your referral.',
    ],
  },
  {
    id: 'retention',
    heading: 'How long we keep your data',
    body: [
      'We retain your enquiry data for a period of 24 months from the date of your enquiry. After this period, your data is deleted from our systems.',
      'If you ask us to delete your data before this period has elapsed, we will do so within 30 days of receiving your request, subject to any legal obligation to retain records.',
    ],
  },
  {
    id: 'your-rights',
    heading: 'Your rights',
    body: [
      'Under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, you have the following rights in relation to your personal data: the right to access the data we hold about you; the right to correct inaccurate data; the right to request deletion of your data; the right to restrict processing of your data; the right to data portability; and the right to object to processing.',
      'To exercise any of these rights, contact us at the email address below. We will respond within one calendar month. If you are unhappy with how we handle your request or your data generally, you have the right to complain to the Information Commissioner\'s Office (ICO) at ico.org.uk.',
    ],
  },
  {
    id: 'cookies',
    heading: 'Cookies',
    body: [
      'Our website uses cookies for analytics purposes (Google Analytics). These cookies collect information about how visitors use the site -- pages visited, time on site, and similar aggregate data. No personally identifiable information is collected through cookies.',
      'You can control cookies through your browser settings. Disabling analytics cookies will not affect your ability to use the website or submit an enquiry.',
    ],
  },
  {
    id: 'changes',
    heading: 'Changes to this policy',
    body: [
      'We may update this privacy policy from time to time. The current version will always be available at this URL. Material changes will be noted at the top of the page with the date of update.',
      'This policy was last updated in April 2026.',
    ],
  },
  {
    id: 'contact',
    heading: 'Contact',
    body: [
      'If you have any questions about this privacy policy or how we handle your personal data, please contact us through the enquiry form on our website.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Simple parchment hero — no dark treatment, this is a legal document page */}
        <section style={{ background: 'var(--parchment)', borderBottom: '0.5px solid var(--border)', padding: '52px 0 44px' }}>
          <div className="container-width">
            <p className="eyebrow mb-4">Legal</p>
            <h1 style={serif('clamp(28px,4vw,44px)', { marginBottom: 12 })}>Privacy policy</h1>
            <p className="body-lg" style={{ maxWidth: 520 }}>
              How Will Writing Services London collects, uses, and protects personal data.
            </p>
          </div>
        </section>

        <div className="container-width py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-12">

            <article style={{ maxWidth: 680 }}>
              {sections.map(s => (
                <section key={s.id} id={s.id} style={{ marginBottom: 40 }}>
                  <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 22, fontStyle: 'italic', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.2, marginBottom: 12 }}>
                    {s.heading}
                  </h2>
                  {s.body.map((para, i) => (
                    <p key={i} className="body-lg" style={{ marginBottom: 10 }}>{para}</p>
                  ))}
                </section>
              ))}
            </article>

            {/* Sidebar — anchor nav */}
            <aside>
              <div className="lg:sticky" style={{ top: 28 }}>
                <div className="sidebar-box">
                  <p className="eyebrow mb-3">Contents</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {sections.map(s => (
                      <a key={s.id} href={`#${s.id}`} style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 11, fontWeight: 300, color: 'var(--stone)', textDecoration: 'none', lineHeight: 1.4, transition: 'color 0.12s' }} className="hover:text-brand-500">
                        {s.heading}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
