// app/services/page.tsx — SERVER COMPONENT
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { services } from '@/data/services';
import { breadcrumbSchema } from '@/lib/schema';
import ServicesIndexClient from './ServicesIndexClient';

export const metadata: Metadata = {
  title: `Will Writing Services London | ${siteConfig.name}`,
  description: 'Browse our full range of will writing and estate planning services in London. Single wills, mirror wills, LPAs, trust planning, estate planning reviews and probate support — all from vetted specialists.',
  alternates: { canonical: `${siteConfig.url}/services/` },
};

export default function ServicesIndexPage() {
  const ldBreadcrumb = breadcrumbSchema([{ label: 'Services' }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />
      <ServicesIndexClient services={services} />
    </>
  );
}
