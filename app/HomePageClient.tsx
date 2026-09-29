'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FAQ } from '@/components/FAQ';
import { HomeDisclosure } from '@/components/HomeDisclosure';
import { services } from '@/data/services';
import { AREA_HUBS } from '@/data/locations';
import { FAQS_HOME } from '@/data/site';

const trustItems = [
  { head: 'Fixed fees from £150',    body: 'Quoted in full before any work starts' },
  { head: 'Drafted in 3 to 7 days',  body: 'Faster when the situation is urgent' },
  { head: 'Signing done properly',   body: 'Two witnesses, in person, done right' },
  { head: 'Home visits London-wide', body: 'Evenings and weekends included' },
];

const urgencyCards = [
  { head: 'Buying a Home Together',        body: 'Unmarried partners have zero rights under the Intestacy Rules. A will protects your partner\'s right to your shared home.', cta: 'Mirror wills for couples →', href: '/services/mirror-wills/' },
  { head: 'Children Under 18',             body: 'Without a will, a court decides who raises your children if both parents die. A will names their guardian.', cta: 'Single wills with guardianship →', href: '/services/single-will/' },
  { head: 'A Growing Estate',              body: 'London property values mean most families exceed the £325k IHT threshold. Planning now can reduce or eliminate the bill.', cta: 'Estate planning review →', href: '/services/estate-planning/' },
  { head: 'A Parent in Declining Health',  body: 'An LPA must be registered while capacity exists. Once it is lost, the application cannot be made at all.', cta: 'Lasting power of attorney →', href: '/services/lasting-power-of-attorney/' },
];

const whyUs = [
  { head: 'Drafted Around Your Estate', body: 'A template asks what you own. We ask how it is held, who depends on it, and what happens if someone dies first. A cohabiting couple with a shared mortgage, a Hampstead family facing a seven-figure IHT exposure and a business owner with shareholder obligations need three different wills, not three copies of one.' },
  { head: 'The Signing Handled With You',         body: 'Most home-made wills fail at execution, not drafting. Video witnessing ended on 31 January 2024, so two witnesses must now be physically present at the same time, and a witness who inherits loses their gift. We take you through the signing rather than emailing a document and wishing you luck.' },
  { head: 'Plain About What We Are',                body: 'Will writing is not a regulated activity in England and Wales and we are not a firm of solicitors. Where an estate genuinely needs one, because of overseas property, a likely dispute, or substantial business assets, we say so rather than take the work.' },
];

const processSteps = [
  { n: '1', head: 'Consultation', body: 'We talk through your family, your assets and what you want to happen, at your home or by phone or video if that is easier. No charge, and no obligation to go ahead.' },
  { n: '2', head: 'Drafting and Review', body: 'We draft the will around what you have told us, usually within three to seven working days, and send it over for you to read properly. You come back with changes until it says exactly what you mean.' },
  { n: '3', head: 'Signing and Witnessing', body: 'We take you through the signing appointment, in person, with two eligible witnesses present at the same time. This is the step that decides whether the will works, so we do not leave it to chance.' },
];

const featuredAreas = AREA_HUBS.slice(0, 8);

export function HomePageClient() {
  return <>
    <Header />
    <main data-edition-page="home" className="edition-home container-width" id="main-content">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-copy">
          <p className="eyebrow">Wills, LPAs and probate support &nbsp;·&nbsp; London</p>
          <h1 id="home-title">Will Writing<br />Services London</h1>
          <p className="home-intro">Wills, mirror wills, lasting powers of attorney, trusts and probate support for London families. Fixed fees from £150, home visits in every borough, and urgent appointments when time is short.</p>
          <div className="home-actions"><Link href="/contact/#enquiry" className="btn-primary">Book a consultation</Link><Link href="/services/" className="btn-secondary">See all services</Link></div>
          <p className="home-facts">Fixed fees from £150 &nbsp;·&nbsp; Home visits London-wide &nbsp;·&nbsp; Free first conversation</p>
        </div>
        <div className="home-hero-media"><Image src="/images/london-edition.webp" alt="London townhouses" fill priority sizes="(min-width:1280px) 520px, (min-width:768px) 44vw, 100vw" className="object-cover" /></div>
      </section>

      <section className="home-section" id="services" aria-labelledby="home-services-title">
        <div className="home-section-heading"><div><p className="eyebrow">Our services</p><h2 id="home-services-title">Will Writing and Estate Planning Services</h2></div><Link href="/services/" className="home-text-link">All services →</Link></div>
        <div className="home-service-layout">
          <div className="home-disclosures home-service-list">
            {services.map(service => <HomeDisclosure key={service.id} title={service.title} exclusive>
              <p>{service.description}</p>
              <Link href={'/services/' + service.slug + '/'} className="btn-secondary">See the service</Link>
            </HomeDisclosure>)}
          </div>
          <aside className="home-process" id="process" aria-labelledby="home-process-title">
            <p className="eyebrow">How it works</p><h2 id="home-process-title">Our Will Writing Process</h2>
            {processSteps.map(step => <div className="home-process-step" key={step.n}><h3>{step.head}</h3><p>{step.body}</p></div>)}
            <Link href="/contact/#enquiry" className="btn-primary">Book a consultation</Link>
            <p className="home-process-note">The first conversation is free and there is no obligation to go ahead.</p>
          </aside>
        </div>
      </section>

      <section className="home-section home-editorial" id="questions" aria-labelledby="home-questions-title">
        <div><p className="eyebrow">Common questions</p><h2 id="home-questions-title">Will Writing in London: Common Questions</h2></div>
        <FAQ faqs={FAQS_HOME} />
      </section>

      <section className="home-section home-editorial" aria-labelledby="home-timing-title">
        <div><p className="eyebrow">Why this matters</p><h2 id="home-timing-title">When to Make or Update Your Will</h2></div>
        <div>
          <p className="home-body">The triggers are predictable: buying a property, having a child, a parent's health declining. But most families act only after something has already gone wrong.</p>
          <p className="home-body">A will takes two weeks to complete. An LPA takes five months to register. A grant of probate on an intestate estate takes six months or more. Every day without the right documents in place is a risk your family carries for you.</p>
          <div className="home-disclosures">{urgencyCards.map(card => <HomeDisclosure key={card.head} title={card.head}><p>{card.body}</p><Link href={card.href} className="home-text-link">{card.cta}</Link></HomeDisclosure>)}</div>
        </div>
      </section>

      <section className="home-section home-editorial" aria-labelledby="home-why-title">
        <div><p className="eyebrow">Why use this service</p><h2 id="home-why-title">Why Choose Us</h2>
          <div className="home-assurances">{trustItems.map(item => <div key={item.head}><p>{item.head}</p><span>{item.body}</span></div>)}</div>
        </div>
        <div className="home-disclosures">{whyUs.map(item => <HomeDisclosure key={item.head} title={item.head}><p>{item.body}</p></HomeDisclosure>)}</div>
      </section>

      <section className="home-section home-editorial" aria-labelledby="home-areas-title">
        <div><p className="eyebrow">London areas we cover</p><h2 id="home-areas-title">Will Writing Across Every London Area</h2><Link href="/location/" className="home-text-link">All 15 areas →</Link></div>
        <div className="home-area-list">{featuredAreas.map(hub => <Link key={hub.slug} href={'/location/' + hub.slug + '/'}><div><strong>{hub.name}</strong><span>{hub.postcode}</span></div><p>{hub.subAreas.slice(0,2).map(area => area.name).join(', ')}</p></Link>)}</div>
      </section>

      <section className="home-contact-band">
        <div><p className="eyebrow">Wills, LPAs and probate support &nbsp;·&nbsp; London</p><h2>Book Your Will Writing Consultation</h2><p className="home-facts">Fixed fees from £150 &nbsp;·&nbsp; Home visits London-wide &nbsp;·&nbsp; Free first conversation</p></div>
        <Link href="/contact/#enquiry" className="btn-primary">Book a consultation</Link>
      </section>
    </main>
    <Footer />
  </>;
}
