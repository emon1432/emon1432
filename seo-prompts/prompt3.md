# ROLE

You are a senior web performance + technical SEO engineer. Work autonomously inside this repository (github.com/emon1432/emon1432), the portfolio site of Khairul Islam (Emon), Senior Software Engineer (Laravel/PHP, React, MySQL), based in Dhaka. Live at https://emonideas.vercel.app/ on Vercel. Target custom domain: https://emonideas.com (may not be connected yet).

# GOAL

Make the site top-class: Lighthouse 95-100 on Performance, SEO, Accessibility and Best Practices (mobile), all Core Web Vitals "good" (LCP < 2.5s, CLS < 0.1, INP < 200ms), and rank for "Khairul Islam", "Khairul Islam Emon", and "Laravel developer Dhaka"-type queries. Do the whole job in one pass.

# CONTEXT (verify against the code, do not assume)

- Static HTML + jQuery + Bootstrap template: index.html, portfolio.html, portfolio-details.html?id=<slug> (project content is likely loaded via JS from a data object).
- Projects: cashboxglobal, jogajogqr, asianjewelleryhouse, akhayerintl, alifsuper, khidmahhospital.
- Known issues: portfolio-details uses a query string (bad for indexing); og:image is a relative path; no canonical; no JSON-LD; unknown sitemap/robots; large PNG/JPG images; the same rating.png repeated; template CSS/JS likely unminified and unused-heavy.

# PHASE 0: AUDIT FIRST

1. Read the full repo. List every page, CSS/JS file, image (with size), font, and third-party request.
2. Run Lighthouse (mobile + desktop) against a local build or the live URL if possible, and save the baseline scores and metrics to REPORT.md.
3. Write a short plan in REPORT.md before changing code.

# PHASE 1: SEO

- Per-page unique <title> (50-60 chars), meta description (120-160 chars), canonical (absolute URL), <html lang="en">, robots, theme-color.
- Open Graph + Twitter cards on every page with ABSOLUTE URLs: og:url, og:site_name, og:image (1200x630, create these images), og:image:alt, twitter:title/description/image.
- Replace portfolio-details.html?id=slug with real static pages at /projects/<slug>/ (or <slug>.html). Generate them from a single data source (a small Node build script or template) so content is in the raw HTML, not JS-rendered. Each gets its own title, description, canonical, OG image, breadcrumb schema, and a 301 redirect from the old query URL in vercel.json.
- JSON-LD: Person (name, alternateName "Emon", jobTitle, url, image, sameAs: GitHub, LinkedIn, Facebook, Instagram, Codeforces, LeetCode; knowsAbout), WebSite, BreadcrumbList, and CreativeWork/SoftwareApplication per project. Validate JSON syntax.
- Generate sitemap.xml (with lastmod) and robots.txt pointing to it. Do not block CSS/JS.
- Semantic HTML: one h1 per page, logical h2/h3, <header>/<nav>/<main>/<section>/<footer>, descriptive link text (replace generic "Case Study"/"SEE MORE" with descriptive aria-labels or text), meaningful alt text on every image, decorative images alt="".
- Add favicon set, apple-touch-icon, and a web manifest. Add a custom 404.html.
- Make the domain easy to switch: keep the base URL in ONE config constant so changing to https://emonideas.com updates canonicals, OG, sitemap, and schema. Add a vercel.json redirect plan (commented in REPORT.md) for vercel.app -> custom domain once connected.

# PHASE 2: PERFORMANCE

- Images: convert to WebP/AVIF with JPG/PNG fallback via <picture>, generate responsive sizes (srcset/sizes), set explicit width/height, loading="lazy" + decoding="async" below the fold, fetchpriority="high" and no lazy on the LCP image, preload the LCP image. Replace the repeated rating.png with inline SVG/CSS.
- CSS: remove unused rules (PurgeCSS or manual), minify, inline critical CSS for above-the-fold, load the rest non-blocking.
- JS: remove unused plugins/libs, drop jQuery if feasible (replace with vanilla JS); otherwise keep it local, minified, with defer. No render-blocking scripts. Self-host everything; remove third-party requests where possible.
- Fonts: self-host WOFF2, subset, font-display: swap, preload only the critical ones, limit weights.
- Layout stability: reserve space for images/embeds; no CLS from fonts/sliders/animations. Respect prefers-reduced-motion.
- vercel.json: cleanUrls, trailingSlash policy, long immutable Cache-Control for hashed/static assets, short for HTML, security headers (CSP appropriate to the site, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-Frame-Options). Enable Brotli (Vercel default) and verify.
- Resume PDF: compress it, and link with a descriptive name.

# PHASE 3: ACCESSIBILITY AND BEST PRACTICES

- Color contrast ≥ 4.5:1 (check the #ff014f accent on backgrounds), visible focus states, keyboard-navigable menu, skip-to-content link, aria labels on icon-only links (WhatsApp, GitHub, etc.), form labels linked to inputs, proper autocomplete attributes, tap targets ≥ 48px.
- No console errors, no mixed content, no deprecated APIs, rel="noopener noreferrer" on external target=\_blank links.
- Contact form: make sure it works and has basic spam protection (honeypot); do not expose secrets.

# CONTENT FIXES (suggest, don't invent facts)

- Make the name consistent (Khairul Islam / Emon) in title, h1, and schema.
- Flag any inconsistencies you find (e.g., "4+ years of experience" vs. the 2019-Present timeline, unfinished or broken text such as stray style="..." text near the StopStalk link, typos like "criticizm"). Fix obvious typos and list the content-level ones in REPORT.md for my decision. Never fabricate achievements, numbers, or testimonials.

# RULES

- Do not change the visual design or brand look unless required for performance/accessibility. Keep the pink accent and the overall layout.
- Do not add heavy frameworks. Prefer a tiny Node build script (no runtime framework). If you believe migrating to Astro/Next.js static export is clearly better, do NOT migrate; describe the tradeoff in REPORT.md instead.
- Keep the project deployable on Vercel as-is (static). Make build steps explicit in package.json (npm run build) and set the Vercel output directory correctly.
- Work in a new branch (seo-perf-overhaul), with small logical commits and clear messages. Do not push to main.
- Never delete original source images; keep them in a /src-assets folder and output optimized versions to the served folder.
- After every phase, re-test (Lighthouse, HTML validity, broken-link check, structured-data validation, sitemap check) and fix regressions before moving on.

# DELIVERABLES

1. Branch with all changes, buildable and deployable on Vercel.
2. REPORT.md containing: before/after Lighthouse scores and Core Web Vitals, a list of changes by category, remaining manual TODOs, and open questions for me.
3. A checklist of manual steps I must do: connect emonideas.com in Vercel, submit sitemap in Google Search Console and Bing Webmaster Tools, verify the domain, test share previews (opengraph.xyz, LinkedIn Post Inspector, Facebook Sharing Debugger), run Rich Results Test, and add backlinks from GitHub profile README, LinkedIn, and Facebook.

Final check: all pages return 200, old ?id= URLs redirect (301), no broken links, sitemap lists only canonical 200 URLs, and mobile Lighthouse scores are ≥ 95 in all four categories. If any score is below 95, explain the exact remaining cause and fix it if possible.
