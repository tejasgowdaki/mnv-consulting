(function () {
  var pageKey = window.__SEO_PAGE;
  if (!pageKey) return;

  var SITE = "https://mnvconsulting.com";
  var ORG_ID = SITE + "/#organization";
  var WEB_ID = SITE + "/#website";

  var LOC_PHRASE =
    "Mysuru, Mysore, Bengaluru, Bangalore, Karnataka, Hubballi Dharwad, Mangaluru, Mangalore, Belagavi, Kalaburagi, Shivamogga, Tumakuru, Davanagere, Ballari, Vijayapura, Raichur, Hassan, Udupi, Chitradurga, Bidar, Kolar, Mandya, India";

  var CORE_KW =
    "chartered accountant, CA firm, tax consultant, GST consultant, income tax filing, ITR, company registration, LLP registration, ROC filing, statutory audit, tax audit, bookkeeping, payroll, PF ESI, virtual CFO, company secretary, trademark, FSSAI, trade license";

  var services = [
    {
      slug: "accounting",
      name: "Accounting and Bookkeeping Services",
      description:
        "Bookkeeping, ledgers, reconciliations, financial statements and MIS aligned with Indian accounting and tax record rules.",
      keywords:
        "accounting services Mysuru (Mysore), bookkeeping Bengaluru (Bangalore), books of accounts Section 44AA, GST Section 35 records, Companies Act books, LLP accounts, journal ledger, trial balance, P&L, balance sheet, Karnataka, India"
    },
    {
      slug: "audit",
      name: "Audit and Assurance Services",
      description:
        "Statutory audit, internal audit and tax audit support under Indian company and income tax laws.",
      keywords:
        "statutory audit Karnataka, tax audit 44AB, internal audit Bengaluru (Bangalore), audit firm Mysuru (Mysore), SA standards, Companies Act audit, assurance services India"
    },
    {
      slug: "incorporation",
      name: "Company and LLP Incorporation Services",
      description:
        "Private limited, OPC, public company and LLP incorporation including MCA filings, DSC, DIN and post-incorporation compliance.",
      keywords:
        "company registration Bengaluru (Bangalore), LLP registration Mysuru (Mysore), ROC filing, SPICe+, MOA AOA, startup incorporation Karnataka, MCA India"
    },
    {
      slug: "virtual-cfo",
      name: "Virtual CFO Services",
      description:
        "Part-time CFO support: budgets, MIS, investor decks, compliance coordination and financial strategy for growing businesses.",
      keywords:
        "virtual CFO Mysuru, virtual CFO Bengaluru (Bangalore), SME CFO Karnataka, financial planning India, MIS reporting, fundraising support"
    },
    {
      slug: "gst-review",
      name: "GST Review Services",
      description:
        "GST health checks: returns, ITC, reconciliations, invoicing and risk review under CGST/SGST/IGST.",
      keywords:
        "GST review Bengaluru (Bangalore), GST health check Mysuru (Mysore), GSTR reconciliation, ITC review, GST compliance audit Karnataka, India"
    },
    {
      slug: "gst-compliance",
      name: "GST Regular Compliance Services",
      description:
        "GST registration, GSTR-1, GSTR-3B, annual returns, litigation support and ongoing GST advisory.",
      keywords:
        "GST return filing Bengaluru (Bangalore), GSTR-1 GSTR-3B Mysuru (Mysore), GST registration Karnataka, GST litigation India, RCM compliance"
    },
    {
      slug: "income-tax",
      name: "Income Tax Services",
      description:
        "ITR filing, tax audit, advance tax, TDS reconciliation, notices and income tax advisory.",
      keywords:
        "income tax return filing Mysuru (Mysore), ITR Bengaluru (Bangalore), tax audit 44AB, income tax consultant Karnataka, NRI tax India"
    },
    {
      slug: "payroll",
      name: "Payroll and Labour Compliance Services",
      description:
        "Payroll processing, PF, ESI, gratuity, bonus, registers and labour law filings.",
      keywords:
        "payroll outsourcing Bengaluru (Bangalore), PF ESI compliance Mysuru (Mysore), labour law compliance Karnataka, payroll services India"
    },
    {
      slug: "secretarial",
      name: "Company Secretarial Services",
      description:
        "ROC filings, board and AGM support, MGT-7, AOC-4, director changes and corporate governance.",
      keywords:
        "company secretary services Bengaluru (Bangalore), ROC compliance Mysuru (Mysore), MGT-7 AOC-4, board resolutions Karnataka, MCA secretarial India"
    },
    {
      slug: "allied",
      name: "Allied Services",
      description:
        "Trademark, patent, copyright, trade licence, FSSAI and labour licence support.",
      keywords:
        "trademark registration Mysuru (Mysore), FSSAI license Bengaluru (Bangalore), trade license Karnataka, patent copyright India, allied compliance"
    }
  ];

  function metaName(name, content) {
    var el = document.createElement("meta");
    el.setAttribute("name", name);
    el.setAttribute("content", content);
    document.head.appendChild(el);
  }

  function metaProp(property, content) {
    var el = document.createElement("meta");
    el.setAttribute("property", property);
    el.setAttribute("content", content);
    document.head.appendChild(el);
  }

  function addJsonLd(data) {
    var el = document.createElement("script");
    el.setAttribute("type", "application/ld+json");
    el.textContent = JSON.stringify(data);
    document.head.appendChild(el);
  }

  function organizationNode() {
    return {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "MnV Consulting LLP",
      url: SITE,
      email: "info@mnvconsulting.com",
      telephone: "+91-79759-47036",
      areaServed: [
        { "@type": "City", name: "Mysuru (Mysore)" },
        { "@type": "City", name: "Bengaluru (Bangalore)" },
        { "@type": "AdministrativeArea", name: "Karnataka" },
        { "@type": "Country", name: "India" }
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "MnV Consulting LLP professional services",
        itemListElement: services.map(function (s) {
          return {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.name,
              description: s.description,
              url: SITE + "/services.html#" + s.slug
            }
          };
        })
      }
    };
  }

  function itemListNode() {
    return {
      "@type": "ItemList",
      "@id": SITE + "/services.html#service-list",
      name: "MnV Consulting LLP service catalogue",
      numberOfItems: services.length,
      itemListElement: services.map(function (s, i) {
        return {
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Service",
            "@id": SITE + "/services.html#" + s.slug,
            name: s.name,
            description: s.description,
            provider: { "@id": ORG_ID },
            areaServed: ["Mysuru (Mysore)", "Bengaluru (Bangalore)", "Karnataka", "India"]
          }
        };
      })
    };
  }

  var pages = {
    index: {
      path: "/",
      title:
        "MnV Consulting LLP | Accounting, Tax, GST & Compliance — Mysuru, Bengaluru, Karnataka, India",
      description:
        "MnV Consulting LLP offers accounting, GST, income tax, audit, company and LLP incorporation, payroll, company secretarial and allied services for businesses in Mysuru (Mysore), Bengaluru (Bangalore), across Karnataka and pan-India.",
      keywords: LOC_PHRASE + ", " + CORE_KW + ", " + services.map(function (s) { return s.keywords; }).join(", ")
    },
    services: {
      path: "/services.html",
      title:
        "Services | MnV Consulting LLP — Accounting, GST, Tax, Audit — Mysuru, Bengaluru & Karnataka",
      description:
        "Full list of MnV Consulting LLP services: accounting, audit, incorporation, virtual CFO, GST review and compliance, income tax, payroll, secretarial and allied services — serving Mysuru (Mysore), Bengaluru (Bangalore) and all Karnataka, India.",
      keywords:
        LOC_PHRASE +
        ", " +
        CORE_KW +
        ", service catalogue, professional services Karnataka, " +
        services.map(function (s) { return s.name; }).join(", ")
    },
    about: {
      path: "/about-us.html",
      title: "About Us | MnV Consulting LLP — Professional Firm Karnataka & India",
      description:
        "Learn about MnV Consulting LLP: CA, cost accountants, company secretaries and advocates delivering accounting, tax and compliance solutions across Mysuru (Mysore), Bengaluru (Bangalore), Karnataka and India.",
      keywords: "about MnV Consulting, professional team, CA firm Mysuru Bengaluru, Karnataka consulting, " + CORE_KW
    },
    contact: {
      path: "/contact.html",
      title: "Contact | MnV Consulting LLP — Mysuru, Bengaluru, Karnataka, India",
      description:
        "Contact MnV Consulting LLP for accounting, tax and compliance support. We serve clients in Mysuru (Mysore), Bengaluru (Bangalore), throughout Karnataka and across India.",
      keywords: "contact MnV Consulting, CA consultation Mysuru (Mysore), tax help Bengaluru (Bangalore), Karnataka advisory, " + CORE_KW
    },
    faq: {
      path: "/faq.html",
      title: "FAQ | MnV Consulting LLP — Services & Support in Karnataka, India",
      description:
        "Frequently asked questions about MnV Consulting LLP services, clients and contact — accounting, GST, tax and incorporation support for Karnataka and India.",
      keywords: "MnV Consulting FAQ, CA services questions, GST tax help Karnataka, " + CORE_KW
    },
    blogs: {
      path: "/blogs.html",
      title: "Blogs | MnV Consulting LLP — GST, Income Tax & ROC Guides — Karnataka, India",
      description:
        "Articles and guides from MnV Consulting LLP on GST, income tax and Registrar of Companies (ROC) compliance for businesses in Mysuru (Mysore), Bengaluru (Bangalore), Karnataka and India.",
      keywords:
        "MnV Consulting blog, GST registration GSTR-3B ITC GSTR-2B GST notice guide, income tax ITR TDS notices new old regime, ROC MCA DIR-3 KYC, private limited company annual compliance LLP vs Pvt Ltd, company secretary Karnataka, " +
        LOC_PHRASE +
        ", " +
        CORE_KW
    },
    blogIncomeTaxWhatIs: {
      path: "/blogs/income-tax/what-is-income-tax-a-simple-guide-for-every-indian.html",
      title:
        "What is Income Tax? A Simple Guide for Every Indian | MnV Consulting LLP",
      description:
        "Confused about income tax? This simple guide explains what income tax is, who pays it, and how it works in India — in very simple language.",
      keywords:
        "what is income tax India, income tax basics, ITR filing, Income-tax Act 1961, tax slabs, old vs new tax regime, CBDT, " +
        LOC_PHRASE +
        ", " +
        CORE_KW
    },
    blogIncomeTaxSevenWays: {
      path: "/blogs/income-tax/7-smart-ways-to-save-income-tax-in-india.html",
      title: "7 Smart Ways to Save Income Tax in India | MnV Consulting LLP",
      description:
        "Looking to reduce your tax liability legally? Here are 7 proven and practical ways to save income tax in India that every individual should know.",
      keywords:
        "save income tax India, Section 80C 80D, HRA exemption, home loan tax benefit, NPS 80CCD, Section 80E, old vs new tax regime, tax planning, " +
        LOC_PHRASE +
        ", " +
        CORE_KW
    },
    blogIncomeTaxUnderstandingTds: {
      path: "/blogs/income-tax/understanding-tds-what-it-is-and-how-it-affects-you.html",
      title: "Understanding TDS | MnV Consulting LLP",
      description:
        "What is TDS and why is it deducted from your salary or payments? This simple guide explains TDS, how it works, and how to check and claim it.",
      keywords:
        "TDS India, tax deducted at source, Form 26AS, AIS, TDS on salary, Form 15G 15H, TDS credit ITR, " +
        LOC_PHRASE +
        ", " +
        CORE_KW
    },
    blogIncomeTaxNotice: {
      path: "/blogs/income-tax/received-income-tax-notice-what-to-do.html",
      title: "Received Income Tax Notice? What to do? | MnV Consulting LLP",
      description:
        "Don't panic if you receive an income tax notice. Read this guide to understand common types of notices, why they are sent, and how to respond correctly.",
      keywords:
        "income tax notice India, Section 143(1) 143(2), scrutiny notice, Section 148 reassessment, defective return 139(9), income tax notice verification incometax.gov.in, " +
        LOC_PHRASE +
        ", " +
        CORE_KW
    },
    blogIncomeTaxRegimes: {
      path: "/blogs/income-tax/new-tax-regime-vs-old-tax-regime-which-one-to-choose.html",
      title: "New Tax Regime v/s Old Tax Regime – which one to choose? | MnV Consulting LLP",
      description:
        "Confused between the new and old income tax regimes? This guide breaks down the key differences, who benefits from each, and how to decide which is right for you.",
      keywords:
        "new tax regime vs old tax regime India, Section 87A rebate, Budget 2023 tax slabs, default tax regime FY 2023-24, 80C HRA old regime, ITR regime switch, " +
        LOC_PHRASE +
        ", " +
        CORE_KW
    },
    blogGstWhatIs: {
      path: "/blogs/gst/what-is-gst-a-beginners-guide.html",
      title: "What is GST? A Complete Beginner's Guide | MnV Consulting LLP",
      description:
        "New to GST? This beginner friendly guide explains what GST is, how it works, its types, and why it matters for businesses and consumers in India.",
      keywords:
        "what is GST India, CGST SGST IGST, GST registration threshold, input tax credit ITC, GST slabs, Goods and Services Tax Act 2017, " +
        LOC_PHRASE +
        ", " +
        CORE_KW
    },
    blogGstRegistration: {
      path: "/blogs/gst/gst-registration-india-who-needs-how-to-apply.html",
      title: "GST Registration India. Who Needs How To Apply? | MnV Consulting LLP",
      description:
        "Wondering if you need GST registration? This guide explains who must register, the documents required, the process, and what happens after registration.",
      keywords:
        "GST registration India, GSTIN application, composition scheme GST, ARN TRN, gst.gov.in, interstate supply GST, e-commerce GST registration, " +
        LOC_PHRASE +
        ", " +
        CORE_KW
    },
    blogGstReturns: {
      path: "/blogs/gst/how-to-file-gst-returns-step-by-step.html",
      title: "How To File GST Returns - Step By Step | MnV Consulting LLP",
      description:
        "Filing GST returns doesn't have to be complicated. This step-by-step guide explains the types of GST returns, who needs to file what, and the key deadlines.",
      keywords:
        "file GSTR-3B India, GSTR-1 GSTR-9, CMP-08 composition, GSTR-2B ITC, QRMP GST, GST late fee, GST return due dates, " +
        LOC_PHRASE +
        ", " +
        CORE_KW
    },
    blogGstItc: {
      path: "/blogs/gst/input-tax-credit-what-it-is-how-to-claim.html",
      title: "Input Tax Credit. What It Is? How To Claim? | MnV Consulting LLP",
      description:
        "Input Tax Credit (ITC) is one of the most important features of GST. This guide explains what ITC is, eligibility conditions, how to claim it, and common mistakes to avoid.",
      keywords:
        "GST input tax credit India, GSTR-2B reconciliation, Section 17(5) blocked ITC, GSTR-3B Table 4, ITC 180 days rule, ICEGATE import IGST ITC, excess ITC penalty, " +
        LOC_PHRASE +
        ", " +
        CORE_KW
    },
    blogGstNotice: {
      path: "/blogs/gst/received-gst-notice-how-to-respond.html",
      title: "Received GST Notice? How To Respond? | MnV Consulting LLP",
      description:
        "A GST notice can seem frightening, but it is manageable if handled correctly. This guide explains common types of GST notices, why they are issued, and how to respond effectively.",
      keywords:
        "GST notice India, ASMT-10 scrutiny, DRC-01 show cause, REG-03 GST registration, GSTR-3A non-filing, GST appeal pre-deposit, gst.gov.in notice reply, " +
        LOC_PHRASE +
        ", " +
        CORE_KW
    },
    blogRocWhatIs: {
      path: "/blogs/roc/what-is-registrar-of-companies-roc-guide.html",
      title: "What Is Registrar Of Companies? Roc Guide. | MnV Consulting LLP",
      description:
        "What is the ROC and why does it matter for your business? This simple guide explains the role of the Registrar of Companies, what it regulates, and why compliance is essential.",
      keywords:
        "Registrar of Companies India, ROC Bangalore, MCA21 mca.gov.in, Companies Act 2013, LLP Act 2008, AOC-4 MGT-7, ROC strike off, company compliance, " +
        LOC_PHRASE +
        ", " +
        CORE_KW
    },
    blogRocPvtLtd: {
      path: "/blogs/roc/how-to-register-private-limited-company-in-india.html",
      title: "How To Register Private Limited Company in India | MnV Consulting LLP",
      description:
        "Thinking of starting a Private Limited Company in India? This step-by-step guide covers everything — from choosing a name to getting your Certificate of Incorporation.",
      keywords:
        "private limited company registration India, SPICe+ incorporation, DSC DIN, MOA AOA, RUN company name, MCA21, Certificate of Incorporation CIN, startup company Karnataka, " +
        LOC_PHRASE +
        ", " +
        CORE_KW
    },
    blogRocAnnualCompliance: {
      path: "/blogs/roc/annual-compliance-private-limited-company-checklist.html",
      title: "Annual Compliance for Private Limited Company – A Checklist | MnV Consulting LLP",
      description:
        "Running a Private Limited Company comes with mandatory annual compliance requirements. Here is a complete checklist of ROC filings, tax obligations, and meetings you must complete each year.",
      keywords:
        "private limited company annual compliance, AOC-4 MGT-7 DIR-3 KYC, AGM due date, ADT-1, ROC late fees, board meetings Companies Act, GSTR-9 TDS company, " +
        LOC_PHRASE +
        ", " +
        CORE_KW
    },
    blogRocLlpVsPvtLtd: {
      path: "/blogs/roc/llp-vs-private-limited-company-which-is-better.html",
      title: "LLP Vs Private Limited Company. Which Is Better? | MnV Consulting LLP",
      description:
        "Should you register an LLP or a Private Limited Company? This guide compares both structures on compliance, taxation, funding, and liability to help you choose the right one.",
      keywords:
        "LLP vs private limited company India, LLP Act 2008, Companies Act 2013, LLP Form 8 11, equity funding Pvt Ltd, Section 115BAA, LLP conversion, " +
        LOC_PHRASE +
        ", " +
        CORE_KW
    },
    blogRocDir3Kyc: {
      path: "/blogs/roc/director-kyc-dir-3-kyc-annual-filing-guide.html",
      title: "Director KYC DIR 3 - KYC Annual Filing Guide | MnV Consulting LLP",
      description:
        "DIR-3 KYC is an annual compliance requirement for all directors with a DIN. This guide explains what it is, who must file it, the process, and what happens if you miss the deadline.",
      keywords:
        "DIR-3 KYC India, DIN KYC 30 September, MCA director KYC, DIN deactivation, DIR-3 web form, designated partner LLP KYC, late fee DIR-3, " +
        LOC_PHRASE +
        ", " +
        CORE_KW
    }
  };

  var cfg = pages[pageKey];
  if (!cfg) return;

  var canonical = SITE + (pageKey === "index" ? "" : cfg.path);

  document.title = cfg.title;
  metaName("description", cfg.description);
  metaName("keywords", cfg.keywords);
  metaName("robots", "index, follow");
  metaName("author", "MnV Consulting LLP");
  metaName("geo.region", "IN-KA");
  metaName("geo.placename", "Karnataka, India");

  metaProp("og:type", pageKey === "index" ? "website" : "article");
  metaProp("og:url", canonical);
  metaProp("og:title", cfg.title);
  metaProp("og:description", cfg.description);
  metaProp("og:locale", "en_IN");
  metaProp("og:site_name", "MnV Consulting LLP");

  metaName("twitter:card", "summary_large_image");
  metaName("twitter:title", cfg.title);
  metaName("twitter:description", cfg.description);
  metaName("twitter:url", canonical);

  var graph = [organizationNode()];

  function pushBlogPosting(relPath, headline, description, datePublished, articleSection) {
    graph.push({
      "@type": "BlogPosting",
      "@id": SITE + relPath + "#article",
      headline: headline,
      description: description,
      inLanguage: "en-IN",
      datePublished: datePublished,
      dateModified: datePublished,
      author: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      url: canonical,
      articleSection: articleSection,
      mainEntityOfPage: { "@type": "WebPage", "@id": canonical }
    });
  }

  if (pageKey === "blogs") {
    graph.push({
      "@type": "Blog",
      "@id": SITE + "/blogs.html#blog",
      name: "MnV Consulting LLP — Blogs",
      description: cfg.description,
      url: canonical,
      inLanguage: "en-IN",
      publisher: { "@id": ORG_ID }
    });
  }

  if (pageKey === "index") {
    graph.push({
      "@type": "WebSite",
      "@id": WEB_ID,
      url: SITE,
      name: "MnV Consulting LLP",
      inLanguage: "en-IN",
      publisher: { "@id": ORG_ID }
    });
  }

  if (pageKey === "services") {
    graph.push(itemListNode());
  }

  if (pageKey === "blogIncomeTaxWhatIs") {
    pushBlogPosting(
      "/blogs/income-tax/what-is-income-tax-a-simple-guide-for-every-indian.html",
      "What is Income Tax? A Simple Guide for Every Indian",
      "Confused about income tax? This simple guide explains what income tax is, who pays it, and how it works in India — in very simple language.",
      "2026-05-13",
      "Income Tax"
    );
  }

  if (pageKey === "blogIncomeTaxSevenWays") {
    pushBlogPosting(
      "/blogs/income-tax/7-smart-ways-to-save-income-tax-in-india.html",
      "7 Smart Ways to Save Income Tax in India",
      "Looking to reduce your tax liability legally? Here are 7 proven and practical ways to save income tax in India that every individual should know.",
      "2026-05-14",
      "Income Tax"
    );
  }

  if (pageKey === "blogIncomeTaxUnderstandingTds") {
    pushBlogPosting(
      "/blogs/income-tax/understanding-tds-what-it-is-and-how-it-affects-you.html",
      "Understanding TDS",
      "What is TDS and why is it deducted from your salary or payments? This simple guide explains TDS, how it works, and how to check and claim it.",
      "2026-05-15",
      "Income Tax"
    );
  }

  if (pageKey === "blogIncomeTaxNotice") {
    pushBlogPosting(
      "/blogs/income-tax/received-income-tax-notice-what-to-do.html",
      "Received Income Tax Notice? What to do?",
      "Don't panic if you receive an income tax notice. Read this guide to understand common types of notices, why they are sent, and how to respond correctly.",
      "2026-05-16",
      "Income Tax"
    );
  }

  if (pageKey === "blogIncomeTaxRegimes") {
    pushBlogPosting(
      "/blogs/income-tax/new-tax-regime-vs-old-tax-regime-which-one-to-choose.html",
      "New Tax Regime v/s Old Tax Regime – which one to choose?",
      "Confused between the new and old income tax regimes? This guide breaks down the key differences, who benefits from each, and how to decide which is right for you.",
      "2026-05-17",
      "Income Tax"
    );
  }

  if (pageKey === "blogGstWhatIs") {
    pushBlogPosting(
      "/blogs/gst/what-is-gst-a-beginners-guide.html",
      "What is GST? A Complete Beginner's Guide",
      "New to GST? This beginner friendly guide explains what GST is, how it works, its types, and why it matters for businesses and consumers in India.",
      "2026-05-18",
      "GST"
    );
  }

  if (pageKey === "blogGstRegistration") {
    pushBlogPosting(
      "/blogs/gst/gst-registration-india-who-needs-how-to-apply.html",
      "GST Registration India. Who Needs How To Apply?",
      "Wondering if you need GST registration? This guide explains who must register, the documents required, the process, and what happens after registration.",
      "2026-05-19",
      "GST"
    );
  }

  if (pageKey === "blogGstReturns") {
    pushBlogPosting(
      "/blogs/gst/how-to-file-gst-returns-step-by-step.html",
      "How To File GST Returns - Step By Step",
      "Filing GST returns doesn't have to be complicated. This step-by-step guide explains the types of GST returns, who needs to file what, and the key deadlines.",
      "2026-05-20",
      "GST"
    );
  }

  if (pageKey === "blogGstItc") {
    pushBlogPosting(
      "/blogs/gst/input-tax-credit-what-it-is-how-to-claim.html",
      "Input Tax Credit. What It Is? How To Claim?",
      "Input Tax Credit (ITC) is one of the most important features of GST. This guide explains what ITC is, eligibility conditions, how to claim it, and common mistakes to avoid.",
      "2026-05-26",
      "GST"
    );
  }

  if (pageKey === "blogGstNotice") {
    pushBlogPosting(
      "/blogs/gst/received-gst-notice-how-to-respond.html",
      "Received GST Notice? How To Respond?",
      "A GST notice can seem frightening, but it is manageable if handled correctly. This guide explains common types of GST notices, why they are issued, and how to respond effectively.",
      "2026-05-27",
      "GST"
    );
  }

  if (pageKey === "blogRocWhatIs") {
    pushBlogPosting(
      "/blogs/roc/what-is-registrar-of-companies-roc-guide.html",
      "What Is Registrar Of Companies? Roc Guide.",
      "What is the ROC and why does it matter for your business? This simple guide explains the role of the Registrar of Companies, what it regulates, and why compliance is essential.",
      "2026-05-21",
      "ROC"
    );
  }

  if (pageKey === "blogRocPvtLtd") {
    pushBlogPosting(
      "/blogs/roc/how-to-register-private-limited-company-in-india.html",
      "How To Register Private Limited Company in India",
      "Thinking of starting a Private Limited Company in India? This step-by-step guide covers everything — from choosing a name to getting your Certificate of Incorporation.",
      "2026-05-22",
      "ROC"
    );
  }

  if (pageKey === "blogRocAnnualCompliance") {
    pushBlogPosting(
      "/blogs/roc/annual-compliance-private-limited-company-checklist.html",
      "Annual Compliance for Private Limited Company – A Checklist",
      "Running a Private Limited Company comes with mandatory annual compliance requirements. Here is a complete checklist of ROC filings, tax obligations, and meetings you must complete each year.",
      "2026-05-23",
      "ROC"
    );
  }

  if (pageKey === "blogRocLlpVsPvtLtd") {
    pushBlogPosting(
      "/blogs/roc/llp-vs-private-limited-company-which-is-better.html",
      "LLP Vs Private Limited Company. Which Is Better?",
      "Should you register an LLP or a Private Limited Company? This guide compares both structures on compliance, taxation, funding, and liability to help you choose the right one.",
      "2026-05-24",
      "ROC"
    );
  }

  if (pageKey === "blogRocDir3Kyc") {
    pushBlogPosting(
      "/blogs/roc/director-kyc-dir-3-kyc-annual-filing-guide.html",
      "Director KYC DIR 3 - KYC Annual Filing Guide",
      "DIR-3 KYC is an annual compliance requirement for all directors with a DIN. This guide explains what it is, who must file it, the process, and what happens if you miss the deadline.",
      "2026-05-25",
      "ROC"
    );
  }

  if (pageKey === "faq") {
    graph.push({
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does MnV Consulting LLP offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "MnV Consulting LLP offers income tax filing, GST compliance, company and LLP registration, ROC filings, audit support, virtual CFO services, MSME registration, startup advisory, and loan facilitation with end-to-end compliance."
          }
        },
        {
          "@type": "Question",
          name: "Why should I choose MnV Consulting LLP?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "MnV Consulting LLP provides a client-focused approach, professional expertise, and timely delivery with customized solutions, complete compliance, and long-term relationships built on trust and transparency."
          }
        },
        {
          "@type": "Question",
          name: "Who are your typical clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Typical clients include startups, SMEs, professionals, partnership firms, LLPs, private limited companies, and individuals with income tax and compliance needs across industries."
          }
        },
        {
          "@type": "Question",
          name: "How can I contact your team?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Contact the team by phone, email, office visit, WhatsApp, or the website contact form for a prompt response and dedicated assistance."
          }
        }
      ]
    });
  }

  addJsonLd({
    "@context": "https://schema.org",
    "@graph": graph
  });
})();
