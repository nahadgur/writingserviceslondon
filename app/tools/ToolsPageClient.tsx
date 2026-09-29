'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { IHTCalculator } from '@/components/tools/IHTCalculator';
import { IntestacyCalculator } from '@/components/tools/IntestacyCalculator';
import { LPAEstimator } from '@/components/tools/LPAEstimator';
import { ProbateFeeCalculator } from '@/components/tools/ProbateFeeCalculator';
import { CareCalculator } from '@/components/tools/CareCalculator';
import { ReviewDateCalculator } from '@/components/tools/ReviewDateCalculator';

const tools = [
  {
    id: 'iht',
    title: 'Inheritance tax calculator',
    desc: 'Estimate your estate\'s IHT liability using current 2026 thresholds including the nil-rate band and residence nil-rate band.',
    guide: '/guides/inheritance-tax-guide-london/',
    guideLabel: 'IHT guide',
    component: <IHTCalculator />,
  },
  {
    id: 'intestacy',
    title: 'Intestacy outcome calculator',
    desc: 'See who inherits if you die without a will under the Administration of Estates Act 1925 -- including what unmarried partners receive.',
    guide: '/guides/intestacy-rules-uk/',
    guideLabel: 'Intestacy guide',
    component: <IntestacyCalculator />,
  },
  {
    id: 'lpa',
    title: 'LPA cost estimator',
    desc: 'Calculate the cost of registering a lasting power of attorney including OPG fees, fee reductions, and the current 20-week timeline.',
    guide: '/guides/lasting-power-of-attorney-guide/',
    guideLabel: 'LPA guide',
    component: <LPAEstimator />,
  },
  {
    id: 'probate',
    title: 'Probate fee calculator',
    desc: 'Estimate HMCTS court fees and professional costs for probate on a London estate, including timeline by complexity.',
    guide: '/guides/probate-guide-london/',
    guideLabel: 'Probate guide',
    component: <ProbateFeeCalculator />,
  },
  {
    id: 'care',
    title: 'Care cost protection estimator',
    desc: 'Illustrates the potential benefit of a protective property trust in shielding your estate from residential care cost means-testing.',
    guide: '/guides/trust-planning-guide/',
    guideLabel: 'Trust planning guide',
    component: <CareCalculator />,
  },
  {
    id: 'review',
    title: 'Will review checker',
    desc: 'Find out whether your will needs reviewing based on life events since it was last made -- including marriage, divorce, and asset changes.',
    guide: '/guides/updating-your-will/',
    guideLabel: 'Updating your will guide',
    component: <ReviewDateCalculator />,
  },
];

export function ToolsPageClient() {
  const [active, setActive] = useState(tools[0].id);
  useEffect(() => {
    const sync = () => { const id = window.location.hash.slice(1); if (tools.some(tool => tool.id === id)) setActive(id); };
    sync(); window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);
  const selectTool = (id: string) => { setActive(id); window.history.replaceState(null, '', '#' + id); };
  return <>
    <Header />
    <main data-edition-page="tools" id="main-content">
      <section data-edition-hero data-directory-hero>
        <div className="container-width">
          <p className="eyebrow">Free tools</p>
          <h1>Estate planning calculators for London residents</h1>
          <p className="body-lg">Six free tools covering inheritance tax, intestacy, LPA costs, probate fees, care cost protection, and will reviews. All figures current for 2026.</p>
        </div>
      </section>
      <div className="container-width tools-workspace">
        <div className="tools-picker">
          <label htmlFor="tools-picker">Free tools</label>
          <select id="tools-picker" value={active} onChange={event => selectTool(event.target.value)}>{tools.map(tool => <option key={tool.id} value={tool.id}>{tool.title}</option>)}</select>
        </div>
        <div className="tools-navigation" role="tablist" aria-label="Estate planning calculators" aria-orientation="vertical">
          {tools.map((tool, index) => <button key={tool.id} type="button" role="tab" id={'tab-' + tool.id} aria-controls={tool.id} aria-selected={active === tool.id} tabIndex={active === tool.id ? 0 : -1} onClick={() => selectTool(tool.id)} onKeyDown={event => {
            const next = event.key === 'ArrowDown' ? (index + 1) % tools.length : event.key === 'ArrowUp' ? (index + tools.length - 1) % tools.length : event.key === 'Home' ? 0 : event.key === 'End' ? tools.length - 1 : -1;
            if (next < 0) return; event.preventDefault(); selectTool(tools[next].id); document.getElementById('tab-' + tools[next].id)?.focus();
          }}>{tool.title}</button>)}
        </div>
        <div className="tools-panels">
          {tools.map(tool => <section key={tool.id} id={tool.id} className="tool-panel" role="tabpanel" aria-labelledby={'tool-title-' + tool.id} tabIndex={0} hidden={active !== tool.id}>
            <div className="tool-heading"><h2 id={'tool-title-' + tool.id}>{tool.title}</h2><Link href={tool.guide}>Read {tool.guideLabel} →</Link></div>
            <p className="tool-intro">{tool.desc}</p>
            {tool.component}
          </section>)}
        </div>
      </div>
      <section className="container-width tools-contact-wrap"><div className="tools-contact">
        <div><h2>Ready to speak to a specialist?</h2><p>Wills, lasting powers of attorney, trusts and probate support across London. Most wills are drafted within 3 to 7 working days.</p></div>
        <Link href="/contact/#enquiry" className="btn-primary">Get your free match</Link>
      </div></section>
    </main>
    <Footer />
  </>;
}
