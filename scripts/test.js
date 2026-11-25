/**
 * Test & Validation Suite for emonideas.com static build
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
let failures = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    failures++;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

function runTests() {
  console.log('🧪 Starting validation tests...\n');

  // 1. Validate site.config.js
  const configPath = path.join(rootDir, 'site.config.js');
  assert(fs.existsSync(configPath), 'site.config.js exists');
  const config = require(configPath);
  assert(Boolean(config.siteUrl && config.siteUrl.startsWith('https://')), 'site.config.js has valid canonical siteUrl');
  assert(config.author && config.author.fullName === 'Khairul Islam', 'site.config.js has author Khairul Islam');
  assert(config.social && config.social.github && config.social.linkedin, 'site.config.js has required social links');

  // 2. Validate package.json
  const pkgPath = path.join(rootDir, 'package.json');
  assert(fs.existsSync(pkgPath), 'package.json exists');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  assert(pkg.scripts && pkg.scripts.build && pkg.scripts.test, 'package.json has build and test scripts');

  // 3. Validate vercel.json
  const vercelPath = path.join(rootDir, 'vercel.json');
  assert(fs.existsSync(vercelPath), 'vercel.json exists');
  const vercel = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
  assert(vercel.cleanUrls === true, 'vercel.json has cleanUrls: true');
  assert(Array.isArray(vercel.redirects) && vercel.redirects.length > 0, 'vercel.json has redirects configured');
  assert(Array.isArray(vercel.headers) && vercel.headers.length > 0, 'vercel.json has security and caching headers');

  // 4. Validate robots.txt
  const robotsPath = path.join(rootDir, 'robots.txt');
  assert(fs.existsSync(robotsPath), 'robots.txt exists');
  const robots = fs.readFileSync(robotsPath, 'utf8');
  assert(robots.includes(`Sitemap: ${config.siteUrl}/sitemap.xml`), 'robots.txt points to canonical sitemap.xml');

  // 5. Validate sitemap.xml
  const sitemapPath = path.join(rootDir, 'sitemap.xml');
  assert(fs.existsSync(sitemapPath), 'sitemap.xml exists');
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  assert(sitemap.includes(`<loc>${config.siteUrl}/</loc>`), 'sitemap includes root page');
  assert(sitemap.includes(`<loc>${config.siteUrl}/portfolio.html</loc>`), 'sitemap includes portfolio.html');
  assert(!sitemap.includes('404.html'), 'sitemap excludes 404.html');

  // 6. Validate 404.html
  const notFoundPath = path.join(rootDir, '404.html');
  assert(fs.existsSync(notFoundPath), '404.html exists');
  const notFoundHtml = fs.readFileSync(notFoundPath, 'utf8');
  assert(notFoundHtml.includes('404'), '404.html contains 404 code');
  assert(notFoundHtml.includes('Page Not Found'), '404.html contains Page Not Found text');
  assert(notFoundHtml.includes('noindex'), '404.html has noindex robots meta');
  assert(notFoundHtml.includes('class="skip-link"'), '404.html has accessible skip link');
  assert(notFoundHtml.includes('id="main-content"'), '404.html has main-content id');

  // 7. Validate projects data & all 36 static project pages
  const projectsDataPath = path.join(rootDir, 'assets', 'js', 'projects-data.js');
  assert(fs.existsSync(projectsDataPath), 'projects-data.js exists');
  const projectsDataCode = fs.readFileSync(projectsDataPath, 'utf8');
  const getProjects = new Function(projectsDataCode + '; return PORTFOLIO_PROJECTS_DATA;');
  const projects = getProjects();
  assert(projects.length === 36, `Found exactly 36 projects in projects-data.js (actual: ${projects.length})`);

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  let validProjectsCount = 0;
  for (const p of projects) {
    const pagePath = path.join(rootDir, 'projects', p.id, 'index.html');
    if (!fs.existsSync(pagePath)) {
      assert(false, `Static page exists for project ${p.id}`);
      continue;
    }
    const html = fs.readFileSync(pagePath, 'utf8');

    // Title & Meta
    const expectedTitle = `<title>${escapeHtml(p.title)} | Case Study | ${config.author.fullName}</title>`;
    const hasTitle = html.includes(expectedTitle);
    const hasCanonical = html.includes(`<link rel="canonical" href="${config.siteUrl}/projects/${p.id}/"`) || html.includes(`<link rel="canonical" href="${config.siteUrl}/projects/${p.id}/">`);
    const hasOg = html.includes(`property="og:url" content="${config.siteUrl}/projects/${p.id}/"`);
    const hasTwitter = html.includes('name="twitter:card" content="summary_large_image"');
    const hasSingleH1 = (html.match(/<h1[^>]*>/g) || []).length === 1;
    const hasBreadcrumbs = html.includes('class="breadcrumb"');
    const hasBackLink = html.includes('href="/portfolio.html"');
    const hasSkipLink = html.includes('class="skip-link"');
    const hasMainId = html.includes('id="main-content"');

    // JSON-LD validation
    const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    let validJsonLd = false;
    if (jsonLdMatch) {
      try {
        const parsed = JSON.parse(jsonLdMatch[1]);
        if (parsed['@graph'] && parsed['@graph'].length >= 2) {
          validJsonLd = true;
        }
      } catch (e) {
        console.error(`Invalid JSON-LD in project ${p.id}:`, e.message);
      }
    }

    if (hasTitle && hasCanonical && hasOg && hasTwitter && hasSingleH1 && hasBreadcrumbs && hasBackLink && hasSkipLink && hasMainId && validJsonLd) {
      validProjectsCount++;
    } else {
      assert(false, `Project ${p.id} passed all SEO & schema assertions (Title: ${hasTitle}, Canonical: ${hasCanonical}, H1: ${hasSingleH1}, SkipLink: ${hasSkipLink}, MainId: ${hasMainId}, JSON-LD: ${validJsonLd})`);
    }
  }

  assert(validProjectsCount === 36, `All 36 project pages passed complete validation (actual: ${validProjectsCount}/36)`);

  console.log(`\n========================================`);
  if (failures === 0) {
    console.log(`🎉 ALL TESTS PASSED! (${validProjectsCount} static case studies verified)`);
    process.exit(0);
  } else {
    console.error(`💥 ${failures} TEST(S) FAILED!`);
    process.exit(1);
  }
}

if (require.main === module) {
  runTests();
}

module.exports = { runTests };
