'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, CheckCircle, Clock, Shield, Star } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { LeadFormModal } from '@/components/LeadFormModal';
import { PricingSection } from '@/components/PricingSection';
import { Testimonials } from '@/components/Testimonials';
import { SubAreasGrid } from '@/components/SubAreasGrid';
import type { AreaHub } from '@/data/locations';
import type { AreaContent } from '@/data/areaContent';
import type { Service } from '@/data/services';

interface Props {
  hub: AreaHub;
  content: AreaContent | undefined;
  services: Service[];
  areaFaqs: { question: string; answer: string }[];
}

export default function CityPageClient({ hub, content, services, areaFaqs }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroHeading = content?.heroHeading ?? `Will Writing Services in ${hub.name}`;
  const heroParagraph = content?.heroParagraph ?? `Connect with vetted will writers and estate planning specialists covering ${hub.name} and surrounding areas. Free matching service, no obligation.`;

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        {/* Hero */}
        <section className="bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/30 via-gray-900/0 to-transparent pointer-events-none" />
          <div className="container-width py-12 md:py-20 relative z-10">
            <Breadcrumbs items={[{ label: 'Locations', href: '/location/' }, { label: hub.name }]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-brand-500/30">
                  <MapPin className="w-4 h-4" /> {hub.postcode} &middot; {hub.region} London
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                  Will Writing in <span className="text-brand-400">{hub.name}</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">{heroParagraph}</p>
              </div>
              <div>
                <HeroLeadForm city={hub.name} />
              </div>
            </div>
          </div>
        </section>

        <div className="container-width py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">

              {/* Intro */}
              {content && (
                <section className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                    {content.introHeading}
                  </h2>
                  <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                    {content.introParagraphs.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </section>
              )}

              {/* Sub-areas grid */}
              <SubAreasGrid hubName={hub.name} subAreas={hub.subAreas} />

              {/* Why specialist matters */}
              {content?.whySpecialistMatters && (
                <section className="mb-12">
                  <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                    <h3 className="font-display font-bold text-gray-900 mb-3 text-lg">
                      Why the Match Matters in {hub.name}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{content.whySpecialistMatters}</p>
                  </div>
                </section>
              )}

              {/* Services available */}
              <section className="mb-16">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                  Services Available in {hub.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map(service => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}/`}
                      className="block group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                    >
                      <div className="h-36 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-display font-bold text-gray-900 group-hover:text-brand-600 mb-1.5">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{service.description}</p>
                        <span className="text-brand-600 font-medium text-sm flex items-center">
                          Find a specialist <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Who we match */}
              {content?.clientProfile && (
                <section className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                    {content.clientProfile.heading}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {content.clientProfile.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Common triggers */}
              {content?.commonTriggers && content.commonTriggers.length > 0 && (
                <section className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    When {hub.name} Residents Get in Touch
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm">
                    Estate planning conversations in {hub.name} are usually triggered by one of these moments:
                  </p>
                  <ul className="space-y-3">
                    {content.commonTriggers.map((trigger, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-brand-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                        <span className="text-gray-700 text-sm">{trigger}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Local context */}
              {content?.localContext && (
                <section className="mb-12">
                  <div className="flex gap-3 p-5 bg-gray-50 rounded-xl border border-gray-100">
                    <MapPin className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm leading-relaxed">{content.localContext}</p>
                  </div>
                </section>
              )}

              <PricingSection cityName={hub.name} />

              <div className="mb-12">
                <FAQ faqs={areaFaqs} title={`Will Writing in ${hub.name}: Your Questions Answered`} />
              </div>

              <section className="mb-12">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">What Our Clients Say</h2>
                <Testimonials limit={3} />
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-3">
                    Find a Will Writer in {hub.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-5">
                    Free match with vetted specialists covering {hub.name} and all surrounding areas. Most introductions within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="block w-full btn-primary text-center"
                  >
                    Get Your Free Match
                  </button>
                  <div className="mt-5 pt-5 border-t border-gray-100 space-y-3">
                    {[
                      { icon: <Clock className="w-4 h-4 text-brand-500" />, text: 'Matched within 24 hours' },
                      { icon: <Shield className="w-4 h-4 text-brand-500" />, text: 'Vetted and insured specialists' },
                      { icon: <Star className="w-4 h-4 text-brand-500" />, text: 'Free matching — no client charge' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="bg-brand-100 p-1.5 rounded-full">{item.icon}</div>
                        <span className="text-sm font-medium text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub-areas compact list */}
                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 text-sm mb-3">Areas We Cover</h3>
                  <div className="space-y-1.5">
                    {hub.subAreas.map(area => (
                      <div key={area.name} className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-3 h-3 text-brand-400 flex-shrink-0" />
                        <span>{area.name}</span>
                        {area.postcode && <span className="text-gray-400 text-xs">({area.postcode})</span>}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-brand-900 text-white p-6 rounded-2xl">
                  <h3 className="font-display font-bold mb-2">From &pound;150</h3>
                  <p className="text-brand-100 text-sm mb-4">Fixed-fee will writing with no hidden costs. Transparent quotes before any work begins.</p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="block w-full bg-white text-brand-900 text-center font-bold py-3 px-6 rounded-xl hover:bg-brand-50 transition-colors text-sm"
                  >
                    Get Free Quotes
                  </button>
                </div>
              </div>
            </aside>
          </div>

          {/* Bottom CTA */}
          <div className="bg-brand-900 rounded-2xl p-8 md:p-12 text-center mt-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Find a Will Writing Specialist in {hub.name}
            </h2>
            <p className="text-brand-200 mb-8 max-w-2xl mx-auto">
              Free matching with vetted specialists covering {hub.name}, {hub.subAreas.slice(0, 3).map(s => s.name).join(', ')}, and surrounding areas. No obligation.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-brand-900 font-bold text-lg py-4 px-10 rounded-xl hover:bg-brand-50 transition-colors"
            >
              Get Your Free Match
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
