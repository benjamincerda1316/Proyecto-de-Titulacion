/**
 * MXBoard — Onboarding Tracker
 * Core Application Engine
 */

// Global App Module
const HOY_PRESENTE = new Date('2026-05-25T00:00:00');

const bancoPreguntasSemana1 = [
  {
    "q": "What is the primary function of the Front Office?",
    "opts": [
      "A) Record accounting entries",
      "B) Sell products and generate business",
      "C) Settle operations",
      "D) Audit processes"
    ],
    "ans": 1
  },
  {
    "q": "Who typically interacts directly with clients?",
    "opts": [
      "A) Back Office",
      "B) Internal Audit",
      "C) Front Office",
      "D) Compliance"
    ],
    "ans": 2
  },
  {
    "q": "Which department validates transaction risks before or after execution?",
    "opts": [
      "A) Front Office",
      "B) Middle Office",
      "C) Human Resources",
      "D) Treasury"
    ],
    "ans": 1
  },
  {
    "q": "What is a typical function of the Back Office?",
    "opts": [
      "A) Negotiate swaps",
      "B) Attract clients",
      "C) Confirm and settle transactions",
      "D) Manage investments"
    ],
    "ans": 2
  },
  {
    "q": "What happens if the Front Office executes a transaction and the Back Office does not settle it?",
    "opts": [
      "A) Nothing happens",
      "B) Operational risk exists",
      "C) Profitability increases",
      "D) Liquidity improves"
    ],
    "ans": 1
  },
  {
    "q": "What is the correct order of the workflow?",
    "opts": [
      "A) Settlement → Negotiation → Confirmation",
      "B) Confirmation → Negotiation → Accounting",
      "C) Negotiation → Confirmation → Settlement",
      "D) Accounting → Negotiation → Confirmation"
    ],
    "ans": 2
  },
  {
    "q": "What does \"Trade Date\" mean?",
    "opts": [
      "A) Payment date",
      "B) Negotiation/trade date",
      "C) Accounting date",
      "D) Maturity/expiry date"
    ],
    "ans": 1
  },
  {
    "q": "What does \"Settlement Date\" mean?",
    "opts": [
      "A) Settlement date",
      "B) Issue date",
      "C) Approval date",
      "D) Negotiation/trade date"
    ],
    "ans": 0
  },
  {
    "q": "Who typically generates a trade in a bank?",
    "opts": [
      "A) Front Office",
      "B) Back Office",
      "C) Audit",
      "D) Compliance"
    ],
    "ans": 0
  },
  {
    "q": "Which department typically records the accounting derived from a transaction?",
    "opts": [
      "A) Front Office",
      "B) Marketing",
      "C) Finance/Accounting",
      "D) Commercial"
    ],
    "ans": 2
  },
  {
    "q": "An asset is:",
    "opts": [
      "A) An obligation",
      "B) Something that generates economic value",
      "C) A loss",
      "D) An expense"
    ],
    "ans": 1
  },
  {
    "q": "A customer deposit represents for the bank:",
    "opts": [
      "A) An asset",
      "B) Equity",
      "C) A liability",
      "D) Revenue"
    ],
    "ans": 2
  },
  {
    "q": "A loan granted by the bank is:",
    "opts": [
      "A) A liability",
      "B) An asset",
      "C) Equity",
      "D) An expense"
    ],
    "ans": 1
  },
  {
    "q": "Which accounting equation is correct?",
    "opts": [
      "A) Assets = Liabilities + Equity",
      "B) Assets + Liabilities = Equity",
      "C) Equity = Assets + Expenses",
      "D) Revenue = Assets + Liabilities"
    ],
    "ans": 0
  },
  {
    "q": "When an asset increases, it is normally:",
    "opts": [
      "A) Debited",
      "B) Credited",
      "C) Deleted",
      "D) Provisioned"
    ],
    "ans": 0
  },
  {
    "q": "Treasury is mainly responsible for:",
    "opts": [
      "A) Hiring staff",
      "B) Managing liquidity and funding",
      "C) Marketing",
      "D) Auditing"
    ],
    "ans": 1
  },
  {
    "q": "Which risk does Treasury control in particular?",
    "opts": [
      "A) Liquidity risk",
      "B) Reputational risk",
      "C) Legal risk",
      "D) Climate risk"
    ],
    "ans": 0
  },
  {
    "q": "A bank with excess cash will probably:",
    "opts": [
      "A) Seek to invest it",
      "B) Close operations",
      "C) Increase losses",
      "D) Conduct audits"
    ],
    "ans": 0
  },
  {
    "q": "What is a cash position?",
    "opts": [
      "A) Net available cash flow",
      "B) Equity",
      "C) Share capital",
      "D) Retained earnings"
    ],
    "ans": 0
  },
  {
    "q": "Which market is frequently used to obtain short-term liquidity?",
    "opts": [
      "A) Real estate market",
      "B) Interbank market",
      "C) Labor market",
      "D) Agricultural market"
    ],
    "ans": 1
  },
  {
    "q": "What is a bond?",
    "opts": [
      "A) A derivative",
      "B) A debt instrument",
      "C) A preferred stock",
      "D) A currency"
    ],
    "ans": 1
  },
  {
    "q": "A share represents:",
    "opts": [
      "A) Debt",
      "B) Partial ownership of a company",
      "C) A derivative",
      "D) A loan"
    ],
    "ans": 1
  },
  {
    "q": "What is a time deposit / certificate of deposit?",
    "opts": [
      "A) Investment with a defined maturity",
      "B) A derivative",
      "C) A perpetual bond",
      "D) A share"
    ],
    "ans": 0
  },
  {
    "q": "Which instrument pays periodic interest?",
    "opts": [
      "A) A bond",
      "B) A forward",
      "C) An option",
      "D) A future"
    ],
    "ans": 0
  },
  {
    "q": "Which market trades currencies?",
    "opts": [
      "A) Equity",
      "B) FX",
      "C) Commodities",
      "D) Real Estate"
    ],
    "ans": 1
  },
  {
    "q": "What is a derivative?",
    "opts": [
      "A) Instrument whose value depends on an underlying asset",
      "B) A loan",
      "C) A checking account",
      "D) A deposit"
    ],
    "ans": 0
  },
  {
    "q": "What is a Forward?",
    "opts": [
      "A) Future purchase/sale agreed today",
      "B) A bond",
      "C) A deposit",
      "D) A share"
    ],
    "ans": 0
  },
  {
    "q": "What is an option?",
    "opts": [
      "A) Obligation to buy",
      "B) Right but not the obligation",
      "C) A loan",
      "D) A deposit"
    ],
    "ans": 1
  },
  {
    "q": "In a Call Option, the buyer expects that:",
    "opts": [
      "A) The price falls",
      "B) The price rises",
      "C) It doesn't change",
      "D) The company goes bankrupt"
    ],
    "ans": 1
  },
  {
    "q": "What is a Swap?",
    "opts": [
      "A) Exchange of financial cash flows",
      "B) A bond",
      "C) A share",
      "D) A deposit"
    ],
    "ans": 0
  },
  {
    "q": "What is market risk?",
    "opts": [
      "A) Changes in prices, interest rates, or exchange rates",
      "B) Physical theft",
      "C) Employee resignation",
      "D) Legal risk"
    ],
    "ans": 0
  },
  {
    "q": "What is credit risk?",
    "opts": [
      "A) Default of a counterparty",
      "B) Low liquidity",
      "C) Technical failure",
      "D) Reputational risk"
    ],
    "ans": 0
  },
  {
    "q": "What is operational risk?",
    "opts": [
      "A) Losses due to errors or process failures",
      "B) Interest rate variation",
      "C) FX rate variation",
      "D) Stock market variation"
    ],
    "ans": 0
  },
  {
    "q": "Which area typically measures VaR?",
    "opts": [
      "A) Middle Office / Risk Management",
      "B) Marketing",
      "C) HR",
      "D) Sales"
    ],
    "ans": 0
  },
  {
    "q": "What does VaR stand for?",
    "opts": [
      "A) Value at Risk",
      "B) Variable at Return",
      "C) Volume at Risk",
      "D) Value and Return"
    ],
    "ans": 0
  },
  {
    "q": "What is regulatory capital used for?",
    "opts": [
      "A) Absorb losses",
      "B) Pay salaries",
      "C) Buy buildings",
      "D) Finance marketing"
    ],
    "ans": 0
  },
  {
    "q": "What does Basel aim to protect?",
    "opts": [
      "A) Financial stability",
      "B) Sales",
      "C) Taxes",
      "D) Foreign trade"
    ],
    "ans": 0
  },
  {
    "q": "Why do banks keep reserves?",
    "opts": [
      "A) Meet regulatory requirements and liquidity",
      "B) Pay dividends",
      "C) Buy shares",
      "D) Reduce clients"
    ],
    "ans": 0
  },
  {
    "q": "What is a counterparty?",
    "opts": [
      "A) The other party in a financial transaction",
      "B) An auditor",
      "C) A shareholder",
      "D) A regulator"
    ],
    "ans": 0
  },
  {
    "q": "Which body typically supervises banks in Chile?",
    "opts": [
      "A) SII",
      "B) CMF",
      "C) BancoEstado",
      "D) General Treasury"
    ],
    "ans": 1
  },
  {
    "q": "A trader buys a bond. Who initially records the transaction?",
    "opts": [
      "A) Front Office",
      "B) HR",
      "C) Audit",
      "D) Legal"
    ],
    "ans": 0
  },
  {
    "q": "Who verifies that the trade makes financial sense and respects limits?",
    "opts": [
      "A) Middle Office",
      "B) Marketing",
      "C) HR",
      "D) Commercial"
    ],
    "ans": 0
  },
  {
    "q": "Who sends payment instructions?",
    "opts": [
      "A) Back Office",
      "B) Front Office",
      "C) Risks",
      "D) Audit"
    ],
    "ans": 0
  },
  {
    "q": "Which department needs information to prepare financial statements?",
    "opts": [
      "A) Accounting",
      "B) Marketing",
      "C) Sales",
      "D) HR"
    ],
    "ans": 0
  },
  {
    "q": "Which system is typically used to manage derivatives and market operations?",
    "opts": [
      "A) SAP exclusively",
      "B) Excel only",
      "C) Murex",
      "D) PowerPoint"
    ],
    "ans": 2
  },
  {
    "q": "What happens when a counterparty defaults on a payment?",
    "opts": [
      "A) Credit risk",
      "B) Operational risk",
      "C) Reputational risk",
      "D) Climate risk"
    ],
    "ans": 0
  },
  {
    "q": "What is P&L?",
    "opts": [
      "A) Profit and Loss",
      "B) Position and Liquidity",
      "C) Price and Leverage",
      "D) Payment and Liability"
    ],
    "ans": 0
  },
  {
    "q": "Which department is typically responsible for the P&L of a trading desk?",
    "opts": [
      "A) Front Office",
      "B) HR",
      "C) Legal",
      "D) Audit"
    ],
    "ans": 0
  },
  {
    "q": "Why are accounting reconciliations performed?",
    "opts": [
      "A) Verify consistency between systems and records",
      "B) Generate sales",
      "C) Increase risks",
      "D) Create derivatives"
    ],
    "ans": 0
  },
  {
    "q": "What is the ultimate goal of the entire banking operational workflow?",
    "opts": [
      "A) Process operations in a secure, profitable, and controlled manner",
      "B) Increase bureaucracy",
      "C) Reduce customers",
      "D) Eliminate controls"
    ],
    "ans": 0
  }
];

// Simulación exacta del contenido de tu archivo CSV para el juego
const juegoCuentasCSVData = [
    { operacion: "FX Swap - Apertura Near", cuentaCorrecta: "Cuentas Simples (Position Asset)", formulaAsociada: "Base Currency" },
    { operacion: "FX Swap - Cierre Far (USD/CLP)", cuentaCorrecta: "Cuentas Dinámicas (P&L Revaluation)", formulaAsociada: "Dynamic Currency" },
    { operacion: "FX Swap - Ajuste IFRS (EUR/USD)", cuentaCorrecta: "Cuentas Fórmula", formulaAsociada: "Formula: If Currency == EUR then Account_A" },
    { operacion: "FX Swap - Devengo de Intereses", cuentaCorrecta: "Cuentas Simples (Accrual Account)", formulaAsociada: "Fixed Schedule" }
];

const tablasOnboardingGlobal = [
    {
        titulo: "Tabla 1: Sessions & Orientation (Onsite/Virtual)",
        items: [
            { nombre: "Introduction to Murex/OM Orientation", modalidad: "Onsite", duracion: "1 Hour", plazo: "Day 1" },
            { nombre: "Kit to Start IT on track", modalidad: "Onsite", duracion: "1 Hour", plazo: "Day 1" },
            { nombre: "HR Orientation", modalidad: "Onsite", duracion: "1 Hour", plazo: "Day 1" },
            { nombre: "Benefits Orientation", modalidad: "Onsite", duracion: "1 Hour", plazo: "Day 1" },
            { nombre: "Learning and Development Introduction", modalidad: "Onsite", duracion: "30 Minutes", plazo: "Week 1" },
            { nombre: "Meet the Co-Founder Salim EDDE", modalidad: "Virtual", duracion: "2 Hours", plazo: "2 Months" },
            { nombre: "Information Security Awareness", modalidad: "Blended", duracion: "1 Hour", plazo: "Week 1" },
            { nombre: "Travel Presentation", modalidad: "OnSite", duracion: "30 Minutes", plazo: "Day 1" }
        ]
    },
    {
        titulo: "Tabla 2: Plataformas y Frameworks Murex (e-Learning)",
        items: [
            { nombre: "Workday for All", modalidad: "e-Learning", duracion: "30 Minutes", plazo: "Week 1" },
            { nombre: "Getting Started with the Murex Collaboration Framework", modalidad: "e-Learning", duracion: "15 Minutes", plazo: "Week 1" },
            { nombre: "Getting Started with ServiceNow", modalidad: "e-Learning", duracion: "15 Minutes", plazo: "Week 1" },
            { nombre: "Time Booking for Client Services", modalidad: "e-Learning", duracion: "20 Minutes", plazo: "Week 1" },
            { nombre: "MXlearn Learner’s Handbook", modalidad: "e-Learning", duracion: "10 Minutes", plazo: "Week 1" },
            { nombre: "Discover the Basics of MX Jira", modalidad: "e-Learning", duracion: "20 Minutes", plazo: "Week 1" },
            { nombre: "Discover MXdoc Online", modalidad: "e-Learning", duracion: "30 Minutes", plazo: "Week 1" },
            { nombre: "Explain Murex to Your Friends", modalidad: "Virtual", duracion: "1h 30 Mins", plazo: "Week 1" },
            { nombre: "Discover the Murex Way!", modalidad: "e-Learning", duracion: "20 Minutes", plazo: "Week 1" }
        ]
    },
    {
        titulo: "Tabla 3: Compliance y Habilidades Core",
        items: [
            { nombre: "Welcome to Fundamentals of Communication", modalidad: "Blended", duracion: "5 Hours", plazo: "Week 1" },
            { nombre: "Sustainability - ESG Awareness Program (ENG)", modalidad: "e-Learning", duracion: "20 Minutes", plazo: "Week 1" },
            { nombre: "Discover the Anti-Corruption Code of Conduct", modalidad: "e-Learning", duracion: "20 Minutes", plazo: "Week 1" },
            { nombre: "Become a Guru: Master the Case Management Process", modalidad: "e-Learning", duracion: "1 Hour", plazo: "Week 1" },
            { nombre: "Newcomers Gen AI Copilot Web Training", modalidad: "e-Learning", duracion: "45 Minutes", plazo: "Week 1" }
        ]
    }
];

const mxlearnOnboardingModules = {
  financial_markets: {
    title: "Financial Markets for Newcomers",
    items: [
      "Module: Introduction to Banks",
      "Module: Bank Capital Management",
      "Module: Financial Statement Analysis of Banks",
      "Module: Time Value of Money",
      "Module: Internal Rate of Return",
      "Module: Valuation of Fixed Income Bonds",
      "Module: Introduction to Financial Futures",
      "Module: Introduction to Options",
      "Module: Cash Instruments",
      "Module: Repo and Sell/Buy Back",
      "Module: Securities Lending",
      "Module: Repo/Security Lending and Financial Products",
      "Module: Introduction to FX Market",
      "Module: FX Management",
      "Module: FX Spot Market",
      "Module: FX Forward Market",
      "Module: FX Options - Basic Strategies and Risk Parameters",
      "Module: Risk-Free Rates (RFR)",
      "Module: Money Market I - Single Period Swaps (SPS)",
      "Module: Swaps I - Applications",
      "Module: Swaps IV - Cross Currency Swaps"
    ]
  },
  accounting: {
    title: "Accounting Module",
    hasSubfolders: true,
    subfolders: {
      fit_for_banking: {
        title: "Accounting Fundamentals for Newcomers",
        items: [
          "Module: Double Entry Systems",
          "Module: Accounting Principles",
          "Module: International Financial Reporting Standards",
          "Module: Valuation Concepts",
          "Module: IAS Measurements",
          "Module: Impairment of Assets",
          "Module: Hedge Accounting - IFRS 9",
          "Module: Fair Value Measurement - IFRS 13",
          "Module: Financial Instruments - IFRS 9",
          "Module: Cash Flow Statement",
          "Module: Income Statement Analysis",
          "Module: Balance Sheet Analysis",
          "Module: Financial Statements"
        ]
      },
      intro_pnl: {
        title: "Financial Statements Introduction to Profit and Loss",
        items: [
          "Introduction to Profit & Loss"
        ]
      },
      eod_troubleshooting: {
        title: "Generic EOD Troubleshooting",
        items: [
          "Generic EOD Troubleshooting"
        ]
      }
    }
  },
  liquidation: {
    title: "Liquidation Module",
    items: [
      "Read the attached documents"
    ]
  }
};

const onboardingItemUrls = {
  // Financial Markets for Newcomers
  "Module: Introduction to Banks": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6bf5?pathSessionId=6797cd5832d5d3b1f1817766&preferredLang=en",
  "Module: Bank Capital Management": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6bf7?pathSessionId=6797cd5832d5d3b1f1817766&preferredLang=en",
  "Module: Financial Statement Analysis of Banks": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6bf9?pathSessionId=6797cd5832d5d3b1f1817766&preferredLang=en",
  "Module: Time Value of Money": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6bfd?pathSessionId=6797cd5832d5d3b1f1817766&preferredLang=en",
  "Module: Internal Rate of Return": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6bfe?pathSessionId=6797cd5832d5d3b1f1817766&preferredLang=en",
  "Module: Valuation of Fixed Income Bonds": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6c00?pathSessionId=6797cd5832d5d3b1f1817766&preferredLang=en",
  "Module: Introduction to Financial Futures": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6c05?pathSessionId=6797cd5832d5d3b1f1817766&preferredLang=en",
  "Module: Introduction to Options": "https://mxlearn.360learning.com/course/play/6686c04a8e547a3a0338080e?pathSessionId=6797cd5832d5d3b1f1817766&preferredLang=en",
  "Module: Cash Instruments": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6c09?pathSessionId=6797cd5832d5d3b1f1817766&preferredLang=en",
  "Module: Repo and Sell/Buy Back": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6c0a?pathSessionId=6797cd5832d5d3b1f1817766&preferredLang=en",
  "Module: Securities Lending": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6c0c?pathSessionId=6797cd5832d5d3b1f1817766&preferredLang=en",
  "Module: Repo/Security Lending and Financial Products": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6c0d?pathSessionId=6797cd5832d5d3b1f1817766&preferredLang=en",
  "Module: Introduction to FX Market": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6c10?pathSessionId=6797cd5832d5d3b1f1817766&preferredLang=en",
  "Module: FX Management": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6c11?pathSessionId=6797cd5832d5d3b1f1817766&preferredLang=en",
  "Module: FX Spot Market": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6c12?pathSessionId=6797cd5832d5d3b1f1817766&preferredLang=en",
  "Module: FX Forward Market": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6c13?pathSessionId=6797cd5832d5d3b1f1817766&preferredLang=en",
  "Module: FX Options - Basic Strategies and Risk Parameters": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6c14?pathSessionId=6797cd5832d5d3b1f1817766&preferredLang=en",
  "Module: Risk-Free Rates (RFR)": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6c49?pathSessionId=6797cd5832d5d3b1f1817766&preferredLang=en",
  "Module: Money Market I - Single Period Swaps (SPS)": "https://mxlearn.360learning.com/course/play/61f0e37db6878729b7b83d9c?pathSessionId=6797cd5832d5d3b1f1817766&preferredLang=en",
  "Module: Swaps I - Applications": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6c4c?pathSessionId=6797cd5832d5d3b1f1817766&preferredLang=en",
  "Module: Swaps IV - Cross Currency Swaps": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6c4f?pathSessionId=6797cd5832d5d3b1f1817766&preferredLang=en",

  // Liquidation Module
  "Read the attached documents": "https://mxlearn.360learning.com/course/play/6758b7f7a03295ae3449b8e4/attempts/6a233b0a0c8feff1cddaa2c3?preferredLang=en",
  
  // Accounting Module - Fit for Banking
  "Module: Double Entry Systems": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6cc4/attempts/6981f665f274ab876974f954?preferredLang=en",
  "Module: Accounting Principles": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6cc5/attempts/69820a6d84f435f3ed4e69fe?preferredLang=en",
  "Module: International Financial Reporting Standards": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6cc6/attempts/69824d4131d0be5da0a74029?preferredLang=en",
  "Module: Valuation Concepts": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6cc7/attempts/698348ba480695ae2bd4f613?preferredLang=en",
  "Module: IAS Measurements": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6cc8/attempts/69834e6889ad186271342b67?preferredLang=en",
  "Module: Impairment of Assets": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6cc9/attempts/69835e32480695ae2bd4fba1?preferredLang=en",
  "Module: Hedge Accounting - IFRS 9": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6ccc/attempts/697a6bf792e8d2797ae64210?preferredLang=en",
  "Module: Fair Value Measurement - IFRS 13": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6ccb/attempts/69838e14195b37a496921f56?preferredLang=en",
  "Module: Financial Instruments - IFRS 9": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6cca/attempts/6983a7dc9acd0ff2959cef11?preferredLang=en",
  "Module: Cash Flow Statement": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6cc2/attempts/6984b9834843055713815673?preferredLang=en",
  "Module: Income Statement Analysis": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6cc1/attempts/6984f13ef93d1ea32dc047f6?preferredLang=en",
  "Module: Balance Sheet Analysis": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6cc0/attempts/69853dc8a9d86632e6dc33e0?preferredLang=en",

  // Accounting Module - Financial Statements Introduction to Profit and Loss
  "Module: Financial Statements": "https://mxlearn.360learning.com/course/play/5e8b26f0e424ab028b6e6cbf/attempts/698543df0aa16474b852050b?preferredLang=en",
  "Introduction to Profit & Loss": "https://mxlearn.360learning.com/course/play/5f44c06bb1b5105d12176bca/attempts/6985dd19aae0ac9695dd5a1c?preferredLang=en",

  // Accounting Module - Generic EOD Troubleshooting
  "Generic EOD Troubleshooting": "https://mxlearn.360learning.com/course/play/606f0c184deb1757af672ff8?pathSessionId=6797cd5832d5d3b1f1817767&preferredLang=en"
};

const bancoPreguntasSemana2 = [
  {
    "question": "What is the primary function of the Trade Query in Murex?",
    "options": [
      "Book trades",
      "Perform events on trades",
      "Search and filter trades",
      "Replicate trades"
    ],
    "correct": 2
  },
  {
    "question": "What is the primary function of the e-Tradepad in Murex?",
    "options": [
      "Book trades",
      "Perform events on trades",
      "Search and filter trades",
      "Replicate trades"
    ],
    "correct": 0
  },
  {
    "question": "With which profile is accounting initialized in MX.3?",
    "options": [
      "MO",
      "FO",
      "CONFIG",
      "HOUSEKEEPER"
    ],
    "correct": 3
  },
  {
    "question": "With which profile are accounting rules edited in MX.3?",
    "options": [
      "MO",
      "FO",
      "BO",
      "CONFIG"
    ],
    "correct": 3
  },
  {
    "question": "With which application can I view my vacations?",
    "options": [
      "Workday",
      "MXIntra",
      "MXEvolve",
      "Microsoft Teams"
    ],
    "correct": 0
  },
  {
    "question": "Which application provides information and documentation on real client cases and tools to resolve cases?",
    "options": [
      "Pega Case",
      "MXDoc",
      "MXWiki",
      "MXUniversity"
    ],
    "correct": 0
  },
  {
    "question": "Which application has the official Murex documentation for configuration?",
    "options": [
      "Pega Case",
      "MXDoc",
      "MXWiki",
      "MXUniversity"
    ],
    "correct": 1
  },
  {
    "question": "How often is the timesheet filled out?",
    "options": [
      "Every 1 week",
      "Every 15 days",
      "Every 1 month",
      "Every 2 months"
    ],
    "correct": 1
  },
  {
    "question": "To which financial statement does a Notional go in accounting?",
    "options": [
      "Balance Sheet",
      "Off-Balance Sheet",
      "Income Statement",
      "Equity Notes"
    ],
    "correct": 1
  },
  {
    "question": "To which financial statement does an MTM (Mark-to-Market) go in accounting?",
    "options": [
      "Balance Sheet",
      "Off-Balance Sheet",
      "Income Statement",
      "Equity Notes"
    ],
    "correct": 0
  },
  {
    "question": "What is an FX Swap?",
    "options": [
      "The purchase of a currency at spot price without a commitment to return it",
      "The exchange of two currencies on a spot date and the reverse exchange on an agreed future date",
      "A currency option contract",
      "An exchange rate future traded on an exchange"
    ],
    "correct": 1
  },
  {
    "question": "What are the two legs of an FX Swap?",
    "options": [
      "Near leg and Far leg",
      "Buy leg and Sell leg",
      "Open leg and Close leg",
      "Long leg and Short leg"
    ],
    "correct": 0
  },
  {
    "question": "What is the difference between the Trade Date and the Settlement Date?",
    "options": [
      "They are the same date",
      "The Trade Date is when the transaction is agreed; the Settlement Date is when the funds are exchanged",
      "The Settlement Date is always before the Trade Date",
      "The Trade Date applies only to options"
    ],
    "correct": 1
  },
  {
    "question": "In an FX Spot, how many business days after the Trade Date does Settlement occur?",
    "options": [
      "T+0",
      "T+1",
      "T+2",
      "T+3"
    ],
    "correct": 2
  },
  {
    "question": "What do the \"swap points\" represent in an FX Swap?",
    "options": [
      "The fee charged by the bank",
      "The difference between the exchange rate of the near leg and the far leg, derived from the interest rate differential",
      "The client's credit margin",
      "The spot exchange rate in effect at maturity"
    ],
    "correct": 1
  },
  {
    "question": "What main risk does an FX Swap cover?",
    "options": [
      "Credit risk",
      "Interest rate risk",
      "Liquidity and funding risk in foreign currencies",
      "Operational risk"
    ],
    "correct": 2
  },
  {
    "question": "What is the Rolel-over in an FX Swap?",
    "options": [
      "Cancel a swap early",
      "Extend the maturity date of the far leg to a further date",
      "Change the currency of the contract",
      "Convert an FX Swap into an FX Forward"
    ],
    "correct": 1
  },
  {
    "question": "In an FX Swap, what remains fixed during the entire life of the contract?",
    "options": [
      "The market spot exchange rate",
      "The differential (swap points) between both legs",
      "The market interest rate",
      "The MTM of the transaction"
    ],
    "correct": 1
  },
  {
    "question": "How is the near leg of an FX Swap recorded in accounting on the settlement date?",
    "options": [
      "As income in the Income Statement",
      "As an asset and a liability in the Balance Sheet due to the exchange of nominals",
      "Directly as Off-Balance Sheet",
      "Only recorded at maturity"
    ],
    "correct": 1
  },
  {
    "question": "Which Murex profile is typically used to book an FX Swap?",
    "options": [
      "HOUSEKEEPER",
      "CONFIG",
      "FO (Front Office)",
      "MO (Middle Office)"
    ],
    "correct": 2
  },
  {
    "question": "Does an FX Swap generate net foreign exchange market risk?",
    "options": [
      "Yes, the same as a spot",
      "No, because the two legs offset each other in nominal amounts",
      "Only on the far leg",
      "Only if the client defaults"
    ],
    "correct": 1
  },
  {
    "question": "What is a Call option?",
    "options": [
      "The right to sell an asset at a set price",
      "The obligation to buy an asset at a set price",
      "The right to buy an asset at a set price",
      "A contract to exchange flows"
    ],
    "correct": 2
  },
  {
    "question": "What is a Put option?",
    "options": [
      "The right to buy an asset at a set price",
      "The right to sell an asset at a set price",
      "The obligation to sell an asset",
      "A forward with optionality"
    ],
    "correct": 1
  },
  {
    "question": "What is the exercise price (strike) in an option?",
    "options": [
      "The market price of the underlying on the maturity date",
      "The price at which the buyer can exercise their right to buy or sell",
      "The premium paid for the option",
      "The bid-ask spread"
    ],
    "correct": 1
  },
  {
    "question": "What is the premium of an option?",
    "options": [
      "The agreed strike price",
      "The profit obtained by exercising the option",
      "The price paid by the buyer to the seller to acquire the right",
      "The collateral deposited in the clearing house"
    ],
    "correct": 2
  },
  {
    "question": "When is a Call option said to be \"In the Money\" (ITM)?",
    "options": [
      "When the price of the underlying is equal to the strike",
      "When the price of the underlying is below the strike",
      "When the price of the underlying is above the strike",
      "When the premium is greater than the strike"
    ],
    "correct": 2
  },
  {
    "question": "What is the Delta of an option?",
    "options": [
      "The remaining time until maturity",
      "The sensitivity of the option's price to a one-point change in the underlying",
      "The option's implied volatility",
      "The risk-free rate used in the model"
    ],
    "correct": 1
  },
  {
    "question": "Which model is frequently used to value currency options (FX Options)?",
    "options": [
      "Vasicek model",
      "Black-Scholes / Garman-Kohlhagen",
      "Hull-White model",
      "CIR model"
    ],
    "correct": 1
  },
  {
    "question": "What is a European option versus an American option?",
    "options": [
      "A European option can only be exercised at maturity; an American option can be exercised at any time up to maturity",
      "A European option can be exercised at any time; an American option only at maturity",
      "They are identical in their rights",
      "The difference is only geographic, not exercise-related"
    ],
    "correct": 0
  },
  {
    "question": "What is the Vega of an option?",
    "options": [
      "Sensitivity to the passage of time",
      "Sensitivity to change in the underlying price",
      "Sensitivity to change in implied volatility",
      "Sensitivity to change in interest rates"
    ],
    "correct": 2
  },
  {
    "question": "What is the Theta of an option?",
    "options": [
      "Sensitivity to change in volatility",
      "Loss of option value over time (time decay)",
      "Sensitivity to change in the underlying price",
      "Sensitivity to interest rates"
    ],
    "correct": 1
  },
  {
    "question": "What is a futures contract?",
    "options": [
      "A right to buy or sell an asset in the future",
      "An OTC agreement to exchange flows",
      "A standardized contract traded on an exchange to buy/sell an asset at a set price and future date",
      "An option with no premium"
    ],
    "correct": 2
  },
  {
    "question": "What is the main difference between a future and a forward?",
    "options": [
      "The future has an underlying; the forward does not",
      "The future is traded on organized markets and is standardized; the forward is OTC and customizable",
      "The forward requires daily margin; the future does not",
      "Only futures have a maturity date"
    ],
    "correct": 1
  },
  {
    "question": "What is daily \"marking to market\" in futures?",
    "options": [
      "The monthly valuation of the contract",
      "The daily adjustment of gains and losses in the margin account based on the market closing price",
      "The automatic rollover of the contract at maturity",
      "The calculation of the contract premium"
    ],
    "correct": 1
  },
  {
    "question": "What is the initial margin in a futures contract?",
    "options": [
      "The guaranteed profit upon entering the contract",
      "The collateral deposit that the investor must maintain when opening a position",
      "The settlement price at maturity",
      "The clearing house fee"
    ],
    "correct": 1
  },
  {
    "question": "What happens when the balance in the margin account falls below the maintenance margin?",
    "options": [
      "The contract is automatically cancelled",
      "A margin call is issued and the investor must replenish funds",
      "The clearing house assumes the loss",
      "The contract price adjusts to spot"
    ],
    "correct": 1
  },
  {
    "question": "What is \"delivery\" in a futures contract?",
    "options": [
      "Payment of the premium at maturity",
      "The physical settlement of the underlying asset at maturity, or cash settlement depending on the contract",
      "The replenishment of the margin",
      "The renewal of the contract for another period"
    ],
    "correct": 1
  },
  {
    "question": "What is \"open interest\" in futures?",
    "options": [
      "The total volume traded in the day",
      "The total number of open contracts that have not yet been closed or settled",
      "The accumulated interest of the long position",
      "The average price of all outstanding contracts"
    ],
    "correct": 1
  },
  {
    "question": "How is a position in futures closed without reaching physical delivery?",
    "options": [
      "By requesting cancellation from the exchange",
      "By taking an opposite (offsetting) position of the same contract",
      "By waiting for maturity and paying a penalty",
      "By transferring it directly to another investor"
    ],
    "correct": 1
  },
  {
    "question": "What is the \"basis\" in futures?",
    "options": [
      "The spot price of the asset",
      "The difference between the spot price of the underlying asset and the futures price",
      "The required maintenance margin",
      "The implied interest rate of the contract"
    ],
    "correct": 1
  },
  {
    "question": "What is \"basis risk\" in a hedge with futures?",
    "options": [
      "The risk that the futures price goes up",
      "The risk that the correlation between the asset to be hedged and the future is not perfect, leaving residual exposure",
      "The risk of default by the clearing house",
      "The risk that there is no liquidity in the contract"
    ],
    "correct": 1
  },
  {
    "question": "What is the Value Date in a financial transaction?",
    "options": [
      "The date the trade is agreed",
      "The date the funds or assets are actually exchanged",
      "The date the MTM is recorded",
      "The expiration date of the option"
    ],
    "correct": 1
  },
  {
    "question": "What is the Maturity Date in a financial instrument?",
    "options": [
      "The booking date of the transaction",
      "The date the contract matures and final payments or deliveries are made",
      "The calculation date of accrued interest",
      "The first coupon reset date"
    ],
    "correct": 1
  },
  {
    "question": "What is the Accrual Date in financial accounting?",
    "options": [
      "The bond settlement date",
      "The date from which the interest or result of the transaction begins to accrue",
      "The closing date of the ledger",
      "The balance sheet audit date"
    ],
    "correct": 1
  },
  {
    "question": "To which financial statement does the realized result (realized P&L) of a transaction go?",
    "options": [
      "Balance Sheet",
      "Off-Balance Sheet",
      "Income Statement",
      "Equity Notes"
    ],
    "correct": 2
  },
  {
    "question": "What is the function of the BO (Back Office) profile in Murex?",
    "options": [
      "Configure accounting rules",
      "Book trades in FO",
      "Confirm, settle, and manage the post-trade lifecycle of transactions",
      "Initialize accounting"
    ],
    "correct": 2
  },
  {
    "question": "What is a \"novation\" event in Murex?",
    "options": [
      "Create a new trade from scratch",
      "Replace one of the parties of an existing transaction with a new counterparty",
      "Cancel a trade without replacing it",
      "Change the nominal of a trade without modifying the counterparty"
    ],
    "correct": 1
  },
  {
    "question": "What is the \"confirmation\" workflow in the lifecycle of a trade in Murex?",
    "options": [
      "The initial trade booking process in FO",
      "The process by which both parties verify and validate the terms of the transaction before settlement",
      "The automatic generation of the accounting entry",
      "The calculation of the transaction's MTM"
    ],
    "correct": 1
  },
  {
    "question": "What is the Static Data in Murex?",
    "options": [
      "Real-time market data",
      "The basic configuration information of the system, as counterparties, instruments, curves, and calendars",
      "Historical closed trades",
      "Regulatory reports generated by the system"
    ],
    "correct": 1
  },
  {
    "question": "What does the \"end of day\" (EOD) process do in Murex?",
    "options": [
      "Delete trades from the previous day",
      "Run a series of automatic processes such as valuation, generation of accounting entries, P&L calculation, and operational day close",
      "Reset user profiles",
      "Send automatic confirmations to all counterparties"
    ],
    "correct": 1
  }
];

const classGameAccounts = [
  // Assets (1-25)
  { name: "Cash and Cash Equivalents", category: "asset", desc: "Physical cash and bank accounts." },
  { name: "Mutual Funds (Short-term)", category: "asset", desc: "Short-term investment funds." },
  { name: "Accounts Receivable", category: "asset", desc: "Amounts owed by customers." },
  { name: "Notes Receivable", category: "asset", desc: "Written promises to receive cash." },
  { name: "Other Debtors", category: "asset", desc: "Miscellaneous non-trade receivables." },
  { name: "VAT Input Tax", category: "asset", desc: "Tax credit from purchases." },
  { name: "Merchandise Inventory", category: "asset", desc: "Goods held for sale." },
  { name: "Raw Materials", category: "asset", desc: "Unprocessed production materials." },
  { name: "Work in Progress (WIP)", category: "asset", desc: "Partially completed goods." },
  { name: "Finished Goods", category: "asset", desc: "Completed goods ready for sale." },
  { name: "Prepaid Expenses", category: "asset", desc: "Payments for future services." },
  { name: "Prepaid Income Tax (PPM)", category: "asset", desc: "Advance income tax payments." },
  { name: "Investment in Shares (Trading)", category: "asset", desc: "Shares held for active trading." },
  { name: "Held-to-Maturity Bonds", category: "asset", desc: "Debt securities held until maturity." },
  { name: "Derivative Assets (Forwards/Swaps)", category: "asset", desc: "Derivatives with positive value." },
  { name: "Right-of-Use Lease Assets (IFRS 16)", category: "asset", desc: "Leased operational assets." },
  { name: "Land", category: "asset", desc: "Real estate without buildings." },
  { name: "Buildings", category: "asset", desc: "Constructed business premises." },
  { name: "Machinery and Equipment", category: "asset", desc: "Production machines and tools." },
  { name: "Computer Equipment", category: "asset", desc: "Laptops, servers, and hardware." },
  { name: "Accumulated Depreciation", category: "asset", desc: "Contra-asset: total asset wear-and-tear." },
  { name: "Intangible Assets (Software/Licenses)", category: "asset", desc: "Non-physical operational assets." },
  { name: "Goodwill", category: "asset", desc: "Excess value from acquisitions." },
  { name: "Accumulated Amortization", category: "asset", desc: "Contra-asset: total intangible write-off." },
  { name: "Deferred Tax Asset", category: "asset", desc: "Future tax benefits." },

  // Liabilities (26-43)
  { name: "Accounts Payable", category: "liability", desc: "Obligations to trade suppliers." },
  { name: "Notes Payable", category: "liability", desc: "Written promises to pay." },
  { name: "Salaries Payable", category: "liability", desc: "Unpaid employee compensation." },
  { name: "Accrued Vacation Provision", category: "liability", desc: "Provision for unused leaves." },
  { name: "VAT Output Tax", category: "liability", desc: "Tax collected on sales." },
  { name: "Income Tax Payable", category: "liability", desc: "Current tax liability owed." },
  { name: "Dividends Payable", category: "liability", desc: "Approved distributions owed." },
  { name: "Deferred Revenue", category: "liability", desc: "Prepaid customer contracts." },
  { name: "Customer Advances", category: "liability", desc: "Cash prepayments from buyers." },
  { name: "Short-term Bank Debt", category: "liability", desc: "Loans due within one year." },
  { name: "Current Portion of Long-term Debt", category: "liability", desc: "Long-term debt principal due soon." },
  { name: "Bonds Issued (Long-term)", category: "liability", desc: "Long-term debt securities issued." },
  { name: "Subordinated Debt", category: "liability", desc: "Lower priority debt obligations." },
  { name: "Lease Liabilities (IFRS 16)", category: "liability", desc: "Lease payment obligations." },
  { name: "Derivative Liabilities (Forwards/Swaps)", category: "liability", desc: "Derivatives with negative value." },
  { name: "Provision for Litigations & Contingencies", category: "liability", desc: "Estimated legal dispute liabilities." },
  { name: "Deferred Tax Liability", category: "liability", desc: "Future tax obligations." },
  { name: "Defined Benefit Obligations (Pensions)", category: "liability", desc: "Employee retirement obligations." },

  // Equity (44-50)
  { name: "Paid-in Share Capital", category: "equity", desc: "Capital contributed by shareholders." },
  { name: "Share Premium (Additional Paid-in Capital)", category: "equity", desc: "Capital paid above par value." },
  { name: "Legal Reserve", category: "equity", desc: "Statutory earnings reserve." },
  { name: "Asset Revaluation Reserve (OCI)", category: "equity", desc: "Unrealized fixed asset gains." },
  { name: "Translation Reserve (Foreign Currency)", category: "equity", desc: "Foreign exchange translation reserves." },
  { name: "Retained Earnings", category: "equity", desc: "Accumulated profits kept in firm." },
  { name: "Net Income (Current Period)", category: "equity", desc: "Current fiscal year earnings." }
];

const app = {
  // Simulator game state
  currentGameState: null,
  semanaActualDelJunior: 1,
  currentViewedWeek: 1,
  limiteLockedMalla: 3,
  quizEngine: {
    semana: 1,
    index: 0,
    correctas: 0,
    tiempo: 25 * 60,
    timerInterval: null,
    stage: 1
  },

  classGameState: {
    currentIndex: 0,
    score: 0,
    classified: [], // { name, chosenCategory, correct }
    shuffledAccounts: [], // Shuffled card sequence
    hasStarted: false
  },

  // Application Data & State
  state: {
    db: null,              // Holds active database loaded from localStorage
    serverConnected: false, // Tracks connection status to remote Supabase server
    hasLoadedFromServer: false, // Tracks if database was successfully loaded from server in this session
    activeUser: null,      // Logged in user object
    loginRolee: 'consultant', // Current selected tab in login
    selectedWeekNum: null, // Selected week for consultant detail panel
    inspectedUser: null,   // Currently inspected consultant in Admin View
    inspectedWeekNum: null, // Selected week in Admin Inspector
    activePanelTab: 'checklist', // Active tab in consultant panel (checklist, evaluation, deliverable)
    currentYear: new Date().getFullYear(),
    currentMonth: new Date().getMonth(),       // Dinámico según fecha actual (0-indexed)
    managerCalendarSelectedJuniorId: null,
    selectedExpertsIds: [], // Selected expert IDs for scheduling
    testState: {
      active: false,
      weekNum: null,
      questions: [],
      currentQuestionIdx: 0,
      answers: {}, // questionIdx -> selectedOptionIdx
      timer: null,
      secondsRemaining: 900 // 15 minutes
    },
    charts: {
      consultant: null,
      admin: null,
      inspectResource: null,
      inspectDeviation: null,
      resource: null
    }
  },

  // Initial Seed Data Template (mxboard_schema.json values fallback)
  defaultTemplates: {
    users: [
      { id: "USR-LUANA", name: "Luana Ortega", nombre: "Luana Ortega", email: "luana@murex.cl", password: "admin", role: "admin", rol: "MANAGER", avatar_initials: "LO" },
      { id: "USR-FERNANDO", name: "Fernando Araya", nombre: "Fernando Araya", email: "fernando.araya@murex.cl", password: "password", role: "senior", rol: "SENIOR", avatar_initials: "FA" },
      { id: "USR-SANDRA", name: "Sandra Segura", nombre: "Sandra Segura", email: "sandra.segura@murex.cl", password: "password", role: "senior", rol: "SENIOR", avatar_initials: "SS" },
      { id: "USR-ALEJANDRA", name: "Alejandra González", nombre: "Alejandra González", email: "alejandra.gonzalez@murex.cl", password: "password", role: "senior", rol: "SENIOR", avatar_initials: "AG" },
      { id: "USR-BENJAMIN", name: "Benjamín Cerda", nombre: "Benjamín Cerda", email: "benjamin.cerda@murex.cl", password: "password", role: "tutor", rol: "TUTOR", avatar_initials: "BC" },
      { id: "USR-JUAN", name: "Juan Francisco Orrego", nombre: "Juan Francisco Orrego", email: "juan.orrego@murex.cl", password: "password", role: "tutor", rol: "TUTOR", avatar_initials: "JO" },
      { id: "USR-CAROLINA", name: "Carolina Sepúlveda", nombre: "Carolina Sepúlveda", email: "carolina.sepulveda@murex.cl", password: "password", role: "tutor", rol: "TUTOR", avatar_initials: "CS" },
      { id: "USR-VALENTINA", name: "Valentina Lara", nombre: "Valentina Lara", email: "valentina.lara@murex.cl", password: "password", role: "tutor", rol: "TUTOR", avatar_initials: "VL" },
      { id: "USR-MUREX-LEARNING", name: "Murex Learning", nombre: "Murex Learning", email: "murex.learning@murex.cl", password: "password", role: "senior", rol: "SENIOR", avatar_initials: "ML" },
      { 
        id: "USR-FRANCISCA", 
        name: "Francisca Le Dantec", 
        nombre: "Francisca Le Dantec", 
        email: "francisca.ledantec@murex.cl", 
        password: "password",
        role: "consultant", 
        rol: "JUNIOR", 
        avatar_initials: "FD",
        current_week: 8, 
        semana_actual: 8, 
        avg_score: 80,
        status: "on_track",
        progreso_mallas: Array(12).fill(null).map((_, i) => ({ completado: i < 7, nota: i < 7 ? 80 : null })),
        entry_date: "2026-04-13"
      }
    ],
    
    // Core week templates representing the 12 weeks
    week_templates: [
      {
        week_number: 1,
        title: "General Murex Onboarding and Corporate Business Flow",
        phase: "Induction",
        description: "Murex Modules: MX.3 General / Interfaces Introduction. Objectives: Complete the initial induction and understand the global ecosystem of the platform. Understand the role of Finance & PL.",
        checklist_items: [
          "Complete the viewing and study of the Onboarding Videos module: Murex and Internal Finance (Introductory Block)",
          "Identify the basic interface accesses and log in to the MX.3 Sandbox environment",
          "Map the end-to-end (Front-to-Back) flow of a generic transaction in the platform",
          "Map the organizational location and responsibilities of the Finance & PL area within a typical bank",
          "Recognize the internal organizational chart of the local team and technical escalation channels"
        ],
        knowledge_test: { num_questions: 50, min_passing_score: 70 },
        deliverable: null,
        unlock_condition: "always_unlocked"
      },
      {
        week_number: 2,
        title: "Trade Lifecycle (FX Swap) and Accounting Record Fundamentals",
        phase: "Induction",
        description: "Murex Modules: E-tradepad, Trade Query. Objectives: First approach to MX.3, navigation by groups. Identify roles of FO, MO, BO, Config, Housekeeper. Learn accounting debits/credits for FX Swap.",
        checklist_items: [
          "Complete the viewing and study of the Onboarding Videos module: Murex and Internal Finance (Theoretical FX Swaps Block)",
          "Execute advanced searches and transaction filtering using Trade Query",
          "Simulate the entry and manual injection of contracts using the E-tradepad tool",
          "Identify the operational differences between FO, MO, BO, Config, and Housekeeper groups",
          "Develop and submit the explanatory PPT with theoretical accounting entries for an FX Swap",
          "Balance the journal ledgers of the practical exercise mathematically, ensuring Debit/Credit parity",
          "Complete and pass the automated general knowledge test of the platform",
          "Resolve and pass the Account Classification Challenge (minimum 80% accuracy with 25 accounts)"
        ],
        knowledge_test: { num_questions: 50, min_passing_score: 70 },
        deliverable: { type: "ppt", description: "Detailed presentation (PPT) of accounting entries for an FX Swap (date, trade, terms, debits, and credits)", required: true },
        unlock_condition: "week_1_passed"
      },
      {
        week_number: 3,
        title: "Dynamic Accounts Parameterization, Formulas, and Area Operational Logistics",
        phase: "Induction",
        description: "Murex Modules: Accounting Rules / Simple and Dynamic Accounts. Objectives: Translate accounting flow into MX.3 parameterization. Design dynamic accounts logic and formulas by currency. Understand governance, timesheets, and recurring meetings. Introduction to Options.",
        checklist_items: [
          "Complete the viewing and study of the Onboarding Videos module: Murex and Internal Finance (Accounts and Formulas Block)",
          "Configure and register Simple Accounting Accounts directly in the Sandbox environment",
          "Design Dynamic Accounts structures based on logical currency variables",
          "Implement Formula Accounts applying logical conditions for automated routing of amounts",
          "Correctly complete the weekly Timesheet following the area's imputation rules",
          "Identify the purpose of recurring committees (Chile-Brazil, OPS/Finance, Americas, Townhalls)",
          "Interactively resolve the 'Accounts Game' integrated into the platform's Workspace",
          "Complete and log the viewing of the 21 mandatory videos of the 'Financial Markets for Newcomers' module on MXLearn"
        ],
        knowledge_test: { num_questions: 26, min_passing_score: 70 },
        deliverable: { type: "zip", description: "Parameterized and functional dynamic accounts in the testing environment", required: true },
        unlock_condition: "week_2_passed"
      },
      {
        week_number: 4,
        title: "Accounting Rules Configuration per Financial Instrument",
        phase: "Induction",
        description: "Murex Modules: Accounting Rules Interface / FX Swap and Options Contracts. Objectives: Link the parameterized accounts with the FX Swap rules engine. Create accounts for Options and design their Accounting Rules.",
        checklist_items: [
          "Complete the viewing and study of the Onboarding Videos module: Murex and Internal Finance (Accounting Rules and Options Block)",
          "Successfully link the parameterized accounts with the FX Swap rules engine",
          "Create specific master accounting accounts for processing Financial Options",
          "Design and activate assignment accounting rules (Accounting Rules) for Options contracts",
          "Validate that supplementary material and derivatives guides have been reviewed by injecting examples"
        ],
        knowledge_test: { num_questions: 2, min_passing_score: 70 },
        deliverable: { type: "zip", description: "Configuration and injection in the test environment of operational accounting rules for FX Swap and Options", required: true },
        unlock_condition: "week_3_passed"
      },
      {
        week_number: 5,
        title: "Parameterization and Control of Flow Rules",
        phase: "Structured Learning",
        description: "Murex Modules: Accounting Flow Rules. Objectives: Understand, design, and implement flow rules within the MX.3 accounting engine to optimize processing.",
        checklist_items: [
          "Complete the viewing and study of the Onboarding Videos module: Murex and Internal Finance (Advanced Flow Rules Block)",
          "Explain the technical difference between a traditional accounting rule and a flow rule (Flow Rule)",
          "Design the logical processing map of accounting cash flows for complex transactions",
          "Parameterize and activate a complete set of Accounting Flow Rules in the test environment",
          "Run the battery of validation tests and manual monitoring of injected flows",
          "Document and deconstruct minor flow routing discrepancies without senior intervention"
        ],
        knowledge_test: { num_questions: 2, min_passing_score: 70 },
        deliverable: { type: "zip", description: "Prototype of flow rules matrix configured in the Sandbox", required: true },
        unlock_condition: "week_4_passed"
      },
      {
        week_number: 6,
        title: "Daily Cycle Closure, Mark-to-Market Valuation (MTM), and End of Day (EOD) Processing",
        phase: "Structured Learning",
        description: "Murex Modules: End of Day (EOD) Processing / Mark-to-Market (MTM) Engine. Objectives: Validate accounting by booking trades. Post official rules. Inject MTM valuations and execute EOD scripts.",
        checklist_items: [
          "Complete the viewing and study of the Onboarding Videos module: Murex and Internal Finance (EOD and MTM Engines Block)",
          "Officially publish (post) accounting rules for FX Swap and Options in simulated production",
          "Execute real transactions (book trades) and audit that the accounting impacts cleanly",
          "Configure and inject market values to the platform using the Mark-to-Market (MTM) engine",
          "Schedule, launch, and monitor the execution of automated End of Day (EOD) closing scripts",
          "Generate, extract, and reconcile the consolidated accounting journal report post EOD processing"
        ],
        knowledge_test: { num_questions: 2, min_passing_score: 70 },
        deliverable: { type: "pdf", description: "Balanced accounting journal report post full simulation of an End of Day (EOD) close for FX Swaps and Options", required: true },
        unlock_condition: "week_5_passed"
      },
      {
        week_number: 7,
        title: "Advanced Accounting Events, Past Corrections (Fixing), and Introduction to Futures",
        phase: "Structured Learning",
        description: "Murex Modules: Market Data / Fixing Engine / Financial Futures. Objectives: Management of complex events, value date insertion in the past, and introduction to Futures.",
        checklist_items: [
          "Complete the viewing and study of the Onboarding Videos module: Murex and Internal Finance (Past Events and Futures Block)",
          "Manually insert complex transactions with value date parameterized in the past (Backdated trades)",
          "Execute price and index correction processes using the Fixing Engine",
          "Resolve accounting consistency breaks generated by lags in market events",
          "Identify specifications of the newly introduced financial instrument: Futures",
          "Create the base accounting structure for operational processing of the Futures module"
        ],
        knowledge_test: { num_questions: 2, min_passing_score: 70 },
        deliverable: { type: "pdf", description: "Accounting record corrected in the past and base parameterization of the Futures module", required: true },
        unlock_condition: "week_6_passed"
      },
      {
        week_number: 8,
        title: "Dress Rehearsal for Technical Autonomy",
        phase: "Structured Learning",
        description: "Murex Modules: All previously integrated modules (Murex Full Stack Finance). Objectives: Demonstrate control of FX Swap, Options, Futures, and defend logic before tutor.",
        checklist_items: [
          "Complete the viewing and study of the Onboarding Videos module: Murex and Internal Finance (Consolidation and Ishikawa Block)",
          "Execute an end-to-end transactional flow (booking, accounting, MTM, and EOD) without direct assistance expert",
          "Verbally defend before the Tutor the mathematical and engineering logic behind each account and rule created",
          "Demonstrate proficiency in resolving typical platform issues (Sandbox Troubleshooting)",
          "Present the test environment log completely balanced and free of consistency errors",
          "Obtain approval sign-off from the Tutor on the unified Checklist to authorize the promotion to production"
        ],
        knowledge_test: { num_questions: 2, min_passing_score: 70 },
        deliverable: { type: "zip", description: "Final presentation of the fully parameterized test environment, executing end-to-end transactions in front of the mentor", required: true },
        unlock_condition: "week_7_passed"
      },
      {
        week_number: 9,
        title: "Go Live with the Finance Team",
        phase: "Go Live",
        description: "Murex Modules: Integrated Production Environment (Finance & PL). Objectives: Deploy capabilities on real tasks for FX Swap, FX Forward, Options, and Futures.",
        checklist_items: [
          "Complete the viewing and study of the Onboarding Videos module: Murex and Internal Finance (Production Safety Protocols Block)",
          "Configure secure and authenticated access to the official Production environment of the Finance & PL area",
          "Process the first assigned real transactions of FX Swap and FX Forward instruments",
          "Directly monitor productive accounting for Options and Futures transactions",
          "Extract daily operational reports in the production environment for validation with the technical team",
          "Decrease the reactive Support Dependency Index (SDI), operating under passive supervision"
        ],
        knowledge_test: { num_questions: 2, min_passing_score: 70 },
        deliverable: { type: "pdf", description: "First productive transactions directly signed off", required: true },
        unlock_condition: "week_8_passed"
      },
      {
        week_number: 10,
        title: "Master Data Maintenance (Housekeeper) and CTT Creation",
        phase: "Go Live",
        description: "Murex Modules: Housekeeper / CTT Configuration. Objectives: Advanced use of Housekeeper for auditing and cleaning. Create CTT commercial parameterization templates.",
        checklist_items: [
          "Complete the viewing and study of the Onboarding Videos module: Murex and Internal Finance (Housekeeper and Table Maintenance Block)",
          "Access and securely navigate the Housekeeper master system maintenance module",
          "Run basic diagnostics and audits on the health and consistency of system internal tables",
          "Design and register a commercial configuration template (CTT - Configuration Template)",
          "Attend and take notes of the technical Masterclass delivered by the assigned Senior consultant",
          "Validate with the Manager the topic of the supplementary masterclass of the week"
        ],
        knowledge_test: null,
        deliverable: { type: "zip", description: "CTT structure configured and validated without consistency errors", required: true },
        unlock_condition: "week_9_passed"
      },
      {
        week_number: 11,
        title: "Calendars Management, World Holidays, and Accruals Processing",
        phase: "Go Live",
        description: "Murex Modules: Configuration Templates / Market Calendars / Accrual Engine. Objectives: Configure geographical calendars, world holidays, and accruals/amortizations.",
        checklist_items: [
          "Complete the viewing and study of the Onboarding Videos module: Murex and Interest Curves Block",
          "Configure geographical tables of international banking holidays in global system templates",
          "Link financial market calendars with projected cash flows in test portfolios",
          "Parameterize and calibrate the accounting amortization and accruals engine (Accrual Engine)",
          "Attend the Masterclass delivered by Juan Francisco Orrego on Configuration Templates",
          "Evaluate through simulation the financial impact of an unforeseen holiday on portfolio accruals"
        ],
        knowledge_test: { num_questions: 2, min_passing_score: 70 },
        deliverable: { type: "zip", description: "Financial calendar parameterized with accrual logic applied to a test portfolio", required: true },
        unlock_condition: "week_10_passed"
      },
      {
        week_number: 12,
        title: "Accounting Liquidation Processes (Liquidation)",
        phase: "Closing",
        description: "Murex Modules: Liquidation / Settlement Processing. Objectives: Trade liquidation flows and impact on balance sheet accounts of Finance & PL.",
        checklist_items: [
          "Complete the viewing and study of the Onboarding Videos module: Murex and Liquidation Block",
          "Identify the lifecycle of the cash flow extinction of financial obligations (Settlement/Liquidation)",
          "Parameterize accounting rules for final closing of operations due to liquidation",
          "Attend the specialized technical Masterclass on the Liquidation module",
          "Execute liquidation processing in the platform and balance the impact on balance sheet accounts",
          "Independently resolve a case of accounting break or mismatch in a simulated liquidation"
        ],
        knowledge_test: { num_questions: 2, min_passing_score: 80 },
        deliverable: { type: "pdf", description: "Parameterization of a trade liquidation flow in the sandbox environment", required: true },
        unlock_condition: "week_11_passed"
      }
    ],

    questions: {
      "1": bancoPreguntasSemana1.map(item => ({
        question: item.q,
        options: item.opts.map(o => o.replace(/^[A-D]\)\s*/, '')),
        correct: item.ans
      })),
      "2": bancoPreguntasSemana2,
      "3": [
        {
          question: "What is the Town Hall meeting?",
          options: [
            "Monthly meeting in Chile to review projects",
            "Annual meeting of Murex Americas to review projects",
            "Semi-annual meeting of Murex Chile to review projects",
            "Quarterly meeting of Murex Americas to review projects"
          ],
          correct: 3
        },
        {
          question: "What is done in the Finance & P&L Chile Weekly Meeting?",
          options: [
            "Discuss common team topics",
            "Describe the current status of assigned projects",
            "Talk about the team and HR relationship",
            "Delivery of updated JIRAs"
          ],
          correct: 1
        },
        {
          question: "What is done in the Monthly Meeting with Finance Americas?",
          options: [
            "Discuss common topics",
            "Present requirements by region",
            "Describe the current status of projects by region",
            "Delivery of updated JIRAs"
          ],
          correct: 2
        },
        {
          question: "What is done in the Monthly Meeting with OPS Chile/NY?",
          options: [
            "Discuss common back office topics",
            "Present back office requests and client account reconciliations",
            "Describe the current status of projects by region",
            "Delivery of updated client JIRAs regarding transaction processing"
          ],
          correct: 3
        },
        {
          question: "What would be the correct code in the timesheet to schedule the Finance Weekly meeting?",
          options: [
            "AMER-CS-FIN PL-TEAM – GROWING OTHERS",
            "AMER-CS-FIN PL-TEAM – INTERNAL SUPPORT",
            "AMER-CS-FIN PL-TEAM – RG-CAREER MANAGEMENT & HR",
            "AMER-CS-FIN PL-TEAM – ORG-MEETING"
          ],
          correct: 3
        },
        {
          question: "What is an FX Option?",
          options: [
            "A contract that obligates both parties to exchange two currencies at a fixed exchange rate on a future date",
            "A derivative contract that gives the buyer the right, but not the obligation, to buy or sell a currency at an agreed price on or before an expiration date, in exchange for the payment of a premium",
            "An agreement to exchange interest rate flows between two counterparties in different currencies",
            "A standardized contract traded on an exchange to buy currencies at a spot price"
          ],
          correct: 1
        },
        {
          question: "In Step 1 of an FX Option Buy Call, which account goes to Debit in the OBS Commitment of the currency to be received (Buy currency)?",
          options: [
            "Contingent Contra",
            "Cont Buy Call Paybl",
            "Cont Buy Call Recbl",
            "Deferred Loss"
          ],
          correct: 2
        },
        {
          question: "In Step 1 of an FX Option Buy Call, which account goes to Credit in the OBS Commitment of the currency to be paid (Sell currency)?",
          options: [
            "Cont Buy Call Recbl",
            "Cont Buy Call Paybl",
            "Unrealized Asset",
            "Premium Payable"
          ],
          correct: 1
        },
        {
          question: "In Step 2 (Cash Settlement of the premium), which account is debited and which is credited?",
          options: [
            "Debit: Cash Nostro / Credit: Premium Payable",
            "Debit: Deferred Loss / Credit: Premium Expense",
            "Debit: Premium Payable / Credit: Cash Nostro",
            "Debit: MTM Gain / Credit: Unrealized Asset"
          ],
          correct: 2
        },
        {
          question: "In Step 3 (Value Measurement with gain), what does the accounting entry reflect?",
          options: [
            "Debit: MTM Gain / Credit: Unrealized Asset",
            "Debit: Unrealized Asset / Credit: MTM Gain",
            "Debit: Deferred Loss / Credit: Premium Expense",
            "Debit: Cash Nostro / Credit: Unrealized Asset"
          ],
          correct: 1
        },
        {
          question: "In Step 4 at maturity, what happens to the OBS Uncommitment of the currency to be received?",
          options: [
            "Cont Buy Call Recbl is debited and Contingent Contra is credited",
            "Contingent Contra is debited and Cont Buy Call Recbl is credited",
            "Premium Expense is debited and Deferred Loss is credited",
            "Unrealized Asset is debited and MTM Gain is credited"
          ],
          correct: 1
        },
        {
          question: "You bought a Call on EUR/USD with strike 1.10 and current spot price is 1.15. What is your situation and what do you expect to happen?",
          options: [
            "You are Out of the Money and expect the spot to fall below the strike to exercise",
            "You are In the Money because the spot exceeds the strike, and if you exercise you buy EUR cheaper than the market, so your expectation was for EUR to appreciate",
            "You are In the Money but it makes no sense to exercise because the spot has already exceeded the strike",
            "You are At the Money and there is no profit or loss in exercising the option"
          ],
          correct: 1
        },
        {
          question: "You sold a Put on USD/CLP with strike 900. The current spot is at 870. What is your real exposure?",
          options: [
            "You have no exposure because the spot is below the strike and the option will not be exercised",
            "You have a profit because the buyer will not want to exercise",
            "The buyer has an incentive to exercise because they can sell you USD at 900 when the market pays 870, and you as the seller are obligated to buy at that price, generating a loss of 30 pesos per USD nominal",
            "Your maximum loss is limited to the premium you received when selling the option"
          ],
          correct: 2
        },
        {
          question: "A European FX Option on GBP/USD has strike 1.25 and expires in 30 days. The spot today is 1.27. At what point can it be exercised and what does it mean that it is European?",
          options: [
            "It can be exercised at any time before expiration because it is In the Money",
            "It can only be exercised exactly on the expiration date, regardless of where the spot is during the life of the option",
            "It can be exercised only if the spot exceeds 1.30 before expiration",
            "It can be exercised on any date when the spot is above the strike"
          ],
          correct: 1
        },
        {
          question: "You have a long position in a Call and the underlying does not move for weeks. What happens to the value of your option even if the spot remains constant?",
          options: [
            "The value remains stable because the spot did not change",
            "The value increases because the market anticipates future movement",
            "The value progressively decreases due to time decay (negative Theta), since each day that passes without movement reduces the temporal value of the option",
            "The value depends solely on Delta, not on time"
          ],
          correct: 2
        },
        {
          question: "In an FX Option, what is the difference between the spot price and the fixed/strike price, and how does it determine if the option has intrinsic value?",
          options: [
            "The spot price is the one agreed upon at the start of the contract and the strike is the prevailing market price at maturity",
            "The spot price is the exchange rate prevailing in the market at this moment, while the strike or fixed price is the one agreed in the contract. The intrinsic value is the positive difference between the two: in a Call it is max(Spot - Strike, 0) and in a Put it is max(Strike - Spot, 0)",
            "Both prices are equal at the time of booking and diverge only if there is volatility",
            "The fixed price is used only for American options and the spot for European ones"
          ],
          correct: 1
        },
        {
          question: "What is the Trade Date?",
          options: [
            "The date on which funds are exchanged between counterparties",
            "The date on which the transaction is agreed and registered, establishing all terms: price, nominal, counterparty, and maturity",
            "The date on which the contract expires and final payments are made",
            "The date from which the interest accrual begins"
          ],
          correct: 1
        },
        {
          question: "What is the Settlement Date?",
          options: [
            "The date on which both parties sign the contract",
            "The date on which the MTM of the transaction is calculated",
            "The date on which the exchange of funds or assets between counterparties actually occurs, which can be T+1, T+2, or as agreed",
            "The maturity date of the financial instrument"
          ],
          correct: 2
        },
        {
          question: "What is the Value Date in an FX transaction?",
          options: [
            "The date on which the transaction is entered into the Murex system",
            "The date on which the trade generates economic value for the book, meaning when funds are available and the transaction produces real financial effect, typically coinciding with the Settlement Date",
            "The date on which the fixing of the currency is calculated",
            "The date on which the client confirms the terms of the transaction"
          ],
          correct: 1
        },
        {
          question: "What is the Fixing in an FX transaction?",
          options: [
            "The spot price agreed at the time of booking the trade",
            "The process by which errors in the exchange rate of an already booked transaction are corrected",
            "The official observation of the market exchange rate at a specific date and time, published by a reference body such as the ECB or the Central Bank, which is used to settle instruments whose payment depends on that value",
            "The daily MTM adjustment of currency positions"
          ],
          correct: 2
        },
        {
          question: "What is the Maturity Date?",
          options: [
            "The date on which the contract is agreed between the parties",
            "The date on which the premium of an option is settled",
            "The date on which the contract reaches its end and the agreed final payments or deliveries are made, closing all obligations of both parties",
            "The date from which the P&L of the position begins to be calculated"
          ],
          correct: 2
        },
        {
          question: "What is the difference between the Trade Date and the Value Date in an FX Spot?",
          options: [
            "They are always the same date",
            "The Trade Date is when the transaction is agreed and the Value Date is when funds are exchanged, typically two business days later in a standard FX Spot (T+2)",
            "The Value Date always occurs one month after the Trade Date",
            "The Trade Date applies only to derivatives and the Value Date only to spot transactions"
          ],
          correct: 1
        },
        {
          question: "In an FX Option, what is the relationship between the Expiry Date and the Settlement Date?",
          options: [
            "They are always the same date",
            "The Expiry Date is when the option can no longer be exercised and it is determined if there is intrinsic value; the Settlement Date is when, if exercised, the actual exchange of currencies occurs, which generally happens T+2 after Expiry",
            "The Settlement Date always occurs before the Expiry Date",
            "The Expiry Date applies only to American options"
          ],
          correct: 1
        },
        {
          question: "What happens accounting-wise on the Trade Date of a transaction before the Settlement Date arrives?",
          options: [
            "Nothing is recorded until the exchange of funds occurs",
            "Off-Balance Sheet commitments are recorded reflecting the agreed rights and obligations, without any actual cash movement yet",
            "Cash movement is recorded directly on the Balance Sheet",
            "MTM is recorded as realized income on the Income Statement"
          ],
          correct: 1
        },
        {
          question: "What is the Accrual Date and how does it differ from the Trade Date?",
          options: [
            "They are the same date in all financial instruments",
            "The Accrual Date is the date from which an income or expense starts to accrue, such as the interest on a bond or the premium of an option, and it may or may not coincide with the Trade Date depending on the instrument and the accounting convention applied",
            "The Accrual Date always coincides with the Settlement Date",
            "The Accrual Date only applies to fixed-income instruments, not to FX derivatives"
          ],
          correct: 1
        },
        {
          question: "If the Trade Date of an FX Forward is Monday, June 2nd, and the contract matures in 3 months, which dates are relevant and what is the correct order?",
          options: [
            "Trade Date → Maturity Date → Settlement Date → Value Date",
            "Trade Date → Value Date (T+2 spot) → Maturity Date → Settlement Date, where Settlement typically occurs T+2 after the Maturity Date",
            "Value Date → Trade Date → Settlement Date → Maturity Date",
            "All dates are equal in an FX Forward"
          ],
          correct: 1
        }
      ],
      "4": [
        {
          question: "What is the purpose of the Accounting Rules Interface in MX.3?",
          options: [
            "Design graphical reports for external clients.",
            "Link the dynamic/formula accounts created to automate the assignment and routing of journal entries in FX Swaps and Options.",
            "Configure user access to the production environment."
          ],
          correct: 1
        },
        {
          question: "When configuring accounting rules for a Financial Option, what should be considered?",
          options: [
            "The option premium and its specific accounting accounts to reflect fair valuation (Premium/Liability).",
            "Only the nominal value of the underlying asset.",
            "The time zone of the trade's issuance country."
          ],
          correct: 0
        }
      ],
      "5": [
        {
          question: "What do the Accounting Flow Rules optimize in the MX.3 accounting engine?",
          options: [
            "The internet speed of local servers.",
            "The routing and processing of cash flow movements and intermediate events within the accounting engine.",
            "Exporting financial statements to PDF files."
          ],
          correct: 1
        },
        {
          question: "What is required to test flow rules in the Sandbox?",
          options: [
            "A simulation with simulated data and subsequent validation of journal consistency.",
            "The complete restart of the production database.",
            "The Central Bank's approval synchronously."
          ],
          correct: 0
        }
      ],
      "6": [
        {
          question: "What is Mark-to-Market (MTM) in MX.3?",
          options: [
            "The accounting valuation of a financial instrument at current market prices.",
            "The physical printing of accounting journals.",
            "The office cash reconciliation process."
          ],
          correct: 0
        },
        {
          question: "What does the accounting End of Day (EOD) process represent?",
          options: [
            "The physical shutdown of the area's computers.",
            "The execution of automated daily accounting and financial closing scripts to process trades and post official rules.",
            "A daily 15-minute support team meeting."
          ],
          correct: 1
        }
      ],
      "7": [
        {
          question: "What is the Fixing Engine in MX.3?",
          options: [
            "The engine responsible for determining and fixing interest rates or market reference indices for flow settlement.",
            "An automatic database repair tool.",
            "The screen to modify user passwords."
          ],
          correct: 0
        },
        {
          question: "What is the consequence of registering a transaction with a value date in the past (Backdated Trade)?",
          options: [
            "The trade is automatically cancelled.",
            "The system generates retrospective adjustment events to correct historical accounting and reflect the corresponding accrued effects.",
            "A fraud alert is generated in the Central Bank."
          ],
          correct: 1
        }
      ],
      "8": [
        {
          question: "What is the main objective of the Dress Rehearsal day before the Tutor?",
          options: [
            "Design sales slides for new clients.",
            "Demonstrate autonomous control of the parameterized testing environment by executing end-to-end transactions (FX Swap, Options, Futures).",
            "Present the monthly hours report."
          ],
          correct: 1
        },
        {
          question: "What does demonstrating control of Murex Full Stack Finance imply?",
          options: [
            "Master all previously integrated modules and the business logic behind each account and parameterized accounting rule.",
            "Knowing how to program in the platform's C++ language.",
            "Having root access to the company's Unix servers."
          ],
          correct: 0
        }
      ],
      "9": [
        {
          question: "When performing the Go Live in the Finance production environment, what is the critical step?",
          options: [
            "Safely and certified operate real transactions of FX Swap, FX Forward, Options, and Futures.",
            "Delete the Sandbox test transaction history.",
            "Directly modify global parameters of the main server."
          ],
          correct: 0
        }
      ],
      "11": [
        {
          question: "How does the world holiday configuration impact the MX.3 Accrual Engine?",
          options: [
            "It has no accounting impact.",
            "It accurately determines business days for interest accrual and amortization, adjusting payment dates and accounting cash flows.",
            "It blocks the valuation of all rate derivatives."
          ],
          correct: 1
        },
        {
          question: "What is the Accrual Engine?",
          options: [
            "The calculation engine responsible for periodic amortization and interest accrual of investment and hedging instruments.",
            "A tool to import Excel templates.",
            "The personnel attendance control system."
          ],
          correct: 0
        }
      ],
      "12": [
        {
          question: "What does the liquidation/settlement process represent in MX.3?",
          options: [
            "Dismissal of personnel or termination of commercial projects.",
            "The flows of extinguishing financial obligations and accounting closures due to transaction settlement in balance sheet accounts.",
            "The sale of office fixed assets."
          ],
          correct: 1
        },
        {
          question: "Under the accounting perspective of Finance & PL, what is validated when reviewing settlement entries?",
          options: [
            "The consistency of accounting journals and the correct netting of clearing and settlement accounts.",
            "The color of the charts in the control panel.",
            "The network data transmission speed."
          ],
          correct: 0
        }
      ]
    }
  },

  // Setup/Initialize App
  async init() {
    await this.loadDatabase();
    this.checkSession();
    this.updateClock();
    setInterval(() => this.updateClock(), 60000);

    // Close expert selection search suggestions when clicking outside
    document.addEventListener('click', (event) => {
      const dropdown = document.getElementById('search-results-floating');
      const trigger = document.getElementById('expert-search-input');
      if (dropdown && !dropdown.classList.contains('hidden')) {
        if (!dropdown.contains(event.target) && !trigger.contains(event.target)) {
          dropdown.classList.add('hidden');
        }
      }
    });

    // Setup security for test and evaluation screens
    this.activarSeguridadAnticopia();
  },

  activarSeguridadAnticopia() {
    const targets = ['quiz-engine-screen', 'evaluation-detail-viewer'];
    
    targets.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      // 1. Bloquear el Clic Derecho (Menú Contextual)
      el.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        this.showToast("🔒 MUREX SECURITY ALERT: The context menu is disabled in this section.", "warning");
      });

      // 2. Bloquear el comando de Copiar (Ctrl + C o Cmd + C)
      el.addEventListener('copy', (event) => {
        event.preventDefault();
        this.showToast("⚠️ PROHIBITED ACTION: Copying technical evaluation material is not allowed.", "danger");
      });

      // 3. Bloquear el comando de Cortar (Ctrl + X)
      el.addEventListener('cut', (event) => {
        event.preventDefault();
      });

      // 4. Bloquear el Arrastre de Texto (Drag and Drop)
      el.addEventListener('dragstart', (event) => {
        event.preventDefault();
      });
    });
  },

  // Database / Storage Methods
  async loadDatabase() {
    this.state.serverConnected = false;
    this.state.hasLoadedFromServer = false;
    const isLocalFileOrDev = window.location.protocol === 'file:' || 
                             window.location.origin === 'null' ||
                             (window.location.hostname === 'localhost' && window.location.port !== '3000') ||
                             (window.location.hostname === '127.0.0.1' && window.location.port !== '3000');
    const apiBase = isLocalFileOrDev ? 'http://localhost:3000' : '';
    try {
      const response = await fetch(`${apiBase}/api/db`);
      if (response.ok) {
        const data = await response.json();
        this.state.serverConnected = true;
        this.state.hasLoadedFromServer = true;
        if (data.empty) {
          console.warn("Database on server is empty. Seeding defaults...");
          this.resetDB();
          this.updateDBStatusUI();
          return;
        }
        this.state.db = data;
        this.updateAllTraineesScores();
        
        // Ensure backward compatibility for calendar events
        if (this.state.db.calendar_events) {
          this.state.db.calendar_events.forEach(e => {
            const isInternal = e.type === 'MUREX_LEARNING' || 
                               e.tipo_sesion === 'MUREX_LEARNING' ||
                               e.id === 'ev-2-scale-agile' ||
                               e.id === 'ev-2-explain-murex' ||
                               e.id === 'ev-2-edde-salim';
            e.contabilizar_ids = !isInternal;

            if (isInternal) {
              e.expert_id = 'USR-MUREX-LEARNING';
              e.organizador_id = 'USR-MUREX-LEARNING';
            }

            if (e.tipo_sesion === 'MUREX_LEARNING' || e.type === 'MUREX_LEARNING') {
              e.bloqueado_edicion = true;
              e.estado_confirmacion = 'FIXED';
            } else {
              if (e.bloqueado_edicion === undefined) e.bloqueado_edicion = false;
              if (!e.estado_confirmacion) {
                if (e.status === 'ejecutada' || e.status === 'aprobada' || e.status === 'aprobado' || e.status === 'ejecutado') {
                  e.estado_confirmacion = 'FIXED';
                } else if (e.status === 'rechazada' || e.status === 'rechazado') {
                  e.estado_confirmacion = 'CANCELLED';
                } else {
                  e.estado_confirmacion = 'PENDIENTE_INVITADO';
                }
              }
            }
            if (!e.organizador_id) {
              if (e.type === 'extra_support' || e.status === 'solicitada' || e.status === 'pendiente_aprobacion') {
                e.organizador_id = e.junior_id;
              } else {
                e.organizador_id = e.expert_id || 'USR-LUANA';
              }
            }
          });
        }
        
        // Defensive check: ensure all consultants have a progress record in consultant_progress to prevent UI crashes
        this.state.db.users.forEach(u => {
          if (u.role === 'consultant' && (!this.state.db.consultant_progress || !this.state.db.consultant_progress[u.id])) {
            if (!this.state.db.consultant_progress) this.state.db.consultant_progress = {};
            this.state.db.consultant_progress[u.id] = {
              completed_weeks: [],
              checklist_states: {},
              test_scores: {},
              test_attempts: {},
              test_times: {},
              deliverables: {},
              comments: {},
              game_scores: {}
            };
          }
        });

        // Sync structures and templates
        const oldTemplatesStr = JSON.stringify(this.state.db.week_templates || []);
        const newTemplatesStr = JSON.stringify(this.defaultTemplates.week_templates);
        const oldQuestionsStr = JSON.stringify(this.state.db.questions || {});
        const newQuestionsStr = JSON.stringify(this.defaultTemplates.questions);
        
        const needsDBSave = (oldTemplatesStr !== newTemplatesStr) || (oldQuestionsStr !== newQuestionsStr);

        this.state.db.week_templates = JSON.parse(newTemplatesStr);
        this.state.db.questions = JSON.parse(newQuestionsStr);
        
        if (this.state.db.consultant_progress) {
          for (const userId in this.state.db.consultant_progress) {
            const progress = this.state.db.consultant_progress[userId];
            if (progress.completed_weeks) {
              progress.completed_weeks = progress.completed_weeks.filter(w => w <= 12);
            }
            if (!progress.game_scores) {
              progress.game_scores = {};
            }
          }
        }
        
        // Sync role properties
        this.state.db.users.forEach(u => {
          if (u.rol && !u.role) {
            if (u.rol === 'MANAGER') u.role = 'admin';
            else if (u.rol === 'TUTOR') u.role = 'tutor';
            else if (u.rol === 'SENIOR') u.role = 'senior';
            else if (u.rol === 'JUNIOR') u.role = 'consultant';
          }
          if (u.role && !u.rol) {
            if (u.role === 'admin') u.rol = 'MANAGER';
            else if (u.role === 'tutor') u.rol = 'TUTOR';
            else if (u.role === 'senior') u.rol = 'SENIOR';
            else if (u.role === 'consultant') u.rol = 'JUNIOR';
          }
        });
        this.autoMigrateFrancisca();
        this.updateDBStatusUI();
        if (needsDBSave) {
          console.log("Database template schema changes detected. Syncing with server...");
          this.saveDatabase();
        }
        return;
      }
    } catch (e) {
      console.warn("Could not connect to backend server. Falling back to local storage.", e);
    }

    // Local Storage Fallback
    const rawDB = localStorage.getItem('mxboard_db_v3');
    if (rawDB) {
      try {
        this.state.db = JSON.parse(rawDB);
        const requiredKeys = ['users', 'week_templates', 'consultant_progress', 'questions', 'tutor_junior_mapping', 'mentoring_logs', 'smtp_outbox', 'troubleshooting_db', 'cert_checklists', 'calendar_events'];
        const hasAllKeys = requiredKeys.every(key => this.state.db && this.state.db[key]);
        if (!hasAllKeys) {
          console.warn("Schema out of date or incomplete. Resetting database...");
          this.resetDB();
        } else {
          // Initialize evaluation history if missing
          if (!this.state.db.historial_evaluaciones) {
            this.state.db.historial_evaluaciones = [];
          }
          // ALWAYS update templates and questions with the latest ones in the code to keep localStorage in sync
          this.state.db.week_templates = JSON.parse(JSON.stringify(this.defaultTemplates.week_templates));
          this.state.db.questions = JSON.parse(JSON.stringify(this.defaultTemplates.questions));
          
          // Sanitize completed weeks for all users to ensure they stay within 1-12 weeks limit
          if (this.state.db.consultant_progress) {
            for (const userId in this.state.db.consultant_progress) {
              const progress = this.state.db.consultant_progress[userId];
              if (progress.completed_weeks) {
                progress.completed_weeks = progress.completed_weeks.filter(w => w <= 12);
              }
              if (!progress.game_scores) {
                progress.game_scores = {};
              }
            }

            // Forzar desbloqueo de Semana 3 para Francisca desactivado para iniciar desde 0.
            if (this.state.db.consultant_progress["USR-FRANCISCA"]) {
              // No se fuerza ningún progreso inicial en esta versión.
            }
          }
          this.autoMigrateFrancisca();
          this.saveDatabase();
          
          // Sync role and rol properties on loaded users
          this.state.db.users.forEach(u => {
            if (u.rol && !u.role) {
              if (u.rol === 'MANAGER') u.role = 'admin';
              else if (u.rol === 'TUTOR') u.role = 'tutor';
              else if (u.rol === 'SENIOR') u.role = 'senior';
              else if (u.rol === 'JUNIOR') u.role = 'consultant';
            }
            if (u.role && !u.rol) {
              if (u.role === 'admin') u.rol = 'MANAGER';
              else if (u.role === 'tutor') u.rol = 'TUTOR';
              else if (u.role === 'senior') u.rol = 'SENIOR';
              else if (u.role === 'consultant') u.rol = 'JUNIOR';
            }
          });
          
          // Ensure backward compatibility for calendar events
          if (this.state.db.calendar_events) {
            this.state.db.calendar_events.forEach(e => {
              const isInternal = e.type === 'MUREX_LEARNING' || 
                                 e.tipo_sesion === 'MUREX_LEARNING' ||
                                 e.id === 'ev-2-scale-agile' ||
                                 e.id === 'ev-2-explain-murex' ||
                                 e.id === 'ev-2-edde-salim';
              e.contabilizar_ids = !isInternal;

              if (isInternal) {
                e.expert_id = 'USR-MUREX-LEARNING';
                e.organizador_id = 'USR-MUREX-LEARNING';
              }

              if (e.tipo_sesion === 'MUREX_LEARNING' || e.type === 'MUREX_LEARNING') {
                e.bloqueado_edicion = true;
                e.estado_confirmacion = 'FIXED';
              } else {
                if (e.bloqueado_edicion === undefined) e.bloqueado_edicion = false;
                if (!e.estado_confirmacion) {
                  if (e.status === 'ejecutada' || e.status === 'aprobada' || e.status === 'aprobado' || e.status === 'ejecutado') {
                    e.estado_confirmacion = 'FIXED';
                  } else if (e.status === 'rechazada' || e.status === 'rechazado') {
                    e.estado_confirmacion = 'CANCELLED';
                  } else {
                    e.estado_confirmacion = 'PENDIENTE_INVITADO';
                  }
                }
              }
              if (!e.organizador_id) {
                if (e.type === 'extra_support' || e.status === 'solicitada' || e.status === 'pendiente_aprobacion') {
                  e.organizador_id = e.junior_id;
                } else {
                  e.organizador_id = e.expert_id || 'USR-LUANA';
                }
              }
            });
          }
        }
      } catch (e) {
        console.error("Error loading the Database, restarting...", e);
        this.resetDB();
      }
    } else {
      this.resetDB();
    }
    this.updateDBStatusUI();
  },

  updateDBStatusUI() {
    const badge = document.getElementById('db-status-badge');
    if (!badge) return;
    
    if (this.state.serverConnected) {
      badge.className = 'db-status-badge connected';
      badge.innerHTML = '<span class="status-dot"></span><i class="ti ti-cloud-check"></i> Cloud Sync';
      badge.title = 'Conectado a la base de datos remota (Supabase)';
    } else {
      badge.className = 'db-status-badge disconnected';
      badge.innerHTML = '<span class="status-dot"></span><i class="ti ti-cloud-off"></i> Local Fallback';
      badge.title = 'No connection to server (Local Mode). If you are on Vercel, make sure to configure the DATABASE_URL environment variable.';
    }
  },

  autoMigrateFrancisca() {
    if (!this.state.db || !this.state.db.users) return;
    
    let needsSave = false;

    // 1. Force Francisca to Week 8 if she is in an older week
    const fran = this.state.db.users.find(u => u.id === 'USR-FRANCISCA');
    if (fran && (fran.current_week || fran.semana_actual || 1) < 8) {
      console.log("Auto-migrating Francisca to Week 8...");
      fran.current_week = 8;
      fran.semana_actual = 8;
      fran.progreso_mallas = Array(12).fill(null).map((_, i) => ({ completado: i < 7, nota: i < 7 ? 80 : null }));
      
      if (this.state.db.consultant_progress && this.state.db.consultant_progress["USR-FRANCISCA"]) {
        const progress = this.state.db.consultant_progress["USR-FRANCISCA"];
        progress.completed_weeks = [1, 2, 3, 4, 5, 6, 7];
        if (!progress.checklist_states) progress.checklist_states = {};
        if (!progress.test_scores) progress.test_scores = {};
        if (!progress.test_attempts) progress.test_attempts = {};
        if (!progress.test_times) progress.test_times = {};
        if (!progress.deliverables) progress.deliverables = {};

        for (let w = 1; w <= 7; w++) {
          if (!progress.checklist_states[w]) progress.checklist_states[w] = {};
          for (let idx = 0; idx < 10; idx++) {
            progress.checklist_states[w][idx] = true;
          }
          progress.test_scores[w] = 80;
          progress.test_attempts[w] = 1;
          progress.test_times[w] = `${10 + w}m 30s`;
          progress.deliverables[w] = {
            fileName: `evidencia_semana_${w}_fd.pdf`,
            fileSize: "1.8 MB",
            status: "approved",
            submittedAt: new Date(Date.now() - (7 - w + 1) * 7 * 24 * 3600 * 1000).toISOString()
          };
        }
      }
      needsSave = true;
    }

    // 1.5. Ensure ANY user who has completed Week 2 has a valid game_scores[2] populated (including Francisca)
    if (this.state.db.consultant_progress) {
      for (const userId in this.state.db.consultant_progress) {
        const progress = this.state.db.consultant_progress[userId];
        if (progress.completed_weeks && progress.completed_weeks.includes(2)) {
          if (!progress.game_scores) progress.game_scores = {};
          if (!progress.game_scores[2]) {
            console.log(`Auto-migrating: setting Week 2 game score for user ${userId}...`);
            progress.game_scores[2] = {
              score: 25,
              total: 25,
              completedAt: new Date(Date.now() - 6 * 7 * 24 * 3600 * 1000).toISOString()
            };
            needsSave = true;
          }
        }
      }
    }

    // 2. Ensure USR-MUREX-LEARNING exists in users
    if (this.state.db.users) {
      const hasMl = this.state.db.users.some(u => u.id === 'USR-MUREX-LEARNING');
      if (!hasMl) {
        console.log("Auto-migrating: adding USR-MUREX-LEARNING user...");
        this.state.db.users.push({
          id: "USR-MUREX-LEARNING",
          name: "Murex Learning",
          nombre: "Murex Learning",
          email: "murex.learning@murex.cl",
          password: "password",
          role: "senior",
          rol: "SENIOR",
          avatar_initials: "ML"
        });
        needsSave = true;
      }
    }

    // 3. Auto-migrate internal events type and expert_id
    if (this.state.db.calendar_events) {
      const targetIds = ['ev-2-scale-agile', 'ev-2-explain-murex', 'ev-2-edde-salim'];
      targetIds.forEach(id => {
        const ev = this.state.db.calendar_events.find(e => e.id === id);
        if (ev) {
          if (ev.type !== 'MUREX_LEARNING' || ev.expert_id !== 'USR-MUREX-LEARNING' || ev.organizador_id !== 'USR-MUREX-LEARNING') {
            console.log(`Auto-migrating event ${id} to MUREX_LEARNING with USR-MUREX-LEARNING expert...`);
            ev.type = 'MUREX_LEARNING';
            ev.expert_id = 'USR-MUREX-LEARNING';
            ev.organizador_id = 'USR-MUREX-LEARNING';
            needsSave = true;
          }
        }
      });
    }

    if (needsSave) {
      this.saveDatabase();
    }
  },

  getWeekScore(progress, w) {
    if (!progress || !progress.test_scores) return undefined;
    const testScore = progress.test_scores[w];
    if (testScore === undefined) return undefined;
    if (w === 2) {
      const gameData = progress.game_scores ? progress.game_scores[2] : null;
      const gameScore = gameData ? Math.round((gameData.score / gameData.total) * 100) : 0;
      return Math.round((testScore + gameScore) / 2);
    }
    return testScore;
  },

  updateAllTraineesScores() {
    if (!this.state.db || !this.state.db.users) return;
    this.state.db.users.forEach(u => {
      if (u.role === 'consultant' || u.rol === 'JUNIOR') {
        const progress = this.state.db.consultant_progress[u.id];
        if (progress) {
          const scores = [];
          for (let w = 1; w <= 12; w++) {
            const sc = this.getWeekScore(progress, w);
            if (sc !== undefined) scores.push(sc);
          }
          const avgScore = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
          u.avg_score = avgScore;
          const completedCount = progress.completed_weeks.length;
          u.status = (avgScore < 70 && completedCount > 3) ? 'at_risk' : 'on_track';
        }
      }
    });
  },

  saveDatabase() {
    this.updateAllTraineesScores();
    if (this.state.db && this.state.db.users) {
      this.state.db.users.forEach(u => {
        if (u.rol && !u.role) {
          if (u.rol === 'MANAGER') u.role = 'admin';
          else if (u.rol === 'TUTOR') u.role = 'tutor';
          else if (u.rol === 'SENIOR') u.role = 'senior';
          else if (u.rol === 'JUNIOR') u.role = 'consultant';
        }
        if (u.role && !u.rol) {
          if (u.role === 'admin') u.rol = 'MANAGER';
          else if (u.role === 'tutor') u.rol = 'TUTOR';
          else if (u.role === 'senior') u.rol = 'SENIOR';
          else if (u.role === 'consultant') u.rol = 'JUNIOR';
        }
      });
    }
    localStorage.setItem('mxboard_db_v3', JSON.stringify(this.state.db));

    if (!this.state.hasLoadedFromServer) {
      console.log("Server database was not loaded successfully in this session. Saving only to local storage to prevent data corruption.");
      return;
    }

    const isLocalFileOrDev = window.location.protocol === 'file:' || 
                             window.location.origin === 'null' ||
                             (window.location.hostname === 'localhost' && window.location.port !== '3000') ||
                             (window.location.hostname === '127.0.0.1' && window.location.port !== '3000');
    const apiBase = isLocalFileOrDev ? 'http://localhost:3000' : '';

    fetch(`${apiBase}/api/db/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.db)
    })
    .then(response => {
      if (!response.ok) {
        console.error("Failed to save database to server");
        this.state.serverConnected = false;
        this.updateDBStatusUI();
      } else {
        console.log("Database successfully saved/synced to server.");
        if (!this.state.serverConnected) {
          this.state.serverConnected = true;
          this.updateDBStatusUI();
        }
      }
    })
    .catch(e => {
      console.warn("Could not save to backend server, saved only in localStorage.", e);
      this.state.serverConnected = false;
      this.updateDBStatusUI();
    });
  },

  resetDB() {
    if (this.state.activeUser && this.state.activeUser.role !== 'admin') {
      this.showForbiddenError("Error 403: You do not have permissions to reset the database.");
      return;
    }
    // Generate initial user progress records dynamically based on week templates
    const progress = {};
    const weekCount = 12;
    const initialHistorialEvaluaciones = [];
    
    this.defaultTemplates.users.forEach(user => {
      if (user.role === 'consultant') {
        progress[user.id] = {
          completed_weeks: [],
          checklist_states: {}, // weekNum -> {itemIdx -> checkedBool}
          test_scores: {},      // weekNum -> score
          test_attempts: {},    // weekNum -> count
          test_times: {},       // weekNum -> time string
          deliverables: {},     // weekNum -> {fileName, fileSize, status, submittedAt}
          comments: {},         // weekNum -> feedbackText
          game_scores: {}       // weekNum -> {score, total, completedAt}
        };
        
        // Populate historical seed data based on their default template states
        let completedCount = (user.current_week || user.semana_actual || 1) - 1;
        
        for (let w = 1; w <= weekCount; w++) {
          const template = this.defaultTemplates.week_templates.find(wt => wt.week_number === w);
          if (w <= completedCount) {
            // Setup as completed
            progress[user.id].completed_weeks.push(w);
            
            // Tuek checklists as true
            progress[user.id].checklist_states[w] = {};
            if (template && template.checklist_items) {
              template.checklist_items.forEach((_, idx) => {
                progress[user.id].checklist_states[w][idx] = true;
              });
            }
            
            // Score seeding
            let score = 80;
            progress[user.id].test_scores[w] = score;
            
            // Time seeding
            progress[user.id].test_times[w] = `${10 + (w * 2) % 11}m ${15 + (w * 7) % 45}s`;
            
            // Seeding evaluation history
            const letters = ['A', 'B', 'C', 'D'];
            const respuestasUsuario = {};
            let quizPool = this.defaultTemplates.questions[w] || [];
            if (quizPool.length === 0 && w === 1) {
              quizPool = bancoPreguntasSemana1.map((item) => ({
                question: item.q,
                options: item.opts.map(o => o.replace(/^[A-D]\)\s*/, '')),
                correct: item.ans
              }));
            }

            quizPool.forEach((q, idx) => {
              const qKey = `P${idx + 1}`;
              respuestasUsuario[qKey] = {
                marcada: letters[q.correct],
                correcta: letters[q.correct],
                es_valida: true
              };
            });

            initialHistorialEvaluaciones.push({
              evaluacion_id: `EV-W${w}-${user.id}-${Date.now() - (completedCount - w + 1) * 7 * 24 * 3600 * 1000}`,
              usuario_id: user.id,
              semana_malla: w,
              fecha_rendicion: new Date(Date.now() - (completedCount - w + 1) * 7 * 24 * 3600 * 1000).toISOString().split('T')[0],
              puntaje_obtenido: score,
              total_preguntas: quizPool.length,
              respuestas_usuario: respuestasUsuario
            });
            
            // Deliverable seeding
            if (template && template.deliverable) {
              progress[user.id].deliverables[w] = {
                fileName: `evidencia_semana_${w}_${user.avatar_initials.toLowerCase()}.pdf`,
                fileSize: "1.8 MB",
                status: "approved",
                submittedAt: new Date(Date.now() - (completedCount - w + 1) * 7 * 24 * 3600 * 1000).toISOString()
              };
            }

            // Seed game score for Week 2
            if (w === 2) {
              progress[user.id].game_scores[2] = {
                score: 25,
                total: 25,
                completedAt: new Date(Date.now() - (completedCount - 2 + 1) * 7 * 24 * 3600 * 1000).toISOString()
              };
            }
          } else {
            // Setup empty/pending states for active and locked weeks
            progress[user.id].checklist_states[w] = {};
            if (template && template.checklist_items) {
              template.checklist_items.forEach((_, idx) => {
                // Seed partial completion for active week to make it look alive
                if (w === completedCount + 1) {
                  progress[user.id].checklist_states[w][idx] = idx < 2; // Check first two items
                } else {
                  progress[user.id].checklist_states[w][idx] = false;
                }
              });
            }
          }
        }
      }
    });

    const initialMapping = {
      "USR-FRANCISCA": "USR-BENJAMIN"
    };

    const initialMentoringLogs = [];

    const troubleshootingDB = [
      { code: "err-acc-015", title: "ERR-ACC-015: Accrual Account Missing", description: "Occurs when the MX.3 accounting engine attempts to value accrued coupons but cannot find an accounting account assigned in the Chart of Accounts to record the accumulated interest.", steps: ["Enter the accounting parameterization module in the Sandbox MX.3.", "Seleccionar el tipo de instrumento 'Bond' o 'Fixed Income'.", "Add an accounting rule for the 'Accrual' event (accrued interest).", "Asignar la cuenta contable de activo correspondiente al libro mayor.", "Save changes, clear accounting cache, and re-process the journal entries in the Sandbox."] },
      { code: "err-val-032", title: "ERR-VAL-032: Fair Value Discrepancy", description: "Occurs when the derivative's Mark-to-Market (IRS/Forward) calculated by the valuation engine differs significantly from the value reported by the counterparty or solution key. It is commonly due to rate curve discrepancies.", steps: ["Ir al visor de curvas de tasas (Yield Curves) en MX.3.", "Validate that the active discount curve (e.g., Camera Curve) is the one configured in the portfolio valuation parameters.", "Align the day count convention of the instrument (e.g., 30/360 vs Act/360) according to the fictional client's factsheet.", "Reload the daily curves and re-run batch valuation."] },
      { code: "err-ifrs-9-004", title: "ERR-IFRS-9-004: Hedge Effectiveness Failure", description: "Occurs when the Hedge Relationship between the derivative and the underlying asset falls outside the accepted effectiveness range (80%-125%) under the IFRS 9 standard.", steps: ["Review the hedge designation registry in the Sandbox.", "Validar que los montos nominales y fechas de vencimiento coincidan exactamente entre el derivado y la partida cubierta.", "Execute the prospective effectiveness test using the linear regression method.", "If the result is outside the range, adjust the regression parameters or re-balance the nominal of the hedging derivative."] },
      { code: "err-sys-999", title: "ERR-SYS-999: Sandbox Database Connection Lost", description: "System error indicating connection loss to the central testing database of the Sandbox MX.3 Chile.", steps: ["Verify the status of the VPN connection or internal network.", "Restart the MX.3 terminal on your local machine.", "Si persiste, revisar el canal Slack #sandbox-mx3 para constatar si hay ventanas de mantenimiento activas.", "As a last resort, notify the tutor to request a database server restart in the sandbox."] }
    ];

    const initialCalendarEvents = [
      // Semana 2
      {
        id: 'ev-2-citrix',
        title: 'Citrix y TradeQuery',
        type: 'tutoring',
        junior_id: 'USR-FRANCISCA',
        expert_id: 'USR-BENJAMIN',
        block_day: '2026-04-21',
        time_start: '14:00',
        time_end: '15:30',
        planned_minutes: 90,
        executed_minutes: 120,
        status: 'ejecutado',
        block_reason: 'NA',
        week_number: 2
      },
      {
        id: 'ev-2-etradepad',
        title: 'E-tradepad',
        type: 'tutoring',
        junior_id: 'USR-FRANCISCA',
        expert_id: 'USR-BENJAMIN',
        block_day: '2026-04-22',
        time_start: '14:00',
        time_end: '16:00',
        planned_minutes: 120,
        executed_minutes: 120,
        status: 'ejecutado',
        block_reason: 'NA',
        week_number: 2
      },
      {
        id: 'ev-2-qasales',
        title: 'QA and Test',
        type: 'extra_support',
        junior_id: 'USR-FRANCISCA',
        expert_id: 'USR-BENJAMIN',
        block_day: '2026-04-24',
        time_start: '15:00',
        time_end: '16:00',
        planned_minutes: 60,
        executed_minutes: 60,
        status: 'ejecutado',
        block_reason: 'NA',
        week_number: 2
      },
      {
        id: 'ev-2-explain-murex',
        title: 'Explain Murex to your friends',
        type: 'MUREX_LEARNING',
        junior_id: 'USR-FRANCISCA',
        expert_id: 'USR-MUREX-LEARNING',
        block_day: '2026-04-21',
        time_start: '09:30',
        time_end: '11:00',
        planned_minutes: 90,
        executed_minutes: 90,
        status: 'ejecutado',
        block_reason: 'NA',
        week_number: 2
      },
      {
        id: 'ev-2-scale-agile',
        title: 'NC integration Scale Agile at MUREX',
        type: 'MUREX_LEARNING',
        junior_id: 'USR-FRANCISCA',
        expert_id: 'USR-MUREX-LEARNING',
        block_day: '2026-04-22',
        time_start: '09:00',
        time_end: '11:00',
        planned_minutes: 120,
        executed_minutes: 120,
        status: 'ejecutado',
        block_reason: 'NA',
        week_number: 2
      },
      {
        id: 'ev-2-edde-salim',
        title: 'Meeting the Co Founder Edde Salim',
        type: 'MUREX_LEARNING',
        junior_id: 'USR-FRANCISCA',
        expert_id: 'USR-MUREX-LEARNING',
        block_day: '2026-04-21',
        time_start: '09:30',
        time_end: '12:30',
        planned_minutes: 180,
        executed_minutes: 180,
        status: 'ejecutado',
        block_reason: 'NA',
        week_number: 2
      },
      // Semana 3
      {
        id: 'ev-3-simple-acc',
        title: 'Introduction to Simple Accounts',
        type: 'tutoring',
        junior_id: 'USR-FRANCISCA',
        expert_id: 'USR-BENJAMIN',
        block_day: '2026-04-27',
        time_start: '11:00',
        time_end: '13:00',
        planned_minutes: 120,
        executed_minutes: 120,
        status: 'ejecutado',
        block_reason: 'NA',
        week_number: 3
      },
      {
        id: 'ev-3-dynamic-acc',
        title: 'Introduction to Dynamic Accounts',
        type: 'tutoring',
        junior_id: 'USR-FRANCISCA',
        expert_id: 'USR-BENJAMIN',
        block_day: '2026-04-28',
        time_start: '16:00',
        time_end: '17:00',
        planned_minutes: 60,
        executed_minutes: 60,
        status: 'ejecutado',
        block_reason: 'NA',
        week_number: 3
      },
      {
        id: 'ev-3-formula-acc',
        title: 'Introduction to Formula Accounts',
        type: 'tutoring',
        junior_id: 'USR-FRANCISCA',
        expert_id: 'USR-BENJAMIN',
        block_day: '2026-04-29',
        time_start: '11:00',
        time_end: '12:36',
        planned_minutes: 90,
        executed_minutes: 60,
        status: 'ejecutado',
        block_reason: 'NA',
        week_number: 3
      },
      {
        id: 'ev-3-qa-review',
        title: 'Q&A and Review',
        type: 'extra_support',
        junior_id: 'USR-FRANCISCA',
        expert_id: 'USR-BENJAMIN',
        block_day: '2026-04-30',
        time_start: '11:00',
        time_end: '13:00',
        planned_minutes: 120,
        executed_minutes: 120,
        status: 'ejecutado',
        block_reason: 'NA',
        week_number: 3
      },
      // Semana 4
      {
        id: 'ev-4-accounts-1',
        title: 'Accounts',
        type: 'tutoring',
        junior_id: 'USR-FRANCISCA',
        expert_id: 'USR-BENJAMIN',
        block_day: '2026-05-04',
        time_start: '11:00',
        time_end: '11:30',
        planned_minutes: 30,
        executed_minutes: 30,
        status: 'ejecutado',
        block_reason: 'NA',
        week_number: 4
      },
      {
        id: 'ev-4-accounts-2',
        title: 'Accounts',
        type: 'tutoring',
        junior_id: 'USR-FRANCISCA',
        expert_id: 'USR-BENJAMIN',
        block_day: '2026-05-05',
        time_start: '11:00',
        time_end: '11:30',
        planned_minutes: 30,
        executed_minutes: 30,
        status: 'ejecutado',
        block_reason: 'NA',
        week_number: 4
      },
      {
        id: 'ev-4-qa-review',
        title: 'Q&A and Review',
        type: 'extra_support',
        junior_id: 'USR-FRANCISCA',
        expert_id: 'USR-BENJAMIN',
        block_day: '2026-05-08',
        time_start: '15:00',
        time_end: '16:00',
        planned_minutes: 60,
        executed_minutes: 90,
        status: 'ejecutado',
        block_reason: 'Timesheet',
        week_number: 4
      },
      // Semana 5
      {
        id: 'ev-5-rules-intro-1',
        title: 'Introduction to Rules',
        type: 'tutoring',
        junior_id: 'USR-FRANCISCA',
        expert_id: 'USR-BENJAMIN',
        block_day: '2026-05-11',
        time_start: '11:00',
        time_end: '12:00',
        planned_minutes: 60,
        executed_minutes: 60,
        status: 'ejecutado',
        block_reason: 'NA',
        week_number: 5
      },
      {
        id: 'ev-5-rules-intro-2',
        title: 'Introduction to Rules',
        type: 'tutoring',
        junior_id: 'USR-FRANCISCA',
        expert_id: 'USR-BENJAMIN',
        block_day: '2026-05-12',
        time_start: '12:00',
        time_end: '12:48',
        planned_minutes: 40,
        executed_minutes: 48,
        status: 'ejecutado',
        block_reason: 'NA',
        week_number: 5
      },
      {
        id: 'ev-5-rules-accounts',
        title: 'Rules & Accounts',
        type: 'tutoring',
        junior_id: 'USR-FRANCISCA',
        expert_id: 'USR-BENJAMIN',
        block_day: '2026-05-14',
        time_start: '15:00',
        time_end: '15:34',
        planned_minutes: 30,
        executed_minutes: 34,
        status: 'ejecutado',
        block_reason: 'NA',
        week_number: 5
      },
      {
        id: 'ev-5-qa-review',
        title: 'Q&A and Review',
        type: 'tutoring',
        junior_id: 'USR-FRANCISCA',
        expert_id: 'USR-BENJAMIN',
        block_day: '2026-05-15',
        time_start: '16:00',
        time_end: '17:00',
        planned_minutes: 60,
        executed_minutes: 57,
        status: 'ejecutado',
        block_reason: 'NA',
        week_number: 5
      },
      // Semana 6
      {
        id: 'ev-6-drop-1',
        title: 'Drop 1',
        type: 'tutoring',
        junior_id: 'USR-FRANCISCA',
        expert_id: 'USR-BENJAMIN',
        block_day: '2026-05-18',
        time_start: '11:00',
        time_end: '11:30',
        planned_minutes: 30,
        executed_minutes: 30,
        status: 'ejecutado',
        block_reason: 'NA',
        week_number: 6
      },
      // Semana 7
      {
        id: 'ev-7-recap-jambo',
        title: 'Recap: Back from Jambo',
        type: 'tutoring',
        junior_id: 'USR-FRANCISCA',
        expert_id: 'USR-BENJAMIN',
        block_day: '2026-05-25',
        time_start: '11:00',
        time_end: '11:15',
        planned_minutes: 15,
        executed_minutes: 15,
        status: 'ejecutado',
        block_reason: 'NA',
        week_number: 7
      },
      {
        id: 'ev-7-accounting-rules',
        title: 'Accounting Rules for flows',
        type: 'tutoring',
        junior_id: 'USR-FRANCISCA',
        expert_id: 'USR-BENJAMIN',
        block_day: '2026-05-29',
        time_start: '11:15',
        time_end: '12:45',
        planned_minutes: 60,
        executed_minutes: 90,
        status: 'ejecutado',
        block_reason: 'NA',
        week_number: 7
      },
      {
        id: 'ev-7-qa-liq-1',
        title: 'Q&A Liquidation',
        type: 'extra_support',
        junior_id: 'USR-FRANCISCA',
        expert_id: 'USR-CAROLINA',
        block_day: '2026-05-25',
        time_start: '17:00',
        time_end: '18:05',
        planned_minutes: 60,
        executed_minutes: 60,
        status: 'ejecutado',
        block_reason: 'Liquidation',
        week_number: 7
      },
      // Semana 8
      {
        id: 'ev-8-qa-liq-2',
        title: 'Q&A Liquidation',
        type: 'extra_support',
        junior_id: 'USR-FRANCISCA',
        expert_id: 'USR-CAROLINA',
        block_day: '2026-06-01',
        time_start: '17:00',
        time_end: '18:00',
        planned_minutes: 60,
        executed_minutes: 60,
        status: 'ejecutado',
        block_reason: 'Liquidation',
        week_number: 8
      },
      {
        id: 'ev-8-qa-liq-3',
        title: 'Q&A Liquidation',
        type: 'extra_support',
        junior_id: 'USR-FRANCISCA',
        expert_id: 'USR-CAROLINA',
        block_day: '2026-06-02',
        time_start: '11:00',
        time_end: '12:00',
        planned_minutes: 60,
        executed_minutes: 60,
        status: 'ejecutado',
        block_reason: 'Liquidation',
        week_number: 8
      },
      {
        id: 'ev-8-luana-coaching',
        title: '1-1 Luana',
        type: 'coaching',
        junior_id: 'USR-FRANCISCA',
        expert_id: 'USR-LUANA',
        block_day: '2026-06-03',
        time_start: '11:30',
        time_end: '12:00',
        planned_minutes: 30,
        executed_minutes: 30,
        status: 'ejecutado',
        block_reason: 'NA',
        week_number: 8
      }
    ];

    // Seed cert_checklists for every consultant (4 hitos de certificación).
    const initialCertChecklists = {};
    this.defaultTemplates.users
      .filter(u => u.role === 'consultant')
      .forEach(u => {
        initialCertChecklists[u.id] = { 1: false, 2: false, 3: false, 4: false };
      });

    // Seed onboarding_progress for every consultant
    const initialOnboardingProgress = {};
    this.defaultTemplates.users
      .filter(u => u.role === 'consultant')
      .forEach(u => {
        initialOnboardingProgress[u.id] = {};
      });

    this.state.db = {
      users: this.defaultTemplates.users,
      week_templates: this.defaultTemplates.week_templates,
      consultant_progress: progress,
      questions: this.defaultTemplates.questions,
      tutor_junior_mapping: initialMapping,
      mentoring_logs: initialMentoringLogs,
      smtp_outbox: [],
      troubleshooting_db: troubleshootingDB,
      cert_checklists: initialCertChecklists,
      calendar_events: initialCalendarEvents,
      historial_evaluaciones: initialHistorialEvaluaciones,
      onboarding_progress: initialOnboardingProgress
    };
    
    // Clear quiz attempt locks from localStorage
    for (let w = 1; w <= 12; w++) {
      localStorage.removeItem(`spent_quiz_w${w}`);
      localStorage.removeItem(`quiz_attempt_spent_w${w}`);
      this.defaultTemplates.users.forEach(u => {
        localStorage.removeItem(`spent_quiz_w${w}_${u.id}`);
      });
    }

    // Clear onboarding checklist states from localStorage
    this.defaultTemplates.users.forEach(u => {
      tablasOnboardingGlobal.forEach(tablaData => {
        tablaData.items.forEach(item => {
          const itemKeyPart = item.nombre.replace(/\s+/g, '_');
          localStorage.removeItem(`murex_global_onb_check_${u.id}_${itemKeyPart}`);
          localStorage.removeItem(`murex_global_onb_check_default_${itemKeyPart}`);
          localStorage.removeItem(`murex_global_onb_check_${itemKeyPart}`);
        });
      });
    });
    
    this.saveDatabase();
    this.showToast("Database reset with demo data.");
    
    if (this.state.activeUser) {
      // Re-load user session pointer to updated db values
      this.state.activeUser = this.state.db.users.find(u => u.id === this.state.activeUser.id);
      this.renderCurrentView();
    }
  },

  // Auth Functions
  checkSession() {
    const rawSession = sessionStorage.getItem('mxboard_session');
    if (rawSession) {
      try {
        const userSession = JSON.parse(rawSession);
        // Sync with actual db values
        this.state.activeUser = this.state.db.users.find(u => u.id === userSession.id);
        if (this.state.activeUser) {
          this.showView((this.state.activeUser.role === 'admin' || this.state.activeUser.role === 'tutor' || this.state.activeUser.role === 'senior') ? 'view-admin' : 'view-consultant');
          this.setupHeaderBadge();
          this.renderCurrentView();
          return;
        }
      } catch (e) {}
    }
    this.showView('view-login');
  },

  quickFill(email, password) {
    const emailField = document.getElementById('login-email');
    const passField = document.getElementById('login-password');
    if (emailField) emailField.value = email;
    if (passField) passField.value = password;
    this.handleLogin(new Event('submit'));
  },

  handleLogin(e) {
    if (e && e.preventDefault) e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const pass = document.getElementById('login-password').value;
    const errorMsg = document.getElementById('login-error-msg');
    
    const user = this.state.db.users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === pass);
    
    if (user) {
      errorMsg.style.display = 'none';
      this.state.activeUser = user;
      sessionStorage.setItem('mxboard_session', JSON.stringify({ id: user.id }));
      localStorage.setItem('user_role', user.rol || (user.role === 'admin' ? 'MANAGER' : user.role === 'tutor' ? 'TUTOR' : user.role === 'senior' ? 'SENIOR' : 'JUNIOR'));
      this.setupHeaderBadge();
      
      this.showToast(`Welcome, ${user.name}`);
      this.showView((user.role === 'admin' || user.role === 'tutor' || user.role === 'senior') ? 'view-admin' : 'view-consultant');
      this.renderCurrentView();
    } else {
      errorMsg.style.display = 'flex';
      document.getElementById('login-error-text').innerText = "Incorrect credentials. Please try again.";
    }
  },

  logout() {
    sessionStorage.removeItem('mxboard_session');
    this.state.activeUser = null;
    document.getElementById('user-profile-badge').style.display = 'none';
    document.getElementById('btn-logout').style.display = 'none';
    
    // Reset test state just in case
    this.resetTestState();
    
    this.showView('view-login');
    this.showToast("Logged out successfully.");
  },

  setupHeaderBadge() {
    const badge = document.getElementById('user-profile-badge');
    const logoutBtn = document.getElementById('btn-logout');
    
    if (this.state.activeUser) {
      badge.style.display = 'flex';
      logoutBtn.style.display = 'flex';
      
      document.getElementById('header-user-avatar').innerText = this.state.activeUser.avatar_initials;
      document.getElementById('header-user-name').innerText = this.state.activeUser.name;
      
      let roleText = 'Consultor Junior';
      if (this.state.activeUser.role === 'admin') {
        roleText = 'Manager Global';
      } else if (this.state.activeUser.role === 'tutor') {
        roleText = 'Tutor / Mentor';
      } else if (this.state.activeUser.role === 'senior') {
        roleText = 'Senior Consultant';
      }
      document.getElementById('header-user-role').innerText = roleText;
    }
  },

  showView(viewId) {
    if (viewId === 'view-admin') {
      const user = this.state.activeUser;
      if (!user || (user.role !== 'admin' && user.role !== 'tutor' && user.role !== 'senior')) {
        this.showForbiddenError("Error 403 - Forbidden: You do not have permissions to access this section.");
        return;
      }
    }
    
    document.querySelectorAll('.view-section').forEach(view => {
      view.classList.remove('show');
    });
    const el = document.getElementById(viewId);
    if (el) el.classList.add('show');
  },

  showForbiddenError(msg) {
    this.showView('view-forbidden');
    this.showToast(msg, "danger");
  },

  goHome() {
    if (this.state.activeUser) {
      const r = this.state.activeUser.role;
      this.showView((r === 'admin' || r === 'tutor' || r === 'senior') ? 'view-admin' : 'view-consultant');
      this.renderCurrentView();
    } else {
      this.showView('view-login');
    }
  },

  // View Router Dispatcher
  renderCurrentView() {
    if (!this.state.activeUser) return;
    
    // Render SMTP outbox contents
    this.renderSMTPOutbox();
    
    const r = this.state.activeUser.role;
    if (r === 'admin' || r === 'tutor' || r === 'senior') {
      this.renderAdminView();
    } else {
      this.renderConsultantView();
    }
  },

  // ==========================================================================

  // ==========================================================================
  // CONSULTANT DASHBOARD RENDERING & LOGIC
  // ==========================================================================
  renderConsultantView() {
    const userId = this.state.activeUser.id;
    const progress = this.state.db.consultant_progress[userId];
    
    // Calculate values
    const totalWeeks = 12;
    const completedCount = progress.completed_weeks.length;
    const currentWeekNum = Math.min(completedCount + 1, totalWeeks);
    
    // Calculate Average Score
    const scores = [];
    for (let w = 1; w <= 12; w++) {
      const sc = this.getWeekScore(progress, w);
      if (sc !== undefined) scores.push(sc);
    }
    const avgScore = scores.length > 0 ? Math.round(scores.reduce((a,b)=>a+b, 0) / scores.length) : 0;
    
    // Determine status
    let statusClass = '';
    let statusText = '';
    if (avgScore < 70 && completedCount > 3) {
      statusClass = 'at-risk';
      statusText = 'At Theoretical Risk';
    } else if (completedCount >= 11) {
      statusClass = '';
      statusText = 'Listo para Certificar';
    } else {
      statusClass = '';
      statusText = 'On Track (Stable)';
    }

    // Update Profile DB fields dynamically
    const dbUser = this.state.db.users.find(u => u.id === userId);
    dbUser.current_week = currentWeekNum;
    dbUser.avg_score = avgScore;
    dbUser.status = avgScore < 70 && completedCount > 3 ? 'at_risk' : 'on_track';
    this.saveDatabase();

    // Render Hero widgets
    document.getElementById('consultant-welcome-title').innerText = `Hello, ${this.state.activeUser.name}`;
    document.getElementById('consultant-progress-text').innerText = `${completedCount} of ${totalWeeks} weeks completed (${Math.round((completedCount/totalWeeks)*100)}%)`;
    document.getElementById('consultant-progress-fill').style.width = `${(completedCount/totalWeeks)*100}%`;
    document.getElementById('consultant-avg-score').innerText = `${avgScore}%`;
    
    // Status Badge
    const statusBadge = document.getElementById('consultant-status-badge');
    statusBadge.className = `status-indicator-badge ${statusClass}`;
    statusBadge.innerHTML = `<i class="ti ti-chart-arrows"></i> ${statusText}`;

    // SVG Circular Score Ring
    const circle = document.getElementById('consultant-score-ring');
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    const offset = circumference - (avgScore / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    
    // Update Phase Badge
    const currentTemplate = this.state.db.week_templates.find(wt => wt.week_number === currentWeekNum);
    document.getElementById('consultant-phase-badge').innerText = `Fase: ${currentTemplate ? currentTemplate.phase : 'Finalizado'}`;

    // Render 12-Weeks Timeline Grid
    this.renderTimelineGrid(progress, currentWeekNum);
    
    // Render Detail Panel
    if (this.state.selectedWeekNum) {
      this.loadWeekDetail(this.state.selectedWeekNum);
    } else {
      // Auto-select current week by default on load
      this.state.selectedWeekNum = currentWeekNum;
      this.loadWeekDetail(currentWeekNum);
    }

    // Render Consultant Score Chart
    this.renderConsultantChart(progress);
  },

  renderTimelineGrid(progress, currentWeekNum) {
    const grid = document.getElementById('weeks-grid');
    grid.innerHTML = '';
    
    for (let w = 1; w <= 12; w++) {
      const template = this.state.db.week_templates.find(wt => wt.week_number === w);
      if (!template) continue;
      
      const isCompleted = progress.completed_weeks.includes(w);
      const isCurrent = w === currentWeekNum;
      const isLocked = w > currentWeekNum;
      
      const deliverable = progress.deliverables[w];
      const hasPendingDeliverable = deliverable && deliverable.status === 'pending_review';
      
      let stateClass = 'state-locked';
      let stateIcon = '<i class="ti ti-lock"></i>';
      let stateFooter = 'Locked';
      
      if (isCompleted) {
        stateClass = 'state-completed';
        stateIcon = '<i class="ti ti-circle-check"></i>';
        const score = this.getWeekScore(progress, w);
        stateFooter = score !== undefined ? `<span class="week-card-score">${score}% score</span>` : 'Approved';
      } else if (hasPendingDeliverable) {
        stateClass = 'state-review';
        stateIcon = '<i class="ti ti-clock"></i>';
        stateFooter = 'In review';
      } else if (isCurrent) {
        stateClass = 'state-current';
        stateIcon = '<i class="ti ti-circle-dot"></i>';
        stateFooter = 'In progress';
      }
      
      const card = document.createElement('div');
      card.className = `week-card ${stateClass}`;
      card.onclick = () => {
        if (!isLocked) {
          this.goToWeek(w);
        } else {
          this.showToast("This week is locked. Approve the previous ones first.", "warning");
        }
      };
      
      card.innerHTML = `
        <div class="week-card-top">
          <span class="week-card-number">S${w}</span>
          <span class="week-card-state-icon">${stateIcon}</span>
        </div>
        <div class="week-card-title">${template.title}</div>
        <div class="week-card-footer">
          <span>${template.phase}</span>
          <span>${stateFooter}</span>
        </div>
      `;
      
      grid.appendChild(card);
    }
  },

  renderWorkspace(weekNum) {
    this.loadWeekDetail(weekNum);
  },

  loadWeekDetail(weekNum) {
    this.currentViewedWeek = parseInt(weekNum);
    const userId = this.state.activeUser.id;
    const progress = this.state.db.consultant_progress[userId];
    const template = this.state.db.week_templates.find(wt => wt.week_number === weekNum);
    
    if (!template) return;

    // Show panel content, hide empty state if they exist
    const emptyState = document.getElementById('week-panel-empty-state');
    if (emptyState) emptyState.classList.add('hidden');
    const activeContent = document.getElementById('week-panel-active-content');
    if (activeContent) activeContent.classList.remove('hidden');

    // Load static templates fields
    document.getElementById('panel-week-number').innerText = `Week ${weekNum} · ${template.phase}`;
    document.getElementById('panel-week-title').innerText = template.title;
    document.getElementById('panel-week-desc').innerText = template.description;
    
    // Status Badge
    const isCompleted = progress.completed_weeks.includes(weekNum);
    const deliverable = progress.deliverables[weekNum];
    const isReview = deliverable && deliverable.status === 'pending_review';
    
    const statusBadge = document.getElementById('panel-week-status');
    statusBadge.className = 'week-status-badge';
    if (isCompleted) {
      statusBadge.classList.add('completed');
      statusBadge.innerText = 'Completed';
    } else if (isReview) {
      statusBadge.classList.add('review');
      statusBadge.innerText = 'In review';
    } else {
      statusBadge.classList.add('current');
      statusBadge.innerText = 'In progress';
    }

    // Load Checklist items
    const checklistList = document.getElementById('panel-checklist-list');
    checklistList.innerHTML = '';
    
    const weekChecklistState = progress.checklist_states[weekNum] || {};
    const allChecked = template.checklist_items.length > 0 && 
                       template.checklist_items.every((_, idx) => weekChecklistState[idx] === true);

    // Fetch tutor info for custom help message
    const activeUserId = this.state.activeUser.id;
    const tutorId = this.state.db.tutor_junior_mapping[activeUserId];
    const tutorObj = this.state.db.users.find(u => u.id === tutorId);
    const tutorName = tutorObj ? tutorObj.name : 'your tutor';

    // Update help text to reflect read-only status for onboarding juniors
    const paneHelp = document.querySelector('#pane-checklist .pane-help');
    if (paneHelp) {
      paneHelp.innerHTML = `View your practical tasks for the week. Only your assigned tutor <strong>(${tutorName})</strong> can update and mark them as completed.`;
    }

    template.checklist_items.forEach((item, idx) => {
      const isChecked = weekChecklistState[idx] === true;
      const row = document.createElement('li');
      row.className = `checklist-row ${isChecked ? 'checked' : ''}`;
      row.style.cursor = 'default';

      row.innerHTML = `
        <div class="checklist-checkbox-wrapper">
          <i class="ti ${isChecked ? 'ti-square-check' : 'ti-square'}"></i>
        </div>
        <span class="checklist-text">${item}</span>
      `;
      checklistList.appendChild(row);
    });

    // Load Instructor Feedback Comments
    const commentArea = document.getElementById('comment-area-consultant');
    const commentBoxText = document.getElementById('comment-box-text');
    const weekComment = progress.comments[weekNum];
    if (weekComment) {
      commentArea.style.display = 'block';
      commentBoxText.innerText = weekComment;
    } else {
      commentArea.style.display = 'none';
    }

    // ORQUESTRACIÓN EN CALIENTE: ¿Es la semana 1, 2, 3 o 4?
    const simulatorZone = document.getElementById('workspace-simulator-zone');
    const classGameZone = document.getElementById('workspace-classification-game-zone');
    const gamePlaceholder = document.getElementById('game-placeholder');
    
    if (simulatorZone) simulatorZone.classList.add('hidden');
    if (classGameZone) classGameZone.classList.add('hidden');
    if (gamePlaceholder) gamePlaceholder.style.display = 'flex';
    
    const activeWeek = parseInt(weekNum);
    if (activeWeek === 1 || activeWeek === 2) {
      if (gamePlaceholder) gamePlaceholder.style.display = 'none';
      if (classGameZone) {
        classGameZone.classList.remove('hidden');
        this.classGameInit();
      }
    } else if (activeWeek === 3 || activeWeek === 4) {
      if (gamePlaceholder) gamePlaceholder.style.display = 'none';
      if (simulatorZone) {
        simulatorZone.classList.remove('hidden');
        this.simInit(activeWeek);
      }
    }

    // PASAPORTE DE INDUCCIÓN: Visibilidad en Semana 1 y Semana 2
    const zoneContainer = document.getElementById('workspace-committees-zone');
    if (zoneContainer) {
      const activeWeek = parseInt(weekNum);
      if (activeWeek === 1 || activeWeek === 2) {
        zoneContainer.classList.remove('hidden');
        this.renderTablasOnboardingReales(activeWeek);
      } else {
        zoneContainer.classList.add('hidden');
      }
    }

    // MXLEARN ONBOARDING MODULES: Visibilidad en Semana 3 y Semana 4
    const onboardingZone = document.getElementById('workspace-onboarding-mxlearn-zone');
    if (onboardingZone) {
      const activeWeek = parseInt(weekNum);
      if (activeWeek === 3 || activeWeek === 4) {
        onboardingZone.classList.remove('hidden');
        if (!this.state.activeOnboardingFolder) {
          this.state.activeOnboardingFolder = 'financial_markets';
        }
        this.switchOnboardingFolder(this.state.activeOnboardingFolder);
      } else {
        onboardingZone.classList.add('hidden');
      }
    }

    // Sync subtabs UI
    this.switchPanelTab(this.state.activePanelTab);
    this.initEvaluacionSemanalUI(weekNum);
    this.updateDeliverableTabState(weekNum, progress, template, allChecked);
    this.actualizarEstadoBotonesNavegacion();
  },

  getQuizSpentState(userId, weekNum) {
    const userKey = `spent_quiz_w${weekNum}_${userId}`;
    const globalKey = `spent_quiz_w${weekNum}`;
    const userVal = localStorage.getItem(userKey);
    if (userVal !== null) {
      return userVal === 'true';
    }
    // Fallback and migration of old global key
    const globalVal = localStorage.getItem(globalKey);
    if (globalVal !== null) {
      localStorage.setItem(userKey, globalVal);
      return globalVal === 'true';
    }
    return false;
  },

  setQuizSpentState(userId, weekNum, spent) {
    const userKey = `spent_quiz_w${weekNum}_${userId}`;
    if (spent) {
      localStorage.setItem(userKey, 'true');
    } else {
      localStorage.removeItem(userKey);
      // Also clear legacy global key for safety
      localStorage.removeItem(`spent_quiz_w${weekNum}`);
    }
  },

  getOnboardingCheckState(userId, itemName) {
    if (this.state.db && this.state.db.onboarding_progress && this.state.db.onboarding_progress[userId]) {
      const state = this.state.db.onboarding_progress[userId][itemName.replace(/\s+/g, '_')];
      if (state !== undefined) {
        return state === true || state === 'true';
      }
    }
    const userKey = `murex_global_onb_check_${userId}_${itemName.replace(/\s+/g, '_')}`;
    const globalKey = `murex_global_onb_check_${itemName.replace(/\s+/g, '_')}`;
    const userVal = localStorage.getItem(userKey);
    if (userVal !== null) {
      return userVal === 'true';
    }
    // Fallback and migration of old global key
    const globalVal = localStorage.getItem(globalKey);
    if (globalVal !== null) {
      localStorage.setItem(userKey, globalVal);
      return globalVal === 'true';
    }
    return false;
  },

  setOnboardingCheckState(userId, itemName, checked) {
    const userKey = `murex_global_onb_check_${userId}_${itemName.replace(/\s+/g, '_')}`;
    localStorage.setItem(userKey, checked);
    if (this.state.db) {
      if (!this.state.db.onboarding_progress) {
        this.state.db.onboarding_progress = {};
      }
      if (!this.state.db.onboarding_progress[userId]) {
        this.state.db.onboarding_progress[userId] = {};
      }
      this.state.db.onboarding_progress[userId][itemName.replace(/\s+/g, '_')] = checked;
      this.saveDatabase();
    }
  },

  renderTablasOnboardingReales(semanaVisualizada) {
    const container = document.getElementById('real-induction-tables-container');
    if (!container) return;
    container.innerHTML = ''; // Limpiar la renderización anterior

    // CORRECCIÓN DE LA MATRIZ DE REGLAS TIMELINE GUARD
    // Evaluamos si la semana que el Junior está mirando en la pantalla es del futuro bloqueado
    const userId = this.state.activeUser ? this.state.activeUser.id : 'default';
    const progress = this.state.db && this.state.db.consultant_progress ? this.state.db.consultant_progress[userId] : null;
    const completedCount = progress ? (progress.completed_weeks ? progress.completed_weeks.length : 0) : 0;
    const currentWeekNum = Math.min(completedCount + 1, 12);
    const esSemanaBloqueada = (semanaVisualizada > currentWeekNum);
    
    // El input de los comités corporativos SOLO se congela si es una semana bloqueada del futuro.
    // En la Semana 1 y Semana 2, el Newcomer TIENE PERMISO TOTAL para clickear y rellenar sus hitos.
    const inputDisabled = esSemanaBloqueada ? 'disabled' : '';
    const activeUserId = this.state.activeUser ? this.state.activeUser.id : 'default';

    tablasOnboardingGlobal.forEach(tablaData => {
        const tableWrapper = document.createElement('div');
        tableWrapper.className = "induction-table-card";
        
        let rowsHtml = '';
        tablaData.items.forEach(item => {
            const isChecked = this.getOnboardingCheckState(activeUserId, item.nombre);
            const isCheckedStr = isChecked ? 'checked' : '';

            rowsHtml += `
                <tr>
                    <td style="width: 50px; text-align: center;">
                        <input 
                            type="checkbox" 
                            ${isCheckedStr} 
                            ${inputDisabled}
                            onchange="app.setOnboardingCheckState('${activeUserId}', '${item.nombre.replace(/'/g, "\\'")}', this.checked); app.renderWorkspace(${semanaVisualizada});"
                            class="induction-checkbox"
                        >
                    </td>
                    <td style="font-weight: 500;">${item.nombre}</td>
                    <td>${item.modalidad}</td>
                    <td style="font-family: monospace; font-size: 0.75rem;">${item.duracion}</td>
                    <td style="font-weight: 500;">${item.plazo}</td>
                    <td style="text-align: right; white-space: nowrap;">
                        ${esSemanaBloqueada 
                            ? '<span class="induction-badge preview"><i class="ti ti-lock" style="margin-right: 3px;"></i> Locked</span>' 
                            : (isChecked ? '<span class="induction-badge ok"><i class="ti ti-circle-check" style="margin-right: 3px;"></i> Completed</span>' : '<span class="induction-badge pending"><i class="ti ti-pencil" style="margin-right: 3px;"></i> Editable</span>')
                        }
                    </td>
                </tr>
            `;
        });

        // CORRECCIÓN DE LA CABECERA: Remueve la etiqueta confusa de 'Modo Lectura' si está en semanas habilitadas
        const badgeEncabezado = esSemanaBloqueada 
            ? '<span class="induction-badge readonly"><i class="ti ti-lock" style="margin-right: 3px;"></i> Protected View</span>' 
            : '<span class="induction-badge ok"><i class="ti ti-edit" style="margin-right: 3px;"></i> Active Self-Management</span>';

        tableWrapper.innerHTML = `
            <div class="induction-table-header">
                <span>${tablaData.titulo}</span>
                ${badgeEncabezado}
            </div>
            <div class="induction-table-wrapper">
                <table class="induction-table">
                    <thead>
                        <tr>
                            <th style="text-align: center; width: 50px;">Status</th>
                            <th>Session / Training</th>
                            <th>Modality</th>
                            <th>Duration</th>
                            <th>Complete By</th>
                            <th style="text-align: right;">Estado</th>
                        </tr>
                    </thead>
                    <tbody>${rowsHtml}</tbody>
                </table>
            </div>
        `;
        container.appendChild(tableWrapper);
    });
  },

  switchOnboardingFolder(folderName) {
    this.state.activeOnboardingFolder = folderName;
    
    // Update folder buttons active class
    const btnAcc = document.getElementById('btn-folder-accounting');
    const btnLiq = document.getElementById('btn-folder-liquidation');
    const btnFin = document.getElementById('btn-folder-financial');
    
    if (btnAcc) btnAcc.classList.remove('active');
    if (btnLiq) btnLiq.classList.remove('active');
    if (btnFin) btnFin.classList.remove('active');
    
    if (folderName === 'accounting' && btnAcc) btnAcc.classList.add('active');
    if (folderName === 'liquidation' && btnLiq) btnLiq.classList.add('active');
    if (folderName === 'financial_markets' && btnFin) btnFin.classList.add('active');
    
    this.renderOnboardingFolderContent();
  },
  
  switchAccountingSubfolder(subfolderName) {
    this.state.activeAccountingSubfolder = subfolderName;
    
    // Update active class for trainee subfolder buttons
    const btnFit = document.getElementById('btn-subfolder-fit');
    const btnPnl = document.getElementById('btn-subfolder-pnl');
    const btnEod = document.getElementById('btn-subfolder-eod');
    
    if (btnFit) btnFit.classList.remove('active');
    if (btnPnl) btnPnl.classList.remove('active');
    if (btnEod) btnEod.classList.remove('active');
    
    if (subfolderName === 'fit_for_banking' && btnFit) btnFit.classList.add('active');
    if (subfolderName === 'intro_pnl' && btnPnl) btnPnl.classList.add('active');
    if (subfolderName === 'eod_troubleshooting' && btnEod) btnEod.classList.add('active');
    
    this.renderOnboardingFolderContent();
  },
  
  renderOnboardingFolderContent() {
    const container = document.getElementById('onboarding-folder-content');
    if (!container) return;
    
    const folderName = this.state.activeOnboardingFolder || 'financial_markets';
    const folderData = mxlearnOnboardingModules[folderName];
    if (!folderData) return;
    
    const activeUserId = this.state.activeUser ? this.state.activeUser.id : 'default';
    
    // Check if viewed week is locked
    const progress = this.state.db && this.state.db.consultant_progress ? this.state.db.consultant_progress[activeUserId] : null;
    const completedCount = progress ? (progress.completed_weeks ? progress.completed_weeks.length : 0) : 0;
    const currentWeekNum = Math.min(completedCount + 1, 12);
    const esSemanaBloqueada = (this.currentViewedWeek > currentWeekNum);
    const inputDisabled = esSemanaBloqueada ? 'disabled' : '';
    
    let subfolderHtml = '';
    let itemsToRender = [];
    
    if (folderData.hasSubfolders) {
      if (!this.state.activeAccountingSubfolder) {
        this.state.activeAccountingSubfolder = 'fit_for_banking';
      }
      const subKey = this.state.activeAccountingSubfolder;
      const subData = folderData.subfolders[subKey];
      itemsToRender = subData ? subData.items : [];
      
      subfolderHtml = `
        <div class="onboarding-subfolders-tabs" style="display: flex; gap: 8px; margin-bottom: 12px; margin-top: 5px; border-bottom: 1px dashed var(--neutral-border); padding-bottom: 8px;">
          <button class="folder-subtab-btn ${subKey === 'fit_for_banking' ? 'active' : ''}" id="btn-subfolder-fit" onclick="app.switchAccountingSubfolder('fit_for_banking')">
            <i class="ti ti-folder-open"></i> Accounting Fundamentals for Newcomers
          </button>
          <button class="folder-subtab-btn ${subKey === 'intro_pnl' ? 'active' : ''}" id="btn-subfolder-pnl" onclick="app.switchAccountingSubfolder('intro_pnl')">
            <i class="ti ti-folder-open"></i> Financial Statements Introduction to Profit and Loss
          </button>
          <button class="folder-subtab-btn ${subKey === 'eod_troubleshooting' ? 'active' : ''}" id="btn-subfolder-eod" onclick="app.switchAccountingSubfolder('eod_troubleshooting')">
            <i class="ti ti-folder-open"></i> Generic EOD Troubleshooting
          </button>
        </div>
      `;
    } else {
      itemsToRender = folderData.items;
    }
    
    let rowsHtml = '';
    itemsToRender.forEach(item => {
      const storageKey = folderData.hasSubfolders 
        ? `Accounting_${this.state.activeAccountingSubfolder}_${item}` 
        : item;
        
      const isChecked = this.getOnboardingCheckState(activeUserId, storageKey);
      const isCheckedStr = isChecked ? 'checked' : '';
      
      const itemUrl = onboardingItemUrls[item];
      let itemCellHtml = `<td style="font-weight: 500; font-size: 0.8rem; padding: 10px;">${item}</td>`;
      if (itemUrl) {
        itemCellHtml = `
          <td style="padding: 0; font-weight: 500; font-size: 0.8rem;">
            <a href="${itemUrl}" target="_blank" class="onboarding-link-btn">
              <span>${item}</span>
              <span class="onboarding-link-badge" style="font-size: 0.7rem; color: var(--primary); background: var(--primary-light); padding: 3px 8px; border-radius: 4px; display: inline-flex; align-items: center; gap: 4px; font-weight: 600; opacity: 0.85;">
                <i class="ti ti-external-link"></i> Go to Course
              </span>
            </a>
          </td>
        `;
      }
      
      rowsHtml += `
        <tr>
          <td style="width: 50px; text-align: center; padding: 10px;">
            <input 
              type="checkbox" 
              ${isCheckedStr} 
              ${inputDisabled}
              onchange="app.setOnboardingCheckState('${activeUserId}', '${storageKey.replace(/'/g, "\\'")}', this.checked); app.renderOnboardingFolderContent();"
              class="induction-checkbox"
            >
          </td>
          ${itemCellHtml}
          <td style="text-align: right; padding: 10px; white-space: nowrap; padding-right: 15px;">
            ${esSemanaBloqueada 
              ? '<span class="induction-badge preview"><i class="ti ti-lock" style="margin-right: 3px;"></i> Locked</span>' 
              : (isChecked ? '<span class="induction-badge ok"><i class="ti ti-circle-check" style="margin-right: 3px;"></i> Completed</span>' : '<span class="induction-badge pending"><i class="ti ti-pencil" style="margin-right: 3px;"></i> Pending</span>')
            }
          </td>
        </tr>
      `;
    });
    
    container.innerHTML = `
      ${subfolderHtml}
      <div class="induction-table-card" style="margin-top: 0; box-shadow: none; border: 1px solid var(--neutral-border);">
        <table class="mentor-log-table" style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background-color: var(--neutral-light); border-bottom: 1px solid var(--neutral-border);">
              <th style="width: 50px; text-align: center; padding: 8px; font-size: 0.75rem; color: var(--neutral-muted);">Status</th>
              <th style="text-align: left; padding: 8px; font-size: 0.75rem; color: var(--neutral-muted);">Module / Onboarding Video</th>
              <th style="text-align: right; padding: 8px; font-size: 0.75rem; color: var(--neutral-muted); padding-right: 15px;">Progress</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;
  },

  navigateWorkspaceWeek(direccion) {
    const nuevaSemana = this.currentViewedWeek + direccion;
    
    const userId = this.state.activeUser ? this.state.activeUser.id : 'default';
    const progress = this.state.db && this.state.db.consultant_progress ? this.state.db.consultant_progress[userId] : null;
    const completedCount = progress ? (progress.completed_weeks ? progress.completed_weeks.length : 0) : 0;
    const currentWeekNum = Math.min(completedCount + 1, 12);
    
    if (nuevaSemana < 1 || nuevaSemana > currentWeekNum) {
      return; // Bloqueo de seguridad
    }
    
    this.currentViewedWeek = nuevaSemana;
    this.renderWorkspace(nuevaSemana);
  },

  actualizarEstadoBotonesNavegacion() {
    const btnPrev = document.getElementById('btn-workspace-prev');
    const btnNext = document.getElementById('btn-workspace-next');
    if (!btnPrev || !btnNext) return;
    
    const userId = this.state.activeUser ? this.state.activeUser.id : 'default';
    const progress = this.state.db && this.state.db.consultant_progress ? this.state.db.consultant_progress[userId] : null;
    const completedCount = progress ? (progress.completed_weeks ? progress.completed_weeks.length : 0) : 0;
    const currentWeekNum = Math.min(completedCount + 1, 12);
    
    // Flecha Izquierda: Gris solo si estoy en la primera página
    btnPrev.disabled = (this.currentViewedWeek === 1);
    
    // Flecha Derecha: Se apaga y se pone en gris de forma estricta al llegar a la semana actual en curso
    if (this.currentViewedWeek >= currentWeekNum) {
      btnNext.disabled = true;
      btnNext.setAttribute('title', `Locked content: Week ${currentWeekNum + 1} locked`);
    } else {
      btnNext.disabled = false;
      btnNext.setAttribute('title', 'Advance week');
    }
  },

  classGameShuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  },

  classGameInit() {
    const userId = this.state.activeUser ? this.state.activeUser.id : 'default';
    const weekNum = this.currentViewedWeek || 1;
    const storageKey = `class_game_progress_${userId}_w${weekNum}`;
    const saved = localStorage.getItem(storageKey);
    const count = (weekNum === 2) ? 25 : 15;
    
    // Si es la semana 2 (evaluación) y ya se completó la semana o ya hay puntaje guardado en base de datos, bloquear
    const progress = this.state.db && this.state.db.consultant_progress ? this.state.db.consultant_progress[userId] : null;
    const isWeek2Completed = progress && progress.completed_weeks && progress.completed_weeks.includes(2);
    const hasGame2Score = progress && progress.game_scores && progress.game_scores[2];
    
    if (weekNum === 2 && (isWeek2Completed || hasGame2Score)) {
      if (progress) {
        if (!progress.game_scores) progress.game_scores = {};
        if (!progress.game_scores[2]) {
          progress.game_scores[2] = {
            score: 25,
            total: 25,
            completedAt: new Date().toISOString()
          };
          this.saveDatabase();
        }
      }
      this.classGameState.currentIndex = count;
      this.classGameState.score = (progress && progress.game_scores[2]) ? progress.game_scores[2].score : count;
      this.classGameState.classified = [];
      this.classGameState.shuffledAccounts = [];
      this.classGameState.hasStarted = true;
      this.classGameRenderBoard();
      return;
    }
    
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.classGameState.currentIndex = parsed.currentIndex;
        this.classGameState.score = parsed.score;
        this.classGameState.classified = parsed.classified || [];
        this.classGameState.shuffledAccounts = parsed.shuffledAccounts || [];
        this.classGameState.hasStarted = (parsed.hasStarted !== undefined) ? parsed.hasStarted : (weekNum === 1);
        
        // Regenerate if missing or size mismatch
        if (!this.classGameState.shuffledAccounts || this.classGameState.shuffledAccounts.length !== count) {
          const cloned = JSON.parse(JSON.stringify(classGameAccounts));
          const shuffled = this.classGameShuffle(cloned);
          this.classGameState.shuffledAccounts = shuffled.slice(0, count);
          this.classGameSaveState();
        }
      } catch (e) {
        this.classGameResetState();
      }
    } else {
      this.classGameResetState();
    }
    
    this.classGameRenderBoard();
  },

  classGameResetState() {
    this.classGameState.currentIndex = 0;
    this.classGameState.score = 0;
    this.classGameState.classified = [];
    const cloned = JSON.parse(JSON.stringify(classGameAccounts));
    const weekNum = this.currentViewedWeek || 1;
    const count = (weekNum === 2) ? 25 : 15;
    const shuffled = this.classGameShuffle(cloned);
    this.classGameState.shuffledAccounts = shuffled.slice(0, count);
    this.classGameState.hasStarted = (weekNum === 1);
    this.classGameSaveState();
  },

  classGameSaveState() {
    const userId = this.state.activeUser ? this.state.activeUser.id : 'default';
    const weekNum = this.currentViewedWeek || 1;
    const storageKey = `class_game_progress_${userId}_w${weekNum}`;
    localStorage.setItem(storageKey, JSON.stringify(this.classGameState));
  },

  classGameRenderBoard() {
    const scoreEl = document.getElementById('class-game-score');
    const totalEl = document.getElementById('class-game-total-count');
    const progressEl = document.getElementById('class-game-progress-bar');
    const boardEl = document.getElementById('class-game-board');
    const resultsEl = document.getElementById('class-game-results');
    const startEl = document.getElementById('class-game-start');
    const totalCount = this.classGameState.shuffledAccounts.length || classGameAccounts.length;
    
    const weekNum = this.currentViewedWeek || 1;

    // Verificar si es la semana 2 y la evaluación ya se completó o guardó
    const userId = this.state.activeUser ? this.state.activeUser.id : 'default';
    const progress = this.state.db && this.state.db.consultant_progress ? this.state.db.consultant_progress[userId] : null;
    const isWeek2Completed = progress && progress.completed_weeks && progress.completed_weeks.includes(2);
    const hasGame2Score = progress && progress.game_scores && progress.game_scores[2];
    const gameFinished = this.classGameState.currentIndex >= totalCount;
    const isCompletedEvaluated = (weekNum === 2 && (isWeek2Completed || hasGame2Score || gameFinished));

    const toolbarRight = document.querySelector('#workspace-classification-game-zone .game-toolbar-right');
    const progressWrapper = document.querySelector('#workspace-classification-game-zone .class-game-progress-wrapper');
    const completedSummaryEl = document.getElementById('class-game-completed-summary');

    // Actualizar título de la barra de herramientas según la semana
    const gameToolbarTitle = document.querySelector('#workspace-classification-game-zone .game-brand-title');
    if (gameToolbarTitle) {
      if (weekNum === 2) {
        gameToolbarTitle.innerHTML = `<i class="ti ti-layout-grid-add" style="color: var(--primary);"></i> Week 2: Classification Challenge (Final Evaluation)`;
      } else {
        gameToolbarTitle.innerHTML = `<i class="ti ti-layout-grid-add" style="color: var(--primary);"></i> Week 1: Classification Challenge (Practice)`;
      }
    }

    if (isCompletedEvaluated) {
      if (completedSummaryEl) {
        completedSummaryEl.classList.remove('hidden');
        const scoreVal = (progress && progress.game_scores[2]) ? progress.game_scores[2].score : this.classGameState.score;
        const totalVal = (progress && progress.game_scores[2]) ? progress.game_scores[2].total : totalCount;
        document.getElementById('completed-game-score-text').innerText = `${scoreVal}/${totalVal}`;
      }
      if (toolbarRight) toolbarRight.style.setProperty('display', 'none', 'important');
      if (progressWrapper) progressWrapper.classList.add('hidden');
      if (startEl) startEl.classList.add('hidden');
      if (boardEl) boardEl.classList.add('hidden');
      if (resultsEl) resultsEl.classList.add('hidden');
      return;
    } else {
      if (completedSummaryEl) completedSummaryEl.classList.add('hidden');
      if (toolbarRight) toolbarRight.style.display = 'flex';
      if (progressWrapper) progressWrapper.classList.remove('hidden');
    }

    // Ocultar botón de Reset en la barra de herramientas de la semana 2
    const toolbarResetBtn = document.querySelector('#workspace-classification-game-zone button[onclick="app.classGameReset()"]');
    if (toolbarResetBtn) {
      if (weekNum === 2) {
        toolbarResetBtn.style.display = 'none';
      } else {
        toolbarResetBtn.style.display = 'inline-block';
      }
    }
    
    if (startEl) {
      if (!this.classGameState.hasStarted) {
        startEl.classList.remove('hidden');
        if (boardEl) boardEl.classList.add('hidden');
        if (resultsEl) {
          resultsEl.classList.add('hidden');
          resultsEl.className = 'hidden';
        }
        if (totalEl) totalEl.innerText = totalCount;
        if (progressEl) progressEl.style.width = '0%';
        return;
      } else {
        startEl.classList.add('hidden');
      }
    }
    
    if (scoreEl) scoreEl.innerText = this.classGameState.score;
    if (totalEl) totalEl.innerText = totalCount;
    
    const pct = Math.round((this.classGameState.currentIndex / totalCount) * 100);
    if (progressEl) progressEl.style.width = `${pct}%`;
    
    // Clear columns
    ['asset', 'liability', 'equity'].forEach(cat => {
      const colEl = document.getElementById(`column-list-${cat}`);
      if (colEl) colEl.innerHTML = '';
    });
    
    // Render classified items
    this.classGameState.classified.forEach(item => {
      const colEl = document.getElementById(`column-list-${item.chosenCategory}`);
      if (colEl) {
        const div = document.createElement('div');
        div.className = `class-game-item-card ${item.correct ? 'correct' : 'incorrect'}`;
        div.innerHTML = `
          <span>${item.name}</span>
          <span style="font-size: 0.75rem; font-weight: 700; color: ${item.correct ? 'var(--success)' : 'var(--danger)'};">
            ${item.correct ? '✓ OK' : '✕ Err'}
          </span>
        `;
        colEl.appendChild(div);
      }
    });
    
    // Show board or results
    if (this.classGameState.currentIndex >= totalCount) {
      if (boardEl) boardEl.classList.add('hidden');
      if (resultsEl) {
        resultsEl.classList.remove('hidden');
        const resultsScoreEl = document.getElementById('class-game-results-score');
        const resultsDetailsEl = document.getElementById('class-game-results-details');
        const correctCount = this.classGameState.score;
        const accuracy = Math.round((correctCount / totalCount) * 100);
        
        if (resultsScoreEl) resultsScoreEl.innerText = `${correctCount}/${totalCount} (${accuracy}%)`;
        if (resultsDetailsEl) {
          if (accuracy >= 80) {
            resultsDetailsEl.innerText = "Excellent job! You have a solid grasp of financial accounts and classification.";
          } else if (accuracy >= 50) {
            resultsDetailsEl.innerText = "Good effort! Take a moment to review incorrect items and try again to improve your score.";
          } else {
            resultsDetailsEl.innerText = "Keep practicing! Review the definitions of assets, liabilities, and equity to build a stronger foundation.";
          }
        }
        
        // Ocultar/desactivar botón de reintento en la Semana 2 (Evaluación de 1 solo intento)
        const retryBtn = document.querySelector('#class-game-results button');
        if (retryBtn) {
          if (weekNum === 2) {
            retryBtn.style.display = 'none';
            let msgEl = document.getElementById('class-game-retry-msg');
            if (!msgEl) {
              msgEl = document.createElement('p');
              msgEl.id = 'class-game-retry-msg';
              msgEl.style.fontSize = '0.9rem';
              msgEl.style.fontWeight = '700';
              msgEl.style.color = 'var(--warning-text)';
              retryBtn.parentNode.insertBefore(msgEl, retryBtn);
            }
            msgEl.innerText = "Evaluation Finished: Your score has been recorded in the database. Only 1 attempt is allowed.";
          } else {
            retryBtn.style.display = 'inline-block';
            const msgEl = document.getElementById('class-game-retry-msg');
            if (msgEl) msgEl.remove();
          }
        }
      }
    } else {
      if (boardEl) boardEl.classList.remove('hidden');
      if (resultsEl) resultsEl.classList.add('hidden');
      this.classGameRenderCard();
    }
  },

  classGameRenderCard() {
    const container = document.getElementById('class-game-card-container');
    if (!container) return;
    
    const item = this.classGameState.shuffledAccounts[this.classGameState.currentIndex];
    if (!item) return;
    
    container.innerHTML = `
      <div class="glass-card" draggable="true" ondragstart="app.classGameDragStart(event)" style="background: var(--bg-card); border: 2px solid var(--primary); padding: 20px; border-radius: var(--radius-md); box-shadow: var(--shadow-md); cursor: grab; display: flex; flex-direction: column; gap: 10px; text-align: left; user-select: none;">
        <span style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--primary); display: flex; align-items: center; gap: 5px;">
          <i class="ti ti-arrows-maximize"></i> Drag or Select Category
        </span>
        <h4 style="font-size: 1.15rem; margin: 0; color: var(--neutral-dark); font-weight: 700;">${item.name}</h4>
        <p style="font-size: 0.8rem; color: var(--neutral-muted); margin: 0; line-height: 1.3;">${item.desc}</p>
        
        <!-- Buttons for mobile/click fallback -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-top: 15px; border-top: 1px solid var(--neutral-border); padding-top: 15px;">
          <button class="game-btn game-btn-outline" style="font-size: 0.75rem; padding: 6px 2px;" onclick="app.classGameClassify('asset')"><i class="ti ti-circle-plus"></i> Asset</button>
          <button class="game-btn game-btn-outline" style="font-size: 0.75rem; padding: 6px 2px;" onclick="app.classGameClassify('liability')"><i class="ti ti-circle-minus"></i> Liability</button>
          <button class="game-btn game-btn-outline" style="font-size: 0.75rem; padding: 6px 2px;" onclick="app.classGameClassify('equity')"><i class="ti ti-scales"></i> Equity</button>
        </div>
      </div>
    `;
  },

  classGameClassify(chosenCategory) {
    const totalCount = this.classGameState.shuffledAccounts.length || classGameAccounts.length;
    const currentItem = this.classGameState.shuffledAccounts[this.classGameState.currentIndex];
    if (!currentItem) return;
    const isCorrect = currentItem.category === chosenCategory;
    
    if (isCorrect) {
      this.classGameState.score++;
      this.classGameState.classified.push({
        name: currentItem.name,
        chosenCategory: chosenCategory,
        correct: true
      });
      this.classGameState.currentIndex++;
      this.classGameSaveState();
      
      if (this.classGameState.currentIndex >= totalCount) {
        const userId = this.state.activeUser ? this.state.activeUser.id : 'default';
        const weekNum = this.currentViewedWeek || 1;
        if (this.state.db && this.state.db.consultant_progress[userId]) {
          const progress = this.state.db.consultant_progress[userId];
          if (!progress.game_scores) progress.game_scores = {};
          progress.game_scores[weekNum] = {
            score: this.classGameState.score,
            total: totalCount,
            completedAt: new Date().toISOString()
          };
          this.saveDatabase();
        }
      }

      this.classGameRenderBoard();
    } else {
      // Shake animation
      const cardEl = document.querySelector('#class-game-card-container .glass-card');
      if (cardEl) {
        cardEl.classList.add('shake-card');
        // Disable buttons temporarily
        cardEl.querySelectorAll('button').forEach(btn => btn.disabled = true);
      }
      
      // Wait for animation to finish
      setTimeout(() => {
        this.classGameState.classified.push({
          name: currentItem.name,
          chosenCategory: chosenCategory,
          correct: false
        });
        this.classGameState.currentIndex++;
        this.classGameSaveState();
        
        if (this.classGameState.currentIndex >= totalCount) {
          const userId = this.state.activeUser ? this.state.activeUser.id : 'default';
          const weekNum = this.currentViewedWeek || 1;
          if (this.state.db && this.state.db.consultant_progress[userId]) {
            const progress = this.state.db.consultant_progress[userId];
            if (!progress.game_scores) progress.game_scores = {};
            progress.game_scores[weekNum] = {
              score: this.classGameState.score,
              total: totalCount,
              completedAt: new Date().toISOString()
            };
            this.saveDatabase();
          }
        }

        this.classGameRenderBoard();
      }, 500);
    }
  },

  classGameDragStart(event) {
    event.dataTransfer.setData('text/plain', 'active-card');
    event.dataTransfer.effectAllowed = 'move';
  },

  classGameDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    const col = event.currentTarget;
    if (col) col.classList.add('drag-over');
  },

  classGameDragLeave(event) {
    const col = event.currentTarget;
    if (col) col.classList.remove('drag-over');
  },

  classGameDrop(event, category) {
    event.preventDefault();
    const col = event.currentTarget;
    if (col) col.classList.remove('drag-over');
    
    // Classify using the dropped category
    this.classGameClassify(category);
  },

  classGameReset() {
    const weekNum = this.currentViewedWeek || 1;
    if (weekNum === 2) {
      this.showToast("Only one attempt is allowed for the Week 2 classification evaluation.", "warning");
      return;
    }
    this.classGameResetState();
    const userId = this.state.activeUser ? this.state.activeUser.id : 'default';
    if (this.state.db && this.state.db.consultant_progress[userId]) {
      const progress = this.state.db.consultant_progress[userId];
      if (progress.game_scores && progress.game_scores[weekNum]) {
        delete progress.game_scores[weekNum];
        this.saveDatabase();
      }
    }
    this.classGameRenderBoard();
  },

  classGameStartChallenge() {
    this.classGameState.hasStarted = true;
    this.classGameSaveState();
    this.classGameRenderBoard();
  },

  // MX.3 Accounting Simulator Game Controller
  simulatorState: {
    rawRows: [],
    products: [],
    byProduct: null,
    currentProduct: null,
    activeWeek: 3,
    answers: new Map() // eventId -> { debit: null, credit: null }
  },

  simInit(activeWeek) {
    if (typeof accountingGameData === 'undefined') {
      console.error("accountingGameData is not defined. Make sure accounting_game_db.js is loaded.");
      return;
    }
    this.simulatorState.activeWeek = activeWeek || 3;
    
    // Group and setup database rows
    const rows = accountingGameData;
    this.simulatorState.rawRows = rows;
    
    const byProduct = new Map();
    for (const r of rows) {
      const p = r.Product.trim();
      if (!byProduct.has(p)) byProduct.set(p, []);
      byProduct.get(p).push(r);
    }
    
    // Sort steps inside each product
    const toNumber = (v) => {
      const n = parseFloat(String(v).replace(/\s/g, '').replace(',', '.'));
      return isNaN(n) ? 0 : n;
    };
    for (const [p, arr] of byProduct) {
      arr.sort((x, y) => toNumber(x.Financial_event_step) - toNumber(y.Financial_event_step));
    }
    
    this.simulatorState.byProduct = byProduct;
    
    // Filter products if Week 4
    if (this.simulatorState.activeWeek === 4) {
      const week4ProductsList = [
        "FX Option - Trading derivative - Buy call",
        "FX Spot and FX Forward - Trading - Loss",
        "FX Spot and FX Forward - Trading - Profit",
        "FX Swap - Trading derivative",
        "Interest rate swap - Trading derivative - Loss",
        "Interest rate swap - Trading derivative - Profit"
      ];
      this.simulatorState.products = Array.from(byProduct.keys())
        .filter(p => week4ProductsList.includes(p))
        .sort((a, b) => a.localeCompare(b));
    } else {
      this.simulatorState.products = Array.from(byProduct.keys()).sort((a, b) => a.localeCompare(b));
    }
    
    // Build home selection UI
    this.simBuildHome();
    this.simGoHome();
  },

  simIsReadOnly() {
    const product = this.simulatorState.currentProduct;
    if (!product) return false;
    const userId = this.state.activeUser ? this.state.activeUser.id : null;
    const progress = userId ? this.state.db.consultant_progress[userId] : null;
    const isWeek4 = (this.simulatorState.activeWeek === 4);
    if (!isWeek4) return false;
    const score = (progress && progress.sim_scores) ? progress.sim_scores[product] : null;
    return (score !== null && score !== undefined);
  },

  simGoHome() {
    this.simulatorState.currentProduct = null;
    this.simulatorState.answers.clear();
    
    // Hide game board, show home view
    const homeView = document.getElementById('sim-home-view');
    const gameView = document.getElementById('sim-game-view');
    const btnBack = document.getElementById('sim-btn-back');
    const btnVal = document.getElementById('sim-btn-validate');
    const btnReset = document.getElementById('sim-btn-reset');
    const prodBadge = document.getElementById('sim-current-product-badge');
    
    if (homeView) homeView.classList.remove('hidden');
    if (gameView) gameView.classList.add('hidden');
    if (btnBack) btnBack.classList.add('hidden');
    if (btnVal) btnVal.classList.add('hidden');
    if (btnReset) btnReset.classList.add('hidden');
    if (prodBadge) prodBadge.classList.add('hidden');
    
    // Refresh product list and stats
    this.simBuildHome();
  },

  simGoGame(product) {
    this.simulatorState.currentProduct = product;
    this.simulatorState.answers.clear();
    
    // Check if attempted in Week 4
    const userId = this.state.activeUser ? this.state.activeUser.id : null;
    const progress = userId ? this.state.db.consultant_progress[userId] : null;
    const isWeek4 = (this.simulatorState.activeWeek === 4);
    const score = (progress && progress.sim_scores) ? progress.sim_scores[product] : null;
    const isAttempted = (score !== null && score !== undefined);
    
    if (isWeek4 && isAttempted && progress.sim_answers && progress.sim_answers[product]) {
      const savedAnswers = progress.sim_answers[product];
      for (const key in savedAnswers) {
        this.simulatorState.answers.set(key, savedAnswers[key]);
      }
    }
    
    // Show game board, hide home view
    const homeView = document.getElementById('sim-home-view');
    const gameView = document.getElementById('sim-game-view');
    const btnBack = document.getElementById('sim-btn-back');
    const btnVal = document.getElementById('sim-btn-validate');
    const btnReset = document.getElementById('sim-btn-reset');
    const prodBadge = document.getElementById('sim-current-product-badge');
    
    if (homeView) homeView.classList.add('hidden');
    if (gameView) gameView.classList.remove('hidden');
    if (btnBack) btnBack.classList.remove('hidden');
    
    if (this.simIsReadOnly()) {
      if (btnReset) btnReset.classList.add('hidden');
      if (btnVal) {
        btnVal.innerHTML = '<i class="ti ti-chart-bar"></i> Ver Resultados';
        btnVal.classList.remove('hidden');
      }
    } else {
      if (btnReset) btnReset.classList.add('hidden');
      if (btnVal) {
        btnVal.innerHTML = '<i class="ti ti-check"></i> Validar Asientos';
        btnVal.classList.add('hidden');
      }
    }
    
    if (prodBadge) {
      prodBadge.textContent = product;
      prodBadge.classList.remove('hidden');
    }
    
    // Update description banner
    const rows = this.simulatorState.byProduct.get(product) || [];
    let description = '';
    for (const r of rows) {
      if (r.Description) {
        description = r.Description;
        break;
      }
    }
    const descBar = document.getElementById('sim-desc-bar');
    const descText = document.getElementById('sim-product-desc-text');
    if (description) {
      if (descText) descText.textContent = description;
      if (descBar) descBar.classList.remove('hidden');
    } else {
      if (descBar) descBar.classList.add('hidden');
    }
    
    // Build Steps, Bricks & T-accounts
    this.simBuildStepsUI(rows);
    this.simBuildBricksUI(rows);
    this.simRenderTAccounts();
  },

  simBuildHome() {
    const listContainer = document.getElementById('sim-home-products');
    if (!listContainer) return;
    listContainer.innerHTML = '';
    
    const userId = this.state.activeUser ? this.state.activeUser.id : null;
    const progress = userId ? this.state.db.consultant_progress[userId] : null;
    const isWeek4 = (this.simulatorState.activeWeek === 4);
    
    // Build stats summary if Week 4
    const summaryBox = document.getElementById('sim-evaluation-summary');
    if (isWeek4) {
      if (summaryBox) {
        summaryBox.classList.remove('hidden');
        summaryBox.style.display = 'flex';
        
        let attemptedCount = 0;
        let totalScore = 0;
        const week4ProductsList = [
          "FX Option - Trading derivative - Buy call",
          "FX Spot and FX Forward - Trading - Loss",
          "FX Spot and FX Forward - Trading - Profit",
          "FX Swap - Trading derivative",
          "Interest rate swap - Trading derivative - Loss",
          "Interest rate swap - Trading derivative - Profit"
        ];
        
        week4ProductsList.forEach(p => {
          const score = (progress && progress.sim_scores) ? progress.sim_scores[p] : null;
          if (score !== null && score !== undefined) {
            attemptedCount++;
            totalScore += score;
          }
        });
        
        const avgScore = attemptedCount > 0 ? Math.round(totalScore / attemptedCount) : 0;
        
        summaryBox.innerHTML = `
          <div>
            <strong style="color: var(--neutral-dark);">Evaluation Progress:</strong> ${attemptedCount} of 6 instruments evaluated.
          </div>
          <div>
            <strong style="color: var(--neutral-dark); margin-right: 0.5rem;">Average Score:</strong> 
            <span style="font-size: 0.9rem; padding: 0.2rem 0.6rem; border-radius: 999px; background-color: var(--primary-light); color: var(--primary-text); font-weight: bold; border: 1px solid var(--primary);">${avgScore}%</span>
          </div>
        `;
      }
    } else {
      if (summaryBox) {
        summaryBox.classList.add('hidden');
        summaryBox.style.display = 'none';
      }
    }
    
    this.simulatorState.products.forEach(p => {
      const score = (progress && progress.sim_scores) ? progress.sim_scores[p] : null;
      const isAttempted = (score !== null && score !== undefined);
      
      const card = document.createElement('div');
      card.className = 'product-card';
      
      let statusHtml = '';
      let btnLabel = 'Open';
      
      if (isWeek4) {
        if (isAttempted) {
          statusHtml = `<span style="font-size: 0.75rem; font-weight: bold; color: var(--success); margin-right: 1rem;">Score: ${score}%</span>`;
          btnLabel = 'Review';
        } else {
          statusHtml = `<span style="font-size: 0.75rem; font-weight: bold; color: var(--warning-text); margin-right: 1rem;">Pending (1 Attempt)</span>`;
          btnLabel = 'Open';
        }
      }
      
      card.innerHTML = `
        <span class="product-name">${p}</span>
        <div style="display: flex; align-items: center;">
          ${statusHtml}
          <button class="game-btn game-btn-primary" style="font-size: 0.75rem; padding: 0.3rem 0.8rem;">${btnLabel}</button>
        </div>
      `;
      card.onclick = () => this.simGoGame(p);
      listContainer.appendChild(card);
    });
  },

  simFilterProducts() {
    const search = document.getElementById('sim-home-search');
    if (!search) return;
    const q = search.value.trim().toLowerCase();
    
    const cards = document.querySelectorAll('#sim-home-products .product-card');
    cards.forEach(card => {
      const text = card.querySelector('.product-name').textContent.toLowerCase();
      if (!q || text.includes(q)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  },

  simBuildStepsUI(rows) {
    const container = document.getElementById('sim-steps-container');
    if (!container) return;
    container.innerHTML = '';
    
    const fmtUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    const toNumber = (v) => {
      const n = parseFloat(String(v).replace(/\s/g, '').replace(',', '.'));
      return isNaN(n) ? 0 : n;
    };
    
    let currentStep = null;
    rows.forEach((r, idx) => {
      const step = toNumber(r.Financial_event_step);
      if (step !== currentStep) {
        currentStep = step;
        const subheader = document.createElement('div');
        subheader.className = 'step-subheader';
        
        let helpText = '';
        for (const row of rows) {
          if (toNumber(row.Financial_event_step) === step && row.Help) {
            helpText = row.Help;
            break;
          }
        }
        
        subheader.innerHTML = `Step ${step} ${helpText ? `<span class="ms-1" style="cursor:help;" title="${helpText.replace(/"/g, '&quot;')}">❔</span>` : ''}`;
        container.appendChild(subheader);
      }
      
      const evId = `${r.Product}__${r.Financial_event_step}__${r.Financial_event}__${idx}`;
      const ans = this.simulatorState.answers.get(evId) || { debit: null, credit: null };
      
      const card = document.createElement('div');
      card.className = 'event-card';
      card.dataset.eventId = evId;
      
      const amountVal = toNumber(r.Financial_event_amount);
      const amountTxt = isFinite(amountVal) && amountVal > 0 ? fmtUSD.format(amountVal) : '—';
      const reversed = r.Reversed && r.Reversed.trim().toLowerCase() === 'yes' ? ' · reversed' : '';
      
      const isReadOnly = this.simIsReadOnly();
      
      const getDropzoneContent = (side, account) => {
        if (account) {
          return `
            <span class="selected-pill">
              <strong>${account}</strong>
              ${isReadOnly ? '' : `<button title="Remove" onclick="event.stopPropagation(); app.simRemoveSelection(this, '${evId}', '${side}')">✕</button>`}
            </span>
          `;
        } else {
          return `<span class="tiny">${isReadOnly ? 'No contestado' : 'Drop an account here'}</span>`;
        }
      };
      
      card.innerHTML = `
        <div class="event-title">${r.Financial_event} <span class="tiny">(amount: <strong>${amountTxt}</strong>${reversed})</span></div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 0.5rem;">
          <div>
            <span class="slot-label">Debit</span>
            <div class="dropzone" data-side="debit">
              ${getDropzoneContent('debit', ans.debit)}
            </div>
          </div>
          <div>
            <span class="slot-label">Credit</span>
            <div class="dropzone" data-side="credit">
              ${getDropzoneContent('credit', ans.credit)}
            </div>
          </div>
        </div>
      `;
      
      card.querySelectorAll('.dropzone').forEach(dz => {
        this.simAttachDropzoneHandlers(dz);
      });
      
      container.appendChild(card);
    });
  },

  simBuildBricksUI(rows) {
    const container = document.getElementById('sim-bricks-container');
    if (!container) return;
    container.innerHTML = '';
    
    const set = new Set();
    rows.forEach(r => {
      if (r.Debit_account_label && r.Debit_account_label.trim()) set.add(r.Debit_account_label.trim());
      if (r.Credit_account_label && r.Credit_account_label.trim()) set.add(r.Credit_account_label.trim());
    });
    const accounts = Array.from(set).sort((a, b) => a.localeCompare(b));
    
    const isReadOnly = this.simIsReadOnly();
    
    accounts.forEach(acc => {
      const brick = document.createElement('span');
      brick.className = 'account-brick';
      brick.dataset.account = acc;
      brick.textContent = acc;
      
      if (isReadOnly) {
        brick.style.opacity = '0.5';
        brick.style.cursor = 'not-allowed';
      } else {
        brick.draggable = true;
        brick.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text/plain', acc);
          e.dataTransfer.effectAllowed = 'copy';
        });
      }
      
      container.appendChild(brick);
    });
    
    const filter = document.getElementById('sim-account-search');
    if (filter) filter.value = '';
  },

  simFilterBricks() {
    const filter = document.getElementById('sim-account-search');
    if (!filter) return;
    const q = filter.value.trim().toLowerCase();
    
    const bricks = document.querySelectorAll('#sim-bricks-container .account-brick');
    bricks.forEach(b => {
      const text = b.dataset.account.toLowerCase();
      if (!q || text.includes(q)) {
        b.style.display = 'inline-flex';
      } else {
        b.style.display = 'none';
      }
    });
  },

  simAttachDropzoneHandlers(dz) {
    dz.addEventListener('dragover', (e) => {
      if (this.simIsReadOnly()) return;
      e.preventDefault();
      dz.classList.add('drag-over');
      e.dataTransfer.dropEffect = 'copy';
    });
    
    dz.addEventListener('dragleave', () => {
      if (this.simIsReadOnly()) return;
      dz.classList.remove('drag-over');
    });
    
    dz.addEventListener('drop', (e) => {
      if (this.simIsReadOnly()) return;
      e.preventDefault();
      dz.classList.remove('drag-over');
      const account = e.dataTransfer.getData('text/plain');
      if (!account) return;
      this.simSetSelectionForDropzone(dz, account);
    });
  },

  simSetSelectionForDropzone(dz, account) {
    if (this.simIsReadOnly()) return;
    const card = dz.closest('.event-card');
    const evId = card.dataset.eventId;
    const side = dz.dataset.side;
    
    if (!this.simulatorState.answers.has(evId)) {
      this.simulatorState.answers.set(evId, { debit: null, credit: null });
    }
    
    const ans = this.simulatorState.answers.get(evId);
    ans[side] = account;
    
    dz.innerHTML = `
      <span class="selected-pill">
        <strong>${account}</strong>
        <button title="Remove" onclick="event.stopPropagation(); app.simRemoveSelection(this, '${evId}', '${side}')">✕</button>
      </span>
    `;
    
    const btnVal = document.getElementById('sim-btn-validate');
    const btnReset = document.getElementById('sim-btn-reset');
    if (btnVal) btnVal.classList.remove('hidden');
    if (btnReset) btnReset.classList.remove('hidden');
    
    this.simRenderTAccounts();
  },

  simRemoveSelection(btn, evId, side) {
    if (this.simIsReadOnly()) return;
    const dz = btn.closest('.dropzone');
    if (!dz) return;
    
    const ans = this.simulatorState.answers.get(evId);
    if (ans) {
      ans[side] = null;
    }
    
    dz.innerHTML = `<span class="tiny">Drop an account here</span>`;
    this.simRenderTAccounts();
  },

  simRenderTAccounts() {
    const container = document.getElementById('sim-t-accounts-container');
    if (!container) return;
    container.innerHTML = '';
    
    const product = this.simulatorState.currentProduct;
    if (!product) {
      container.textContent = 'Nothing to display yet.';
      return;
    }
    
    const rows = this.simulatorState.byProduct.get(product) || [];
    const ledger = [];
    
    const toNumber = (v) => {
      const n = parseFloat(String(v).replace(/\s/g, '').replace(',', '.'));
      return isNaN(n) ? 0 : n;
    };
    
    rows.forEach((r, idx) => {
      const evId = `${r.Product}__${r.Financial_event_step}__${r.Financial_event}__${idx}`;
      const ans = this.simulatorState.answers.get(evId) || { debit: null, credit: null };
      const amount = toNumber(r.Financial_event_amount);
      const reversed = r.Reversed && r.Reversed.trim().toLowerCase() === 'yes';
      
      if (ans.debit) {
        ledger.push({ debitAcc: ans.debit, amount });
        if (reversed) ledger.push({ creditAcc: ans.debit, amount });
      }
      if (ans.credit) {
        ledger.push({ creditAcc: ans.credit, amount });
        if (reversed) ledger.push({ debitAcc: ans.credit, amount });
      }
    });
    
    if (ledger.length === 0) {
      container.innerHTML = `<div class="small-note text-center py-6" style="font-style: italic;">Nothing to display yet.</div>`;
      return;
    }
    
    const accounts = new Map();
    const ensure = (name) => {
      if (!accounts.has(name)) accounts.set(name, { debits: [], credits: [] });
      return accounts.get(name);
    };
    
    for (const e of ledger) {
      if (e.debitAcc) ensure(e.debitAcc).debits.push(e.amount);
      if (e.creditAcc) ensure(e.creditAcc).credits.push(e.amount);
    }
    
    const fmtUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    const sorted = Array.from(accounts.keys()).sort((a, b) => a.localeCompare(b));
    
    sorted.forEach(acc => {
      const data = accounts.get(acc);
      const totalDr = data.debits.reduce((s, a) => s + a, 0);
      const totalCr = data.credits.reduce((s, a) => s + a, 0);
      const balance = totalDr - totalCr;
      const balLabel = balance === 0 ? '—' : `${fmtUSD.format(Math.abs(balance))} ${balance > 0 ? 'Dr' : 'Cr'}`;
      
      const wrap = document.createElement('div');
      wrap.className = 'tacct';
      wrap.innerHTML = `
        <div class="tacct-header">
          <div class="tacct-title" title="${acc}">${acc}</div>
          <div><span class="balance-pill">Balance: ${balLabel}</span></div>
        </div>
        <div class="tacct-body">
          <div class="tacct-col">
            <h6>Debit</h6>
            ${data.debits.map(a => `<div class="t-line"><span>${fmtUSD.format(a)}</span></div>`).join('')}
          </div>
          <div class="tacct-col">
            <h6>Credit</h6>
            ${data.credits.map(a => `<div class="t-line"><span>${fmtUSD.format(a)}</span></div>`).join('')}
          </div>
        </div>
      `;
      container.appendChild(wrap);
    });
  },

  simReset() {
    if (this.simIsReadOnly()) return;
    this.simulatorState.answers.clear();
    const container = document.getElementById('sim-steps-container');
    if (container) {
      container.querySelectorAll('.dropzone').forEach(dz => {
        dz.innerHTML = `<span class="tiny">Drop an account here</span>`;
      });
    }
    this.simRenderTAccounts();
  },

  simValidate() {
    const product = this.simulatorState.currentProduct;
    if (!product) return;
    
    const isWeek4 = (this.simulatorState.activeWeek === 4);
    const userId = this.state.activeUser ? this.state.activeUser.id : null;
    const progress = userId ? this.state.db.consultant_progress[userId] : null;

    if (isWeek4 && progress) {
      const score = (progress.sim_scores) ? progress.sim_scores[product] : null;
      if (score !== null && score !== undefined) {
        // Already attempted, just open the modal
        this.simShowResultsModal(product);
        return;
      }
      
      const confirmSubmit = confirm("Are you sure you want to validate your entries? You only have 1 attempt for this instrument and your score will be saved permanently.");
      if (!confirmSubmit) return;
    }

    const rows = this.simulatorState.byProduct.get(product) || [];
    let correct = 0;
    const total = rows.length * 2;
    
    const toNumber = (v) => {
      const n = parseFloat(String(v).replace(/\s/g, '').replace(',', '.'));
      return isNaN(n) ? 0 : n;
    };

    rows.forEach((r, idx) => {
      const evId = `${r.Product}__${r.Financial_event_step}__${r.Financial_event}__${idx}`;
      const ans = this.simulatorState.answers.get(evId) || { debit: null, credit: null };
      
      const correctDr = r.Debit_account_label ? r.Debit_account_label.trim() : '';
      const correctCr = r.Credit_account_label ? r.Credit_account_label.trim() : '';
      
      const ansDr = ans.debit ? ans.debit.trim() : '';
      const ansCr = ans.credit ? ans.credit.trim() : '';
      
      const okDr = ansDr === correctDr;
      const okCr = ansCr === correctCr;
      
      if (okDr) correct++;
      if (okCr) correct++;
    });
    
    const scorePct = Math.round((correct / total) * 100);
    
    // Save to database if Week 4
    if (isWeek4 && progress) {
      if (!progress.sim_scores) progress.sim_scores = {};
      if (!progress.sim_answers) progress.sim_answers = {};
      
      const answersObj = {};
      for (const [key, value] of this.simulatorState.answers.entries()) {
        answersObj[key] = value;
      }
      
      progress.sim_scores[product] = scorePct;
      progress.sim_answers[product] = answersObj;
      this.saveDatabase();
      
      // Update UI buttons state to Read Only
      const btnVal = document.getElementById('sim-btn-validate');
      const btnReset = document.getElementById('sim-btn-reset');
      if (btnReset) btnReset.classList.add('hidden');
      if (btnVal) btnVal.innerHTML = '<i class="ti ti-chart-bar"></i> Ver Resultados';
      
      // Re-build bricks to disable drag
      this.simBuildBricksUI(rows);
      // Re-build steps to remove cross icons
      this.simBuildStepsUI(rows);
    }
    
    this.simShowResultsModal(product);
  },

  simShowResultsModal(product) {
    const rows = this.simulatorState.byProduct.get(product) || [];
    let correct = 0;
    const total = rows.length * 2;
    const feedback = [];
    
    const toNumber = (v) => {
      const n = parseFloat(String(v).replace(/\s/g, '').replace(',', '.'));
      return isNaN(n) ? 0 : n;
    };

    rows.forEach((r, idx) => {
      const evId = `${r.Product}__${r.Financial_event_step}__${r.Financial_event}__${idx}`;
      const ans = this.simulatorState.answers.get(evId) || { debit: null, credit: null };
      
      const correctDr = r.Debit_account_label ? r.Debit_account_label.trim() : '';
      const correctCr = r.Credit_account_label ? r.Credit_account_label.trim() : '';
      
      const ansDr = ans.debit ? ans.debit.trim() : '';
      const ansCr = ans.credit ? ans.credit.trim() : '';
      
      const okDr = ansDr === correctDr;
      const okCr = ansCr === correctCr;
      
      if (okDr) correct++;
      if (okCr) correct++;
      
      feedback.push({
        step: r.Financial_event_step,
        event: r.Financial_event,
        okDr,
        okCr,
        ansDr: ansDr || 'empty',
        ansCr: ansCr || 'empty',
        correctDr,
        correctCr
      });
    });
    
    const scorePct = Math.round((correct / total) * 100);
    
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'custom-game-modal';
    modalOverlay.onclick = () => modalOverlay.remove();
    
    const content = document.createElement('div');
    content.className = 'custom-game-modal-content';
    content.onclick = (e) => e.stopPropagation();
    
    content.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #e5e7eb; padding-bottom: 0.75rem; margin-bottom: 1rem;">
        <h4 style="margin: 0; font-size: 1.1rem; font-weight: 700;">Result — ${product}</h4>
        <button style="background: transparent; border: none; font-size: 1.25rem; cursor: pointer; color: #94a3b8; font-weight: bold;" onclick="this.closest('.custom-game-modal').remove()">✕</button>
      </div>
      
      <div style="margin-bottom: 1rem;">
        Score: <span class="badge ${scorePct === 100 ? 'badge-success' : 'badge-neutral'}" style="font-size: 0.9rem; padding: 0.2rem 0.6rem; border-radius: 999px; background-color: ${scorePct === 100 ? 'var(--success-light)' : 'var(--neutral-light)'}; color: ${scorePct === 100 ? 'var(--success-text)' : 'var(--neutral-muted)'}; font-weight: bold; border: 1px solid ${scorePct === 100 ? 'var(--success)' : 'var(--neutral-border)'};">${scorePct}%</span>
      </div>
      
      <div style="max-height: 350px; overflow-y: auto; margin-bottom: 1rem;">
        <table>
          <thead>
            <tr>
              <th>Step</th>
              <th>Event</th>
              <th>Debit</th>
              <th>Credit</th>
            </tr>
          </thead>
          <tbody>
            ${feedback.map(f => `
              <tr>
                <td style="font-family: monospace; font-weight: bold; color: #475569;">${f.step}</td>
                <td style="font-weight: 600;">${f.event}</td>
                <td>
                  <span style="color: ${f.okDr ? '#16a34a' : '#dc2626'}; font-weight: bold; margin-right: 0.25rem;">${f.okDr ? '✔' : '✖'}</span>
                  <span style="font-family: monospace; color: #334155; font-size: 0.75rem;">${f.ansDr}</span>
                  ${!f.okDr ? `<div style="font-family: monospace; font-size: 0.7rem; color: #d97706; margin-top: 0.15rem;">→ ${f.correctDr}</div>` : ''}
                </td>
                <td>
                  <span style="color: ${f.okCr ? '#16a34a' : '#dc2626'}; font-weight: bold; margin-right: 0.25rem;">${f.okCr ? '✔' : '✖'}</span>
                  <span style="font-family: monospace; color: #334155; font-size: 0.75rem;">${f.ansCr}</span>
                  ${!f.okCr ? `<div style="font-family: monospace; font-size: 0.7rem; color: #d97706; margin-top: 0.15rem;">→ ${f.correctCr}</div>` : ''}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      
      <div style="display: flex; justify-content: flex-end; border-top: 1px solid #e5e7eb; padding-top: 0.75rem; margin-top: 1rem;">
        <button class="game-btn game-btn-outline" onclick="this.closest('.custom-game-modal').remove()">Close</button>
      </div>
    `;
    
    modalOverlay.appendChild(content);
    document.body.appendChild(modalOverlay);
  },

  switchPanelTab(tabName) {
    this.state.activePanelTab = tabName;
    if (tabName === 'evaluation') {
      this.initEvaluacionSemanalUI(this.state.selectedWeekNum || 1);
    }
    
    // Tabs buttons toggle
    document.querySelectorAll('.panel-tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    const tabBtn = document.getElementById(`tab-btn-${tabName}`);
    if (tabBtn) tabBtn.classList.add('active');
    
    // Panes view toggle
    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.remove('active');
    });
    const paneEl = document.getElementById(`pane-${tabName}`);
    if (paneEl) paneEl.classList.add('active');
    
    // Cancel quiz if navigating away from quiz pane
    if (tabName !== 'evaluation' && this.state.testState.active) {
      this.resetTestState();
    }
  },

  toggleChecklistItem(weekNum, itemIdx) {
    // Deprecated for juniors/consultants as they are read-only now
    this.showToast("Only your assigned tutor can modify this checklist.", "danger");
  },

  toggleTraineeChecklistItem(traineeId, weekNum, itemIdx) {
    const activeUserId = this.state.activeUser.id;
    const tutorId = this.state.db.tutor_junior_mapping[traineeId];
    
    if (activeUserId !== tutorId) {
      this.showToast("Only the assigned tutor can modify this checklist.", "danger");
      return;
    }

    const progress = this.state.db.consultant_progress[traineeId];
    if (!progress.checklist_states[weekNum]) {
      progress.checklist_states[weekNum] = {};
    }

    const currentState = progress.checklist_states[weekNum][itemIdx] === true;
    progress.checklist_states[weekNum][itemIdx] = !currentState;
    
    this.checkWeekCompletion(traineeId, weekNum);
    this.saveDatabase();

    // Re-render
    this.loadInspectedWeekDetail(traineeId, weekNum);
    this.showToast("Checklist updated.");
  },

  updateEvaluationTabState(weekNum, progress, template, allChecked) {
    const lockedState = document.getElementById('evaluation-locked-state');
    const completedState = document.getElementById('evaluation-completed-state');
    const readyState = document.getElementById('evaluation-ready-state');
    const testingState = document.getElementById('evaluation-testing-state');
    
    const failedState = document.getElementById('evaluation-failed-state');
    
    // Default hide all states
    lockedState.style.display = 'none';
    completedState.style.display = 'none';
    readyState.style.display = 'none';
    testingState.style.display = 'none';
    if (failedState) failedState.style.display = 'none';
    
    const testScore = progress.test_scores[weekNum];
    const isCompleted = progress.completed_weeks.includes(weekNum);
    const testQuestionsAvailable = this.state.db.questions[weekNum] !== undefined;
    const attempts = progress.test_attempts[weekNum] || 0;
    
    const isFailedNoAttempts = (weekNum === 1 && attempts >= 1 && !isCompleted && testScore !== undefined && testScore !== null);

    if (!testQuestionsAvailable && !isCompleted) {
      // If we don't have mock questions, auto-unlock on checklist completion or show default exam
      readyState.style.display = 'flex';
      document.getElementById('eval-question-count').innerText = "10";
      document.getElementById('eval-min-score').innerText = `${template.knowledge_test?.min_passing_score || 70}%`;
    }

    if (isCompleted || (testScore >= (template.knowledge_test?.min_passing_score || 70))) {
      // Completed / Approved
      completedState.style.display = 'flex';
      document.getElementById('evaluation-completed-score').innerText = `${testScore || 100}%`;
      document.getElementById('evaluation-completed-msg').innerText = `Approved successfully. You have passed the required threshold of ${template.knowledge_test?.min_passing_score || 70}%.`;
    } else if (isFailedNoAttempts) {
      // Failed and out of attempts for week 1
      if (failedState) {
        failedState.style.display = 'flex';
        const failedScoreEl = document.getElementById('evaluation-failed-score');
        const failedMsgEl = document.getElementById('evaluation-failed-msg');
        if (failedScoreEl) failedScoreEl.innerText = `${testScore}%`;
        if (failedMsgEl) {
          failedMsgEl.innerText = `You have failed the evaluation with a score of ${testScore}%. You have exhausted your only available attempt for this week.`;
        }
      }
    } else if (!allChecked && weekNum !== 1) {
      // Checklist incomplete -> locked
      lockedState.style.display = 'flex';
    } else if (this.state.testState.active && this.state.testState.weekNum === weekNum) {
      // Active test taking UI
      testingState.style.display = 'block';
    } else {
      // Ready to start
      readyState.style.display = 'flex';
      document.getElementById('eval-question-count').innerText = this.state.db.questions[weekNum] ? this.state.db.questions[weekNum].length : "5";
      document.getElementById('eval-min-score').innerText = `${template.knowledge_test?.min_passing_score || 70}%`;
    }
  },

  updateDeliverableTabState(weekNum, progress, template, allChecked) {
    const notRequiredState = document.getElementById('deliverable-not-required');
    const activeState = document.getElementById('deliverable-active-state');
    
    notRequiredState.style.display = 'none';
    activeState.style.display = 'none';
    
    if (!template.deliverable) {
      notRequiredState.style.display = 'flex';
      return;
    }
    
    activeState.style.display = 'flex';
    document.getElementById('deliverable-requirements-title').innerText = template.deliverable.description;
    
    const fileData = progress.deliverables[weekNum];
    const uploaderBox = document.getElementById('deliverable-uploader-box');
    const fileRow = document.getElementById('deliverable-uploaded-file-row');
    const submitBtn = document.getElementById('btn-submit-deliverable');
    const statusAlert = document.getElementById('deliverable-status-alert');

    // Reset components visibility
    uploaderBox.style.display = 'none';
    fileRow.style.display = 'none';
    submitBtn.style.display = 'none';
    
    if (!fileData) {
      // No file uploaded
      statusAlert.className = 'deliverable-alert info';
      statusAlert.innerHTML = '<i class="ti ti-alert-circle"></i> Pending submission';
      
      if (allChecked) {
        uploaderBox.style.display = 'flex';
      } else {
        uploaderBox.style.display = 'flex';
        uploaderBox.style.opacity = '0.5';
        uploaderBox.style.cursor = 'not-allowed';
        uploaderBox.onclick = (e) => {
          e.stopPropagation();
          this.showToast("Complete all weekly Checklist items first.", "warning");
        };
      }
    } else {
      // File uploaded
      fileRow.style.display = 'flex';
      document.getElementById('uploaded-file-name').innerText = fileData.fileName;
      
      const fileTrashBtn = fileRow.querySelector('.btn-icon-danger');
      
      if (fileData.status === 'pending_review') {
        statusAlert.className = 'deliverable-alert warning';
        statusAlert.innerHTML = '<i class="ti ti-clock"></i> Submitted. Awaiting tutor review';
        fileTrashBtn.style.display = 'none'; // Lock deletion during review
      } else if (fileData.status === 'approved') {
        statusAlert.className = 'deliverable-alert success';
        statusAlert.innerHTML = '<i class="ti ti-circle-check"></i> Deliverable Approved';
        fileTrashBtn.style.display = 'none';
      } else if (fileData.status === 'rejected') {
        statusAlert.className = 'deliverable-alert danger';
        statusAlert.innerHTML = '<i class="ti ti-alert-triangle"></i> Rejected by tutor. Upload a new version';
        fileTrashBtn.style.display = 'flex'; // Allow re-upload
      } else {
        // Mock temporary selected file (before official submission)
        statusAlert.className = 'deliverable-alert info';
        statusAlert.innerHTML = '<i class="ti ti-file-upload"></i> File uploaded. Ready to submit';
        fileTrashBtn.style.display = 'flex';
        submitBtn.style.display = 'block';
      }
    }
  },

  // ==========================================================================
  // STATE-DRIVEN QUIZ ENGINE FOR WEEKLY EVALUATION
  // ==========================================================================
  getQuizPool() {
    const weekNum = this.quizEngine.semana;
    let quizPool = [];
    if (this.state.db && this.state.db.questions) {
      quizPool = this.state.db.questions[weekNum] || this.state.db.questions[String(weekNum)] || [];
    }
    if (quizPool.length === 0 && weekNum === 1) {
      quizPool = bancoPreguntasSemana1.map(item => ({
        question: item.q,
        options: item.opts.map(o => o.replace(/^[A-D]\)\s*/, '')),
        correct: item.ans
      }));
    }
    return quizPool;
  },

  initEvaluacionSemanalUI(numeroSemana) {
    this.quizEngine.semana = parseInt(numeroSemana);
    clearInterval(this.quizEngine.timerInterval);

    const timerDisplay = document.getElementById('quiz-timer-display');
    const scoreDisplay = document.getElementById('quiz-score-live');
    const ping = document.getElementById('eval-ping-core');
    
    if (timerDisplay) timerDisplay.classList.add('hidden');
    if (scoreDisplay) scoreDisplay.classList.add('hidden');

    // CONTROL DE INTENTO ÚNICO: Bloqueo si ya se usó
    const activeUserId = this.state.activeUser ? this.state.activeUser.id : 'default';
    if (this.getQuizSpentState(activeUserId, this.quizEngine.semana)) {
        const attemptExists = (this.state.db.historial_evaluaciones || []).some(
          h => h.usuario_id === activeUserId && h.semana_malla === this.quizEngine.semana
        );
        if (attemptExists) {
          if (ping) {
            ping.style.backgroundColor = "var(--primary)";
            ping.className = "w-2 h-2 rounded-full inline-block";
          }
          this.renderTestCorrectionMode(this.quizEngine.semana);
          return;
        }

        if (ping) {
          ping.style.backgroundColor = "var(--danger)";
          ping.className = "w-2 h-2 rounded-full inline-block";
        }
        this.renderPantallaBloqueo("⛔ INSTANCE LOCKED: ATTEMPT EXHAUSTED", "You have completed the maximum limit of 1 attempt allowed for this onboarding week.");
        return;
    }

    // REGLA DE CANDADO: Semana sin preguntas cargadas
    const testQuestionsAvailable = this.state.db && this.state.db.questions && this.state.db.questions[this.quizEngine.semana] && this.state.db.questions[this.quizEngine.semana].length > 0;
    if (!testQuestionsAvailable) {
        if (ping) {
          ping.style.backgroundColor = "var(--neutral-muted)";
          ping.className = "w-2 h-2 rounded-full inline-block";
        }
        this.renderPantallaBloqueo("🔒 EVALUATION LOCKED (PREVIEW)", `Certification material for Week ${this.quizEngine.semana} is undergoing instructional validation.`);
        return;
    }

    // Si pasa los controles, iniciamos en la Pantalla 1 (Home)
    if (ping) {
      ping.style.backgroundColor = "var(--warning)";
      ping.className = "w-2 h-2 rounded-full inline-block";
    }
    this.quizEngine.stage = 1;
    this.actualizarFlujoPantallasQuiz();
  },

  actualizarFlujoPantallasQuiz() {
    const screen = document.getElementById('quiz-engine-screen');
    if (!screen) return;

    // PANTALLA 1: HOME DE EVALUACIÓN
    if (this.quizEngine.stage === 1) {
        screen.innerHTML = `
            <div style="text-align: center; padding: 24px 16px; font-family: var(--font-primary);">
                <p style="color: var(--primary); font-weight: bold; font-size: 0.85rem; margin-bottom: 8px;">
                    📝 EVALUATION AVAILABLE
                </p>
                <h4 style="color: var(--neutral-dark); font-size: 14px; font-weight: bold; margin-bottom: 12px; text-transform: uppercase;">
                    Weekly Theoretical Validation
                </h4>
                <p style="font-size: 12px; color: var(--neutral-muted); line-height: 1.5; max-width: 340px; margin: 0 auto 20px auto;">
                    This evaluation consists of multiple-choice questions about the contents of MX.3. Once started, you have 25 minutes. 
                    <br><strong>Limit: 1 attempt allowed.</strong>
                </p>
                <button class="btn btn-primary" onclick="app.irAPantallaConfirmacion()" style="padding: 8px 24px; font-weight: 600; font-size: 0.85rem; letter-spacing: 0.05em;">
                    START EVALUATION
                </button>
            </div>
        `;
    } 
    // PANTALLA 2: ADVERTENCIA / CONFIRMACIÓN INTEGRADA
    else if (this.quizEngine.stage === 2) {
        screen.innerHTML = `
        <div style="text-align: center; padding: 24px 16px; font-family: var(--font-primary); background-color: #fff4e5; border-radius: 8px; border: 1px dashed #ffe8cc; margin: 10px 0;">
            <p style="color: var(--warning-text); font-weight: bold; font-size: 0.85rem; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; gap: 6px;">
                ⚠️ CRITICAL RAMP-UP WARNING
            </p>
            <p style="color: var(--neutral-dark); font-size: 13px; font-weight: 600; margin-bottom: 12px; max-width: 320px; margin-left: auto; margin-right: auto; line-height: 1.4;">
                Once the test has started, it cannot be paused or exited. If you leave the tab or close the browser, your attempt will be recorded as failed with 0%.
            </p>
            <div style="display: flex; gap: 12px; justify-content: center; margin-top: 16px;">
                <button class="btn btn-success" onclick="app.comenzarEvaluacionEfectiva()" style="padding: 6px 16px; font-size: 0.8rem; font-weight: 600;">
                    CONFIRM
                </button>
                <button class="btn btn-outline btn-neutral" onclick="app.initEvaluacionSemanalUI(${this.quizEngine.semana})" style="padding: 6px 16px; font-size: 0.8rem; font-weight: 600;">
                    CANCEL
                </button>
            </div>
        </div>
        `;
    }
  },

  irAPantallaConfirmacion() {
    this.quizEngine.stage = 2;
    this.actualizarFlujoPantallasQuiz();
  },

  renderPantallaBloqueo(titulo, sub) {
    const screen = document.getElementById('quiz-engine-screen');
    if (!screen) return;
    screen.innerHTML = `
      <div class="animate-fadeIn" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 24px 16px; font-family: var(--font-primary); border: 1px solid var(--neutral-border); background-color: var(--neutral-light); border-radius: 8px; margin: 10px 0;">
        <div style="font-size: 1.5rem; margin-bottom: 12px;">
          ${titulo.startsWith('🔒') ? '🔒' : '⛔'}
        </div>
        <h4 style="margin: 0 0 8px 0; font-size: 0.85rem; font-weight: bold; color: var(--neutral-dark); text-transform: uppercase; letter-spacing: 0.05em;">
          ${titulo.replace(/^[🔒⛔]\s*/, '')}
        </h4>
        <p style="margin: 0; font-size: 0.8rem; color: var(--neutral-muted); line-height: 1.6; max-width: 320px; margin-left: auto; margin-right: auto;">
          ${sub}
        </p>
      </div>
    `;
  },

  comenzarEvaluacionEfectiva() {
    const activeUserId = this.state.activeUser ? this.state.activeUser.id : 'default';
    this.setQuizSpentState(activeUserId, this.quizEngine.semana, true);

    const timerDisplay = document.getElementById('quiz-timer-display');
    const scoreDisplay = document.getElementById('quiz-score-live');
    const ping = document.getElementById('eval-ping-core');
    if (timerDisplay) timerDisplay.classList.remove('hidden');
    if (scoreDisplay) scoreDisplay.classList.remove('hidden');
    if (ping) {
      ping.style.backgroundColor = "var(--success)";
      ping.className = "w-2 h-2 rounded-full inline-block animate-pulse";
    }

    this.quizEngine.index = 0;
    this.quizEngine.correctas = 0;
    this.quizEngine.tiempo = 25 * 60;
    this.quizEngine.stage = 3;

    this.quizEngine.timerInterval = setInterval(() => {
        this.quizEngine.tiempo--;
        this.actualizarRelojUI();
        if (this.quizEngine.tiempo <= 0) {
            clearInterval(this.quizEngine.timerInterval);
            this.terminarYMostrarResultado();
        }
    }, 1000);

    this.renderPreguntaConsola();
  },

  actualizarRelojUI() {
    const mins = Math.floor(this.quizEngine.tiempo / 60);
    const secs = this.quizEngine.tiempo % 60;
    const timerDisplay = document.getElementById('quiz-timer-display');
    if (timerDisplay) {
      timerDisplay.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
  },

  renderPreguntaConsola() {
    const screen = document.getElementById('quiz-engine-screen');
    if (!screen) return;
    const idx = this.quizEngine.index;
    const quizPool = this.getQuizPool();
    const item = quizPool[idx];

    if (!item) {
        this.terminarYMostrarResultado();
        return;
    }

    const liveCorrectas = document.getElementById('live-correctas');
    const liveTotales = document.getElementById('live-totales');
    if (liveCorrectas) liveCorrectas.innerText = this.quizEngine.correctas;
    if (liveTotales) liveTotales.innerText = idx;

    const letras = ['A', 'B', 'C', 'D'];

    screen.innerHTML = `
        <div class="animate-fadeIn" style="display: flex; flex-direction: column; gap: 16px; font-family: var(--font-primary);">
            <div style="display: flex; justify-content: space-between; font-size: 0.65rem; color: var(--neutral-muted); font-weight: 600; border-bottom: 1px solid var(--neutral-border); padding-bottom: 8px; width: 100%;">
                <span>PROCESSING: QUESTION ${idx + 1} OF ${quizPool.length}</span>
                <span style="color: var(--primary);">PROGRESS: ${Math.round((idx / quizPool.length) * 100)}%</span>
            </div>

            <div style="font-size: 0.85rem; font-weight: 600; color: var(--neutral-dark); background-color: var(--neutral-light); padding: 16px; border-radius: 8px; border: 1px solid var(--neutral-border); line-height: 1.6; box-shadow: 0 1px 3px rgba(0,0,0,0.02); word-wrap: break-word; break-words: break-all;">
                ${item.question}
            </div>

            <div style="display: flex; flex-direction: column; gap: 10px; width: 100%;">
                ${item.options.map((opcion, oIdx) => {
                    const cleanOpcion = opcion.replace(/^[A-D]\)\s*/, '');
                    return `
                        <div 
                            onclick="app.registrarRespuestaExamen(${oIdx})"
                            class="quiz-option-btn"
                        >
                            <span class="quiz-option-letter">
                                ${letras[oIdx]}
                            </span>
                            <span class="quiz-option-text">
                                ${cleanOpcion}
                            </span>
                        </div>
                    `;
                }).join('')}
            </div>

            <div style="margin-top: 16px; padding-top: 12px; border-top: 1px solid var(--neutral-border); display: flex; justify-content: flex-end;">
                <button onclick="app.terminarYMostrarResultado()" style="background: var(--neutral-light); border: 1px solid var(--neutral-border); color: var(--neutral-muted); font-weight: bold; font-size: 0.75rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.color='var(--danger-text)'; this.style.borderColor='var(--danger)';" onmouseout="this.style.color='var(--neutral-muted)'; this.style.borderColor='var(--neutral-border)';">
                    SUBMIT TEST
                </button>
            </div>
        </div>
    `;
  },

  registrarRespuestaExamen(opcionElegida) {
    const quizPool = this.getQuizPool();
    const item = quizPool[this.quizEngine.index];
    const letras = ['A', 'B', 'C', 'D'];
    
    // Store user's response
    this.quizEngine.respuestasUsuario = this.quizEngine.respuestasUsuario || {};
    const qKey = `P${this.quizEngine.index + 1}`;
    this.quizEngine.respuestasUsuario[qKey] = {
      marcada: letras[opcionElegida],
      correcta: letras[item.correct],
      es_valida: opcionElegida === item.correct
    };

    if (opcionElegida === item.correct) {
        this.quizEngine.correctas++;
    }
    this.quizEngine.index++;
    this.renderPreguntaConsola();
  },

  terminarYMostrarResultado() {
    clearInterval(this.quizEngine.timerInterval);
    const timerDisplay = document.getElementById('quiz-timer-display');
    const scoreDisplay = document.getElementById('quiz-score-live');
    if (timerDisplay) timerDisplay.classList.add('hidden');
    if (scoreDisplay) scoreDisplay.classList.add('hidden');

    const screen = document.getElementById('quiz-engine-screen');
    const ping = document.getElementById('eval-ping-core');
    const quizPool = this.getQuizPool();
    const total = quizPool.length;
    
    if (ping) {
      ping.style.backgroundColor = "var(--primary)";
      ping.className = "w-2 h-2 rounded-full inline-block";
    }
    
    const userId = this.state.activeUser.id;
    const progress = this.state.db.consultant_progress[userId];
    const pct = Math.round((this.quizEngine.correctas / total) * 100);
    const template = this.state.db.week_templates.find(wt => wt.week_number === this.quizEngine.semana);
    const minScore = template?.knowledge_test?.min_passing_score || 70;
    const aprobo = pct >= minScore;

    progress.test_scores[this.quizEngine.semana] = pct;
    progress.test_attempts[this.quizEngine.semana] = (progress.test_attempts[this.quizEngine.semana] || 0) + 1;
    
    // Save elapsed test duration
    const totalTimeSecs = 25 * 60 - this.quizEngine.tiempo;
    const elapsedMins = Math.floor(totalTimeSecs / 60);
    const elapsedSecs = totalTimeSecs % 60;
    progress.test_times = progress.test_times || {};
    progress.test_times[this.quizEngine.semana] = `${elapsedMins}m ${elapsedSecs}s`;
    
    // Populate user answers detail
    const respuestasUsuario = {};
    const letras = ['A', 'B', 'C', 'D'];

    quizPool.forEach((q, idx) => {
      const qKey = `P${idx + 1}`;
      if (this.quizEngine.respuestasUsuario && this.quizEngine.respuestasUsuario[qKey]) {
        respuestasUsuario[qKey] = this.quizEngine.respuestasUsuario[qKey];
      } else {
        respuestasUsuario[qKey] = {
          marcada: null,
          correcta: letras[q.correct],
          es_valida: false
        };
      }
    });

    const evaluacionId = `EV-W${this.quizEngine.semana}-${userId}-${Date.now()}`;
    const nuevoIntento = {
      evaluacion_id: evaluacionId,
      usuario_id: userId,
      semana_malla: this.quizEngine.semana,
      fecha_rendicion: new Date().toISOString().split('T')[0],
      puntaje_obtenido: pct,
      total_preguntas: quizPool.length,
      respuestas_usuario: respuestasUsuario
    };

    this.state.db.historial_evaluaciones = this.state.db.historial_evaluaciones || [];
    this.state.db.historial_evaluaciones.push(nuevoIntento);

    this.checkWeekCompletion(userId, this.quizEngine.semana);

    this.saveDatabase();
    this.renderConsultantView();
  },

  // Mock upload handlers
  handleMockUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    if (file.type !== 'application/pdf') {
      this.showToast("Only PDF files are accepted.", "danger");
      return;
    }

    // Vercel serverless request body size limit is 4.5MB. We limit to 4.0MB to be safe.
    if (file.size > 4 * 1024 * 1024) {
      this.showToast("The file is too large. The maximum limit is 4MB.", "danger");
      return;
    }
    
    const weekNum = this.state.selectedWeekNum;
    const userId = this.state.activeUser.id;
    const progress = this.state.db.consultant_progress[userId];
    
    // Guardar el archivo real en memoria y persistir en la base de datos
    window.uploadedFiles = window.uploadedFiles || {};
    const reader = new FileReader();
    reader.onload = async (event) => {
      const base64Data = event.target.result;
      
      window.uploadedFiles[`${userId}_${weekNum}`] = {
        name: file.name,
        type: file.type,
        dataUrl: base64Data
      };

      try {
        await fetch('/api/upload-file', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_id: userId,
            week_number: weekNum,
            file_name: file.name,
            file_type: file.type,
            file_data: base64Data
          })
        });
      } catch (err) {
        console.error('Error persisting file upload:', err);
      }
    };
    reader.readAsDataURL(file);

    // Guardar los metadatos en la base de datos
    progress.deliverables[weekNum] = {
      fileName: file.name,
      fileSize: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      status: 'draft', // Temporary draft state before clicking submit
      submittedAt: new Date().toISOString()
    };
    
    this.saveDatabase();
    this.renderConsultantView();
    this.showToast("File uploaded locally. Click Submit.");
  },

  removeUploadedFile() {
    const weekNum = this.state.selectedWeekNum;
    const userId = this.state.activeUser.id;
    const progress = this.state.db.consultant_progress[userId];
    
    delete progress.deliverables[weekNum];
    this.saveDatabase();
    this.renderConsultantView();
    this.showToast("File removed.");
  },

  submitDeliverable() {
    const weekNum = this.state.selectedWeekNum;
    const userId = this.state.activeUser.id;
    const progress = this.state.db.consultant_progress[userId];
    const template = this.state.db.week_templates.find(wt => wt.week_number === weekNum);
    
    if (progress.deliverables[weekNum]) {
      progress.deliverables[weekNum].status = 'pending_review';
      progress.deliverables[weekNum].submittedAt = new Date().toISOString();
      this.saveDatabase();
      this.renderConsultantView();
      this.showToast("Deliverable successfully submitted to the tutor.");
      
      // SMTP Alert simulation to Tutor
      const mapping = this.state.db.tutor_junior_mapping[userId];
      if (mapping) {
        const tutor = this.state.db.users.find(u => u.id === mapping);
        if (tutor) {
          this.sendSMTPAlert(
            "tutor",
            tutor.email,
            `Deliverable Pending Review: ${this.state.activeUser.name}`,
            `Dear ${tutor.name},\n\nYour assigned Junior ${this.state.activeUser.name} has uploaded the deliverable for Week ${weekNum} (${template.title}) and it is ready for your grading.`
          );
        }
      }
    }
  },

  // ==========================================================================
  // KNOWLEDGE QUIZ GAME STATE ENGINE
  // ==========================================================================
  startKnowledgeTest() {
    const weekNum = this.state.selectedWeekNum;
    
    // Check if it's Week 1 and already attempted
    const userId = this.state.activeUser.id;
    const progress = this.state.db.consultant_progress[userId];
    const attempts = progress.test_attempts[weekNum] || 0;
    if (weekNum === 1 && attempts >= 1) {
      this.showToast("You have no more attempts available for this evaluation.", "danger");
      return;
    }
    
    // Confirm starting the test
    const confirmMsg = weekNum === 1
      ? "Are you sure you want to start the Week 1 evaluation? You have a single attempt available and 50 questions to answer."
      : "Are you sure you want to start the evaluation?";
    if (!confirm(confirmMsg)) {
      return;
    }
    
    // Pull questions
    let quizPool = this.state.db.questions[weekNum];
    if (!quizPool) {
      // Fallback procedural questions if week questions not seeded
      const template = this.state.db.week_templates.find(wt => wt.week_number === weekNum);
      const topicsText = template ? template.description : "module topics";
      quizPool = [
        {
          question: `What is the critical factor in the success of ${template.title}?`,
          options: [
            "Configure in a structured way according to the documentation and validate results.",
            "Skip theoretical validations and go straight to production.",
            "Expect global support to resolve all configuration steps."
          ],
          correct: 0
        },
        {
          question: `Which standard mainly governs the development of ${template.title}?`,
          options: [
            "Murex global guidelines and associated accounting regulations.",
            "Local laws not linked to finance.",
            "Informal criteria of the local development team."
          ],
          correct: 0
        }
      ];
    }
    
    // Setup test state
    this.state.testState = {
      active: true,
      weekNum: weekNum,
      questions: quizPool,
      currentQuestionIdx: 0,
      answers: {},
      secondsRemaining: 900 // 15 mins
    };
    
    // Start countdown timer
    if (this.state.testState.timer) clearInterval(this.state.testState.timer);
    this.state.testState.timer = setInterval(() => this.updateTestTimer(), 1000);
    
    // Render first question
    this.renderQuizQuestion();
    
    // Update Layout Tabs State
    this.renderConsultantView();
  },

  updateTestTimer() {
    if (!this.state.testState.active) return;
    
    this.state.testState.secondsRemaining--;
    
    const minutes = Math.floor(this.state.testState.secondsRemaining / 60);
    const seconds = this.state.testState.secondsRemaining % 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    const clock = document.getElementById('test-timer-clock');
    if (clock) clock.innerText = formattedTime;
    
    if (this.state.testState.secondsRemaining <= 0) {
      clearInterval(this.state.testState.timer);
      this.submitKnowledgeTest(true); // Force auto-submit on timeout
    }
  },

  renderQuizQuestion() {
    const idx = this.state.testState.currentQuestionIdx;
    const question = this.state.testState.questions[idx];
    const total = this.state.testState.questions.length;
    
    document.getElementById('test-question-counter').innerText = `Question ${idx + 1} of ${total}`;
    document.getElementById('test-question-text').innerText = question.question;
    document.getElementById('test-progress-bar-fill').style.width = `${((idx + 1) / total) * 100}%`;
    
    const optionsContainer = document.getElementById('test-options-list');
    optionsContainer.innerHTML = '';
    
    const selectedAns = this.state.testState.answers[idx];
    
    question.options.forEach((opt, oIdx) => {
      const isSelected = selectedAns === oIdx;
      
      const label = document.createElement('label');
      label.className = `test-option-label ${isSelected ? 'selected' : ''}`;
      label.onclick = () => {
        this.state.testState.answers[idx] = oIdx;
        this.renderQuizQuestion(); // re-render selected highlight
      };
      
      label.innerHTML = `
        <input type="radio" name="quiz-options" value="${oIdx}" ${isSelected ? 'checked' : ''} style="accent-color: var(--primary);">
        <span>${opt}</span>
      `;
      
      optionsContainer.appendChild(label);
    });

    // Control buttons text/status
    document.getElementById('btn-prev-question').style.visibility = idx === 0 ? 'hidden' : 'visible';
    const nextBtn = document.getElementById('btn-next-question');
    if (idx === total - 1) {
      nextBtn.innerHTML = 'Finalizar Prueba <i class="ti ti-checkbox"></i>';
      nextBtn.onclick = () => this.submitKnowledgeTest(false);
    } else {
      nextBtn.innerHTML = 'Siguiente';
      nextBtn.onclick = () => this.nextQuestion();
    }
  },

  nextQuestion() {
    if (this.state.testState.answers[this.state.testState.currentQuestionIdx] === undefined) {
      this.showToast("Please select an option.", "warning");
      return;
    }
    this.state.testState.currentQuestionIdx++;
    this.renderQuizQuestion();
  },

  prevQuestion() {
    if (this.state.testState.currentQuestionIdx > 0) {
      this.state.testState.currentQuestionIdx--;
      this.renderQuizQuestion();
    }
  },

  submitKnowledgeTest(isTimeout = false) {
    if (!isTimeout) {
      // Check that all questions have been answered
      const unanswered = this.state.testState.questions.some((_, idx) => this.state.testState.answers[idx] === undefined);
      if (unanswered) {
        this.showToast("You must answer all questions.", "warning");
        return;
      }
    }

    clearInterval(this.state.testState.timer);
    
    const weekNum = this.state.testState.weekNum;
    const questions = this.state.testState.questions;
    const answers = this.state.testState.answers;
    
    // Grade exam
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.correct) {
        correctCount++;
      }
    });
    
    const scorePercentage = Math.round((correctCount / questions.length) * 100);
    const template = this.state.db.week_templates.find(wt => wt.week_number === weekNum);
    const minScore = template.knowledge_test?.min_passing_score || 70;
    
    const userId = this.state.activeUser.id;
    const progress = this.state.db.consultant_progress[userId];
    
    progress.test_scores[weekNum] = scorePercentage;
    progress.test_attempts[weekNum] = (progress.test_attempts[weekNum] || 0) + 1;
    
    const passed = scorePercentage >= minScore;
    
    let alertMsg = "";
    let alertType = "";

    if (passed) {
      alertType = "success";
      alertMsg = `Test Approved with ${scorePercentage}%!`;
      
      this.checkWeekCompletion(userId, weekNum);
      const isCompletedNow = progress.completed_weeks.includes(weekNum);
      if (isCompletedNow) {
        alertMsg += " You have completed the week and unlocked the next module.";
      } else {
        if (template.deliverable && (!progress.deliverables[weekNum] || progress.deliverables[weekNum].status !== 'approved')) {
          alertMsg += " Upload your Deliverable in the corresponding tab for final review.";
        } else {
          alertMsg += " You have passed the evaluation. The week will be completed once your tutor validates all checklist tasks.";
        }
      }
      
      // SMTP Alert on approved test
      this.sendSMTPAlert(
        "junior",
        this.state.activeUser.email,
        `Test Passed - Week ${weekNum}`,
        `Hello ${this.state.activeUser.name},\n\nYou have successfully passed the theoretical test for Week ${weekNum} with a score of ${scorePercentage}%.\n\n${template.deliverable ? 'Remember that you must upload your practical deliverable to complete the module.' : 'The next module is already unlocked in your schedule.'}`
      );
    } else {
      alertType = "danger";
      alertMsg = `Test Failed with ${scorePercentage}%. Minimum required: ${minScore}%. Try again.`;
      
      // Trigger SMTP alert to Manager for Critical Block (failed twice or more)
      const attempts = progress.test_attempts[weekNum] || 0;
      if (attempts >= 2) {
        this.sendSMTPAlert(
          "admin",
          "luana@murex.cl",
          `Critical Block Alert: ${this.state.activeUser.name}`,
          `Dear Manager Luana Ortega,\n\nA prolonged block has been detected for Junior Consultant ${this.state.activeUser.name} on Week ${weekNum} (${template.title}).\n\nThe consultant has failed the theoretical evaluation for the second consecutive time with a score of ${scorePercentage}% (passing minimum: ${minScore}%).`
        );
      }
    }

    this.resetTestState();
    this.saveDatabase();
    
    // Render and show results
    this.renderConsultantView();
    this.showToast(alertMsg, alertType);
  },

  resetTestState() {
    if (this.state.testState.timer) clearInterval(this.state.testState.timer);
    this.state.testState.active = false;
    this.state.testState.weekNum = null;
    this.state.testState.questions = [];
    this.state.testState.answers = {};
  },

  // Completion Certificate Trigger
  triggerCompletionCertificate(userId) {
    const user = this.state.db.users.find(u => u.id === userId);
    
    document.getElementById('cert-consultant-name').innerText = user.name;
    document.getElementById('cert-uuid').innerText = `MX3-FPL-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('cert-date').innerText = new Date().toLocaleDateString('en-US', options);
    
    // Render modal
    document.getElementById('completion-certificate-modal').style.display = 'flex';
  },

  closeCertificateModal() {
    document.getElementById('completion-certificate-modal').style.display = 'none';
  },

  // Consultant Score ChartJS Render
  renderConsultantChart(progress) {
    if (typeof Chart === 'undefined') {
      console.warn("Chart.js is not loaded. Skipping rendering of chart.");
      return;
    }
    const ctx = document.getElementById('consultant-chart').getContext('2d');
    
    // Destroy previous instance
    if (this.state.charts.consultant) this.state.charts.consultant.destroy();
    
    const labels = [];
    const scores = [];
    const minScores = [];
    
    progress.completed_weeks.forEach(w => {
      const template = this.state.db.week_templates.find(wt => wt.week_number === w);
      labels.push(`S${w}`);
      scores.push(progress.test_scores[w] || 0);
      minScores.push(template.knowledge_test?.min_passing_score || 70);
    });

    if (labels.length === 0) {
      // Seed placeholder view values for clean layout
      labels.push("S0");
      scores.push(0);
      minScores.push(70);
    }
    
    this.state.charts.consultant = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Mi Score (%)',
            data: scores,
            backgroundColor: 'rgba(166, 25, 46, 0.75)',
            borderColor: 'rgb(166, 25, 46)',
            borderWidth: 1,
            borderRadius: 4
          },
          {
            label: 'Mín. Aprobación',
            data: minScores,
            type: 'line',
            fill: false,
            borderColor: 'rgba(226, 75, 74, 0.8)',
            borderDash: [5, 5],
            pointRadius: 0,
            borderWidth: 1.5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            min: 0,
            max: 100,
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            },
            ticks: {
              font: { size: 9 }
            }
          },
          x: {
            grid: { display: false },
            ticks: {
              font: { size: 9 }
            }
          }
        }
      }
    });
  },

  // Countdown Helper
  updateClock() {
    const now = new Date();
    // Simulate next tutor session being on Friday at 16:00
    const nextSession = new Date();
    nextSession.setDate(now.getDate() + ((5 + 7 - now.getDay()) % 7)); // Next Friday
    nextSession.setHours(16, 0, 0, 0);
    
    if (nextSession < now) {
      // If it passed today, push to next week Friday
      nextSession.setDate(nextSession.getDate() + 7);
    }
    
    const diffMs = nextSession - now;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    
    const counterText = document.getElementById('tutor-session-countdown');
    if (counterText) {
      counterText.innerText = `In ${diffDays} days, ${diffHours} hours and ${diffMins} minutes.`;
    }
  },

  // ==========================================================================
  // ADMIN DASHBOARD RENDERING & LOGIC
  // ==========================================================================
  renderAdminView() {
    const isTutor = this.state.activeUser.role === 'tutor' || this.state.activeUser.role === 'senior';
    const isSenior = this.state.activeUser.role === 'senior';
    const isAdmin = this.state.activeUser.role === 'admin';
    const userId = this.state.activeUser.id;
    
    // Set headers and visibility of admin-only controls
    const roleBadge = document.getElementById('admin-role-badge');
    const welcomeTitle = document.getElementById('admin-welcome-title');
    const welcomeSubtitle = document.getElementById('admin-welcome-subtitle');
    const registerNewcomerBtn = document.getElementById('btn-admin-register-newcomer');
    const resetDbBtn = document.getElementById('btn-admin-reset-db');
    
    if (roleBadge) {
      if (isSenior) {
        roleBadge.innerHTML = '<i class="ti ti-users"></i> Senior Panel';
      } else {
        roleBadge.innerHTML = isTutor ? '<i class="ti ti-users"></i> Tutoring Panel' : '<i class="ti ti-shield-check"></i> Admin Panel';
      }
    }
    if (welcomeTitle) {
      if (isSenior) {
        welcomeTitle.innerText = `Senior Panel — Consultant: ${this.state.activeUser.name}`;
      } else {
        welcomeTitle.innerText = isTutor ? `Tutoring Panel — Mentor: ${this.state.activeUser.name}` : `Welcome, ${this.state.activeUser.name}`;
      }
    }
    if (welcomeSubtitle) {
      if (isSenior) {
        welcomeSubtitle.innerText = "Operaciones de capacitación, dictado de masterclasses y cierre de horas.";
      } else {
        welcomeSubtitle.innerText = isTutor ? "Monitoreo y evaluación técnica de tus consultores asignados." : "Monitoreo técnico de los consultores de Murex Chile en entrenamiento.";
      }
    }
    if (registerNewcomerBtn) {
      registerNewcomerBtn.style.display = isAdmin ? 'inline-flex' : 'none';
    }
    if (resetDbBtn) {
      resetDbBtn.style.display = isAdmin ? 'inline-flex' : 'none';
    }

    // Filter trainees based on active user role
    let trainees = this.state.db.users.filter(u => u.role === 'consultant');
    if (isTutor) {
      trainees = trainees.filter(t => this.state.db.tutor_junior_mapping[t.id] === userId);
    }
    
    // 1. Calculate and render metrics widgets
    const activeCount = trainees.length;
    
    let sumWeeks = 0;
    let sumScores = 0;
    let totalScoresCount = 0;
    let pendingReviews = 0;
    
    trainees.forEach(t => {
      const prog = this.state.db.consultant_progress[t.id];
      sumWeeks += t.current_week;
      
      for (let w = 1; w <= 12; w++) {
        const s = this.getWeekScore(prog, w);
        if (s !== undefined) {
          sumScores += s;
          totalScoresCount++;
        }
      }
      
      // Count pending reviews
      Object.values(prog.deliverables).forEach(d => {
        if (d.status === 'pending_review') {
          pendingReviews++;
        }
      });
    });
    
    const avgWeek = activeCount > 0 ? (sumWeeks / activeCount).toFixed(1) : 0;
    const avgScoreVal = totalScoresCount > 0 ? Math.round(sumScores / totalScoresCount) : 0;

    document.getElementById('metric-active-consultants').innerText = activeCount;
    document.getElementById('metric-avg-week').innerText = avgWeek;
    document.getElementById('metric-avg-score').innerText = `${avgScoreVal}%`;
    document.getElementById('metric-pending-reviews').innerText = pendingReviews;

    // 2. Render Consultant Table
    const tbody = document.getElementById('admin-consultant-table-body');
    tbody.innerHTML = '';
    
    if (trainees.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:30px; color:var(--neutral-muted);">No tienes consultores Juniors asignados actualmente.</td></tr>`;
    } else {
      trainees.forEach(t => {
        const prog = this.state.db.consultant_progress[t.id];
        const completedCount = prog.completed_weeks.length;
        const progressPercent = Math.round((completedCount / 12) * 100);
        
        const tr = document.createElement('tr');
        
        // Avatar color mapping based on status
        const isAtRisk = t.status === 'at_risk';
        const scoreBadgeClass = isAtRisk ? 'table-score-badge low' : 'table-score-badge';
        const alertBadgeClass = isAtRisk ? 'alert-badge danger' : 'alert-badge ok';
        const alertBadgeText = isAtRisk ? '⚠ Alert' : '✓ Normal';

        // Check if has pending deliverable
        const hasReview = Object.values(prog.deliverables).some(d => d.status === 'pending_review');
        const actionBtnLabel = hasReview ? 'Review ⚠' : 'Inspect';
        const actionBtnClass = hasReview ? 'btn-warning' : 'btn-outline';

        // Render Tutor Assignment Cell
        let tutorMappingHtml = '';
        const mappedTutorId = this.state.db.tutor_junior_mapping[t.id];
        const mappedTutorObj = this.state.db.users.find(u => u.id === mappedTutorId);
        const mappedTutorName = mappedTutorObj ? mappedTutorObj.name : 'Unassigned';
        
        if (isAdmin) {
          // Render dropdown for Manager to dynamically change mapping
          const tutorsList = this.state.db.users.filter(u => u.role === 'tutor' || u.role === 'senior');
          let optionsHtml = tutorsList.map(tutor => 
            `<option value="${tutor.id}" ${tutor.id === mappedTutorId ? 'selected' : ''}>${tutor.name}</option>`
          ).join('');
          tutorMappingHtml = `<select class="tutor-mapping-select" onchange="app.changeTutorMapping('${t.id}', this.value)">
            <option value="" ${!mappedTutorId ? 'selected' : ''}>-- Assign Tutor --</option>
            ${optionsHtml}
          </select>`;
        } else {
          // Static label for Tutor view
          tutorMappingHtml = `<span style="font-size: 0.8rem; font-weight: 500;">${mappedTutorName}</span>`;
        }

        tr.innerHTML = `
          <td>
            <div class="table-user-row">
              <div class="table-user-avatar ${isAtRisk ? 'at-risk' : ''}">${t.avatar_initials}</div>
              <div>
                <div class="table-user-name">${t.name}</div>
                <div class="table-user-email">${t.email}</div>
              </div>
            </div>
          </td>
          <td>Week ${t.current_week}</td>
          <td>
            <div class="table-progress-bar-wrapper">
              <div class="table-progress-bar-bg">
                <div class="table-progress-bar-fill ${isAtRisk ? 'at-risk' : ''}" style="width: ${progressPercent}%"></div>
              </div>
              <span class="table-progress-text">${progressPercent}%</span>
            </div>
          </td>
          <td><span class="${scoreBadgeClass}">${t.avg_score}%</span></td>
          <td>${tutorMappingHtml}</td>
          <td><span class="${alertBadgeClass}">${alertBadgeText}</span></td>
          <td>
            <button class="btn ${actionBtnClass} btn-xs" onclick="app.inspectConsultant('${t.id}')">
              ${actionBtnLabel}
            </button>
          </td>
        `;
        
        tbody.appendChild(tr);
      });
    }

    // 3. Render Team Curve Cohort Chart
    this.renderCohortChart();

    // 4. Update/Render Active Inspector View
    if (this.state.inspectedUser) {
      // Validate that the inspected trainee is still in the list (crucial for Tutors who only see a subset)
      const stillVisible = trainees.some(t => t.id === this.state.inspectedUser.id);
      if (stillVisible) {
        this.renderInspectorPanel(this.state.inspectedUser.id);
      } else {
        this.state.inspectedUser = null;
        document.getElementById('admin-inspector-empty-state').classList.remove('hidden');
        document.getElementById('admin-inspector-active-content').classList.add('hidden');
      }
    }
  },

  inspectConsultant(userId) {
    const user = this.state.db.users.find(u => u.id === userId);
    this.state.inspectedUser = user;
    
    // Default select their current week in inspector dropdown
    const progress = this.state.db.consultant_progress[userId];
    const currentWeekNum = Math.min(progress.completed_weeks.length + 1, 12);
    this.state.inspectedWeekNum = currentWeekNum;

    this.renderInspectorPanel(userId);
    this.showToast(`Inspecting ${user.name}`);
  },

  renderInspectorPanel(userId) {
    const user = this.state.db.users.find(u => u.id === userId);
    const progress = this.state.db.consultant_progress[userId];
    
    document.getElementById('admin-inspector-empty-state').classList.add('hidden');
    document.getElementById('admin-inspector-active-content').classList.remove('hidden');

    // Reset default active tab to weekly when selecting a trainee
    this.switchInspectorTab('weekly');

    // Header values
    document.getElementById('inspector-user-avatar').innerText = user.avatar_initials;
    document.getElementById('inspector-user-name').innerText = user.name;
    document.getElementById('inspector-user-email').innerText = user.email;
    
    const isAtRisk = user.status === 'at_risk';
    const scoreBadge = document.getElementById('inspector-user-avg-score');
    scoreBadge.innerText = `${user.avg_score}%`;
    scoreBadge.className = `inspector-user-score-badge ${isAtRisk ? 'low' : ''}`;
    if (isAtRisk) {
      scoreBadge.style.color = 'var(--danger-text)';
      scoreBadge.style.backgroundColor = 'var(--danger-light)';
    } else {
      scoreBadge.style.color = 'var(--primary-text)';
      scoreBadge.style.backgroundColor = 'var(--neutral-light)';
    }

    // Populate week select element (1 to 12 options)
    const select = document.getElementById('admin-inspect-week-select');
    select.innerHTML = '';
    
    const maxUnlockedWeek = Math.min(progress.completed_weeks.length + 1, 12);
    
    for (let w = 1; w <= 12; w++) {
      const opt = document.createElement('option');
      opt.value = w;
      opt.innerText = `Week ${w} ${w > maxUnlockedWeek ? '(Locked)' : ''}`;
      if (w === this.state.inspectedWeekNum) {
        opt.selected = true;
      }
      select.appendChild(opt);
    }

    this.loadInspectedWeekDetail(userId, this.state.inspectedWeekNum);
  },

  inspectWeekChanged() {
    const val = parseInt(document.getElementById('admin-inspect-week-select').value);
    this.state.inspectedWeekNum = val;
    this.loadInspectedWeekDetail(this.state.inspectedUser.id, val);
  },

  switchInspectorTab(tabName) {
    try {
      const btnWeekly = document.getElementById('btn-inspect-tab-weekly');
      const btnPassport = document.getElementById('btn-inspect-tab-passport');
      const btnEvaluations = document.getElementById('btn-inspect-tab-evaluations');
      const btnHours = document.getElementById('btn-inspect-tab-hours');
      const btnOnboarding = document.getElementById('btn-inspect-tab-onboarding');
      const panelWeekly = document.getElementById('inspect-panel-weekly');
      const panelPassport = document.getElementById('inspect-panel-passport');
      const panelEvaluations = document.getElementById('inspect-panel-evaluations');
      const panelHours = document.getElementById('inspect-panel-hours');
      const panelOnboarding = document.getElementById('inspect-panel-onboarding');

      if (btnWeekly) btnWeekly.classList.remove('active');
      if (btnPassport) btnPassport.classList.remove('active');
      if (btnEvaluations) btnEvaluations.classList.remove('active');
      if (btnHours) btnHours.classList.remove('active');
      if (btnOnboarding) btnOnboarding.classList.remove('active');
      if (panelWeekly) panelWeekly.style.display = 'none';
      if (panelPassport) panelPassport.style.display = 'none';
      if (panelEvaluations) panelEvaluations.style.display = 'none';
      if (panelHours) panelHours.style.display = 'none';
      if (panelOnboarding) panelOnboarding.style.display = 'none';

      if (tabName === 'weekly') {
        if (btnWeekly) btnWeekly.classList.add('active');
        if (panelWeekly) panelWeekly.style.display = 'block';
      } else if (tabName === 'passport') {
        if (btnPassport) btnPassport.classList.add('active');
        if (panelPassport) panelPassport.style.display = 'block';
        if (this.state.inspectedUser) {
          this.renderInspectedPassport(this.state.inspectedUser.id);
        }
      } else if (tabName === 'evaluations') {
        if (btnEvaluations) btnEvaluations.classList.add('active');
        if (panelEvaluations) panelEvaluations.style.display = 'block';
        this.renderEvaluationsAttemptsList();
      } else if (tabName === 'hours') {
        if (btnHours) btnHours.classList.add('active');
        if (panelHours) panelHours.style.display = 'block';
        this.renderInspectedHours();
      } else if (tabName === 'onboarding') {
        if (btnOnboarding) btnOnboarding.classList.add('active');
        if (panelOnboarding) panelOnboarding.style.display = 'block';
        if (!this.state.activeInspectOnboardingFolder) {
          this.state.activeInspectOnboardingFolder = 'financial_markets'; // default to financial markets for audit
        }
        this.switchInspectOnboardingFolder(this.state.activeInspectOnboardingFolder);
      }
    } catch (err) {
      console.error("Error switching inspector tab:", err);
      this.showToast(`Error changing tab: ${err.message}`);
    }
  },

  switchInspectOnboardingFolder(folderName) {
    this.state.activeInspectOnboardingFolder = folderName;
    
    const btnAcc = document.getElementById('btn-inspect-folder-accounting');
    const btnLiq = document.getElementById('btn-inspect-folder-liquidation');
    const btnFin = document.getElementById('btn-inspect-folder-financial');
    
    if (btnAcc) btnAcc.classList.remove('active');
    if (btnLiq) btnLiq.classList.remove('active');
    if (btnFin) btnFin.classList.remove('active');
    
    if (folderName === 'accounting' && btnAcc) btnAcc.classList.add('active');
    if (folderName === 'liquidation' && btnLiq) btnLiq.classList.add('active');
    if (folderName === 'financial_markets' && btnFin) btnFin.classList.add('active');
    
    if (this.state.inspectedUser) {
      this.renderInspectedOnboardingModules(this.state.inspectedUser.id);
    }
  },

  switchInspectAccountingSubfolder(subfolderName) {
    this.state.activeInspectAccountingSubfolder = subfolderName;
    
    const btnFit = document.getElementById('btn-inspect-subfolder-fit');
    const btnPnl = document.getElementById('btn-inspect-subfolder-pnl');
    const btnEod = document.getElementById('btn-inspect-subfolder-eod');
    
    if (btnFit) btnFit.classList.remove('active');
    if (btnPnl) btnPnl.classList.remove('active');
    if (btnEod) btnEod.classList.remove('active');
    
    if (subfolderName === 'fit_for_banking' && btnFit) btnFit.classList.add('active');
    if (subfolderName === 'intro_pnl' && btnPnl) btnPnl.classList.add('active');
    if (subfolderName === 'eod_troubleshooting' && btnEod) btnEod.classList.add('active');
    
    if (this.state.inspectedUser) {
      this.renderInspectedOnboardingModules(this.state.inspectedUser.id);
    }
  },
  
  renderInspectedOnboardingModules(userId) {
    try {
      const folderName = this.state.activeInspectOnboardingFolder || 'financial_markets';
      const folderData = mxlearnOnboardingModules[folderName];
      if (!folderData) return;
      
      const tbody = document.getElementById('inspect-onboarding-tbody');
      if (!tbody) return;
      
      let subfolderHtml = '';
      let itemsToRender = [];
      
      if (folderData.hasSubfolders) {
        if (!this.state.activeInspectAccountingSubfolder) {
          this.state.activeInspectAccountingSubfolder = 'fit_for_banking';
        }
        const subKey = this.state.activeInspectAccountingSubfolder;
        const subData = folderData.subfolders[subKey];
        itemsToRender = subData ? subData.items : [];
        
        subfolderHtml = `
          <div class="onboarding-subfolders-tabs" style="display: flex; gap: 8px; margin-bottom: 12px; margin-top: 5px; border-bottom: 1px dashed var(--neutral-border); padding-bottom: 8px; grid-column: span 3; width: 100%;">
            <button class="folder-subtab-btn ${subKey === 'fit_for_banking' ? 'active' : ''}" id="btn-inspect-subfolder-fit" onclick="app.switchInspectAccountingSubfolder('fit_for_banking')">
              <i class="ti ti-folder-open"></i> Accounting Fundamentals for Newcomers
            </button>
            <button class="folder-subtab-btn ${subKey === 'intro_pnl' ? 'active' : ''}" id="btn-inspect-subfolder-pnl" onclick="app.switchInspectAccountingSubfolder('intro_pnl')">
              <i class="ti ti-folder-open"></i> Financial Statements Introduction to Profit and Loss
            </button>
            <button class="folder-subtab-btn ${subKey === 'eod_troubleshooting' ? 'active' : ''}" id="btn-inspect-subfolder-eod" onclick="app.switchInspectAccountingSubfolder('eod_troubleshooting')">
              <i class="ti ti-folder-open"></i> Generic EOD Troubleshooting
            </button>
          </div>
        `;
      } else {
        itemsToRender = folderData.items;
      }
      
      let totalItems = itemsToRender.length;
      let completedCount = 0;
      
      let rowsHtml = '';
      itemsToRender.forEach(item => {
        const storageKey = folderData.hasSubfolders 
          ? `Accounting_${this.state.activeInspectAccountingSubfolder}_${item}` 
          : item;
          
        const isChecked = this.getOnboardingCheckState(userId, storageKey);
        if (isChecked) completedCount++;
        
        const itemUrl = onboardingItemUrls[item];
        let itemCellHtml = `<td style="font-weight: 500; padding: 10px 5px;">${item}</td>`;
        if (itemUrl) {
          itemCellHtml = `
            <td style="padding: 0; font-weight: 500;">
              <a href="${itemUrl}" target="_blank" class="onboarding-link-btn" style="padding: 10px 5px;">
                <span>${item}</span>
                <span class="onboarding-link-badge" style="font-size: 0.7rem; color: var(--primary); background: var(--primary-light); padding: 3px 8px; border-radius: 4px; display: inline-flex; align-items: center; gap: 4px; font-weight: 600; opacity: 0.85;">
                  <i class="ti ti-external-link"></i> Go to Course
                </span>
              </a>
            </td>
          `;
        }
        
        rowsHtml += `
          <tr>
            <td style="text-align: center; font-size: 1rem; width: 60px; padding: 10px 5px;">
              ${isChecked 
                ? '<i class="ti ti-circle-check" style="color: var(--success);"></i>' 
                : '<i class="ti ti-circle-x" style="color: var(--neutral-muted); opacity: 0.5;"></i>'
              }
            </td>
            ${itemCellHtml}
            <td style="text-align: right; padding: 10px 5px; padding-right: 15px;">
              ${isChecked 
                ? '<span class="induction-badge ok"><i class="ti ti-check" style="margin-right: 3px;"></i> Completed</span>' 
                : '<span class="induction-badge pending"><i class="ti ti-clock" style="margin-right: 3px;"></i> Pending</span>'
              }
            </td>
          </tr>
        `;
      });
      
      tbody.innerHTML = rowsHtml;
      
      // Update subfolders tabs if they exist, or insert them
      const panelOnboardingEl = document.getElementById('inspect-panel-onboarding');
      if (panelOnboardingEl) {
        const existingSubtabs = panelOnboardingEl.querySelector('.onboarding-subfolders-tabs');
        if (existingSubtabs) {
          existingSubtabs.remove();
        }
        if (subfolderHtml) {
          const foldersTabContainer = panelOnboardingEl.querySelector('.onboarding-folders-tabs');
          if (foldersTabContainer) {
            foldersTabContainer.insertAdjacentHTML('afterend', subfolderHtml);
          }
        }
      }
      
      const percent = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;
      
      const progressText = document.getElementById('inspect-onboarding-progress-text');
      const progressBar = document.getElementById('inspect-onboarding-progress-bar');
      const progressPercent = document.getElementById('inspect-onboarding-progress-percent');
      
      if (progressText) {
        progressText.innerText = `${completedCount} of ${totalItems} completed`;
      }
      if (progressBar) {
        progressBar.style.width = `${percent}%`;
      }
      if (progressPercent) {
        progressPercent.innerText = `${percent}%`;
      }

      // Calculate General Onboarding Progress (across all 37 items: Financial, Accounting, and Liquidation)
      let generalTotal = 37;
      let generalCompleted = 0;

      // 1. Financial Markets (21 items)
      mxlearnOnboardingModules.financial_markets.items.forEach(item => {
        if (this.getOnboardingCheckState(userId, item)) {
          generalCompleted++;
        }
      });

      // 2. Accounting Modules (15 items across 3 subfolders)
      const accSubfolders = mxlearnOnboardingModules.accounting.subfolders;
      for (const subKey in accSubfolders) {
        accSubfolders[subKey].items.forEach(item => {
          const storageKey = `Accounting_${subKey}_${item}`;
          if (this.getOnboardingCheckState(userId, storageKey)) {
            generalCompleted++;
          }
        });
      }

      // 3. Liquidation Module (1 item)
      mxlearnOnboardingModules.liquidation.items.forEach(item => {
        if (this.getOnboardingCheckState(userId, item)) {
          generalCompleted++;
        }
      });

      const generalPercent = Math.round((generalCompleted / generalTotal) * 100);

      const genText = document.getElementById('inspect-onboarding-general-text');
      const genBar = document.getElementById('inspect-onboarding-general-bar');
      const genPercent = document.getElementById('inspect-onboarding-general-percent');

      if (genText) {
        genText.innerText = `${generalCompleted} of ${generalTotal} videos/modules completed`;
      }
      if (genBar) {
        genBar.style.width = `${generalPercent}%`;
      }
      if (genPercent) {
        genPercent.innerText = `${generalPercent}%`;
      }
    } catch (err) {
      console.error("Error rendering inspected onboarding modules:", err);
      this.showToast(`Error loading onboarding modules: ${err.message}`);
    }
  },

  renderInspectedPassport(userId) {
    try {
      let totalItems = 0;
      let checkedCount = 0;

      tablasOnboardingGlobal.forEach(tablaData => {
        totalItems += tablaData.items.length;
        tablaData.items.forEach(item => {
          if (this.getOnboardingCheckState(userId, item.nombre)) {
            checkedCount++;
          }
        });
      });

      const percent = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

      // Update donut percentage text
      const percentEl = document.getElementById('inspect-passport-donut-percent');
      if (percentEl) percentEl.innerText = `${percent}%`;

      // Update donut fill circle (radius is 40, so circumference is 2 * PI * r = 251.2)
      const fillEl = document.getElementById('inspect-passport-donut-fill');
      if (fillEl) {
        const circumference = 251.2;
        const offset = circumference - (percent / 100) * circumference;
        fillEl.style.strokeDashoffset = offset;
      }

      // Update stats label
      const statsEl = document.getElementById('inspect-passport-donut-stats');
      if (statsEl) {
        statsEl.innerText = `${checkedCount} of ${totalItems} milestones completed`;
      }
    } catch (err) {
      console.error("Error rendering inspected passport:", err);
      this.showToast(`Error loading Murex Mandatory Onboarding: ${err.message}`);
    }
  },

  unlockTestAttempt() {
    try {
      const userId = this.state.inspectedUser.id;
      const weekNum = this.state.inspectedWeekNum;
      const progress = this.state.db.consultant_progress[userId];
      
      // Clear spent lock in localStorage
      this.setQuizSpentState(userId, weekNum, false);
      
      // Clear the test score and time from the database
      if (progress.test_scores) {
        delete progress.test_scores[weekNum];
      }
      if (progress.test_times) {
        delete progress.test_times[weekNum];
      }
      
      // Clear evaluation history for this week and user
      if (this.state.db.historial_evaluaciones) {
        this.state.db.historial_evaluaciones = this.state.db.historial_evaluaciones.filter(
          h => !(h.usuario_id === userId && h.semana_malla === weekNum)
        );
      }
      
      // Reset attempts to 0
      if (progress.test_attempts) {
        progress.test_attempts[weekNum] = 0;
      }
      
      // If the week was marked completed because they passed the test, remove it from completed_weeks
      if (progress.completed_weeks.includes(weekNum)) {
        progress.completed_weeks = progress.completed_weeks.filter(w => w !== weekNum);
      }
      
      this.saveDatabase();
      this.showToast(`Test attempt unlocked for ${this.state.inspectedUser.name}!`);
      
      // Re-render inspector detail
      this.loadInspectedWeekDetail(userId, weekNum);
      
      // If the active user is the inspected user, refresh their workspace view
      if (this.state.activeUser && this.state.activeUser.id === userId) {
        this.renderWorkspace(this.state.selectedWeekNum || 1);
      }
      
      // Re-render the admin view so the status indicators in the trainee list update immediately!
      this.renderAdminView();
    } catch (err) {
      console.error("Error unlocking test attempt:", err);
      this.showToast(`Error unlocking attempt: ${err.message}`, "danger");
    }
  },

  loadInspectedWeekDetail(userId, weekNum) {
    const progress = this.state.db.consultant_progress[userId];
    const template = this.state.db.week_templates.find(wt => wt.week_number === weekNum);
    
    const isCompleted = progress.completed_weeks.includes(weekNum);
    const maxUnlockedWeek = Math.min(progress.completed_weeks.length + 1, 12);
    const isLocked = weekNum > maxUnlockedWeek;
    
    // Status Badge determination
    const statusLabel = document.getElementById('inspect-week-card-status');
    statusLabel.className = 'week-status-badge';
    
    const deliverable = progress.deliverables[weekNum];
    const isReview = deliverable && deliverable.status === 'pending_review';

    if (isLocked) {
      statusLabel.classList.add('locked');
      statusLabel.innerText = 'Locked';
    } else if (isCompleted) {
      statusLabel.classList.add('completed');
      statusLabel.innerText = 'Completed';
    } else if (isReview) {
      statusLabel.classList.add('review');
      statusLabel.innerText = 'Pending Review';
    } else {
      statusLabel.classList.add('current');
      statusLabel.innerText = 'In Progress';
    }
    
    document.getElementById('inspect-week-card-title').innerText = `Week ${weekNum}: ${template.title}`;
    document.getElementById('inspect-week-card-desc').innerText = template.description;

    // 1. Render Checklist status in inspector
    const list = document.getElementById('inspect-checklist-status-list');
    list.innerHTML = '';
    
    const checklistState = progress.checklist_states[weekNum] || {};
    const tutorId = this.state.db.tutor_junior_mapping[userId];
    const isTutorInCharge = this.state.activeUser.id === tutorId;

    // Update checklist section title to indicate editability based on tutor in charge relation
    const subSections = document.querySelectorAll('#admin-inspector-active-content .inspect-sub-section h5');
    if (subSections.length > 0) {
      if (isTutorInCharge) {
        subSections[0].innerHTML = `<i class="ti ti-list-check"></i> Checklist Status <span class="badge badge-green" style="font-size:0.6rem; padding:2px 6px; margin-left: 8px;">Tutor in Charge (Editable)</span>`;
      } else {
        subSections[0].innerHTML = `<i class="ti ti-list-check"></i> Checklist Status <span class="badge" style="font-size:0.6rem; padding:2px 6px; margin-left: 8px; background-color: var(--neutral-light); color: var(--neutral-muted); border: 1px solid var(--neutral-border);">Read Only</span>`;
      }
    }
    
    template.checklist_items.forEach((item, idx) => {
      const isChecked = checklistState[idx] === true;
      const li = document.createElement('li');
      li.className = 'inspect-checklist-item';
      
      if (isTutorInCharge && !isCompleted && !isLocked) {
        li.style.cursor = 'pointer';
        li.onclick = () => this.toggleTraineeChecklistItem(userId, weekNum, idx);
        li.title = "Click to check/uncheck this task";
      } else {
        li.style.cursor = 'default';
      }

      li.innerHTML = `
        <i class="ti ${isChecked ? 'ti-circle-check check-done' : 'ti-circle check-pending'}"></i>
        <span class="${isChecked ? 'done' : 'pending'}">${item}</span>
      `;
      list.appendChild(li);
    });

    // 2. Render Quiz score in inspector
    const testScore = progress.test_scores[weekNum];
    const attempts = progress.test_attempts[weekNum] || 0;
    const testTime = progress.test_times ? progress.test_times[weekNum] : undefined;
    
    const scoreVal = document.getElementById('inspect-test-score-display');
    const scoreDetails = document.getElementById('inspect-test-details-display');
    const actionArea = document.getElementById('inspect-test-action-area');

    if (testScore !== undefined) {
      scoreVal.innerText = `${testScore}%`;
      scoreVal.style.display = 'flex';
      
      let detailsText = `Threshold: ${template.knowledge_test?.min_passing_score || 70}%\nTotal attempts: ${attempts}`;
      if (testTime) {
        detailsText += `\nTime spent: ${testTime}`;
      }
      detailsText += `\nResult: ${testScore >= (template.knowledge_test?.min_passing_score || 70) ? 'Passed' : 'Failed'}`;
      
      scoreDetails.innerText = detailsText;
      if (actionArea) actionArea.style.display = 'block';
    } else {
      scoreVal.innerText = '-';
      scoreDetails.innerText = 'Theoretical evaluation pending.';
      if (actionArea) actionArea.style.display = 'none';
    }

    // 2.5 Render Account Classification Game score in inspector
    const gameSection = document.getElementById('inspect-game-section');
    const gameScoreDisplay = document.getElementById('inspect-game-score-display');
    const gameDetailsDisplay = document.getElementById('inspect-game-details-display');
    
    if (gameSection && gameScoreDisplay && gameDetailsDisplay) {
      if (weekNum === 1 || weekNum === 2) {
        gameSection.style.display = 'block';
        const gameScore = progress.game_scores ? progress.game_scores[weekNum] : undefined;
        
        if (gameScore !== undefined) {
          const pct = Math.round((gameScore.score / gameScore.total) * 100);
          gameScoreDisplay.innerText = `${pct}%`;
          gameScoreDisplay.style.display = 'flex';
          
          gameDetailsDisplay.innerText = `Correct answers: ${gameScore.score}/${gameScore.total}\nStatus: Completed\nDate: ${new Date(gameScore.completedAt).toLocaleDateString('en-US')}`;
        } else {
          gameScoreDisplay.innerText = '-';
          gameDetailsDisplay.innerText = 'Account classification challenge pending.';
        }
      } else {
        gameSection.style.display = 'none';
      }
    }

    // 3. Render Deliverables in inspector
    const fileEmpty = document.getElementById('inspect-deliverable-empty');
    const fileRow = document.getElementById('inspect-deliverable-submitted');
    const actionBtns = document.getElementById('inspect-deliverable-decision-buttons');
    const deliverableBox = document.getElementById('inspect-deliverable-area');

    if (!template.deliverable) {
      deliverableBox.style.display = 'none';
    } else {
      deliverableBox.style.display = 'block';
      fileEmpty.style.display = 'none';
      fileRow.style.display = 'none';
      actionBtns.style.display = 'none';

      if (!deliverable) {
        fileEmpty.style.display = 'flex';
      } else {
        fileRow.style.display = 'flex';
        document.getElementById('inspect-file-name').innerText = deliverable.fileName;
        
        const dateFormatted = new Date(deliverable.submittedAt).toLocaleDateString('en-US');
        document.getElementById('inspect-file-date').innerText = `Submitted: ${dateFormatted} (${deliverable.fileSize})`;
        
        if (deliverable.status === 'pending_review') {
          actionBtns.style.display = 'flex';
        } else if (deliverable.status === 'approved') {
          fileRow.querySelector('.file-name').innerHTML = `${deliverable.fileName} <span class="badge badge-green" style="font-size:0.6rem; padding:2px 6px;">Approved</span>`;
        } else if (deliverable.status === 'rejected') {
          fileRow.querySelector('.file-name').innerHTML = `${deliverable.fileName} <span class="badge badge-red" style="font-size:0.6rem; padding:2px 6px;">Rejected</span>`;
        }
      }
    }

    // 4. Set feedback comment text
    document.getElementById('inspect-feedback-text').value = progress.comments[weekNum] || '';
    
    // 5. Certification Checklist render in inspector
    const certChecklistSection = document.getElementById('cert-checklist-section');
    if (certChecklistSection) {
      if (weekNum === 12) {
        certChecklistSection.style.display = 'block';
        
        // Load checkboxes states
        const hitoStates = this.state.db.cert_checklists[userId] || { 1: false, 2: false, 3: false, 4: false };
        document.getElementById('cert-hito-1').checked = hitoStates[1] === true;
        document.getElementById('cert-hito-2').checked = hitoStates[2] === true;
        document.getElementById('cert-hito-3').checked = hitoStates[3] === true;
        document.getElementById('cert-hito-4').checked = hitoStates[4] === true;
      } else {
        certChecklistSection.style.display = 'none';
      }
    }

    // 6. Hide/Show Manual Unlock controls based on status
    const overrideBtn = document.getElementById('btn-admin-override');
    if (isCompleted) {
      overrideBtn.style.display = 'none';
    } else {
      overrideBtn.style.display = 'block';
    }
  },

  // Mock download helper
  async downloadMockFile(e) {
    e.preventDefault();
    const userId = this.state.inspectedUser.id;
    const weekNum = this.state.inspectedWeekNum;
    const progress = this.state.db.consultant_progress[userId];
    const deliverable = progress.deliverables[weekNum];
    if (!deliverable) return;
    
    // Check if the actual file exists in-memory
    window.uploadedFiles = window.uploadedFiles || {};
    let inMemoryFile = window.uploadedFiles[`${userId}_${weekNum}`];
    
    // Try to fetch from server if not in-memory
    if (!inMemoryFile) {
      this.showToast("Searching for deliverable on the server...");
      try {
        const response = await fetch(`/api/download-file?user_id=${userId}&week_number=${weekNum}`);
        if (response.ok) {
          const data = await response.json();
          inMemoryFile = {
            name: data.file_name,
            type: data.file_type,
            dataUrl: data.file_data
          };
          window.uploadedFiles[`${userId}_${weekNum}`] = inMemoryFile;
        }
      } catch (err) {
        console.error('Failed to download file from database:', err);
      }
    }
    
    if (inMemoryFile) {
      // Download the actual uploaded file!
      const link = document.createElement('a');
      link.href = inMemoryFile.dataUrl;
      link.download = inMemoryFile.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      this.showToast("Downloading the original deliverable submitted by the consultant...");
    } else {
      // Fallback: Generate a beautiful HTML report representing the deliverable
      const template = this.state.db.week_templates.find(wt => wt.week_number === weekNum);
      const trainee = this.state.db.users.find(u => u.id === userId);
      const tutorId = this.state.db.tutor_junior_mapping[userId];
      const tutor = this.state.db.users.find(u => u.id === tutorId);
      
      const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Deliverable - Week ${weekNum} - ${trainee ? trainee.name : 'Consultant'}</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; margin: 0; padding: 40px; background-color: #f3f4f6; }
    .card { background: white; max-width: 700px; margin: 0 auto; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); padding: 40px; border-top: 6px solid #e11d48; }
    .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #f3f4f6; padding-bottom: 20px; margin-bottom: 20px; }
    .logo { font-size: 1.5rem; font-weight: bold; color: #1e293b; }
    .logo span { color: #e11d48; }
    .title { font-size: 1.25rem; font-weight: 700; color: #1e293b; margin: 0 0 10px 0; text-transform: uppercase; }
    .meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 30px; }
    .meta-item { background: #f8fafc; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0; }
    .meta-label { font-size: 0.75rem; color: #64748b; font-weight: 600; text-transform: uppercase; margin-bottom: 4px; }
    .meta-value { font-size: 0.9rem; color: #0f172a; font-weight: 600; }
    .content-box { border: 2px dashed #cbd5e1; border-radius: 8px; padding: 30px; text-align: center; color: #64748b; font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px; background-color: #fafbfd; }
    .badge { display: inline-block; padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; text-transform: uppercase; }
    .badge-approved { background-color: #d1fae5; color: #065f46; }
    .badge-pending_review { background-color: #fef3c7; color: #92400e; }
    .badge-rejected { background-color: #fee2e2; color: #991b1b; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="logo"><span>MX</span>Board</div>
      <div class="badge badge-\${deliverable.status}">\${deliverable.status === 'approved' ? 'Approved' : deliverable.status === 'pending_review' ? 'Pending Review' : 'Rejected'}</div>
    </div>
    <h2 class="title">Practical Deliverable Verification</h2>
    <div class="meta-grid">
      <div class="meta-item">
        <div class="meta-label">Consultant (Junior)</div>
        <div class="meta-value">\${trainee ? trainee.name : 'N/A'}</div>
      </div>
      <div class="meta-item">
        <div class="meta-label">Assigned Tutor</div>
        <div class="meta-value">\${tutor ? tutor.name : 'N/A'}</div>
      </div>
      <div class="meta-item">
        <div class="meta-label">Week and Topic</div>
        <div class="meta-value">Week \${weekNum}: \${template ? template.title : 'N/A'}</div>
      </div>
      <div class="meta-item">
        <div class="meta-label">Evidence File</div>
        <div class="meta-value">\${deliverable.fileName} (\${deliverable.fileSize})</div>
      </div>
      <div class="meta-item">
        <div class="meta-label">Submission Date</div>
        <div class="meta-value">\${new Date(deliverable.submittedAt).toLocaleString('en-US')}</div>
      </div>
      <div class="meta-item">
        <div class="meta-label">Tutor Feedback</div>
        <div class="meta-value">\${progress.comments[weekNum] || 'No additional comments.'}</div>
      </div>
    </div>
    <div class="content-box">
      <strong>[Simulated Evidence File]</strong><br>
      This is the report of the original deliverable submitted for review. The MXBoard platform stores accounting records and traceability in Supabase.<br><br>
      <em>"The parameterization and accounting validation for this week was successfully completed in the MX.3 Sandbox."</em>
    </div>
  </div>
</body>
</html>`;
      
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `deliverable_report_week_\${weekNum}_\${trainee ? trainee.name.replace(/\\s+/g, '_') : 'consultant'}.html`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      this.showToast("Generating and downloading the deliverable report...");
    }
  },

  // Admin evaluation of deliverables
  reviewDeliverable(approve) {
    const userId = this.state.inspectedUser.id;
    const weekNum = this.state.inspectedWeekNum;
    const progress = this.state.db.consultant_progress[userId];
    const trainee = this.state.db.users.find(u => u.id === userId);
    
    if (progress.deliverables[weekNum]) {
      const status = approve ? 'approved' : 'rejected';
      progress.deliverables[weekNum].status = status;
      
      if (approve) {
        this.checkWeekCompletion(userId, weekNum);
        const isCompleted = progress.completed_weeks.includes(weekNum);
        if (isCompleted) {
          this.showToast(`Deliverable approved. Week ${weekNum} completed.`);
        } else {
          this.showToast(`Deliverable approved. Weekly evaluation or checklist is still pending.`);
        }
      } else {
        if (progress.completed_weeks.includes(weekNum)) {
          progress.completed_weeks = progress.completed_weeks.filter(w => w !== weekNum);
        }
        this.showToast(`Deliverable rejected. The consultant must resubmit.`, "danger");
      }
      
      this.saveDatabase();
      
      // SMTP Alert simulation to Junior
      this.sendSMTPAlert(
        "junior",
        trainee.email,
        `Deliverable Evaluation Result - Week ${weekNum}`,
        `Hello ${trainee.name},\n\nYour tutor has graded your practical deliverable for Week ${weekNum} as: ${approve ? 'APPROVED' : 'REJECTED'}.\n\nTutor Feedback: "${progress.comments[weekNum] || 'No additional comments.'}"`
      );
      
      this.renderAdminView();
    }
  },

  saveFeedbackComment() {
    const userId = this.state.inspectedUser.id;
    const weekNum = this.state.inspectedWeekNum;
    const text = document.getElementById('inspect-feedback-text').value.trim();
    const progress = this.state.db.consultant_progress[userId];
    
    progress.comments[weekNum] = text;
    this.saveDatabase();
    this.showToast("Comment saved. Visible to the consultant.");
    this.renderAdminView();
  },

  checkWeekCompletion(userId, weekNum) {
    const progress = this.state.db.consultant_progress[userId];
    if (!progress) return;

    const template = this.state.db.week_templates.find(wt => wt.week_number === weekNum);
    if (!template) return;

    // Condition 1: Passed the test (minimum score or default 70)
    const testScore = progress.test_scores[weekNum];
    const minPassing = template.knowledge_test?.min_passing_score || 70;
    const hasPassedQuiz = testScore !== undefined && testScore !== null && testScore >= minPassing;

    // Condition 2: Checklist fully checked by tutor
    const weekChecklistState = progress.checklist_states[weekNum] || {};
    const hasCheckedAll = template.checklist_items.length > 0 &&
                          template.checklist_items.every((_, idx) => weekChecklistState[idx] === true);

    // Condition 3: Deliverable approved (if required)
    const requiresDeliverable = !!template.deliverable;
    const isDeliverableApproved = !requiresDeliverable || (progress.deliverables[weekNum] && progress.deliverables[weekNum].status === 'approved');

    const wasCompleted = progress.completed_weeks.includes(weekNum);
    const isCompleted = hasPassedQuiz && hasCheckedAll && isDeliverableApproved;

    if (isCompleted && !wasCompleted) {
      progress.completed_weeks.push(weekNum);
      if (weekNum === 12) {
        this.triggerCompletionCertificate(userId);
      }
      
      // Send SMTP Alert simulation
      const trainee = this.state.db.users.find(u => u.id === userId);
      if (trainee) {
        this.sendSMTPAlert(
          "junior",
          trainee.email,
          `Week ${weekNum} Completed - Congratulations!`,
          `Hello ${trainee.name},\n\nYou have successfully completed Week ${weekNum}! Your approval has been registered after completing the technical evaluation and receiving checklist validation from your tutor.`
        );
      }
    } else if (!isCompleted && wasCompleted) {
      // If any condition is no longer met, remove from completed_weeks
      progress.completed_weeks = progress.completed_weeks.filter(w => w !== weekNum);
    }
  },

  adminOverrideWeek() {
    const userId = this.state.inspectedUser.id;
    const weekNum = this.state.inspectedWeekNum;
    const progress = this.state.db.consultant_progress[userId];
    
    if (!progress.completed_weeks.includes(weekNum)) {
      progress.completed_weeks.push(weekNum);
      
      // Auto set test scores and deliverables to pass
      progress.test_scores[weekNum] = progress.test_scores[weekNum] || 100;
      
      const template = this.state.db.week_templates.find(wt => wt.week_number === weekNum);
      if (template.deliverable) {
        progress.deliverables[weekNum] = progress.deliverables[weekNum] || {
          fileName: `administrative_bypass_w${weekNum}.pdf`,
          fileSize: "0 KB",
          status: 'approved',
          submittedAt: new Date().toISOString()
        };
      }
      
      if (weekNum === 12) {
        this.triggerCompletionCertificate(userId);
      }
      
      this.saveDatabase();
      this.renderAdminView();
      this.showToast(`Force approval successful for Week ${weekNum}.`, "warning");
    }
  },

  // Cohort ChartJS Line graph
  renderCohortChart() {
    if (typeof Chart === 'undefined') {
      console.warn("Chart.js no está cargado. Omitiendo renderizado de gráfico.");
      return;
    }
    const ctx = document.getElementById('admin-group-chart').getContext('2d');
    
    if (this.state.charts.admin) this.state.charts.admin.destroy();
    
    const weekCount = 12;
    const labels = [];
    const avgScores = [];
    
    const isTutor = this.state.activeUser.role === 'tutor' || this.state.activeUser.role === 'senior';
    const userId = this.state.activeUser.id;
    let trainees = this.state.db.users.filter(u => u.role === 'consultant');
    if (isTutor) {
      trainees = trainees.filter(t => this.state.db.tutor_junior_mapping[t.id] === userId);
    }
    
    for (let w = 1; w <= weekCount; w++) {
      labels.push(`Week ${w}`);
      
      let sum = 0;
      let count = 0;
      
      trainees.forEach(t => {
        const prog = this.state.db.consultant_progress[t.id];
        const s = this.getWeekScore(prog, w);
        if (s !== undefined) {
          sum += s;
          count++;
        }
      });
      
      avgScores.push(count > 0 ? Math.round(sum / count) : null); // null allows clean breaks in Line Chart for future weeks
    }
    
    this.state.charts.admin = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Promedio Cohorte (%)',
          data: avgScores,
          borderColor: '#A6192E',
          backgroundColor: 'rgba(166, 25, 46, 0.1)',
          fill: true,
          tension: 0.25,
          borderWidth: 2,
          pointBackgroundColor: '#A6192E',
          pointHoverRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            min: 0,
            max: 100,
            grid: { color: 'rgba(0, 0, 0, 0.05)' },
            ticks: { font: { size: 9 } }
          },
          x: {
            grid: { display: false },
            ticks: {
              font: { size: 9 },
              maxTicksLimit: 12
            }
          }
        }
      }
    });
  },

  // ==========================================================================
  // TOAST NOTIFICATIONS & FEEDBACK SYSTEM
  // ==========================================================================
  showToast(message, type = "success") {
    const toast = document.getElementById('toast-notification');
    const toastText = document.getElementById('toast-message-text');
    const toastIcon = toast.querySelector('.toast-icon');
    
    toastText.innerText = message;
    
    // Set icons and classes
    toast.className = 'toast-container show';
    toastIcon.className = 'ti toast-icon';
    
    if (type === 'success') {
      toastIcon.classList.add('ti-circle-check');
      toastIcon.style.color = '#86E3C3';
    } else if (type === 'warning') {
      toastIcon.classList.add('ti-alert-circle');
      toastIcon.style.color = '#FAD089';
    } else if (type === 'danger') {
      toastIcon.classList.add('ti-alert-triangle');
      toastIcon.style.color = '#FFAAA6';
    } else {
      toastIcon.classList.add('ti-info-circle');
      toastIcon.style.color = '#C7C1FF';
    }
    
    // Animate out
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  },

  // ==========================================================================
  // EXTENSION MODULES (ROLES, TROUBLESHOOTING, MENTORING LOGS, SMTP, HITOS)
  // ==========================================================================
  
  changeTutorMapping(traineeId, tutorId) {
    const tutor = this.state.db.users.find(u => u.id === tutorId);
    const trainee = this.state.db.users.find(u => u.id === traineeId);
    
    if (!tutor) {
      this.state.db.tutor_junior_mapping[traineeId] = null;
      this.saveDatabase();
      this.showToast(`Tutor unassigned.`);
      this.renderAdminView();
      return;
    }
    
    this.state.db.tutor_junior_mapping[traineeId] = tutorId;
    this.saveDatabase();
    
    this.showToast(`Tutor ${tutor.name} assigned to ${trainee.name}.`);
    
    // SMTP Alert simulation
    this.sendSMTPAlert(
      "tutor",
      tutor.email,
      `New Tutoring Assignment: ${trainee.name}`,
      `Dear ${tutor.name},\n\nThe Area Manager has assigned you as Tutor in charge of the active ramp-up process of Junior Consultant ${trainee.name}.\n\nYou can now access your control panel to view their progress, receive notifications, and grade their weekly deliverables.`
    );
    
    this.renderAdminView();
  },


  switchJuniorTimelineTab(subTabName) {
    this.state.juniorTimelineActiveTab = subTabName;
    
    // Toggle active state for tab buttons
    const tabRoadmap = document.getElementById('junior-timeline-tab-roadmap');
    const tabWorkspace = document.getElementById('junior-timeline-tab-workspace');
    if (tabRoadmap) tabRoadmap.classList.toggle('active', subTabName === 'roadmap');
    if (tabWorkspace) tabWorkspace.classList.toggle('active', subTabName === 'workspace');
    
    // Toggle display of panes
    const paneRoadmap = document.getElementById('junior-timeline-pane-roadmap');
    const paneWorkspace = document.getElementById('junior-timeline-pane-workspace');
    if (paneRoadmap) paneRoadmap.style.display = subTabName === 'roadmap' ? 'block' : 'none';
    if (paneWorkspace) paneWorkspace.style.display = subTabName === 'workspace' ? 'block' : 'none';
    
    // Cancel quiz if navigating away from workspace/evaluation
    if (subTabName === 'roadmap' && this.state.testState.active) {
      this.resetTestState();
    }
  },

  goToWeek(weekNum) {
    this.state.selectedWeekNum = weekNum;
    this.loadWeekDetail(weekNum);
    this.switchJuniorTimelineTab('workspace');
  },

  switchJuniorViewTab(tabName) {
    // Tab buttons active state toggle
    document.querySelectorAll('.junior-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.id === `junior-tab-${tabName}`);
    });
    
    // View panes toggle
    document.querySelectorAll('.junior-view-pane').forEach(pane => {
      pane.classList.toggle('active', pane.id === `junior-pane-${tabName}`);
    });
    
    if (tabName === 'timeline') {
      this.switchJuniorTimelineTab(this.state.juniorTimelineActiveTab || 'roadmap');
    } else if (tabName === 'mentor') {
      this.renderMentoringLogsList();
    } else if (tabName === 'calendar') {
      this.switchJuniorSessionTab(this.state.juniorSessionActiveTab || 'calendar');
    }

    // Cancel quiz if navigating away from timeline tab
    if (tabName !== 'timeline' && this.state.testState.active) {
      this.resetTestState();
    }
  },

  switchJuniorSessionTab(tabName) {
    this.state.juniorSessionActiveTab = tabName;
    
    // Toggle active state for tab buttons
    document.querySelectorAll('#junior-pane-calendar .session-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.id === `junior-session-tab-${tabName}`);
    });
    
    // Toggle display of panes
    document.querySelectorAll('#junior-pane-calendar .session-tab-pane').forEach(pane => {
      pane.classList.toggle('active', pane.id === `junior-session-pane-${tabName}`);
    });
    
    if (tabName === 'calendar') {
      this.renderJuniorCalendar();
    } else if (tabName === 'pending') {
      this.renderJuniorPendingRequests();
    } else if (tabName === 'certification') {
      this.renderJuniorCertification();
    }
  },

  renderJuniorPendingRequests() {
    const tbody = document.getElementById('junior-pending-requests-tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    const myRequests = (this.state.db.calendar_events || []).filter(
      e => e.junior_id === this.state.activeUser.id && (e.type === 'extra_support' || e.type === 'coaching' || e.type === 'tutoring')
    );
    
    if (myRequests.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 20px; color:var(--neutral-muted);">You do not have pending requests yet.</td></tr>`;
      return;
    }
    
    // Sort by date descending
    myRequests.sort((a, b) => new Date(b.block_day) - new Date(a.block_day));
    
    myRequests.forEach(e => {
      const tr = document.createElement('tr');
      const expertObj = this.state.db.users.find(u => u.id === e.expert_id);
      const expertName = expertObj ? expertObj.name : 'N/A';
      const formattedDate = new Date(e.block_day + "T00:00:00").toLocaleDateString('en-US');
      
      let statusKey = e.status;
      if (statusKey === 'pendiente_aprobacion') statusKey = 'solicitada';
      if (statusKey === 'aprobado') statusKey = 'aprobada';
      if (statusKey === 'rechazado') statusKey = 'rechazada';
      if (statusKey === 'ejecutado') statusKey = 'ejecutada';

      let badgeLabel = 'Pending';
      let badgeClass = 'badge-solicitada';
      if (statusKey === 'aprobada') {
        badgeLabel = 'Accepted';
        badgeClass = 'badge-aprobada';
      } else if (statusKey === 'rechazada') {
        badgeLabel = 'Cancelled';
        badgeClass = 'badge-rechazada';
      } else if (statusKey === 'ejecutada') {
        badgeLabel = 'Executed';
        badgeClass = 'badge-ejecutada';
      }
      
      const cleanTitle = e.title.replace(/^(Extra Support:|Coaching:|Tutoría:|Tutoring:)\s*/, '');
      const typeLabel = e.type === 'coaching' ? 'Coaching' : (e.type === 'tutoring' ? 'Tutoring' : 'Support');

      tr.innerHTML = `
        <td><strong>${cleanTitle} <span class="badge" style="font-size:0.6rem; padding: 1px 4px; font-weight: normal; background-color: var(--neutral-light); border: 1px solid var(--neutral-border);">${typeLabel}</span></strong></td>
        <td>${expertName}</td>
        <td>${formattedDate}<br><span style="font-weight:600; font-size:0.8rem;">${e.time_start} - ${e.time_end} (${e.planned_minutes} min)</span></td>
        <td><span class="calendar-event-card-status ${badgeClass}">${badgeLabel}</span></td>
        <td><span style="font-size:0.8rem; color:var(--neutral-muted);">${e.block_reason || 'No comments'}</span></td>
      `;
      tbody.appendChild(tr);
    });
  },

  renderJuniorCertification() {
    const userId = this.state.activeUser.id;
    if (!this.state.db.cert_checklists[userId]) {
      this.state.db.cert_checklists[userId] = { 1: false, 2: false, 3: false, 4: false };
    }
    const hitos = this.state.db.cert_checklists[userId];
    
    const hito1 = document.getElementById('junior-cert-hito-1');
    const hito2 = document.getElementById('junior-cert-hito-2');
    const hito3 = document.getElementById('junior-cert-hito-3');
    const hito4 = document.getElementById('junior-cert-hito-4');

    if (hito1) hito1.checked = hitos[1] === true;
    if (hito2) hito2.checked = hitos[2] === true;
    if (hito3) hito3.checked = hitos[3] === true;
    if (hito4) hito4.checked = hitos[4] === true;
  },

  renderMentoringLogsList() {
    const tbody = document.getElementById('mentor-log-tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    const userId = this.state.activeUser.id;
    const logs = (this.state.db.mentoring_logs || []).filter(l => l.junior_id === userId);
    
    if (logs.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 20px; color:var(--neutral-muted);">You have not registered any mentoring sessions in your log yet.</td></tr>`;
      return;
    }
    
    // Sort chronologically desc
    logs.sort((a,b) => new Date(b.date) - new Date(a.date));
    
    logs.forEach(l => {
      const tr = document.createElement('tr');
      
      let idsClass = 'ids-low';
      let idsLabel = 'Low (Autonomous)';
      if (l.ids >= 4) {
        idsClass = 'ids-high';
        idsLabel = 'High (Dependent)';
      } else if (l.ids >= 3) {
        idsClass = 'ids-medium';
        idsLabel = 'Medium (Moderate)';
      }
      
      tr.innerHTML = `
        <td>${new Date(l.date).toLocaleDateString('en-US')}</td>
        <td>${l.tutor_name}</td>
        <td>${l.topic}</td>
        <td>${l.duration} minutes</td>
        <td><span class="ids-badge ${idsClass}">${l.ids} - ${idsLabel}</span></td>
      `;
      tbody.appendChild(tr);
    });
  },

  handleRegisterMentoringSession(e) {
    e.preventDefault();
    const date = document.getElementById('mentor-session-date').value;
    const tutorName = document.getElementById('mentor-session-tutor').value.trim();
    const topic = document.getElementById('mentor-session-topic').value.trim();
    const duration = parseInt(document.getElementById('mentor-session-duration').value);
    const ids = parseInt(document.getElementById('mentor-session-ids').value);
    
    if (!this.state.db.mentoring_logs) {
      this.state.db.mentoring_logs = [];
    }

    const newLog = {
      id: `m-${Math.random().toString(36).substr(2, 9)}`,
      junior_id: this.state.activeUser.id,
      tutor_name: tutorName,
      date: date,
      topic: topic,
      duration: duration,
      ids: ids
    };
    
    this.state.db.mentoring_logs.push(newLog);
    this.saveDatabase();
    
    this.renderMentoringLogsList();
    document.getElementById('mentor-session-form').reset();
    
    this.showToast("Mentorship session saved in your log.");
    
    // SMTP Alert simulation
    const mapping = this.state.db.tutor_junior_mapping[this.state.activeUser.id];
    if (mapping) {
      const tutor = this.state.db.users.find(u => u.id === mapping);
      if (tutor) {
        this.sendSMTPAlert(
          "tutor",
          tutor.email,
          `New Mentoring Log Session: ${this.state.activeUser.name}`,
          `Dear ${tutor.name},\n\nYour assigned Junior ${this.state.activeUser.name} has registered a mentoring session in their log:\n\nDate: ${date}\nTopic: ${topic}\nDuration: ${duration} mins\nSupport Dependency Index (IDS): ${ids}/5.`
        );
      }
    }
  },

  searchTroubleshooting() {
    const input = document.getElementById('trouble-search-input').value.trim().toLowerCase();
    const resultsContainer = document.getElementById('trouble-search-results');
    
    if (!input) {
      this.showToast("Please enter a search term.", "warning");
      return;
    }
    
    const db = this.state.db.troubleshooting_db || [];
    
    // Filter results
    const matches = db.filter(item => 
      item.code.toLowerCase().includes(input) || 
      item.title.toLowerCase().includes(input) || 
      item.description.toLowerCase().includes(input)
    );
    
    resultsContainer.innerHTML = '';
    
    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div class="smtp-empty-state">
          <i class="ti ti-zoom-cancel"></i>
          <h4>No results found</h4>
          <p>No documented guides found for '${input}'. Try searching for 'ERR-ACC-015', 'discrepancy', 'coverage', or consult your tutor.</p>
        </div>
      `;
      return;
    }
    
    matches.forEach(m => {
      const card = document.createElement('div');
      card.className = 'trouble-result-card animate-fade-in mt-10';
      
      const stepsHtml = m.steps.map(s => `<li class="trouble-step-item">${s}</li>`).join('');
      
      card.innerHTML = `
        <h4><i class="ti ti-alert-triangle" style="color:var(--primary);"></i> ${m.title}</h4>
        <p style="font-size:0.875rem; color:var(--neutral-muted); margin-bottom: 12px;">${m.description}</p>
        <div class="divider" style="margin: 10px 0;"></div>
        <strong style="font-size:0.85rem; text-transform:uppercase; color:var(--neutral-muted); font-weight:600;">Step-by-Step Resolution Instructions:</strong>
        <ul class="trouble-solution-steps">
          ${stepsHtml}
        </ul>
      `;
      resultsContainer.appendChild(card);
    });
    
    this.showToast(`Found ${matches.length} matches.`);
  },

  sendSMTPAlert(toRolee, toEmail, subject, body) {
    if (!this.state.db.smtp_outbox) {
      this.state.db.smtp_outbox = [];
    }
    
    const newMail = {
      id: `mail-${Math.random().toString(36).substr(2, 9)}`,
      to_role: toRolee,
      to_email: toEmail,
      subject: subject,
      body: body,
      sent_at: new Date().toISOString()
    };
    
    this.state.db.smtp_outbox.unshift(newMail); // newest first
    this.saveDatabase();
    
    this.renderSMTPOutbox();
    
    // Visual flash on SMTP drawer button
    const toggle = document.getElementById('smtp-simulation-toggle');
    if (toggle) {
      toggle.style.animation = 'pulse-ring 1s';
      setTimeout(() => { toggle.style.animation = ''; }, 1000);
    }
  },

  renderSMTPOutbox() {
    const list = document.getElementById('smtp-mail-list');
    const badge = document.getElementById('smtp-mail-badge');
    const emptyState = document.getElementById('smtp-empty-state');
    
    if (!list) return;
    
    const outbox = this.state.db.smtp_outbox || [];
    
    // Set badge count
    if (badge) {
      badge.innerText = outbox.length;
    }
    
    if (outbox.length === 0) {
      if (emptyState) emptyState.style.display = 'flex';
      list.innerHTML = `
        <div class="smtp-empty-state" id="smtp-empty-state">
          <i class="ti ti-mail-opened"></i>
          <p>No automatic SMTP emails have been sent yet.</p>
        </div>
      `;
      return;
    }
    
    if (emptyState) emptyState.style.display = 'none';
    
    list.innerHTML = '';
    
    outbox.forEach(m => {
      const card = document.createElement('div');
      card.className = 'smtp-mail-card';
      
      let roleLabel = 'Consultant';
      if (m.to_role === 'tutor') roleLabel = 'Assigned Tutor';
      if (m.to_role === 'admin') roleLabel = 'Global Manager';
      
      const sentTime = new Date(m.sent_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      
      card.innerHTML = `
        <div class="smtp-mail-header">
          <strong>To:</strong> ${m.to_email} (${roleLabel})<br>
          <strong>Sent:</strong> Today, ${sentTime} via SMTP Server
        </div>
        <div class="smtp-mail-subject">${m.subject}</div>
        <div class="smtp-mail-body">${m.body}</div>
      `;
      list.appendChild(card);
    });
  },

  toggleSMTPDrawer() {
    const drawer = document.getElementById('smtp-simulation-drawer');
    if (drawer) {
      drawer.classList.toggle('open');
    }
  },

  toggleCertHito(hitoNum) {
    const userId = this.state.inspectedUser.id;
    if (!this.state.db.cert_checklists[userId]) {
      this.state.db.cert_checklists[userId] = { 1: false, 2: false, 3: false, 4: false };
    }
    
    const currentState = this.state.db.cert_checklists[userId][hitoNum] === true;
    this.state.db.cert_checklists[userId][hitoNum] = !currentState;
    this.saveDatabase();
    
    this.showToast("Certification milestone updated.");
    
    // Check if all certification checklist hitos are checked
    const hitos = this.state.db.cert_checklists[userId];
    const allChecked = hitos[1] && hitos[2] && hitos[3] && hitos[4];
    
    if (allChecked) {
      this.showToast(`All certification milestones have been validated for ${this.state.inspectedUser.name}!`);
      
      // Send SMTP alert to Manager
      this.sendSMTPAlert(
        "admin",
        "luana@murex.cl",
        `Certified Authorization: ${this.state.inspectedUser.name}`,
        `Dear Manager Luana Ortega,\n\nAll technical certification milestones and operational skills have been approved by the Tutor of ${this.state.inspectedUser.name}.\n\nThe consultant is formally authorized to go live with real clients. The Certificate of Authorization has been issued.`
      );
      
      // Send to Junior
      this.sendSMTPAlert(
        "junior",
        this.state.inspectedUser.email,
        "Congratulations! You have completed your Technical Authorization",
        `Dear ${this.state.inspectedUser.name},\n\nWe have completed your final 12-week onboarding evaluation. Your tutor and manager have certified your technical Finance & PL competencies.\n\nYou can now download your Certificate of Authorization on the platform.`
      );

      // Open certificate modal
      this.triggerCompletionCertificate(userId);
    }
  },

  // ==========================================================================
  // 6. TIME TRACKING & CALENDAR HUB MODULES
  // ==========================================================================

  getCalendarDateString(weekNum, dayIndex) {
    const start = new Date("2026-04-20T09:00:00"); // Monday of Week 1 (so Week 6 starts on May 25, 2026)
    const target = new Date(start.getTime() + (weekNum - 1) * 7 * 24 * 3600 * 1000 + dayIndex * 24 * 3600 * 1000);
    return target.toISOString().split('T')[0];
  },



  checkCollision(date, timeStart, durationMinutes, expertId, juniorId, ignoreEventId = null) {
    const parseTime = (t) => {
      const [h, m] = t.split(':').map(Number);
      return h * 60 + m;
    };
    
    const startMins = parseTime(timeStart);
    const endMins = startMins + Number(durationMinutes);
    
    const events = this.state.db.calendar_events || [];
    const activeEvents = events.filter(e => e.block_day === date && e.status !== 'rechazado' && e.status !== 'rechazada' && e.id !== ignoreEventId);
    
    for (const e of activeEvents) {
      const eStart = parseTime(e.time_start);
      let eMins = e.planned_minutes || 60;
      if ((e.status === 'ejecutado' || e.status === 'ejecutada') && e.executed_minutes) {
        eMins = e.executed_minutes;
      }
      const eEnd = eStart + eMins;
      
      const overlap = startMins < eEnd && eStart < endMins;
      if (overlap) {
        if (expertId && expertId !== "MUREX_LEARNING_CORP") {
          const isExpertInvolved = e.expert_id === expertId || (e.expertos_asistentes_ids && e.expertos_asistentes_ids.includes(expertId));
          if (isExpertInvolved) {
            const expertName = this.state.db.users.find(u => u.id === expertId)?.name || 'Expert';
            return {
              collision: true,
              reason: `Schedule conflict for ${expertName}: Already scheduled for "${e.title}" (${e.time_start} - ${e.time_end})`
            };
          }
        }
        if (juniorId && e.junior_id === juniorId) {
          const juniorName = this.state.db.users.find(u => u.id === juniorId)?.name || 'Junior';
          return {
            collision: true,
            reason: `Schedule conflict for ${juniorName}: Already scheduled for "${e.title}" (${e.time_start} - ${e.time_end})`
          };
        }
      }
    }
    return { collision: false };
  },

  switchAdminViewTab(tabName) {
    if (this.state.activeUser && this.state.activeUser.role === 'senior' && tabName === 'academic') {
      tabName = 'calendar';
    }
    this.state.adminActiveTab = tabName;
    
    const btnAcademic = document.getElementById('admin-tab-academic');
    const btnCalendar = document.getElementById('admin-tab-calendar');
    
    if (btnAcademic) btnAcademic.classList.toggle('active', tabName === 'academic');
    if (btnCalendar) btnCalendar.classList.toggle('active', tabName === 'calendar');
    
    const paneAcademic = document.getElementById('admin-pane-academic');
    const paneCalendar = document.getElementById('admin-pane-calendar');
    
    if (paneAcademic) paneAcademic.style.display = tabName === 'academic' ? 'block' : 'none';
    if (paneCalendar) paneCalendar.style.display = tabName === 'calendar' ? 'block' : 'none';
    
    if (tabName === 'calendar') {
      this.switchAdminSessionTab(this.state.adminSessionActiveTab || 'calendar');
    }
  },

  switchAdminSessionTab(tabName) {
    const activeRolee = this.state.activeUser ? this.state.activeUser.role : '';
    
    // Hide/show tabs dynamically based on user role
    const tabSchedule = document.getElementById('admin-session-tab-schedule');
    const tabPending = document.getElementById('admin-session-tab-pending');
    const tabCert = document.getElementById('admin-session-tab-certification');
    const tabTeam = document.getElementById('admin-session-tab-team');
    
    if (tabSchedule) tabSchedule.style.display = (activeRolee === 'admin' || activeRolee === 'tutor') ? 'inline-flex' : 'none';
    if (tabPending) tabPending.style.display = (activeRolee === 'admin' || activeRolee === 'tutor') ? 'inline-flex' : 'none';
    if (tabCert) tabCert.style.display = (activeRolee === 'admin' || activeRolee === 'tutor') ? 'inline-flex' : 'none';
    if (tabTeam) tabTeam.style.display = (activeRolee === 'admin') ? 'inline-flex' : 'none';
    
    // Block unauthorized tab switching at logic level
    if (activeRolee === 'senior' && tabName !== 'calendar') {
      tabName = 'calendar';
    }
    if (tabName === 'team' && activeRolee !== 'admin') {
      this.showForbiddenError("Error 403 - Forbidden: No tienes privilegios para acceder a la gestión de equipo.");
      return;
    }
    this.state.adminSessionActiveTab = tabName;
    
    // Toggle active state for tab buttons
    document.querySelectorAll('#admin-pane-calendar .session-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.id === `admin-session-tab-${tabName}`);
    });
    
    // Toggle display of panes
    document.querySelectorAll('#admin-pane-calendar .session-tab-pane').forEach(pane => {
      pane.classList.toggle('active', pane.id === `admin-session-pane-${tabName}`);
    });
    
    const isManager = this.state.activeUser.role === 'admin';
    const managerDiv = document.getElementById('manager-calendar-dashboard');
    const expertDiv = document.getElementById('expert-calendar-dashboard');
    const managerScheduling = document.getElementById('manager-scheduling-dashboard');
    const expertScheduling = document.getElementById('expert-scheduling-dashboard');
    const managerAudit = document.getElementById('manager-audit-dashboard');
    const expertPending = document.getElementById('expert-pending-dashboard');
    
    if (managerDiv) managerDiv.style.display = 'none';
    if (expertDiv) expertDiv.style.display = 'none';
    if (managerScheduling) managerScheduling.style.display = 'none';
    if (expertScheduling) expertScheduling.style.display = 'none';
    if (managerAudit) managerAudit.style.display = 'none';
    if (expertPending) expertPending.style.display = 'none';

    if (tabName === 'calendar') {
      if (isManager) {
        if (managerDiv) managerDiv.style.display = 'grid';
        this.renderManagerCalendar(); 
      } else {
        if (expertDiv) expertDiv.style.display = 'grid';
        this.renderExpertCalendar();
      }
    } else if (tabName === 'schedule') {
      if (isManager) {
        if (managerScheduling) managerScheduling.style.display = 'block';
        this.populateManagerDropdowns();
        this.renderManagerMasterclasses();
      } else {
        if (expertScheduling) expertScheduling.style.display = 'block';
        this.populateExpertSchedulingDropdowns();
      }
    } else if (tabName === 'pending') {
      if (isManager) {
        if (managerAudit) managerAudit.style.display = 'grid';
        this.renderManagerAuditDashboard();
        this.renderManagerPendingApprovals();
        this.renderManagerAuditAccordion();
      } else {
        if (expertPending) expertPending.style.display = 'block';
        this.renderExpertPendingRequests();
      }
    } else if (tabName === 'certification') {
      this.populateCertificationDropdowns();
      this.renderAdminCertChecklist();
    } else if (tabName === 'team') {
      this.renderTeamTable();
    }
  },

  renderManagerCalendar() {
    this.updateMonthDisplay();
    this.populateManagerCalendarJuniorSelect();
    this.renderMonthlyCalendarGrid('manager-calendar-monthly-grid', 'manager');
  },

  populateExpertSchedulingDropdowns() {
    const juniorSelect = document.getElementById('expert-tutor-junior');
    if (juniorSelect) {
      juniorSelect.innerHTML = '';
      const juniors = this.state.db.users.filter(u => u.role === 'consultant');
      juniors.forEach(jr => {
        const opt = document.createElement('option');
        opt.value = jr.id;
        opt.innerText = jr.name;
        juniorSelect.appendChild(opt);
      });
    }
  },

  handleExpertScheduleSession(e) {
    e.preventDefault();
    const juniorId = document.getElementById('expert-tutor-junior').value;
    const topic = document.getElementById('expert-tutor-topic').value.trim();
    const date = document.getElementById('expert-tutor-date').value;
    const time = document.getElementById('expert-tutor-time').value;
    const duration = parseInt(document.getElementById('expert-tutor-duration').value);
    
    const selectedDate = new Date(date + "T00:00:00");
    const today = new Date(HOY_PRESENTE);
    today.setHours(0,0,0,0);
    if (selectedDate < today) {
      this.showToast("You cannot schedule tutoring sessions on past dates.", "warning");
      return;
    }
    
    // Collision check
    const collisionResult = this.checkCollision(date, time, duration, this.state.activeUser.id, juniorId);
    if (collisionResult.collision) {
      alert(`⚠️ COLLISION ERROR:\n\n${collisionResult.reason}\n\nPlease propose another time slot.`);
      return;
    }

    const weekNum = this.getWeekForJunior(juniorId, date);

    const [h, m] = time.split(':').map(Number);
    const endTotalMins = h * 60 + m + duration;
    const endH = Math.floor(endTotalMins / 60).toString().padStart(2, '0');
    const endM = (endTotalMins % 60).toString().padStart(2, '0');
    const endTime = `${endH}:${endM}`;

    const newEvent = {
      id: `ev-${Math.random().toString(36).substr(2, 9)}`,
      title: `Tutoring: ${topic}`,
      type: "tutoring",
      junior_id: juniorId,
      expert_id: this.state.activeUser.id,
      block_day: date,
      time_start: time,
      time_end: endTime,
      planned_minutes: duration,
      executed_minutes: null,
      status: "aprobada",
      block_reason: `Tutoring session scheduled directly by Tutor ${this.state.activeUser.name}`,
      week_number: weekNum,
      organizador_id: this.state.activeUser.id,
      estado_confirmacion: "FIXED",
      bloqueado_edicion: false
    };

    if (!this.state.db.calendar_events) {
      this.state.db.calendar_events = [];
    }
    this.state.db.calendar_events.push(newEvent);
    this.saveDatabase();
    
    this.showToast("Tutoring session successfully scheduled.");
    
    // Send SMTP to junior
    const junior = this.state.db.users.find(u => u.id === juniorId);
    if (junior) {
      this.sendSMTPAlert(
        "junior",
        junior.email,
        "New Tutoring Scheduled",
        `Dear ${junior.name},\n\nYour tutor ${this.state.activeUser.name} has scheduled a regular tutoring session:\n\nTopic: ${topic}\nDate: ${date}\nTime: ${time} - ${endTime}\n\nThe session is already blocked in your calendar.`
      );
    }

    document.getElementById('expert-tutor-schedule-form').reset();
    this.switchAdminSessionTab('calendar');
  },

  renderExpertPendingRequests() {
    const tbody = document.getElementById('expert-pending-requests-tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    const pendingEvents = (this.state.db.calendar_events || []).filter(
      e => e.expert_id === this.state.activeUser.id && (e.status === 'solicitada' || e.status === 'pendiente_aprobacion')
    );
    
    if (pendingEvents.length === 0) {
      tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding: 20px; color:var(--neutral-muted);">You do not have any pending requests to answer.</td></tr>`;
      return;
    }
    
    pendingEvents.forEach(e => {
      const tr = document.createElement('tr');
      const juniorObj = this.state.db.users.find(u => u.id === e.junior_id);
      const juniorName = juniorObj ? juniorObj.name : 'N/A';
      const formattedDate = new Date(e.block_day + "T00:00:00").toLocaleDateString('en-US');
      
      tr.innerHTML = `
        <td><strong>${juniorName}</strong></td>
        <td>
          <div style="font-weight:600;">${e.title.replace('Extra Support: ', '')}</div>
          <div style="font-size:0.75rem; color:var(--neutral-muted); max-width:250px;">"${e.block_reason}"</div>
        </td>
        <td>${formattedDate}<br><span style="font-weight:600; font-size:0.8rem;">${e.time_start} - ${e.time_end} (${e.planned_minutes} min)</span></td>
        <td>
          <div style="display:flex; gap:6px;">
            <button class="btn btn-success btn-xs" onclick="app.expertApproveRequest('${e.id}')"><i class="ti ti-check"></i> Accept</button>
            <button class="btn btn-danger btn-xs" onclick="app.expertRejectRequest('${e.id}')"><i class="ti ti-x"></i> Reject</button>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });
  },

  expertApproveRequest(eventId) {
    const event = this.state.db.calendar_events.find(e => e.id === eventId);
    if (!event) return;
    
    const collisionResult = this.checkCollision(event.block_day, event.time_start, event.planned_minutes, event.expert_id, event.junior_id, eventId);
    if (collisionResult.collision) {
      alert(`⚠️ COLLISION ERROR ON APPROVAL:\n\n${collisionResult.reason}\n\nIt is not possible to approve this request in the current slot. Suggest rescheduling.`);
      return;
    }
    
    event.status = 'aprobada';
    this.saveDatabase();
    this.showToast("Request approved and integrated into your calendar.");
    
    const junior = this.state.db.users.find(u => u.id === event.junior_id);
    const expert = this.state.activeUser;
    
    this.sendSMTPAlert(
      "junior",
      junior.email,
      "Approved: Your Extra Support Request",
      `Hello ${junior.name},\n\nYour request for extra technical support on "${event.title}" has been ACCEPTED by expert ${expert.name}.\n\nDate: ${event.block_day}\nTime: ${event.time_start} - ${event.time_end}\n\nThe session has been confirmed in your calendar.`
    );
    
    this.renderExpertPendingRequests();
    this.renderExpertCalendar();
  },

  expertRejectRequest(eventId) {
    const event = this.state.db.calendar_events.find(e => e.id === eventId);
    if (!event) return;
    
    event.status = 'rechazada';
    this.saveDatabase();
    this.showToast("Request rejected.");
    
    const junior = this.state.db.users.find(u => u.id === event.junior_id);
    const expert = this.state.activeUser;
    
    this.sendSMTPAlert(
      "junior",
      junior.email,
      "Rejected: Extra Support Request",
      `Hello ${junior.name},\n\nYour request for extra support on "${event.title}" for ${event.block_day} has been REJECTED by expert ${expert.name} due to scheduling conflicts or unavailability.\n\nPlease try to propose another time slot or contact them directly to coordinate.`
    );
    
    this.renderExpertPendingRequests();
    this.renderExpertCalendar();
  },

  renderManagerPendingApprovals() {
    const card = document.getElementById('manager-pending-approvals-card');
    const tbody = document.getElementById('manager-pending-approvals-tbody');
    if (!tbody || !card) return;
    
    tbody.innerHTML = '';
    const pendingRequests = (this.state.db.calendar_events || []).filter(
      e => e.status === 'solicitada' || e.status === 'pendiente_aprobacion'
    );
    
    if (pendingRequests.length === 0) {
      card.style.display = 'none';
      return;
    }
    
    card.style.display = 'block';
    pendingRequests.forEach(e => {
      const tr = document.createElement('tr');
      const juniorObj = this.state.db.users.find(u => u.id === e.junior_id);
      const expertObj = this.state.db.users.find(u => u.id === e.expert_id);
      const juniorName = juniorObj ? juniorObj.name : 'N/A';
      const expertName = expertObj ? expertObj.name : 'N/A';
      const formattedDate = new Date(e.block_day + "T00:00:00").toLocaleDateString('en-US');
      
      tr.innerHTML = `
        <td><strong>${juniorName}</strong></td>
        <td>
          <div style="font-weight:600;">${e.title}</div>
          <div style="font-size:0.75rem; color:var(--neutral-muted); max-width:250px;">"${e.block_reason || 'No details'}"</div>
        </td>
        <td>${expertName}</td>
        <td>${formattedDate}<br><span style="font-weight:600; font-size:0.8rem;">${e.time_start} - ${e.time_end} (${e.planned_minutes} min)</span></td>
        <td>
          <div style="display:flex; gap:6px;">
            <button class="btn btn-success btn-xs" onclick="app.approveSupportRequest('${e.id}')"><i class="ti ti-check"></i> Approve</button>
            <button class="btn btn-danger btn-xs" onclick="app.rejectSupportRequest('${e.id}')"><i class="ti ti-x"></i> Reject</button>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });
  },

  renderManagerAuditAccordion() {
    const container = document.getElementById('manager-audit-accordion-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    const juniors = this.state.db.users.filter(u => u.role === 'consultant');
    
    juniors.forEach(junior => {
      // Get all events for this junior (except rejected and non-billable corporate learning)
      const events = (this.state.db.calendar_events || []).filter(
        e => e.junior_id === junior.id && e.status !== 'rechazado' && e.status !== 'rechazada' && e.contabilizar_ids !== false
      );
      
      // Calculate total hours (executed or planned) with expert multiplier
      const totalHours = events.reduce((sum, e) => {
        const mins = e.executed_minutes || e.planned_minutes || 60;
        const expIds = e.expertos_asistentes_ids || [e.expert_id];
        return sum + ((mins / 60) * expIds.length);
      }, 0);
      
      // Group events by expert_id
      const expertMap = {};
      events.forEach(e => {
        const expIds = e.expertos_asistentes_ids || [e.expert_id];
        expIds.forEach(id => {
          if (!expertMap[id]) {
            expertMap[id] = [];
          }
          expertMap[id].push(e);
        });
      });
      
      // Build rows for the table
      let rowsHtml = '';
      if (Object.keys(expertMap).length === 0) {
        rowsHtml = `
          <tr>
            <td colspan="4" style="text-align:center; padding:15px; color:var(--neutral-muted);">No interaction records.</td>
          </tr>
        `;
      } else {
        Object.keys(expertMap).forEach(expertId => {
          const expertEvents = expertMap[expertId];
          const expertObj = this.state.db.users.find(u => u.id === expertId);
          const expertName = expertObj ? expertObj.name : 'Expert N/A';
          
          let roleLabel = 'Tutor';
          if (expertObj) {
            if (expertObj.role === 'admin') roleLabel = 'Manager';
            else if (expertObj.role === 'senior') roleLabel = 'Senior';
            else if (expertObj.role === 'tutor') {
              const mappingTutorId = this.state.db.tutor_junior_mapping[junior.id];
              roleLabel = expertObj.id === mappingTutorId ? 'Tutor in Charge' : 'Tutor';
            }
          }
          
          // Group by type to get friendly interaction string
          const typeCounts = {};
          expertEvents.forEach(e => {
            let friendlyType = 'Support';
            if (e.type === 'tutoring') friendlyType = 'Tutoring';
            else if (e.type === 'masterclass') friendlyType = 'Masterclass';
            else if (e.type === 'coaching') friendlyType = 'Coaching';
            else if (e.type === 'extra_support') friendlyType = 'Extra Support';
            typeCounts[friendlyType] = (typeCounts[friendlyType] || 0) + 1;
          });
          
          const typeList = [];
          if (typeCounts['Tutoring']) typeList.push(`Tutoring (${typeCounts['Tutoring']})`);
          if (typeCounts['Masterclass']) typeList.push(`Masterclass (${typeCounts['Masterclass']})`);
          if (typeCounts['Coaching']) typeList.push(`Coaching (${typeCounts['Coaching']})`);
          if (typeCounts['Extra Support']) typeList.push(`Extra Support (${typeCounts['Extra Support']})`);
          const interDetails = typeList.join(' + ') || 'None';
          
          const sessionsCount = expertEvents.length;
          const expertTotalHours = expertEvents.reduce((sum, e) => {
            const mins = e.executed_minutes || e.planned_minutes || 60;
            return sum + (mins / 60);
          }, 0);
          
          rowsHtml += `
            <tr>
              <td style="font-weight: 600;">${expertName} (${roleLabel})</td>
              <td>${interDetails}</td>
              <td style="text-align: center; font-weight: 600;">${sessionsCount}</td>
              <td style="text-align: right; font-weight: 700; color: ${expertTotalHours >= 4 ? 'var(--primary)' : 'var(--neutral-dark)'};">
                ${expertTotalHours.toFixed(1)} Hrs
              </td>
            </tr>
          `;
        });
      }
      
      const isHighLoad = totalHours >= 12;
      const accordionItem = document.createElement('div');
      accordionItem.className = 'audit-accordion-item';
      accordionItem.innerHTML = `
        <button class="audit-accordion-header" onclick="app.toggleAuditAccordion('${junior.id}-panel')">
          <span class="junior-title">
            <i class="ti ti-user-star" style="color: var(--primary);"></i>
            Junior: <strong>${junior.name}</strong> (Onboarding)
          </span>
          <span class="hours-badge ${isHighLoad ? 'high-load' : ''}">
            Total: ${totalHours.toFixed(1)} Hrs Spent
          </span>
        </button>
        
        <div id="${junior.id}-panel" class="audit-accordion-content hidden">
          <table class="audit-table">
            <thead>
              <tr>
                <th>Expert Consultant</th>
                <th>Interaction Type</th>
                <th style="text-align: center;">Sessions</th>
                <th style="text-align: right;">Real Time</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      `;
      container.appendChild(accordionItem);
    });
  },

  toggleAuditAccordion(panelId) {
    const panel = document.getElementById(panelId);
    if (!panel) return;
    
    const isHidden = panel.classList.contains('hidden');
    
    // Close all audit accordion contents
    document.querySelectorAll('.audit-accordion-content').forEach(el => {
      el.classList.add('hidden');
    });
    
    // If it was hidden, open it
    if (isHidden) {
      panel.classList.remove('hidden');
    }
  },

  populateCertificationDropdowns() {
    const select = document.getElementById('admin-cert-junior-select');
    if (select && select.children.length === 0) {
      select.innerHTML = '';
      const juniors = this.state.db.users.filter(u => u.role === 'consultant');
      juniors.forEach(jr => {
        const opt = document.createElement('option');
        opt.value = jr.id;
        opt.innerText = jr.name;
        if (this.state.inspectedUser && this.state.inspectedUser.id === jr.id) {
          opt.selected = true;
        }
        select.appendChild(opt);
      });
    }
  },

  renderAdminCertChecklist() {
    const select = document.getElementById('admin-cert-junior-select');
    if (!select) return;
    
    const juniorId = select.value;
    if (!juniorId) return;
    
    const juniorObj = this.state.db.users.find(u => u.id === juniorId);
    if (!juniorObj) return;

    const tutorId = this.state.db.tutor_junior_mapping[juniorId];
    const tutorObj = this.state.db.users.find(u => u.id === tutorId);
    const tutorName = tutorObj ? tutorObj.name : 'N/A';
    
    const activeUserId = this.state.activeUser.id;
    const isMyTrainee = activeUserId === tutorId;
    
    const wrapper = document.getElementById('admin-cert-checklist-wrapper');
    const notice = document.getElementById('admin-cert-governance-notice');
    
    if (!this.state.db.cert_checklists[juniorId]) {
      this.state.db.cert_checklists[juniorId] = { 1: false, 2: false, 3: false, 4: false };
    }
    const hitos = this.state.db.cert_checklists[juniorId];
    
    wrapper.innerHTML = `
      <div class="cert-checklist-item" style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px; padding: 12px; border: 1px solid var(--neutral-border); border-radius: 6px; background-color: white;">
        <input type="checkbox" id="admin-cert-hito-1" ${hitos[1] ? 'checked' : ''} ${isMyTrainee ? '' : 'disabled'} onchange="app.toggleCertHitoForJunior('${juniorId}', 1)" style="width: 18px; height: 18px; cursor: ${isMyTrainee ? 'pointer' : 'not-allowed'};">
        <div>
          <strong style="display: block; font-size: 0.95rem; color: var(--neutral-dark);">Technical Autonomy in Sandbox MX.3</strong>
          <span style="font-size: 0.8rem; color: var(--neutral-muted);">Demonstrate proficiency in curve configuration and portfolio parameterization.</span>
        </div>
      </div>
      <div class="cert-checklist-item" style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px; padding: 12px; border: 1px solid var(--neutral-border); border-radius: 6px; background-color: white;">
        <input type="checkbox" id="admin-cert-hito-2" ${hitos[2] ? 'checked' : ''} ${isMyTrainee ? '' : 'disabled'} onchange="app.toggleCertHitoForJunior('${juniorId}', 2)" style="width: 18px; height: 18px; cursor: ${isMyTrainee ? 'pointer' : 'not-allowed'};">
        <div>
          <strong style="display: block; font-size: 0.95rem; color: var(--neutral-dark);">IFRS 9 / GAAP Accounting Understanding</strong>
          <span style="font-size: 0.8rem; color: var(--neutral-muted);">Validate and report financial statements under international standards.</span>
        </div>
      </div>
      <div class="cert-checklist-item" style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px; padding: 12px; border: 1px solid var(--neutral-border); border-radius: 6px; background-color: white;">
        <input type="checkbox" id="admin-cert-hito-3" ${hitos[3] ? 'checked' : ''} ${isMyTrainee ? '' : 'disabled'} onchange="app.toggleCertHitoForJunior('${juniorId}', 3)" style="width: 18px; height: 18px; cursor: ${isMyTrainee ? 'pointer' : 'not-allowed'};">
        <div>
          <strong style="display: block; font-size: 0.95rem; color: var(--neutral-dark);">Soft Skills and Roleplays</strong>
          <span style="font-size: 0.8rem; color: var(--neutral-muted);">Satisfactory participation in technical client meeting simulations.</span>
        </div>
      </div>
      <div class="cert-checklist-item" style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px; padding: 12px; border: 1px solid var(--neutral-border); border-radius: 6px; background-color: white;">
        <input type="checkbox" id="admin-cert-hito-4" ${hitos[4] ? 'checked' : ''} ${isMyTrainee ? '' : 'disabled'} onchange="app.toggleCertHitoForJunior('${juniorId}', 4)" style="width: 18px; height: 18px; cursor: ${isMyTrainee ? 'pointer' : 'not-allowed'};">
        <div>
          <strong style="display: block; font-size: 0.95rem; color: var(--neutral-dark);">Approval of the Final Interview with Manager</strong>
          <span style="font-size: 0.8rem; color: var(--neutral-muted);">Final comprehensive conceptual validation with Luana Ortega.</span>
        </div>
      </div>
    `;

    if (isMyTrainee) {
      notice.className = 'alert-banner success mt-15';
      notice.innerHTML = `
        <i class="ti ti-circle-check" style="font-size: 1.2rem; color: #16a34a;"></i>
        <span>You are the assigned Tutor for <strong>${juniorObj.name}</strong>. You have active permissions to validate these milestones.</span>
      `;
    } else {
      notice.className = 'alert-banner warning mt-15';
      notice.innerHTML = `
        <i class="ti ti-alert-triangle" style="font-size: 1.2rem; color: #d97706;"></i>
        <span>The assigned tutor for ${juniorObj.name} is <strong>${tutorName}</strong>. Controls are locked for you.</span>
      `;
    }
  },

  toggleCertHitoForJunior(juniorId, hitoNum) {
    const isManager = this.state.activeUser.role === 'admin';
    const isJuniorTutor = this.state.db.tutor_junior_mapping[juniorId] === this.state.activeUser.id;
    if (!isManager && !isJuniorTutor) {
      this.showForbiddenError("Error 403: You do not have permissions to certify milestones for this junior.");
      return;
    }
    const currentState = this.state.db.cert_checklists[juniorId][hitoNum] === true;
    this.state.db.cert_checklists[juniorId][hitoNum] = !currentState;
    this.saveDatabase();
    
    this.showToast("Certification milestone updated.");
    
    // Check if all certification checklist hitos are checked
    const hitos = this.state.db.cert_checklists[juniorId];
    const allChecked = hitos[1] && hitos[2] && hitos[3] && hitos[4];
    
    if (allChecked) {
      const juniorObj = this.state.db.users.find(u => u.id === juniorId);
      this.showToast(`All certification milestones have been validated for ${juniorObj.name}!`);
      
      // Send SMTP alerts
      this.sendSMTPAlert(
        "admin",
        "luana@murex.cl",
        `Certified Authorization: ${juniorObj.name}`,
        `Dear Manager Luana Ortega,\n\nAll technical certification milestones and operational skills have been approved by the Tutor of ${juniorObj.name}.\n\nThe consultant is formally authorized to go live with real clients. The Certificate of Authorization has been issued.`
      );
      
      this.sendSMTPAlert(
        "junior",
        juniorObj.email,
        "¡Felicitaciones! Has completado tu Habilitación Técnica",
        `Dear ${juniorObj.name},\n\nWe have completed your final 12-week onboarding evaluation. Your tutor and manager have certified your technical Finance & PL competencies.\n\nYou can now download your Certificate of Authorization on the platform.`
      );
    }
    
    this.renderAdminCertChecklist();
  },

  handleExpertSearch(query) {
    const resultsContainer = document.getElementById('search-results-floating');
    if (!resultsContainer) return;
    resultsContainer.innerHTML = '';
    this.activeSuggestionIndex = -1;

    if (!query.trim()) {
      resultsContainer.classList.add('hidden');
      return;
    }

    const typeSelect = document.getElementById('masterclass-type-select');
    const isCorp = typeSelect && typeSelect.value === 'MUREX_LEARNING';
    if (isCorp) {
      resultsContainer.classList.add('hidden');
      return; // Disabled for corporate sessions
    }

    // Filter experts from team roster that have not been selected yet
    const coincidencias = this.state.db.users.filter(user => {
      const isExpert = user.role === 'admin' || user.role === 'senior' || user.role === 'tutor' ||
                       user.rol === 'MANAGER' || user.rol === 'SENIOR' || user.rol === 'TUTOR';
      const yaSeleccionado = this.state.selectedExpertsIds.includes(user.id);
      const coincideNombre = user.name.toLowerCase().includes(query.toLowerCase());
      return isExpert && !yaSeleccionado && coincideNombre;
    });

    if (coincidencias.length === 0) {
      resultsContainer.classList.add('hidden');
      return;
    }

    // Render suggestions
    coincidencias.forEach((user, index) => {
      const item = document.createElement('div');
      item.className = `search-suggestion-item id-suggestion-${index}`;
      const roleLabel = user.role === 'admin' ? 'Manager' : user.role === 'senior' ? 'Senior' : 'Tutor';
      item.innerText = `${user.name} (${roleLabel})`;
      item.onclick = () => this.addExpertPill(user.id);
      resultsContainer.appendChild(item);
    });

    resultsContainer.classList.remove('hidden');
    this.currentFilteredSuggestions = coincidencias;
  },

  handleSearchKeyDown(event) {
    const resultsContainer = document.getElementById('search-results-floating');
    if (!resultsContainer || resultsContainer.classList.contains('hidden')) return;
    if (!this.currentFilteredSuggestions || this.currentFilteredSuggestions.length === 0) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.activeSuggestionIndex = Math.min(this.activeSuggestionIndex + 1, this.currentFilteredSuggestions.length - 1);
      this.highlightSuggestion();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.activeSuggestionIndex = Math.max(this.activeSuggestionIndex - 1, 0);
      this.highlightSuggestion();
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const targetIndex = this.activeSuggestionIndex >= 0 ? this.activeSuggestionIndex : 0;
      if (this.currentFilteredSuggestions[targetIndex]) {
        this.addExpertPill(this.currentFilteredSuggestions[targetIndex].id);
      }
    }
  },

  highlightSuggestion() {
    const items = document.querySelectorAll('.search-suggestion-item');
    items.forEach(el => el.classList.remove('selected'));
    const activeEl = document.querySelector(`.id-suggestion-${this.activeSuggestionIndex}`);
    if (activeEl) {
      activeEl.classList.add('selected');
      activeEl.scrollIntoView({ block: 'nearest' });
    }
  },

  addExpertPill(userId) {
    if (!this.state.selectedExpertsIds.includes(userId)) {
      this.state.selectedExpertsIds.push(userId);
    }
    
    // Reset search query
    const input = document.getElementById('expert-search-input');
    if (input) {
      input.value = '';
      input.focus(); // Keep focus for next selection
    }
    
    const resultsContainer = document.getElementById('search-results-floating');
    if (resultsContainer) resultsContainer.classList.add('hidden');
    
    this.renderSelectedPills();
  },

  renderSelectedPills() {
    const wrapper = document.getElementById('selected-pills-wrapper');
    const zone = document.getElementById('selected-pills-zone');
    if (!zone) return;
    zone.innerHTML = '';

    if (this.state.selectedExpertsIds.length === 0) {
      if (wrapper) wrapper.style.display = 'none';
      return;
    }

    if (wrapper) wrapper.style.display = 'block';

    this.state.selectedExpertsIds.forEach(id => {
      let displayName = id;
      if (id === 'MUREX_LEARNING_CORP') {
        displayName = 'Murex Learning';
      } else {
        const user = this.state.db.users.find(u => u.id === id);
        if (user) {
          const parts = user.name.split(' ');
          if (parts.length > 1) {
            displayName = `${parts[0]} ${parts[1][0]}.`;
          } else {
            displayName = user.name;
          }
        }
      }

      const pill = document.createElement('div');
      pill.className = "expert-pill-active";
      const isRemoveBtn = id === 'MUREX_LEARNING_CORP' ? '' : `<button type="button" class="focus:outline-none font-medium" onclick="app.removeExpertPill('${id}')">×</button>`;
      pill.innerHTML = `
        <span>${displayName}</span>
        ${isRemoveBtn}
      `;
      zone.appendChild(pill);
    });
  },

  removeExpertPill(userId) {
    const typeSelect = document.getElementById('masterclass-type-select');
    const isCorp = typeSelect && typeSelect.value === 'MUREX_LEARNING';
    if (isCorp) return; // Cannot remove locked corporate session

    this.state.selectedExpertsIds = this.state.selectedExpertsIds.filter(id => id !== userId);
    this.renderSelectedPills();
  },

  handleSessionTypeChange(type) {
    const tematicaInput = document.getElementById('masterclass-topic');
    const searchInput = document.getElementById('expert-search-input');
    
    if (type === 'MUREX_LEARNING') {
      this.state.selectedExpertsIds = ['MUREX_LEARNING_CORP'];
      if (tematicaInput) {
        tematicaInput.value = "Curso Murex Learning: ";
      }
      if (searchInput) {
        searchInput.value = '';
        searchInput.disabled = true;
        searchInput.placeholder = "Sesión Corporativa (Murex Learning)";
      }
    } else {
      this.state.selectedExpertsIds = [];
      if (tematicaInput && tematicaInput.value.startsWith("Curso Murex Learning: ")) {
        tematicaInput.value = "";
      }
      if (searchInput) {
        searchInput.disabled = false;
        searchInput.placeholder = "Escribe el nombre del relator...";
      }
    }
    this.populateManagerDropdowns();
  },

  getWeekForJunior(juniorId, dateStr) {
    const junior = this.state.db.users.find(u => u.id === juniorId);
    const entryDateStr = (junior && junior.entry_date) || "2026-04-13";
    
    const entry = new Date(entryDateStr + "T00:00:00");
    const target = new Date(dateStr + "T00:00:00");
    
    const diffTime = target - entry;
    if (diffTime < 0) return 1;
    
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    let weekNum = Math.floor(diffDays / 7) + 1;
    if (weekNum < 1) weekNum = 1;
    if (weekNum > 12) weekNum = 12;
    return weekNum;
  },

  updateMasterclassWeekSelect() {
    const juniorSelect = document.getElementById('masterclass-junior-select');
    const dateInput = document.getElementById('masterclass-date');
    const weekSelect = document.getElementById('masterclass-week-select');
    if (!juniorSelect || !dateInput || !weekSelect) return;
    
    const juniorId = juniorSelect.value;
    const dateVal = dateInput.value;
    if (!juniorId || !dateVal) return;
    
    const calculatedWeek = this.getWeekForJunior(juniorId, dateVal);
    weekSelect.value = calculatedWeek;
  },

  populateManagerDropdowns() {
    const weekSelect = document.getElementById('masterclass-week-select');
    if (weekSelect && weekSelect.children.length === 0) {
      weekSelect.innerHTML = '';
      for (let i = 1; i <= 12; i++) {
        const opt = document.createElement('option');
        opt.value = i;
        opt.innerText = `Week ${i}`;
        weekSelect.appendChild(opt);
      }
    }
    
    const mcJuniorSelect = document.getElementById('masterclass-junior-select');
    if (mcJuniorSelect) {
      mcJuniorSelect.innerHTML = '';
      const juniors = this.state.db.users.filter(u => u.role === 'consultant');
      juniors.forEach(jun => {
        const opt = document.createElement('option');
        opt.value = jun.id;
        opt.innerText = jun.name;
        mcJuniorSelect.appendChild(opt);
      });
    }
    
    // Reset suggestion box
    const resultsContainer = document.getElementById('search-results-floating');
    if (resultsContainer) {
      resultsContainer.innerHTML = '';
      resultsContainer.classList.add('hidden');
    }
    
    // Redraw tag pills
    this.renderSelectedPills();
    
    const juniorSelect = document.getElementById('coaching-junior-select');
    if (juniorSelect) {
      juniorSelect.innerHTML = '';
      const usersForCoaching = this.state.db.users.filter(u => u.id !== 'USR-LUANA');
      usersForCoaching.forEach(u => {
        const opt = document.createElement('option');
        opt.value = u.id;
        const roleLabel = u.role === 'consultant' ? 'Junior' : u.role === 'tutor' ? 'Tutor' : 'Senior';
        opt.innerText = `${u.name} (${roleLabel})`;
        juniorSelect.appendChild(opt);
      });
    }
  },

  prevCalendarWeek() {
    const weekNum = this.state.calendarWeekNum || 3;
    if (weekNum > 1) {
      this.state.calendarWeekNum = weekNum - 1;
      this.renderJuniorOrExpertCalendar();
    }
  },

  nextCalendarWeek() {
    const weekNum = this.state.calendarWeekNum || 3;
    if (weekNum < 12) {
      this.state.calendarWeekNum = weekNum + 1;
      this.renderJuniorOrExpertCalendar();
    }
  },

  renderJuniorOrExpertCalendar() {
    const role = this.state.activeUser.role;
    if (role === 'consultant') {
      this.renderJuniorCalendar();
    } else if (role === 'tutor' || role === 'senior') {
      this.renderExpertCalendar();
    }
  },

  renderJuniorCalendar() {
    this.updateMonthDisplay();
    this.renderMonthlyCalendarGrid('junior-calendar-monthly-grid', 'junior');
    this.updateSupportExpertOptions();
  },

  updateSupportExpertOptions() {
    const typeSelect = document.getElementById('support-type');
    const expertSelect = document.getElementById('support-expert');
    if (!expertSelect) return;

    const selectedType = typeSelect ? typeSelect.value : 'tutoring';

    if (selectedType === 'MUREX_LEARNING') {
      expertSelect.innerHTML = '<option value="MUREX_LEARNING_CORP" selected>Murex Learning</option>';
      expertSelect.disabled = true;
      return;
    }

    expertSelect.disabled = false;
    expertSelect.innerHTML = '';

    const activeUserId = this.state.activeUser.id;
    const tutorId = this.state.db.tutor_junior_mapping[activeUserId];
    const seniorManager = this.state.db.users.find(u => u.role === 'admin');

    // Get all consultants (manager, seniors, and tutors)
    const experts = this.state.db.users.filter(u => u.role === 'admin' || u.role === 'senior' || u.role === 'tutor');

    // Determine who to auto-select based on the selected session type
    let defaultSelectId = '';
    if (selectedType === 'coaching' && seniorManager) {
      defaultSelectId = seniorManager.id;
    } else {
      defaultSelectId = tutorId;
    }

    experts.forEach(exp => {
      const opt = document.createElement('option');
      opt.value = exp.id;
      
      let roleLabel = '';
      if (exp.role === 'admin') {
        roleLabel = 'Senior Manager';
      } else if (exp.role === 'senior') {
        roleLabel = 'Senior';
      } else if (exp.role === 'tutor') {
        roleLabel = exp.id === tutorId ? 'Tutor in Charge' : 'Tutor';
      }
      
      opt.innerText = `${exp.name} (${roleLabel})`;
      
      if (defaultSelectId && exp.id === defaultSelectId) {
        opt.selected = true;
      }
      
      expertSelect.appendChild(opt);
    });
  },

  renderMonthlyCalendarGrid(containerId, viewRolee) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    // 1. Render Days of Week Header
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const headerRow = document.createElement('div');
    headerRow.className = 'calendar-grid-header';
    headerRow.style.display = 'contents';
    weekdays.forEach(day => {
      const dayHeader = document.createElement('div');
      dayHeader.className = 'day-header';
      dayHeader.innerText = day;
      headerRow.appendChild(dayHeader);
    });
    container.appendChild(headerRow);
    
    // 2. Calculate Month Details
    const year = this.state.currentYear || 2026;
    const month = this.state.currentMonth !== undefined ? this.state.currentMonth : 4; // May
    
    // First day of month (0 = Sun, 1 = Mon, ..., 6 = Sat)
    let firstDayIndex = new Date(year, month, 1).getDay();
    // Convert to Monday start (0 = Mon, 1 = Tue, ..., 6 = Sun)
    firstDayIndex = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
    
    const totalDays = new Date(year, month + 1, 0).getDate();
    
    // Get previous month total days for padding
    const prevMonthTotalDays = new Date(year, month, 0).getDate();
    
    // 3. Render Empty/Muted Blocks from Previous Month
    for (let i = firstDayIndex; i > 0; i--) {
      const prevDayNum = prevMonthTotalDays - i + 1;
      const dayDiv = document.createElement('div');
      dayDiv.className = 'calendar-day empty bg-muted';
      dayDiv.innerHTML = `<span class="day-number text-muted">${prevDayNum}</span>`;
      container.appendChild(dayDiv);
    }
    
    // 4. Render Active Month Days
    const today = new Date();
    for (let dayNum = 1; dayNum <= totalDays; dayNum++) {
      const dayDiv = document.createElement('div');
      const isToday = (year === today.getFullYear() && month === today.getMonth() && dayNum === today.getDate());
      dayDiv.className = isToday ? 'calendar-day today' : 'calendar-day bg-white';
      
      const dayNumSpan = document.createElement('span');
      dayNumSpan.className = 'day-number';
      dayNumSpan.innerText = dayNum;
      dayDiv.appendChild(dayNumSpan);
      
      // Calculate date string (YYYY-MM-DD)
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
      
      // Render Events for this date
      const eventsContainer = document.createElement('div');
      eventsContainer.className = 'calendar-events-container';
      
      // Filter events
      const allEvents = this.state.db.calendar_events || [];
      let dayEvents = [];
      
      if (viewRolee === 'junior') {
        // Show events for the logged-in junior
        dayEvents = allEvents.filter(e => e.block_day === dateStr && e.junior_id === this.state.activeUser.id);
      } else if (viewRolee === 'tutor') {
        // Show events for the logged-in tutor/expert, or coaching sessions where they are the recipient
        dayEvents = allEvents.filter(e => e.block_day === dateStr && (
          e.expert_id === this.state.activeUser.id || 
          (e.expertos_asistentes_ids && e.expertos_asistentes_ids.includes(this.state.activeUser.id)) ||
          (e.type === 'coaching' && e.junior_id === this.state.activeUser.id)
        ));
      } else if (viewRolee === 'manager') {
        // Show events for the selected junior in the manager's select
        const selectedJuniorId = this.state.managerCalendarSelectedJuniorId || (this.state.db.users.find(u => u.role === 'consultant') || {}).id;
        dayEvents = allEvents.filter(e => e.block_day === dateStr && e.junior_id === selectedJuniorId);
      }
      
      dayEvents.sort((a, b) => (a.time_start || '').localeCompare(b.time_start || ''));
      
      dayEvents.forEach(e => {
        const card = document.createElement('div');
        
        let statusKey = e.status;
        if (statusKey === 'pendiente_aprobacion') statusKey = 'solicitada';
        if (statusKey === 'aprobado') statusKey = 'aprobada';
        if (statusKey === 'rechazado') statusKey = 'rechazada';
        if (statusKey === 'ejecutado') statusKey = 'ejecutada';
        
        let typeClass = `event-${e.type}`;
        if (e.type === 'extra_support') {
          typeClass += `-${statusKey}`;
        }
        if (statusKey === 'rechazada') {
          typeClass = 'event-rejected';
        }
        if (statusKey === 'ejecutada') {
          typeClass = 'event-executed';
        }
        
        card.className = `calendar-event-card ${typeClass}`;
        
        let expertName = 'N/A';
        if (e.expert_id === 'MUREX_LEARNING_CORP') {
          expertName = 'Murex Learning';
        } else if (e.expertos_asistentes_ids && e.expertos_asistentes_ids.length > 0) {
          expertName = e.expertos_asistentes_ids.map(id => {
            const u = this.state.db.users.find(usr => usr.id === id);
            if (!u) return 'N/A';
            const parts = u.name.split(' ');
            if (parts.length > 1) {
              return `${parts[0]} ${parts[1][0]}.`;
            }
            return u.name;
          }).join(', ');
        } else {
          const expertObj = this.state.db.users.find(u => u.id === e.expert_id);
          expertName = expertObj ? expertObj.name : 'N/A';
        }
        
        const juniorObj = this.state.db.users.find(u => u.id === e.junior_id);
        const juniorName = juniorObj ? juniorObj.name : 'N/A';
        
        let badgeLabel = '';
        let badgeClass = '';
        if (statusKey === 'solicitada') {
          badgeLabel = 'Pending';
          badgeClass = 'badge-solicitada';
        } else if (statusKey === 'aprobada') {
          badgeLabel = 'Accepted';
          badgeClass = 'badge-aprobada';
        } else if (statusKey === 'ejecutada') {
          badgeLabel = `Executed (${e.executed_minutes}m)`;
          badgeClass = 'badge-ejecutada';
        } else if (statusKey === 'rechazada') {
          badgeLabel = 'Cancelled';
          badgeClass = 'badge-rechazada';
        }
        
        card.innerHTML = `
          <div class="calendar-event-card-time" style="font-size:0.65rem; font-weight:700;">
            <i class="ti ti-clock"></i> ${e.time_start} - ${e.time_end}
          </div>
          <div class="calendar-event-card-title" style="font-size:0.7rem; font-weight:600; line-height:1.1; margin:2px 0;">${e.title}</div>
          <div class="calendar-event-card-expert" style="font-size:0.65rem;">
            ${viewRolee === 'tutor' ? (e.junior_id === this.state.activeUser.id ? `Con: ${expertName}` : `Junior: ${juniorName}`) : `Tutor: ${expertName}`}
          </div>
          <span class="calendar-event-card-status ${badgeClass}" style="font-size:0.6rem; margin-top:2px;">${badgeLabel}</span>
        `;
        
        if (viewRolee === 'tutor' && (e.status === 'aprobada' || e.status === 'aprobado')) {
          card.setAttribute('title', 'Click to close the session and record real time.');
          card.onclick = () => this.selectCloseSession(e.id);
        } else {
          card.setAttribute('title', `Details: ${e.block_reason || 'No details'}`);
        }
        
        // Wrap card in a event-wrapper for popover
        const gridIndex = (firstDayIndex + dayNum - 1) % 7;
        const isRightSide = (gridIndex >= 4);
        
        const wrapper = document.createElement('div');
        wrapper.className = 'calendar-event-wrapper';
        wrapper.id = `wrapper-${e.id}`;
        wrapper.style.position = 'relative';
        wrapper.setAttribute('onmouseenter', `app.showEventPopover('${e.id}')`);
        wrapper.setAttribute('onmouseleave', `app.hideEventPopover('${e.id}')`);
        wrapper.setAttribute('data-side', isRightSide ? 'right' : 'left');
        
        wrapper.appendChild(card);
        
        // Add popover container HTML
        const popoverDiv = document.createElement('div');
        popoverDiv.id = `popover-${e.id}`;
        popoverDiv.className = 'hidden absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-1 bg-white border border-gray-200 shadow-xl rounded-lg p-2.5 w-48 text-xs space-y-2 animate-fade-in calendar-event-popover';
        popoverDiv.style.minWidth = '220px';
        
        const organizer = this.state.db.users.find(u => u.id === e.organizador_id);
        const organizerName = organizer ? organizer.name : (e.organizador_id || 'N/A');
        
        let inviteeName = 'N/A';
        if (e.expertos_asistentes_ids && e.expertos_asistentes_ids.length > 0) {
          inviteeName = e.expertos_asistentes_ids.map(id => this.state.db.users.find(u => u.id === id)?.name || id).join(', ');
        } else {
          const expert = this.state.db.users.find(u => u.id === e.expert_id);
          inviteeName = expert ? expert.name : (e.expert_id || 'N/A');
        }

        popoverDiv.innerHTML = `
          <p class="font-bold text-gray-800" style="margin: 0 0 6px 0; font-weight: 700; border-b: 1px solid #f1f5f9; padding-bottom: 4px;">Meeting Governance</p>
          <div style="font-size: 10px; color: #4b5563; margin-bottom: 6px; display: flex; flex-direction: column; gap: 2px; line-height: 1.3;">
            <div><strong>Topic:</strong> ${e.title}</div>
            <div><strong>Organizer:</strong> ${organizerName}</div>
            <div><strong>Invitee:</strong> ${inviteeName}</div>
            <div><strong>Status:</strong> <span class="popover-status-label" style="font-weight: 600;">${e.estado_confirmacion || 'PENDING'}</span></div>
          </div>
          <div id="popover-actions-${e.id}" class="flex flex-col gap-1.5" style="display: flex; flex-direction: column; gap: 6px;">
          </div>
        `;
        
        wrapper.appendChild(popoverDiv);
        eventsContainer.appendChild(wrapper);
      });
      
      dayDiv.appendChild(eventsContainer);
      container.appendChild(dayDiv);
    }
    
    // 5. Render Blank Blocks for Next Month Alignment
    const currentTotalBlocks = firstDayIndex + totalDays;
    const remainingBlocks = (7 - (currentTotalBlocks % 7)) % 7;
    for (let i = 1; i <= remainingBlocks; i++) {
      const dayDiv = document.createElement('div');
      dayDiv.className = 'calendar-day empty bg-muted';
      dayDiv.innerHTML = `<span class="day-number text-muted">${i}</span>`;
      container.appendChild(dayDiv);
    }
  },

  updateMonthDisplay() {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const text = `${monthNames[this.state.currentMonth]} ${this.state.currentYear}`;
    
    const juniorLabel = document.getElementById('junior-month-display');
    const expertLabel = document.getElementById('expert-month-display');
    const managerLabel = document.getElementById('manager-month-display');
    
    if (juniorLabel) juniorLabel.innerText = text;
    if (expertLabel) expertLabel.innerText = text;
    if (managerLabel) managerLabel.innerText = text;
  },

  prevMonth() {
    if (this.state.currentMonth === 0) {
      this.state.currentMonth = 11;
      this.state.currentYear--;
    } else {
      this.state.currentMonth--;
    }
    this.updateMonthDisplay();
    this.renderActiveCalendarGrid();
  },
  
  nextMonth() {
    if (this.state.currentMonth === 11) {
      this.state.currentMonth = 0;
      this.state.currentYear++;
    } else {
      this.state.currentMonth++;
    }
    this.updateMonthDisplay();
    this.renderActiveCalendarGrid();
  },

  renderActiveCalendarGrid() {
    const role = this.state.activeUser.role;
    if (role === 'consultant') {
      this.renderMonthlyCalendarGrid('junior-calendar-monthly-grid', 'junior');
    } else if (role === 'tutor' || role === 'senior') {
      this.renderMonthlyCalendarGrid('expert-calendar-monthly-grid', 'tutor');
    } else if (role === 'admin') {
      this.renderMonthlyCalendarGrid('manager-calendar-monthly-grid', 'manager');
    }
  },

  populateManagerCalendarJuniorSelect() {
    const select = document.getElementById('manager-calendar-junior-select');
    if (!select) return;
    if (select.children.length > 0) return;
    
    select.innerHTML = '';
    const trainees = this.state.db.users.filter(u => u.role === 'consultant');
    trainees.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t.id;
      opt.innerText = t.name;
      select.appendChild(opt);
    });
    
    if (trainees.length > 0 && !this.state.managerCalendarSelectedJuniorId) {
      this.state.managerCalendarSelectedJuniorId = trainees[0].id;
    }
  },

  changeManagerCalendarJunior(juniorId) {
    this.state.managerCalendarSelectedJuniorId = juniorId;
    this.renderMonthlyCalendarGrid('manager-calendar-monthly-grid', 'manager');
  },

  mutarEvento(eventId, nuevoEstado) {
    const event = this.state.db.calendar_events.find(e => e.id === eventId);
    if (!event) return;
    
    const isManager = this.state.activeUser.role === 'admin';
    const isAssignedExpert = event.expert_id === this.state.activeUser.id;
    if (!isManager && !isAssignedExpert) {
      this.showForbiddenError("Error 403: No tienes permisos para modificar este evento.");
      return;
    }
    
    if (nuevoEstado === 'aprobada') {
      const collisionResult = this.checkCollision(event.block_day, event.time_start, event.planned_minutes, event.expert_id, event.junior_id, eventId);
      if (collisionResult.collision) {
        alert(`⚠️ COLLISION ERROR ON APPROVAL:\n\n${collisionResult.reason}\n\nIt is not possible to approve this request in the current slot. Suggest rescheduling.`);
        return;
      }
      event.status = 'aprobada';
      this.showToast("Request accepted and integrated into your calendar.");
      
      const junior = this.state.db.users.find(u => u.id === event.junior_id);
      const expert = this.state.activeUser;
      
      this.sendSMTPAlert(
        "junior",
        junior.email,
        "Aprobada: Tu Solicitud de Extra Support",
        `Hola ${junior.name},\n\nTu solicitud de consulta técnica extra sobre "${event.title}" ha sido ACEPTADA por el experto ${expert.name}.\n\nFecha: ${event.block_day}\nHorario: ${event.time_start} - ${event.time_end}\n\nLa sesión ha sido confirmada en tu agenda.`
      );
    } else if (nuevoEstado === 'rechazada') {
      event.status = 'rechazada';
      this.showToast("Request declined.");
      
      const junior = this.state.db.users.find(u => u.id === event.junior_id);
      const expert = this.state.activeUser;
      
      this.sendSMTPAlert(
        "junior",
        junior.email,
        "Rechazada: Solicitud de Extra Support",
        `Hola ${junior.name},\n\nTu solicitud de soporte extra sobre "${event.title}" para el ${event.block_day} ha sido RECHAZADA por el experto ${expert.name} debido a incompatibilidad horaria o indisponibilidad.\n\nPor favor intenta proponer otro horario o ponte en contacto directo para coordinar.`
      );
    }
    
    this.saveDatabase();
    this.renderExpertPendingRequests();
    this.renderActiveCalendarGrid();
  },

  showEventPopover(eventId) {
    const popover = document.getElementById(`popover-${eventId}`);
    if (!popover) return;
    
    this.renderPopoverActions(eventId);
    popover.classList.remove('hidden');
  },

  hideEventPopover(eventId) {
    const popover = document.getElementById(`popover-${eventId}`);
    if (popover) {
      popover.classList.add('hidden');
    }
  },

  renderPopoverActions(eventoId) {
    const evento = this.state.db.calendar_events.find(e => e.id === eventoId);
    if (!evento) return;
    
    const accionesContainer = document.getElementById(`popover-actions-${eventoId}`);
    if (!accionesContainer) return;
    accionesContainer.innerHTML = ''; // Reset

    // Regla A: Inmutabilidad Corporativa Global
    if (evento.tipo_sesion === 'MUREX_LEARNING' || evento.bloqueado_edicion) {
        accionesContainer.innerHTML = `<span class="text-gray-400 italic text-[11px]">Fixed corporate schedule</span>`;
        return;
    }

    // Convertir la fecha del evento para comparar en el espacio-tiempo
    const fechaStr = evento.fecha || evento.block_day;
    const fechaEvento = new Date(fechaStr + 'T00:00:00');
    
    // Regla B: Inmutabilidad del Pasado (Auditoría Histórica Fija)
    if (fechaEvento <= HOY_PRESENTE) {
        accionesContainer.innerHTML = `<span class="text-green-600 font-medium text-[11px] flex items-center gap-1">✓ Executed & Historical</span>`;
        return; // Detiene la inyección de botones (Imposible modificar o cancelar el pasado)
    }

    // Regla C: El Futuro es Modificable (Solo si es participante legítimo o Manager)
    const currentUserId = this.state.activeUser.id;
    const isManager = this.state.activeUser.role === 'admin';
    const esOrganizador = (evento.organizador_id === currentUserId);
    const esInvitado = (evento.expertos_asistentes_ids && evento.expertos_asistentes_ids.includes(currentUserId)) || (evento.expert_id === currentUserId);

    // Manager override acting as Super Organizador
    if (isManager) {
        if (evento.estado_confirmacion === 'PENDIENTE_ORGANIZER' || evento.estado_confirmacion === 'PENDIENTE_INVITADO') {
            accionesContainer.innerHTML += `
                <button onclick="event.stopPropagation(); app.confirmarHorario('${eventoId}')" class="bg-green-600 text-white p-1.5 rounded font-medium text-[11px] cursor-pointer text-center" style="display: block; width: 100%; border: none;">Accept & Fix</button>
                <button onclick="event.stopPropagation(); app.abrirModalModificar('${eventoId}')" class="bg-gray-100 hover:bg-pink-50 text-pink-600 p-1.5 rounded font-medium text-[11px] cursor-pointer text-center" style="display: block; width: 100%; border: none;">Modify Schedule</button>
                <button onclick="event.stopPropagation(); app.cancelarReunion('${eventoId}')" class="bg-red-50 hover:bg-red-100 text-red-600 p-1.5 rounded font-medium text-[11px] cursor-pointer text-center" style="display: block; width: 100%; border: none;">Cancel Meeting</button>
            `;
        } else {
            accionesContainer.innerHTML += `
                <button onclick="event.stopPropagation(); app.abrirModalModificar('${eventoId}')" class="bg-gray-100 hover:bg-pink-50 text-pink-600 p-1.5 rounded font-medium text-[11px] cursor-pointer text-center" style="display: block; width: 100%; border: none;">Modify Schedule</button>
                <button onclick="event.stopPropagation(); app.cancelarReunion('${eventoId}')" class="bg-red-50 hover:bg-red-100 text-red-600 p-1.5 rounded font-medium text-[11px] cursor-pointer text-center" style="display: block; width: 100%; border: none;">Cancel Meeting</button>
            `;
        }
        return;
    }

    // Flujo de Negociación si soy el dueño/creador original
    if (esOrganizador) {
        if (evento.estado_confirmacion === 'PENDIENTE_ORGANIZER') {
            // El invitado me la movió, yo debo aceptar su contrapropuesta
            accionesContainer.innerHTML += `<button onclick="event.stopPropagation(); app.confirmarHorario('${eventoId}')" class="bg-green-600 text-white p-1.5 rounded font-medium text-[11px] cursor-pointer text-center" style="display: block; width: 100%; border: none;">Accept Counterproposal</button>`;
        } else if (evento.estado_confirmacion === 'PENDIENTE_INVITADO') {
            accionesContainer.innerHTML += `<span class="text-gray-400 italic text-[11px]" style="margin-bottom: 4px; display: block; text-align: center;">Waiting for response...</span>`;
        }
        // El organizador siempre puede alterar el futuro de su evento creado
        accionesContainer.innerHTML += `
            <button onclick="event.stopPropagation(); app.abrirModalModificar('${eventoId}')" class="bg-gray-100 hover:bg-pink-50 text-pink-600 p-1.5 rounded font-medium text-[11px] cursor-pointer text-center" style="display: block; width: 100%; border: none;">Modify Schedule</button>
            <button onclick="event.stopPropagation(); app.cancelarReunion('${eventoId}')" class="bg-red-50 hover:bg-red-100 text-red-600 p-1.5 rounded font-medium text-[11px] cursor-pointer text-center" style="display: block; width: 100%; border: none;">Cancel Meeting</button>
        `;
    } 
    // Flujo de Negociación si soy el invitado experto requerido
    else if (esInvitado) {
        if (evento.estado_confirmacion === 'PENDIENTE_INVITADO') {
            accionesContainer.innerHTML += `
                <button onclick="event.stopPropagation(); app.confirmarHorario('${eventoId}')" class="bg-green-600 text-white p-1.5 rounded font-medium text-[11px] cursor-pointer text-center" style="display: block; width: 100%; border: none;">Accept & Fix</button>
                <button onclick="event.stopPropagation(); app.abrirModalModificar('${eventoId}')" class="bg-gray-100 hover:bg-pink-50 text-pink-600 p-1.5 rounded font-medium text-[11px] cursor-pointer text-center" style="display: block; width: 100%; border: none;">Propose Change</button>
            `;
        } else if (evento.estado_confirmacion === 'FIXED') {
            // El experto puede cancelar su asistencia a un evento futuro por contingencias
            accionesContainer.innerHTML += `<button onclick="event.stopPropagation(); app.cancelarReunion('${eventoId}')" class="bg-red-50 hover:bg-red-100 text-red-600 p-1.5 rounded font-medium text-[11px] cursor-pointer text-center" style="display: block; width: 100%; border: none;">Cancel Attendance</button>`;
        }
    }
  },

  procesarModificacionHorario(eventoId, nuevaFecha, nuevaHoraInicio, nuevaHoraFin) {
    const evento = this.state.db.calendar_events.find(e => e.id === eventoId);
    if (!evento) return;
    
    // Cambiar datos de tiempo del futuro
    evento.fecha = nuevaFecha;
    evento.block_day = nuevaFecha;
    evento.hora_inicio = nuevaHoraInicio;
    evento.time_start = nuevaHoraInicio;
    evento.hora_fin = nuevaHoraFin;
    evento.time_end = nuevaHoraFin;
    
    // Compute duration
    const parseTime = (t) => t.split(':').map(Number);
    const [h1, m1] = parseTime(nuevaHoraInicio);
    const [h2, m2] = parseTime(nuevaHoraFin);
    evento.planned_minutes = (h2 * 60 + m2) - (h1 * 60 + m1);

    // Inversión lógica de estados de negociación
    if (this.state.activeUser.id === evento.organizador_id) {
        // Si la mueve el creador, vuelve a requerir visa del invitado experto
        evento.estado_confirmacion = 'PENDIENTE_INVITADO';
    } else {
        // Si la mueve el experto, pasa a requerir la aceptación del organizador
        evento.estado_confirmacion = 'PENDIENTE_ORGANIZER';
    }
    
    this.saveDatabase();
    alert("Proposed schedule successfully modified. A negotiation alert has been sent to the counterparty.");
    
    // Notify the counterparty via SMTP
    let targetUserIds = [];
    if (this.state.activeUser.role === 'admin') {
      targetUserIds.push(evento.junior_id);
      targetUserIds.push(evento.expert_id);
    } else if (this.state.activeUser.id === evento.organizador_id) {
      targetUserIds.push(evento.expert_id);
    } else {
      targetUserIds.push(evento.organizador_id);
    }
    
    targetUserIds.forEach(id => {
      const otherUser = this.state.db.users.find(u => u.id === id);
      if (otherUser && otherUser.id !== this.state.activeUser.id) {
        let msg = '';
        if (this.state.activeUser.role === 'admin') {
          msg = `Hello ${otherUser.name},\n\nManager Luana Ortega has directly rescheduled the meeting "${evento.title}":\n\nNew Time: ${nuevaFecha} from ${nuevaHoraInicio} to ${nuevaHoraFin}.\n\nPlease check the Calendar Hub to see the details.`;
        } else if (this.state.activeUser.id === evento.organizador_id) {
          msg = `Dear ${otherUser.name},\n\nThe meeting organizer, ${this.state.activeUser.name}, has proposed a schedule modification for "${evento.title}":\n\nNew Time: ${nuevaFecha} from ${nuevaHoraInicio} to ${nuevaHoraFin}.\n\nPlease log in to your MXBoard to review and confirm.`;
        } else {
          msg = `Hello ${otherUser.name},\n\nYour tutor/guest ${this.state.activeUser.name} has proposed a schedule modification for "${evento.title}":\n\nNew Time: ${nuevaFecha} from ${nuevaHoraInicio} to ${nuevaHoraFin}.\n\nPlease check the Calendar Hub to see the proposal.`;
        }
        
        this.sendSMTPAlert(
          otherUser.role || 'junior',
          otherUser.email,
          "Schedule Modification: HUB Meeting",
          msg
        );
      }
    });

    this.renderExpertPendingRequests();
    this.renderActiveCalendarGrid();
    if (this.state.activeUser.role === 'admin') {
      this.renderManagerPendingApprovals();
      this.renderManagerCalendar();
    }
  },

  confirmarHorario(eventId) {
    const event = this.state.db.calendar_events.find(e => e.id === eventId);
    if (!event) return;
    
    const collisionResult = this.checkCollision(event.block_day, event.time_start, event.planned_minutes, event.expert_id, event.junior_id, eventId);
    if (collisionResult.collision) {
      alert(`⚠️ COLLISION ERROR ON APPROVAL:\n\n${collisionResult.reason}\n\nIt is not possible to approve this request in the current slot. Suggest rescheduling.`);
      return;
    }
    
    event.status = 'aprobada';
    event.estado_confirmacion = 'FIXED';
    this.saveDatabase();
    this.showToast("Meeting confirmed and scheduled successfully.");
    
    let targetUserIds = [];
    if (this.state.activeUser.id === event.organizador_id) {
      targetUserIds.push(event.expert_id);
    } else if (this.state.activeUser.id === event.expert_id) {
      targetUserIds.push(event.organizador_id);
    } else {
      targetUserIds.push(event.junior_id);
      targetUserIds.push(event.expert_id);
    }
    
    targetUserIds.forEach(id => {
      const otherUser = this.state.db.users.find(u => u.id === id);
      if (otherUser && otherUser.id !== this.state.activeUser.id) {
        this.sendSMTPAlert(
          otherUser.role || 'junior',
          otherUser.email,
          "Schedule Confirmation: Meeting Fixed",
          `Dear ${otherUser.name},\n\nThe session "${event.title}" has been CONFIRMED and fixed on the calendar by ${this.state.activeUser.name}.\n\nDate: ${event.block_day}\nHours: ${event.time_start} - ${event.time_end}\n\nThe meeting is now confirmed.`
        );
      }
    });
    
    this.renderActiveCalendarGrid();
    this.renderExpertPendingRequests();
    if (this.state.activeUser.role === 'admin') {
      this.renderManagerPendingApprovals();
      this.renderManagerCalendar();
    }
  },

  cancelarReunion(eventId) {
    const event = this.state.db.calendar_events.find(e => e.id === eventId);
    if (!event) return;
    
    event.status = 'rechazada';
    event.estado_confirmacion = 'CANCELLED';
    this.saveDatabase();
    this.showToast("Meeting cancelled.");
    
    let targetUserIds = [];
    if (this.state.activeUser.id === event.organizador_id) {
      targetUserIds.push(event.expert_id);
    } else if (this.state.activeUser.id === event.expert_id) {
      targetUserIds.push(event.organizador_id);
    } else {
      targetUserIds.push(event.junior_id);
      targetUserIds.push(event.expert_id);
    }
    
    targetUserIds.forEach(id => {
      const otherUser = this.state.db.users.find(u => u.id === id);
      if (otherUser && otherUser.id !== this.state.activeUser.id) {
        this.sendSMTPAlert(
          otherUser.role || 'junior',
          otherUser.email,
          "Meeting Cancelled / Rejected",
          `Dear ${otherUser.name},\n\nThe session "${event.title}" scheduled for ${event.block_day} from ${event.time_start} to ${event.time_end} has been CANCELLED / REJECTED by ${this.state.activeUser.name}.\n\nPlease coordinate a new time slot if necessary.`
        );
      }
    });
    
    this.renderActiveCalendarGrid();
    this.renderExpertPendingRequests();
    if (this.state.activeUser.role === 'admin') {
      this.renderManagerPendingApprovals();
      this.renderManagerCalendar();
    }
  },

  abrirModalModificar(eventId) {
    const event = this.state.db.calendar_events.find(e => e.id === eventId);
    if (!event) return;
    
    if (event.bloqueado_edicion) {
      this.showToast("This corporate meeting is locked for editing.", "warning");
      return;
    }
    
    document.getElementById('modify-event-id').value = eventId;
    document.getElementById('modify-event-date').value = event.block_day;
    document.getElementById('modify-event-start').value = event.time_start;
    document.getElementById('modify-event-end').value = event.time_end;
    
    const modal = document.getElementById('modify-event-modal');
    if (modal) {
      modal.style.display = 'flex';
    }
  },
  
  closeModifyModal() {
    const modal = document.getElementById('modify-event-modal');
    if (modal) {
      modal.style.display = 'none';
    }
  },
  
  submitModifyEvent() {
    const eventId = document.getElementById('modify-event-id').value;
    const newDate = document.getElementById('modify-event-date').value;
    const newStart = document.getElementById('modify-event-start').value;
    const newEnd = document.getElementById('modify-event-end').value;
    
    if (!newDate || !newStart || !newEnd) {
      this.showToast("Please fill in all fields to modify.", "warning");
      return;
    }
    
    const event = this.state.db.calendar_events.find(e => e.id === eventId);
    if (!event) return;
    
    if (event.bloqueado_edicion) {
      this.showToast("This corporate meeting is locked for editing.", "warning");
      return;
    }
    
    const parseTime = (t) => t.split(':').map(Number);
    const [h1, m1] = parseTime(newStart);
    const [h2, m2] = parseTime(newEnd);
    const duration = (h2 * 60 + m2) - (h1 * 60 + m1);
    
    if (duration <= 0) {
      alert("⚠️ Error: The end time must be after the start time.");
      return;
    }
    
    const collisionResult = this.checkCollision(newDate, newStart, duration, event.expert_id, event.junior_id, eventId);
    if (collisionResult.collision) {
      alert(`⚠️ COLLISION ERROR ON UPDATE:\n\n${collisionResult.reason}\n\nThe selected slot collides with another session.`);
      return;
    }
    
    // Delegate to procesarModificacionHorario
    this.procesarModificacionHorario(eventId, newDate, newStart, newEnd);
    this.closeModifyModal();
  },

  handleRequestSupport(e) {
    e.preventDefault();
    
    const expertId = document.getElementById('support-expert').value;
    const category = document.getElementById('support-category').value;
    const date = document.getElementById('support-date').value;
    const time = document.getElementById('support-time').value;
    const duration = parseInt(document.getElementById('support-duration').value);
    const reason = document.getElementById('support-reason').value.trim();
    
    const selectedDate = new Date(date + "T00:00:00");
    const today = new Date(HOY_PRESENTE);
    today.setHours(0,0,0,0);
    if (selectedDate < today) {
      this.showToast("You cannot request support for past dates.", "warning");
      return;
    }
    
    const collisionResult = this.checkCollision(date, time, duration, expertId, this.state.activeUser.id);
    if (collisionResult.collision) {
      alert(`⚠️ COLLISION ERROR:\n\n${collisionResult.reason}\n\nPlease propose another time slot.`);
      return;
    }
    
    const weekNum = this.getWeekForJunior(this.state.activeUser.id, date);
    
    const [h, m] = time.split(':').map(Number);
    const endTotalMins = h * 60 + m + duration;
    const endH = Math.floor(endTotalMins / 60).toString().padStart(2, '0');
    const endM = (endTotalMins % 60).toString().padStart(2, '0');
    const endTime = `${endH}:${endM}`;
    
    const supportType = document.getElementById('support-type').value;
    let eventTitle = '';
    let emailSubject = '';
    let emailBody = '';
    
    if (supportType === 'coaching') {
      eventTitle = `Coaching: ${category}`;
      emailSubject = `Coaching Session Request Received: ${this.state.activeUser.name}`;
      emailBody = `Dear Senior Manager,\n\nJunior Consultant ${this.state.activeUser.name} has submitted a coaching session request:\n\nTopic: ${category}\nDate: ${date} from ${time} to ${endTime}\nDetail: "${reason}"\n\nPlease go to the "Pending Requests" tab to respond to this request.`;
    } else if (supportType === 'tutoring') {
      eventTitle = `Tutoring: ${category}`;
      emailSubject = `Regular Tutoring Request Received: ${this.state.activeUser.name}`;
      emailBody = `Dear Tutor,\n\nJunior Consultant ${this.state.activeUser.name} has submitted a regular tutoring request:\n\nTopic: ${category}\nDate: ${date} from ${time} to ${endTime}\nDetail: "${reason}"\n\nPlease go to the "Pending Requests" tab to respond to this request.`;
    } else if (supportType === 'masterclass') {
      eventTitle = `Masterclass: ${category}`;
      emailSubject = `Special Masterclass Request Received: ${this.state.activeUser.name}`;
      emailBody = `Dear Speaker,\n\nJunior Consultant ${this.state.activeUser.name} has submitted a special masterclass request:\n\nTopic: ${category}\nDate: ${date} from ${time} to ${endTime}\nDetail: "${reason}"\n\nPlease go to the "Pending Requests" tab to respond to this request.`;
    } else if (supportType === 'MUREX_LEARNING') {
      eventTitle = `Murex Learning: ${category}`;
      emailSubject = `Corporate Session Registered: ${category}`;
      emailBody = `Dear Junior,\n\nYour attendance at the corporate Murex Learning meeting has been registered:\n\nTopic: ${category}\nDate: ${date} from ${time} to ${endTime}\nDetail: "${reason}"\n\nThis session is automatically confirmed.`;
    } else {
      eventTitle = `Extra Support: ${category}`;
      emailSubject = `Extra Support Request Received: ${this.state.activeUser.name}`;
      emailBody = `Dear Expert,\n\nJunior Consultant ${this.state.activeUser.name} has submitted a request for reactive extra support:\n\nTopic: ${category}\nDate: ${date} from ${time} to ${endTime}\nDetail: "${reason}"\n\nPlease go to the "Pending Requests" tab of your MXBoard to Accept or Reject this session.`;
    }

    const newEvent = {
      id: `ev-${Math.random().toString(36).substr(2, 9)}`,
      title: eventTitle,
      type: supportType,
      junior_id: this.state.activeUser.id,
      expert_id: expertId,
      block_day: date,
      time_start: time,
      time_end: endTime,
      planned_minutes: duration,
      executed_minutes: null,
      status: supportType === 'MUREX_LEARNING' ? 'aprobado' : 'solicitada',
      block_reason: reason,
      week_number: weekNum,
      organizador_id: this.state.activeUser.id,
      estado_confirmacion: supportType === 'MUREX_LEARNING' ? 'FIXED' : 'PENDIENTE_INVITADO',
      bloqueado_edicion: supportType === 'MUREX_LEARNING',
      
      // Mapped corporate JSON API fields
      tipo_sesion: supportType,
      tematica: category,
      junior_receptor_id: this.state.activeUser.id,
      senior_expositor_id: expertId,
      expositor_nombre: supportType === 'MUREX_LEARNING' ? 'Murex Learning' : (this.state.db.users.find(u => u.id === expertId)?.name || 'N/A'),
      contabilizar_ids: supportType === 'MUREX_LEARNING' ? false : true,
      fecha: date,
      hora_inicio: time,
      hora_fin: endTime
    };
    
    if (!this.state.db.calendar_events) {
      this.state.db.calendar_events = [];
    }
    
    this.state.db.calendar_events.push(newEvent);
    this.saveDatabase();
    
    this.showToast(supportType === 'MUREX_LEARNING' ? "Murex Learning corporate session registered." : "Session request submitted directly.");
    
    const junior = this.state.activeUser;
    
    if (supportType !== 'MUREX_LEARNING') {
      const expert = this.state.db.users.find(u => u.id === expertId);
      if (expert) {
        this.sendSMTPAlert(
          expert.role,
          expert.email,
          emailSubject,
          emailBody
        );
      }
    } else {
      this.sendSMTPAlert(
        "admin",
        "learning.corp@murex.com",
        emailSubject,
        emailBody
      );
    }
    
    document.getElementById('junior-support-request-form').reset();
    
    // Reset expert dropdown to defaults
    this.updateSupportExpertOptions();
    
    this.switchJuniorSessionTab('calendar');
  },

  renderManagerApprovals() {
    const tbody = document.getElementById('manager-pending-requests-tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    const pendingEvents = (this.state.db.calendar_events || []).filter(e => e.status === 'pendiente_aprobacion');
    
    if (pendingEvents.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 20px; color:var(--neutral-muted);">There are no pending extra support requests awaiting approval.</td></tr>`;
      return;
    }
    
    pendingEvents.forEach(e => {
      const tr = document.createElement('tr');
      const juniorObj = this.state.db.users.find(u => u.id === e.junior_id);
      const expertObj = this.state.db.users.find(u => u.id === e.expert_id);
      const juniorName = juniorObj ? juniorObj.name : 'N/A';
      const expertName = expertObj ? expertObj.name : 'N/A';
      const formattedDate = new Date(e.block_day + "T00:00:00").toLocaleDateString('en-US');
      
      tr.innerHTML = `
        <td><strong>${juniorName}</strong></td>
        <td>
          <div style="font-weight:600;">${e.title.replace('Extra Support: ', '')}</div>
          <div style="font-size:0.75rem; color:var(--neutral-muted); max-width:250px;">"${e.block_reason}"</div>
        </td>
        <td>${expertName}</td>
        <td>${formattedDate}<br><span style="font-weight:600; font-size:0.8rem;">${e.time_start} - ${e.time_end} (${e.planned_minutes} min)</span></td>
        <td>
          <div style="display:flex; gap:6px;">
            <button class="btn btn-success btn-xs" onclick="app.approveSupportRequest('${e.id}')"><i class="ti ti-check"></i> Approve</button>
            <button class="btn btn-danger btn-xs" onclick="app.rejectSupportRequest('${e.id}')"><i class="ti ti-x"></i> Reject</button>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });
  },

  approveSupportRequest(eventId) {
    const event = this.state.db.calendar_events.find(e => e.id === eventId);
    if (!event) return;
    
    const collisionResult = this.checkCollision(event.block_day, event.time_start, event.planned_minutes, event.expert_id, event.junior_id, eventId);
    if (collisionResult.collision) {
      alert(`⚠️ COLLISION ERROR ON APPROVAL:\n\n${collisionResult.reason}\n\nIt is not possible to approve this request in the current slot. Suggest rescheduling.`);
      return;
    }
    
    event.status = 'aprobado';
    this.saveDatabase();
    this.showToast("Request approved and blocked in calendars.");
    
    const junior = this.state.db.users.find(u => u.id === event.junior_id);
    const expert = this.state.db.users.find(u => u.id === event.expert_id);
    
    this.sendSMTPAlert(
      "junior",
      junior.email,
      "Approved: Your Extra Support Request",
      `Dear ${junior.name},\n\nYour request for extra technical support on "${event.title}" has been APPROVED by Manager Luana Ortega.\n\nDate: ${event.block_day}\nTime: ${event.time_start} - ${event.time_end}\nExpert: ${expert?.name || 'N/A'}\n\nThe session has been scheduled in your Calendar Hub.`
    );
    
    this.sendSMTPAlert(
      expert.role,
      expert.email,
      `New Extra Support Session Assigned: ${junior.name}`,
      `Dear ${expert.name},\n\nManager Luana Ortega has approved and scheduled an extra support session where you are the expert:\n\nJunior: ${junior.name}\nTheme: ${event.title}\nDate: ${event.block_day}\nHours: ${event.time_start} - ${event.time_end}\n\nPlease log in at the scheduled time and, once finished, record the session closure in your Operational Calendar.`
    );
    
    this.renderManagerPendingApprovals();
    this.renderManagerAuditAccordion();
    this.renderManagerAuditDashboard();
    this.renderManagerCalendar();
  },

  rejectSupportRequest(eventId) {
    const event = this.state.db.calendar_events.find(e => e.id === eventId);
    if (!event) return;
    
    event.status = 'rechazado';
    this.saveDatabase();
    this.showToast("Request rejected.");
    
    const junior = this.state.db.users.find(u => u.id === event.junior_id);
    this.sendSMTPAlert(
      "junior",
      junior.email,
      "Rejected: Extra Support Request",
      `Dear ${junior.name},\n\nYour request for extra support on "${event.title}" for ${event.block_day} has been REJECTED by Manager Luana Ortega.\n\nPlease speak with your tutor to coordinate another slot or get asynchronous help.`
    );
    
    this.renderManagerPendingApprovals();
    this.renderManagerAuditAccordion();
    this.renderManagerCalendar();
  },

  scheduleMasterclass() {
    const typeSelect = document.getElementById('masterclass-type-select');
    const sessionType = typeSelect ? typeSelect.value : 'MASTERCLASS';
    
    const weekNum = parseInt(document.getElementById('masterclass-week-select').value);
    const topic = document.getElementById('masterclass-topic').value.trim();
    const juniorId = document.getElementById('masterclass-junior-select').value;
    const date = document.getElementById('masterclass-date').value;
    const timeBlock = document.getElementById('masterclass-time-block').value;
    
    if (!topic || !date || !timeBlock) {
      this.showToast("Please fill out all fields.", "warning");
      return;
    }
    
    const expertosIds = [...this.state.selectedExpertsIds];
    
    if (expertosIds.length === 0) {
      this.showToast("Please select at least one attending expert.", "warning");
      return;
    }
    
    if (sessionType === 'MASTERCLASS') {
      const existingMc = (this.state.db.calendar_events || []).find(
        e => e.week_number === weekNum && e.junior_id === juniorId && e.type === 'masterclass' && e.status !== 'rechazado' && e.status !== 'rechazada'
      );
      if (existingMc) {
        this.showToast(`The selected Junior already has a Masterclass scheduled for Week ${weekNum}.`, "warning");
        return;
      }
    }
    
    const [timeStart, timeEnd] = timeBlock.split('-');
    
    // Check collisions for each expert
    for (const expId of expertosIds) {
      const collisionResult = this.checkCollision(date, timeStart, 60, expId, juniorId);
      if (collisionResult.collision) {
        alert(`⚠️ COLLISION ERROR:\n\n${collisionResult.reason}\n\nPlease propose another time slot.`);
        return;
      }
    }
    
    const eventType = sessionType === 'MUREX_LEARNING' ? 'MUREX_LEARNING' : (sessionType === 'FEEDBACK_ALINEAMIENTO' ? 'FEEDBACK_ALINEAMIENTO' : 'masterclass');
    const eventTitle = sessionType === 'MUREX_LEARNING' ? `Murex Learning: ${topic}` : (sessionType === 'FEEDBACK_ALINEAMIENTO' ? `Feedback: ${topic}` : `Masterclass: ${topic}`);
    const eventReason = sessionType === 'MUREX_LEARNING' ? `Internal Murex Meeting (Global): ${topic}` : (sessionType === 'FEEDBACK_ALINEAMIENTO' ? `Feedback / Alignment Session: ${topic}. Syllabus week: ${weekNum}.` : `Individual masterclass: ${topic}. Syllabus week: ${weekNum}.`);
    
    const newMc = {
      id: `ev-${Math.random().toString(36).substr(2, 9)}`,
      title: eventTitle,
      type: eventType,
      junior_id: juniorId,
      expert_id: expertosIds[0],
      expertos_asistentes_ids: expertosIds,
      block_day: date,
      time_start: timeStart,
      time_end: timeEnd,
      planned_minutes: 60,
      executed_minutes: null,
      status: "aprobado",
      block_reason: eventReason,
      week_number: weekNum,
      organizador_id: this.state.activeUser.id,
      estado_confirmacion: "FIXED",
      bloqueado_edicion: sessionType === 'MUREX_LEARNING',
      
      // Mapped corporate JSON API fields
      tipo_sesion: sessionType,
      tematica: topic,
      junior_receptor_id: juniorId,
      senior_expositor_id: expertosIds[0],
      expositor_nombre: sessionType === 'MUREX_LEARNING' ? 'Murex Learning' : expertosIds.map(id => this.state.db.users.find(u => u.id === id)?.name || 'N/A').join(', '),
      contabilizar_ids: sessionType === 'MUREX_LEARNING' ? false : true,
      fecha: date,
      hora_inicio: timeStart,
      hora_fin: timeEnd
    };
    
    this.state.db.calendar_events.push(newMc);
    this.saveDatabase();
    
    this.showToast(sessionType === 'MUREX_LEARNING' ? `Corporate session scheduled successfully.` : `Week ${weekNum} session scheduled successfully.`);
    
    const junior = this.state.db.users.find(u => u.id === juniorId);
    
    if (sessionType !== 'MUREX_LEARNING') {
      expertosIds.forEach(expId => {
        const expert = this.state.db.users.find(u => u.id === expId);
        if (expert && junior) {
          const typeLabel = sessionType === 'FEEDBACK_ALINEAMIENTO' ? 'Feedback / Alignment' : 'Masterclass';
          this.sendSMTPAlert(
            expert.role,
            expert.email,
            `Assigned Session: Week ${weekNum}`,
            `Dear ${expert.name},\n\nManager Luana Ortega has assigned you as the speaker for the week ${weekNum} session (${typeLabel}):\n\nTopic: ${topic}\nReceiving Junior: ${junior.name}\nDate: ${date}\nHours: ${timeStart} - ${timeEnd}\n\nPlease connect on time to deliver the session. Once finished, remember to close it in your panel.`
          );
        }
      });
    } else {
      this.sendSMTPAlert(
        "admin",
        "learning.corp@murex.com",
        `Corporate Session Registered: ${topic}`,
        `Corporate registration for the Murex Learning session: ${topic}.\nDate: ${date}\nHours: ${timeStart} - ${timeEnd}`
      );
    }
    
    if (junior) {
      let relatorName = 'N/A';
      if (sessionType === 'MUREX_LEARNING') {
        relatorName = 'Murex Learning';
      } else {
        relatorName = expertosIds.map(id => this.state.db.users.find(u => u.id === id)?.name || 'N/A').join(', ');
      }
      const typeLabel = sessionType === 'FEEDBACK_ALINEAMIENTO' ? 'Feedback / Alignment' : 'Masterclass';
      this.sendSMTPAlert(
        junior.role,
        junior.email,
        sessionType === 'MUREX_LEARNING' ? `New Corporate Session: ${topic}` : `New Scheduled Session: Week ${weekNum}`,
        sessionType === 'MUREX_LEARNING' ? 
          `Dear ${junior.name},\n\nAn Internal Murex Meeting (Global) has been scheduled for you:\n\nTopic: ${topic}\nDate: ${date}\nHours: ${timeStart} - ${timeEnd}\n\nThis session has no local costs and has been registered by Manager Luana Ortega.` :
          `Dear ${junior.name},\n\nManager Luana Ortega has scheduled a ${typeLabel} session for you for Week ${weekNum}:\n\nTopic: ${topic}\nSpeaker (Senior / Tutor): ${relatorName}\nDate: ${date}\nHours: ${timeStart} - ${timeEnd}\n\nThe session has been blocked in your Calendar Hub.`
      );
    }
    
    document.getElementById('masterclass-topic').value = '';
    document.getElementById('masterclass-date').value = '';
    
    // Reset type selector
    if (typeSelect) {
      typeSelect.value = 'MASTERCLASS';
      this.handleSessionTypeChange('MASTERCLASS');
    }
    
    this.renderManagerMasterclasses();
    this.renderManagerAuditDashboard();
    this.renderManagerCalendar();
  },

  scheduleCoachingSession() {
    const juniorId = document.getElementById('coaching-junior-select').value;
    const topic = document.getElementById('coaching-topic').value.trim();
    const date = document.getElementById('coaching-date').value;
    const time = document.getElementById('coaching-time').value;
    
    if (!topic || !date || !time) {
      this.showToast("Please fill out all fields for Coaching.", "warning");
      return;
    }
    
    const [h, m] = time.split(':').map(Number);
    const endH = Math.floor((h * 60 + m + 60) / 60).toString().padStart(2, '0');
    const endM = ((h * 60 + m + 60) % 60).toString().padStart(2, '0');
    const endTime = `${endH}:${endM}`;
    
    const collisionResult = this.checkCollision(date, time, 60, "USR-LUANA", juniorId);
    if (collisionResult.collision) {
      alert(`⚠️ COLLISION ERROR:\n\n${collisionResult.reason}\n\nPlease propose another time slot.`);
      return;
    }
    
    const newCoaching = {
      id: `ev-${Math.random().toString(36).substr(2, 9)}`,
      title: `Coaching: ${topic}`,
      type: "coaching",
      junior_id: juniorId,
      expert_id: "USR-LUANA",
      block_day: date,
      time_start: time,
      time_end: endTime,
      planned_minutes: 60,
      executed_minutes: null,
      status: "aprobado",
      block_reason: `Individual coaching meeting to evaluate progress and soft skills.`,
      week_number: this.getWeekForJunior(juniorId, date),
      organizador_id: this.state.activeUser.id,
      estado_confirmacion: "FIXED",
      bloqueado_edicion: false
    };
    
    this.state.db.calendar_events.push(newCoaching);
    this.saveDatabase();
    
    this.showToast("Coaching session successfully scheduled.");
    
    const userObj = this.state.db.users.find(u => u.id === juniorId);
    this.sendSMTPAlert(
      userObj.role,
      userObj.email,
      "New Coaching Session Scheduled",
      `Hello ${userObj.name},\n\nManager Luana Ortega has scheduled a 1-on-1 session with you for coaching and feedback:\n\nTopic: ${topic}\nDate: ${date}\nTime: ${time} - ${endTime}\n\nThe session has been blocked in your Calendar Hub.`
    );
    
    document.getElementById('coaching-topic').value = '';
    document.getElementById('coaching-date').value = '';
    document.getElementById('coaching-time').value = '';
    
    this.renderManagerAuditDashboard();
    this.renderManagerCalendar();
  },

  renderManagerMasterclasses() {
    const tbody = document.getElementById('manager-masterclasses-tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    const mcEvents = (this.state.db.calendar_events || []).filter(e => e.type === 'masterclass' || e.type === 'MUREX_LEARNING' || e.type === 'FEEDBACK_ALINEAMIENTO');
    const uniqueMcs = {};
    
    mcEvents.forEach(e => {
      const key = e.group_id || `week-${e.week_number}-${e.block_day}-${e.time_start}`;
      if (!uniqueMcs[key]) {
        uniqueMcs[key] = e;
      }
    });
    
    const sortedMcList = Object.values(uniqueMcs).sort((a,b) => a.week_number - b.week_number);
    
    if (sortedMcList.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 20px; color:var(--neutral-muted);">No sessions scheduled yet.</td></tr>`;
      return;
    }
    
    sortedMcList.forEach(e => {
      const tr = document.createElement('tr');
      
      let expertName = 'N/A';
      if (e.expert_id === 'MUREX_LEARNING_CORP') {
        expertName = 'Murex Learning';
      } else if (e.expertos_asistentes_ids && e.expertos_asistentes_ids.length > 0) {
        expertName = e.expertos_asistentes_ids.map(id => this.state.db.users.find(usr => usr.id === id)?.name || 'N/A').join(', ');
      } else {
        const expertObj = this.state.db.users.find(u => u.id === e.expert_id);
        expertName = expertObj ? expertObj.name : 'N/A';
      }
      
      const formattedDate = new Date(e.block_day + "T00:00:00").toLocaleDateString('en-US');
      
      let statusLabel = 'Scheduled';
      let statusClass = 'badge-approved';
      if (e.status === 'ejecutado' || e.status === 'ejecutada') {
        statusLabel = 'Executed';
        statusClass = 'badge-executed';
      }
      
      let badgeStyle = 'background-color:rgba(147, 51, 234, 0.1); color:#9333ea; font-weight:700;';
      if (e.type === 'MUREX_LEARNING') {
        badgeStyle = 'background-color:rgba(71, 85, 105, 0.1); color:#475569; font-weight:700;';
      } else if (e.type === 'FEEDBACK_ALINEAMIENTO') {
        badgeStyle = 'background-color:rgba(13, 148, 136, 0.1); color:#0d9488; font-weight:700;';
      }
      
      tr.innerHTML = `
        <td><span class="badge" style="${badgeStyle}">Week ${e.week_number}</span></td>
        <td><strong>${e.title.replace('Masterclass: ', '').replace('Murex Learning: ', '').replace('Feedback: ', '')}</strong></td>
        <td>${expertName}</td>
        <td>${formattedDate} (${e.time_start} - ${e.time_end})</td>
        <td><span class="calendar-event-card-status ${statusClass}" style="display:inline-block; padding:2px 6px; font-size:0.7rem; border-radius:3px;">${statusLabel}</span></td>
      `;
      tbody.appendChild(tr);
    });
  },

  renderManagerAuditDashboard() {
    const allEvents = this.state.db.calendar_events || [];
    const executedEvents = allEvents.filter(e => e.status === 'ejecutado' || e.status === 'ejecutada');
    
    let totalHours = 0;
    let reactSupportHours = 0;
    
    executedEvents.forEach(e => {
      // REGLA DE NEGOCIO: Si el flag es false (Murex Learning), se salta la iteración de costos
      if (e.contabilizar_ids === false) {
        return; // Ignora este evento para el cálculo del IDS y costos locales
      }
      const durationBase = (e.executed_minutes || 0) / 60;
      const expIds = e.expertos_asistentes_ids || [e.expert_id];
      const count = expIds.length;
      
      totalHours += durationBase * count;
      
      if (e.type === 'extra_support') {
        reactSupportHours += durationBase * count;
      }
    });
    
    const idsIndex = totalHours > 0 ? Math.round((reactSupportHours / totalHours) * 100) : 0;
    
    const hoursEl = document.getElementById('audit-total-hours');
    const idsEl = document.getElementById('audit-ids-index');
    
    if (hoursEl) hoursEl.innerText = `${totalHours.toFixed(1)} hrs`;
    if (idsEl) idsEl.innerText = `${idsIndex}%`;
    
    const tbody = document.getElementById('manager-audit-trail-tbody');
    if (tbody) {
      tbody.innerHTML = '';
      if (executedEvents.length === 0) {
        tbody.innerHTML = `<tr><td colspan="3" style="text-align:center; padding:15px; color:var(--neutral-muted);">No audited records.</td></tr>`;
      } else {
        const sortedExecuted = [...executedEvents].sort((a,b) => new Date(b.block_day) - new Date(a.block_day));
        sortedExecuted.forEach(e => {
          const tr = document.createElement('tr');
          const expertObj = this.state.db.users.find(u => u.id === e.expert_id);
          const formattedDate = new Date(e.block_day + "T00:00:00").toLocaleDateString('en-US', { day: '2-digit', month: '2-digit' });
          
          let shortType = 'Tutoring';
          if (e.type === 'masterclass') shortType = 'Masterclass';
          if (e.type === 'extra_support') shortType = 'Support';
          if (e.type === 'coaching') shortType = 'Coaching';
          
          tr.innerHTML = `
            <td>${formattedDate}</td>
            <td>
              <div style="font-weight:600;">${shortType}</div>
              <div style="font-size:0.7rem; color:var(--neutral-muted);">${expertObj?.name || 'N/A'}</div>
            </td>
            <td>${e.executed_minutes}m</td>
          `;
          tbody.appendChild(tr);
        });
      }
    }
    
    this.renderManagerCharts();
  },

  renderManagerCharts() {
    if (typeof Chart === 'undefined') {
      console.warn("Chart.js is not loaded. Skipping rendering of audit charts.");
      return;
    }
    const executedEvents = (this.state.db.calendar_events || []).filter(e => e.status === 'ejecutado' || e.status === 'ejecutada');
    
    const experts = this.state.db.users.filter(u => u.role !== 'consultant');
    const expertHours = {};
    experts.forEach(exp => {
      expertHours[exp.name] = 0;
    });
    
    executedEvents.forEach(e => {
      if (e.contabilizar_ids === false) {
        return;
      }
      const durationBase = (e.executed_minutes / 60);
      const expIds = e.expertos_asistentes_ids || [e.expert_id];
      expIds.forEach(id => {
        const exp = this.state.db.users.find(u => u.id === id);
        if (exp) {
          expertHours[exp.name] = (expertHours[exp.name] || 0) + durationBase;
        }
      });
    });
    
    const labelsResource = Object.keys(expertHours);
    const dataResource = Object.values(expertHours);
    
    const ctxResource = document.getElementById('manager-chart-resource-hours');
    if (ctxResource) {
      if (this.state.charts.resource) {
        this.state.charts.resource.destroy();
      }
      this.state.charts.resource = new Chart(ctxResource, {
        type: 'bar',
        data: {
          labels: labelsResource,
          datasets: [{
            label: 'Real Hours',
            data: dataResource,
            backgroundColor: 'rgba(166, 25, 46, 0.7)',
            borderColor: '#A6192E',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: { font: { size: 9 } }
            },
            x: {
              ticks: { font: { size: 9 } }
            }
          },
          plugins: {
            legend: { display: false }
          }
        }
      });
    }
    
    const types = ['tutoring', 'masterclass', 'extra_support', 'coaching'];
    const typeLabels = {
      'tutoring': 'Tutoring',
      'masterclass': 'Masterclass',
      'extra_support': 'Support',
      'coaching': 'Coaching'
    };
    
    const plannedHours = { tutoring: 0, masterclass: 0, extra_support: 0, coaching: 0 };
    const realHours = { tutoring: 0, masterclass: 0, extra_support: 0, coaching: 0 };
    
    executedEvents.forEach(e => {
      if (types.includes(e.type)) {
        plannedHours[e.type] += (e.planned_minutes || 60) / 60;
        realHours[e.type] += (e.executed_minutes || 0) / 60;
      }
    });
    
    const labelsDev = types.map(t => typeLabels[t]);
    const dataPlanned = types.map(t => plannedHours[t]);
    const dataReal = types.map(t => realHours[t]);
    
    const ctxDev = document.getElementById('manager-chart-deviation');
    if (ctxDev) {
      if (this.state.charts.deviation) {
        this.state.charts.deviation.destroy();
      }
      this.state.charts.deviation = new Chart(ctxDev, {
        type: 'bar',
        data: {
          labels: labelsDev,
          datasets: [
            {
              label: 'Planned (hrs)',
              data: dataPlanned,
              backgroundColor: 'rgba(100, 116, 139, 0.5)',
              borderColor: '#64748b',
              borderWidth: 1
            },
            {
              label: 'Real (hrs)',
              data: dataReal,
              backgroundColor: 'rgba(22, 163, 74, 0.7)',
              borderColor: '#16a34a',
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: { font: { size: 9 } }
            },
            x: {
              ticks: { font: { size: 9 } }
            }
          },
          plugins: {
            legend: {
              position: 'top',
              labels: { font: { size: 8 } }
            }
          }
        }
      });
    }
  },

  renderExpertCalendar() {
    this.updateMonthDisplay();
    this.renderMonthlyCalendarGrid('expert-calendar-monthly-grid', 'tutor');
    
    const container = document.getElementById('expert-close-session-form-container');
    const emptyState = document.getElementById('expert-close-empty-state');
    const formContainer = document.getElementById('expert-close-active-content');
    
    if (emptyState) emptyState.classList.remove('hidden');
    if (formContainer) formContainer.classList.add('hidden');
  },

  selectCloseSession(eventId) {
    const event = this.state.db.calendar_events.find(e => e.id === eventId);
    if (!event) return;
    
    const emptyState = document.getElementById('expert-close-empty-state');
    const formContainer = document.getElementById('expert-close-active-content');
    
    if (emptyState) emptyState.classList.add('hidden');
    if (formContainer) {
      formContainer.classList.remove('hidden');
      formContainer.dataset.eventId = eventId;
    }
    
    const titleEl = document.getElementById('close-session-title');
    const detailsEl = document.getElementById('close-session-details');
    const minutesInput = document.getElementById('close-session-real-minutes');
    
    if (titleEl) titleEl.innerText = event.title;
    if (detailsEl) {
      const juniorObj = this.state.db.users.find(u => u.id === event.junior_id);
      const juniorName = juniorObj ? juniorObj.name : 'N/A';
      detailsEl.innerHTML = `
        <strong>Junior:</strong> ${juniorName}<br>
        <strong>Planned:</strong> ${event.planned_minutes} min (${event.time_start} - ${event.time_end})<br>
        <strong>Date:</strong> ${event.block_day}
      `;
    }
    if (minutesInput) {
      minutesInput.value = event.planned_minutes || 60;
    }
  },

  submitCloseSession() {
    const formContainer = document.getElementById('expert-close-active-content');
    if (!formContainer) return;
    
    const eventId = formContainer.dataset.eventId;
    const realMinutesInput = document.getElementById('close-session-real-minutes');
    const realMinutes = parseInt(realMinutesInput?.value || 60);
    
    const event = this.state.db.calendar_events.find(e => e.id === eventId);
    if (!event) {
      this.showToast("Error: Session not found.", "danger");
      return;
    }
    
    event.status = 'ejecutado';
    event.executed_minutes = realMinutes;
    
    this.saveDatabase();
    this.showToast("Session successfully closed and audited.");
    
    const expert = this.state.activeUser;
    this.sendSMTPAlert(
      "admin",
      "luana@murex.cl",
      `Session Closed and Audited: ${event.title}`,
      `Dear Manager Luana Ortega,\n\nExpert ${expert.name} has closed and registered the actual duration of the session:\n\nSession: ${event.title}\nJunior: ${this.state.db.users.find(u => u.id === event.junior_id)?.name || 'N/A'}\nActual Time Executed: ${realMinutes} minutes.\n\nThe session has been recorded in the timesheet history.`
    );
    
    formContainer.classList.add('hidden');
    const emptyState = document.getElementById('expert-close-empty-state');
    if (emptyState) emptyState.classList.remove('hidden');
    
    this.renderExpertCalendar();
  },

  resetCalendarEvents() {
    const initialCalendarEvents = [];
    
    this.state.db.calendar_events = initialCalendarEvents;
    this.saveDatabase();
    this.showToast("Calendar hours history reset.");
    
    this.renderManagerPendingApprovals();
    this.renderManagerAuditAccordion();
    this.renderManagerMasterclasses();
    this.renderManagerAuditDashboard();
  },

  openAddMemberModal() {
    if (!this.state.activeUser || this.state.activeUser.role !== 'admin') {
      this.showForbiddenError("Error 403: No tienes permisos para abrir el registro de miembros.");
      return;
    }
    const modal = document.getElementById('add-member-modal');
    if (modal) {
      modal.style.display = 'flex';
      modal.classList.remove('hidden');
    }
    
    // Fill tutor options select
    const select = document.getElementById('new-member-tutor');
    if (select) {
      select.innerHTML = '';
      const tutors = this.state.db.users.filter(u => u.role === 'tutor' || u.role === 'senior');
      tutors.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t.id;
        opt.innerText = `${t.name} (${t.role === 'senior' ? 'Senior' : 'Tutor'})`;
        select.appendChild(opt);
      });
    }
    
    // Reset form
    const form = document.getElementById('add-member-form');
    if (form) form.reset();
    
    // Ensure tutor select group is visible initially (since JUNIOR is default)
    const tutorGroup = document.getElementById('new-member-tutor-group');
    if (tutorGroup) tutorGroup.style.display = 'block';

    // Ensure entry date group is visible initially and defaults to local today
    const entryDateGroup = document.getElementById('new-member-entry-date-group');
    if (entryDateGroup) entryDateGroup.style.display = 'block';
    
    const entryDateInput = document.getElementById('new-member-entry-date');
    if (entryDateInput) {
      entryDateInput.setAttribute('required', 'true');
      const today = new Date();
      const offset = today.getTimezoneOffset();
      const localToday = new Date(today.getTime() - (offset * 60 * 1000));
      entryDateInput.value = localToday.toISOString().split('T')[0];
    }
  },
  
  closeAddMemberModal() {
    const modal = document.getElementById('add-member-modal');
    if (modal) {
      modal.style.display = 'none';
      modal.classList.add('hidden');
    }
  },

  openChangePasswordModal() {
    const modal = document.getElementById('change-password-modal');
    if (modal) {
      modal.style.display = 'flex';
      modal.classList.remove('hidden');
    }
    const form = document.getElementById('change-password-form');
    if (form) form.reset();
  },

  closeChangePasswordModal() {
    const modal = document.getElementById('change-password-modal');
    if (modal) {
      modal.style.display = 'none';
      modal.classList.add('hidden');
    }
  },

  handleChangePassword(event) {
    if (event && event.preventDefault) event.preventDefault();

    const email = document.getElementById('change-pass-email').value.trim().toLowerCase();
    const currentPass = document.getElementById('change-pass-current').value;
    const newPass = document.getElementById('change-pass-new').value;
    const confirmPass = document.getElementById('change-pass-confirm').value;

    const userInDb = this.state.db.users.find(u => u.email.toLowerCase() === email);
    if (!userInDb) {
      this.showToast("Email address does not exist in the system.", "danger");
      return;
    }

    if (currentPass !== userInDb.password) {
      this.showToast("Current password is incorrect.", "danger");
      return;
    }

    if (newPass !== confirmPass) {
      this.showToast("New passwords do not match.", "danger");
      return;
    }

    if (newPass.length < 4) {
      this.showToast("New password must be at least 4 characters long.", "warning");
      return;
    }

    userInDb.password = newPass;
    if (this.state.activeUser && this.state.activeUser.email.toLowerCase() === email) {
      this.state.activeUser.password = newPass;
    }
    this.saveDatabase();
    this.showToast("Password updated successfully.");
    this.closeChangePasswordModal();
  },

  handleNewMemberRoleeChange(value) {
    const tutorGroup = document.getElementById('new-member-tutor-group');
    if (tutorGroup) {
      tutorGroup.style.display = value === 'JUNIOR' ? 'block' : 'none';
    }
    const entryDateGroup = document.getElementById('new-member-entry-date-group');
    const entryDateInput = document.getElementById('new-member-entry-date');
    if (entryDateGroup) {
      entryDateGroup.style.display = value === 'JUNIOR' ? 'block' : 'none';
    }
    if (entryDateInput) {
      if (value === 'JUNIOR') {
        entryDateInput.setAttribute('required', 'true');
      } else {
        entryDateInput.removeAttribute('required');
      }
    }
  },

  handleCreateMember(event) {
    if (event && event.preventDefault) event.preventDefault();
    if (!this.state.activeUser || this.state.activeUser.role !== 'admin') {
      this.showForbiddenError("Error 403: No tienes permisos para registrar miembros.");
      return;
    }
    
    const name = document.getElementById('new-member-name').value.trim();
    const email = document.getElementById('new-member-email').value.trim();
    const selectedRole = document.getElementById('new-member-role').value;
    
    // Validate uniqueness of email
    if (this.state.db.users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      this.showToast("Email address is already registered.", "danger");
      return;
    }
    
    const newId = `u-${Math.random().toString(36).substr(2, 9)}`;
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().substr(0, 2);
    
    const newMember = {
      id: newId,
      name: name,
      email: email,
      password: "password",
      avatar_initials: initials,
      rol: selectedRole,
      role: selectedRole === 'SENIOR' ? 'senior' : (selectedRole === 'TUTOR' ? 'tutor' : 'consultant')
    };

    let tutorId = null;
    if (selectedRole === 'JUNIOR') {
      newMember.current_week = 1;
      newMember.avg_score = 0;
      newMember.status = "on_track";
      newMember.entry_date = document.getElementById('new-member-entry-date').value;
      
      // Initialize progress record
      const progress = {
        completed_weeks: [],
        checklist_states: {},
        test_scores: {},
        test_attempts: {},
        test_times: {},
        deliverables: {},
        comments: {}
      };
      
      // Populate week checklist empty states
      this.state.db.week_templates.forEach(wt => {
        progress.checklist_states[wt.week_number] = {};
        wt.checklist_items.forEach((_, idx) => {
          progress.checklist_states[wt.week_number][idx] = false;
        });
      });
      
      this.state.db.consultant_progress[newId] = progress;
      
      // Associate tutor
      tutorId = document.getElementById('new-member-tutor').value;
      this.state.db.tutor_junior_mapping[newId] = tutorId;
      
      // Initialize empty certification checklist
      this.state.db.cert_checklists[newId] = { 1: false, 2: false, 3: false, 4: false };

      // Automatically create an Arrival calendar event
      const arrivalEvent = {
        id: `ev-llegada-${newId}`,
        title: `Arrival of ${name}`,
        type: "llegada",
        junior_id: newId,
        expert_id: "USR-LUANA",
        block_day: newMember.entry_date,
        time_start: "09:30",
        time_end: "10:30",
        planned_minutes: 60,
        executed_minutes: null,
        status: "aprobado",
        block_reason: `First day of Junior ${name} entry to the Finance & PL team.`,
        week_number: 1,
        organizador_id: "USR-LUANA",
        estado_confirmacion: "FIXED",
        bloqueado_edicion: true
      };
      
      this.state.db.calendar_events = this.state.db.calendar_events || [];
      this.state.db.calendar_events.push(arrivalEvent);
    }
    
    this.state.db.users.push(newMember);
    this.saveDatabase();
    
    this.showToast(`Contributor ${name} successfully registered.`);
    this.closeAddMemberModal();
    this.renderTeamTable();
    this.renderAdminView();
 
    if (selectedRole === 'JUNIOR' && tutorId) {
      const tutor = this.state.db.users.find(u => u.id === tutorId);
      if (tutor) {
        // Send to Junior
        this.sendSMTPAlert(
          "junior",
          email,
          "Welcome to the Active Qualification Plan (Murex Finance & PL)",
          `Hello ${name},\n\nYour onboarding profile has been created in MXBoard. Your plan consists of 12 weeks to get formally qualified.\n\nYour assigned tutor is ${tutor.name}. Your initial password is 'password'.`
        );
        
        // Send to Tutor
        this.sendSMTPAlert(
          "tutor",
          tutor.email,
          `New Junior Assigned: ${name}`,
          `Dear ${tutor.name},\n\nA new Junior Consultant ${name} has been registered in the system, and you have been assigned as their Tutor.\n\nPlease get in touch with them to schedule your first tutoring session.`
        );
      }
    }
  },

  renderTeamTable() {
    const container = document.getElementById('team-table-body');
    if (!container) return;
    container.innerHTML = ''; // Limpiar filas anteriores
    
    this.state.db.users.forEach(user => {
      const row = document.createElement('tr');
      row.className = "border-b border-gray-100 hover:bg-gray-50 transition-colors";
      
      // Estado visual de la malla técnica
      let estadoMalla = '';
      if (user.rol === 'JUNIOR') {
        const today = new Date();
        const todayStr = `${today.getFullYear()}-${(today.getMonth()+1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
        const cronWeek = this.getWeekForJunior(user.id, todayStr);
        const entryDateFormatted = user.entry_date ? user.entry_date : 'Not registered';
        
        estadoMalla = `
          <div style="display: flex; flex-direction: column; gap: 4px; align-items: flex-start;">
            <span class="text-xs bg-pink-100 text-pink-700 px-2.5 py-1 rounded-full font-medium">
              Week ${user.semana_actual || user.current_week || 1} (Progress)
            </span>
            <span class="text-xs text-gray-500" style="margin-left: 4px; font-weight: 500;">
              Week ${cronWeek} (Chronological)
            </span>
            <span class="text-xs text-gray-400" style="margin-left: 4px; font-style: italic;">
              Entry: ${entryDateFormatted}
            </span>
          </div>
        `;
      } else {
        estadoMalla = `<span class="text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-medium">Enabled (Autonomous)</span>`;
      }

      // Use user.rol in uppercase if set, otherwise fallback from user.role mapping
      const currentRole = user.rol || (user.role === 'admin' ? 'MANAGER' : user.role === 'tutor' ? 'TUTOR' : user.role === 'senior' ? 'SENIOR' : 'JUNIOR');

      // Tutor Selection
      let tutorCell = '';
      if (currentRole === 'JUNIOR') {
        const currentTutorId = this.state.db.tutor_junior_mapping[user.id] || '';
        const tutorsList = this.state.db.users.filter(u => u.role === 'tutor' || u.role === 'senior');
        tutorCell = `
          <select id="tutor-select-${user.id}" class="bg-gray-50 border border-gray-300 rounded-md p-1.5 text-xs focus:ring-pink-500 team-role-select" style="max-width: 150px;">
            <option value="" ${currentTutorId === '' ? 'selected' : ''}>Unassigned</option>
            ${tutorsList.map(t => `<option value="${t.id}" ${t.id === currentTutorId ? 'selected' : ''}>${t.nombre || t.name}</option>`).join('')}
          </select>
        `;
      } else {
        tutorCell = `<span class="text-xs text-gray-400">N/A</span>`;
      }

      const isSelf = user.id === this.state.activeUser.id;
      const deleteBtnHtml = isSelf ? '' : `
        <button onclick="app.handleDeleteMember('${user.id}')" class="btn btn-xs" style="background-color: rgba(225, 29, 72, 0.08); color: #E11D48; border: 1px solid rgba(225, 29, 72, 0.18); font-weight: 600; display: inline-flex; align-items: center; gap: 4px; transition: all 0.2s ease; margin-left: 6px;" onmouseover="this.style.backgroundColor='rgba(225, 29, 72, 0.15)'" onmouseout="this.style.backgroundColor='rgba(225, 29, 72, 0.08)'">
          <i class="ti ti-trash" style="font-size: 0.85rem;"></i> Eliminar
        </button>
      `;

      row.innerHTML = `
        <td class="p-4 font-medium text-gray-800">${user.nombre || user.name}</td>
        <td class="p-4 text-gray-600">${user.email}</td>
        <td class="p-4">
          <select id="role-select-${user.id}" class="bg-gray-50 border border-gray-300 rounded-md p-1.5 text-xs focus:ring-pink-500 team-role-select">
            <option value="JUNIOR" ${currentRole === 'JUNIOR' ? 'selected' : ''}>Junior (En Onboarding)</option>
            <option value="TUTOR" ${currentRole === 'TUTOR' ? 'selected' : ''}>Tutor (Junior Habilitado)</option>
            <option value="SENIOR" ${currentRole === 'SENIOR' ? 'selected' : ''}>Senior Consultant</option>
            <option value="MANAGER" ${currentRole === 'MANAGER' ? 'selected' : ''}>Manager / Admin</option>
          </select>
        </td>
        <td class="p-4">${tutorCell}</td>
        <td class="p-4">${estadoMalla}</td>
        <td class="p-4 text-right" style="white-space: nowrap;">
          <button onclick="app.handleUpdateMemberRolee('${user.id}')" class="btn btn-xs" style="background-color: rgba(219, 39, 119, 0.08); color: #db2777; border: 1px solid rgba(219, 39, 119, 0.18); font-weight: 600; display: inline-flex; align-items: center; gap: 4px; transition: all 0.2s ease;" onmouseover="this.style.backgroundColor='rgba(219, 39, 119, 0.15)'" onmouseout="this.style.backgroundColor='rgba(219, 39, 119, 0.08)'">
            <i class="ti ti-refresh" style="font-size: 0.85rem;"></i> Actualizar
          </button>
          ${deleteBtnHtml}
        </td>
      `;
      container.appendChild(row);
    });
  },

  handleUpdateMemberRolee(userId) {
    if (!this.state.activeUser || this.state.activeUser.role !== 'admin') {
      this.showForbiddenError("Error 403: No tienes permisos para modificar roles.");
      return;
    }
    const selectElement = document.getElementById(`role-select-${userId}`);
    if (!selectElement) return;
    const nuevoRole = selectElement.value;

    const user = this.state.db.users.find(u => u.id === userId);
    if (user) {
      const oldRole = user.rol || (user.role === 'admin' ? 'MANAGER' : user.role === 'tutor' ? 'TUTOR' : user.role === 'senior' ? 'SENIOR' : 'JUNIOR');
      user.rol = nuevoRole;
      
      // Cascade update to legacy .role property
      if (nuevoRole === 'MANAGER') user.role = 'admin';
      else if (nuevoRole === 'SENIOR') user.role = 'senior';
      else if (nuevoRole === 'TUTOR') user.role = 'tutor';
      else if (nuevoRole === 'JUNIOR') user.role = 'consultant';

      // Update tutor mapping if selector exists
      const tutorSelect = document.getElementById(`tutor-select-${userId}`);
      if (tutorSelect) {
        const nuevoTutorId = tutorSelect.value;
        if (nuevoTutorId) {
          this.state.db.tutor_junior_mapping[userId] = nuevoTutorId;
        } else {
          delete this.state.db.tutor_junior_mapping[userId];
        }
      }

      // Business Rule: Initialize progress mapping if user is updated to JUNIOR and didn't have it
      if (nuevoRole === 'JUNIOR' && oldRole !== 'JUNIOR') {
        user.current_week = 1;
        user.semana_actual = 1;
        user.avg_score = 0;
        user.status = "on_track";
        
        if (!this.state.db.consultant_progress[userId]) {
          const progress = {
            completed_weeks: [],
            checklist_states: {},
            test_scores: {},
            test_attempts: {},
            test_times: {},
            deliverables: {},
            comments: {}
          };
          this.state.db.week_templates.forEach(wt => {
            progress.checklist_states[wt.week_number] = {};
            wt.checklist_items.forEach((_, idx) => {
              progress.checklist_states[wt.week_number][idx] = false;
            });
          });
          this.state.db.consultant_progress[userId] = progress;
        }
        if (!this.state.db.tutor_junior_mapping[userId]) {
          this.state.db.tutor_junior_mapping[userId] = "USR-BENJAMIN"; // Benjamin Cerda
        }
        if (!this.state.db.cert_checklists[userId]) {
          this.state.db.cert_checklists[userId] = { 1: false, 2: false, 3: false, 4: false };
        }
      } else if (nuevoRole !== 'JUNIOR' && oldRole === 'JUNIOR') {
        // Business Rule: Transition from Junior to another role (e.g. Tutor)
        // Remove or mark onboarding progress variables as completed/clean
        delete user.semana_actual;
        delete user.current_week;
        delete user.avg_score;
        delete user.status;
        delete this.state.db.tutor_junior_mapping[userId];
      }

      this.saveDatabase();
      this.showToast(`Data for ${user.nombre || user.name} updated successfully.`);
      this.renderTeamTable();
      this.renderAdminView();
    }
  },

  handleDeleteMember(userId) {
    if (!this.state.activeUser || this.state.activeUser.role !== 'admin') {
      this.showForbiddenError("Error 403: No tienes permisos para eliminar miembros del equipo.");
      return;
    }

    if (userId === this.state.activeUser.id) {
      this.showToast("No puedes eliminarte a ti mismo del equipo.", "danger");
      return;
    }

    const user = this.state.db.users.find(u => u.id === userId);
    if (!user) return;

    const roleName = user.rol || (user.role === 'admin' ? 'MANAGER' : user.role === 'tutor' ? 'TUTOR' : user.role === 'senior' ? 'SENIOR' : 'JUNIOR');
    const confirmMessage = `¿Estás seguro de que deseas eliminar permanentemente a ${user.nombre || user.name} (${roleName})?\n\nEsta acción borrará todo su historial, progreso y asignaciones de manera irreversible.`;
    
    if (!confirm(confirmMessage)) {
      return;
    }

    // 1. Remove user record
    this.state.db.users = this.state.db.users.filter(u => u.id !== userId);

    // 2. Cascade delete from consultant progress mappings
    if (this.state.db.consultant_progress) {
      delete this.state.db.consultant_progress[userId];
    }

    // 3. Cascade delete from tutor mapping
    if (this.state.db.tutor_junior_mapping) {
      delete this.state.db.tutor_junior_mapping[userId];
      // Also remove any mappings where this user was a tutor
      for (const jId in this.state.db.tutor_junior_mapping) {
        if (this.state.db.tutor_junior_mapping[jId] === userId) {
          delete this.state.db.tutor_junior_mapping[jId];
        }
      }
    }

    // 4. Cascade delete from cert checklists
    if (this.state.db.cert_checklists) {
      delete this.state.db.cert_checklists[userId];
    }

    // 5. Cascade delete from evaluations history
    if (this.state.db.historial_evaluaciones) {
      this.state.db.historial_evaluaciones = this.state.db.historial_evaluaciones.filter(
        h => h.usuario_id !== userId
      );
    }

    // 6. Persist to storage and server
    this.saveDatabase();

    // 7. Feedback & UI Update
    this.showToast(`El miembro ${user.nombre || user.name} ha sido eliminado correctamente.`);
    this.renderTeamTable();
    this.renderAdminView();
  },

  renderTestCorrectionMode(semanaNumero) {
    const screen = document.getElementById('quiz-engine-screen');
    if (!screen) return;

    const userId = this.state.activeUser.id;
    const attempt = (this.state.db.historial_evaluaciones || []).find(
      h => h.usuario_id === userId && h.semana_malla === semanaNumero
    );

    if (!attempt) {
      this.renderPantallaBloqueo("⛔ INSTANCE LOCKED: ATTEMPT EXHAUSTED", "You have completed the maximum limit of 1 attempt allowed for this onboarding week.");
      return;
    }

    let quizPool = this.state.db.questions[semanaNumero] || this.state.db.questions[String(semanaNumero)] || [];
    if (quizPool.length === 0 && semanaNumero === 1) {
      quizPool = bancoPreguntasSemana1.map((item) => ({
        question: item.q,
        options: item.opts.map(o => o.replace(/^[A-D]\)\s*/, '')),
        correct: item.ans
      }));
    }

    const letras = ['A', 'B', 'C', 'D'];
    
    let html = `
      <div class="animate-fadeIn" style="display: flex; flex-direction: column; gap: 16px; font-family: var(--font-primary);">
        <div style="display: flex; justify-content: space-between; font-size: 0.7rem; color: var(--neutral-muted); font-weight: 700; border-bottom: 1px solid var(--neutral-border); padding-bottom: 8px; width: 100%;">
          <span>REVIEW VIEW: WEEK ${semanaNumero} EVALUATION</span>
          <span style="color: var(--primary); font-weight: bold;">SCORE: ${attempt.puntaje_obtenido}%</span>
        </div>
        
        <div class="eval-detail-viewer-content" style="max-height: 450px;">
    `;

    quizPool.forEach((q, idx) => {
      const qKey = `P${idx + 1}`;
      const markedAnsLetter = attempt.respuestas_usuario[qKey] ? attempt.respuestas_usuario[qKey].marcada : null;
      const correctAnsLetter = attempt.respuestas_usuario[qKey] ? attempt.respuestas_usuario[qKey].correcta : letras[q.correct];
      
      const markedIdx = letras.indexOf(markedAnsLetter);
      const correctIdx = letras.indexOf(correctAnsLetter);

      let optionsHtml = '';
      q.options.forEach((opt, oIdx) => {
        let rowClass = 'neutral-row';
        let badgeHtml = '';

        if (oIdx === markedIdx) {
          if (markedIdx === correctIdx) {
            rowClass = 'correct-selected';
            badgeHtml = `<span class="badge-green eval-badge-status"><i class="ti ti-circle-check"></i> Tu respuesta (Correcta)</span>`;
          } else {
            rowClass = 'incorrect-selected';
            badgeHtml = `<span class="badge-red eval-badge-status"><i class="ti ti-circle-x"></i> Tu respuesta (Incorrecta)</span>`;
          }
        } else if (oIdx === correctIdx) {
          rowClass = 'correct-option';
          badgeHtml = `<span class="badge-green eval-badge-status" style="opacity: 0.8;"><i class="ti ti-check"></i> Respuesta Correcta</span>`;
        }

        optionsHtml += `
          <div class="eval-audit-option-row ${rowClass}">
            <span>[${letras[oIdx]}] ${opt}</span>
            ${badgeHtml}
          </div>
        `;
      });

      html += `
        <div class="eval-audit-question-card">
          <p class="eval-audit-question-title">${idx + 1}. ${q.question}</p>
          <div class="eval-audit-options-list">
            ${optionsHtml}
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    screen.innerHTML = html;
  },

  renderEvaluationsAttemptsList() {
    const listContainer = document.getElementById('evaluations-attempts-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    const viewer = document.getElementById('evaluation-detail-viewer');
    if (viewer) {
      viewer.innerHTML = '<div class="eval-detail-viewer-empty">Selecciona un intento del panel izquierdo para auditar las respuestas...</div>';
      viewer.className = 'eval-detail-viewer-empty';
    }

    let intentos = this.state.db.historial_evaluaciones || [];
    if (this.state.inspectedUser) {
      intentos = intentos.filter(h => h.usuario_id === this.state.inspectedUser.id);
    }

    if (intentos.length === 0) {
      listContainer.innerHTML = '<div style="color: var(--neutral-muted); font-size: 0.8rem; text-align: center; padding: 20px;">No hay evaluaciones rendidas aún.</div>';
      return;
    }

    const sortedIntentos = [...intentos].reverse();

    sortedIntentos.forEach(intento => {
      const usuario = this.state.db.users.find(u => u.id === intento.usuario_id);
      const card = document.createElement('div');
      card.className = "eval-attempt-card";
      card.id = `attempt-card-${intento.evaluacion_id}`;
      card.onclick = () => this.viewEvaluationDetail(intento.evaluacion_id);
      
      const passingScore = 70;
      const scoreColor = intento.puntaje_obtenido >= passingScore ? 'var(--success-text)' : 'var(--danger-text)';

      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
          <p style="font-weight: 700; color: var(--neutral-dark); font-size: 0.8rem; margin: 0;">${usuario ? usuario.name : 'Consultant'}</p>
          <span style="font-size: 0.65rem; font-weight: 700; padding: 2px 6px; border-radius: 4px; background: var(--neutral-light); border: 1px solid var(--neutral-border); color: var(--neutral-muted);">Week ${intento.semana_malla}</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.7rem; color: var(--neutral-muted);">
          <span>Taken: ${intento.fecha_rendicion}</span>
          <span style="font-weight: 700; color: ${scoreColor}">Score: ${intento.puntaje_obtenido}%</span>
        </div>
      `;
      listContainer.appendChild(card);
    });
  },

  viewEvaluationDetail(evaluacionId) {
    document.querySelectorAll('.eval-attempt-card').forEach(c => c.classList.remove('active'));
    const activeCard = document.getElementById(`attempt-card-${evaluacionId}`);
    if (activeCard) activeCard.classList.add('active');

    const viewer = document.getElementById('evaluation-detail-viewer');
    if (!viewer) return;

    const intento = (this.state.db.historial_evaluaciones || []).find(h => h.evaluacion_id === evaluacionId);
    if (!intento) {
      viewer.innerHTML = '<div class="eval-detail-viewer-empty">Error: Attempt not found.</div>';
      viewer.className = 'eval-detail-viewer-empty';
      return;
    }

    let quizPool = this.state.db.questions[intento.semana_malla] || this.state.db.questions[String(intento.semana_malla)] || [];
    if (quizPool.length === 0 && intento.semana_malla === 1) {
      quizPool = bancoPreguntasSemana1.map((item) => ({
        question: item.q,
        options: item.opts.map(o => o.replace(/^[A-D]\)\s*/, '')),
        correct: item.ans
      }));
    }

    const letras = ['A', 'B', 'C', 'D'];

    // Calculate correct and incorrect counts for the filters
    let correctCount = 0;
    let incorrectCount = 0;
    quizPool.forEach((q, idx) => {
      const qKey = `P${idx + 1}`;
      const markedAnsLetter = intento.respuestas_usuario[qKey] ? intento.respuestas_usuario[qKey].marcada : null;
      const correctAnsLetter = intento.respuestas_usuario[qKey] ? intento.respuestas_usuario[qKey].correcta : letras[q.correct];
      const markedIdx = letras.indexOf(markedAnsLetter);
      const correctIdx = letras.indexOf(correctAnsLetter);
      if (markedIdx === correctIdx) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    });

    viewer.innerHTML = '';
    viewer.className = '';

    // Create and append the dynamic filter bar
    const filterBar = document.createElement('div');
    filterBar.className = 'eval-detail-filter-bar';
    filterBar.style.display = 'flex';
    filterBar.style.gap = '8px';
    filterBar.style.marginBottom = '15px';
    filterBar.style.paddingBottom = '10px';
    filterBar.style.borderBottom = '1px solid var(--neutral-border)';
    filterBar.innerHTML = `
      <button class="btn btn-outline active btn-xs eval-filter-btn" data-filter="all" onclick="app.filterAuditQuestions(this, 'all')" style="cursor: pointer;">
        All (${quizPool.length})
      </button>
      <button class="btn btn-outline btn-xs eval-filter-btn" data-filter="correct" onclick="app.filterAuditQuestions(this, 'correct')" style="cursor: pointer;">
        <span style="color: var(--success); margin-right: 4px;">●</span> Correct (${correctCount})
      </button>
      <button class="btn btn-outline btn-xs eval-filter-btn" data-filter="incorrect" onclick="app.filterAuditQuestions(this, 'incorrect')" style="cursor: pointer;">
        <span style="color: var(--danger); margin-right: 4px;">●</span> Incorrect (${incorrectCount})
      </button>
    `;
    viewer.appendChild(filterBar);

    const viewerContent = document.createElement('div');
    viewerContent.className = 'eval-detail-viewer-content';

    quizPool.forEach((q, idx) => {
      const qKey = `P${idx + 1}`;
      const markedAnsLetter = intento.respuestas_usuario[qKey] ? intento.respuestas_usuario[qKey].marcada : null;
      const correctAnsLetter = intento.respuestas_usuario[qKey] ? intento.respuestas_usuario[qKey].correcta : letras[q.correct];
      
      const markedIdx = letras.indexOf(markedAnsLetter);
      const correctIdx = letras.indexOf(correctAnsLetter);
      const isCorrect = (markedIdx === correctIdx);

      let optionsHtml = '';
      q.options.forEach((opt, oIdx) => {
        let rowClass = 'neutral-row';
        let badgeHtml = '';

        if (oIdx === markedIdx) {
          if (markedIdx === correctIdx) {
            rowClass = 'correct-selected';
            badgeHtml = `<span class="badge-green eval-badge-status"><i class="ti ti-circle-check"></i> Marked Correct</span>`;
          } else {
            rowClass = 'incorrect-selected';
            badgeHtml = `<span class="badge-red eval-badge-status"><i class="ti ti-circle-x"></i> Marked Incorrect</span>`;
          }
        } else if (oIdx === correctIdx) {
          rowClass = 'correct-option';
          badgeHtml = `<span class="badge-green eval-badge-status" style="opacity: 0.8;">(Correct Answer)</span>`;
        }

        optionsHtml += `
          <div class="eval-audit-option-row ${rowClass}">
            <span>[${letras[oIdx]}] ${opt}</span>
            ${badgeHtml}
          </div>
        `;
      });

      viewerContent.innerHTML += `
        <div class="eval-audit-question-card ${isCorrect ? 'is-correct-card' : 'is-incorrect-card'}" style="display: block; margin-bottom: 15px;">
          <p class="eval-audit-question-title">Question ${idx + 1}: ${q.question}</p>
          <div class="eval-audit-options-list">
            ${optionsHtml}
          </div>
        </div>
      `;
    });

    viewer.appendChild(viewerContent);
  },

  filterAuditQuestions(btn, filterType) {
    const filterBar = btn.closest('.eval-detail-filter-bar');
    if (filterBar) {
      filterBar.querySelectorAll('.eval-filter-btn').forEach(b => b.classList.remove('active'));
    }
    btn.classList.add('active');

    const viewer = document.getElementById('evaluation-detail-viewer');
    if (!viewer) return;

    const cards = viewer.querySelectorAll('.eval-audit-question-card');
    cards.forEach(card => {
      if (filterType === 'all') {
        card.style.display = 'block';
      } else if (filterType === 'correct') {
        if (card.classList.contains('is-correct-card')) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      } else if (filterType === 'incorrect') {
        if (card.classList.contains('is-incorrect-card')) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      }
    });
  },

  renderInspectedHours() {
    if (!this.state.inspectedUser) return;
    const userId = this.state.inspectedUser.id;

    // Filter executed calendar events for the inspected junior (completed, ejecutado, ejecutada)
    const juniorEvents = (this.state.db.calendar_events || []).filter(
      e => e.junior_id === userId && (e.status === 'ejecutado' || e.status === 'ejecutada' || e.status === 'completed')
    );

    // Calculate total hours and total sessions
    let totalMinutes = 0;
    juniorEvents.forEach(e => {
      totalMinutes += (e.executed_minutes || 0);
    });
    const totalHoursStr = (totalMinutes / 60).toFixed(1);
    const totalSessions = juniorEvents.length;

    // Update KPI UI elements
    const totalKpiEl = document.getElementById('inspect-hours-total-kpi');
    const sessionsKpiEl = document.getElementById('inspect-hours-sessions-kpi');
    if (totalKpiEl) totalKpiEl.innerText = `${totalHoursStr} hrs`;
    if (sessionsKpiEl) sessionsKpiEl.innerText = totalSessions;

    // 1. Calculate hours by session type
    const types = ['tutoring', 'masterclass', 'extra_support', 'coaching'];
    const typeLabels = {
      'tutoring': 'Tutoring',
      'masterclass': 'Masterclass',
      'extra_support': 'Support',
      'support': 'Support',
      'coaching': 'Coaching'
    };
    const hoursByType = { tutoring: 0, masterclass: 0, extra_support: 0, coaching: 0 };
    juniorEvents.forEach(e => {
      let typeLower = (e.type || '').toLowerCase();
      if (typeLower === 'support') typeLower = 'extra_support';
      if (typeLower === 'extra_support' || typeLower === 'tutoring' || typeLower === 'masterclass' || typeLower === 'coaching') {
        const key = typeLower === 'support' ? 'extra_support' : typeLower;
        hoursByType[key] += (e.executed_minutes || 0) / 60;
      }
    });

    const maxTypeVal = Math.max(...Object.values(hoursByType), 1);
    const typeListContainer = document.getElementById('inspect-hours-type-list');
    if (typeListContainer) {
      typeListContainer.innerHTML = '';
      types.forEach(t => {
        const hrs = hoursByType[t];
        const percent = (hrs / maxTypeVal) * 100;
        let barColor = 'var(--primary)';
        if (t === 'extra_support') barColor = 'var(--warning)';
        if (t === 'coaching') barColor = '#8b5cf6';
        if (t === 'tutoring') barColor = 'var(--success)';

        const item = document.createElement('div');
        item.innerHTML = `
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 4px;">
            <span style="font-weight: 600; color: var(--neutral-dark);">${typeLabels[t]}</span>
            <span style="color: var(--neutral-muted); font-weight: 700;">${hrs.toFixed(1)} hrs</span>
          </div>
          <div style="background: var(--neutral-light); height: 8px; border-radius: 4px; overflow: hidden; width: 100%;">
            <div style="background: ${barColor}; width: ${percent}%; height: 100%; border-radius: 4px; transition: width 0.3s ease;"></div>
          </div>
        `;
        typeListContainer.appendChild(item);
      });
    }

    // 2. Calculate hours consumed per expert
    const hoursByExpert = {};
    juniorEvents.forEach(e => {
      if (e.contabilizar_ids === false || e.expert_id === 'USR-MUREX-LEARNING') {
        return;
      }
      const expIds = e.expertos_asistentes_ids || [e.expert_id];
      expIds.forEach(expId => {
        const expertObj = this.state.db.users.find(u => u.id === expId);
        const name = expertObj ? expertObj.name : 'N/A';
        hoursByExpert[name] = (hoursByExpert[name] || 0) + (e.executed_minutes || 0) / 60;
      });
    });

    const expertListContainer = document.getElementById('inspect-hours-expert-list');
    if (expertListContainer) {
      expertListContainer.innerHTML = '';
      const sortedExperts = Object.entries(hoursByExpert).sort((a, b) => b[1] - a[1]);
      if (sortedExperts.length === 0) {
        expertListContainer.innerHTML = '<div style="color: var(--neutral-muted); font-size: 0.75rem; text-align: center; padding: 15px;">No hours registered with experts.</div>';
      } else {
        const maxExpVal = Math.max(...sortedExperts.map(e => e[1]), 1);
        sortedExperts.forEach(([name, hrs]) => {
          const percent = (hrs / maxExpVal) * 100;
          const expertObj = this.state.db.users.find(u => u.name === name);
          const roleLabel = expertObj ? (expertObj.role === 'admin' ? 'Manager' : expertObj.role === 'senior' ? 'Senior' : 'Tutor') : 'Tutor';
          const roleBadgeColor = roleLabel === 'Manager' ? 'var(--primary-light)' : roleLabel === 'Senior' ? 'rgba(139, 92, 246, 0.1)' : 'rgba(22, 163, 74, 0.1)';
          const roleTextColor = roleLabel === 'Manager' ? 'var(--primary-text)' : roleLabel === 'Senior' ? '#7c3aed' : '#16a34a';
          const initials = expertObj?.avatar_initials || name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

          const item = document.createElement('div');
          item.style.display = 'flex';
          item.style.alignItems = 'center';
          item.style.gap = '10px';
          item.style.padding = '8px 0';
          item.style.borderBottom = '1px dashed var(--neutral-border)';
          item.innerHTML = `
            <div style="width: 32px; height: 32px; border-radius: 50%; background-color: var(--primary-light); color: var(--primary-text); font-weight: 700; font-size: 0.8rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              ${initials}
            </div>
            <div style="flex-grow: 1; min-width: 0;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                <span style="font-weight: 600; color: var(--neutral-dark); font-size: 0.78rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 150px;">${name}</span>
                <span style="color: var(--neutral-dark); font-weight: 700; font-size: 0.78rem;">${hrs.toFixed(1)} hrs</span>
              </div>
              <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
                <span class="badge" style="font-size: 0.6rem; padding: 1px 4px; background-color: ${roleBadgeColor}; color: ${roleTextColor}; font-weight: 700;">${roleLabel}</span>
                <div style="background: var(--neutral-light); height: 4px; border-radius: 2px; overflow: hidden; flex-grow: 1;">
                  <div style="background: var(--primary); width: ${percent}%; height: 100%; border-radius: 2px; transition: width 0.3s ease;"></div>
                </div>
              </div>
            </div>
          `;
          expertListContainer.appendChild(item);
        });
      }
    }

    // 3. Render sessions detailed log table
    const tbody = document.getElementById('inspect-hours-sessions-tbody');
    const expertFilterSelect = document.getElementById('inspect-sessions-expert-filter');
    if (expertFilterSelect) {
      const prevVal = expertFilterSelect.value || 'all';
      expertFilterSelect.innerHTML = '<option value="all">Todos los expertos</option>';
      
      const allExpertIds = [];
      juniorEvents.forEach(e => {
        const expIds = e.expertos_asistentes_ids || [e.expert_id];
        expIds.forEach(id => {
          if (id && id !== 'USR-MUREX-LEARNING') allExpertIds.push(id);
        });
      });
      const uniqueExpertIds = [...new Set(allExpertIds)];
      
      uniqueExpertIds.forEach(expId => {
        const expertObj = this.state.db.users.find(u => u.id === expId);
        if (expertObj) {
          const opt = document.createElement('option');
          opt.value = expId;
          opt.textContent = expertObj.name;
          expertFilterSelect.appendChild(opt);
        }
      });
      if (uniqueExpertIds.includes(prevVal)) {
        expertFilterSelect.value = prevVal;
      } else {
        expertFilterSelect.value = 'all';
      }
    }

    if (tbody) {
      tbody.innerHTML = '';
      const selectedExpertId = expertFilterSelect ? expertFilterSelect.value : 'all';
      const filteredEvents = selectedExpertId === 'all' 
        ? juniorEvents 
        : juniorEvents.filter(e => e.expert_id === selectedExpertId || (e.expertos_asistentes_ids && e.expertos_asistentes_ids.includes(selectedExpertId)));

      if (filteredEvents.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:15px; color:var(--neutral-muted);">No records found for the selected expert.</td></tr>`;
      } else {
        const sortedEvents = [...filteredEvents].sort((a, b) => new Date(b.block_day) - new Date(a.block_day));
        sortedEvents.forEach(e => {
          let expertNameStr = 'N/A';
          if (e.expertos_asistentes_ids && e.expertos_asistentes_ids.length > 0) {
            expertNameStr = e.expertos_asistentes_ids.map(id => this.state.db.users.find(u => u.id === id)?.name || id).join(', ');
          } else {
            const expertObj = this.state.db.users.find(u => u.id === e.expert_id);
            expertNameStr = expertObj ? expertObj.name : 'N/A';
          }
          const formattedDate = new Date(e.block_day + "T00:00:00").toLocaleDateString('en-US', { day: '2-digit', month: '2-digit' });
          
          let typeBadgeStyle = 'background-color:rgba(22, 163, 74, 0.1); color:#16a34a; font-weight:700;'; // tutoring
          let shortType = 'Tutoring';
          const typeLower = (e.type || '').toLowerCase();
          
          if (typeLower === 'masterclass') {
            typeBadgeStyle = 'background-color:rgba(147, 51, 234, 0.1); color:#9333ea; font-weight:700;';
            shortType = 'Masterclass';
          } else if (typeLower === 'extra_support' || typeLower === 'support') {
            typeBadgeStyle = 'background-color:rgba(239, 159, 39, 0.1); color:#b26500; font-weight:700;';
            shortType = 'Support';
          } else if (typeLower === 'coaching') {
            typeBadgeStyle = 'background-color:rgba(139, 92, 246, 0.1); color:#7c3aed; font-weight:700;';
            shortType = 'Coaching';
          } else if (e.type === 'MUREX_LEARNING') {
            typeBadgeStyle = 'background-color:rgba(71, 85, 105, 0.1); color:#475569; font-weight:700;';
            shortType = 'Murex Learning';
          } else if (e.type === 'FEEDBACK_ALINEAMIENTO') {
            typeBadgeStyle = 'background-color:rgba(13, 148, 136, 0.1); color:#0d9488; font-weight:700;';
            shortType = 'Feedback';
          }

          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>
              <div style="font-weight:600; color:var(--neutral-dark);">${formattedDate}</div>
              <div style="font-size:0.65rem; color:var(--neutral-muted); font-weight:500; white-space:nowrap; margin-top:2px;">${e.time_start || '00:00'} - ${e.time_end || '00:00'}</div>
            </td>
            <td>
              <div style="font-weight:600;">${e.title || 'Session'}</div>
              <span class="badge" style="font-size:0.65rem; padding:1px 4px; ${typeBadgeStyle}">Week ${e.week_number} - ${shortType}</span>
            </td>
            <td>${expertNameStr}</td>
            <td><strong>${e.executed_minutes}m</strong></td>
          </tr>
        `;
          tbody.appendChild(tr);
        });
      }
    }

    // Render CSS bar chart: Horas por Experto (Consumo)
    const expertBarsContainer = document.getElementById('inspect-chart-expert-bars');
    if (expertBarsContainer) {
      expertBarsContainer.innerHTML = '';
      const sortedForChart = Object.entries(hoursByExpert).sort((a, b) => b[1] - a[1]);
      if (sortedForChart.length === 0) {
        expertBarsContainer.innerHTML = '<div style="color:var(--neutral-muted);font-size:0.75rem;text-align:center;padding:20px;">No data</div>';
      } else {
        const maxVal = Math.max(...sortedForChart.map(e => e[1]), 1);
        sortedForChart.forEach(([name, hrs]) => {
          const pct = (hrs / maxVal) * 100;
          const shortName = name.split(' ').slice(0, 2).join(' ');
          expertBarsContainer.innerHTML += `
            <div>
              <div style="display:flex;justify-content:space-between;font-size:0.72rem;margin-bottom:3px;">
                <span style="font-weight:600;color:var(--neutral-dark);">${shortName}</span>
                <span style="color:var(--neutral-muted);font-weight:700;">${hrs.toFixed(1)} hrs</span>
              </div>
              <div style="background:var(--neutral-light);height:10px;border-radius:5px;overflow:hidden;">
                <div style="background:#A6192E;width:${pct}%;height:100%;border-radius:5px;transition:width 0.3s ease;"></div>
              </div>
            </div>`;
        });
      }
    }

    // Render CSS bar chart: Desviación Planned vs Real
    const desvBarsContainer = document.getElementById('inspect-chart-deviation-bars');
    if (desvBarsContainer) {
      desvBarsContainer.innerHTML = '';
      const plannedHours = { tutoring: 0, masterclass: 0, extra_support: 0, coaching: 0 };
      const realHours    = { tutoring: 0, masterclass: 0, extra_support: 0, coaching: 0 };
      juniorEvents.forEach(e => {
        let t = (e.type || '').toLowerCase();
        if (t === 'support') t = 'extra_support';
        if (plannedHours[t] !== undefined) {
          plannedHours[t] += (e.planned_minutes || 60) / 60;
          realHours[t]    += (e.executed_minutes || 0) / 60;
        }
      });
      const devLabels = [['Tutoring','tutoring'],['Masterclass','masterclass'],['Support','extra_support'],['Coaching','coaching']];
      const maxDev = Math.max(...devLabels.map(([,k]) => plannedHours[k]), 1);
      desvBarsContainer.innerHTML += `<div style="display:flex;gap:12px;font-size:0.68rem;margin-bottom:8px;">
        <span style="display:flex;align-items:center;gap:4px;"><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:#64748b;"></span>Planned</span>
        <span style="display:flex;align-items:center;gap:4px;"><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:#A6192E;"></span>Real</span>
      </div>`;
      devLabels.forEach(([label, key]) => {
        const pPct = (plannedHours[key] / maxDev) * 100;
        const rPct = (realHours[key] / maxDev) * 100;
        desvBarsContainer.innerHTML += `
          <div style="margin-bottom:4px;">
            <div style="font-size:0.72rem;font-weight:600;color:var(--neutral-dark);margin-bottom:3px;">${label}</div>
            <div style="display:flex;flex-direction:column;gap:2px;">
              <div style="background:var(--neutral-light);height:8px;border-radius:4px;overflow:hidden;">
                <div style="background:#64748b;width:${pPct}%;height:100%;border-radius:4px;"></div>
              </div>
              <div style="background:var(--neutral-light);height:8px;border-radius:4px;overflow:hidden;">
                <div style="background:#A6192E;width:${rPct}%;height:100%;border-radius:4px;"></div>
              </div>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:0.65rem;color:var(--neutral-muted);margin-top:1px;">
              <span>${plannedHours[key].toFixed(1)}h plan</span>
              <span>${realHours[key].toFixed(1)}h real</span>
            </div>
          </div>`;
      });
    }

    // Call the new function to render the Audit Log Bitacora
    this.renderInspectedAuditBitacora(userId);
  },

  filterInspectedSessionsByExpert() {
    const junior = this.state.inspectedUser;
    if (junior) {
      this.renderInspectedHours(junior.id);
    }
  },

  renderInspectedAuditBitacora(userId) {
    const container = document.getElementById('inspect-audit-bitacora');
    if (!container) return;
    
    container.innerHTML = '';
    
    const junior = this.state.inspectedUser;
    if (!junior) return;

    // Filter events for this junior (except rejected and non-billable corporate learning)
    const events = (this.state.db.calendar_events || []).filter(
      e => e.junior_id === userId && e.status !== 'rechazado' && e.status !== 'rechazada' && e.contabilizar_ids !== false
    );
    
    // Group events by expert_id using e.expertos_asistentes_ids if exists, else e.expert_id
    const expertMap = {};
    events.forEach(e => {
      const expIds = e.expertos_asistentes_ids || [e.expert_id];
      expIds.forEach(id => {
        if (!expertMap[id]) {
          expertMap[id] = [];
        }
        expertMap[id].push(e);
      });
    });
    
    // Build rows for the table
    let rowsHtml = '';
    if (Object.keys(expertMap).length === 0) {
      rowsHtml = `
        <tr>
          <td colspan="4" style="text-align:center; padding:15px; color:var(--neutral-muted);">No interaction records.</td>
        </tr>
      `;
    } else {
      Object.keys(expertMap).forEach(expertId => {
        const expertEvents = expertMap[expertId];
        const expertObj = this.state.db.users.find(u => u.id === expertId);
        const expertName = expertObj ? expertObj.name : 'Expert N/A';
        
        let roleLabel = 'Tutor';
        if (expertObj) {
          if (expertObj.role === 'admin') roleLabel = 'Manager';
          else if (expertObj.role === 'senior') roleLabel = 'Senior';
          else if (expertObj.role === 'tutor') {
            const mappingTutorId = this.state.db.tutor_junior_mapping[junior.id];
            roleLabel = expertObj.id === mappingTutorId ? 'Tutor in Charge' : 'Tutor';
          }
        }
        
        // Group by type to get friendly interaction string
        const typeCounts = {};
        expertEvents.forEach(e => {
          let friendlyType = 'Support';
          const typeLower = (e.type || '').toLowerCase();
          if (typeLower === 'tutoring') friendlyType = 'Tutoring';
          else if (typeLower === 'masterclass') friendlyType = 'Masterclass';
          else if (typeLower === 'coaching') friendlyType = 'Coaching';
          else if (typeLower === 'extra_support' || typeLower === 'support') friendlyType = 'Extra Support';
          typeCounts[friendlyType] = (typeCounts[friendlyType] || 0) + 1;
        });
        
        const typeList = [];
        if (typeCounts['Tutoring']) typeList.push(`Tutoring (${typeCounts['Tutoring']})`);
        if (typeCounts['Masterclass']) typeList.push(`Masterclass (${typeCounts['Masterclass']})`);
        if (typeCounts['Coaching']) typeList.push(`Coaching (${typeCounts['Coaching']})`);
        if (typeCounts['Extra Support']) typeList.push(`Extra Support (${typeCounts['Extra Support']})`);
        const interDetails = typeList.join(' + ') || 'None';
        
        const sessionsCount = expertEvents.length;
        const expertTotalHours = expertEvents.reduce((sum, e) => {
          const mins = e.executed_minutes || e.planned_minutes || 60;
          return sum + (mins / 60);
        }, 0);
        
        rowsHtml += `
          <tr>
            <td style="font-weight: 600;">${expertName} (${roleLabel})</td>
            <td>${interDetails}</td>
            <td style="text-align: center; font-weight: 600;">${sessionsCount}</td>
            <td style="text-align: right; font-weight: 700; color: ${expertTotalHours >= 4 ? 'var(--primary)' : 'var(--neutral-dark)'};">
              ${expertTotalHours.toFixed(1)} Hrs
            </td>
          </tr>
        `;
      });
    }
    
    // Construct the audit log pane
    const card = document.createElement('div');
    card.className = 'card glass-card';
    card.style.marginTop = '20px';
    card.innerHTML = `
      <div class="card-header" style="padding: 10px 15px; display: flex; justify-content: space-between; align-items: center;">
        <h3 class="card-title" style="font-size: 0.8rem; margin: 0;">
          <i class="ti ti-shield-check" style="color: var(--primary);"></i> Interaction Audit Log
        </h3>
      </div>
      <div style="padding: 15px; font-size: 0.75rem;">
        <table class="audit-table" style="width: 100%;">
          <thead>
            <tr>
              <th>Expert Consultant</th>
              <th>Interaction Type</th>
              <th style="text-align: center;">Sesiones</th>
              <th style="text-align: right;">Tiempo Real</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;
    container.appendChild(card);
  },

  calculateTimesheetFromHours() {
    const hoursInput = document.getElementById('timesheet-custom-hours');
    const minutesInput = document.getElementById('timesheet-custom-minutes');
    const resultEl = document.getElementById('timesheet-custom-result');
    if (!hoursInput || !minutesInput || !resultEl) return;

    const hours = parseFloat(hoursInput.value) || 0;
    
    // Sync minutes field
    minutesInput.value = Math.round(hours * 60);

    // Calculate timesheet value (8 hours = 1.0)
    const result = parseFloat((hours / 8).toFixed(2));
    resultEl.innerText = result;
  },

  calculateTimesheetFromMinutes() {
    const hoursInput = document.getElementById('timesheet-custom-hours');
    const minutesInput = document.getElementById('timesheet-custom-minutes');
    const resultEl = document.getElementById('timesheet-custom-result');
    if (!hoursInput || !minutesInput || !resultEl) return;

    const minutes = parseFloat(minutesInput.value) || 0;
    
    // Sync hours field
    hoursInput.value = parseFloat((minutes / 60).toFixed(2));

    // Calculate timesheet value (480 minutes = 1.0)
    const result = parseFloat((minutes / 480).toFixed(2));
    resultEl.innerText = result;
  }
};

// Initialize Application Engine on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});

// Bind app globally to avoid scoping issues with inline HTML event handlers
window.app = app;
