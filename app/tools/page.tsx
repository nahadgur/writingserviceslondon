import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { ToolsPageClient } from './ToolsPageClient';

export const metadata: Metadata = {
  title: 'Estate Planning Calculators for London Residents | Free Tools',
  description: 'Six free 2026-current tools — inheritance tax, intestacy outcome, LPA cost, probate fees, care cost protection, and a will review checker. Built for London estates.',
  alternates: { canonical: '/tools/' },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/tools/`,
    siteName: siteConfig.name,
    title: 'Estate Planning Calculators for London Residents',
    description: 'Six free 2026-current tools covering IHT, intestacy, LPAs, probate, care costs, and will reviews.',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estate Planning Calculators for London Residents',
    description: 'Six free 2026-current tools covering IHT, intestacy, LPAs, probate, care costs, and will reviews.',
  },
  robots: { index: true, follow: true },
};

export default function ToolsPage() {
  return <ToolsPageClient />;
}
