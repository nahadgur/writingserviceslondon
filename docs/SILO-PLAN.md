# Will Writing Services London (writingserviceslondon) — silo plan

Niche: will writing / estate planning, London. Independent **matching** service
(vetted specialists, fixed-fee, does not draft wills itself). YMYL legal site. Domain
willwritingserviceslondon.co.uk. Already on the clean fleet model: hubs at
`/guides/[slug]/`, spokes at `/blog/[slug]/`, 2 service pillars at
`/services/[serviceSlug]/`, 18 location pages at `/location/[city]/`, plus 6
calculators at `/tools/`.

Status: 12 strong hubs, 19 spokes (~1.6/hub), good hub-to-hub `relatedGuides`
wiring. The job is spoke VOLUME + tightening spoke->hub mapping, not a rebuild. UK
English, no em dashes, no fabricated content, YMYL accuracy (Wills Act 1837, current
IHT rules), matching framing.

## 0. Hub roster decision

There are 12 hubs today, all distinct and legitimate. The fleet template is "10
hubs", but consolidating would 301 working YMYL pages for no real gain. RECOMMENDATION:
keep the 12 hubs and build to ~100 spokes (~8 per hub). If you want strict 10, the
only sensible merges are digital-assets-and-wills -> a spoke under updating-your-will,
and will-for-unmarried-couples -> folded with mirror-wills-guide. Default: keep 12.

The 12 hubs: how-to-write-a-will-in-london, mirror-wills-guide,
will-for-unmarried-couples, updating-your-will, lasting-power-of-attorney-guide,
inheritance-tax-guide-london, trust-planning-guide, probate-guide-london,
intestacy-rules-uk, estate-planning-over-50, business-owner-wills,
digital-assets-and-wills.

## 1. Reserved head terms (not targeted by spokes)

| Reserved | Owned by |
|---|---|
| will writing services London / will writer London | Homepage + services pillar |
| [town] will writing (Clapham, Richmond, etc.) | `/location/[city]/` |
| each hub head term (mirror wills, LPA, IHT, probate, trusts...) | the matching `/guides/` hub |

Spokes take narrower angles than their hub; they must not restate the hub head term.

## 2. Architecture prerequisite (Claude Code, before the writer runs)

1. Add a `hub: string` field to `data/blog.ts` posts (parent hub slug) and set it on
   the 19 existing spokes per section 3. (They currently carry only a `category`
   string.)
2. Add a `draft: boolean` field + draft gate: `draft:true` posts 404 and are
   excluded from `/blog`, hub spoke-grids and the sitemap.
3. Hub pages render a spoke grid of their live child spokes (by `hub`), and each
   spoke links UP to its hub. (Hubs already link to each other via `relatedGuides`.)
4. Author byline = "WWSL" (acronym of Will Writing Services London), as an editorial
   entity `@id` (no invented person/credentials), on the byline and schema author.

## 3. Map the 19 existing spokes to hubs (+ dedup)

- **how-to-write-a-will-in-london:** 2026 guide for families; how to choose a will
  writing service; solicitor vs will writing service; home visit will writing; what
  to expect at a home visit; online will writing; will writing costs in London; is
  will writing regulated in the UK; free and low-cost options; common will writing
  mistakes; emergency will writing.
- **mirror-wills-guide:** mirror wills and joint wills for couples.
- **updating-your-will:** updating or changing your will; will reviews and second
  opinions.
- **lasting-power-of-attorney-guide:** LPA and will writing.
- **inheritance-tax-guide-london:** IHT planning and will writing; will writing and
  charitable gifts.
- **trust-planning-guide:** will writing for homeowners with multiple properties.

DEDUP: the spokes "Mirror Wills...", "Updating Your Will...", "LPA and Will
Writing...", "IHT Planning..." restate their hub head terms. Narrow each to a
distinct angle (e.g. "mirror wills vs single wills for unmarried London couples")
or fold the generic part into the hub and 301. The hub owns the head term.

## 4. Spoke fan-out to ~100 (priority gaps per hub, London/legal-framed)

how-to-write-a-will is well covered; build out the thin hubs:

- **mirror-wills:** mirror vs mutual wills; can you change a mirror will after death of a spouse; mirror wills for second marriages; mirror wills and stepchildren.
- **unmarried-couples:** what happens if a cohabiting partner dies without a will; protecting a partner who isn't on the deeds; cohabitation + property trusts; naming a partner as executor.
- **updating-your-will:** when a divorce affects your will; how marriage revokes a will; codicil vs new will; updating after a new child/grandchild; updating after buying property.
- **LPA:** health vs property-and-affairs LPA; how to register an LPA; LPA cost and the OPG fee; what happens without an LPA; LPA vs deputyship.
- **IHT:** the nil-rate and residence nil-rate band explained; gifts and the 7-year rule; IHT on the family home; business/agricultural relief; reducing IHT with trusts/charity.
- **trust-planning:** types of trust for estate planning; property protection trusts; discretionary trusts; trusts for disabled/vulnerable beneficiaries; trusts and IHT.
- **probate:** how long probate takes in England; the probate process step by step; do you always need probate; probate fees 2026; executor duties and liabilities.
- **intestacy:** the intestacy rules in England and Wales; who inherits if there's no will; intestacy and cohabiting partners; intestacy and stepchildren; how to avoid intestacy.
- **estate-planning-over-50:** estate planning checklist over 50/60/70; care fees and protecting the home; pensions and death benefits; downsizing and your estate; later-life LPA.
- **business-owner-wills:** business succession in a will; business relief and IHT; shareholder/partnership agreements and wills; passing on a family business; digital business assets.
- **digital-assets:** what counts as a digital asset; access to online accounts after death; crypto in a will; social media legacy settings; a digital asset inventory.

## 5. Internal-linking rules (silo-tight, within-site)

- Each spoke links UP once to its hub (`/guides/<hub>/`), to one commercial target
  (a `/services/` pillar or a `/location/<city>/` page where local), and the matching
  CTA. Where a calculator fits, link the relevant `/tools/` one (IHT spoke -> IHT
  calculator, probate spoke -> probate fee tool, LPA -> LPA cost tool, intestacy ->
  intestacy outcome tool).
- Hubs link DOWN to their spokes (grid) and keep their `relatedGuides` hub links.
- External: max 2/page, one per domain, cite a named authority (GOV.UK, OPG, HMRC,
  Society of Will Writers, STEP) first mention; attribute legal claims.

## 6. Conversion + YMYL

- HeroLeadForm + LeadFormModal exist; confirm every hub, spoke and location page has
  a capture path (inline or modal) — pattern-match the garden1 fix.
- Matching framing throughout; "vetted specialists / SWW / STEP / Law Society" claims
  must be verifiable, not invented. No fabricated reviews or named authors. Author =
  WWSL editorial entity.

## 7. Automation (schedulers, mirror essexdental)

- **`wwsl-will-writer`** (writer): one London/legal-framed spoke per run as a
  `draft:true` blog entry under the right hub, with schema + inline up-link + one
  pillar/tool link + matching CTA. Created DISABLED until section 2 exists.
- **`wwsl-will-publisher`** (publisher): flips the oldest parked draft live 2/week;
  enable after a human-reviewed batch (YMYL legal).

## 8. Status tracker

12 hubs. Spokes: 27 toward target ~100 (~8/hub) — 19 live + 8 parked drafts
(digital-assets, online-accounts-after-death, 2026-06-09; business-owner-wills,
business-if-you-die-without-a-will, 2026-06-10; intestacy-rules-uk,
stepchildren-inheritance-rights-no-will, 2026-06-10; probate-guide-london,
how-long-does-probate-take-london, 2026-06-11; estate-planning-over-50,
care-fees-protecting-your-home-london, 2026-06-11; will-for-unmarried-couples,
protecting-a-cohabiting-partner-not-on-the-deeds, 2026-06-12; digital-assets,
which-digital-assets-can-be-inherited, 2026-06-12; trust-planning-guide,
property-protection-trust-wills-london, 2026-06-13). Thinnest hubs to fill next:
round-robin the priority hubs (business-owner-wills, intestacy, probate,
estate-planning-over-50, unmarried-couples, trust-planning each 1 draft;
digital-assets 2 drafts).
## Slug rules (writer: follow on every spoke)

Kebab-case: lowercase, hyphens only, ASCII only, 3-6 words, under ~60 chars.
Do NOT: include a year/date; reuse or near-duplicate an existing slug; use a
reserved head term or the parent hub's head term; keyword-stuff or repeat a word;
use stop words (a/the/to/for). Never rename or reuse a published slug.
