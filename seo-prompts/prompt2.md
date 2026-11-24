# Role & Objective

Act as a Principal Frontend Architect, Technical SEO Specialist, and Web Performance Engineer. Your mission is to audit this portfolio repository (`emon1432/emon1432`, deployed on Vercel at `emonideas.vercel.app` and mapped to `emonideas.com`) and implement production-grade, top-tier **SEO**, **Core Web Vitals / Performance**, and **Accessibility** optimizations so that Lighthouse scores hit 98–100 across all categories on both Mobile and Desktop.

---

# Phase 1: Codebase Audit (Execute First)

Before modifying any files, inspect the repository structure, framework setup (e.g., Next.js App/Pages Router, React/Vite, static HTML), routing, asset handling, fonts, and metadata configuration. Summarize:

1. Current rendering strategy (SSR, SSG, CSR, ISR).
2. Existing SEO tags, `sitemap.xml`, `robots.txt`, and structured data (JSON-LD).
3. Performance bottlenecks (unoptimized images, render-blocking scripts, layout shifts, oversized JS bundles, uncached API/static calls).

---

# Phase 2: Technical SEO Implementation

Implement complete, search-engine-ready SEO across all routes:

1. **Canonical & Domain Consolidation:**
   - Set `https://emonideas.com` as the primary canonical base URL (`metadataBase` or `<link rel="canonical">`) across all pages so `emonideas.vercel.app` does not cause duplicate content issues.
   - Configure clean redirects or headers in `next.config.*` / `vercel.json` if needed.

2. **Dynamic Metadata & Social Cards (OpenGraph + Twitter):**
   - Ensure every page/route has a unique, descriptive `<title>` (template: `%s | Khairul Islam Emon` or `Emon Ideas`), compelling `meta description` (140–160 chars), keywords, and author metadata.
   - Configure complete OpenGraph (`og:title`, `og:description`, `og:url`, `og:type`, `og:image` 1200x630) and Twitter Card (`summary_large_image`) tags.

3. **JSON-LD Structured Data (Rich Results):**
   - Inject valid `application/ld+json` schemas:
     - `Person` schema on the home/about page (Name: Khairul Islam Emon, JobTitle: Software Engineer / Backend Engineer, URL: `https://emonideas.com`, `sameAs` links for GitHub, LinkedIn, etc.).
     - `WebSite` schema for site identity.
     - `TechArticle` or `BlogPosting` schema for technical notes/articles, and `SoftwareSourceCode` / `CreativeWork` schema for portfolio projects.

4. **Crawlability (`sitemap.xml` & `robots.txt`):**
   - Dynamically generate `sitemap.xml` covering all static and dynamic routes with proper `lastModified`, `changeFrequency`, and `priority`.
   - Create/update `robots.txt` allowing full indexing of public pages and pointing directly to `https://emonideas.com/sitemap.xml`.

5. **Semantic HTML & Heading Hierarchy:**
   - Enforce a strict single `<h1>` per page, logical `<h2>`–`<h3>` hierarchy, semantic landmarks (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`), and descriptive anchor texts (avoid generic "click here" links).

---

# Phase 3: Top-Tier Performance & Core Web Vitals

Optimize aggressively for **LCP < 1.5s**, **INP < 100ms**, and **CLS = 0**:

1. **Image & Media Optimization:**
   - Convert/serve images in modern formats (`AVIF` / `WebP`), enforce explicit `width` and `height` (or `aspect-ratio`) on every media element to eliminate CLS, add `priority` / `fetchpriority="high"` ONLY to above-the-fold LCP images, and `loading="lazy"` to below-the-fold media.
   - Replace simple icons/logos with lightweight inline SVGs.

2. **Font Optimization:**
   - Eliminate external render-blocking font requests. Self-host fonts or use framework-native font optimization with `font-display: swap` and proper fallback metrics to prevent layout shift.

3. **JavaScript Bundle & Rendering Efficiency:**
   - Minimize client-side JavaScript: convert static UI sections into Server Components / static HTML wherever possible.
   - Lazy-load heavy below-the-fold components, modals, or animations (`dynamic import` / `React.lazy`) so the initial bundle stays ultra-light.
   - Remove unused dependencies, dead code, and console logs.

4. **Caching & Vercel Edge Headers:**
   - Configure `vercel.json` or framework config with optimal `Cache-Control` headers (`public, max-age=31536000, immutable` for hashed static assets) and security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`).

---

# Phase 4: Accessibility & UX Polish

- Ensure all interactive elements (`button`, `a`, inputs) have accessible names (`aria-label` where needed), visible focus rings, and keyboard navigability.
- Verify WCAG AA color contrast ratios across dark/light themes.
- Ensure every `<img>` has meaningful `alt` attributes (or `alt=""` for purely decorative graphics).

---

# Execution Rules & Output Format

- **Preserve Design & Logic:** Keep the existing visual aesthetic (clean, dark IDE / practical engineering style) and core functionality intact—do not break existing features or UI design.
- **Clean, Idiomatic Code:** Follow strict TypeScript/JavaScript best practices, zero lint/type errors, and modular helper utilities (e.g., `lib/seo.ts` or `utils/schema.ts`).
- **Final Report:** After making all changes, provide:
  1. A concise summary of every file created or modified and why.
  2. Verification steps (build check, `sitemap.xml` / `robots.txt` URLs to test, and Google Rich Results / Lighthouse verification checklist).
