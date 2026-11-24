# MASTER SPECIFICATION & IMPLEMENTATION PROMPT
## Production-Grade Developer Portfolio: Extreme SEO, Core Web Vitals & Web Performance Overhaul

---

### 1. Role, Mission & Identity

**Role:** Act as a Principal Frontend Architect, Technical SEO Specialist, Web Performance Engineer, and Accessibility Expert.
**Mission:** Transform the personal portfolio website of **Khairul Islam (Emon)** into an exceptionally fast, modern, search-engine-optimized, accessible, production-grade developer portfolio achieving international engineering standards and **Lighthouse 95–100** across all categories (Performance, SEO, Accessibility, Best Practices) on both Mobile and Desktop.

#### Verified Profile & Domain Details
- **Full Name:** Khairul Islam (Emon)
- **Professional Title:** Senior Software Engineer / Backend Architect
- **Primary Expertise:** PHP, Laravel, React, MySQL, REST APIs, Microservices, Enterprise ERP, POS, SaaS, and Scalable Web Applications.
- **Location:** Dhaka, Bangladesh
- **Target Custom Domain (Canonical Base):** `https://emonideas.com`
- **Current Production Deployment:** `https://emonideas.vercel.app/`
- **GitHub Repository:** `https://github.com/emon1432/emon1432`
- **Profiles:**
  - GitHub: `https://github.com/emon1432`
  - LinkedIn: `https://www.linkedin.com/in/khairul-islam-emon`
  - Email: `e.mon143298@gmail.com`
  - Facebook: `https://www.facebook.com/emon143298`

---

### 2. Core Architectural Decision & Execution Strategy

1. **Lightweight Static Pre-rendering (Zero-Bloat Architecture):**
   - Retain ultra-fast static HTML for deployment on Vercel without heavy SSR/CSR runtimes (no bloated SPA frameworks like Next.js/Astro overhead that harm mobile TTFB/INP).
   - Introduce an explicit build system (`npm run build`) via Node.js scripts to generate pre-rendered static HTML for every route, including dedicated static case study pages for all 36 production projects (`projects/<slug>/index.html` or `<slug>.html`).
   - Eliminate client-side query string rendering (`portfolio-details.html?id=slug`) so search engines receive fully indexable server-side HTML.
   - Configure a single centralized site configuration file (`site.config.js`) controlling `siteUrl`, canonical base, meta tags, schema data, and project catalog.

2. **Branching & Git Discipline:**
   - Create and work inside branch `seo-perf-overhaul`.
   - Preserve existing branding, visual design, color palette (dark theme with `#ff014f` accent), and authentic project content. Never fabricate qualifications or metrics.

---

### 3. Comprehensive Implementation Phases

#### Phase 1: Technical SEO & Discoverability
1. **Canonical & URL Normalization:**
   - Base canonical URL set to `https://emonideas.com` across all pages (with simple config toggle).
   - Configure `vercel.json` 301 redirects for:
     - `portfolio-details.html?id=:slug` -> `/projects/:slug/`
     - Legacy `.html` extensions to clean URLs.
2. **Metadata & Social Sharing:**
   - Unique, descriptive `<title>` (50–60 characters) and `<meta name="description">` (130–160 characters) per page.
   - Complete OpenGraph (`og:title`, `og:description`, `og:url`, `og:type`, `og:image` with absolute URLs, `og:image:width`, `og:image:height`, `og:image:alt`) and Twitter Cards (`summary_large_image`).
   - Generate dedicated 1200×630 OG preview images using verified branding assets.
3. **Structured Data (JSON-LD):**
   - `Person` schema: Name: "Khairul Islam", alternateName: "Emon", jobTitle: "Senior Software Engineer", url, image, knowsAbout, sameAs (GitHub, LinkedIn, Facebook, etc.).
   - `WebSite` schema: Site identity, author, url.
   - `BreadcrumbList` schema for deep project routes.
   - `SoftwareApplication` / `CreativeWork` schema for each individual project.
4. **Crawlability & Indexing:**
   - Automatically generated `sitemap.xml` with `<lastmod>`, `<changefreq>`, and `<priority>`.
   - Optimized `robots.txt` referencing `sitemap.xml` without blocking CSS/JS/images.
   - Custom `404.html` with full navigation and return headers.
5. **Semantic HTML & Heading Hierarchy:**
   - Single `<h1>` per page.
   - Strictly ordered `<h2>` and `<h3>` headings.
   - Descriptive anchor texts and `aria-label` tags (no generic "Click Here" or "See More").

#### Phase 2: Extreme Performance & Core Web Vitals (LCP < 1.5s, CLS = 0, INP < 100ms)
1. **Asset & Image Optimization:**
   - Convert heavy JPG/PNG assets to WebP with responsive `srcset` and `sizes`.
   - Enforce explicit `width` and `height` (or CSS `aspect-ratio`) on all images to eliminate Cumulative Layout Shift (CLS = 0).
   - Critical hero/LCP images: `fetchpriority="high"`, preloaded in `<head>`, never lazy-loaded.
   - Below-the-fold media: native `loading="lazy"`, `decoding="async"`.
   - Replace repeated rating raster images (`rating.png`) with crisp, inline SVG stars.
2. **CSS Optimization:**
   - Remove unused CSS rules from `style.css` (401 KB) and `bootstrap.min.css` (208 KB).
   - Extract critical above-the-fold CSS for inline injection; load deferred stylesheets asynchronously.
   - Minify all CSS deliverables.
3. **JavaScript Lean Optimization:**
   - Audit and prune heavyweight legacy dependencies (jQuery, WOW.js, Slick, Feather Icons).
   - Replace slider/animations with lightweight vanilla JS or native CSS scroll snap and `IntersectionObserver`.
   - Defer all non-critical scripts. Zero render-blocking JavaScript.
4. **Font Optimization:**
   - Self-host fonts in WOFF2 format with `font-display: swap` to prevent FOIT/FOUT.
   - Remove unused icon font glyphs or replace with direct inline SVGs.
5. **Vercel Edge & Cache Headers:**
   - `vercel.json` headers:
     - 1-year immutable caching (`Cache-Control: public, max-age=31536000, immutable`) for static assets.
     - Revalidation caching (`Cache-Control: public, max-age=0, must-revalidate`) for HTML.
     - Hardened security headers: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, and appropriate CSP.

#### Phase 3: Accessibility (WCAG 2.2 AA) & UI Polish
1. **Accessibility Standards:**
   - Skip-to-content link at top of body.
   - Full keyboard navigation with visible focus states (`:focus-visible`).
   - Color contrast ratio >= 4.5:1 for text against dark backgrounds.
   - Accessible labels (`aria-label`) on all icon-only buttons (GitHub, LinkedIn, WhatsApp, theme toggles).
   - Touch targets >= 48px for mobile users.
   - Support `prefers-reduced-motion` media queries.
2. **Content Glitches & Consistency Fixes:**
   - Standardize professional name: "Khairul Islam (Emon)" across all headings, titles, and schema.
   - Align experience timeline consistently (from 2019 to Present).
   - Fix identified typos (e.g., "criticizm" -> "criticism") and clean up any stray inline styles.
   - Ensure contact form includes honeypot anti-spam protection without exposing sensitive endpoints.

#### Phase 4: PWA, CI/QA & Validation
1. **PWA Optimization:**
   - Update `manifest.json` and `sw.js` with network-first strategy for HTML and cache-first for hashed static assets.
   - Ensure reliable cache busting across new releases.
2. **CI Pipeline & Quality Checks:**
   - Create GitHub Actions workflow (`.github/workflows/ci.yml`) to test HTML validity, check broken links, and validate sitemap and schema.
3. **Comprehensive Benchmarking & Deliverables:**
   - Generate `REPORT.md` and documentation in `docs/` detailing before vs. after metrics, executed tests, and manual verification steps (Search Console, domain mapping, social preview testing).

---

### 4. Non-Negotiable Quality Guardrails
- Preserve existing aesthetic styling and core portfolio functionality.
- Never invent experience or fake client reviews.
- All code must build cleanly, without broken links or console errors.
- Deliver a complete, working solution ready for production deployment.
