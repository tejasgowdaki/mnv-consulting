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

  var graph = [organizationNode()];

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
