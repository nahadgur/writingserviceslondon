import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { ContactPageClient } from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Will Writing Services London',
  description: 'How to reach our free matching service — enquiry form, general questions, UK GDPR data requests, and the partner contact for vetted London will writers.',
  alternates: { canonical: '/contact/' },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/contact/`,
    siteName: siteConfig.name,
    title: 'Contact Will Writing Services London',
    description: 'Enquiry form, general questions, UK GDPR data requests, and partner contact.',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Will Writing Services London',
    description: 'Enquiry form, general questions, UK GDPR data requests, and partner contact.',
  },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
