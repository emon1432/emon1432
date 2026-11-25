/**
 * Build Script for emonideas.com
 * Generates:
 * 1. 36 Static Pre-rendered HTML Case Study Pages (projects/<id>/index.html)
 * 2. Dynamic sitemap.xml with lastmod for all pages
 * 3. robots.txt pointing to canonical sitemap
 * 4. Custom branded 404.html page
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const siteConfig = require(path.join(rootDir, 'site.config.js'));

// Load project data from assets/js/projects-data.js
function loadProjectsData() {
  const filePath = path.join(rootDir, 'assets', 'js', 'projects-data.js');
  const code = fs.readFileSync(filePath, 'utf8');
  const fn = new Function(code + '; return PORTFOLIO_PROJECTS_DATA;');
  return fn();
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderImage(imgPath, alt, width, height, isEager = false) {
  const webpPath = imgPath.replace(/\.(jpe?g|png)$/i, '.webp');
  const hasWebp = fs.existsSync(path.join(rootDir, webpPath));
  const loadingAttr = isEager
    ? 'loading="eager" fetchpriority="high"'
    : 'loading="lazy" decoding="async"';
  
  if (hasWebp) {
    return `<picture>
      <source srcset="/${webpPath}" type="image/webp">
      <img src="/${imgPath}" alt="${escapeHtml(alt)}" width="${width}" height="${height}" ${loadingAttr}>
    </picture>`;
  }
  return `<img src="/${imgPath}" alt="${escapeHtml(alt)}" width="${width}" height="${height}" ${loadingAttr}>`;
}

// Generate static case study HTML page
function generateProjectPageHtml(project, allProjects) {
  const canonicalUrl = `${siteConfig.siteUrl}/projects/${project.id}/`;
  const pageTitle = `${escapeHtml(project.title)} | Case Study | ${siteConfig.author.fullName}`;
  const rawTitle = `${project.title} | Case Study | ${siteConfig.author.fullName}`;
  const metaDesc = `${project.tagline} - Production software engineering case study by ${siteConfig.author.fullName} (${siteConfig.author.title}).`;
  const imageUrl = `${siteConfig.siteUrl}/${project.image}`;

  // Find 3 related projects in same category, or adjacent
  let related = allProjects.filter(p => p.id !== project.id && p.category === project.category);
  if (related.length < 3) {
    const others = allProjects.filter(p => p.id !== project.id && !related.some(r => r.id === p.id));
    related = related.concat(others);
  }
  related = related.slice(0, 3);

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${siteConfig.siteUrl}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Portfolio",
            "item": `${siteConfig.siteUrl}/portfolio.html`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.title,
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${canonicalUrl}#software`,
        "name": project.title,
        "headline": project.tagline,
        "description": project.overview,
        "applicationCategory": project.category_label,
        "operatingSystem": "Web, Cloud, Cross-Platform",
        "author": {
          "@type": "Person",
          "name": siteConfig.author.fullName,
          "alternateName": siteConfig.author.alternateName,
          "jobTitle": siteConfig.author.title,
          "url": `${siteConfig.siteUrl}/`,
          "sameAs": [
            siteConfig.social.github,
            siteConfig.social.linkedin,
            siteConfig.social.facebook
          ]
        },
        "url": project.url,
        "image": imageUrl,
        "keywords": project.badge ? `${project.badge}, ${project.category_label}, Software Engineering` : `${project.category_label}, Software Engineering`
      }
    ]
  };

  const badgeHtml = (project.badge && project.badge !== "None")
    ? `<div class="mt--20" id="heroBadgeContainer">
        <span class="portfolio-badge">
          <i data-feather="${escapeHtml(project.badge_icon || 'award')}"></i> ${escapeHtml(project.badge)}
        </span>
      </div>`
    : '';

  const metricsHtml = (project.metrics && project.metrics.length)
    ? project.metrics.map(m => `
        <div class="col-lg-4 col-md-6 col-sm-12 mt--20">
          <div class="portfolio-project-stat">
            <h4>${escapeHtml(m.stat)}</h4>
            <p>${escapeHtml(m.label)}</p>
          </div>
        </div>
      `).join('\n')
    : '';

  const featuresHtml = (project.features && project.features.length)
    ? project.features.map(f => `
        <li>
          <i data-feather="check-circle"></i>
          <span>${escapeHtml(f)}</span>
        </li>
      `).join('\n')
    : '';

  const relatedHtml = related.map(r => `
    <div
      class="col-lg-4 col-md-6 col-sm-12 mt--30"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-once="true"
    >
      <div class="rn-portfolio related-project-card">
        <div class="inner">
          <div class="thumbnail">
            <a href="/projects/${r.id}/" aria-label="View case study for ${escapeHtml(r.title)}">
              ${renderImage(r.image, `${r.title} preview`, 600, 400, false)}
            </a>
          </div>
          <div class="content">
            <div class="category-info">
              <div class="category-list">
                <a href="/projects/${r.id}/">${escapeHtml(r.category_label)}</a>
              </div>
            </div>
            <h4 class="title">
              <a href="/projects/${r.id}/">
                ${escapeHtml(r.title)}
                <i class="feather-arrow-up-right"></i>
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  `).join('\n');

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>${pageTitle}</title>
    <meta name="robots" content="index, follow">
    <meta name="description" content="${escapeHtml(metaDesc)}">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="canonical" href="${canonicalUrl}">

    <!-- OpenGraph Tags -->
    <meta property="og:type" content="article">
    <meta property="og:locale" content="en_US">
    <meta property="og:site_name" content="${escapeHtml(siteConfig.siteTitle)}">
    <meta property="og:title" content="${escapeHtml(rawTitle)}">
    <meta property="og:description" content="${escapeHtml(project.tagline)}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:image" content="${imageUrl}">
    <meta property="og:image:secure_url" content="${imageUrl}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="${escapeHtml(project.title)} Preview Showcase">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(rawTitle)}">
    <meta name="twitter:description" content="${escapeHtml(project.tagline)}">
    <meta name="twitter:image" content="${imageUrl}">
    <meta name="twitter:creator" content="@emon1432">

    <!-- Favicon & PWA -->
    <link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon.ico">
    <link rel="apple-touch-icon" href="/assets/images/icons/icon-192.png">
    <link rel="manifest" href="/manifest.json">

    <!-- Stylesheets -->
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/css/slick.css">
    <link rel="stylesheet" href="/assets/css/slick-theme.css">
    <link rel="stylesheet" href="/assets/css/aos.css">
    <link rel="stylesheet" href="/assets/css/feature.css">
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="/assets/css/devicon.min.css?v=2.16.0">

    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
    </script>

    <style>
      .portfolio-details-card .thumbnail {
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 10px 10px 20px #1c1e22, -10px -10px 20px #262a2e;
        border: 1px solid rgba(255, 255, 255, 0.05);
      }
      .portfolio-details-card .thumbnail img {
        width: 100%;
        max-height: 520px;
        object-fit: cover;
        object-position: top;
        display: block;
      }
      .portfolio-project-stat {
        background: #1e2024;
        padding: 24px 20px;
        border-radius: 10px;
        box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
        border: 1px solid rgba(255, 255, 255, 0.05);
        text-align: center;
        height: 100%;
      }
      .portfolio-project-stat h4 {
        color: #ff014f;
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 8px;
      }
      .portfolio-project-stat p {
        color: #c4cfde;
        font-size: 13px;
        margin-bottom: 0;
        line-height: 1.5;
      }
      .portfolio-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 12px;
        font-weight: 600;
        padding: 5px 12px;
        border-radius: 4px;
        background: rgba(255, 1, 79, 0.1);
        border: 1px solid rgba(255, 1, 79, 0.25);
        color: #ff014f;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }
      .portfolio-badge svg {
        width: 14px;
        height: 14px;
      }
      .portfolio-cta-group {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        align-items: center;
      }
      .portfolio-cta-group .rn-btn.primary-live {
        background: linear-gradient(145deg, #ff014f, #d11448);
        color: #ffffff !important;
        box-shadow: 0 4px 15px rgba(255, 1, 79, 0.4);
        border: none;
      }
      .portfolio-cta-group .rn-btn.primary-live:hover {
        background: linear-gradient(145deg, #d11448, #ff014f);
        transform: translateY(-2px);
      }
      .case-study-section-title {
        color: #c4cfde;
        font-size: 20px;
        font-weight: 600;
        margin-top: 35px;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .case-study-section-title svg {
        color: #ff014f;
        width: 20px;
        height: 20px;
      }
      .portfolio-feature-list li {
        color: #c4cfde;
        font-size: 15px;
        line-height: 1.7;
        margin-bottom: 12px;
        display: flex;
        align-items: flex-start;
        gap: 10px;
      }
      .portfolio-feature-list li svg {
        color: #ff014f;
        width: 18px;
        height: 18px;
        flex-shrink: 0;
        margin-top: 4px;
      }
      .portfolio-text-block {
        color: #878e99;
        font-size: 15px;
        line-height: 1.8;
        margin-bottom: 20px;
      }
      .related-project-card .thumbnail {
        height: 200px;
        overflow: hidden;
        border-radius: 8px;
      }
      .related-project-card .thumbnail img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        transition: transform 0.5s ease;
      }
      .related-project-card:hover .thumbnail img {
        transform: scale(1.05);
      }
      .breadcrumb-nav {
        margin-bottom: 25px;
      }
      .breadcrumb {
        background: transparent;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        justify-content: center;
        gap: 8px;
        font-size: 14px;
      }
      .breadcrumb-item + .breadcrumb-item::before {
        content: "/";
        color: #7c838e;
        padding-right: 8px;
      }
      .breadcrumb-item a {
        color: #c4cfde;
        text-decoration: none;
        transition: color 0.3s;
      }
      .breadcrumb-item a:hover {
        color: #ff014f;
      }
      .breadcrumb-item.active {
        color: #ff014f;
        font-weight: 500;
      }
      .skip-link {
        position: absolute;
        top: -999px;
        left: 20px;
        z-index: 999999;
        background: #ff014f;
        color: #ffffff !important;
        padding: 10px 18px;
        border-radius: 6px;
        font-weight: 600;
        text-decoration: none;
        transition: top 0.2s ease;
      }
      .skip-link:focus {
        top: 20px;
        outline: 2px solid #ffffff;
      }
    </style>
  </head>

  <body class="template-color-1" data-spy="scroll" data-offset="70">
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <header class="rn-header haeder-default black-logo-version header--fixed header--sticky">
      <div class="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
        <div class="col-lg-2 col-6">
          <div class="header-left">
            <div class="logo">
              <a href="/">
                <img src="/assets/images/logo/logo-2.png" alt="Khairul Islam Logo" width="160" height="48">
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-10 col-6">
          <div class="header-center">
            <nav id="sideNav" class="mainmenu-nav navbar-example2 d-none d-xl-block" aria-label="Main Navigation">
              <ul class="primary-menu nav nav-pills">
                <li class="nav-item">
                  <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/portfolio.html">Portfolio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#resume">Resume</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#testimonial">Testimonial</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#contacts">Contact</a>
                </li>
              </ul>
            </nav>
            <div class="header-right">
              <div class="hamberger-menu d-block d-xl-none">
                <i id="menuBtn" class="feather-menu humberger-menu" role="button" aria-label="Open Mobile Menu" tabindex="0"></i>
              </div>
              <div class="close-menu d-block">
                <span class="closeTrigger" role="button" aria-label="Close Mobile Menu" tabindex="0">
                  <i data-feather="x"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="popup-mobile-menu">
      <div class="inner">
        <div class="menu-top">
          <div class="menu-header">
            <a class="logo" href="/">
              <img src="/assets/images/logo/logos-circle.png" alt="Khairul Islam Logo" width="60" height="60">
            </a>
            <div class="close-button">
              <button class="close-menu-activation close" aria-label="Close Menu">
                <i data-feather="x"></i>
              </button>
            </div>
          </div>
          <p class="discription">Hello, I am Khairul Islam (Emon), Senior Software Engineer.</p>
        </div>
        <div class="content">
          <ul class="primary-menu nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/portfolio.html">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#resume">Resume</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#testimonial">Testimonial</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#contacts">Contact</a>
            </li>
          </ul>
          <div class="social-share-style-1 mt--40">
            <span class="title">find me</span>
            <ul class="social-share d-flex liststyle">
              <li class="facebook">
                <a target="_blank" rel="noopener noreferrer" href="${siteConfig.social.facebook}" aria-label="Facebook Profile">
                  <i data-feather="facebook"></i>
                </a>
              </li>
              <li class="instagram">
                <a target="_blank" rel="noopener noreferrer" href="${siteConfig.social.instagram}" aria-label="Instagram Profile">
                  <i data-feather="instagram"></i>
                </a>
              </li>
              <li class="linkedin">
                <a target="_blank" rel="noopener noreferrer" href="${siteConfig.social.linkedin}" aria-label="LinkedIn Profile">
                  <i data-feather="linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <main id="main-content" class="main-page-wrapper">
      <div class="rn-portfolio-area rn-section-gap section-separator">
        <div class="container">
          <!-- Visible Breadcrumbs Navigation -->
          <nav aria-label="Breadcrumb" class="breadcrumb-nav">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item"><a href="/portfolio.html">Portfolio</a></li>
              <li class="breadcrumb-item active" aria-current="page">${escapeHtml(project.title)}</li>
            </ol>
          </nav>

          <!-- Header Area -->
          <div class="row">
            <div class="col-lg-12">
              <div
                class="section-title text-center"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <span class="subtitle">Case Study &bull; ${escapeHtml(project.category_label)}</span>
                <h1 class="title">${escapeHtml(project.title)}</h1>
                <p class="portfolio-stats-summary">
                  ${escapeHtml(project.tagline)}
                </p>
                ${badgeHtml}
              </div>
            </div>
          </div>

          <!-- Main Case Study Content Area -->
          <div class="row row--25 mt--30">
            <div class="col-12">
              <article
                class="rn-blog portfolio-details-card"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <div class="inner">
                  <!-- Big Showcase Thumbnail -->
                  <div class="thumbnail">
                    ${renderImage(project.image, `${project.title} showcase preview`, 1200, 630, true)}
                  </div>

                  <div class="content">
                    <!-- 3 Impact Metric Stats Cards -->
                    <div class="row row--25 mt--10">
                      ${metricsHtml}
                    </div>

                    <!-- CTA Actions Bar -->
                    <div class="portfolio-cta-group mt--40 mb--40">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="${escapeHtml(project.url)}"
                        class="rn-btn primary-live"
                        aria-label="Visit live website for ${escapeHtml(project.title)}"
                      >
                        <span>VISIT LIVE WEBSITE</span>
                        <i data-feather="external-link"></i>
                      </a>
                      <a href="/portfolio.html" class="rn-btn" aria-label="Back to all projects">
                        <span>BACK TO ALL PROJECTS</span>
                        <i data-feather="grid"></i>
                      </a>
                      <a href="/#contacts" class="rn-btn" aria-label="Contact Khairul Islam">
                        <span>GET IN TOUCH</span>
                        <i data-feather="mail"></i>
                      </a>
                    </div>

                    <!-- Section: Executive Summary -->
                    <h2 class="case-study-section-title">
                      <i data-feather="info"></i> Executive Summary &amp; Overview
                    </h2>
                    <p class="portfolio-text-block">
                      ${escapeHtml(project.overview)}
                    </p>

                    <!-- Section: Problem & Challenge -->
                    <h2 class="case-study-section-title">
                      <i data-feather="alert-circle"></i> Business Context &amp; Challenge
                    </h2>
                    <p class="portfolio-text-block">
                      ${escapeHtml(project.problem_challenge)}
                    </p>

                    <!-- Section: Engineered Solution -->
                    <h2 class="case-study-section-title">
                      <i data-feather="cpu"></i> Engineered Solution &amp; Architecture
                    </h2>
                    <p class="portfolio-text-block">
                      ${escapeHtml(project.solution)}
                    </p>

                    <!-- Section: Key Functional Modules -->
                    <h2 class="case-study-section-title mt--40">
                      <i data-feather="check-square"></i> Core Functional Capabilities
                    </h2>
                    <ul class="portfolio-feature-list liststyle">
                      ${featuresHtml}
                    </ul>

                    <!-- Bottom CTA Banner -->
                    <div class="portfolio-cta-group mt--50 pt--30" style="border-top: 1px solid rgba(255,255,255,0.08);">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="${escapeHtml(project.url)}"
                        class="rn-btn primary-live"
                        aria-label="Open live project for ${escapeHtml(project.title)}"
                      >
                        <span>OPEN LIVE PROJECT</span>
                        <i data-feather="arrow-up-right"></i>
                      </a>
                      <a href="/portfolio.html" class="rn-btn" aria-label="Explore more projects">
                        <span>EXPLORE MORE PROJECTS</span>
                        <i data-feather="arrow-left"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <!-- Section: Related Projects -->
          <div class="row mt--60">
            <div class="col-lg-12">
              <div class="section-title text-center" data-aos="fade-up">
                <span class="subtitle">Explore Further</span>
                <h3 class="title">Related Portfolio Projects</h3>
              </div>
            </div>
          </div>

          <div class="row row--25 mt--10">
            ${relatedHtml}
          </div>
        </div>
      </div>

      <div class="backto-top">
        <div>
          <i data-feather="arrow-up"></i>
        </div>
      </div>
    </main>

    <div class="rn-footer-area rn-section-gap section-separator">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="footer-area text-center">
              <p class="description mt--30">
                &copy; ${new Date().getFullYear()} ${escapeHtml(siteConfig.author.name)}. Built with clean architecture, high performance &amp; accessibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scripts -->
    <script src="/assets/js/jquery.js"></script>
    <script src="/assets/js/modernizer.min.js"></script>
    <script src="/assets/js/feather.min.js"></script>
    <script src="/assets/js/slick.min.js"></script>
    <script src="/assets/js/bootstrap.min.js"></script>
    <script src="/assets/js/text-type.js"></script>
    <script src="/assets/js/wow.js"></script>
    <script src="/assets/js/aos.js"></script>
    <script src="/assets/js/main.js"></script>

    <script>
      document.addEventListener("DOMContentLoaded", function () {
        if (typeof feather !== "undefined") {
          feather.replace();
        }
      });
    </script>
  </body>
</html>`;
}

// Generate sitemap.xml
function generateSitemapXml(projects) {
  const today = new Date().toISOString().split('T')[0];
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteConfig.siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${siteConfig.siteUrl}/portfolio.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
`;

  for (const project of projects) {
    xml += `  <url>
    <loc>${siteConfig.siteUrl}/projects/${project.id}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  }

  xml += `</urlset>\n`;
  return xml;
}

// Generate robots.txt
function generateRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${siteConfig.siteUrl}/sitemap.xml
`;
}

// Generate 404.html
function generate404Html() {
  const canonicalUrl = `${siteConfig.siteUrl}/404.html`;
  const pageTitle = `404: Page Not Found | ${siteConfig.author.name}`;
  const metaDesc = `The requested page could not be found. Return to ${siteConfig.author.name}'s portfolio homepage or browse full-stack engineering case studies.`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>${escapeHtml(pageTitle)}</title>
    <meta name="robots" content="noindex, follow">
    <meta name="description" content="${escapeHtml(metaDesc)}">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="canonical" href="${canonicalUrl}">

    <!-- Favicon & PWA -->
    <link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon.ico">
    <link rel="apple-touch-icon" href="/assets/images/icons/icon-192.png">
    <link rel="manifest" href="/manifest.json">

    <!-- Stylesheets -->
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/css/slick.css">
    <link rel="stylesheet" href="/assets/css/slick-theme.css">
    <link rel="stylesheet" href="/assets/css/aos.css">
    <link rel="stylesheet" href="/assets/css/feature.css">
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="/assets/css/devicon.min.css?v=2.16.0">

    <style>
      .error-area {
        min-height: 70vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 80px 0;
      }
      .error-card {
        background: #1e2024;
        border-radius: 16px;
        padding: 60px 40px;
        box-shadow: 10px 10px 25px #1c1e22, -10px -10px 25px #262a2e;
        border: 1px solid rgba(255, 255, 255, 0.05);
        max-width: 680px;
        margin: 0 auto;
      }
      .error-code {
        font-size: 96px;
        font-weight: 800;
        background: linear-gradient(145deg, #ff014f, #d11448);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: 1;
        margin-bottom: 20px;
        letter-spacing: 2px;
      }
      .error-title {
        color: #ffffff;
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 15px;
      }
      .error-text {
        color: #878e99;
        font-size: 16px;
        line-height: 1.7;
        margin-bottom: 35px;
      }
      .error-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: center;
      }
      .error-actions .rn-btn.primary-live {
        background: linear-gradient(145deg, #ff014f, #d11448);
        color: #ffffff !important;
        box-shadow: 0 4px 15px rgba(255, 1, 79, 0.4);
        border: none;
      }
      .skip-link {
        position: absolute;
        top: -999px;
        left: 20px;
        z-index: 999999;
        background: #ff014f;
        color: #ffffff !important;
        padding: 10px 18px;
        border-radius: 6px;
        font-weight: 600;
        text-decoration: none;
        transition: top 0.2s ease;
      }
      .skip-link:focus {
        top: 20px;
        outline: 2px solid #ffffff;
      }
    </style>
  </head>

  <body class="template-color-1" data-spy="scroll" data-offset="70">
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <header class="rn-header haeder-default black-logo-version header--fixed header--sticky">
      <div class="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
        <div class="col-lg-2 col-6">
          <div class="header-left">
            <div class="logo">
              <a href="/">
                <img src="/assets/images/logo/logo-2.png" alt="Khairul Islam Logo" width="160" height="48">
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-10 col-6">
          <div class="header-center">
            <nav id="sideNav" class="mainmenu-nav navbar-example2 d-none d-xl-block" aria-label="Main Navigation">
              <ul class="primary-menu nav nav-pills">
                <li class="nav-item">
                  <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/portfolio.html">Portfolio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#resume">Resume</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#testimonial">Testimonial</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#contacts">Contact</a>
                </li>
              </ul>
            </nav>
            <div class="header-right">
              <div class="hamberger-menu d-block d-xl-none">
                <i id="menuBtn" class="feather-menu humberger-menu" role="button" aria-label="Open Mobile Menu" tabindex="0"></i>
              </div>
              <div class="close-menu d-block">
                <span class="closeTrigger" role="button" aria-label="Close Mobile Menu" tabindex="0">
                  <i data-feather="x"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main id="main-content" class="main-page-wrapper">
      <section class="error-area">
        <div class="container">
          <div class="error-card" data-aos="fade-up" data-aos-duration="600">
            <div class="error-code">404</div>
            <h1 class="error-title">Page Not Found</h1>
            <p class="error-text">
              The page you are looking for doesn't exist, was renamed, or has moved to a new destination.
            </p>
            <div class="error-actions">
              <a href="/" class="rn-btn primary-live" aria-label="Return to Homepage">
                <span>RETURN TO HOMEPAGE</span>
                <i data-feather="home"></i>
              </a>
              <a href="/portfolio.html" class="rn-btn" aria-label="Explore Portfolio Projects">
                <span>VIEW PORTFOLIO</span>
                <i data-feather="grid"></i>
              </a>
              <a href="/#contacts" class="rn-btn" aria-label="Contact Khairul Islam">
                <span>GET IN TOUCH</span>
                <i data-feather="mail"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <div class="rn-footer-area rn-section-gap section-separator">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="footer-area text-center">
              <p class="description mt--30">
                &copy; ${new Date().getFullYear()} ${escapeHtml(siteConfig.author.name)}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scripts -->
    <script src="/assets/js/jquery.js"></script>
    <script src="/assets/js/feather.min.js"></script>
    <script src="/assets/js/bootstrap.min.js"></script>
    <script src="/assets/js/aos.js"></script>
    <script src="/assets/js/main.js"></script>
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        if (typeof feather !== "undefined") {
          feather.replace();
        }
      });
    </script>
  </body>
</html>`;
}

// Main Build Runner
function build() {
  console.log(`🚀 Starting static site generation for ${siteConfig.siteUrl}...`);

  const projects = loadProjectsData();
  console.log(`📦 Loaded ${projects.length} portfolio projects.`);

  // 1. Generate Static Project Case Study Pages (projects/<id>/index.html)
  const projectsBaseDir = path.join(rootDir, 'projects');
  if (!fs.existsSync(projectsBaseDir)) {
    fs.mkdirSync(projectsBaseDir, { recursive: true });
  }

  let generatedCount = 0;
  for (const project of projects) {
    const projectDir = path.join(projectsBaseDir, project.id);
    if (!fs.existsSync(projectDir)) {
      fs.mkdirSync(projectDir, { recursive: true });
    }
    const html = generateProjectPageHtml(project, projects);
    const htmlPath = path.join(projectDir, 'index.html');
    fs.writeFileSync(htmlPath, html, 'utf8');
    generatedCount++;
  }
  console.log(`✅ Generated ${generatedCount} static project case study pages in projects/<id>/index.html.`);

  // 2. Generate sitemap.xml
  const sitemapXml = generateSitemapXml(projects);
  const sitemapPath = path.join(rootDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapXml, 'utf8');
  console.log(`✅ Generated dynamic sitemap.xml with ${projects.length + 2} URL entries.`);

  // 3. Generate robots.txt
  const robotsTxt = generateRobotsTxt();
  const robotsPath = path.join(rootDir, 'robots.txt');
  fs.writeFileSync(robotsPath, robotsTxt, 'utf8');
  console.log(`✅ Generated robots.txt pointing to ${siteConfig.siteUrl}/sitemap.xml.`);

  // 4. Generate 404.html
  const notFoundHtml = generate404Html();
  const notFoundPath = path.join(rootDir, '404.html');
  fs.writeFileSync(notFoundPath, notFoundHtml, 'utf8');
  console.log(`✅ Generated custom 404.html.`);

  console.log('🎉 Static build finished successfully!');
}

if (require.main === module) {
  try {
    build();
  } catch (err) {
    console.error('❌ Build failed:', err);
    process.exit(1);
  }
}

module.exports = { build, generateProjectPageHtml, generateSitemapXml, generateRobotsTxt, generate404Html };
