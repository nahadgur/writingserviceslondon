// SERVER COMPONENT
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'About the Service — Will Writing Services London',
  description: 'Will Writing Services London is a free referral and matching service connecting London residents with vetted will writers and estate planning specialists. We are not a law firm.',
  alternates: { canonical: `${siteConfig.url}/about/` },
};

const serif = (size: number | string, extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: 'var(--font-cormorant), Georgia, serif',
  fontSize: size, fontStyle: 'italic', fontWeight: 400,
  color: 'var(--ink)', lineHeight: 1.15, ...extra,
});

const howItWorks = [
  { n: '1', head: 'Tell us what you need', body: 'Fill in our short form with your name, contact details, and the type of service you are looking for. The form takes under two minutes.' },
  { n: '2', head: 'We match you', body: 'We review your situation and connect you with one or more specialists from our vetted London network who have proven experience with exactly that type of estate.' },
  { n: '3', head: 'You deal directly with the specialist', body: 'We make the introduction and step back. You discuss your requirements, agree a fixed fee, and proceed. We are not involved in the work.' },
];

const whySection = [
  { head: 'We are paid by professionals, never by clients', body: 'The service is completely free to use. Specialists in our network pay us a referral fee when a client relationship begins. You never pay us anything at any stage.' },
  { head: 'Every specialist is vetted before joining', body: 'We check qualifications, professional memberships, professional indemnity insurance, and track record before any specialist is admitted to our network. We remove professionals who generate complaints.' },
  { head: 'We are not a law firm', body: 'We do not provide legal advice, draft documents, or carry professional responsibility for the work our network produces. That responsibility lies with the specialist you instruct. We introduce -- they deliver.' },
  { head: 'We have no preferred provider', body: 'We match based on your situation and location, not on which specialist pays us the most. Our reputation depends on the quality of our introductions.' },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: '#1c1814', position: 'relative', overflow: 'hidden' }}>
          <svg aria-hidden="true" style={{ position: 'absolute', right: 0, bottom: 0, opacity: 0.12, pointerEvents: 'none' }} width="240" height="160" viewBox="0 0 240 160" fill="none">
            <rect x="10"  y="80"  width="28" height="80"  fill="white"/>
            <rect x="46"  y="50"  width="32" height="110" fill="white"/>
            <rect x="54"  y="64"  width="6"  height="8"   fill="#1c1814"/>
            <rect x="64"  y="64"  width="6"  height="8"   fill="#1c1814"/>
            <rect x="86"  y="30"  width="38" height="130" fill="white"/>
            <rect x="95"  y="46"  width="7"  height="9"   fill="#1c1814"/>
            <rect x="107" y="46"  width="7"  height="9"   fill="#1c1814"/>
            <rect x="95"  y="64"  width="7"  height="9"   fill="#1c1814"/>
            <rect x="132" y="70"  width="26" height="90"  fill="white"/>
            <rect x="166" y="42"  width="34" height="118" fill="white"/>
            <rect x="174" y="56"  width="6"  height="8"   fill="#1c1814"/>
            <rect x="184" y="56"  width="6"  height="8"   fill="#1c1814"/>
            <rect x="208" y="62"  width="26" height="98"  fill="white"/>
          </svg>
          <div className="container-width" style={{ position: 'relative', zIndex: 10, paddingTop: 48, paddingBottom: 56 }}>
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#e8943a', marginBottom: 16 }}>About the service</p>
            <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(30px,5vw,50px)', fontWeight: 400, fontStyle: 'italic', color: '#fff', lineHeight: 1.1, marginBottom: 16, maxWidth: 580 }}>
              A free matching service -- not a law firm
            </h1>
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.58)', lineHeight: 1.65, maxWidth: 500 }}>
              Will Writing Services London connects London residents with vetted will writers and estate planning specialists. We do not write wills, draft documents, or provide legal advice. We make introductions -- qualified, considered, and free.
            </p>
          </div>
        </section>

        <div className="container-width py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-14">
            <div>

              {/* What we are */}
              <section style={{ marginBottom: 52 }}>
                <h2 style={serif('clamp(22px,3vw,32px)', { marginBottom: 16 })}>What we are</h2>
                <p className="body-lg mb-4">Will Writing Services London is a referral and introduction service. We maintain a network of vetted will writers, solicitors, and estate planning professionals across London, and we connect clients with the right specialist for their situation.</p>
                <p className="body-lg mb-4">We were established to address a straightforward problem: finding a trustworthy will writer in London is harder than it should be. The market is unregulated, the quality varies enormously, and most people have no way of knowing whether the professional they find online is any good. We do the vetting so our clients do not have to.</p>
                <p className="body-lg">We are not solicitors. We are not a will writing practice. We do not hold client money, draft legal documents, or carry professional indemnity for estate planning work. Every specialist in our network does.</p>
              </section>

              {/* How it works */}
              <section style={{ marginBottom: 52 }}>
                <h2 style={serif('clamp(22px,3vw,32px)', { marginBottom: 20 })}>How the service works</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {howItWorks.map(step => (
                    <div key={step.n} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <span style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(212,105,25,0.12)', border: '0.5px solid rgba(212,105,25,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'var(--font-inter), sans-serif', fontSize: 12, fontWeight: 500, color: '#D46919' }}>{step.n}</span>
                      <div>
                        <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 13, fontWeight: 500, color: 'var(--ink)', marginBottom: 4 }}>{step.head}</p>
                        <p className="body-md">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Why use us */}
              <section style={{ marginBottom: 52 }}>
                <h2 style={serif('clamp(22px,3vw,32px)', { marginBottom: 20 })}>Why use us</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {whySection.map((item, i) => (
                    <div key={i} style={{ paddingLeft: 16, borderLeft: '2px solid rgba(212,105,25,0.3)' }}>
                      <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 13, fontWeight: 500, color: 'var(--ink)', marginBottom: 5 }}>{item.head}</p>
                      <p className="body-md">{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Who we work with */}
              <section style={{ marginBottom: 52 }}>
                <h2 style={serif('clamp(22px,3vw,32px)', { marginBottom: 16 })}>Who we work with</h2>
                <p className="body-lg mb-4">Our network includes solicitors regulated by the Solicitors Regulation Authority, will writers holding membership of the Society of Will Writers, and STEP-qualified estate planning practitioners. All carry professional indemnity insurance as a condition of joining our network.</p>
                <p className="body-lg">We cover all 15 major London hub areas from Mayfair to Stratford, and the surrounding neighbourhoods. Most clients are matched within 24 hours. For urgent situations -- serious illness, imminent surgery, or time-sensitive estate matters -- we can usually arrange same-day introductions.</p>
              </section>

              {/* Useful links */}
              <section>
                <h2 style={serif('clamp(22px,3vw,32px)', { marginBottom: 16 })}>Useful resources</h2>
                <p className="body-lg mb-6">Our guides and tools are free to use and require no registration.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { href: '/guides/', label: 'Estate planning guides', desc: '12 in-depth guides covering wills, IHT, LPA, trusts, and probate' },
                    { href: '/tools/', label: 'Free calculators', desc: 'IHT calculator, intestacy checker, LPA estimator, probate fees' },
                    { href: '/services/', label: 'Our services', desc: 'Single wills, mirror wills, LPAs, trust planning, probate support' },
                    { href: '/location/', label: 'London areas', desc: 'Coverage across 15 London hubs and all surrounding areas' },
                  ].map(l => (
                    <Link key={l.href} href={l.href} className="card p-4 group" style={{ textDecoration: 'none' }}>
                      <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 16, color: 'var(--ink)', marginBottom: 4, transition: 'color 0.12s' }} className="group-hover:text-brand-500">{l.label} →</p>
                      <p className="body-sm">{l.desc}</p>
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="lg:sticky" style={{ top: 28 }}>
                <div className="sidebar-box">
                  <h3 style={serif(20, { marginBottom: 6 })}>Get matched free</h3>
                  <p className="body-sm mb-4">Tell us what you need and we will connect you with a vetted specialist covering your area.</p>
                  <Link href="/services/" className="btn-primary w-full justify-center" style={{ display: 'flex', textDecoration: 'none' }}>
                    See all services
                  </Link>
                </div>
                <div className="sidebar-box">
                  <p className="eyebrow mb-3">Quick links</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {[
                      { href: '/guides/how-to-write-a-will-in-london/', label: 'How to write a will' },
                      { href: '/guides/inheritance-tax-guide-london/', label: 'Inheritance tax guide' },
                      { href: '/guides/intestacy-rules-uk/', label: 'Intestacy rules' },
                      { href: '/tools/', label: 'Free calculators' },
                      { href: '/privacy/', label: 'Privacy policy' },
                    ].map(l => (
                      <Link key={l.href} href={l.href} style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 12, fontWeight: 300, color: 'var(--stone)', textDecoration: 'none', transition: 'color 0.12s' }} className="hover:text-brand-500">
                        {l.label}
                      </Link>
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
