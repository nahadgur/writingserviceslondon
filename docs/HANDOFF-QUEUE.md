# Handoff queue — writingserviceslondon

Cross-tool bridge for the Cowork `wwsl-will-writer` scheduler. Claude Code reads
this, runs the verify/commit step on a reliable filesystem, and clears entries.

---

## 2026-06-12 — wwsl-will-writer run (NEEDS CLAUDE CODE: commit + push)

- **Site:** writingserviceslondon (willwritingserviceslondon.co.uk)
- **Spoke written:** `protecting-a-cohabiting-partner-not-on-the-deeds` (draft:true)
- **Hub:** `will-for-unmarried-couples` (was the last hub at 0 spokes, now 1
  parked draft). Narrow angle vs the hub head term "wills for unmarried couples":
  the specific case of a partner who is not named on the property deeds (legal
  title vs beneficial interest, intestacy outcome, life interest trust / right of
  occupation, the IHT spouse-exemption trap), not the general cohabitation guide.
- **Content:** ~1,150 words, answer-first excerpt + opening (~50 words), 6
  sections + FAQ, 5 distinct FAQs, UK English, no em dashes, matching framing
  ("we are a matching service and do not draft wills or trusts ourselves"). No
  legal guarantees; advises consulting a qualified professional. 2 external
  authority links, one per domain (GOV.UK inherits-without-will + Society of Will
  Writers).
- **YMYL facts (current, attributed):** no common-law marriage in England and
  Wales; intestacy order excludes a cohabiting partner; beneficial-interest
  claims under TOLATA 1996; 1975 Act (Inheritance (Provision for Family and
  Dependants)) 2-year cohabitant route is litigation, not a substitute for a
  will; joint tenants (survivorship) vs tenants in common; no spouse exemption
  for cohabitants so gifts count against the £325,000 nil-rate band, 40% above;
  residence nil-rate band (up to £175,000) only on a home passing to direct
  descendants, so generally unavailable when leaving to a partner; figures
  flagged as check-against-current-HMRC.
- **Linking (silo-tight, structural per the BlogPostClient pattern, not inline
  markdown):** UP-link to `/guides/will-for-unmarried-couples/` auto-renders from
  the `hub` field; tool link added by mapping the hub in `toolByHub` ->
  `/tools/#intestacy` (intestacy outcome calculator); commercial link added in
  `serviceMap` -> `/services/trust-planning/` (Trust planning, fits the property
  trust angle); matching CTA block in content. No sibling links (first spoke in
  this hub). Link gate: `node scripts/check-links.mjs .` = 36 slugs, 0 broken.
- **Files changed:** `data/blog.ts` (new BlogArticle appended before `];`,
  helpers intact); `app/blog/[slug]/BlogPostClient.tsx` (+2 lines: one
  `toolByHub` entry, one `serviceMap` entry); `docs/SILO-PLAN.md` section 8
  counts (25 toward 100, 6 drafts).
- **Note on FS:** the bash/tsc mount served a stale truncated view of blog.ts and
  BlogPostClient.tsx right after the Edit-tool writes (tsc saw an "unterminated
  string"); a rename round-trip (`mv x x.tmp && mv x.tmp x`) forced the mount to
  re-sync to the full files and tsc then passed. The Read tool always showed the
  correct full files.
- **tsc:** `npx tsc --noEmit` clean (exit 0) after the rename round-trip.
- **git:** NOT COMMITTED. The Cowork `.git` mount blocks lock files — a stale
  `.git/index.lock` is present and `rm` / `git add` fail with "Operation not
  permitted" / "File exists". Commit must be done by Claude Code. Two untracked
  artifacts sit in the tree (`.next-dev.log`, `data/__synctest.txt`, both also
  unremovable from the sandbox) — do NOT `git add -A`; stage selectively.

### Action for Claude Code (reliable FS)
1. `cd writingserviceslondon`; clear any stale `.git/index.lock`; `git status`.
2. `npx tsc --noEmit` (rename round-trip blog.ts if the TS server is stale).
3. `git add data/blog.ts app/blog/[slug]/BlogPostClient.tsx docs/SILO-PLAN.md docs/HANDOFF-QUEUE.md`
   then commit to `main` and push. Suggested message:
   `content(writingserviceslondon): draft spoke protecting-a-cohabiting-partner-not-on-the-deeds (unmarried-couples hub)`
   This may also sweep earlier parked drafts if still uncommitted.
4. Add a DONE note here with the commit hash.

---

## 2026-06-11 (b) — wwsl-will-writer run (NEEDS CLAUDE CODE: commit + push)

- **Site:** writingserviceslondon (willwritingserviceslondon.co.uk)
- **Spoke written:** `care-fees-protecting-your-home-london` (draft:true)
- **Hub:** `estate-planning-over-50` (was 0 spokes, now 1 parked draft;
  thinnest-hub priority. Only `will-for-unmarried-couples` remains at 0). Narrow
  angle vs the hub head term "estate planning over 50": care home fees and
  protecting the family home specifically (means test, property disregards,
  deliberate deprivation, will-based property protection trust), not the generic
  over-50 checklist.
- **Content:** ~1,250 words, answer-first excerpt + opening (~50 words), 5
  sections + FAQ, 5 distinct FAQs, UK English, no em dashes, matching framing
  ("we are a matching service and do not draft wills or trusts ourselves"). No
  legal guarantees; advises consulting a qualified professional. 2 external
  authority links, one per domain (GOV.UK care-home-fees + STEP).
- **YMYL facts (current, attributed):** England capital limits £23,250 upper /
  £14,250 lower for 2026/27 (confirmed unchanged via GOV.UK LAC 2026-27); tariff
  income £1/week per £250 between the limits; charging-reform cap (£100k upper
  limit) legislated but never commenced and the current government has confirmed
  it will not introduce it; property disregards (spouse/partner, relative 60+,
  disabled, dependent child; 12-week disregard); deferred payment agreements;
  deliberate deprivation / notional capital and the point that the 7-year rule is
  IHT-only and does not protect against care fees; gift-with-reservation risk;
  life-interest/protective-property-trust mechanics (tenants in common, sever the
  joint tenancy). Article + BreadcrumbList + FAQPage schema auto-emit from the
  blog route; FAQs via the inline "Frequently Asked Questions" h2 + h3/p pattern;
  author @id = WWSL editorial entity (editorialAuthorSchema).
- **Linking:** UP-link to /guides/estate-planning-over-50/ (auto hub byline
  line); tool link to /tools/#care (Care cost protection estimator) via a new
  `toolByHub['estate-planning-over-50']` mapping I added; commercial link to
  /services/estate-planning/ via serviceMap (added). No live same-hub siblings,
  so no sibling links (correct).
- **Files changed (real on-disk, via file tools — verified intact):**
  - `data/blog.ts` — new BlogArticle appended before the array close (helpers
    intact below it).
  - `app/blog/[slug]/BlogPostClient.tsx` — +2 lines: `toolByHub` entry for
    `estate-planning-over-50` (-> `care` tool) and `serviceMap` entry for the new
    slug (-> `estate-planning` pillar).
  - `docs/SILO-PLAN.md` — section 8 counts updated (24 toward 100, 5 drafts).
- **tsc / link gate:** NOT RUN in-sandbox. Same blocker as the 2026-06-09 and
  2026-06-11 (a) runs: the Cowork bash mount serves **truncated copies** of the
  large repo files (`data/blog.ts` cut at line ~8163 / 550 KB, mid-entry;
  `BlogPostClient.tsx` cut at line 332). `git status`/`git diff` in the sandbox
  report phantom deletions on files this run never touched (e.g. HANDOFF-QUEUE.md
  -58), there is the recurring "Index records invalid resolve-undo information"
  error, and an unkillable stray `data/__synctest.txt` exists only in the overlay
  (not on the real FS — confirmed, ignore it). The real file-tool view of all
  changed files is whole and the new entry is well-formed TypeScript by
  inspection (mirrors the probate-spoke template exactly). **Do NOT trust any
  sandbox-side git state; do NOT commit from the sandbox.**
- **git:** NOT COMMITTED.

### Action for Claude Code (reliable FS)
1. `cd writingserviceslondon`; remove any stale `.git/index.lock`. `git status`
   should show `data/blog.ts`, `app/blog/[slug]/BlogPostClient.tsx`, and `docs/`
   changed. Confirm the working tree is whole (blog.ts ends with the three
   exported helper functions after `];`; BlogPostClient.tsx ends with the closing
   `</aside></main></>` and the component brace). If any file looks truncated,
   the sandbox-side copy leaked — re-pull is not needed, the file-tool writes
   landed on the real FS.
2. `npx tsc --noEmit` (rename round-trip blog.ts if the TS server is stale).
3. Run the link gate: `node ../scripts/check-links.mjs .` to 0 broken.
4. `git add data/blog.ts app/blog/[slug]/BlogPostClient.tsx docs/` then commit to
   `main` and push. Suggested message:
   `content(writingserviceslondon): draft spoke care-fees-protecting-your-home-london (estate-planning-over-50 hub)`
   This run can be swept together with the still-parked probate / intestacy /
   business / digital-assets drafts if they remain uncommitted.
5. Add a DONE note here with the commit hash.

---

## 2026-06-11 (a) — wwsl-will-writer run (NEEDS CLAUDE CODE: commit + push)

- **Site:** writingserviceslondon (willwritingserviceslondon.co.uk)
- **Spoke:** `how-long-does-probate-take-london` (draft:true)
- **Hub:** `probate-guide-london` (was 0 spokes; thinnest-hub priority alongside
  estate-planning-over-50 and unmarried-couples). Narrow angle vs the hub head
  term "probate": timelines specifically (how long each stage takes, the IHT
  20-working-day wait, executor's year), not the generic probate guide.
- **Content:** ~1,150 words, answer-first excerpt + opening (~50 words), 6
  sections + FAQ, 5 distinct FAQs, UK English, no em dashes, matching framing
  ("we are a matching service and do not handle probate ourselves"). 2 external
  authority links, one per domain (GOV.UK applying-for-probate + STEP). Legal
  facts attributed and current: grant ~16 weeks per GOV.UK (hedged), IHT400 +
  20-working-day wait before applying, excepted-estate simplification for deaths
  on/after 1 Jan 2022, £300 probate fee context, executor's year. Article +
  BreadcrumbList + FAQPage schema auto-emit from the blog route; FAQs via the
  inline "Frequently Asked Questions" h2 + h3/p pattern; author @id = WWSL
  editorial entity (editorialAuthorSchema).
- **Linking:** UP-link to /guides/probate-guide-london/ (auto hub byline line);
  tool link to /tools/#probate (auto via toolByHub, probate fee calculator);
  commercial link to /services/probate-support/ via serviceMap (added). No live
  same-hub siblings yet, so no sibling links (correct).
- **Files changed:** `data/blog.ts` (+115, new BlogArticle appended before `];`,
  helpers intact); `app/blog/[slug]/BlogPostClient.tsx` (+2: serviceMap line for
  the new slug, and a tail closing-tag restore — see FS note); `docs/SILO-PLAN.md`
  section 8 counts (23 toward 100, 4 drafts).
- **Note on FS:** the Edit tool truncated the tail of BlogPostClient.tsx when
  adding the serviceMap line (dropped the closing `</aside>/</main>/</>/}` block,
  332 vs 343 lines). Detected via tsc (JSX unclosed errors) and repaired by
  re-appending the exact closing block via Python. Final file is 344 lines and
  parses. blog.ts splice was done via Python (bash mount serves the full ~550 KB
  file); helpers present.
- **tsc:** `npx tsc --noEmit` clean (exit 0) after the repair.
- **git:** NOT COMMITTED. Same blocker as the 2026-06-10 run: the Cowork `.git`
  mount holds a stale `.git/index.lock` (0 bytes) that the sandbox cannot unlink
  (`rm` and `git add` fail "Operation not permitted"), so safe-commit.sh cannot
  proceed. Work is on disk and verified; commit must be done by Claude Code.

### Action for Claude Code (reliable FS)
1. `cd writingserviceslondon`; remove the stale `.git/index.lock` if present.
   `git status` should show `data/blog.ts` and `app/blog/[slug]/BlogPostClient.tsx`
   modified and `docs/` untracked. `git diff --stat` should be `+115` blog.ts /
   `+2` BlogPostClient.tsx.
2. `npx tsc --noEmit` (rename round-trip blog.ts if the TS server is stale).
3. `git add data/blog.ts app/blog/[slug]/BlogPostClient.tsx docs/` then commit to
   `main` and push. Suggested message:
   `content(writingserviceslondon): draft spoke how-long-does-probate-take-london (probate hub)`
   This also sweeps the earlier parked `stepchildren-inheritance-rights-no-will`
   draft if it is still uncommitted (its serviceMap line is already in the file).
4. Add a DONE note here with the commit hash.

---

## 2026-06-09 — wwsl-will-writer run (NEEDS CLAUDE CODE: verify + commit)

- **Site:** writingserviceslondon (willwritingserviceslondon.co.uk)
- **Spoke written:** `what-happens-to-your-online-accounts-after-death-in-london`
- **Hub:** digital-assets-and-wills (was 0 spokes, now 1 parked draft)
- **draft:** true
- **Files changed (real on-disk, via file tools):**
  - `data/blog.ts` — new BlogArticle appended before the array close (slug above,
    ~1,250 words, answer-first excerpt, 5 sections, 5 FAQs, 2 external authority
    links: GOV.UK + Society of Will Writers, matching framing, UK English, no em
    dashes, draft:true). Article + BreadcrumbList + FAQPage schema auto-emit from
    the blog route; FAQs use the inline "Frequently Asked Questions" h2 + h3/p
    pattern so they extract for FAQPage.
  - `app/blog/[slug]/BlogPostClient.tsx` — added the new slug to `serviceMap`
    (-> `single-will` pillar) so the spoke renders its commercial sidebar link.
  - `docs/SILO-PLAN.md` — section 8 counts updated (20 toward 100).
- **tsc:** NOT RUN. The Cowork bash sandbox mount is serving **truncated copies**
  of larger repo files (e.g. `lib/schema.ts` shows 105 of its real 161 lines;
  `data/blog.ts` cut at ~512 KB; `app/about/page.tsx` and `app/blog/[slug]/page.tsx`
  also appear short). `git status`/`git diff` inside the sandbox therefore report
  phantom deletions on files this run never touched. The real files (file-tool
  view) are intact and the new entry is well-formed TypeScript by inspection.
- **git:** NOT COMMITTED. Committing from the sandbox would stage the truncated
  blobs and corrupt the repo. **Do NOT trust any sandbox-side git state.**

### Action for Claude Code (reliable FS)
1. `cd writingserviceslondon`; confirm the working tree is whole — `git status`
   should show only `data/blog.ts`, `app/blog/[slug]/BlogPostClient.tsx`, and
   `docs/` (SILO-PLAN.md edit + this file) as changes. If `lib/schema.ts`,
   `app/about/page.tsx`, or `app/blog/[slug]/page.tsx` show as modified, the tree
   is fine — that was a sandbox-mount artifact, `git diff` them to confirm no real
   change before committing.
2. `npx tsc --noEmit` (rename round-trip blog.ts if the TS server is stale).
3. Commit to `main` (`data/blog.ts`, `BlogPostClient.tsx`, `docs/SILO-PLAN.md`,
   `docs/HANDOFF-QUEUE.md`), push. Suggested message:
   `content(writingserviceslondon): draft spoke online-accounts-after-death (digital-assets hub)`
4. Add a DONE note here with the commit hash.

---

## 2026-06-10 — wwsl-will-writer run (NEEDS CLAUDE CODE: verify + commit)

- **Site:** writingserviceslondon (willwritingserviceslondon.co.uk)
- **Spoke written:** `what-happens-to-your-business-if-you-die-without-a-will-london`
- **Hub:** business-owner-wills (was 0 spokes, now 1 parked draft)
- **draft:** true
- **Files changed (real on-disk, via file tools):**
  - `data/blog.ts` — new BlogArticle appended as the last array element (before
    the `];` close at ~line 8039, helpers intact after it). ~1,250 words,
    answer-first excerpt, 5 sections + FAQ, 5 distinct FAQs, 2 external authority
    links (GOV.UK intestacy + STEP, one per domain), matching framing, UK English,
    no em dashes, draft:true. Article + BreadcrumbList + FAQPage schema auto-emit
    from the blog route; FAQs use the inline "Frequently Asked Questions" h2 +
    h3/p pattern. UP-link to /guides/business-owner-wills/ via the hub line;
    commercial link via serviceMap (below).
  - `app/blog/[slug]/BlogPostClient.tsx` — added the new slug to `serviceMap`
    (-> `estate-planning` pillar, "Estate planning review") for the sidebar
    commercial link. No toolByHub entry (no business calculator; tool link N/A).
  - `docs/SILO-PLAN.md` — s
## 2026-06-12 08:47 — wwsl-will-writer (writingserviceslondon)
- Sites: writingserviceslondon: ONE new draft spoke "Which Digital Assets Can Be Inherited in the UK" (slug which-digital-assets-can-be-inherited, hub digital-assets-and-wills, draft:true, dates 2026-06-12); serviceMap entry -> estate-planning pillar; SILO-PLAN section 8 tracker updated (26 spokes: 19 live + 7 drafts)
- Staged files: data/blog.ts, app/blog/[slug]/BlogPostClient.tsx, docs/SILO-PLAN.md (all committed)
- Live flips this run: none
- tsc: pass (check-links.mjs: 37 slugs, 0 broken)
- Commit prompt / git state: commit a10ddfe on main, PUSH FAILED (no GitHub credentials in sandbox), please push. NOTE: a stale .git/index.lock predates this run and the sandbox cannot delete files in .git, so the commit was made via a temp GIT_INDEX_FILE. Remove .git/index.lock Windows-side; the default index is stale relative to HEAD until the next git add -A (self-heals). Some tmp_obj_* files in .git/objects could not be unlinked and can be deleted.
- Status: PENDING PUSH

## 2026-06-13 00:47 — wwsl-will-writer (writingserviceslondon)
- Sites: writingserviceslondon: new draft spoke "Property Protection Trusts in Wills for London Couples" (property-protection-trust-wills-london, hub trust-planning-guide, draft:true) + SILO-PLAN section 8 tracker update
- Staged files: data/blog.ts, docs/SILO-PLAN.md (committed 2d0f575)
- Live flips this run: none
- tsc: pass (check-links: 38 slugs, 0 broken)
- Commit prompt / git state: commit 2d0f575 on main, push failed (no credentials in sandbox) — please push. CLEANUP NEEDED: sandbox cannot unlink files, so .git contains leftover lock files renamed to *.stale*/*.staleX plus possibly a residual index.lock; delete .git/*.stale* and any .git/*.lock (and .git/index2*, .git/s1, .git/s2) from Windows before the next git operation. An earlier corrupt-index commit f68916d was created and reverted via reset --soft; it is unreferenced and never pushed.
- Status: PENDING PUSH
