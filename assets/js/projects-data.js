// Complete structured portfolio case study data for all 36 production projects
const PORTFOLIO_PROJECTS_DATA = [
  {
    "id": "cashboxglobal",
    "title": "CashBox POS (Ultimate POS & Billing)",
    "tagline": "All-in-One Cloud Point of Sale & Retail Management Platform",
    "category": "saas",
    "category_label": "SaaS & Smart Apps",
    "badge": "POS & INVENTORY",
    "badge_icon": "database",
    "url": "https://cashboxglobal.com/",
    "image": "assets/images/portfolio/cashboxglobal.jpg",
    "metrics": [
      {
        "stat": "< 1.2s",
        "label": "Average Counter Checkout Speed"
      },
      {
        "stat": "99.98%",
        "label": "Real-time Multi-branch Data Sync"
      },
      {
        "stat": "100%",
        "label": "Automated Stock & Tax Reconciliation"
      }
    ],
    "overview": "CashBox POS is an enterprise cloud point-of-sale and retail management platform built for modern retail businesses, supermarkets, and multi-store operations. Engineered for high-throughput counter environments, it synchronizes inventory across retail outlets, delivers barcode-assisted checkouts, and generates instant financial analytics.",
    "problem_challenge": "Growing multi-branch retailers struggle with disconnected inventory databases, manual end-of-day sales reconciliations, and slow checkout lines during peak customer hours. Traditional desktop POS software fails to provide centralized visibility to business owners across distributed locations.",
    "solution": "Architected as a resilient cloud POS with local offline transaction fallback. The system guarantees instantaneous barcode lookups, automated batch inventory deductions, multi-tender payment processing, automated receipt printing, and real-time ledger updates across all branch registers.",
    "features": [
      "High-speed barcode scanning and responsive cashier checkout terminal",
      "Centralized multi-store inventory sync with low-stock automated alerts",
      "Multi-branch cash drawer reconciliation and shift handover reports",
      "Customizable receipt template designer with thermal printer support",
      "Role-based cashier permissions, discount thresholds, and audit logging",
      "Comprehensive daily sales, profit margin, and inventory turnover dashboards"
    ]
  },
  {
    "id": "jogajogqr",
    "title": "Jogajog QR (যোগাযোগ QR)",
    "tagline": "Privacy-First Smart Communications & Dynamic QR Ecosystem",
    "category": "saas",
    "category_label": "SaaS & Smart Apps",
    "badge": "MULTI MOBILE APP",
    "badge_icon": "smartphone",
    "url": "https://jogajogqr.com/",
    "image": "assets/images/portfolio/jogajogqr.jpg",
    "metrics": [
      {
        "stat": "0 Exposure",
        "label": "Personal Mobile Number Privacy"
      },
      {
        "stat": "< 80ms",
        "label": "Dynamic QR Code Resolution Latency"
      },
      {
        "stat": "Android & iOS",
        "label": "Synchronized Cross-Platform Apps"
      }
    ],
    "overview": "Jogajog QR is a cutting-edge privacy and communication SaaS platform that allows individuals and enterprises to communicate securely via dynamic QR codes. By generating encrypted communication gateways, users can receive voice calls, emergency alerts, messages, and vCard exchanges without disclosing their personal phone numbers.",
    "problem_challenge": "Vehicle owners, homeowners, and business professionals often need to display contact information publicly (such as on cars or storefronts). However, sharing raw phone numbers leads to harassment, spam calls, and serious privacy violations.",
    "solution": "Developed an end-to-end masked communication infrastructure utilizing WebRTC and telecommunication masking APIs. Scanning a Jogajog QR code initiates secure voice connections or push notifications directly to the owner's mobile application without revealing the caller or receiver's actual phone number.",
    "features": [
      "Dynamic encrypted QR code generator with vector download and print presets",
      "Masked voice calling and push notifications without exposing phone numbers",
      "Vehicle parking notification system with instant one-tap driver alerts",
      "Emergency contact routing for residential gates, pet tags, and office desks",
      "Cross-platform mobile apps for Android and iOS with native push messaging",
      "Passkey and biometric authentication for ultra-secure user access"
    ]
  },
  {
    "id": "asianjewelleryhouse",
    "title": "Asian Jewellery House",
    "tagline": "Dual-System Luxury Jewelry Showroom & Back-Office POS",
    "category": "ecommerce",
    "category_label": "E-Commerce & Retail POS",
    "badge": "POS & INVENTORY",
    "badge_icon": "database",
    "url": "https://asianjewelleryhouse.com/",
    "image": "assets/images/portfolio/asianjewelleryhouse.jpg",
    "metrics": [
      {
        "stat": "100%",
        "label": "Karat Precision Calculation Accuracy"
      },
      {
        "stat": "Live Rate",
        "label": "Precious Metal Pricing Automation"
      },
      {
        "stat": "Instant PDF",
        "label": "Legal Tax & Hallmark Invoice Delivery"
      }
    ],
    "overview": "Asian Jewellery House is a premium jewelry commerce ecosystem combining an elegant digital customer showroom with a specialized back-office POS and inventory management application. Engineered specifically for gold, silver, and diamond jewelry retailers, it automates complex karat pricing and stone weight calculations.",
    "problem_challenge": "Jewelry accounting requires tracking fluctuating market gold rates, making charges, precious stone weights (carats vs grams), and wastage percentages. Standard retail POS systems cannot handle dual-weight inventory or fluctuating precious metal pricing.",
    "solution": "Designed a custom jewelry inventory calculation engine. The system calculates exact retail prices dynamically based on gold karat (22K, 21K, 18K), gross weight, stone deductions, and making charges, automatically outputting hallmark-compliant PDF tax invoices and OTP-verified receipts.",
    "features": [
      "Real-time gold and silver market rate updater with instant catalog recalibration",
      "Dual-weight product management (gross weight, net weight, stone carat value)",
      "Counter sales cashier module with barcode generation and optical scanning",
      "Automated making charge, wastage, and hallmark certification tracking",
      "Integrated customer ledger, installment plans, and advance booking handling",
      "One-click PDF tax invoice generation with digital hallmark verification"
    ]
  },
  {
    "id": "akhayerintl",
    "title": "A Khayer International (RL 2235)",
    "tagline": "Licensed Overseas Manpower Agency ERP & Financial Accounting",
    "category": "enterprise",
    "category_label": "Enterprise ERP & Systems",
    "badge": "INTERNAL ERP",
    "badge_icon": "layers",
    "url": "https://akhayerintl.com/",
    "image": "assets/images/portfolio/akhayerintl.jpg",
    "metrics": [
      {
        "stat": "Multi-Currency",
        "label": "Foreign Exchange Banking Ledgers"
      },
      {
        "stat": "100% Audit",
        "label": "Government RL 2235 Regulatory Compliance"
      },
      {
        "stat": "Zero Loss",
        "label": "Agent Commission & Deposit Tracking"
      }
    ],
    "overview": "A Khayer International is a comprehensive internal enterprise ERP and financial governance system designed specifically for a licensed overseas manpower recruitment agency (RL 2235). It coordinates candidate processing pipelines, medical clearances, visa issuance, foreign employer demands, and multi-currency accounting ledgers.",
    "problem_challenge": "International recruitment involves multi-step immigration workflows, hundreds of local field agents, fluctuating foreign exchange receipts, and stringent government compliance guidelines. Spreadsheets cause tracking blind spots and agent commission discrepancies.",
    "solution": "Built a multi-module ERP featuring candidate lifecycle tracking from interview to flight departure. The financial engine maintains double-entry bookkeeping, agent commission balances, sub-agent deposits, employer invoices, and exportable government audit reports.",
    "features": [
      "End-to-end candidate lifecycle tracking: passport, medical, visa, and flight ticketing",
      "Sub-agent and broker account ledgers with automated commission calculations",
      "Multi-currency banking and cash ledger supporting BDT, USD, SAR, and AED",
      "Visa quota allocation and foreign employer demand order management",
      "Automated PDF candidate dossiers, flight manifests, and embassy documentation",
      "Audit-ready financial reports, balance sheets, and profit/loss statements"
    ]
  },
  {
    "id": "alifsuper",
    "title": "Alif Super Shop & Model Pharma",
    "tagline": "Omnichannel Retail Supermarket & Pharmacy POS Platform",
    "category": "ecommerce",
    "category_label": "E-Commerce & Retail POS",
    "badge": "POS & INVENTORY",
    "badge_icon": "database",
    "url": "https://alifsuper.com/",
    "image": "assets/images/portfolio/alifsuper.jpg",
    "metrics": [
      {
        "stat": "Dual-Sector",
        "label": "Grocery Supermarket & Pharmacy Support"
      },
      {
        "stat": "Auto-Dispatch",
        "label": "Steadfast Courier API Integration"
      },
      {
        "stat": "Batch Control",
        "label": "Pharmaceutical Expiry Tracking"
      }
    ],
    "overview": "Alif Super Shop & Model Pharma is an integrated omnichannel retail and pharmacy commerce platform. It synchronizes physical counter sales with online web ordering, featuring dedicated medicine batch management, grocery cataloging, automated cashier registers, and courier shipping dispatch.",
    "problem_challenge": "Managing groceries and pharmaceutical products under one roof requires handling fast-moving consumables alongside strictly tracked medicine batches, expiry alerts, and multiple cashier terminals.",
    "solution": "Delivered a dual-purpose commerce system where pharmacy items track batch numbers and manufacturing/expiry dates while grocery items track SKU weights. Integrated Steadfast Courier API for online delivery while local POS terminals print receipts at counter checkouts.",
    "features": [
      "Integrated cashier POS terminal with thermal receipt printing and barcode scanning",
      "Pharmaceutical batch number, manufacturer, and expiration date tracking alerts",
      "Omnichannel stock synchronization between physical shelves and web store",
      "Automated courier consignment booking via Steadfast Courier REST API",
      "Daily expense register, cash-in/cash-out tracking, and shift closure summaries",
      "Customer prescription upload and verification workflow for medicine delivery"
    ]
  },
  {
    "id": "neoventisgrp",
    "title": "Neoventis Group",
    "tagline": "Pharmaceutical & Biotech Manufacturing Enterprise ERP",
    "category": "enterprise",
    "category_label": "Enterprise ERP & Systems",
    "badge": "INTERNAL ERP",
    "badge_icon": "layers",
    "url": "https://neoventisgrp.com/",
    "image": "assets/images/portfolio/neoventisgrp.jpg",
    "metrics": [
      {
        "stat": "Multi-Entity",
        "label": "Centralized Governance for All Subsidiaries"
      },
      {
        "stat": "GMP Ready",
        "label": "Pharmaceutical Batch Production Tracking"
      },
      {
        "stat": "Cost Precision",
        "label": "Bill of Materials (BOM) & Overhead Costing"
      }
    ],
    "overview": "Neoventis Group is a diversified biotechnology and pharmaceutical corporate enterprise operating specialized concerns including Star Laboratories and Biotechs manufacturing divisions. Its tailored ERP platform orchestrates raw material procurement, batch manufacturing, and corporate governance across all operating units.",
    "problem_challenge": "Pharmaceutical manufacturing requires strict regulatory traceability for Active Pharmaceutical Ingredients (APIs), excipients, multi-stage packaging, and rigorous cost accounting across holding subsidiaries.",
    "solution": "Constructed an enterprise resource planning system covering raw material requisition, Bill of Materials (BOM), multi-stage formulation workflows, quality control signoffs, and centralized corporate financial reporting.",
    "features": [
      "Multi-subsidiary governance linking Star Laboratories, Biotechs, and holding units",
      "Pharmaceutical Bill of Materials (BOM) management and raw material batch tracking",
      "Manufacturing formulation stages: granulation, compression, coating, packaging",
      "Non-inventory indirect overhead costing and unit production price calculations",
      "Vendor purchase orders, goods receipt notes (GRN), and supplier ledger reconciliations",
      "Automated quality assurance (QA) stage signoffs and batch production records (BPR)"
    ]
  },
  {
    "id": "xdccian",
    "title": "Dhaka Commerce College Alumni (XDCCIAN)",
    "tagline": "Official Alumni Community & Automated Event Ticketing Platform",
    "category": "saas",
    "category_label": "SaaS & Smart Apps",
    "badge": "BILLING & PAYMENT",
    "badge_icon": "credit-card",
    "url": "https://xdccian.com/",
    "image": "assets/images/portfolio/xdccian.jpg",
    "metrics": [
      {
        "stat": "10,000+",
        "label": "Registered Alumni Directory Records"
      },
      {
        "stat": "Automated",
        "label": "bKash & SSLCommerz Direct Payments"
      },
      {
        "stat": "< 0.5s",
        "label": "Digital QR Gate Pass Ticket Verification"
      }
    ],
    "overview": "XDCCIAN is the official web ecosystem and event management platform for the alumni community of Dhaka Commerce College. It unifies alumni directories, executive committees, news bulletins, and a high-capacity event registration engine with automated digital ticketing.",
    "problem_challenge": "Managing large-scale alumni reunions requires handling thousands of simultaneous registrations, validating alumni credentials, collecting ticket fees through mobile banking, and verifying physical gate entry.",
    "solution": "Engineered a scalable registration portal integrated with bKash Direct API and SSLCommerz. Upon successful payment verification, the system issues unique QR-coded digital entry passes downloadable as secure PDF tickets.",
    "features": [
      "Batch-wise alumni directory and verified profile networking database",
      "Automated event registration engine with multi-tier ticket pricing (single, couple, kids)",
      "Instant payment processing via direct bKash Tokenized API and SSLCommerz gateway",
      "Dynamic PDF gate pass generation with encrypted QR code and serial number",
      "Optical gate scanner web tool for volunteers to validate entry tickets at reunions",
      "Executive committee governance, alumni blood donor registry, and news notices"
    ]
  },
  {
    "id": "epaymaker",
    "title": "ePayMaker",
    "tagline": "Integrated FinTech Payment Enablement & Merchant Gateway",
    "category": "fintech",
    "category_label": "FinTech & Billing",
    "badge": "BILLING & PAYMENT",
    "badge_icon": "credit-card",
    "url": "https://epaymaker.com/",
    "image": "assets/images/portfolio/epaymaker.jpg",
    "metrics": [
      {
        "stat": "PCI-DSS Aware",
        "label": "Secure Transaction Tokenization"
      },
      {
        "stat": "Multi-Gateway",
        "label": "Aggregated Card & Mobile Banking Rails"
      },
      {
        "stat": "Automated",
        "label": "Merchant Settlement & Invoicing"
      }
    ],
    "overview": "ePayMaker is an integrated financial technology platform providing online merchant acquiring, payment gateway solutions, and POS enablement for small and medium businesses. It streamlines multi-currency transaction processing, automated billing, and merchant onboarding.",
    "problem_challenge": "Online businesses and retail merchants struggle to integrate multiple independent payment providers, face high reconciliation overheads, and require transparent merchant fee calculation.",
    "solution": "Built a unified merchant payment enablement platform that aggregates payment rails, provides transparent checkout interfaces, automates payout reconciliations, and manages merchant compliance.",
    "features": [
      "Unified merchant checkout gateway supporting cards, mobile banking, and bank transfers",
      "Merchant digital onboarding portal with automated KYC document verification",
      "Real-time transaction analytics dashboard with instant success/failure telemetry",
      "Automated billing, merchant settlement payout scheduling, and fee calculations",
      "Webhook notification engine for seamless eCommerce shopping cart integrations",
      "Dispute management, chargeback workflows, and refund processing"
    ]
  },
  {
    "id": "khidmahhospital",
    "title": "Khidmah Hospital Dhaka",
    "tagline": "Specialized Healthcare Services & Patient Care Management",
    "category": "corporate",
    "category_label": "Corporate & Healthcare",
    "badge": "None",
    "badge_icon": "",
    "url": "https://khidmahhospital.com/",
    "image": "assets/images/portfolio/khidmahhospital.jpg",
    "metrics": [
      {
        "stat": "50+ Doctors",
        "label": "Specialized Consultants Scheduled"
      },
      {
        "stat": "24/7",
        "label": "Emergency & Diagnostic Test Pricing Access"
      },
      {
        "stat": "Instant",
        "label": "Automated Appointment Email Confirmations"
      }
    ],
    "overview": "Khidmah Hospital is the official healthcare digital portal and patient service system for Khidmah Hospital in Dhaka. It connects patients with medical consultants, diagnostic test catalogs, department schedules, and online appointment booking.",
    "problem_challenge": "Patients often struggle to find doctor consultation schedules, current diagnostic pricing, or confirm appointments without making long phone calls or waiting in hospital lines.",
    "solution": "Designed a modern patient-centric healthcare portal that provides searchable consultant directories, departmental service overviews, transparent diagnostic test fee schedules, and an appointment booking engine.",
    "features": [
      "Specialized doctor directory filterable by medical department, gender, and availability",
      "Online outpatient consultation appointment booking with confirmation email notifications",
      "Comprehensive diagnostic test pricing catalog and preparation guidelines",
      "Departmental clinical profiles covering Cardiology, Gynecology, Surgery, and Pediatrics",
      "Hospital career portal, health checkup package promotions, and emergency contact details",
      "Administrative patient queue tracking and doctor chamber schedule management"
    ]
  },
  {
    "id": "cbox",
    "title": "C-Box Canada",
    "tagline": "Ontario Contemporary Fashion & Lifestyle eCommerce Platform",
    "category": "ecommerce",
    "category_label": "E-Commerce & Retail POS",
    "badge": "BILLING & PAYMENT",
    "badge_icon": "credit-card",
    "url": "https://c-box.ca/",
    "image": "assets/images/portfolio/cbox.jpg",
    "metrics": [
      {
        "stat": "CAD & USD",
        "label": "North American Multi-Currency Shopping"
      },
      {
        "stat": "PayPal",
        "label": "Integrated International Payment Processing"
      },
      {
        "stat": "Multi-Variant",
        "label": "Size, Color & Stock Level Accuracy"
      }
    ],
    "overview": "C-Box Canada is an Ontario-based retail fashion and lifestyle e-commerce store offering contemporary apparel, footwear, and accessories. Designed for North American shoppers, it delivers intuitive product discovery, color/size variant selection, order tracking, and online PayPal checkout.",
    "problem_challenge": "Apparel e-commerce demands seamless multi-variant matrix navigation (sizes, colors, stock per combination) and rock-solid payment processing tailored to Canadian and US consumers.",
    "solution": "Engineered an e-commerce platform with dynamic SKU variant management, synchronized inventory counts, personalized customer wishlists, and seamless checkout via the PayPal REST SDK.",
    "features": [
      "Interactive product catalog with multi-dimensional variant selection (size, color, fit)",
      "Integrated PayPal checkout supporting credit cards, debit cards, and PayPal wallets",
      "Customer wishlist, order history, and real-time shipping package tracking",
      "Promotional campaign manager with discount voucher codes and flash sales",
      "Responsive shopping interface optimized for mobile and desktop screens",
      "Administrative product catalog and order dispatch management system"
    ]
  },
  {
    "id": "henneybearlondon",
    "title": "Henney Bear Bangladesh",
    "tagline": "Official Distributor Platform for British Tapestry Fashion",
    "category": "ecommerce",
    "category_label": "E-Commerce & Retail POS",
    "badge": "None",
    "badge_icon": "",
    "url": "https://henneybearlondon.com.bd/",
    "image": "assets/images/portfolio/henneybearlondon.jpg",
    "metrics": [
      {
        "stat": "100% Branded",
        "label": "Official Tapestry Fashion Catalog"
      },
      {
        "stat": "Automated",
        "label": "Steadfast Courier API Consignment Creation"
      },
      {
        "stat": "HD Video",
        "label": "Integrated Product Demos & Model Previews"
      }
    ],
    "overview": "Henney Bear Bangladesh is the official branded e-commerce distribution platform for premium British artistic tapestry handbags, backpacks, suitcases, and luxury accessories across Bangladesh. It provides categorized showcases with video previews, customer reviews, and automated delivery dispatch.",
    "problem_challenge": "Luxury lifestyle brands must preserve brand aesthetics while providing reliable e-commerce functionality like cash on delivery, mobile banking, and automated parcel booking.",
    "solution": "Delivered a visual storefront featuring tapestry pattern showcases, video integration, customer testimonial galleries, and automated order consignment routing through Steadfast Courier.",
    "features": [
      "Artistic tapestry pattern catalog showcasing signature themes and seasonal lines",
      "Product video integration and high-resolution model preview carousels",
      "Shopping cart, customer wishlist, and streamlined checkout with cash on delivery",
      "Automated Steadfast Courier shipping consignment generation and tracking links",
      "Customer verified review and rating submission system with photo uploads",
      "Admin inventory management with category, pattern, and stock level controls"
    ]
  },
  {
    "id": "ssonline",
    "title": "SS Online UK",
    "tagline": "UK Multi-Department Online Retail & Wholesale Platform",
    "category": "ecommerce",
    "category_label": "E-Commerce & Retail POS",
    "badge": "POS & INVENTORY",
    "badge_icon": "database",
    "url": "https://ssonline.co.uk/",
    "image": "assets/images/portfolio/ssonline.jpg",
    "metrics": [
      {
        "stat": "GBP (£)",
        "label": "UK Domestic Payment & Tax Processing"
      },
      {
        "stat": "Multi-Cat",
        "label": "Electronics, Home, Party & Novelty Lines"
      },
      {
        "stat": "Integrated",
        "label": "Centralized Stock Control with SS Gift Shop"
      }
    ],
    "overview": "SS Online UK is a UK-based multi-department online retail and wholesale e-commerce store with an integrated back-office stock control and POS system. It manages categorized shopping across consumer electronics, home essentials, and party novelties with automated fulfillment.",
    "problem_challenge": "Managing multiple retail storefronts with shared warehouse inventory requires real-time stock synchronization to avoid overselling on either channel.",
    "solution": "Implemented a shared multi-business inventory architecture where SS Online and sibling stores draw from a unified stock pool, processing payments in GBP with automatic tax calculation.",
    "features": [
      "Comprehensive multi-department product catalog filterable by category, price, and brand",
      "Shared inventory management with real-time stock reservation and barcode identification",
      "Secure UK payment integration supporting Stripe, credit/debit cards, and digital wallets",
      "Automated UK domestic shipping calculation and courier label preparation",
      "Wholesale bulk pricing tiers and B2B volume purchase inquiry workflows",
      "Administrative inventory dashboard with restock alerts and sales performance metrics"
    ]
  },
  {
    "id": "ssgiftshop",
    "title": "SS Gift Shop UK",
    "tagline": "Customized Gifts, Bespoke Merchandise & Party Store",
    "category": "ecommerce",
    "category_label": "E-Commerce & Retail POS",
    "badge": "POS & INVENTORY",
    "badge_icon": "database",
    "url": "https://ssgiftshop.co.uk/",
    "image": "assets/images/portfolio/ssgiftshop.jpg",
    "metrics": [
      {
        "stat": "Bespoke",
        "label": "Custom Text & Photo Personalization"
      },
      {
        "stat": "Live Sync",
        "label": "Centralized Warehouse Inventory Link"
      },
      {
        "stat": "UK Wide",
        "label": "Doorstep Delivery with Order Tracking"
      }
    ],
    "overview": "SS Gift Shop UK is a specialized UK e-commerce storefront dedicated to personalized gift items, customized novelty merchandise, and bespoke party accessories. Operating under the SS Online ecosystem, it utilizes a shared multi-business catalog and centralized order processing.",
    "problem_challenge": "Personalized merchandise requires collecting custom engraving or printing specifications from buyers without complicating checkout.",
    "solution": "Designed custom product personalization fields (custom text, photo uploads, event dates) directly on product pages that pass custom requirements to the order fulfillment ledger.",
    "features": [
      "Gift personalization tool: custom message engraving, names, and photo uploads",
      "Occasion-based product filtering: weddings, birthdays, anniversaries, and holidays",
      "Centralized warehouse stock sync with sibling stores in the SS Online ecosystem",
      "Secure checkout powered by UK payment gateways with instant email receipts",
      "Gift wrap and custom message card addition options during shopping cart flow",
      "Order status tracking pipeline from bespoke customization to Royal Mail dispatch"
    ]
  },
  {
    "id": "bdusedautoparts",
    "title": "BD Used Auto Parts (BD Junkyard)",
    "tagline": "Automotive Salvage, Used Spare Parts & Buyback Marketplace",
    "category": "ecommerce",
    "category_label": "E-Commerce & Retail POS",
    "badge": "POS & INVENTORY",
    "badge_icon": "database",
    "url": "https://bdusedautoparts.com/",
    "image": "assets/images/portfolio/bdusedautoparts.jpg",
    "metrics": [
      {
        "stat": "Vehicle Matrix",
        "label": "Search by Make, Model, Year & Engine"
      },
      {
        "stat": "Trade-In",
        "label": "Instant Salvage & Buyback Quote Engine"
      },
      {
        "stat": "PayPal",
        "label": "Secure Online Part Ordering Checkout"
      }
    ],
    "overview": "BD Used Auto Parts is a specialized automotive salvage and recycling marketplace where users can browse salvaged vehicles, search used auto parts, and request instant trade-in or pre-approval quotes. It features custom vehicle inventory filtering and vehicle buyback processing.",
    "problem_challenge": "Automotive parts require complex multi-level fitment criteria (Make, Model, Year, Trim, Engine Type). Finding correct used OEM parts is difficult without structured compatibility databases.",
    "solution": "Constructed a multi-tier automotive filtering system allowing buyers to search parts by vehicle year, make, model, and category, paired with an online car buyback appraisal module and PayPal checkout.",
    "features": [
      "Advanced vehicle fitment search: filter parts by Year, Make, Model, and Body Style",
      "Used OEM parts catalog covering engines, transmissions, headlights, and body panels",
      "Salvage vehicle buyback appraisal engine with instant quote request submission",
      "Online cart checkout with integrated PayPal payment gateway and pickup options",
      "Condition grading indicators and high-resolution photo documentation for used parts",
      "Administrative inventory management for cataloging dismantled salvage vehicles"
    ]
  },
  {
    "id": "nabarupa",
    "title": "Nabarupa Lifestyle",
    "tagline": "Heritage Traditional Ethnic Fashion & Handloom Boutique",
    "category": "ecommerce",
    "category_label": "E-Commerce & Retail POS",
    "badge": "BILLING & PAYMENT",
    "badge_icon": "credit-card",
    "url": "https://nabarupa.com/",
    "image": "assets/images/portfolio/nabarupa.jpg",
    "metrics": [
      {
        "stat": "Heritage",
        "label": "Exclusive Handloom & Ethnic Collections"
      },
      {
        "stat": "Showrooms",
        "label": "Integrated Physical Store Locator Mapping"
      },
      {
        "stat": "SSLCommerz",
        "label": "Secured Nationwide Payment Processing"
      }
    ],
    "overview": "Nabarupa is the digital retail platform for a renowned traditional fashion and lifestyle boutique brand in Bangladesh, showcasing ethnic apparel, sarees, and seasonal designer collections. The system facilitates customer browsing by collection, physical showroom mapping, and secure online checkouts.",
    "problem_challenge": "Balancing traditional artistic boutique presentation with high-performance e-commerce shopping workflows, stock management, and seamless Bangladeshi payment gateways.",
    "solution": "Engineered an ethnic fashion storefront with seasonal designer lookbooks, categorized collection navigation, showroom locator integration, and automated online checkout via SSLCommerz.",
    "features": [
      "Curated ethnic fashion catalog: Jamdani, Silk, Cotton sarees, panjabis, and shalwar kameez",
      "Seasonal designer lookbook collections with editorial lifestyle photography",
      "Interactive showroom locator mapping physical outlet addresses across major cities",
      "Real-time cart and checkout integrated with SSLCommerz gateway and cash on delivery",
      "Customer wishlist, order history, and automatic SMS order status notifications",
      "Administrative inventory controls with color, fabric type, and stock level tracking"
    ]
  },
  {
    "id": "freeworldimports",
    "title": "FreeWorldImports",
    "tagline": "Global B2B Liquidity Services & Commercial Trading Marketplace",
    "category": "ecommerce",
    "category_label": "E-Commerce & Retail POS",
    "badge": "None",
    "badge_icon": "",
    "url": "https://freeworldimports.com/",
    "image": "assets/images/portfolio/freeworldimports.jpg",
    "metrics": [
      {
        "stat": "Global Trade",
        "label": "International Commodities & Surplus Machinery"
      },
      {
        "stat": "B2B Deals",
        "label": "Structured Inquiries & Negotiation Workflows"
      },
      {
        "stat": "Multi-Sector",
        "label": "Heavy Equipment, Commercial Vehicles & Goods"
      }
    ],
    "overview": "FreeWorldImports is a global B2B eCommerce liquidity services marketplace connecting international buyers and sellers of surplus inventory, machinery, commercial vehicles, and commodities. It features multi-category product catalogs, search filtering, and secure inquiry workflows.",
    "problem_challenge": "International B2B trading deals with bulk orders, varying export regulations, and custom pricing quotations that standard retail shopping carts cannot handle.",
    "solution": "Created a commercial trade marketplace emphasizing request-for-quote (RFQ) workflows, verified international seller profiles, structured equipment specifications, and commercial inquiry management.",
    "features": [
      "Extensive B2B catalog covering surplus inventory, heavy equipment, and commercial goods",
      "Structured Request for Quote (RFQ) and trade inquiry communication workflows",
      "Multi-category filtering by industry, equipment condition, location, and price",
      "Secure buyer-seller messaging channel and international shipping assistance requests",
      "Seller listing management tool with bulk upload for commercial asset portfolios",
      "Comprehensive trade terms, commodity specifications, and certification verification"
    ]
  },
  {
    "id": "aestheticfeaturesltd",
    "title": "Aesthetic Features Ltd. (UK)",
    "tagline": "Cross-Border UK & Bangladesh Retail & Trading Marketplace",
    "category": "ecommerce",
    "category_label": "E-Commerce & Retail POS",
    "badge": "None",
    "badge_icon": "",
    "url": "https://aestheticfeaturesltd.co.uk/",
    "image": "assets/images/portfolio/aestheticfeaturesltd.jpg",
    "metrics": [
      {
        "stat": "Cross-Border",
        "label": "Bilateral UK & Bangladesh Commerce Channels"
      },
      {
        "stat": "Diverse Goods",
        "label": "Apparel, Leather Goods, Beauty & Home Decor"
      },
      {
        "stat": "Cloud Hosted",
        "label": "High-Availability Global Access"
      }
    ],
    "overview": "Aesthetic Features Ltd. is a UK-registered international retail and trading e-commerce company operating cross-border channels spanning the United Kingdom and Bangladesh. The marketplace offers diverse inventory including apparel, personal health care, genuine leather goods, and home accessories.",
    "problem_challenge": "Operating an international trading enterprise across two countries requires adaptable e-commerce catalogs that cater to diverse product lines ranging from leather goods to beauty essentials.",
    "solution": "Developed a modern multi-category commerce marketplace with international product categorization, secure shopping carts, and dynamic inventory organization.",
    "features": [
      "Multi-channel product catalog: leather bags, apparel, personal care, and home decor",
      "Cross-border brand presentation emphasizing UK quality standards and authentic sourcing",
      "Interactive shopping cart with tax calculation and international shipping options",
      "Detailed product specifications, material sourcing descriptions, and usage guides",
      "Administrative inventory management with multi-category product publishing",
      "Secure checkout flow with order tracking and email status notifications"
    ]
  },
  {
    "id": "digitalstorebd",
    "title": "Digital Store BD",
    "tagline": "Premier RO & UV Water Purification Systems Retail Platform",
    "category": "ecommerce",
    "category_label": "E-Commerce & Retail POS",
    "badge": "None",
    "badge_icon": "",
    "url": "https://digitalstorebd.net/",
    "image": "assets/images/portfolio/digitalstorebd.jpg",
    "metrics": [
      {
        "stat": "Doorstep",
        "label": "Nationwide Free Installation in Major Cities"
      },
      {
        "stat": "Genuine Parts",
        "label": "RO Membranes, UV Lamps & Filter Cartridges"
      },
      {
        "stat": "Cash on Delivery",
        "label": "Supported Nationwide across Bangladesh"
      }
    ],
    "overview": "Digital Store BD is an e-commerce platform and retail distributor in Bangladesh specializing in domestic and commercial RO/UV water purifiers, replacement filter cartridges, and spare parts. It provides customers with direct online purchasing, cash on delivery, and doorstep installation services.",
    "problem_challenge": "Water purifier consumers need clarity regarding filtration stages, water source suitability (deep tube-well vs municipal), cartridge replacement timelines, and installation support.",
    "solution": "Built a specialized e-commerce catalog clearly categorizing systems by filtration stages (5-stage, 6-stage, mineral RO), featuring filter replacement schedules and doorstep installation booking.",
    "features": [
      "Comprehensive catalog of domestic, industrial, and commercial RO/UV purifiers",
      "Replacement filter cartridges, sediment filters, RO membranes, and fitting parts catalog",
      "Nationwide cash on delivery ordering with doorstep installation service options",
      "Filter maintenance schedule guidelines and compatibility lookup for various purifier models",
      "Customer product reviews, warranty registration, and technical support hotline",
      "Admin inventory management with order dispatch and service technician scheduling"
    ]
  },
  {
    "id": "businesszonebd",
    "title": "Business Zone BD (Digital Store)",
    "tagline": "Enterprise Water Purifier Commerce & After-Sales Service Portal",
    "category": "ecommerce",
    "category_label": "E-Commerce & Retail POS",
    "badge": "None",
    "badge_icon": "",
    "url": "https://businesszonebd.com/",
    "image": "assets/images/portfolio/businesszonebd.jpg",
    "metrics": [
      {
        "stat": "End-to-End",
        "label": "E-Commerce Sales & After-Sales Servicing"
      },
      {
        "stat": "Service Booking",
        "label": "Online Purifier Relocation & Servicing"
      },
      {
        "stat": "Nationwide",
        "label": "Commercial Water Plant Consultation"
      }
    ],
    "overview": "Business Zone BD hosts the Digital Store enterprise web application, providing an end-to-end e-commerce and after-sales service portal for water purification systems. It supports catalog browsing, cart checkout, and dedicated booking workflows for purifier servicing and relocation.",
    "problem_challenge": "Water purification businesses earn long-term revenue through recurring service contracts, filter changes, and machine repairs, which traditional e-commerce platforms neglect.",
    "solution": "Delivered an enterprise portal combining a full shopping cart for new purifier units with an online service booking system for scheduled maintenance and technician visits.",
    "features": [
      "Dual-channel portal: retail product sales and scheduled water purifier repair services",
      "Dedicated online service booking workflow for purifier maintenance, cartridge changes, and relocation",
      "Commercial and industrial water treatment plant consultation inquiry submission",
      "Product catalog with stage-by-stage filtration diagrams and technical specifications",
      "Cart checkout with cash on delivery and mobile banking payment processing",
      "Admin dashboard for managing service technician appointments and customer warranty records"
    ]
  },
  {
    "id": "fcftagro",
    "title": "FCFT Agro",
    "tagline": "Agro-Industrial Commodities & Organic Farming Commerce",
    "category": "ecommerce",
    "category_label": "E-Commerce & Retail POS",
    "badge": "BILLING & PAYMENT",
    "badge_icon": "credit-card",
    "url": "https://fcftagro.com/",
    "image": "assets/images/portfolio/fcftagro.jpg",
    "metrics": [
      {
        "stat": "Farm-to-Table",
        "label": "Direct Agricultural Produce Supply Chain"
      },
      {
        "stat": "Geo-Delivery",
        "label": "District & Upazila Level Logistics Routing"
      },
      {
        "stat": "SSLCommerz",
        "label": "Integrated Online Payments & Invoicing"
      }
    ],
    "overview": "FCFT Agro is an agricultural e-commerce platform and agro-commodity supply portal connecting farmers and consumers with fresh agricultural produce, seeds, and agro-inputs. It includes interactive cart management, geo-targeted delivery routing, and online SSLCommerz checkout.",
    "problem_challenge": "Perishable agricultural produce and organic farming products demand precise delivery location routing and reliable payment confirmation to avoid order cancellations.",
    "solution": "Engineered a geo-targeted agro-commerce platform with district/upazila address selection, delivery fee calculation, automated invoice generation, and SSLCommerz payment integration.",
    "features": [
      "Agricultural produce catalog: organic grains, seasonal fruits, dairy, and farming seeds",
      "Geo-targeted delivery routing with localized district and upazila fee calculations",
      "Shopping cart, customer order dashboard, and instant PDF invoice generation",
      "Secure online payments via SSLCommerz supporting credit cards and mobile financial services",
      "Bulk wholesale agro-commodity purchasing inquiries for commercial food distributors",
      "Administrative inventory management with harvest batch dates and perishable stock alerts"
    ]
  },
  {
    "id": "heavenslight",
    "title": "Heavens Light",
    "tagline": "Architectural & Decorative Residential Lighting E-Commerce",
    "category": "ecommerce",
    "category_label": "E-Commerce & Retail POS",
    "badge": "BILLING & PAYMENT",
    "badge_icon": "credit-card",
    "url": "https://heavenslight.com.bd/",
    "image": "assets/images/portfolio/heavenslight.jpg",
    "metrics": [
      {
        "stat": "Designer Fixtures",
        "label": "Chandeliers, Pendant & Architectural Lights"
      },
      {
        "stat": "Instant IPN",
        "label": "Automated SSLCommerz Payment Webhooks"
      },
      {
        "stat": "Safe Dispatch",
        "label": "Automated Fragile Courier Shipping Coordination"
      }
    ],
    "overview": "Heavens Light is an e-commerce storefront specializing in modern architectural and residential lighting fixtures, decorative chandeliers, and electrical appliances. It offers multi-tier category filtering, user wishlists, automated shipping coordination, and secure payment processing via SSLCommerz.",
    "problem_challenge": "Lighting products feature multiple specifications (wattage, color temperature, fixture dimensions) and require careful shipping coordination for fragile glass/crystal materials.",
    "solution": "Built a visual lighting storefront with technical lighting specifications (warm white, cool daylight, lumens), customer wishlists, and automated SSLCommerz payments with instant IPN notifications.",
    "features": [
      "Designer lighting catalog: crystal chandeliers, modern pendants, wall sconces, and track lights",
      "Multi-criteria filtering by fixture finish (gold, black, crystal), wattage, and color temperature",
      "Secure online payment gateway via SSLCommerz with automated IPN transaction confirmation",
      "Customer wishlist, cart management, and courier delivery tracking coordination",
      "Interior design consultation request submission for commercial and residential lighting projects",
      "Admin inventory management with stock tracking and fragile item delivery notes"
    ]
  },
  {
    "id": "danagrpbd",
    "title": "Dana Group",
    "tagline": "Multi-Disciplinary Industrial & Manufacturing Conglomerate",
    "category": "corporate",
    "category_label": "Corporate & Healthcare",
    "badge": "None",
    "badge_icon": "",
    "url": "https://www.danagrpbd.com/",
    "image": "assets/images/portfolio/danagrpbd.jpg",
    "metrics": [
      {
        "stat": "Est. 1967",
        "label": "Over 5 Decades of Industrial Excellence"
      },
      {
        "stat": "Multi-Sector",
        "label": "Manufacturing, Trading, Engineering & Energy"
      },
      {
        "stat": "Global Reach",
        "label": "International Joint Ventures & Export Partners"
      }
    ],
    "overview": "Dana Group is the corporate web portal for a premier industrial conglomerate in Bangladesh established in 1967, operating across manufacturing, engineering, and international trading. It showcases corporate milestones, executive leadership profiles, subsidiary concerns, and comprehensive technical service catalogs.",
    "problem_challenge": "A large multi-sector conglomerate needs a unified corporate presence that represents diverse business operations while upholding institutional prestige and investor trust.",
    "solution": "Architected a responsive corporate portal highlighting Dana Group's rich five-decade heritage, subsidiary business divisions, corporate social responsibility, and international certifications.",
    "features": [
      "Comprehensive corporate portfolio showcasing manufacturing, energy, and engineering subsidiaries",
      "Historical timeline detailing corporate milestones and achievements from 1967 to present",
      "Executive leadership board and management governance profiles",
      "Corporate CSR initiatives, sustainability practices, and industrial safety compliance",
      "Centralized corporate contact gateway routing business inquiries to appropriate division managers",
      "News announcements, media coverage, and career opportunity listings"
    ]
  },
  {
    "id": "peoplesceramic",
    "title": "Peoples Ceramic Industries Ltd.",
    "tagline": "Premier Porcelain & Ceramic Tableware Manufacturer & Exporter",
    "category": "corporate",
    "category_label": "Corporate & Healthcare",
    "badge": "None",
    "badge_icon": "",
    "url": "https://peoplesceramic.com/",
    "image": "assets/images/portfolio/peoplesceramic.jpg",
    "metrics": [
      {
        "stat": "Global Export",
        "label": "Exporting Tableware to Europe, USA & Middle East"
      },
      {
        "stat": "100+ Patterns",
        "label": "Classic & Contemporary Dinnerware Shapes"
      },
      {
        "stat": "ISO Certified",
        "label": "High-Standard Factory Production Standards"
      }
    ],
    "overview": "Peoples Ceramic Industries Ltd. is the digital catalog and corporate presence for one of Bangladesh's leading porcelain and ceramic tableware manufacturers and exporters. It showcases factory production capabilities, dining patterns, shapes, and export certifications, paired with an institutional purchase inquiry system.",
    "problem_challenge": "International buyers, hotel chains, and retail distributors need to browse hundreds of tableware shapes, decal decorations, and gold/platinum rim designs with accurate technical specifications.",
    "solution": "Built a digital porcelain catalog with high-resolution pattern galleries, dinner set composition charts, factory capacity overviews, and structured export inquiry workflows.",
    "features": [
      "Extensive porcelain tableware catalog: dinner sets, tea sets, coffee sets, and hotelware",
      "Interactive shape and decal gallery with high-resolution pattern zoom and detailing",
      "Factory manufacturing facility overview: kilns, automated forming, and quality assurance labs",
      "International export credentials, compliance certifications, and global trade partnerships",
      "Institutional purchase and wholesale inquiry form routing directly to international sales teams",
      "Company history, corporate leadership, and domestic retail distribution network details"
    ]
  },
  {
    "id": "aquapaints",
    "title": "Aqua Paints (দেশের রঙে রাঙাই দেশ)",
    "tagline": "Industrial & Architectural Coating Manufacturer Portal",
    "category": "corporate",
    "category_label": "Corporate & Healthcare",
    "badge": "None",
    "badge_icon": "",
    "url": "https://www.aquapaints.com/",
    "image": "assets/images/portfolio/aquapaints.jpg",
    "metrics": [
      {
        "stat": "Full Range",
        "label": "Decorative, Industrial, Wood & Marine Coatings"
      },
      {
        "stat": "Color Guide",
        "label": "Interactive Color Shades & Shade Card Visualizer"
      },
      {
        "stat": "Dealer Hub",
        "label": "Nationwide Dealer Enlistment & Support Network"
      }
    ],
    "overview": "Aqua Paints is the official corporate web presence and product catalog portal for one of Bangladesh's premier industrial and architectural paint manufacturers. It showcases extensive coating solutions, corporate certifications, dealer enlistment portals, and interactive product color shade guides.",
    "problem_challenge": "Paint manufacturers need to communicate complex surface preparation guidelines, technical coverage rates, and color choices to both residential homeowners and industrial contractors.",
    "solution": "Designed a dynamic paint manufacturing portal featuring interactive color shade exploration, technical data sheets (TDS), dealer network directories, and contractor application guides.",
    "features": [
      "Comprehensive coating catalog: interior/exterior emulsions, enamels, primers, and industrial marine paints",
      "Interactive color shade visualizer and downloadable electronic shade cards",
      "Technical Data Sheets (TDS) and surface preparation instructions for builders and painters",
      "Nationwide dealer enlistment application workflow and retail outlet locator",
      "Paint coverage calculator helping customers estimate liters needed based on wall square footage",
      "Corporate profile, factory manufacturing technology, and environmental safety standards"
    ]
  },
  {
    "id": "welcoeng",
    "title": "Welco Engineering Ltd.",
    "tagline": "Industrial Heavy Engineering & Power Energy Solutions",
    "category": "corporate",
    "category_label": "Corporate & Healthcare",
    "badge": "None",
    "badge_icon": "",
    "url": "https://welcoeng.com/",
    "image": "assets/images/portfolio/welcoeng.jpg",
    "metrics": [
      {
        "stat": "Power Plants",
        "label": "Gas & Diesel Generator Overhaul Solutions"
      },
      {
        "stat": "Engineering",
        "label": "Industrial Gas Compressor & Turbine Support"
      },
      {
        "stat": "24/7 Service",
        "label": "Emergency Field Engineering Response"
      }
    ],
    "overview": "Welco Engineering Ltd. is a corporate web portal for an industrial engineering and energy solutions provider in Bangladesh specializing in gas generator overhaul, power supply, and spare parts. It highlights engineering capabilities, industrial machinery catalogs, project showcases, and corporate client testimonials.",
    "problem_challenge": "Heavy engineering enterprises require a professional technical platform demonstrating mechanical expertise, machinery repair track records, and rapid service availability for factories.",
    "solution": "Constructed an industrial engineering portal showcasing completed generator overhauls, mechanical retrofitting projects, genuine spare parts catalogs, and direct emergency service request forms.",
    "features": [
      "Industrial services portfolio: gas generator overhaul, commissioning, and maintenance",
      "Genuine industrial spare parts catalog for MWM, Caterpillar, Jenbacher, and Cummins engines",
      "Completed engineering project case studies with technical specifications and client testimonials",
      "Emergency industrial maintenance and service engineer dispatch inquiry form",
      "Company certifications, safety protocols, and mechanical workshop infrastructure overview",
      "Client portfolio highlighting leading textile mills, pharmaceutical plants, and industrial estates"
    ]
  },
  {
    "id": "btc",
    "title": "Biswas Trading & Construction (BTC)",
    "tagline": "Civil Engineering, Infrastructure Design & Construction",
    "category": "corporate",
    "category_label": "Corporate & Healthcare",
    "badge": "None",
    "badge_icon": "",
    "url": "https://btc.com.bd/",
    "image": "assets/images/portfolio/btc.jpg",
    "metrics": [
      {
        "stat": "Infrastructure",
        "label": "Bridges, Highways, Commercial Buildings & Works"
      },
      {
        "stat": "Decades of Trust",
        "label": "Proven Track Record in National Contracting"
      },
      {
        "stat": "Turnkey",
        "label": "Complete Architectural, Structural & EPC Solutions"
      }
    ],
    "overview": "Biswas Trading & Construction (BTC) is the official corporate website for an established civil engineering, architectural design, and infrastructure construction enterprise in Bangladesh. It presents extensive portfolios of completed engineering projects, structural architecture profiles, and national industry achievements.",
    "problem_challenge": "Civil contracting companies need to demonstrate massive infrastructure execution capability to government agencies and private developers with high-resolution project visual archives.",
    "solution": "Delivered an infrastructure corporate portal featuring ongoing and completed project portfolios, heavy equipment fleets, engineering credentials, and tender inquiry gateways.",
    "features": [
      "Infrastructure portfolio categorizing bridges, commercial towers, institutional buildings, and roads",
      "Completed project profiles with architectural photography, structural details, and clients",
      "Heavy construction equipment fleet and modern engineering machinery showcase",
      "Corporate credentials: civil engineering licenses, government contractor certifications, and awards",
      "Tender and private developer partnership inquiry submission gateway",
      "Board of directors, engineering leadership team, and safety compliance policies"
    ]
  },
  {
    "id": "shebaholdings",
    "title": "Sheba Holdings Limited",
    "tagline": "Premium Real Estate Development & AI-Assisted Property Search",
    "category": "corporate",
    "category_label": "Corporate & Healthcare",
    "badge": "None",
    "badge_icon": "",
    "url": "https://shebaholdings.com/",
    "image": "assets/images/portfolio/shebaholdings.jpg",
    "metrics": [
      {
        "stat": "Luxury Living",
        "label": "Exclusive Residential & Commercial Towers"
      },
      {
        "stat": "BotMan AI",
        "label": "Interactive AI-Driven Property Inquiry Chatbot"
      },
      {
        "stat": "Dynamic Status",
        "label": "Real-time Ongoing, Upcoming & Handed-over Filter"
      }
    ],
    "overview": "Sheba Holdings Limited is the corporate web platform for a real estate and property development firm managing premium residential and commercial construction ventures. It provides dynamic property search filters by ongoing, upcoming, and handed-over statuses, along with an interactive BotMan AI chatbot.",
    "problem_challenge": "Property seekers want rapid access to floor plans, unit square footages, location benefits, and immediate answers to pricing and installment queries without waiting for office hours.",
    "solution": "Engineered a real estate portal with multi-criteria property filtering, architectural 3D rendering galleries, downloadable project brochures, and an interactive BotMan conversational chatbot.",
    "features": [
      "Dynamic property search filterable by status (Ongoing, Upcoming, Ready), location, and type",
      "Project detail pages featuring architectural floor plans, amenity lists, and location maps",
      "Interactive AI-driven BotMan chatbot assisting visitors with instant inquiries and appointment scheduling",
      "Landowner partnership proposal submission workflow for joint venture property development",
      "Apartment booking request and customer installment payment schedule information",
      "Corporate background, construction quality standards, and handover celebration archives"
    ]
  },
  {
    "id": "bangladeship",
    "title": "Bangladesh IP (BangladeshIP Global)",
    "tagline": "Intellectual Property, Trademark & Patent Legal Consultancy",
    "category": "corporate",
    "category_label": "Corporate & Healthcare",
    "badge": "None",
    "badge_icon": "",
    "url": "https://www.bangladeship.com/",
    "image": "assets/images/portfolio/bangladeship.jpg",
    "metrics": [
      {
        "stat": "Global IP",
        "label": "Trademarks, Patents, Industrial Designs & Copyright"
      },
      {
        "stat": "Fast Knowledge",
        "label": "Ghost CMS Powered Legal Gazette Knowledgebase"
      },
      {
        "stat": "Worldwide",
        "label": "International Filing Directories & Guidance"
      }
    ],
    "overview": "Bangladesh IP is a specialized global intellectual property consultancy and digital knowledge platform guiding businesses through trademark, patent, and copyright registrations in Bangladesh and worldwide. It features country IP search tools, legal filing directories, and official gazette publications.",
    "problem_challenge": "Intellectual property law is complex, with varying jurisdictional filing requirements, trademark classifications, opposition deadlines, and patent prosecution steps.",
    "solution": "Built a clean, high-performance legal knowledgebase powered by Ghost CMS on Node.js, providing searchable IP filing guides, Nice classification references, and direct legal consultation channels.",
    "features": [
      "Comprehensive guide to trademark registration, patent prosecution, and copyright protection in Bangladesh",
      "Searchable global IP knowledge base covering international filing treaties and Nice classifications",
      "Regularly published legal insights, trademark opposition updates, and official gazette alerts",
      "Direct legal consultation and trademark search requisition form for local and foreign enterprises",
      "High-speed content delivery via Node.js and Fastly CDN caching for international clients",
      "Attorney credentials, IP prosecution milestones, and international associate networks"
    ]
  },
  {
    "id": "dailyasianmirror",
    "title": "The Daily Asian Mirror (এশিয়ান মিরর)",
    "tagline": "High-Traffic Digital News Portal & Content Management System",
    "category": "corporate",
    "category_label": "Corporate & Healthcare",
    "badge": "None",
    "badge_icon": "",
    "url": "https://dailyasianmirror.com/",
    "image": "assets/images/portfolio/dailyasianmirror.jpg",
    "metrics": [
      {
        "stat": "Real-Time",
        "label": "Instant Breaking News & Editorial Publishing"
      },
      {
        "stat": "Multimedia",
        "label": "Video News, Photo Galleries & e-Paper Viewer"
      },
      {
        "stat": "Optimized",
        "label": "Vue.js & Laravel Architecture for Peak Traffic"
      }
    ],
    "overview": "The Daily Asian Mirror is an online news publication and digital media portal delivering real-time national and international news, multimedia stories, and editorial columns. It features a complete content management system with automated category routing, contributor management, and an integrated e-paper viewer.",
    "problem_challenge": "Online media portals face massive traffic spikes during breaking news events, demanding lightweight responsive layouts, fast article caching, and seamless ad placement management.",
    "solution": "Built with Laravel and Vue.js for high-speed article delivery, supporting breaking news tickers, automated category routing, reporter role management, and an interactive e-paper reading experience.",
    "features": [
      "Dynamic news categories: Politics, National, International, Business, Sports, and Technology",
      "Real-time breaking news ticker and prominent headline story curation engine",
      "Multimedia story hub with integrated YouTube video news and photo journalism galleries",
      "Digital e-Paper viewer allowing readers to browse the print newspaper edition online",
      "Editorial content management system with journalist contribution and sub-editor approval workflows",
      "Ad banner placement management system optimized for high-traffic monetization"
    ]
  },
  {
    "id": "softtechsolutions",
    "title": "Softtech Solution",
    "tagline": "Custom Enterprise Software, Retail POS & Cloud Consulting",
    "category": "saas",
    "category_label": "SaaS & Smart Apps",
    "badge": "POS & INVENTORY",
    "badge_icon": "database",
    "url": "https://softtechsolutions.net/",
    "image": "assets/images/portfolio/softtechsolutions.jpg",
    "metrics": [
      {
        "stat": "Software Hub",
        "label": "Proprietary POS & ERP Products for SMBs"
      },
      {
        "stat": "Live Demos",
        "label": "Online Product Demo & Feature Presentation"
      },
      {
        "stat": "Consultation",
        "label": "Custom Software Architecture & Automation"
      }
    ],
    "overview": "Softtech Solution is a corporate and software solutions platform showcasing proprietary point-of-sale and business management software for retail and wholesale businesses. It offers product consultation booking, demo requests, and feature presentations for POS and inventory management workflows.",
    "problem_challenge": "Software solution providers need a credible, conversion-focused corporate presence demonstrating software capability, live feature walk-throughs, and simple demo scheduling for prospective clients.",
    "solution": "Crafted a clean technology corporate website presenting modular POS solutions, wholesale billing software, and custom business automation services with straightforward demo request pipelines.",
    "features": [
      "Showcase of proprietary point-of-sale and retail inventory software solutions",
      "Interactive product demo request and business consultation scheduling form",
      "Breakdown of core software modules: barcode billing, VAT invoices, stock ledger, and reports",
      "Customer case studies and retail client portfolio across various commerce sectors",
      "Client technical support portal and software maintenance service descriptions",
      "Custom web and desktop software engineering services for unique enterprise requirements"
    ]
  },
  {
    "id": "sasapplication",
    "title": "SasApplication",
    "tagline": "Cloud Business Applications & Subscription Management Hub",
    "category": "saas",
    "category_label": "SaaS & Smart Apps",
    "badge": "BILLING & PAYMENT",
    "badge_icon": "credit-card",
    "url": "https://sasapplication.com/",
    "image": "assets/images/portfolio/sasapplication.jpg",
    "metrics": [
      {
        "stat": "Multi-Product",
        "label": "Centralized Suite: CashBox, Softacademia & More"
      },
      {
        "stat": "SaaS Billing",
        "label": "Subscription Tier Licensing & Automated Invoicing"
      },
      {
        "stat": "Cloud Hosted",
        "label": "Scalable Multi-Tenant Architecture"
      }
    ],
    "overview": "SasApplication is a cloud-based software subscription hub offering a centralized ecosystem of business and industry solutions including CashBox, Softacademia, and SmartCare. It manages client software provisioning, license distribution, tier-based billing, and recurring SaaS subscriptions.",
    "problem_challenge": "Managing multiple independent software products requires unified user accounts, license key distribution, recurring subscription tracking, and transparent plan comparisons.",
    "solution": "Delivered a centralized SaaS portal coordinating product provisioning, subscription plan upgrades, automated monthly/annual billing, and centralized user account authentication.",
    "features": [
      "Unified software hub showcasing CashBox POS, Softacademia school ERP, and SmartCare solutions",
      "Tier-based subscription management with monthly, quarterly, and annual licensing plans",
      "Client provisioning portal with instant automated license key generation upon payment",
      "Recurring billing reminders, digital invoice history, and automated receipt delivery",
      "Centralized customer support ticket system for multi-product assistance",
      "Administrative management of tenant deployments, subscription renewals, and churn analytics"
    ]
  },
  {
    "id": "yourtreasureseeker",
    "title": "Your Treasure Seeker",
    "tagline": "Global Lost & Found Valuable Recovery Directory & Network",
    "category": "saas",
    "category_label": "SaaS & Smart Apps",
    "badge": "None",
    "badge_icon": "",
    "url": "https://www.yourtreasureseeker.com/",
    "image": "assets/images/portfolio/yourtreasureseeker.jpg",
    "metrics": [
      {
        "stat": "Worldwide",
        "label": "Global Directory of Metal Detecting Specialists"
      },
      {
        "stat": "Fast Recovery",
        "label": "Connects Lost Rings & Valuables with Searchers"
      },
      {
        "stat": "Verified",
        "label": "Member Profiles, Gear Specs & Recovery Successes"
      }
    ],
    "overview": "Your Treasure Seeker is a specialized worldwide directory and service platform connecting individuals who lost valuables with professional metal detecting specialists. It facilitates locating and hiring recovery experts near user locations and enables certified detectorists to register profiles globally.",
    "problem_challenge": "When people lose precious items like wedding rings, jewelry, or keys in parks, beaches, or water, they lack access to local specialists equipped with high-end metal detectors.",
    "solution": "Architected a global recovery community directory where individuals submit lost item reports with geolocation coordinates, allowing certified local metal detectorists to respond and coordinate recovery missions.",
    "features": [
      "Global directory of professional metal detecting specialists searchable by country, state, and city",
      "Lost item reporting module: submit lost location maps, item descriptions, and reward offers",
      "Detectorist membership onboarding with equipment specifications and verification credentials",
      "Direct secure inquiry channel connecting loss victims with local recovery searchers",
      "Treasure recovery success stories gallery documenting retrieved rings and historical finds",
      "Community knowledge base covering search techniques, beach permission laws, and detector reviews"
    ]
  },
  {
    "id": "youthins",
    "title": "Youth Insurance",
    "tagline": "Modern InsurTech Platform & Digital Policy Comparison",
    "category": "fintech",
    "category_label": "FinTech & Billing",
    "badge": "BILLING & PAYMENT",
    "badge_icon": "credit-card",
    "url": "https://www.youthins.com/",
    "image": "assets/images/portfolio/youthins.jpg",
    "metrics": [
      {
        "stat": "Multi-Policy",
        "label": "Life, Health, Motor & Marine Insurance"
      },
      {
        "stat": "Transparent",
        "label": "Instant Premium Calculations & Comparisons"
      },
      {
        "stat": "Claim Assist",
        "label": "Digital Claims Assistance & Guidance"
      }
    ],
    "overview": "Youth Insurance is a modern InsurTech portal and insurance services platform providing digital policy comparisons, insurance claims assistance, and quote requests for life, health, motor, and business insurance policies in Bangladesh.",
    "problem_challenge": "Insurance in emerging markets suffers from confusing policy terms, lack of transparent premium comparisons, and complex paper-heavy claim submission processes.",
    "solution": "Built a clean InsurTech platform simplifying policy discovery, featuring interactive premium estimation calculators, transparent benefit matrices, and digital claims guidance.",
    "features": [
      "Comprehensive policy coverage: Life insurance, health coverage, motor car insurance, and marine cargo",
      "Interactive insurance premium estimation calculator based on age, coverage term, and sum assured",
      "Online policy quotation request form with rapid agent follow-up dispatch",
      "Step-by-step insurance claims assistance guide with downloadable claim documentation",
      "Educational InsurTech articles helping young professionals plan life savings and health security",
      "Corporate group insurance consultation for business employees and organizational fleets"
    ]
  },
  {
    "id": "summerfield",
    "title": "Summerfield International School",
    "tagline": "British Curriculum International School Academic Web Portal",
    "category": "corporate",
    "category_label": "Corporate & Healthcare",
    "badge": "None",
    "badge_icon": "",
    "url": "https://summerfield.edu.bd/",
    "image": "assets/images/portfolio/summerfield.jpg",
    "metrics": [
      {
        "stat": "Cambridge",
        "label": "Accredited O-Level & A-Level Curriculum"
      },
      {
        "stat": "Online Admissions",
        "label": "Digital Application & Entrance Assessment"
      },
      {
        "stat": "Campus Life",
        "label": "Academic Notices, Clubs & Event Calendars"
      }
    ],
    "overview": "Summerfield International School is the official academic web portal for a premier English-medium educational institution in Bangladesh. It provides prospective and enrolled students with academic curriculums, online pre-admission processing, Cambridge examination venue schedules, and institutional announcements.",
    "problem_challenge": "Modern international schools require an interactive digital hub keeping parents informed of academic calendars, exam schedules, and admissions without requiring constant physical campus visits.",
    "solution": "Developed an academic portal showcasing the Cambridge curriculum from kindergarten to A-Levels, featuring online student admission applications, event galleries, and circular notices.",
    "features": [
      "Comprehensive academic curriculum overviews from early years through Cambridge O & A Levels",
      "Online student admission application form with document upload and assessment booking",
      "Academic calendar, term dates, examination timetables, and official holiday schedules",
      "Co-curricular activity showcase: sports tournaments, science fairs, arts, and debate club",
      "Noticeboard circulars for parents with automated downloadable PDF announcements",
      "Campus facility photo galleries: science laboratories, computer suites, and libraries"
    ]
  },
  {
    "id": "njahanlaw",
    "title": "N. Jahan LPC (Canada)",
    "tagline": "Canadian Immigration, Real Estate & Corporate Law Practice",
    "category": "corporate",
    "category_label": "Corporate & Healthcare",
    "badge": "None",
    "badge_icon": "",
    "url": "https://njahanlaw.ca/",
    "image": "assets/images/portfolio/njahanlaw.jpg",
    "metrics": [
      {
        "stat": "Ontario Bar",
        "label": "Licensed Barrister, Solicitor & Notary Public"
      },
      {
        "stat": "Practice Areas",
        "label": "Immigration, Real Estate, Corporate & Civil"
      },
      {
        "stat": "Confidential",
        "label": "Encrypted Legal Consultation Booking"
      }
    ],
    "overview": "N. Jahan LPC is the official corporate website for an Ontario-based Canadian immigration, real estate, civil litigation, and corporate legal practice firm. It provides detailed legal practice areas, attorney credentials, legal consultation scheduling, and secure communication channels for clients.",
    "problem_challenge": "Legal practices require an authoritative digital presence conveying professional trust, clear regulatory licensing in Ontario, and confidential consultation scheduling.",
    "solution": "Constructed an attorney web portal emphasizing legal credentials, detailed service breakdowns for immigration and real estate closings, and encrypted contact consultation forms.",
    "features": [
      "Practice area profiles: Canadian Express Entry, Provincial Nominees, Real Estate, and Civil Law",
      "Attorney credentials, professional licensing with the Law Society of Ontario, and bio",
      "Confidential legal consultation booking form with case description submission",
      "Real estate closing service overview: residential/commercial purchase, sale, and refinances",
      "Corporate legal services: business incorporation, partnership agreements, and contracts",
      "Office location mapping in Ontario, phone contacts, and client intake communication channels"
    ]
  },
  {
    "id": "84eventgroup",
    "title": "84 Event Group (৮৪ ইভেন্ট গ্রুপ সংস্থা)",
    "tagline": "Non-Profit Alumni Welfare Organization & Community Outreach",
    "category": "corporate",
    "category_label": "Corporate & Healthcare",
    "badge": "None",
    "badge_icon": "",
    "url": "https://84eventgroup.org/",
    "image": "assets/images/portfolio/84eventgroup.jpg",
    "metrics": [
      {
        "stat": "Welfare Hub",
        "label": "Community Charity & Humanitarian Relief Work"
      },
      {
        "stat": "Directory",
        "label": "Online Member Directory & Registration Portal"
      },
      {
        "stat": "Events",
        "label": "Annual Social Gatherings & Philanthropic Drives"
      }
    ],
    "overview": "84 Event Group is a non-profit community and alumni welfare organization platform in Bangladesh dedicated to social services, humanitarian aid, and community cohesion. It provides an online member directory and registration portal, event schedule publications, and community outreach programs.",
    "problem_challenge": "Philanthropic alumni welfare organizations need transparent channels to document charitable relief drives, manage member registries, and organize community reunions.",
    "solution": "Delivered an organizational portal featuring membership registration, charitable project photo archives, annual event calendars, and donation transparency announcements.",
    "features": [
      "Online membership registration portal for community members and alumni associates",
      "Charitable welfare program documentation: flood relief, winter blanket distribution, and education aid",
      "Upcoming event schedule publications, reunion notices, and general meeting agendas",
      "Executive committee directory with leadership contact profiles and governance bylaws",
      "Photo and video archive galleries of past philanthropic missions and social gatherings",
      "Transparent organizational announcements, financial audit updates, and donation information"
    ]
  }
];
