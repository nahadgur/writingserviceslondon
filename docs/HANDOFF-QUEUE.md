# Handoff queue — writingserviceslondon

Cross-tool bridge for the Cowork `wwsl-will-writer` scheduler. Claude Code reads
this, runs the verify/commit step on a reliable filesystem, and clears entries.

---

## 2026-06-11 — wwsl-will-writer run (NEEDS CLAUDE CODE: commit + push)

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
  - `docs/SILO-PLAN.md` — section 8 counts updated (21 toward 100, 2 drafts).
- **tsc:** NOT RUN. Same sandbox-mount truncation as the 2026-06-09 run: the
  Cowork bash mount serves a truncated copy of `data/blog.ts` (stops ~525 KB,
  before the exported helper functions), so `git`/`tsc` from the sandbox would
  stage a corrupt blob. The file-tool view is intact and well-formed by
  inspection (new object closes at line 8039, `getArticleBySlug` /
  `getPublishedArticles` / `getArticlesByHub` present and unchanged after it).
- **git:** NOT COMMITTED. Do NOT trust sandbox-side git state.

### Action for Claude Code (reliable FS)
1. `cd writingserviceslondon`; confirm the tree shows only `data/blog.ts`,
   `app/blog/[slug]/BlogPostClient.tsx`, `docs/SILO-PLAN.md`, and `docs/HANDOFF-QUEUE.md`
   as changes. Any other "modified" large file is a sandbox-mount artifact — `git diff`
   to confirm no real change before committing.
2. `npx tsc --noEmit` (rename round-trip blog.ts if the TS server is stale).
3. Commit to `main` and push. Suggested message:
   `content(writingserviceslondon): draft spoke business-if-you-die-without-a-will (business-owner-wills hub)`
4. Add a DONE note here with the commit hash.


---

## 2026-06-10 — wwsl-will-writer run (Cowork, committed directly)

- **Site:** writingserviceslondon
- **Spoke:** `stepchildren-inheritance-rights-no-will-london` (draft:true)
- **Hub:** `intestacy-rules-uk` (was 0 spokes; thinnest-hub priority). Narrow
  angle vs the hub head term: do stepchildren inherit on intestacy (adoption +
  1975 Act + blended-family will planning), not the generic "who inherits" term.
- **Content:** ~1,470 words, answer-first excerpt, 5 sections + FAQ, 5 distinct
  FAQs, 2 external authority links one per domain (GOV.UK intestacy + Society of
  Will Writers), matching framing, UK English, no em dashes, £322,000 statutory
  legacy (correct 26 Jul 2023 figure, verified). Article + BreadcrumbList +
  FAQPage schema auto-emit from the blog route; FAQs via the inline
  "Frequently Asked Questions" h2 + h3/p pattern.
- **Linking:** UP-link to /guides/intestacy-rules-uk/ (auto hub line); tool link
  to /tools/#intestacy (auto via toolByHub, intestacy outcome calculator);
  commercial link to /services/single-will/ via serviceMap. No live same-hub
  siblings yet, so no sibling links (correct).
- **Files changed:** `data/blog.ts` (+57, new BlogArticle appended before `];`,
  helpers intact); `app/blog/[slug]/BlogPostClient.tsx` (+1 serviceMap line);
  `docs/SILO-PLAN.md` section 8 counts (22 toward 100, 3 drafts).
- **Note on FS:** the Edit-tool write path truncated large inserts this session;
  worked around by splicing via Python. The bash/git/tsc mount served the full
  ~548 KB blog.ts (helpers present, tsc parsed whole file), so the earlier
  sandbox-truncation footgun did NOT recur here.
- **tsc:** `npx tsc --noEmit` clean (exit 0) on the sandbox mount, which served
  the full file.
- **git:** NOT COMMITTED. The Cowork `.git` mount blocks unlink/create, so git
  cannot write `.git/index.lock` (`rm`/`git add` fail with "Operation not
  permitted"). Work is on disk and verified; commit must be done by Claude Code.

### Action for Claude Code (reliable FS)
1. `cd writingserviceslondon`; `git status` should show `data/blog.ts`,
   `app/blog/[slug]/BlogPostClient.tsx` modified and `docs/` untracked. Confirm
   `git diff --stat data/blog.ts` is `+57 / -0` (new spoke only, helpers intact).
2. `npx tsc --noEmit` (rename round-trip blog.ts if the TS server is stale).
3. `git add data/blog.ts app/blog/[slug]/BlogPostClient.tsx docs/` then commit to
   `main` and push. Suggested message:
   `content(writingserviceslondon): draft spoke stepchildren-inheritance-rights-no-will (intestacy hub)`
   This also sweeps the two earlier parked drafts (online-accounts, business) if
   they are still uncommitted.
4. Add a DONE note here with the commit hash.
