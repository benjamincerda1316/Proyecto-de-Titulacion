/**
 * MXBoard — Onboarding Tracker
 * Core Application Engine
 */

// Global App Module
const HOY_PRESENTE = new Date('2026-05-25T00:00:00');

const bancoPreguntasSemana1 = [
    {
        "q": "¿Cuál es la función principal del Front Office?",
        "opts": [
            "A) Registrar asientos contables",
            "B) Vender productos y generar negocios",
            "C) Liquidar operaciones",
            "D) Auditar procesos"
        ],
        "ans": 1
    },
    {
        "q": "¿Quién normalmente interactúa directamente con los clientes?",
        "opts": [
            "A) Auditoría Interna",
            "B) Back Office",
            "C) Front Office",
            "D) Compliance"
        ],
        "ans": 2
    },
    {
        "q": "¿Qué área valida los riesgos de las operaciones antes o después de su ejecución?",
        "opts": [
            "A) Front Office",
            "B) Recursos Humanos",
            "C) Tesorería",
            "D) Middle Office"
        ],
        "ans": 3
    },
    {
        "q": "¿Cuál es una función típica del Back Office?",
        "opts": [
            "A) Confirmar y liquidar operaciones",
            "B) Negociar swaps",
            "C) Gestionar inversiones",
            "D) Captar clientes"
        ],
        "ans": 0
    },
    {
        "q": "¿Qué ocurre si Front Office ejecuta una operación y Back Office no la liquida?",
        "opts": [
            "A) Aumenta la rentabilidad",
            "B) Existe riesgo operacional",
            "C) No pasa nada",
            "D) Mejora la liquidez"
        ],
        "ans": 1
    },
    {
        "q": "¿Cuál es el orden correcto?",
        "opts": [
            "A) Liquidación → Negociación → Confirmación",
            "B) Negociación → Confirmación → Liquidación",
            "C) Confirmación → Negociación → Contabilidad",
            "D) Contabilidad → Negociación → Confirmación"
        ],
        "ans": 1
    },
    {
        "q": "¿Qué significa \"Trade Date\"?",
        "opts": [
            "A) Fecha de pago",
            "B) Fecha contable",
            "C) Fecha de negociación",
            "D) Fecha de vencimiento"
        ],
        "ans": 2
    },
    {
        "q": "¿Qué significa \"Settlement Date\"?",
        "opts": [
            "A) Fecha de negociación",
            "B) Fecha de emisión",
            "C) Fecha de aprobación",
            "D) Fecha de liquidación"
        ],
        "ans": 3
    },
    {
        "q": "¿Quién suele generar el trade en un banco?",
        "opts": [
            "A) Auditoría",
            "B) Front Office",
            "C) Back Office",
            "D) Compliance"
        ],
        "ans": 1
    },
    {
        "q": "¿Qué área suele registrar la contabilidad derivada de una operación?",
        "opts": [
            "A) Front Office",
            "B) Comercial",
            "C) Finanzas/Contabilidad",
            "D) Marketing"
        ],
        "ans": 2
    },
    {
        "q": "Un activo es:",
        "opts": [
            "A) Una obligación",
            "B) Un gasto",
            "C) Una pérdida",
            "D) Algo que genera valor económico"
        ],
        "ans": 3
    },
    {
        "q": "Un depósito de un cliente representa para el banco:",
        "opts": [
            "A) Pasivo",
            "B) Patrimonio",
            "C) Ingreso",
            "D) Activo"
        ],
        "ans": 0
    },
    {
        "q": "Un préstamo otorgado por el banco es:",
        "opts": [
            "A) Patrimonio",
            "B) Pasivo",
            "C) Activo",
            "D) Gasto"
        ],
        "ans": 2
    },
    {
        "q": "¿Qué ecuación es correcta?",
        "opts": [
            "A) Activos + Pasivos = Patrimonio",
            "B) Activos = Pasivos + Patrimonio",
            "C) Patrimonio = Activos + Gastos",
            "D) Ingresos = Activos + Pasivos"
        ],
        "ans": 1
    },
    {
        "q": "Cuando aumenta un activo normalmente:",
        "opts": [
            "A) Se acredita",
            "B) Se debita",
            "C) Se elimina",
            "D) Se provisiona"
        ],
        "ans": 1
    },
    {
        "q": "La Tesorería se encarga principalmente de:",
        "opts": [
            "A) Gestionar liquidez y financiamiento",
            "B) Auditoría",
            "C) Marketing",
            "D) Contratar personal"
        ],
        "ans": 0
    },
    {
        "q": "¿Qué riesgo controla especialmente Tesorería?",
        "opts": [
            "A) Riesgo climático",
            "B) Riesgo reputacional",
            "C) Riesgo legal",
            "D) Riesgo de liquidez"
        ],
        "ans": 3
    },
    {
        "q": "Un banco con exceso de efectivo probablemente:",
        "opts": [
            "A) Aumentará pérdidas",
            "B) Cerrará operaciones",
            "C) Buscará invertirlo",
            "D) Hará auditorías"
        ],
        "ans": 2
    },
    {
        "q": "¿Qué es una posición de caja?",
        "opts": [
            "A) Capital social",
            "B) Flujo neto de efectivo disponible",
            "C) Patrimonio",
            "D) Utilidad retenida"
        ],
        "ans": 1
    },
    {
        "q": "¿Qué mercado se usa frecuentemente para obtener liquidez de corto plazo?",
        "opts": [
            "A) Mercado inmobiliario",
            "B) Mercado agrícola",
            "C) Mercado laboral",
            "D) Mercado interbancario"
        ],
        "ans": 3
    },
    {
        "q": "¿Qué es un bono?",
        "opts": [
            "A) Acción preferente",
            "B) Derivado",
            "C) Instrumento de deuda",
            "D) Divisa"
        ],
        "ans": 2
    },
    {
        "q": "Una acción representa:",
        "opts": [
            "A) Deuda",
            "B) Propiedad parcial de una empresa",
            "C) Derivado",
            "D) Préstamo"
        ],
        "ans": 1
    },
    {
        "q": "¿Qué es un depósito a plazo?",
        "opts": [
            "A) Bono perpetuo",
            "B) Acción",
            "C) Derivado",
            "D) Inversión con vencimiento definido"
        ],
        "ans": 3
    },
    {
        "q": "¿Qué instrumento paga intereses periódicos?",
        "opts": [
            "A) Futuro",
            "B) Forward",
            "C) Opción",
            "D) Bono"
        ],
        "ans": 3
    },
    {
        "q": "¿Qué mercado negocia monedas?",
        "opts": [
            "A) Equity",
            "B) FX",
            "C) Commodities",
            "D) Real Estate"
        ],
        "ans": 1
    },
    {
        "q": "¿Qué es un derivado?",
        "opts": [
            "A) Instrumento cuyo valor depende de otro activo",
            "B) Un depósito",
            "C) Una cuenta corriente",
            "D) Un préstamo"
        ],
        "ans": 0
    },
    {
        "q": "¿Qué es un Forward?",
        "opts": [
            "A) Un depósito",
            "B) Una acción",
            "C) Un bono",
            "D) Compra/venta futura pactada hoy"
        ],
        "ans": 3
    },
    {
        "q": "¿Qué es una opción?",
        "opts": [
            "A) Obligación de comprar",
            "B) Un depósito",
            "C) Un préstamo",
            "D) Derecho pero no obligación"
        ],
        "ans": 3
    },
    {
        "q": "En una Call Option el comprador espera que:",
        "opts": [
            "A) Baje el precio",
            "B) No cambie",
            "C) Suba el precio",
            "D) Quiebre la empresa"
        ],
        "ans": 2
    },
    {
        "q": "¿Qué es un Swap?",
        "opts": [
            "A) Bono",
            "B) Intercambio de flujos financieros",
            "C) Acción",
            "D) Depósito"
        ],
        "ans": 1
    },
    {
        "q": "¿Qué es riesgo de mercado?",
        "opts": [
            "A) Cambios en precios, tasas o divisas",
            "B) Robo físico",
            "C) Renuncia de empleados",
            "D) Riesgo legal"
        ],
        "ans": 0
    },
    {
        "q": "¿Qué es riesgo de crédito?",
        "opts": [
            "A) Riesgo reputacional",
            "B) Baja liquidez",
            "C) Incumplimiento de una contraparte",
            "D) Falla tecnológica"
        ],
        "ans": 2
    },
    {
        "q": "¿Qué es riesgo operacional?",
        "opts": [
            "A) Variación de FX",
            "B) Variación de tasas",
            "C) Pérdidas por errores o fallas de procesos",
            "D) Variación bursátil"
        ],
        "ans": 2
    },
    {
        "q": "¿Qué área suele medir VaR?",
        "opts": [
            "A) Ventas",
            "B) Marketing",
            "C) RRHH",
            "D) Middle Office / Riesgos"
        ],
        "ans": 3
    },
    {
        "q": "¿Qué significa VaR?",
        "opts": [
            "A) Volume at Risk",
            "B) Variable at Return",
            "C) Value and Return",
            "D) Value at Risk"
        ],
        "ans": 3
    },
    {
        "q": "¿Para qué sirve el capital regulatorio?",
        "opts": [
            "A) Financiar marketing",
            "B) Absorber pérdidas",
            "C) Comprar edificios",
            "D) Pagar salarios"
        ],
        "ans": 1
    },
    {
        "q": "¿Qué busca proteger Basilea?",
        "opts": [
            "A) Comercio exterior",
            "B) Ventas",
            "C) Impuestos",
            "D) Estabilidad financiera"
        ],
        "ans": 3
    },
    {
        "q": "¿Por qué los bancos mantienen reservas?",
        "opts": [
            "A) Cumplir exigencias regulatorias y liquidez",
            "B) Pagar dividendos",
            "C) Comprar acciones",
            "D) Reducir clientes"
        ],
        "ans": 0
    },
    {
        "q": "¿Qué es una contraparte?",
        "opts": [
            "A) Un accionista",
            "B) Un auditor",
            "C) Un regulador",
            "D) La otra parte de una operación financiera"
        ],
        "ans": 3
    },
    {
        "q": "¿Qué organismo suele supervisar bancos en Chile?",
        "opts": [
            "A) SII",
            "B) Tesorería General",
            "C) BancoEstado",
            "D) CMF"
        ],
        "ans": 3
    },
    {
        "q": "Un trader compra un bono. ¿Quién registra inicialmente la operación?",
        "opts": [
            "A) Front Office",
            "B) RRHH",
            "C) Auditoría",
            "D) Legal"
        ],
        "ans": 0
    },
    {
        "q": "¿Quién verifica que el trade tenga sentido financiero y respete límites?",
        "opts": [
            "A) Marketing",
            "B) RRHH",
            "C) Comercial",
            "D) Middle Office"
        ],
        "ans": 3
    },
    {
        "q": "¿Quién envía instrucciones de pago?",
        "opts": [
            "A) Riesgos",
            "B) Back Office",
            "C) Front Office",
            "D) Auditoría"
        ],
        "ans": 1
    },
    {
        "q": "¿Qué área necesita información para elaborar estados financieros?",
        "opts": [
            "A) Contabilidad",
            "B) Marketing",
            "C) RRHH",
            "D) Ventas"
        ],
        "ans": 0
    },
    {
        "q": "¿Qué sistema suele utilizarse para gestionar derivados y operaciones de mercado?",
        "opts": [
            "A) PowerPoint",
            "B) Excel únicamente",
            "C) Murex",
            "D) SAP exclusivamente"
        ],
        "ans": 2
    },
    {
        "q": "¿Qué ocurre cuando una contraparte incumple un pago?",
        "opts": [
            "A) Riesgo de crédito",
            "B) Riesgo operacional",
            "C) Riesgo reputacional",
            "D) Riesgo climático"
        ],
        "ans": 0
    },
    {
        "q": "¿Qué es P&L?",
        "opts": [
            "A) Price and Leverage",
            "B) Position and Liquidity",
            "C) Profit and Loss",
            "D) Payment and Liability"
        ],
        "ans": 2
    },
    {
        "q": "¿Qué área suele ser responsable del P&L de una mesa de trading?",
        "opts": [
            "A) Legal",
            "B) RRHH",
            "C) Front Office",
            "D) Auditoría"
        ],
        "ans": 2
    },
    {
        "q": "¿Por qué se realizan conciliaciones contables?",
        "opts": [
            "A) Verificar consistencia entre sistemas y registros",
            "B) Generar ventas",
            "C) Aumentar riesgos",
            "D) Crear derivados"
        ],
        "ans": 0
    },
    {
        "q": "¿Cuál es el objetivo final de todo el flujo operativo bancario?",
        "opts": [
            "A) Aumentar burocracia",
            "B) Reducir clientes",
            "C) Procesar operaciones de forma segura, rentable y controlada",
            "D) Eliminar controles"
        ],
        "ans": 2
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
        title: "Fit for Banking",
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
          "Module: Balance Sheet Analysis"
        ]
      },
      intro_pnl: {
        title: "Financial Statements Introduction to Profit and Loss",
        items: [
          "Completion of Activities"
        ]
      },
      eod_troubleshooting: {
        title: "Generic EOD Troubleshooting",
        items: [
          "Completion of Activities"
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
  "Read the attached documents": "https://mxlearn.360learning.com/course/play/6758b7f7a03295ae3449b8e4/attempts/6a233b0a0c8feff1cddaa2c3?preferredLang=en"
};

const bancoPreguntasSemana2 = [
  {
    "question": "¿Cuál es la función principal del Trade Query en Murex?",
    "options": [
      "Bookear trades",
      "Realizar eventos a trades",
      "Buscar y filtrar trades",
      "Replicar trades"
    ],
    "correct": 2
  },
  {
    "question": "¿Cuál es la función principal del e-Tradepad en Murex?",
    "options": [
      "Bookear trades",
      "Realizar eventos a trades",
      "Buscar y filtrar trades",
      "Replicar trades"
    ],
    "correct": 0
  },
  {
    "question": "¿Con qué perfil se inicializa la contabilidad en MX.3?",
    "options": [
      "MO",
      "FO",
      "CONFIG",
      "HOUSEKEEPER"
    ],
    "correct": 3
  },
  {
    "question": "¿Con qué perfil se editan las reglas contables en MX.3?",
    "options": [
      "MO",
      "FO",
      "BO",
      "CONFIG"
    ],
    "correct": 3
  },
  {
    "question": "¿Con cuál aplicación puedo ver mis vacaciones?",
    "options": [
      "Workday",
      "MXIntra",
      "MXEvolve",
      "Microsoft Teams"
    ],
    "correct": 0
  },
  {
    "question": "¿Cuál aplicación me da información y documentación sobre casos reales de clientes y herramientas para resolver casos?",
    "options": [
      "Pega Case",
      "MXDoc",
      "MXWiki",
      "MXUniversity"
    ],
    "correct": 0
  },
  {
    "question": "¿Cuál aplicación tiene la documentación oficial de Murex para configurar?",
    "options": [
      "Pega Case",
      "MXDoc",
      "MXWiki",
      "MXUniversity"
    ],
    "correct": 1
  },
  {
    "question": "¿Cada cuánto se rellena el timesheet?",
    "options": [
      "Cada 1 semana",
      "Cada 15 días",
      "Cada 1 mes",
      "Cada 2 meses"
    ],
    "correct": 1
  },
  {
    "question": "¿A qué estado financiero va un Notional en contabilidad?",
    "options": [
      "Balance Sheet",
      "Off-Balance Sheet",
      "Income Statement",
      "Equity Notes"
    ],
    "correct": 1
  },
  {
    "question": "¿A qué estado financiero va un MTM (Mark-to-Market) en contabilidad?",
    "options": [
      "Balance Sheet",
      "Off-Balance Sheet",
      "Income Statement",
      "Equity Notes"
    ],
    "correct": 0
  },
  {
    "question": "¿Qué es un FX Swap?",
    "options": [
      "La compra de una divisa a precio spot sin compromiso de devolución",
      "El intercambio de dos divisas en una fecha spot y el intercambio inverso en una fecha futura pactada",
      "Un contrato de opción sobre divisas",
      "Un futuro sobre tipo de cambio negociado en bolsa"
    ],
    "correct": 1
  },
  {
    "question": "¿Cuáles son las dos patas de un FX Swap?",
    "options": [
      "Near leg y Far leg",
      "Buy leg y Sell leg",
      "Open leg y Close leg",
      "Long leg y Short leg"
    ],
    "correct": 0
  },
  {
    "question": "¿Cuál es la diferencia entre el Trade Date y el Settlement Date?",
    "options": [
      "Son la misma fecha",
      "El Trade Date es cuando se acuerda la operación; el Settlement Date es cuando se intercambian los fondos",
      "El Settlement Date es siempre anterior al Trade Date",
      "El Trade Date aplica solo a opciones"
    ],
    "correct": 1
  },
  {
    "question": "En un FX Spot, ¿cuántos días hábiles después del Trade Date ocurre el Settlement?",
    "options": [
      "T+0",
      "T+1",
      "T+2",
      "T+3"
    ],
    "correct": 2
  },
  {
    "question": "¿Qué representa el \"swap points\" o puntos swap en un FX Swap?",
    "options": [
      "La comisión cobrada por el banco",
      "La diferencia entre el tipo de cambio de la near leg y la far leg, derivada del diferencial de tasas de interés",
      "El margen de crédito del cliente",
      "El tipo de cambio spot vigente al vencimiento"
    ],
    "correct": 1
  },
  {
    "question": "¿Qué riesgo principal cubre un FX Swap?",
    "options": [
      "Riesgo de crédito",
      "Riesgo de tipo de interés",
      "Riesgo de liquidez y financiación en divisas",
      "Riesgo operacional"
    ],
    "correct": 2
  },
  {
    "question": "¿Qué es el Roll-over en un FX Swap?",
    "options": [
      "Cancelar anticipadamente un swap",
      "Extender la fecha de vencimiento de la far leg a una fecha más lejana",
      "Cambiar la divisa del contrato",
      "Convertir un FX Swap en un FX Forward"
    ],
    "correct": 1
  },
  {
    "question": "En un FX Swap, ¿qué queda fijo durante toda la vida del contrato?",
    "options": [
      "El tipo de cambio spot de mercado",
      "El diferencial (swap points) entre ambas patas",
      "La tasa de interés de mercado",
      "El MTM de la operación"
    ],
    "correct": 1
  },
  {
    "question": "¿Cómo se registra contablemente la near leg de un FX Swap en la fecha de liquidación?",
    "options": [
      "Como ingreso en el Income Statement",
      "Como un activo y un pasivo en el Balance Sheet por el intercambio de nominales",
      "Directamente como Off-Balance Sheet",
      "Solo se registra al vencimiento"
    ],
    "correct": 1
  },
  {
    "question": "¿Qué perfil de Murex se utiliza típicamente para bookear un FX Swap?",
    "options": [
      "HOUSEKEEPER",
      "CONFIG",
      "FO (Front Office)",
      "MO (Middle Office)"
    ],
    "correct": 2
  },
  {
    "question": "¿Un FX Swap genera riesgo de mercado de tipo de cambio neto?",
    "options": [
      "Sí, igual que un spot",
      "No, porque las dos patas se compensan en montos nominales",
      "Solo en la far leg",
      "Solo si el cliente incumple"
    ],
    "correct": 1
  },
  {
    "question": "¿Qué es una opción Call?",
    "options": [
      "El derecho a vender un activo a un precio determinado",
      "La obligación de comprar un activo a un precio determinado",
      "El derecho a comprar un activo a un precio determinado",
      "Un contrato de intercambio de flujos"
    ],
    "correct": 2
  },
  {
    "question": "¿Qué es una opción Put?",
    "options": [
      "El derecho a comprar un activo a un precio determinado",
      "El derecho a vender un activo a un precio determinado",
      "La obligación de vender un activo",
      "Un forward con opcionalidad"
    ],
    "correct": 1
  },
  {
    "question": "¿Qué es el precio de ejercicio (strike) en una opción?",
    "options": [
      "El precio de mercado del subyacente en la fecha de vencimiento",
      "El precio al cual el comprador puede ejercer su derecho de compra o venta",
      "La prima pagada por la opción",
      "El diferencial entre bid y ask"
    ],
    "correct": 1
  },
  {
    "question": "¿Qué es la prima de una opción?",
    "options": [
      "El precio de ejercicio pactado",
      "El beneficio obtenido al ejercer la opción",
      "El precio que paga el comprador al vendedor por adquirir el derecho",
      "La garantía depositada en cámara de compensación"
    ],
    "correct": 2
  },
  {
    "question": "¿Cuándo se dice que una opción Call está \"In the Money\" (ITM)?",
    "options": [
      "Cuando el precio del subyacente es igual al strike",
      "Cuando el precio del subyacente es inferior al strike",
      "Cuando el precio del subyacente es superior al strike",
      "Cuando la prima es mayor que el strike"
    ],
    "correct": 2
  },
  {
    "question": "¿Qué es el Delta de una opción?",
    "options": [
      "El tiempo restante hasta el vencimiento",
      "La sensibilidad del precio de la opción ante un cambio de un punto en el subyacente",
      "La volatilidad implícita de la opción",
      "La tasa libre de riesgo utilizada en el modelo"
    ],
    "correct": 1
  },
  {
    "question": "¿Qué modelo se usa frecuentemente para valorar opciones sobre divisas (FX Options)?",
    "options": [
      "Modelo de Vasicek",
      "Black-Scholes / Garman-Kohlhagen",
      "Modelo de Hull-White",
      "Modelo CIR"
    ],
    "correct": 1
  },
  {
    "question": "¿Qué es una opción europea frente a una americana?",
    "options": [
      "La europea solo puede ejercerse al vencimiento; la americana puede ejercerse en cualquier momento hasta el vencimiento",
      "La europea puede ejercerse en cualquier momento; la americana solo al vencimiento",
      "Son idénticas en sus derechos",
      "La diferencia es solo geográfica, no de ejercicio"
    ],
    "correct": 0
  },
  {
    "question": "¿Qué es la Vega de una opción?",
    "options": [
      "Sensibilidad al paso del tiempo",
      "Sensibilidad al cambio en el precio del subyacente",
      "Sensibilidad al cambio en la volatilidad implícita",
      "Sensibilidad al cambio en las tasas de interés"
    ],
    "correct": 2
  },
  {
    "question": "¿Qué es la Theta de una opción?",
    "options": [
      "Sensibilidad al cambio en la volatilidad",
      "Pérdida de valor de la opción con el paso del tiempo (time decay)",
      "Sensibilidad al cambio en el precio del subyacente",
      "Sensibilidad a las tasas de interés"
    ],
    "correct": 1
  },
  {
    "question": "¿Qué es un contrato de futuros?",
    "options": [
      "Un derecho a comprar o vender un activo en el futuro",
      "Un acuerdo OTC de intercambio de flujos",
      "Un contrato estandarizado y negociado en bolsa para comprar/vender un activo a un precio y fecha futura determinados",
      "Una opción sin prima"
    ],
    "correct": 2
  },
  {
    "question": "¿Cuál es la principal diferencia entre un futuro y un forward?",
    "options": [
      "El futuro tiene un subyacente; el forward no",
      "El futuro se negocia en mercados organizados y es estandarizado; el forward es OTC y personalizable",
      "El forward requiere margen diario; el futuro no",
      "Solo los futuros tienen fecha de vencimiento"
    ],
    "correct": 1
  },
  {
    "question": "¿Qué es el \"marking to market\" diario en futuros?",
    "options": [
      "La valoración mensual del contrato",
      "El ajuste diario de pérdidas y ganancias en la cuenta de margen según el precio de cierre del mercado",
      "La renovación automática del contrato al vencimiento",
      "El cálculo de la prima del contrato"
    ],
    "correct": 1
  },
  {
    "question": "¿Qué es el margen inicial en un contrato de futuros?",
    "options": [
      "La ganancia garantizada al entrar en el contrato",
      "El depósito de garantía que debe mantener el inversor al abrir una posición",
      "El precio de liquidación al vencimiento",
      "La comisión de la cámara de compensación"
    ],
    "correct": 1
  },
  {
    "question": "¿Qué ocurre cuando el saldo de la cuenta de margen cae por debajo del margen de mantenimiento?",
    "options": [
      "El contrato se cancela automáticamente",
      "Se emite un margin call y el inversor debe reponer fondos",
      "La cámara asume la pérdida",
      "El precio del contrato se ajusta al spot"
    ],
    "correct": 1
  },
  {
    "question": "¿Qué es la \"entrega\" en un contrato de futuros?",
    "options": [
      "El pago de la prima al vencimiento",
      "La liquidación física del activo subyacente al vencimiento, o liquidación en efectivo según el contrato",
      "La reposición del margen",
      "La renovación del contrato por otro período"
    ],
    "correct": 1
  },
  {
    "question": "¿Qué es el \"open interest\" en futuros?",
    "options": [
      "El volumen total negociado en el día",
      "El número total de contratos abiertos que aún no han sido cerrados ni liquidados",
      "El interés acumulado de la posición larga",
      "El precio promedio de todos los contratos vigentes"
    ],
    "correct": 1
  },
  {
    "question": "¿Cómo se cierra una posición en futuros sin llegar a la entrega física?",
    "options": [
      "Solicitando la cancelación a la bolsa",
      "Tomando una posición opuesta (contraria) del mismo contrato",
      "Esperando al vencimiento y pagando una penalidad",
      "Transfiriéndola a otro inversor directamente"
    ],
    "correct": 1
  },
  {
    "question": "¿Qué es el \"basis\" en futuros?",
    "options": [
      "El precio spot del activo",
      "La diferencia entre el precio spot del activo subyacente y el precio del futuro",
      "El margen de mantenimiento requerido",
      "La tasa de interés implícita del contrato"
    ],
    "correct": 1
  },
  {
    "question": "¿Qué es el \"basis risk\" en una cobertura con futuros?",
    "options": [
      "El riesgo de que el precio del futuro suba",
      "El riesgo de que la correlación entre el activo a cubrir y el futuro no sea perfecta, dejando exposición residual",
      "El riesgo de incumplimiento de la cámara de compensación",
      "El riesgo de que no haya liquidez en el contrato"
    ],
    "correct": 1
  },
  {
    "question": "¿Qué es la fecha de valor (Value Date) en una operación financiera?",
    "options": [
      "La fecha en que se acuerda el trade",
      "La fecha en que efectivamente se intercambian los fondos o activos",
      "La fecha en que se contabiliza el MTM",
      "La fecha de expiración de la opción"
    ],
    "correct": 1
  },
  {
    "question": "¿Qué es la Maturity Date en un instrumento financiero?",
    "options": [
      "La fecha de contratación de la operación",
      "La fecha en que vence el contrato y se realizan los pagos o entregas finales",
      "La fecha de cálculo del interés devengado",
      "La fecha de primera revisión de cupón"
    ],
    "correct": 1
  },
  {
    "question": "¿Qué es el Accrual Date en contabilidad financiera?",
    "options": [
      "La fecha de liquidación del bono",
      "La fecha desde la cual se comienza a devengar el interés o resultado de la operación",
      "La fecha de cierre del libro contable",
      "La fecha de auditoría del balance"
    ],
    "correct": 1
  },
  {
    "question": "¿A qué estado financiero va el resultado realizado (P&L realizado) de una operación?",
    "options": [
      "Balance Sheet",
      "Off-Balance Sheet",
      "Income Statement",
      "Equity Notes"
    ],
    "correct": 2
  },
  {
    "question": "¿Cuál es la función del perfil BO (Back Office) en Murex?",
    "options": [
      "Configurar reglas contables",
      "Bookear trades en FO",
      "Confirmar, liquidar y gestionar el ciclo de vida post-trade de las operaciones",
      "Inicializar la contabilidad"
    ],
    "correct": 2
  },
  {
    "question": "¿Qué es un evento de \"novación\" en Murex?",
    "options": [
      "Crear un nuevo trade desde cero",
      "Reemplazar una de las partes de una operación existente por una nueva contraparte",
      "Cancelar un trade sin reemplazarlo",
      "Cambiar el nominal de un trade sin modificar la contraparte"
    ],
    "correct": 1
  },
  {
    "question": "¿Qué es el workflow de \"confirmación\" en el ciclo de vida de un trade en Murex?",
    "options": [
      "El proceso de bookeo inicial del trade en FO",
      "El proceso por el cual ambas partes verifican y validan los términos de la operación antes de la liquidación",
      "La generación automática del asiento contable",
      "El cálculo del MTM de la operación"
    ],
    "correct": 1
  },
  {
    "question": "¿Qué es el Static Data en Murex?",
    "options": [
      "Los datos de mercado en tiempo real",
      "La información de configuración base del sistema, como contrapartes, instrumentos, curvas y calendarios",
      "Los trades históricos cerrados",
      "Los reportes de regulación generados por el sistema"
    ],
    "correct": 1
  },
  {
    "question": "¿Qué hace el proceso de \"end of day\" (EOD) en Murex?",
    "options": [
      "Borra los trades del día anterior",
      "Ejecuta una serie de procesos automáticos como valoración, generación de asientos contables, cálculo de P&L y cierre del día operativo",
      "Reinicia los perfiles de usuario",
      "Envía confirmaciones automáticas a todas las contrapartes"
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
  limiteBloqueadoMalla: 3,
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
    loginRole: 'consultant', // Current selected tab in login
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
        progreso_mallas: Array(12).fill(null).map((_, i) => ({ completado: i < 7, nota: i < 7 ? 80 : null }))
      }
    ],
    
    // Core week templates representing the 12 weeks
    week_templates: [
      {
        week_number: 1,
        title: "Onboarding Murex General y Flujo de Negocios Corporativo",
        phase: "Inducción",
        description: "Módulos Murex: MX.3 General / Introducción de Interfaces. Objetivos: Completar la inducción inicial y comprender el ecosistema global de la plataforma. Entender el rol de Finance & PL.",
        checklist_items: [
          "Completar la visualización y estudio del módulo Videos de Onboarding: Murex y Finance Internos (Bloque Introductorio)",
          "Identificar los accesos básicos de la interfaz e iniciar sesión en el ambiente Sandbox MX.3",
          "Esquematizar el flujo punta a punta (Front-to-Back) de una transaccionalidad genérica en la plataforma",
          "Mapear la ubicación organizacional y responsabilidades del área de Finance & PL dentro de un banco tipo",
          "Reconocer el organigrama interno del equipo local y canales de escalamiento técnico"
        ],
        knowledge_test: { num_questions: 50, min_passing_score: 70 },
        deliverable: null,
        unlock_condition: "always_unlocked"
      },
      {
        week_number: 2,
        title: "Ciclo de Vida de Trades (FX Swap) y Fundamentos de Registro Contable",
        phase: "Inducción",
        description: "Módulos Murex: E-tradepad, Trade Query. Objetivos: Primer acercamiento a MX.3, navegación por grupos. Identificar funciones de FO, MO, BO, Config, Housekeeper. Dominar débitos/créditos contables para FX Swap.",
        checklist_items: [
          "Completar la visualización y estudio del módulo Videos de Onboarding: Murex y Finance Internos (Bloque FX Swaps Teórico)",
          "Ejecutar búsquedas avanzadas y filtrado de transacciones mediante el uso de Trade Query",
          "Simular el ingreso e inyección manual de contratos usando la herramienta E-tradepad",
          "Identificar las diferencias operacionales entre los grupos FO, MO, BO, Config y Housekeeper",
          "Desarrollar y registrar el PPT explicativo con los asientos contables teóricos para un FX Swap",
          "Cuadrar matemáticamente los libros diarios del ejercicio práctico asegurando la paridad Débito/Crédito",
          "Completar y aprobar el test automatizado de conocimientos generales de la plataforma",
          "Resolver y aprobar el Juego de Clasificación de Cuentas (mínimo 80% de precisión con 25 cuentas)"
        ],
        knowledge_test: { num_questions: 50, min_passing_score: 70 },
        deliverable: { type: "ppt", description: "Presentación (PPT) detallada de asientos contables para un FX Swap (fecha, trade, términos, débitos y créditos)", required: true },
        unlock_condition: "week_1_passed"
      },
      {
        week_number: 3,
        title: "Parametrización de Cuentas Dinámicas, Fórmulas y Logística Operativa del Área",
        phase: "Inducción",
        description: "Módulos Murex: Accounting Rules / Cuentas Simples y Dinámicas. Objetivos: Traducir el flujo contable a parametrización en MX.3. Diseñar lógica de cuentas dinámicas y fórmula por divisa. Comprender gobernanza, timesheets y reuniones recurrentes. Introducción a Opciones.",
        checklist_items: [
          "Completar la visualización y estudio del módulo Videos de Onboarding: Murex y Finance Internos (Bloque Cuentas y Fórmulas)",
          "Configurar y dar de alta Cuentas Contables Simples directamente en el entorno Sandbox",
          "Diseñar estructuras de Cuentas Dinámicas basadas en variables lógicas de divisa (currency)",
          "Implementar Cuentas Fórmula aplicando condicionales lógicos para el direccionamiento automatizado de montos",
          "Completar correctamente la Timesheet de la semana siguiendo las reglas de imputación del área",
          "Identificar el propósito de los comités recurrentes (Chile-Brasil, OPS/Finance, Americas, Townhalls)",
          "Resolver de manera interactiva el \"Juego de las Cuentas\" integrado en el Workspace de la plataforma",
          "Completar y registrar la visualización de los 21 videos mandatorios del módulo Financial Markets for Newcomers en la sección MXLearn"
        ],
        knowledge_test: { num_questions: 26, min_passing_score: 70 },
        deliverable: { type: "zip", description: "Cuentas dinámicas parametrizadas y funcionales en el entorno de pruebas", required: true },
        unlock_condition: "week_2_passed"
      },
      {
        week_number: 4,
        title: "Configuración de Reglas Contables por Instrumento Financiero",
        phase: "Inducción",
        description: "Módulos Murex: Accounting Rules Interface / Contratos de FX Swap y Opciones. Objetivos: Vincular las cuentas parametrizadas con el motor de reglas de FX Swap. Crear cuentas para Opciones y diseñar sus Accounting Rules.",
        checklist_items: [
          "Completar la visualización y estudio del módulo Videos de Onboarding: Murex y Finance Internos (Bloque Accounting Rules y Opciones)",
          "Vincular de forma exitosa las cuentas parametrizadas con el motor de reglas de FX Swap",
          "Crear las cuentas contables maestras específicas para el procesamiento de Opciones Financieras",
          "Diseñar y activar las reglas contables de asignación (Accounting Rules) para contratos de Opciones",
          "Validar que el material complementario e instructivos de derivados hayan sido revisados mediante la inyección de ejemplos"
        ],
        knowledge_test: { num_questions: 2, min_passing_score: 70 },
        deliverable: { type: "zip", description: "Configuración e inyección en el ambiente de prueba de las reglas contables operativas para FX Swap y Opciones", required: true },
        unlock_condition: "week_3_passed"
      },
      {
        week_number: 5,
        title: "Parametrización y Control de Reglas de Flujo (Flow Rules)",
        phase: "Aprendizaje Estructurado",
        description: "Módulos Murex: Accounting Flow Rules. Objetivos: Comprender, diseñar e implementar reglas de flujo dentro del motor contable de MX.3 para optimizar el procesamiento.",
        checklist_items: [
          "Completar la visualización y estudio del módulo Videos de Onboarding: Murex y Finance Internos (Bloque Flow Rules Avanzado)",
          "Explicar la diferencia técnica entre una regla contable tradicional y una regla de flujo (Flow Rule)",
          "Diseñar el mapa lógico de procesamiento de flujos de caja contables para transacciones complejas",
          "Parametrizar y activar un set completo de Accounting Flow Rules en el ambiente de prueba",
          "Correr la batería de pruebas de seguimiento y monitoreo manual de flujos inyectados",
          "Documentar y deconstruir discrepancias menores en el ruteo de flujos sin intervención senior"
        ],
        knowledge_test: { num_questions: 2, min_passing_score: 70 },
        deliverable: { type: "zip", description: "Prototipo de matriz de reglas de flujo configuradas en el Sandbox", required: true },
        unlock_condition: "week_4_passed"
      },
      {
        week_number: 6,
        title: "Cierre de Ciclo Diario, Valoración a Mercado (MTM) y Procesamiento Fin de Día (EOD)",
        phase: "Aprendizaje Estructurado",
        description: "Módulos Murex: End of Day (EOD) Processing / Mark-to-Market (MTM) Engine. Objetivos: Validar contabilidad bookeando trades. Postear reglas oficiales. Inyectar valoraciones MTM y ejecutar scripts de EOD.",
        checklist_items: [
          "Completar la visualización y estudio del módulo Videos de Onboarding: Murex y Finance Internos (Bloque EOD y Motores MTM)",
          "Publicar (postear) de manera oficial las reglas contables de FX Swap y Opciones en producción simulada",
          "Ejecutar transacciones reales (bookear trades) y auditar que la contabilidad impacte de forma limpia",
          "Configurar e inyectar valores de mercado a la plataforma utilizando el motor de Mark-to-Market (MTM)",
          "Programar, lanzar y monitorear la ejecución de los scripts de cierre automatizado de fin de día (EOD)",
          "Generar, extraer y cuadrar el reporte de diario contable consolidado posterior al procesamiento EOD"
        ],
        knowledge_test: { num_questions: 2, min_passing_score: 70 },
        deliverable: { type: "pdf", description: "Reporte de diario contable cuadrado posterior a la simulación completa de un cierre de fin de día (EOD) para FX Swaps y Opciones", required: true },
        unlock_condition: "week_5_passed"
      },
      {
        week_number: 7,
        title: "Eventos Contables Avanzados, Correcciones al Pasado (Fixing) e Introducción a Futuros",
        phase: "Aprendizaje Estructurado",
        description: "Módulos Murex: Market Data / Fixing Engine / Futuros Financieros. Objetivos: Gestión de eventos complejos, inserción con fecha valor en el pasado e introducción a Futuros.",
        checklist_items: [
          "Completar la visualización y estudio del módulo Videos de Onboarding: Murex y Finance Internos (Bloque Eventos Pasados y Futuros)",
          "Insertar manualmente transacciones complejas con fecha valor parametrizada en el pasado (Backdated trades)",
          "Ejecutar procesos de corrección de precios e índices mediante el uso del Fixing Engine",
          "Resolver quiebres de consistencia contable generados por desfases en eventos de mercado",
          "Identificar las especificaciones del nuevo instrumento financiero introducido: Futuros",
          "Crear la estructura contable base para el procesamiento operacional del módulo de Futuros"
        ],
        knowledge_test: { num_questions: 2, min_passing_score: 70 },
        deliverable: { type: "pdf", description: "Registro contable corregido en el pasado y parametrización base del módulo de Futuros", required: true },
        unlock_condition: "week_6_passed"
      },
      {
        week_number: 8,
        title: "Ensayo General (Dress Rehearsal) de Autonomía Técnica",
        phase: "Aprendizaje Estructurado",
        description: "Módulos Murex: Todos los módulos integrados previamente (Murex Full Stack Finance). Objetivos: Demostrar control de FX Swap, Opciones, Futuros y sustentar lógica ante tutor.",
        checklist_items: [
          "Completar la visualización y estudio del módulo Videos de Onboarding: Murex y Finance Internos (Bloque de Consolidación e Ishikawa)",
          "Ejecutar un flujo transaccional punta a punta (bookeo, contabilidad, MTM y EOD) sin asistencia experta directa",
          "Sustentar verbalmente ante el Tutor la lógica matemática e ingenieril detrás de cada cuenta y regla creada",
          "Demostrar dominio en la resolución de problemas típicos de la plataforma (Sandbox Troubleshooting)",
          "Presentar la bitácora del entorno de pruebas completamente cuadrado y libre de errores de consistencia",
          "Obtener el visado de aprobación del Tutor en el Checklist unificado para autorizar el paso a productivo"
        ],
        knowledge_test: { num_questions: 2, min_passing_score: 70 },
        deliverable: { type: "zip", description: "Presentación final del entorno de pruebas completamente parametrizado, ejecutando transacciones de punta a punta frente al mentor", required: true },
        unlock_condition: "week_7_passed"
      },
      {
        week_number: 9,
        title: "Paso a Producción Operativa (Go Live) con el Equipo de Finance",
        phase: "Go Live",
        description: "Módulos Murex: Entorno de Producción Integrado (Finance & PL). Objetivos: Desplegar capacidades en tareas reales de FX Swap, FX Forward, Opciones y Futuros.",
        checklist_items: [
          "Completar la visualización y estudio del módulo Videos de Onboarding: Murex y Finance Internos (Bloque de Protocolos de Seguridad en Producción)",
          "Configurar el acceso seguro y autenticado al entorno de Producción oficial del área de Finance & PL",
          "Procesar las primeras transacciones reales asignadas de los instrumentos FX Swap y FX Forward",
          "Monitorear de forma directa la contabilidad productiva para transacciones de Opciones y Futuros",
          "Extraer reportes operativos diarios en el ambiente productivo para su validación con el equipo técnico",
          "Disminuir el Índice de Dependencia de Soporte (IDS) reactivo, operando bajo supervisión pasiva"
        ],
        knowledge_test: { num_questions: 2, min_passing_score: 70 },
        deliverable: { type: "pdf", description: "Primeras transacciones productivas visadas de forma directa", required: true },
        unlock_condition: "week_8_passed"
      },
      {
        week_number: 10,
        title: "Mantenimiento de Datos Maestros (Housekeeper) y Creación de CTT",
        phase: "Go Live",
        description: "Módulos Murex: Housekeeper / Configuración de CTT. Objetivos: Uso avanzado de Housekeeper para auditoría y limpieza. Crear plantillas de parametrización comercial CTT.",
        checklist_items: [
          "Completar la visualización y estudio del módulo Videos de Onboarding: Murex y Finance Internos (Bloque Housekeeper y Mantenimiento de Tablas)",
          "Acceder y navegar de manera segura en el módulo maestro de mantenimiento del sistema Housekeeper",
          "Ejecutar diagnósticos y auditorías básicas sobre la salud y consistencia de las tablas internas de MX.3",
          "Diseñar y dar de alta una plantilla de parametrización comercial (CTT - Configuration Template)",
          "Asistir y tomar apuntes de la Clase Magistral técnica dictada por el consultor Senior asignado",
          "Validar con la Manager la temática de la clase magistral complementaria de la semana"
        ],
        knowledge_test: null,
        deliverable: { type: "zip", description: "Estructura de CTT configurada y validada sin errores de consistencia", required: true },
        unlock_condition: "week_9_passed"
      },
      {
        week_number: 11,
        title: "Gestión de Calendarios, Feriados Mundiales y Procesos de Devengo (Accruals)",
        phase: "Go Live",
        description: "Módulos Murex: Configuration Templates / Market Calendars / Accrual Engine. Objetivos: Configurar calendarios geográficos, feriados mundiales y devengos/amortizaciones.",
        checklist_items: [
          "Completar la visualización y estudio del módulo Videos de Onboarding: Murex y Finance Internos (Bloque Accruals y Curvas de Interés)",
          "Configurar tablas geográficas de feriados bancarios internacionales en las plantillas globales del sistema",
          "Vincular calendarios de mercados financieros con los flujos de caja proyectados en portafolios de prueba",
          "Parametrizar y calibrar el motor de amortizaciones contables y devengos (Accrual Engine)",
          "Asistir a la Clase Magistral dictada por Juan Francisco Orrego sobre Configuration Templates",
          "Evaluar mediante simulación el impacto financiero de un feriado imprevisto sobre el devengo de un portafolio"
        ],
        knowledge_test: { num_questions: 2, min_passing_score: 70 },
        deliverable: { type: "zip", description: "Calendario financiero parametrizado con lógica de devengo aplicada a un portafolio de pruebas", required: true },
        unlock_condition: "week_10_passed"
      },
      {
        week_number: 12,
        title: "Procesos de Liquidación Contable (Liquidation)",
        phase: "Cierre",
        description: "Módulos Murex: Liquidation / Settlement Processing. Objetivos: Flujos de liquidación de trades e impacto en cuentas de balance de Finance & PL.",
        checklist_items: [
          "Completar la visualización y estudio del módulo Videos de Onboarding: Murex y Finance Internos (Bloque Liquidation y Settlement)",
          "Identificar el ciclo de vida del flujo de extinción de obligaciones financieras (Settlement/Liquidation)",
          "Parametrizar las reglas contables de cierre definitivo de operaciones por concepto de liquidación",
          "Asistir a la Clase Magistral técnica especializada en el módulo de Liquidation",
          "Ejecutar el procesamiento de liquidaciones en la plataforma y cuadrar el impacto en las cuentas de balance",
          "Resolver de forma autónoma un caso de quiebre o desfase contable en una liquidación simulada"
        ],
        knowledge_test: { num_questions: 2, min_passing_score: 80 },
        deliverable: { type: "pdf", description: "Parametrización de un flujo de liquidación de trade en sandbox", required: true },
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
          question: "¿Qué es la reunión Town Hall?",
          options: [
            "Reunión mensual de Chile para ver los proyectos",
            "Reunión anual de Murex Americas para ver proyectos",
            "Reunión semestral de Murex Chile para ver proyectos",
            "Reunión trimestral de Murex Americas para ver proyectos"
          ],
          correct: 3
        },
        {
          question: "¿Qué se hace en la Weekly Meeting de Finance & P&L Chile?",
          options: [
            "Debatir sobre temáticas en común del equipo",
            "Describir el status actual de los proyectos asignados",
            "Hablar sobre la relación del equipo y RRHH",
            "Entrega de JIRAs actualizados"
          ],
          correct: 1
        },
        {
          question: "¿Qué se hace en la Monthly Meeting con Finance Americas?",
          options: [
            "Debatir sobre temáticas en común",
            "Presentar requerimientos por región",
            "Describir el status actual de proyectos por región",
            "Entrega de JIRAs actualizados"
          ],
          correct: 2
        },
        {
          question: "¿Qué se hace en la Monthly Meeting con OPS Chile/NY?",
          options: [
            "Debatir sobre temáticas en común de back office",
            "Presentar solicitudes de back office y cuadraturas de cuentas de clientes",
            "Describir el status actual de proyectos por región",
            "Entrega de JIRAs actualizados de clientes con respecto al processing de operaciones"
          ],
          correct: 3
        },
        {
          question: "¿Cuál sería el código correcto en el timesheet para agendar la reunión Finance Weekly?",
          options: [
            "AMER-CS-FIN PL-TEAM – GROWING OTHERS",
            "AMER-CS-FIN PL-TEAM – INTERNAL SUPPORT",
            "AMER-CS-FIN PL-TEAM – RG-CAREER MANAGEMENT & HR",
            "AMER-CS-FIN PL-TEAM – ORG-MEETING"
          ],
          correct: 3
        },
        {
          question: "¿Qué es una FX Option?",
          options: [
            "Un contrato que obliga a ambas partes a intercambiar dos divisas a un tipo de cambio fijo en una fecha futura",
            "Un contrato derivado que otorga al comprador el derecho, pero no la obligación, de comprar o vender una divisa a un precio pactado en o antes de una fecha de vencimiento, a cambio del pago de una prima",
            "Un acuerdo de intercambio de flujos de tasas de interés entre dos contrapartes en distintas monedas",
            "Un contrato estandarizado negociado en bolsa para comprar divisas a precio spot"
          ],
          correct: 1
        },
        {
          question: "En el Step 1 de una FX Option Buy Call, ¿qué cuenta va al Débito en el OBS Commitment de la divisa a recibir (Buy currency)?",
          options: [
            "Contingent Contra",
            "Cont Buy Call Paybl",
            "Cont Buy Call Recbl",
            "Deferred Loss"
          ],
          correct: 2
        },
        {
          question: "En el Step 1 de una FX Option Buy Call, ¿qué cuenta va al Crédito en el OBS Commitment de la divisa a pagar (Sell currency)?",
          options: [
            "Cont Buy Call Recbl",
            "Cont Buy Call Paybl",
            "Unrealized Asset",
            "Premium Payable"
          ],
          correct: 1
        },
        {
          question: "En el Step 2 (Cash Settlement de la prima), ¿qué cuenta se debita y cuál se acredita?",
          options: [
            "Débito: Cash Nostro / Crédito: Premium Payable",
            "Débito: Deferred Loss / Crédito: Premium Expense",
            "Débito: Premium Payable / Crédito: Cash Nostro",
            "Débito: MTM Gain / Crédito: Unrealized Asset"
          ],
          correct: 2
        },
        {
          question: "En el Step 3 (Value Measurement con ganancia), ¿qué refleja el asiento contable?",
          options: [
            "Débito: MTM Gain / Crédito: Unrealized Asset",
            "Débito: Unrealized Asset / Crédito: MTM Gain",
            "Débito: Deferred Loss / Crédito: Premium Expense",
            "Débito: Cash Nostro / Crédito: Unrealized Asset"
          ],
          correct: 1
        },
        {
          question: "En el Step 4 al vencimiento, ¿qué ocurre con el OBS Uncommitment de la divisa a recibir?",
          options: [
            "Se debita Cont Buy Call Recbl y se acredita Contingent Contra",
            "Se debita Contingent Contra y se acredita Cont Buy Call Recbl",
            "Se debita Premium Expense y se acredita Deferred Loss",
            "Se debita Unrealized Asset y se acredita MTM Gain"
          ],
          correct: 1
        },
        {
          question: "Compraste una Call sobre EUR/USD con strike 1.10 y precio spot actual es 1.15. ¿Cuál es tu situación y qué esperas que ocurra?",
          options: [
            "Estás Out of the Money y esperas que el spot baje por debajo del strike para ejercer",
            "Estás In the Money porque el spot supera el strike, y si ejerces compras EUR más barato que el mercado, por lo que tu expectativa era que el EUR se apreciara",
            "Estás In the Money pero no tiene sentido ejercer porque el spot ya superó el strike",
            "Estás At the Money y no hay beneficio ni pérdida en ejercer la opción"
          ],
          correct: 1
        },
        {
          question: "Vendiste una Put sobre USD/CLP con strike 900. El spot actual está en 870. ¿Cuál es tu exposición real?",
          options: [
            "No tienes exposición porque el spot está por debajo del strike y la opción no se ejercerá",
            "Tienes una ganancia porque el comprador no querrá ejercer",
            "El comprador tiene incentivo a ejercer porque puede venderte USD a 900 cuando el mercado paga 870, y tú como vendedor estás obligado a comprar a ese precio, generando una pérdida de 30 pesos por USD nocional",
            "Tu pérdida máxima está limitada a la prima que recibiste al vender la opción"
          ],
          correct: 2
        },
        {
          question: "Una FX Option europea sobre GBP/USD tiene strike 1.25 y vence en 30 días. El spot hoy es 1.27. ¿En qué momento puede ejercerse y qué implica que sea europea?",
          options: [
            "Puede ejercerse en cualquier momento antes del vencimiento porque está In the Money",
            "Solo puede ejercerse exactamente en la fecha de vencimiento, independientemente de dónde esté el spot durante la vida de la opción",
            "Puede ejercerse solo si el spot supera 1.30 antes del vencimiento",
            "Puede ejercerse en cualquier fecha en que el spot esté por encima del strike"
          ],
          correct: 1
        },
        {
          question: "Tienes una posición larga en una Call y el subyacente no se mueve durante semanas. ¿Qué le ocurre al valor de tu opción aunque el spot permanezca constante?",
          options: [
            "El valor permanece estable porque el spot no cambió",
            "El valor aumenta porque el mercado anticipa movimiento futuro",
            "El valor disminuye progresivamente por efecto del time decay (Theta negativa), ya que cada día que pasa sin movimiento reduce el valor temporal de la opción",
            "El valor depende únicamente del Delta, no del tiempo"
          ],
          correct: 2
        },
        {
          question: "En una FX Option, ¿cuál es la diferencia entre precio spot y precio fijo (fixed/strike) y cómo determina si la opción tiene valor intrínseco?",
          options: [
            "El precio spot es el acordado al inicio del contrato y el strike es el precio de mercado vigente al vencimiento",
            "El precio spot es el tipo de cambio vigente en el mercado en este momento, mientras que el strike o precio fijo es el acordado en el contrato. El valor intrínseco es la diferencia positiva entre ambos: en una Call es max(Spot - Strike, 0) y en una Put es max(Strike - Spot, 0)",
            "Ambos precios son iguales al momento del booking y divergen solo si hay volatilidad",
            "El precio fijo se usa solo para opciones americanas y el spot para europeas"
          ],
          correct: 1
        },
        {
          question: "¿Qué es el Trade Date?",
          options: [
            "La fecha en que se intercambian los fondos entre las contrapartes",
            "La fecha en que se acuerda y se registra la operación, donde quedan fijados todos los términos: precio, nocional, contraparte y vencimiento",
            "La fecha en que el contrato expira y se realizan los pagos finales",
            "La fecha desde la cual comienza a correr el devengo de intereses"
          ],
          correct: 1
        },
        {
          question: "¿Qué es el Settlement Date o fecha de liquidación?",
          options: [
            "La fecha en que ambas partes firman el contrato",
            "La fecha en que se calcula el MTM de la operación",
            "La fecha en que efectivamente se produce el intercambio de fondos o activos entre las contrapartes, que puede ser T+1, T+2 o según lo pactado",
            "La fecha de vencimiento del instrumento financiero"
          ],
          correct: 2
        },
        {
          question: "¿Qué es el Value Date en una operación FX?",
          options: [
            "La fecha en que se ingresa la operación al sistema Murex",
            "La fecha en que el trade genera valor económico para el libro, es decir cuando los fondos están disponibles y la operación produce efecto financiero real, típicamente coincide con el Settlement Date",
            "La fecha en que se calcula el fixing de la divisa",
            "La fecha en que el cliente confirma los términos de la operación"
          ],
          correct: 1
        },
        {
          question: "¿Qué es el Fixing en una operación FX?",
          options: [
            "El precio spot pactado al momento del booking del trade",
            "El proceso por el cual se corrigen errores en el tipo de cambio de una operación ya booked",
            "La observación oficial del tipo de cambio de mercado en una fecha y hora específica, publicada por un organismo de referencia como el BCE o el Banco Central, que se usa para liquidar instrumentos cuyo pago depende de ese valor",
            "El ajuste diario del MTM de posiciones en divisa"
          ],
          correct: 2
        },
        {
          question: "¿Qué es la Maturity Date o fecha de vencimiento?",
          options: [
            "La fecha en que se acuerda el contrato entre las partes",
            "La fecha en que se liquida la prima de una opción",
            "La fecha en que el contrato llega a su fin y se realizan los pagos o entregas finales pactados, cerrando todas las obligaciones de ambas partes",
            "La fecha desde la cual se empieza a calcular el P&L de la posición"
          ],
          correct: 2
        },
        {
          question: "¿Cuál es la diferencia entre el Trade Date y el Value Date en un FX Spot?",
          options: [
            "Son siempre la misma fecha",
            "El Trade Date es cuando se acuerda la operación y el Value Date es cuando se intercambian los fondos, típicamente dos días hábiles después en un FX Spot estándar (T+2)",
            "El Value Date siempre ocurre un mes después del Trade Date",
            "El Trade Date aplica solo a derivados y el Value Date solo a operaciones spot"
          ],
          correct: 1
        },
        {
          question: "En una FX Option, ¿cuál es la relación entre el Expiry Date y el Settlement Date?",
          options: [
            "Son siempre la misma fecha",
            "El Expiry Date es cuando la opción deja de poder ejercerse y se determina si hay valor intrínseco; el Settlement Date es cuando, si se ejerció, se produce el intercambio efectivo de divisas, que generalmente ocurre T+2 después del Expiry",
            "El Settlement Date siempre ocurre antes del Expiry Date",
            "El Expiry Date aplica solo a opciones americanas"
          ],
          correct: 1
        },
        {
          question: "¿Qué ocurre contablemente en el Trade Date de una operación antes de que llegue el Settlement Date?",
          options: [
            "No se registra nada hasta que ocurra el intercambio de fondos",
            "Se registran compromisos fuera de balance (Off-Balance Sheet) que reflejan los derechos y obligaciones pactados, sin que aún haya movimiento de caja real",
            "Se registra directamente el movimiento de caja en el Balance Sheet",
            "Se registra el MTM como ingreso realizado en el Income Statement"
          ],
          correct: 1
        },
        {
          question: "¿Qué es el Accrual Date y cómo se diferencia del Trade Date?",
          options: [
            "Son la misma fecha en todos los instrumentos financieros",
            "El Accrual Date es la fecha desde la cual comienza a devengarse un ingreso o gasto, como el interés de un bono o la prima de una opción, y puede o no coincidir con el Trade Date dependiendo del instrumento y la convención contable aplicada",
            "El Accrual Date siempre coincide con el Settlement Date",
            "El Accrual Date solo aplica a instrumentos de renta fija, no a derivados FX"
          ],
          correct: 1
        },
        {
          question: "Si el Trade Date de un FX Forward es el lunes 2 de junio y el contrato vence en 3 meses, ¿qué fechas son relevantes y cuál es el orden correcto?",
          options: [
            "Trade Date → Maturity Date → Settlement Date → Value Date",
            "Trade Date → Value Date (T+2 spot) → Maturity Date → Settlement Date, donde el Settlement ocurre típicamente T+2 después de la Maturity Date",
            "Value Date → Trade Date → Settlement Date → Maturity Date",
            "Todas las fechas son iguales en un FX Forward"
          ],
          correct: 1
        }
      ],
      "4": [
        {
          question: "¿Cuál es el propósito de Accounting Rules Interface en MX.3?",
          options: [
            "Diseñar reportes gráficos para clientes externos.",
            "Enlazar las cuentas dinámicas/fórmulas creadas para automatizar la asignación y ruteo de asientos contables en FX Swaps y Opciones.",
            "Configurar el acceso de usuarios al entorno de producción."
          ],
          correct: 1
        },
        {
          question: "Al configurar las reglas contables para una Opción Financiera, ¿qué se debe considerar?",
          options: [
            "La prima de la opción y sus cuentas contables específicas para reflejar la valoración justa (Premium/Liability).",
            "Únicamente el valor nominal del activo subyacente.",
            "El huso horario del país de emisión del trade."
          ],
          correct: 0
        }
      ],
      "5": [
        {
          question: "¿Qué optimizan las Accounting Flow Rules en el motor contable de MX.3?",
          options: [
            "La velocidad de internet de los servidores locales.",
            "El ruteo y procesamiento de los movimientos de flujos de caja y eventos intermedios dentro del motor contable.",
            "La exportación de estados financieros a archivos PDF."
          ],
          correct: 1
        },
        {
          question: "¿Qué se requiere para probar las reglas de flujo en el Sandbox?",
          options: [
            "Una simulación con datos simulados y posterior validación de la consistencia de los diarios.",
            "El reinicio completo de la base de datos de producción.",
            "La aprobación del Banco Central de forma síncrona."
          ],
          correct: 0
        }
      ],
      "6": [
        {
          question: "¿Qué es el Mark-to-Market (MTM) en MX.3?",
          options: [
            "La valoración contable de un instrumento financiero a precios de mercado actuales.",
            "La impresión física de los diarios contables.",
            "El proceso de cuadratura de caja de la oficina."
          ],
          correct: 0
        },
        {
          question: "¿Qué representa el proceso de End of Day (EOD) contable?",
          options: [
            "El apagado físico de los computadores del área.",
            "La ejecución de scripts automatizados de cierre contable y financiero diario para procesar trades y postear reglas oficiales.",
            "Una reunión diaria de 15 minutos del equipo de soporte."
          ],
          correct: 1
        }
      ],
      "7": [
        {
          question: "¿Qué es el Fixing Engine en MX.3?",
          options: [
            "El motor encargado de determinar y fijar tasas de interés o índices de referencia de mercado para la liquidación de flujos.",
            "Un reparador automático de bases de datos corruptas.",
            "La pantalla para modificar contraseñas de usuarios."
          ],
          correct: 0
        },
        {
          question: "¿Qué consecuencia tiene registrar una transacción con fecha valor en el pasado (Backdated Trade)?",
          options: [
            "Se cancela automáticamente el trade.",
            "El sistema genera eventos de ajuste retrospectivos para corregir la contabilidad histórica y reflejar los efectos devengados correspondientes.",
            "Se genera una alerta de fraude en el Banco Central."
          ],
          correct: 1
        }
      ],
      "8": [
        {
          question: "¿Cuál es el objetivo principal de la jornada de Dress Rehearsal ante el tutor?",
          options: [
            "Diseñar diapositivas comerciales para nuevos clientes.",
            "Demostrar el control autónomo del entorno de pruebas parametrizado ejecutando transacciones de punta a punta (FX Swap, Opciones, Futuros).",
            "Presentar el informe de horas del mes."
          ],
          correct: 1
        },
        {
          question: "¿Qué implica demostrar control de Murex Full Stack Finance?",
          options: [
            "Dominar todos los módulos integrados previamente y la lógica de negocio detrás de cada cuenta y regla contable parametrizada.",
            "Saber programar en el lenguaje C++ de la plataforma.",
            "Tener acceso root a los servidores Unix de la empresa."
          ],
          correct: 0
        }
      ],
      "9": [
        {
          question: "Al realizar el Go Live en el entorno productivo de Finance, ¿cuál es el paso crítico?",
          options: [
            "Operar de manera segura y certificada transacciones reales de FX Swap, FX Forward, Opciones y Futuros.",
            "Borrar el historial de transacciones de prueba de Sandbox.",
            "Modificar los parámetros globales del servidor principal de forma directa."
          ],
          correct: 0
        }
      ],
      "11": [
        {
          question: "¿Cómo impacta la configuración de feriados mundiales en el Accrual Engine de MX.3?",
          options: [
            "No tiene impacto contable.",
            "Determina con precisión los días hábiles para el devengo de intereses y amortización, ajustando las fechas de pago y flujos de caja contables.",
            "Bloquea la valorización de todos los derivados de tasas."
          ],
          correct: 1
        },
        {
          question: "¿Qué es el Accrual Engine?",
          options: [
            "El motor de cálculo encargado de la amortización periódica y devengo de intereses de instrumentos de inversión y cobertura.",
            "Una herramienta para importar plantillas de Excel.",
            "El sistema de control de asistencia del personal."
          ],
          correct: 0
        }
      ],
      "12": [
        {
          question: "¿Qué representa el proceso de liquidación (Liquidation / Settlement) en MX.3?",
          options: [
            "El despido de personal o término de proyectos comerciales.",
            "Los flujos de extinción de obligaciones financieras y cierres contables por liquidación de transacciones en cuentas de balance.",
            "La venta de activos fijos de la oficina."
          ],
          correct: 1
        },
        {
          question: "Bajo la óptica contable de Finance & PL, ¿qué se valida al revisar los asientos de liquidación?",
          options: [
            "La consistencia de los diarios contables y el neteo correcto de las cuentas de puente y liquidación.",
            "El color de los gráficos en el panel de control.",
            "La velocidad de transmisión de datos en red."
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
        this.showToast("🔒 ALERTA DE SEGURIDAD MUREX: El menú contextual está deshabilitado en esta sección.", "warning");
      });

      // 2. Bloquear el comando de Copiar (Ctrl + C o Cmd + C)
      el.addEventListener('copy', (event) => {
        event.preventDefault();
        this.showToast("⚠️ ACCIÓN PROHIBIDA: No está permitido copiar el material de evaluación técnica.", "danger");
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
        this.state.db.week_templates = JSON.parse(JSON.stringify(this.defaultTemplates.week_templates));
        this.state.db.questions = JSON.parse(JSON.stringify(this.defaultTemplates.questions));
        
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
        console.error("Error al cargar la Base de Datos, reiniciando...", e);
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
      badge.title = 'Sin conexión al servidor (Modo Local). Si estás en Vercel, asegúrate de configurar la variable de entorno DATABASE_URL.';
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
      this.showForbiddenError("Error 403: No tienes permisos para reiniciar la base de datos.");
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
            
            // Mark checklists as true
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
      { code: "err-acc-015", title: "ERR-ACC-015: Accrual Account Missing", description: "Ocurre cuando el motor contable de MX.3 intenta valorizar cupones devengados pero no encuentra una cuenta contable asignada en el plan contable (Chart of Accounts) para registrar el interés acumulado.", steps: ["Ingresar al módulo de parametrización contable contable en el Sandbox MX.3.", "Seleccionar el tipo de instrumento 'Bond' o 'Fixed Income'.", "Añadir una regla contable para el evento 'Accrual' (interés devengado).", "Asignar la cuenta contable de activo correspondiente al libro mayor.", "Guardar cambios, vaciar caché contable y re-procesar los asientos contables en la Sandbox."] },
      { code: "err-val-032", title: "ERR-VAL-032: Fair Value Discrepancy", description: "Ocurre cuando el Mark-to-Market del derivado (IRS/Forward) calculado por el motor de valoración difiere significativamente del valor reportado por la contraparte o el solucionario. Se debe comúnmente a discrepancias en las curvas de tasas.", steps: ["Ir al visor de curvas de tasas (Yield Curves) en MX.3.", "Validar que la curva de descuento activa (ej. Curva de Cámara) sea la configurada en los parámetros de valoración del portafolio.", "Alinear la base de cálculo de días del instrumento (ej. 30/360 vs Act/360) según la ficha técnica del cliente ficticio.", "Recargar las curvas del día y volver a ejecutar la valoración por lotes."] },
      { code: "err-ifrs-9-004", title: "ERR-IFRS-9-004: Hedge Effectiveness Failure", description: "Ocurre cuando la relación de cobertura (Hedge Relationship) entre el derivado y el activo subyacente cae fuera del rango de efectividad aceptado (80%-125%) bajo la norma IFRS 9.", steps: ["Revisar el registro de designación de cobertura en la Sandbox.", "Validar que los montos nominales y fechas de vencimiento coincidan exactamente entre el derivado y la partida cubierta.", "Ejecutar la prueba de efectividad prospectiva utilizando el método de regresión lineal.", "Si el resultado está fuera del rango, ajustar los parámetros de regresión o re-balancear el nominal del derivado de cobertura."] },
      { code: "err-sys-999", title: "ERR-SYS-999: Sandbox Database Connection Lost", description: "Error del sistema que indica pérdida de conexión con la base de datos central de pruebas del Sandbox MX.3 Chile.", steps: ["Verificar el estado de la conexión VPN o red interna.", "Reiniciar el terminal de MX.3 en tu máquina local.", "Si persiste, revisar el canal Slack #sandbox-mx3 para constatar si hay ventanas de mantenimiento activas.", "Como último recurso, notificar al tutor para que solicite el reinicio del servidor de base de datos del sandbox."] }
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
    this.showToast("Base de datos reiniciada con datos demo.");
    
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
      
      this.showToast(`Bienvenido, ${user.name}`);
      this.showView((user.role === 'admin' || user.role === 'tutor' || user.role === 'senior') ? 'view-admin' : 'view-consultant');
      this.renderCurrentView();
    } else {
      errorMsg.style.display = 'flex';
      document.getElementById('login-error-text').innerText = "Credenciales incorrectas. Inténtalo de nuevo.";
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
    this.showToast("Sesión cerrada correctamente.");
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
        this.showForbiddenError("Error 403 - Forbidden: No tienes permisos para acceder a esta sección.");
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
      statusText = 'En Riesgo Teórico';
    } else if (completedCount >= 11) {
      statusClass = '';
      statusText = 'Listo para Certificar';
    } else {
      statusClass = '';
      statusText = 'Al día (Estable)';
    }

    // Update Profile DB fields dynamically
    const dbUser = this.state.db.users.find(u => u.id === userId);
    dbUser.current_week = currentWeekNum;
    dbUser.avg_score = avgScore;
    dbUser.status = avgScore < 70 && completedCount > 3 ? 'at_risk' : 'on_track';
    this.saveDatabase();

    // Render Hero widgets
    document.getElementById('consultant-welcome-title').innerText = `Hola, ${this.state.activeUser.name}`;
    document.getElementById('consultant-progress-text').innerText = `${completedCount} de ${totalWeeks} semanas completadas (${Math.round((completedCount/totalWeeks)*100)}%)`;
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
      let stateFooter = 'Bloqueado';
      
      if (isCompleted) {
        stateClass = 'state-completed';
        stateIcon = '<i class="ti ti-circle-check"></i>';
        const score = this.getWeekScore(progress, w);
        stateFooter = score !== undefined ? `<span class="week-card-score">${score}% score</span>` : 'Aprobado';
      } else if (hasPendingDeliverable) {
        stateClass = 'state-review';
        stateIcon = '<i class="ti ti-clock"></i>';
        stateFooter = 'En revisión';
      } else if (isCurrent) {
        stateClass = 'state-current';
        stateIcon = '<i class="ti ti-circle-dot"></i>';
        stateFooter = 'En curso';
      }
      
      const card = document.createElement('div');
      card.className = `week-card ${stateClass}`;
      card.onclick = () => {
        if (!isLocked) {
          this.goToWeek(w);
        } else {
          this.showToast("Esta semana está bloqueada. Aprueba las anteriores primero.", "warning");
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
    document.getElementById('panel-week-number').innerText = `Semana ${weekNum} · ${template.phase}`;
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
      statusBadge.innerText = 'Completada';
    } else if (isReview) {
      statusBadge.classList.add('review');
      statusBadge.innerText = 'En revisión';
    } else {
      statusBadge.classList.add('current');
      statusBadge.innerText = 'En curso';
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
    const tutorName = tutorObj ? tutorObj.name : 'tu tutor';

    // Update help text to reflect read-only status for onboarding juniors
    const paneHelp = document.querySelector('#pane-checklist .pane-help');
    if (paneHelp) {
      paneHelp.innerHTML = `Visualiza tus tareas prácticas de la semana. Solo tu tutor asignado <strong>(${tutorName})</strong> puede actualizarlas y marcarlas como completadas.`;
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
                            ? '<span class="induction-badge preview"><i class="ti ti-lock" style="margin-right: 3px;"></i> Bloqueado</span>' 
                            : (isChecked ? '<span class="induction-badge ok"><i class="ti ti-circle-check" style="margin-right: 3px;"></i> Completado</span>' : '<span class="induction-badge pending"><i class="ti ti-pencil" style="margin-right: 3px;"></i> Editable</span>')
                        }
                    </td>
                </tr>
            `;
        });

        // CORRECCIÓN DE LA CABECERA: Remueve la etiqueta confusa de 'Modo Lectura' si está en semanas habilitadas
        const badgeEncabezado = esSemanaBloqueada 
            ? '<span class="induction-badge readonly"><i class="ti ti-lock" style="margin-right: 3px;"></i> Vista Protegida</span>' 
            : '<span class="induction-badge ok"><i class="ti ti-edit" style="margin-right: 3px;"></i> Autogestión Activa</span>';

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
            <i class="ti ti-folder-open"></i> Fit for Banking
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
                <i class="ti ti-external-link"></i> Ir al Curso
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
              ? '<span class="induction-badge preview"><i class="ti ti-lock" style="margin-right: 3px;"></i> Bloqueado</span>' 
              : (isChecked ? '<span class="induction-badge ok"><i class="ti ti-circle-check" style="margin-right: 3px;"></i> Completado</span>' : '<span class="induction-badge pending"><i class="ti ti-pencil" style="margin-right: 3px;"></i> Pendiente</span>')
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
              <th style="width: 50px; text-align: center; padding: 8px; font-size: 0.75rem; color: var(--neutral-muted);">Estado</th>
              <th style="text-align: left; padding: 8px; font-size: 0.75rem; color: var(--neutral-muted);">Módulo / Video de Onboarding</th>
              <th style="text-align: right; padding: 8px; font-size: 0.75rem; color: var(--neutral-muted); padding-right: 15px;">Estatus</th>
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
      btnNext.setAttribute('title', `Contenido bloqueado: Semana ${currentWeekNum + 1} bloqueada`);
    } else {
      btnNext.disabled = false;
      btnNext.setAttribute('title', 'Avanzar semana');
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

    // Actualizar título de la barra de herramientas según la semana
    const gameToolbarTitle = document.querySelector('#workspace-classification-game-zone .game-brand-title');
    if (gameToolbarTitle) {
      if (weekNum === 2) {
        gameToolbarTitle.innerHTML = `<i class="ti ti-layout-grid-add" style="color: var(--primary);"></i> Semana 2: Desafío de Clasificación (Evaluación Final)`;
      } else {
        gameToolbarTitle.innerHTML = `<i class="ti ti-layout-grid-add" style="color: var(--primary);"></i> Semana 1: Desafío de Clasificación (Práctica)`;
      }
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
            msgEl.innerText = "Evaluación Finalizada: Tu puntaje ha sido registrado en la base de datos. Solo se permite 1 intento.";
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
      this.showToast("Solo se permite un intento para la evaluación de clasificación de la Semana 2.", "warning");
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
            <strong style="color: var(--neutral-dark);">Progreso de Evaluación:</strong> ${attemptedCount} de 6 instrumentos evaluados.
          </div>
          <div>
            <strong style="color: var(--neutral-dark); margin-right: 0.5rem;">Calificación Promedio:</strong> 
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
          statusHtml = `<span style="font-size: 0.75rem; font-weight: bold; color: var(--success); margin-right: 1rem;">Calificación: ${score}%</span>`;
          btnLabel = 'Review';
        } else {
          statusHtml = `<span style="font-size: 0.75rem; font-weight: bold; color: var(--warning-text); margin-right: 1rem;">Pendiente (1 Intento)</span>`;
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
      
      const confirmSubmit = confirm("¿Estás seguro de que deseas validar tus asientos? Solo tienes 1 intento para este instrumento y tu calificación se guardará de forma permanente.");
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
    this.showToast("Solo tu tutor a cargo puede modificar este checklist.", "danger");
  },

  toggleTraineeChecklistItem(traineeId, weekNum, itemIdx) {
    const activeUserId = this.state.activeUser.id;
    const tutorId = this.state.db.tutor_junior_mapping[traineeId];
    
    if (activeUserId !== tutorId) {
      this.showToast("Solo el tutor a cargo puede modificar este checklist.", "danger");
      return;
    }

    const progress = this.state.db.consultant_progress[traineeId];
    if (!progress.checklist_states[weekNum]) {
      progress.checklist_states[weekNum] = {};
    }

    const currentState = progress.checklist_states[weekNum][itemIdx] === true;
    progress.checklist_states[weekNum][itemIdx] = !currentState;
    this.saveDatabase();

    // Re-render
    this.loadInspectedWeekDetail(traineeId, weekNum);
    this.showToast("Checklist actualizado.");
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
      document.getElementById('evaluation-completed-msg').innerText = `Aprobado con éxito. Has superado el umbral requerido del ${template.knowledge_test?.min_passing_score || 70}%.`;
    } else if (isFailedNoAttempts) {
      // Failed and out of attempts for week 1
      if (failedState) {
        failedState.style.display = 'flex';
        const failedScoreEl = document.getElementById('evaluation-failed-score');
        const failedMsgEl = document.getElementById('evaluation-failed-msg');
        if (failedScoreEl) failedScoreEl.innerText = `${testScore}%`;
        if (failedMsgEl) {
          failedMsgEl.innerText = `Has reprobado la evaluación con un ${testScore}%. Has agotado tu único intento disponible para esta semana.`;
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
      statusAlert.innerHTML = '<i class="ti ti-alert-circle"></i> Pendiente de entrega';
      
      if (allChecked) {
        uploaderBox.style.display = 'flex';
      } else {
        uploaderBox.style.display = 'flex';
        uploaderBox.style.opacity = '0.5';
        uploaderBox.style.cursor = 'not-allowed';
        uploaderBox.onclick = (e) => {
          e.stopPropagation();
          this.showToast("Primero completa todo el Checklist semanal.", "warning");
        };
      }
    } else {
      // File uploaded
      fileRow.style.display = 'flex';
      document.getElementById('uploaded-file-name').innerText = fileData.fileName;
      
      const fileTrashBtn = fileRow.querySelector('.btn-icon-danger');
      
      if (fileData.status === 'pending_review') {
        statusAlert.className = 'deliverable-alert warning';
        statusAlert.innerHTML = '<i class="ti ti-clock"></i> Enviado. Esperando revisión del tutor';
        fileTrashBtn.style.display = 'none'; // Lock deletion during review
      } else if (fileData.status === 'approved') {
        statusAlert.className = 'deliverable-alert success';
        statusAlert.innerHTML = '<i class="ti ti-circle-check"></i> Entregable Aprobado';
        fileTrashBtn.style.display = 'none';
      } else if (fileData.status === 'rejected') {
        statusAlert.className = 'deliverable-alert danger';
        statusAlert.innerHTML = '<i class="ti ti-alert-triangle"></i> Rechazado por tutor. Sube una nueva versión';
        fileTrashBtn.style.display = 'flex'; // Allow re-upload
      } else {
        // Mock temporary selected file (before official submission)
        statusAlert.className = 'deliverable-alert info';
        statusAlert.innerHTML = '<i class="ti ti-file-upload"></i> Archivo cargado. Listo para enviar';
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
        this.renderPantallaBloqueo("⛔ INSTANCE LOCKED: INTENTO AGOTADO", "Has completado el límite máximo de 1 intento permitido para esta semana de rampa.");
        return;
    }

    // REGLA DE CANDADO: Semana 3 en adelante congeladas
    if (this.quizEngine.semana > 2) {
        if (ping) {
          ping.style.backgroundColor = "var(--neutral-muted)";
          ping.className = "w-2 h-2 rounded-full inline-block";
        }
        this.renderPantallaBloqueo("🔒 EVALUACIÓN BLOQUEADA (PREVIEW)", `El material de certificación para la Semana ${this.quizEngine.semana} se encuentra en etapa de validación instruccional.`);
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
                    📝 EVALUACIÓN DISPONIBLE
                </p>
                <h4 style="color: var(--neutral-dark); font-size: 14px; font-weight: bold; margin-bottom: 12px; text-transform: uppercase;">
                    Validación Teórica Semanal
                </h4>
                <p style="font-size: 12px; color: var(--neutral-muted); line-height: 1.5; max-width: 340px; margin: 0 auto 20px auto;">
                    Esta evaluación consta de preguntas de selección múltiple sobre los contenidos de MX.3. Una vez iniciada, dispones de 25 minutos. 
                    <br><strong>Límite: 1 intento permitido.</strong>
                </p>
                <button class="btn btn-primary" onclick="app.irAPantallaConfirmacion()" style="padding: 8px 24px; font-weight: 600; font-size: 0.85rem; letter-spacing: 0.05em;">
                    COMENZAR EVALUACIÓN
                </button>
            </div>
        `;
    } 
    // PANTALLA 2: ADVERTENCIA / CONFIRMACIÓN INTEGRADA
    else if (this.quizEngine.stage === 2) {
        screen.innerHTML = `
        <div style="text-align: center; padding: 24px 16px; font-family: var(--font-primary); background-color: #fff4e5; border-radius: 8px; border: 1px dashed #ffe8cc; margin: 10px 0;">
            <p style="color: var(--warning-text); font-weight: bold; font-size: 0.85rem; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; gap: 6px;">
                ⚠️ ADVERTENCIA CRÍTICA de ramp-up
            </p>
            <p style="color: var(--neutral-dark); font-size: 13px; font-weight: 600; margin-bottom: 12px; max-width: 320px; margin-left: auto; margin-right: auto; line-height: 1.4;">
                Una vez iniciado el test, no se puede pausar ni salir. Si abandonas la pestaña o cierras el navegador, tu intento se registrará como fallido con 0%.
            </p>
            <div style="display: flex; gap: 12px; justify-content: center; margin-top: 16px;">
                <button class="btn btn-success" onclick="app.comenzarEvaluacionEfectiva()" style="padding: 6px 16px; font-size: 0.8rem; font-weight: 600;">
                    ACEPTAR
                </button>
                <button class="btn btn-outline btn-neutral" onclick="app.initEvaluacionSemanalUI(${this.quizEngine.semana})" style="padding: 6px 16px; font-size: 0.8rem; font-weight: 600;">
                    CANCELAR
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
                <span>PROCESANDO: PREGUNTA ${idx + 1} DE ${quizPool.length}</span>
                <span style="color: var(--primary);">PROGRESO: ${Math.round((idx / quizPool.length) * 100)}%</span>
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
                    FINALIZAR TEST
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

    if (aprobo) {
        if (!progress.completed_weeks.includes(this.quizEngine.semana)) {
            progress.completed_weeks.push(this.quizEngine.semana);
        }
    }

    this.saveDatabase();
    this.renderConsultantView();
  },

  // Mock upload handlers
  handleMockUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    if (file.type !== 'application/pdf') {
      this.showToast("Solo se aceptan archivos PDF.", "danger");
      return;
    }
    
    const weekNum = this.state.selectedWeekNum;
    const userId = this.state.activeUser.id;
    const progress = this.state.db.consultant_progress[userId];
    
    // Simulate upload saving in local state (metadata only, not base64 to prevent storage blowup)
    progress.deliverables[weekNum] = {
      fileName: file.name,
      fileSize: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      status: 'draft', // Temporary draft state before clicking submit
      submittedAt: new Date().toISOString()
    };
    
    this.saveDatabase();
    this.renderConsultantView();
    this.showToast("Archivo cargado localmente. Haz clic en Enviar.");
  },

  removeUploadedFile() {
    const weekNum = this.state.selectedWeekNum;
    const userId = this.state.activeUser.id;
    const progress = this.state.db.consultant_progress[userId];
    
    delete progress.deliverables[weekNum];
    this.saveDatabase();
    this.renderConsultantView();
    this.showToast("Archivo eliminado.");
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
      this.showToast("Entregable enviado con éxito al tutor.");
      
      // SMTP Alert simulation to Tutor
      const mapping = this.state.db.tutor_junior_mapping[userId];
      if (mapping) {
        const tutor = this.state.db.users.find(u => u.id === mapping);
        if (tutor) {
          this.sendSMTPAlert(
            "tutor",
            tutor.email,
            `Entregable Pendiente de Revisión: ${this.state.activeUser.name}`,
            `Estimado(a) ${tutor.name},\n\nTu Junior asignado(a) ${this.state.activeUser.name} ha subido el entregable para la Semana ${weekNum} (${template.title}) y está listo para tu calificación.`
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
      this.showToast("No tienes más intentos disponibles para esta evaluación.", "danger");
      return;
    }
    
    // Confirm starting the test
    const confirmMsg = weekNum === 1
      ? "¿Estás seguro de que deseas comenzar la evaluación de la Semana 1? Tienes un único intento disponible y 50 preguntas que responder."
      : "¿Estás seguro de que deseas comenzar la evaluación?";
    if (!confirm(confirmMsg)) {
      return;
    }
    
    // Pull questions
    let quizPool = this.state.db.questions[weekNum];
    if (!quizPool) {
      // Fallback procedural questions if week questions not seeded
      const template = this.state.db.week_templates.find(wt => wt.week_number === weekNum);
      const topicsText = template ? template.description : "temas del módulo";
      quizPool = [
        {
          question: `¿Cuál es el factor crítico en el éxito de ${template.title}?`,
          options: [
            "Configurar de forma estructurada según la documentación y validar resultados.",
            "Saltarse las validaciones teóricas y pasar directo a producción.",
            "Esperar que el soporte global resuelva todos los pasos de configuración."
          ],
          correct: 0
        },
        {
          question: `¿Qué estándar rige principalmente el desarrollo de ${template.title}?`,
          options: [
            "Directrices globales Murex y normativas contables asociadas.",
            "Leyes locales no vinculadas a finanzas.",
            "Criterios informales del equipo de desarrollo local."
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
    
    document.getElementById('test-question-counter').innerText = `Pregunta ${idx + 1} de ${total}`;
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
      this.showToast("Por favor selecciona una alternativa.", "warning");
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
        this.showToast("Debes responder todas las preguntas.", "warning");
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
      alertMsg = `¡Prueba Aprobada con ${scorePercentage}%!`;
      
      // Auto unlock logic if NO deliverable is required
      if (!template.deliverable) {
        if (!progress.completed_weeks.includes(weekNum)) {
          progress.completed_weeks.push(weekNum);
          
          // Auto trigger complete week 12 logic if user finishes it
          if (weekNum === 12) {
            this.triggerCompletionCertificate(userId);
          }
        }
        alertMsg += " Has desbloqueado el siguiente módulo.";
      } else {
        alertMsg += " Sube tu Entregable en la pestaña correspondiente para revisión final.";
      }
      
      // SMTP Alert on approved test
      this.sendSMTPAlert(
        "junior",
        this.state.activeUser.email,
        `Prueba Aprobada - Semana ${weekNum}`,
        `Hola ${this.state.activeUser.name},\n\nHas aprobado con éxito la prueba teórica de la Semana ${weekNum} con un resultado de ${scorePercentage}%.\n\n${template.deliverable ? 'Recuerda que debes subir tu entregable práctico para completar el módulo.' : 'El siguiente módulo ya está desbloqueado en tu cronograma.'}`
      );
    } else {
      alertType = "danger";
      alertMsg = `Prueba Reprobada con ${scorePercentage}%. Mínimo requerido: ${minScore}%. Inténtalo de nuevo.`;
      
      // Trigger SMTP alert to Manager for Critical Block (failed twice or more)
      const attempts = progress.test_attempts[weekNum] || 0;
      if (attempts >= 2) {
        this.sendSMTPAlert(
          "admin",
          "luana@murex.cl",
          `Alerta de Bloqueo Crítico: ${this.state.activeUser.name}`,
          `Estimado(a) Manager Luana Ortega,\n\nSe ha detectado un bloqueo prolongado del Junior Consultant ${this.state.activeUser.name} en la Semana ${weekNum} (${template.title}).\n\nEl consultor ha reprobado la evaluación teórica por segunda vez consecutiva con una calificación de ${scorePercentage}% (mínimo de aprobación: ${minScore}%).`
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
    document.getElementById('cert-date').innerText = new Date().toLocaleDateString('es-CL', options);
    
    // Render modal
    document.getElementById('completion-certificate-modal').style.display = 'flex';
  },

  closeCertificateModal() {
    document.getElementById('completion-certificate-modal').style.display = 'none';
  },

  // Consultant Score ChartJS Render
  renderConsultantChart(progress) {
    if (typeof Chart === 'undefined') {
      console.warn("Chart.js no está cargado. Omitiendo renderizado de gráfico.");
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
      counterText.innerText = `En ${diffDays} días, ${diffHours} horas y ${diffMins} minutos.`;
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
        roleBadge.innerHTML = '<i class="ti ti-users"></i> Panel Senior';
      } else {
        roleBadge.innerHTML = isTutor ? '<i class="ti ti-users"></i> Panel de Tutoría' : '<i class="ti ti-shield-check"></i> Panel de Administración';
      }
    }
    if (welcomeTitle) {
      if (isSenior) {
        welcomeTitle.innerText = `Panel Senior — Consultor: ${this.state.activeUser.name}`;
      } else {
        welcomeTitle.innerText = isTutor ? `Panel de Tutoría — Mentor: ${this.state.activeUser.name}` : `Bienvenida, ${this.state.activeUser.name}`;
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
        const alertBadgeText = isAtRisk ? '⚠ Alerta' : '✓ Normal';

        // Check if has pending deliverable
        const hasReview = Object.values(prog.deliverables).some(d => d.status === 'pending_review');
        const actionBtnLabel = hasReview ? 'Revisar ⚠' : 'Inspeccionar';
        const actionBtnClass = hasReview ? 'btn-warning' : 'btn-outline';

        // Render Tutor Assignment Cell
        let tutorMappingHtml = '';
        const mappedTutorId = this.state.db.tutor_junior_mapping[t.id];
        const mappedTutorObj = this.state.db.users.find(u => u.id === mappedTutorId);
        const mappedTutorName = mappedTutorObj ? mappedTutorObj.name : 'Sin asignar';
        
        if (isAdmin) {
          // Render dropdown for Manager to dynamically change mapping
          const tutorsList = this.state.db.users.filter(u => u.role === 'tutor' || u.role === 'senior');
          let optionsHtml = tutorsList.map(tutor => 
            `<option value="${tutor.id}" ${tutor.id === mappedTutorId ? 'selected' : ''}>${tutor.name}</option>`
          ).join('');
          tutorMappingHtml = `<select class="tutor-mapping-select" onchange="app.changeTutorMapping('${t.id}', this.value)">
            <option value="" ${!mappedTutorId ? 'selected' : ''}>-- Asignar Tutor --</option>
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
          <td>Semana ${t.current_week}</td>
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
    this.showToast(`Inspeccionando a ${user.name}`);
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
      opt.innerText = `Semana ${w} ${w > maxUnlockedWeek ? '(Bloqueada)' : ''}`;
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
      this.showToast(`Error al cambiar pestaña: ${err.message}`);
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
              <i class="ti ti-folder-open"></i> Fit for Banking
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
                  <i class="ti ti-external-link"></i> Ir al Curso
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
                ? '<span class="induction-badge ok"><i class="ti ti-check" style="margin-right: 3px;"></i> Completado</span>' 
                : '<span class="induction-badge pending"><i class="ti ti-clock" style="margin-right: 3px;"></i> Pendiente</span>'
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
        progressText.innerText = `${completedCount} de ${totalItems} completados`;
      }
      if (progressBar) {
        progressBar.style.width = `${percent}%`;
      }
      if (progressPercent) {
        progressPercent.innerText = `${percent}%`;
      }

      // Calculate General Onboarding Progress (across all 36 items: Financial, Accounting, and Liquidation)
      let generalTotal = 36;
      let generalCompleted = 0;

      // 1. Financial Markets (21 items)
      mxlearnOnboardingModules.financial_markets.items.forEach(item => {
        if (this.getOnboardingCheckState(userId, item)) {
          generalCompleted++;
        }
      });

      // 2. Accounting Modules (14 items across 3 subfolders)
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
        genText.innerText = `${generalCompleted} de ${generalTotal} videos/módulos completados`;
      }
      if (genBar) {
        genBar.style.width = `${generalPercent}%`;
      }
      if (genPercent) {
        genPercent.innerText = `${generalPercent}%`;
      }
    } catch (err) {
      console.error("Error rendering inspected onboarding modules:", err);
      this.showToast(`Error al cargar módulos onboarding: ${err.message}`);
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
        statsEl.innerText = `${checkedCount} de ${totalItems} hitos completados`;
      }
    } catch (err) {
      console.error("Error rendering inspected passport:", err);
      this.showToast(`Error al cargar pasaporte: ${err.message}`);
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
      this.showToast(`¡Intento de prueba desbloqueado para ${this.state.inspectedUser.name}!`);
      
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
      this.showToast(`Error al desbloquear intento: ${err.message}`, "danger");
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
      statusLabel.innerText = 'Bloqueado';
    } else if (isCompleted) {
      statusLabel.classList.add('completed');
      statusLabel.innerText = 'Completado';
    } else if (isReview) {
      statusLabel.classList.add('review');
      statusLabel.innerText = 'Por Revisar';
    } else {
      statusLabel.classList.add('current');
      statusLabel.innerText = 'En Curso';
    }
    
    document.getElementById('inspect-week-card-title').innerText = `Semana ${weekNum}: ${template.title}`;
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
        subSections[0].innerHTML = `<i class="ti ti-list-check"></i> Estado de Checklist <span class="badge badge-green" style="font-size:0.6rem; padding:2px 6px; margin-left: 8px;">Tutor a Cargo (Editable)</span>`;
      } else {
        subSections[0].innerHTML = `<i class="ti ti-list-check"></i> Estado de Checklist <span class="badge" style="font-size:0.6rem; padding:2px 6px; margin-left: 8px; background-color: var(--neutral-light); color: var(--neutral-muted); border: 1px solid var(--neutral-border);">Solo Lectura</span>`;
      }
    }
    
    template.checklist_items.forEach((item, idx) => {
      const isChecked = checklistState[idx] === true;
      const li = document.createElement('li');
      li.className = 'inspect-checklist-item';
      
      if (isTutorInCharge && !isCompleted && !isLocked) {
        li.style.cursor = 'pointer';
        li.onclick = () => this.toggleTraineeChecklistItem(userId, weekNum, idx);
        li.title = "Haga clic para marcar/desmarcar esta tarea";
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
      
      let detailsText = `Umbral: ${template.knowledge_test?.min_passing_score || 70}%\nIntentos totales: ${attempts}`;
      if (testTime) {
        detailsText += `\nTiempo empleado: ${testTime}`;
      }
      detailsText += `\nResultado: ${testScore >= (template.knowledge_test?.min_passing_score || 70) ? 'Aprobado' : 'Reprobado'}`;
      
      scoreDetails.innerText = detailsText;
      if (actionArea) actionArea.style.display = 'block';
    } else {
      scoreVal.innerText = '-';
      scoreDetails.innerText = 'Evaluación teórica pendiente.';
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
          
          gameDetailsDisplay.innerText = `Respuestas correctas: ${gameScore.score}/${gameScore.total}\nEstado: Completado\nFecha: ${new Date(gameScore.completedAt).toLocaleDateString('es-CL')}`;
        } else {
          gameScoreDisplay.innerText = '-';
          gameDetailsDisplay.innerText = 'Desafío de clasificación de cuentas pendiente.';
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
        
        const dateFormatted = new Date(deliverable.submittedAt).toLocaleDateString('es-CL');
        document.getElementById('inspect-file-date').innerText = `Enviado: ${dateFormatted} (${deliverable.fileSize})`;
        
        if (deliverable.status === 'pending_review') {
          actionBtns.style.display = 'flex';
        } else if (deliverable.status === 'approved') {
          fileRow.querySelector('.file-name').innerHTML = `${deliverable.fileName} <span class="badge badge-green" style="font-size:0.6rem; padding:2px 6px;">Aprobado</span>`;
        } else if (deliverable.status === 'rejected') {
          fileRow.querySelector('.file-name').innerHTML = `${deliverable.fileName} <span class="badge badge-red" style="font-size:0.6rem; padding:2px 6px;">Rechazado</span>`;
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
  downloadMockFile(e) {
    e.preventDefault();
    this.showToast("Descargando archivo adjunto (Simulado)...");
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
        // Mark week as completed
        if (!progress.completed_weeks.includes(weekNum)) {
          progress.completed_weeks.push(weekNum);
          
          if (weekNum === 12) {
            this.triggerCompletionCertificate(userId);
          }
        }
        this.showToast(`Entregable aprobado. Semana ${weekNum} completada.`);
      } else {
        this.showToast(`Entregable rechazado. El consultor deberá resubir.`, "danger");
      }
      
      this.saveDatabase();
      
      // SMTP Alert simulation to Junior
      this.sendSMTPAlert(
        "junior",
        trainee.email,
        `Resultado de Evaluación de Entregable - Semana ${weekNum}`,
        `Hola ${trainee.name},\n\nTu tutor ha calificado tu entregable práctico de la Semana ${weekNum} como: ${approve ? 'APROBADO' : 'RECHAZADO'}.\n\nFeedback del tutor: "${progress.comments[weekNum] || 'Sin comentarios adicionales.'}"`
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
    this.showToast("Comentario guardado. Visible para el consultor.");
    this.renderAdminView();
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
          fileName: `bypass_administrativo_s${weekNum}.pdf`,
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
      this.showToast(`Forzado de aprobación exitoso para Semana ${weekNum}.`, "warning");
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
      labels.push(`Semana ${w}`);
      
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
      this.showToast(`Tutor desasignado.`);
      this.renderAdminView();
      return;
    }
    
    this.state.db.tutor_junior_mapping[traineeId] = tutorId;
    this.saveDatabase();
    
    this.showToast(`Tutor ${tutor.name} asignado a ${trainee.name}.`);
    
    // SMTP Alert simulation
    this.sendSMTPAlert(
      "tutor",
      tutor.email,
      `Nueva Asignación de Tutoría: ${trainee.name}`,
      `Estimado(a) ${tutor.name},\n\nEl Manager del área te ha asignado como Tutor a cargo del proceso de rampa (Habilitación Activa) del Junior Consultant ${trainee.name}.\n\nYa puedes acceder a tu panel de control para visualizar su progreso, recibir notificaciones y calificar sus entregables semanales.`
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
      tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 20px; color:var(--neutral-muted);">No tienes solicitudes pendientes todavía.</td></tr>`;
      return;
    }
    
    // Sort by date descending
    myRequests.sort((a, b) => new Date(b.block_day) - new Date(a.block_day));
    
    myRequests.forEach(e => {
      const tr = document.createElement('tr');
      const expertObj = this.state.db.users.find(u => u.id === e.expert_id);
      const expertName = expertObj ? expertObj.name : 'N/A';
      const formattedDate = new Date(e.block_day + "T00:00:00").toLocaleDateString('es-CL');
      
      let statusKey = e.status;
      if (statusKey === 'pendiente_aprobacion') statusKey = 'solicitada';
      if (statusKey === 'aprobado') statusKey = 'aprobada';
      if (statusKey === 'rechazado') statusKey = 'rechazada';
      if (statusKey === 'ejecutado') statusKey = 'ejecutada';

      let badgeLabel = 'Pendiente';
      let badgeClass = 'badge-solicitada';
      if (statusKey === 'aprobada') {
        badgeLabel = 'Aceptada';
        badgeClass = 'badge-aprobada';
      } else if (statusKey === 'rechazada') {
        badgeLabel = 'Cancelada';
        badgeClass = 'badge-rechazada';
      } else if (statusKey === 'ejecutada') {
        badgeLabel = 'Ejecutada';
        badgeClass = 'badge-ejecutada';
      }
      
      const cleanTitle = e.title.replace(/^(Soporte Extra:|Coaching:|Tutoría:)\s*/, '');
      const typeLabel = e.type === 'coaching' ? 'Coaching' : (e.type === 'tutoring' ? 'Tutoría' : 'Soporte');

      tr.innerHTML = `
        <td><strong>${cleanTitle} <span class="badge" style="font-size:0.6rem; padding: 1px 4px; font-weight: normal; background-color: var(--neutral-light); border: 1px solid var(--neutral-border);">${typeLabel}</span></strong></td>
        <td>${expertName}</td>
        <td>${formattedDate}<br><span style="font-weight:600; font-size:0.8rem;">${e.time_start} - ${e.time_end} (${e.planned_minutes} min)</span></td>
        <td><span class="calendar-event-card-status ${badgeClass}">${badgeLabel}</span></td>
        <td><span style="font-size:0.8rem; color:var(--neutral-muted);">${e.block_reason || 'Sin comentarios'}</span></td>
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
      tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 20px; color:var(--neutral-muted);">No has registrado sesiones en tu bitácora todavía.</td></tr>`;
      return;
    }
    
    // Sort chronologically desc
    logs.sort((a,b) => new Date(b.date) - new Date(a.date));
    
    logs.forEach(l => {
      const tr = document.createElement('tr');
      
      let idsClass = 'ids-low';
      let idsLabel = 'Bajo (Autónomo)';
      if (l.ids >= 4) {
        idsClass = 'ids-high';
        idsLabel = 'Alto (Dependiente)';
      } else if (l.ids >= 3) {
        idsClass = 'ids-medium';
        idsLabel = 'Medio (Moderado)';
      }
      
      tr.innerHTML = `
        <td>${new Date(l.date).toLocaleDateString('es-CL')}</td>
        <td>${l.tutor_name}</td>
        <td>${l.topic}</td>
        <td>${l.duration} minutos</td>
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
    
    this.showToast("Sesión de mentoría guardada en tu bitácora.");
    
    // SMTP Alert simulation
    const mapping = this.state.db.tutor_junior_mapping[this.state.activeUser.id];
    if (mapping) {
      const tutor = this.state.db.users.find(u => u.id === mapping);
      if (tutor) {
        this.sendSMTPAlert(
          "tutor",
          tutor.email,
          `Nueva Sesión de Bitácora: ${this.state.activeUser.name}`,
          `Estimado(a) ${tutor.name},\n\nTu Junior asignado(a) ${this.state.activeUser.name} ha registrado una sesión de mentoría en su bitácora:\n\nFecha: ${date}\nTema: ${topic}\nDuración: ${duration} mins\nÍndice de Dependencia de Soporte (IDS): ${ids}/5.`
        );
      }
    }
  },

  searchTroubleshooting() {
    const input = document.getElementById('trouble-search-input').value.trim().toLowerCase();
    const resultsContainer = document.getElementById('trouble-search-results');
    
    if (!input) {
      this.showToast("Por favor ingresa un término de búsqueda.", "warning");
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
          <h4>No se encontraron resultados</h4>
          <p>No hay guías documentadas para '${input}'. Intenta con 'ERR-ACC-015', 'discrepancia', 'cobertura' o consulta a tu tutor.</p>
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
        <strong style="font-size:0.85rem; text-transform:uppercase; color:var(--neutral-muted); font-weight:600;">Instrucciones de Solución Paso a Paso:</strong>
        <ul class="trouble-solution-steps">
          ${stepsHtml}
        </ul>
      `;
      resultsContainer.appendChild(card);
    });
    
    this.showToast(`Se encontraron ${matches.length} coincidencias.`);
  },

  sendSMTPAlert(toRole, toEmail, subject, body) {
    if (!this.state.db.smtp_outbox) {
      this.state.db.smtp_outbox = [];
    }
    
    const newMail = {
      id: `mail-${Math.random().toString(36).substr(2, 9)}`,
      to_role: toRole,
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
          <p>No se han registrado envíos de correos automáticos SMTP todavía.</p>
        </div>
      `;
      return;
    }
    
    if (emptyState) emptyState.style.display = 'none';
    
    list.innerHTML = '';
    
    outbox.forEach(m => {
      const card = document.createElement('div');
      card.className = 'smtp-mail-card';
      
      let roleLabel = 'Consultor';
      if (m.to_role === 'tutor') roleLabel = 'Tutor asignado';
      if (m.to_role === 'admin') roleLabel = 'Manager global';
      
      const sentTime = new Date(m.sent_at).toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      
      card.innerHTML = `
        <div class="smtp-mail-header">
          <strong>Para:</strong> ${m.to_email} (${roleLabel})<br>
          <strong>Enviado:</strong> Hoy, ${sentTime} via SMTP Servidor
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
    
    this.showToast("Hito de certificación actualizado.");
    
    // Check if all certification checklist hitos are checked
    const hitos = this.state.db.cert_checklists[userId];
    const allChecked = hitos[1] && hitos[2] && hitos[3] && hitos[4];
    
    if (allChecked) {
      this.showToast(`¡Todos los hitos de certificación han sido validados para ${this.state.inspectedUser.name}!`);
      
      // Send SMTP alert to Manager
      this.sendSMTPAlert(
        "admin",
        "luana@murex.cl",
        `Habilitación Certificada: ${this.state.inspectedUser.name}`,
        `Estimado(a) Manager Luana Ortega,\n\nTodos los hitos de certificación técnica y habilidades operativas han sido aprobados por el Tutor de ${this.state.inspectedUser.name}.\n\nEl consultor está formalmente habilitado para salir a clientes reales. Se ha emitido el Certificado de Habilitación.`
      );
      
      // Send to Junior
      this.sendSMTPAlert(
        "junior",
        this.state.inspectedUser.email,
        "¡Felicitaciones! Has completado tu Habilitación Técnica",
        `Estimado(a) ${this.state.inspectedUser.name},\n\nHemos completado tu evaluación final de onboarding de 12 semanas. Tu tutor y manager han certificado tus competencias técnicas Finance & PL.\n\nYa puedes descargar tu Certificado de Habilitación en la plataforma.`
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
            const expertName = this.state.db.users.find(u => u.id === expertId)?.name || 'Experto';
            return {
              collision: true,
              reason: `Conflicto en agenda de ${expertName}: Ya tiene programada la sesión "${e.title}" (${e.time_start} - ${e.time_end})`
            };
          }
        }
        if (juniorId && e.junior_id === juniorId) {
          const juniorName = this.state.db.users.find(u => u.id === juniorId)?.name || 'Junior';
          return {
            collision: true,
            reason: `Conflicto en agenda de ${juniorName}: Ya tiene programada la sesión "${e.title}" (${e.time_start} - ${e.time_end})`
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
    const activeRole = this.state.activeUser ? this.state.activeUser.role : '';
    
    // Hide/show tabs dynamically based on user role
    const tabSchedule = document.getElementById('admin-session-tab-schedule');
    const tabPending = document.getElementById('admin-session-tab-pending');
    const tabCert = document.getElementById('admin-session-tab-certification');
    const tabTeam = document.getElementById('admin-session-tab-team');
    
    if (tabSchedule) tabSchedule.style.display = (activeRole === 'admin' || activeRole === 'tutor') ? 'inline-flex' : 'none';
    if (tabPending) tabPending.style.display = (activeRole === 'admin' || activeRole === 'tutor') ? 'inline-flex' : 'none';
    if (tabCert) tabCert.style.display = (activeRole === 'admin' || activeRole === 'tutor') ? 'inline-flex' : 'none';
    if (tabTeam) tabTeam.style.display = (activeRole === 'admin') ? 'inline-flex' : 'none';
    
    // Block unauthorized tab switching at logic level
    if (activeRole === 'senior' && tabName !== 'calendar') {
      tabName = 'calendar';
    }
    if (tabName === 'team' && activeRole !== 'admin') {
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
      this.showToast("No puedes agendar tutorías en fechas pasadas.", "warning");
      return;
    }
    
    // Collision check
    const collisionResult = this.checkCollision(date, time, duration, this.state.activeUser.id, juniorId);
    if (collisionResult.collision) {
      alert(`⚠️ ERROR DE COLISIÓN:\n\n${collisionResult.reason}\n\nPor favor propone otro bloque horario.`);
      return;
    }

    const startOfOnboarding = new Date("2026-04-20T00:00:00");
    const diffTime = Math.abs(selectedDate - startOfOnboarding);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    let weekNum = Math.ceil((diffDays + 1) / 7);
    if (weekNum < 1) weekNum = 1;
    if (weekNum > 12) weekNum = 12;

    const [h, m] = time.split(':').map(Number);
    const endTotalMins = h * 60 + m + duration;
    const endH = Math.floor(endTotalMins / 60).toString().padStart(2, '0');
    const endM = (endTotalMins % 60).toString().padStart(2, '0');
    const endTime = `${endH}:${endM}`;

    const newEvent = {
      id: `ev-${Math.random().toString(36).substr(2, 9)}`,
      title: `Tutoría: ${topic}`,
      type: "tutoring",
      junior_id: juniorId,
      expert_id: this.state.activeUser.id,
      block_day: date,
      time_start: time,
      time_end: endTime,
      planned_minutes: duration,
      executed_minutes: null,
      status: "aprobada",
      block_reason: `Tutoría agendada directamente por el Tutor ${this.state.activeUser.name}`,
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
    
    this.showToast("Sesión de tutoría agendada con éxito.");
    
    // Send SMTP to junior
    const junior = this.state.db.users.find(u => u.id === juniorId);
    if (junior) {
      this.sendSMTPAlert(
        "junior",
        junior.email,
        "Nueva Tutoría Agendada",
        `Estimado(a) ${junior.name},\n\nTu tutor ${this.state.activeUser.name} ha agendado una tutoría ordinaria:\n\nTema: ${topic}\nFecha: ${date}\nHorario: ${time} - ${endTime}\n\nLa sesión ya está bloqueada en tu calendario.`
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
      tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding: 20px; color:var(--neutral-muted);">No tienes solicitudes pendientes por responder.</td></tr>`;
      return;
    }
    
    pendingEvents.forEach(e => {
      const tr = document.createElement('tr');
      const juniorObj = this.state.db.users.find(u => u.id === e.junior_id);
      const juniorName = juniorObj ? juniorObj.name : 'N/A';
      const formattedDate = new Date(e.block_day + "T00:00:00").toLocaleDateString('es-CL');
      
      tr.innerHTML = `
        <td><strong>${juniorName}</strong></td>
        <td>
          <div style="font-weight:600;">${e.title.replace('Soporte Extra: ', '')}</div>
          <div style="font-size:0.75rem; color:var(--neutral-muted); max-width:250px;">"${e.block_reason}"</div>
        </td>
        <td>${formattedDate}<br><span style="font-weight:600; font-size:0.8rem;">${e.time_start} - ${e.time_end} (${e.planned_minutes} min)</span></td>
        <td>
          <div style="display:flex; gap:6px;">
            <button class="btn btn-success btn-xs" onclick="app.expertApproveRequest('${e.id}')"><i class="ti ti-check"></i> Aceptar</button>
            <button class="btn btn-danger btn-xs" onclick="app.expertRejectRequest('${e.id}')"><i class="ti ti-x"></i> Rechazar</button>
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
      alert(`⚠️ ERROR DE COLISIÓN AL APROBAR:\n\n${collisionResult.reason}\n\nNo es posible aprobar esta solicitud en el horario actual. Sugiere reagendar.`);
      return;
    }
    
    event.status = 'aprobada';
    this.saveDatabase();
    this.showToast("Solicitud aprobada e integrada a tu calendario.");
    
    const junior = this.state.db.users.find(u => u.id === event.junior_id);
    const expert = this.state.activeUser;
    
    this.sendSMTPAlert(
      "junior",
      junior.email,
      "Aprobada: Tu Solicitud de Soporte Extra",
      `Hola ${junior.name},\n\nTu solicitud de consulta técnica extra sobre "${event.title}" ha sido ACEPTADA por el experto ${expert.name}.\n\nFecha: ${event.block_day}\nHorario: ${event.time_start} - ${event.time_end}\n\nLa sesión ha sido confirmada en tu agenda.`
    );
    
    this.renderExpertPendingRequests();
    this.renderExpertCalendar();
  },

  expertRejectRequest(eventId) {
    const event = this.state.db.calendar_events.find(e => e.id === eventId);
    if (!event) return;
    
    event.status = 'rechazada';
    this.saveDatabase();
    this.showToast("Solicitud rechazada.");
    
    const junior = this.state.db.users.find(u => u.id === event.junior_id);
    const expert = this.state.activeUser;
    
    this.sendSMTPAlert(
      "junior",
      junior.email,
      "Rechazada: Solicitud de Soporte Extra",
      `Hola ${junior.name},\n\nTu solicitud de soporte extra sobre "${event.title}" para el ${event.block_day} ha sido RECHAZADA por el experto ${expert.name} debido a incompatibilidad horaria o indisponibilidad.\n\nPor favor intenta proponer otro horario o ponte en contacto directo para coordinar.`
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
      const formattedDate = new Date(e.block_day + "T00:00:00").toLocaleDateString('es-CL');
      
      tr.innerHTML = `
        <td><strong>${juniorName}</strong></td>
        <td>
          <div style="font-weight:600;">${e.title}</div>
          <div style="font-size:0.75rem; color:var(--neutral-muted); max-width:250px;">"${e.block_reason || 'Sin detalles'}"</div>
        </td>
        <td>${expertName}</td>
        <td>${formattedDate}<br><span style="font-weight:600; font-size:0.8rem;">${e.time_start} - ${e.time_end} (${e.planned_minutes} min)</span></td>
        <td>
          <div style="display:flex; gap:6px;">
            <button class="btn btn-success btn-xs" onclick="app.approveSupportRequest('${e.id}')"><i class="ti ti-check"></i> Aprobar</button>
            <button class="btn btn-danger btn-xs" onclick="app.rejectSupportRequest('${e.id}')"><i class="ti ti-x"></i> Rechazar</button>
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
            <td colspan="4" style="text-align:center; padding:15px; color:var(--neutral-muted);">Sin registros de interacciones.</td>
          </tr>
        `;
      } else {
        Object.keys(expertMap).forEach(expertId => {
          const expertEvents = expertMap[expertId];
          const expertObj = this.state.db.users.find(u => u.id === expertId);
          const expertName = expertObj ? expertObj.name : 'Experto N/A';
          
          let roleLabel = 'Tutor';
          if (expertObj) {
            if (expertObj.role === 'admin') roleLabel = 'Manager';
            else if (expertObj.role === 'senior') roleLabel = 'Senior';
            else if (expertObj.role === 'tutor') {
              const mappingTutorId = this.state.db.tutor_junior_mapping[junior.id];
              roleLabel = expertObj.id === mappingTutorId ? 'Tutor a Cargo' : 'Tutor';
            }
          }
          
          // Group by type to get friendly interaction string
          const typeCounts = {};
          expertEvents.forEach(e => {
            let friendlyType = 'Soporte';
            if (e.type === 'tutoring') friendlyType = 'Tutoría';
            else if (e.type === 'masterclass') friendlyType = 'Masterclass';
            else if (e.type === 'coaching') friendlyType = 'Coaching';
            else if (e.type === 'extra_support') friendlyType = 'Soporte Extra';
            typeCounts[friendlyType] = (typeCounts[friendlyType] || 0) + 1;
          });
          
          const typeList = [];
          if (typeCounts['Tutoría']) typeList.push(`Tutorías (${typeCounts['Tutoría']})`);
          if (typeCounts['Masterclass']) typeList.push(`Masterclass (${typeCounts['Masterclass']})`);
          if (typeCounts['Coaching']) typeList.push(`Coaching (${typeCounts['Coaching']})`);
          if (typeCounts['Soporte Extra']) typeList.push(`Soporte Extra (${typeCounts['Soporte Extra']})`);
          const interDetails = typeList.join(' + ') || 'Ninguna';
          
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
            Total: ${totalHours.toFixed(1)} Hrs Consumidas
          </span>
        </button>
        
        <div id="${junior.id}-panel" class="audit-accordion-content hidden">
          <table class="audit-table">
            <thead>
              <tr>
                <th>Consultor Experto</th>
                <th>Tipo de Interacción</th>
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
          <strong style="display: block; font-size: 0.95rem; color: var(--neutral-dark);">Autonomía técnica en Sandbox MX.3</strong>
          <span style="font-size: 0.8rem; color: var(--neutral-muted);">Demostrar soltura en configuración de curvas y parametrizaciones de portafolio.</span>
        </div>
      </div>
      <div class="cert-checklist-item" style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px; padding: 12px; border: 1px solid var(--neutral-border); border-radius: 6px; background-color: white;">
        <input type="checkbox" id="admin-cert-hito-2" ${hitos[2] ? 'checked' : ''} ${isMyTrainee ? '' : 'disabled'} onchange="app.toggleCertHitoForJunior('${juniorId}', 2)" style="width: 18px; height: 18px; cursor: ${isMyTrainee ? 'pointer' : 'not-allowed'};">
        <div>
          <strong style="display: block; font-size: 0.95rem; color: var(--neutral-dark);">Comprensión contable IFRS 9 / GAAP</strong>
          <span style="font-size: 0.8rem; color: var(--neutral-muted);">Validar y reportar estados contables bajo normas internacionales.</span>
        </div>
      </div>
      <div class="cert-checklist-item" style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px; padding: 12px; border: 1px solid var(--neutral-border); border-radius: 6px; background-color: white;">
        <input type="checkbox" id="admin-cert-hito-3" ${hitos[3] ? 'checked' : ''} ${isMyTrainee ? '' : 'disabled'} onchange="app.toggleCertHitoForJunior('${juniorId}', 3)" style="width: 18px; height: 18px; cursor: ${isMyTrainee ? 'pointer' : 'not-allowed'};">
        <div>
          <strong style="display: block; font-size: 0.95rem; color: var(--neutral-dark);">Habilidades blandas y roleplays</strong>
          <span style="font-size: 0.8rem; color: var(--neutral-muted);">Participación satisfactoria en simulaciones de reuniones técnicas con clientes.</span>
        </div>
      </div>
      <div class="cert-checklist-item" style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px; padding: 12px; border: 1px solid var(--neutral-border); border-radius: 6px; background-color: white;">
        <input type="checkbox" id="admin-cert-hito-4" ${hitos[4] ? 'checked' : ''} ${isMyTrainee ? '' : 'disabled'} onchange="app.toggleCertHitoForJunior('${juniorId}', 4)" style="width: 18px; height: 18px; cursor: ${isMyTrainee ? 'pointer' : 'not-allowed'};">
        <div>
          <strong style="display: block; font-size: 0.95rem; color: var(--neutral-dark);">Aprobación de la entrevista final con Manager</strong>
          <span style="font-size: 0.8rem; color: var(--neutral-muted);">Validación conceptual integradora final con Luana Ortega.</span>
        </div>
      </div>
    `;

    if (isMyTrainee) {
      notice.className = 'alert-banner success mt-15';
      notice.innerHTML = `
        <i class="ti ti-circle-check" style="font-size: 1.2rem; color: #16a34a;"></i>
        <span>Eres el Tutor asignado para <strong>${juniorObj.name}</strong>. Tienes permisos activos para validar estos hitos.</span>
      `;
    } else {
      notice.className = 'alert-banner warning mt-15';
      notice.innerHTML = `
        <i class="ti ti-alert-triangle" style="font-size: 1.2rem; color: #d97706;"></i>
        <span>El tutor asignado para ${juniorObj.name} es <strong>${tutorName}</strong>. Los controles están bloqueados para ti.</span>
      `;
    }
  },

  toggleCertHitoForJunior(juniorId, hitoNum) {
    const isManager = this.state.activeUser.role === 'admin';
    const isJuniorTutor = this.state.db.tutor_junior_mapping[juniorId] === this.state.activeUser.id;
    if (!isManager && !isJuniorTutor) {
      this.showForbiddenError("Error 403: No tienes permisos para certificar hitos de este junior.");
      return;
    }
    const currentState = this.state.db.cert_checklists[juniorId][hitoNum] === true;
    this.state.db.cert_checklists[juniorId][hitoNum] = !currentState;
    this.saveDatabase();
    
    this.showToast("Hito de certificación actualizado.");
    
    // Check if all certification checklist hitos are checked
    const hitos = this.state.db.cert_checklists[juniorId];
    const allChecked = hitos[1] && hitos[2] && hitos[3] && hitos[4];
    
    if (allChecked) {
      const juniorObj = this.state.db.users.find(u => u.id === juniorId);
      this.showToast(`¡Todos los hitos de certificación han sido validados para ${juniorObj.name}!`);
      
      // Send SMTP alerts
      this.sendSMTPAlert(
        "admin",
        "luana@murex.cl",
        `Habilitación Certificada: ${juniorObj.name}`,
        `Estimado(a) Manager Luana Ortega,\n\nTodos los hitos de certificación técnica y habilidades operativas han sido aprobados por el Tutor de ${juniorObj.name}.\n\nEl consultor está formalmente habilitado para salir a clientes reales. Se ha emitido el Certificado de Habilitación.`
      );
      
      this.sendSMTPAlert(
        "junior",
        juniorObj.email,
        "¡Felicitaciones! Has completado tu Habilitación Técnica",
        `Estimado(a) ${juniorObj.name},\n\nHemos completado tu evaluación final de onboarding de 12 semanas. Tu tutor y manager han certificado tus competencias técnicas Finance & PL.\n\nYa puedes descargar tu Certificado de Habilitación en la plataforma.`
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

  populateManagerDropdowns() {
    const weekSelect = document.getElementById('masterclass-week-select');
    if (weekSelect && weekSelect.children.length === 0) {
      weekSelect.innerHTML = '';
      for (let i = 1; i <= 12; i++) {
        const opt = document.createElement('option');
        opt.value = i;
        opt.innerText = `Semana ${i}`;
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
        roleLabel = exp.id === tutorId ? 'Tutor a Cargo' : 'Tutor';
      }
      
      opt.innerText = `${exp.name} (${roleLabel})`;
      
      if (defaultSelectId && exp.id === defaultSelectId) {
        opt.selected = true;
      }
      
      expertSelect.appendChild(opt);
    });
  },

  renderMonthlyCalendarGrid(containerId, viewRole) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    // 1. Render Days of Week Header
    const weekdays = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
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
      
      if (viewRole === 'junior') {
        // Show events for the logged-in junior
        dayEvents = allEvents.filter(e => e.block_day === dateStr && e.junior_id === this.state.activeUser.id);
      } else if (viewRole === 'tutor') {
        // Show events for the logged-in tutor/expert, or coaching sessions where they are the recipient
        dayEvents = allEvents.filter(e => e.block_day === dateStr && (
          e.expert_id === this.state.activeUser.id || 
          (e.type === 'coaching' && e.junior_id === this.state.activeUser.id)
        ));
      } else if (viewRole === 'manager') {
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
          badgeLabel = 'Pendiente';
          badgeClass = 'badge-solicitada';
        } else if (statusKey === 'aprobada') {
          badgeLabel = 'Aceptada';
          badgeClass = 'badge-aprobada';
        } else if (statusKey === 'ejecutada') {
          badgeLabel = `Ejecutada (${e.executed_minutes}m)`;
          badgeClass = 'badge-ejecutada';
        } else if (statusKey === 'rechazada') {
          badgeLabel = 'Cancelada';
          badgeClass = 'badge-rechazada';
        }
        
        card.innerHTML = `
          <div class="calendar-event-card-time" style="font-size:0.65rem; font-weight:700;">
            <i class="ti ti-clock"></i> ${e.time_start} - ${e.time_end}
          </div>
          <div class="calendar-event-card-title" style="font-size:0.7rem; font-weight:600; line-height:1.1; margin:2px 0;">${e.title}</div>
          <div class="calendar-event-card-expert" style="font-size:0.65rem;">
            ${viewRole === 'tutor' ? (e.junior_id === this.state.activeUser.id ? `Con: ${expertName}` : `Junior: ${juniorName}`) : `Tutor: ${expertName}`}
          </div>
          <span class="calendar-event-card-status ${badgeClass}" style="font-size:0.6rem; margin-top:2px;">${badgeLabel}</span>
        `;
        
        if (viewRole === 'tutor' && (e.status === 'aprobada' || e.status === 'aprobado')) {
          card.setAttribute('title', 'Haga clic para cerrar la sesión y registrar el tiempo real.');
          card.onclick = () => this.selectCloseSession(e.id);
        } else {
          card.setAttribute('title', `Detalle: ${e.block_reason || 'Sin detalles'}`);
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
          <p class="font-bold text-gray-800" style="margin: 0 0 6px 0; font-weight: 700; border-b: 1px solid #f1f5f9; padding-bottom: 4px;">Gobernanza de Reunión</p>
          <div style="font-size: 10px; color: #4b5563; margin-bottom: 6px; display: flex; flex-direction: column; gap: 2px; line-height: 1.3;">
            <div><strong>Tema:</strong> ${e.title}</div>
            <div><strong>Organizador:</strong> ${organizerName}</div>
            <div><strong>Invitado:</strong> ${inviteeName}</div>
            <div><strong>Estado:</strong> <span class="popover-status-label" style="font-weight: 600;">${e.estado_confirmacion || 'PENDIENTE'}</span></div>
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
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
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
        alert(`⚠️ ERROR DE COLISIÓN AL APROBAR:\n\n${collisionResult.reason}\n\nNo es posible aprobar esta solicitud en el horario actual. Sugiere reagendar.`);
        return;
      }
      event.status = 'aprobada';
      this.showToast("Solicitud aceptada e integrada a tu calendario.");
      
      const junior = this.state.db.users.find(u => u.id === event.junior_id);
      const expert = this.state.activeUser;
      
      this.sendSMTPAlert(
        "junior",
        junior.email,
        "Aprobada: Tu Solicitud de Soporte Extra",
        `Hola ${junior.name},\n\nTu solicitud de consulta técnica extra sobre "${event.title}" ha sido ACEPTADA por el experto ${expert.name}.\n\nFecha: ${event.block_day}\nHorario: ${event.time_start} - ${event.time_end}\n\nLa sesión ha sido confirmada en tu agenda.`
      );
    } else if (nuevoEstado === 'rechazada') {
      event.status = 'rechazada';
      this.showToast("Solicitud declinada.");
      
      const junior = this.state.db.users.find(u => u.id === event.junior_id);
      const expert = this.state.activeUser;
      
      this.sendSMTPAlert(
        "junior",
        junior.email,
        "Rechazada: Solicitud de Soporte Extra",
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
        accionesContainer.innerHTML = `<span class="text-gray-400 italic text-[11px]">Horario fijo corporativo</span>`;
        return;
    }

    // Convertir la fecha del evento para comparar en el espacio-tiempo
    const fechaStr = evento.fecha || evento.block_day;
    const fechaEvento = new Date(fechaStr + 'T00:00:00');
    
    // Regla B: Inmutabilidad del Pasado (Auditoría Histórica Fija)
    if (fechaEvento <= HOY_PRESENTE) {
        accionesContainer.innerHTML = `<span class="text-green-600 font-medium text-[11px] flex items-center gap-1">✓ Ejecutada e Histórica</span>`;
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
                <button onclick="event.stopPropagation(); app.confirmarHorario('${eventoId}')" class="bg-green-600 text-white p-1.5 rounded font-medium text-[11px] cursor-pointer text-center" style="display: block; width: 100%; border: none;">Aceptar y Fijar</button>
                <button onclick="event.stopPropagation(); app.abrirModalModificar('${eventoId}')" class="bg-gray-100 hover:bg-pink-50 text-pink-600 p-1.5 rounded font-medium text-[11px] cursor-pointer text-center" style="display: block; width: 100%; border: none;">Modificar Horario</button>
                <button onclick="event.stopPropagation(); app.cancelarReunion('${eventoId}')" class="bg-red-50 hover:bg-red-100 text-red-600 p-1.5 rounded font-medium text-[11px] cursor-pointer text-center" style="display: block; width: 100%; border: none;">Cancelar Reunión</button>
            `;
        } else {
            accionesContainer.innerHTML += `
                <button onclick="event.stopPropagation(); app.abrirModalModificar('${eventoId}')" class="bg-gray-100 hover:bg-pink-50 text-pink-600 p-1.5 rounded font-medium text-[11px] cursor-pointer text-center" style="display: block; width: 100%; border: none;">Modificar Horario</button>
                <button onclick="event.stopPropagation(); app.cancelarReunion('${eventoId}')" class="bg-red-50 hover:bg-red-100 text-red-600 p-1.5 rounded font-medium text-[11px] cursor-pointer text-center" style="display: block; width: 100%; border: none;">Cancelar Reunión</button>
            `;
        }
        return;
    }

    // Flujo de Negociación si soy el dueño/creador original
    if (esOrganizador) {
        if (evento.estado_confirmacion === 'PENDIENTE_ORGANIZER') {
            // El invitado me la movió, yo debo aceptar su contrapropuesta
            accionesContainer.innerHTML += `<button onclick="event.stopPropagation(); app.confirmarHorario('${eventoId}')" class="bg-green-600 text-white p-1.5 rounded font-medium text-[11px] cursor-pointer text-center" style="display: block; width: 100%; border: none;">Aceptar Contrapropuesta</button>`;
        } else if (evento.estado_confirmacion === 'PENDIENTE_INVITADO') {
            accionesContainer.innerHTML += `<span class="text-gray-400 italic text-[11px]" style="margin-bottom: 4px; display: block; text-align: center;">Esperando respuesta...</span>`;
        }
        // El organizador siempre puede alterar el futuro de su evento creado
        accionesContainer.innerHTML += `
            <button onclick="event.stopPropagation(); app.abrirModalModificar('${eventoId}')" class="bg-gray-100 hover:bg-pink-50 text-pink-600 p-1.5 rounded font-medium text-[11px] cursor-pointer text-center" style="display: block; width: 100%; border: none;">Modificar Horario</button>
            <button onclick="event.stopPropagation(); app.cancelarReunion('${eventoId}')" class="bg-red-50 hover:bg-red-100 text-red-600 p-1.5 rounded font-medium text-[11px] cursor-pointer text-center" style="display: block; width: 100%; border: none;">Cancelar Reunión</button>
        `;
    } 
    // Flujo de Negociación si soy el invitado experto requerido
    else if (esInvitado) {
        if (evento.estado_confirmacion === 'PENDIENTE_INVITADO') {
            accionesContainer.innerHTML += `
                <button onclick="event.stopPropagation(); app.confirmarHorario('${eventoId}')" class="bg-green-600 text-white p-1.5 rounded font-medium text-[11px] cursor-pointer text-center" style="display: block; width: 100%; border: none;">Aceptar y Fijar</button>
                <button onclick="event.stopPropagation(); app.abrirModalModificar('${eventoId}')" class="bg-gray-100 hover:bg-pink-50 text-pink-600 p-1.5 rounded font-medium text-[11px] cursor-pointer text-center" style="display: block; width: 100%; border: none;">Proponer Cambio</button>
            `;
        } else if (evento.estado_confirmacion === 'FIXED') {
            // El experto puede cancelar su asistencia a un evento futuro por contingencias
            accionesContainer.innerHTML += `<button onclick="event.stopPropagation(); app.cancelarReunion('${eventoId}')" class="bg-red-50 hover:bg-red-100 text-red-600 p-1.5 rounded font-medium text-[11px] cursor-pointer text-center" style="display: block; width: 100%; border: none;">Cancelar Asistencia</button>`;
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
    alert("Horario propuesto modificado con éxito. Se ha enviado una alerta de negociación a la contraparte.");
    
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
          msg = `Hola ${otherUser.name},\n\nLa Manager Luana Ortega ha reprogramado directamente la reunión "${evento.title}":\n\nNuevo Horario: ${nuevaFecha} de ${nuevaHoraInicio} a ${nuevaHoraFin}.\n\nRevisa el Calendario Hub para ver los detalles.`;
        } else if (this.state.activeUser.id === evento.organizador_id) {
          msg = `Estimado(a) ${otherUser.name},\n\nEl organizador de la reunión, ${this.state.activeUser.name}, ha propuesto una modificación de horario para "${evento.title}":\n\nNuevo Horario: ${nuevaFecha} de ${nuevaHoraInicio} a ${nuevaHoraFin}.\n\nPor favor ingresa a tu MXBoard para revisar y confirmar.`;
        } else {
          msg = `Hola ${otherUser.name},\n\nTu tutor/invitado ${this.state.activeUser.name} ha propuesto una modificación de horario para "${evento.title}":\n\nNuevo Horario: ${nuevaFecha} de ${nuevaHoraInicio} a ${nuevaHoraFin}.\n\nRevisa el Calendario Hub para ver la propuesta.`;
        }
        
        this.sendSMTPAlert(
          otherUser.role || 'junior',
          otherUser.email,
          "Modificación de Horario: Reunión HUB",
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
      alert(`⚠️ ERROR DE COLISIÓN AL APROBAR:\n\n${collisionResult.reason}\n\nNo es posible aprobar esta solicitud en el horario actual. Sugiere reagendar.`);
      return;
    }
    
    event.status = 'aprobada';
    event.estado_confirmacion = 'FIXED';
    this.saveDatabase();
    this.showToast("Reunión confirmada y fijada con éxito.");
    
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
          "Confirmación de Horario: Reunión Fijada",
          `Estimado(a) ${otherUser.name},\n\nLa sesión "${event.title}" ha sido CONFIRMADA y fijada en el calendario por ${this.state.activeUser.name}.\n\nFecha: ${event.block_day}\nHorario: ${event.time_start} - ${event.time_end}\n\nLa reunión queda confirmada.`
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
    this.showToast("Reunión cancelada.");
    
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
          "Reunión Cancelada / Rechazada",
          `Estimado(a) ${otherUser.name},\n\nLa sesión "${event.title}" programada para el ${event.block_day} de ${event.time_start} a ${event.time_end} ha sido CANCELADA / RECHAZADA por ${this.state.activeUser.name}.\n\nPor favor coordina un nuevo horario si es necesario.`
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
      this.showToast("Esta reunión corporativa está bloqueada para edición.", "warning");
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
      this.showToast("Por favor completa todos los campos para modificar.", "warning");
      return;
    }
    
    const event = this.state.db.calendar_events.find(e => e.id === eventId);
    if (!event) return;
    
    if (event.bloqueado_edicion) {
      this.showToast("Esta reunión corporativa está bloqueada para edición.", "warning");
      return;
    }
    
    const parseTime = (t) => t.split(':').map(Number);
    const [h1, m1] = parseTime(newStart);
    const [h2, m2] = parseTime(newEnd);
    const duration = (h2 * 60 + m2) - (h1 * 60 + m1);
    
    if (duration <= 0) {
      alert("⚠️ Error: La hora de fin debe ser posterior a la hora de inicio.");
      return;
    }
    
    const collisionResult = this.checkCollision(newDate, newStart, duration, event.expert_id, event.junior_id, eventId);
    if (collisionResult.collision) {
      alert(`⚠️ ERROR DE COLISIÓN AL MODIFICAR:\n\n${collisionResult.reason}\n\nEl horario seleccionado entra en colisión con otra sesión.`);
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
      this.showToast("No puedes solicitar soporte para fechas pasadas.", "warning");
      return;
    }
    
    const collisionResult = this.checkCollision(date, time, duration, expertId, this.state.activeUser.id);
    if (collisionResult.collision) {
      alert(`⚠️ ERROR DE COLISIÓN:\n\n${collisionResult.reason}\n\nPor favor propone otro bloque horario.`);
      return;
    }
    
    const startOfOnboarding = new Date("2026-05-04T00:00:00");
    const diffTime = Math.abs(selectedDate - startOfOnboarding);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    let weekNum = Math.ceil((diffDays + 1) / 7);
    if (weekNum < 1) weekNum = 1;
    if (weekNum > 12) weekNum = 12;
    
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
      emailSubject = `Solicitud de Reunión de Coaching Recibida: ${this.state.activeUser.name}`;
      emailBody = `Estimado(a) Senior Manager,\n\nLa consultora Junior ${this.state.activeUser.name} ha levantado una solicitud de reunión de coaching:\n\nTema: ${category}\nFecha: ${date} de ${time} a ${endTime}\nDetalle: "${reason}"\n\nPor favor ingresa a la pestaña "Solicitudes Pendientes" para responder a esta solicitud.`;
    } else if (supportType === 'tutoring') {
      eventTitle = `Tutoría: ${category}`;
      emailSubject = `Solicitud de Tutoría Ordinaria Recibida: ${this.state.activeUser.name}`;
      emailBody = `Estimado(a) Tutor,\n\nLa consultora Junior ${this.state.activeUser.name} ha levantado una solicitud de tutoría ordinaria:\n\nTema: ${category}\nFecha: ${date} de ${time} a ${endTime}\nDetalle: "${reason}"\n\nPor favor ingresa a la pestaña "Solicitudes Pendientes" para responder a esta solicitud.`;
    } else if (supportType === 'masterclass') {
      eventTitle = `Masterclass: ${category}`;
      emailSubject = `Solicitud de Masterclass Especial Recibida: ${this.state.activeUser.name}`;
      emailBody = `Estimado(a) Relator,\n\nLa consultora Junior ${this.state.activeUser.name} ha levantado una solicitud de masterclass especial:\n\nTema: ${category}\nFecha: ${date} de ${time} a ${endTime}\nDetalle: "${reason}"\n\nPor favor ingresa a la pestaña "Solicitudes Pendientes" para responder a esta solicitud.`;
    } else if (supportType === 'MUREX_LEARNING') {
      eventTitle = `Murex Learning: ${category}`;
      emailSubject = `Sesión Corporativa Registrada: ${category}`;
      emailBody = `Estimado(a) Junior,\n\nSe ha registrado tu asistencia a la reunión corporativa Murex Learning:\n\nTema: ${category}\nFecha: ${date} de ${time} a ${endTime}\nDetalle: "${reason}"\n\nEsta sesión queda confirmada de forma automática.`;
    } else {
      eventTitle = `Soporte Extra: ${category}`;
      emailSubject = `Solicitud de Soporte Extra Recibida: ${this.state.activeUser.name}`;
      emailBody = `Estimado(a) Experto,\n\nLa consultora Junior ${this.state.activeUser.name} ha levantado una solicitud de soporte extra reactivo:\n\nTema: ${category}\nFecha: ${date} de ${time} a ${endTime}\nDetalle: "${reason}"\n\nPor favor ingresa a la pestaña "Solicitudes Pendientes" de tu MXBoard para Aceptar o Rechazar esta sesión.`;
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
    
    this.showToast(supportType === 'MUREX_LEARNING' ? "Sesión corporativa Murex Learning registrada." : "Solicitud de sesión enviada directamente.");
    
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
      tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 20px; color:var(--neutral-muted);">No hay solicitudes de soporte extra pendientes de aprobación.</td></tr>`;
      return;
    }
    
    pendingEvents.forEach(e => {
      const tr = document.createElement('tr');
      const juniorObj = this.state.db.users.find(u => u.id === e.junior_id);
      const expertObj = this.state.db.users.find(u => u.id === e.expert_id);
      const juniorName = juniorObj ? juniorObj.name : 'N/A';
      const expertName = expertObj ? expertObj.name : 'N/A';
      const formattedDate = new Date(e.block_day + "T00:00:00").toLocaleDateString('es-CL');
      
      tr.innerHTML = `
        <td><strong>${juniorName}</strong></td>
        <td>
          <div style="font-weight:600;">${e.title.replace('Soporte Extra: ', '')}</div>
          <div style="font-size:0.75rem; color:var(--neutral-muted); max-width:250px;">"${e.block_reason}"</div>
        </td>
        <td>${expertName}</td>
        <td>${formattedDate}<br><span style="font-weight:600; font-size:0.8rem;">${e.time_start} - ${e.time_end} (${e.planned_minutes} min)</span></td>
        <td>
          <div style="display:flex; gap:6px;">
            <button class="btn btn-success btn-xs" onclick="app.approveSupportRequest('${e.id}')"><i class="ti ti-check"></i> Aprobar</button>
            <button class="btn btn-danger btn-xs" onclick="app.rejectSupportRequest('${e.id}')"><i class="ti ti-x"></i> Rechazar</button>
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
      alert(`⚠️ ERROR DE COLISIÓN AL APROBAR:\n\n${collisionResult.reason}\n\nNo es posible aprobar esta solicitud en el horario actual. Sugiera reagendar.`);
      return;
    }
    
    event.status = 'aprobado';
    this.saveDatabase();
    this.showToast("Solicitud aprobada y bloqueada en agendas.");
    
    const junior = this.state.db.users.find(u => u.id === event.junior_id);
    const expert = this.state.db.users.find(u => u.id === event.expert_id);
    
    this.sendSMTPAlert(
      "junior",
      junior.email,
      "Aprobado: Tu Solicitud de Soporte Extra",
      `Estimado(a) ${junior.name},\n\nTu solicitud de soporte técnico extra sobre "${event.title}" ha sido APROBADA por la Manager Luana Ortega.\n\nFecha: ${event.block_day}\nHorario: ${event.time_start} - ${event.time_end}\nExperto: ${expert?.name || 'N/A'}\n\nLa sesión ha sido agendada en tu Calendario Hub.`
    );
    
    this.sendSMTPAlert(
      expert.role,
      expert.email,
      `Nueva Sesión de Soporte Extra Asignada: ${junior.name}`,
      `Estimado(a) ${expert.name},\n\nLa Manager Luana Ortega ha aprobado y agendado una sesión de soporte extra donde eres el experto:\n\nJunior: ${junior.name}\nTema: ${event.title}\nFecha: ${event.block_day}\nHorario: ${event.time_start} - ${event.time_end}\n\nPor favor conéctate en el horario y, al finalizar, registra el cierre de la sesión en tu Calendario Operacional.`
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
    this.showToast("Solicitud rechazada.");
    
    const junior = this.state.db.users.find(u => u.id === event.junior_id);
    this.sendSMTPAlert(
      "junior",
      junior.email,
      "Rechazado: Solicitud de Soporte Extra",
      `Estimado(a) ${junior.name},\n\nTu solicitud de soporte extra sobre "${event.title}" para el ${event.block_day} ha sido RECHAZADA por la Manager Luana Ortega.\n\nPor favor habla con tu tutor para coordinar otro bloque u obtener ayuda asíncrona.`
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
      this.showToast("Por favor rellene todos los campos.", "warning");
      return;
    }
    
    const expertosIds = [...this.state.selectedExpertsIds];
    
    if (expertosIds.length === 0) {
      this.showToast("Por favor seleccione al menos un experto asistente.", "warning");
      return;
    }
    
    if (sessionType === 'MASTERCLASS') {
      const existingMc = (this.state.db.calendar_events || []).find(
        e => e.week_number === weekNum && e.junior_id === juniorId && e.type === 'masterclass' && e.status !== 'rechazado' && e.status !== 'rechazada'
      );
      if (existingMc) {
        this.showToast(`El Junior seleccionado ya tiene una Masterclass programada para la Semana ${weekNum}.`, "warning");
        return;
      }
    }
    
    const [timeStart, timeEnd] = timeBlock.split('-');
    
    // Check collisions for each expert
    for (const expId of expertosIds) {
      const collisionResult = this.checkCollision(date, timeStart, 60, expId, juniorId);
      if (collisionResult.collision) {
        alert(`⚠️ ERROR DE COLISIÓN:\n\n${collisionResult.reason}\n\nPor favor propone otro horario.`);
        return;
      }
    }
    
    const eventType = sessionType === 'MUREX_LEARNING' ? 'MUREX_LEARNING' : (sessionType === 'FEEDBACK_ALINEAMIENTO' ? 'FEEDBACK_ALINEAMIENTO' : 'masterclass');
    const eventTitle = sessionType === 'MUREX_LEARNING' ? `Murex Learning: ${topic}` : (sessionType === 'FEEDBACK_ALINEAMIENTO' ? `Feedback: ${topic}` : `Masterclass: ${topic}`);
    const eventReason = sessionType === 'MUREX_LEARNING' ? `Reunión Interna Murex (Global): ${topic}` : (sessionType === 'FEEDBACK_ALINEAMIENTO' ? `Sesión de Feedback / Alineamiento: ${topic}. Semana de la malla: ${weekNum}.` : `Clase magistral individual: ${topic}. Semana de la malla: ${weekNum}.`);
    
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
    
    this.showToast(sessionType === 'MUREX_LEARNING' ? `Sesión corporativa programada con éxito.` : `Sesión de Semana ${weekNum} programada con éxito.`);
    
    const junior = this.state.db.users.find(u => u.id === juniorId);
    
    if (sessionType !== 'MUREX_LEARNING') {
      expertosIds.forEach(expId => {
        const expert = this.state.db.users.find(u => u.id === expId);
        if (expert && junior) {
          const typeLabel = sessionType === 'FEEDBACK_ALINEAMIENTO' ? 'Feedback / Alineamiento' : 'Masterclass';
          this.sendSMTPAlert(
            expert.role,
            expert.email,
            `Sesión Asignada: Semana ${weekNum}`,
            `Estimado(a) ${expert.name},\n\nLa Manager Luana Ortega te ha asignado como relator de la sesión (${typeLabel}) de la Semana ${weekNum}:\n\nTema: ${topic}\nJunior Receptor: ${junior.name}\nFecha: ${date}\nHorario: ${timeStart} - ${timeEnd}\n\nPor favor conéctate a tiempo para dictar la sesión. Al finalizar, recuerda cerrarla en tu panel.`
          );
        }
      });
    } else {
      this.sendSMTPAlert(
        "admin",
        "learning.corp@murex.com",
        `Sesión Corporativa Registrada: ${topic}`,
        `Registro corporativo para la sesión de Murex Learning: ${topic}.\nFecha: ${date}\nHorario: ${timeStart} - ${timeEnd}`
      );
    }
    
    if (junior) {
      let relatorName = 'N/A';
      if (sessionType === 'MUREX_LEARNING') {
        relatorName = 'Murex Learning';
      } else {
        relatorName = expertosIds.map(id => this.state.db.users.find(u => u.id === id)?.name || 'N/A').join(', ');
      }
      const typeLabel = sessionType === 'FEEDBACK_ALINEAMIENTO' ? 'Feedback / Alineamiento' : 'Masterclass';
      this.sendSMTPAlert(
        junior.role,
        junior.email,
        sessionType === 'MUREX_LEARNING' ? `Nueva Sesión Corporativa: ${topic}` : `Nueva Sesión Programada: Semana ${weekNum}`,
        sessionType === 'MUREX_LEARNING' ? 
          `Estimado(a) ${junior.name},\n\nSe ha programado una Reunión Interna Murex (Global) para ti:\n\nTema: ${topic}\nFecha: ${date}\nHorario: ${timeStart} - ${timeEnd}\n\nEsta sesión no tiene costos locales y ha sido registrada por la Manager Luana Ortega.` :
          `Estimado(a) ${junior.name},\n\nLa Manager Luana Ortega ha programado una sesión de ${typeLabel} para ti para la Semana ${weekNum}:\n\nTema: ${topic}\nRelator (Senior / Tutor): ${relatorName}\nFecha: ${date}\nHorario: ${timeStart} - ${timeEnd}\n\nLa sesión se ha bloqueado en tu Calendario Hub.`
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
      this.showToast("Por favor rellene todos los campos para el Coaching.", "warning");
      return;
    }
    
    const [h, m] = time.split(':').map(Number);
    const endH = Math.floor((h * 60 + m + 60) / 60).toString().padStart(2, '0');
    const endM = ((h * 60 + m + 60) % 60).toString().padStart(2, '0');
    const endTime = `${endH}:${endM}`;
    
    const collisionResult = this.checkCollision(date, time, 60, "USR-LUANA", juniorId);
    if (collisionResult.collision) {
      alert(`⚠️ ERROR DE COLISIÓN:\n\n${collisionResult.reason}\n\nPor favor propone otro horario.`);
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
      block_reason: `Reunión de coaching individual para evaluar avance y soft skills.`,
      week_number: this.state.calendarWeekNum || 3,
      organizador_id: this.state.activeUser.id,
      estado_confirmacion: "FIXED",
      bloqueado_edicion: false
    };
    
    this.state.db.calendar_events.push(newCoaching);
    this.saveDatabase();
    
    this.showToast("Sesión de Coaching agendada con éxito.");
    
    const userObj = this.state.db.users.find(u => u.id === juniorId);
    this.sendSMTPAlert(
      userObj.role,
      userObj.email,
      "Nueva Sesión de Coaching Agendada",
      `Hola ${userObj.name},\n\nLa Manager Luana Ortega ha agendado una sesión 1-on-1 contigo para coaching y feedback:\n\nTema: ${topic}\nFecha: ${date}\nHorario: ${time} - ${endTime}\n\nSe ha bloqueado la sesión en tu Calendario Hub.`
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
      tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 20px; color:var(--neutral-muted);">No hay sesiones programadas todavía.</td></tr>`;
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
      
      const formattedDate = new Date(e.block_day + "T00:00:00").toLocaleDateString('es-CL');
      
      let statusLabel = 'Programada';
      let statusClass = 'badge-approved';
      if (e.status === 'ejecutado' || e.status === 'ejecutada') {
        statusLabel = 'Ejecutada';
        statusClass = 'badge-executed';
      }
      
      let badgeStyle = 'background-color:rgba(147, 51, 234, 0.1); color:#9333ea; font-weight:700;';
      if (e.type === 'MUREX_LEARNING') {
        badgeStyle = 'background-color:rgba(71, 85, 105, 0.1); color:#475569; font-weight:700;';
      } else if (e.type === 'FEEDBACK_ALINEAMIENTO') {
        badgeStyle = 'background-color:rgba(13, 148, 136, 0.1); color:#0d9488; font-weight:700;';
      }
      
      tr.innerHTML = `
        <td><span class="badge" style="${badgeStyle}">Semana ${e.week_number}</span></td>
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
        tbody.innerHTML = `<tr><td colspan="3" style="text-align:center; padding:15px; color:var(--neutral-muted);">Sin registros auditados.</td></tr>`;
      } else {
        const sortedExecuted = [...executedEvents].sort((a,b) => new Date(b.block_day) - new Date(a.block_day));
        sortedExecuted.forEach(e => {
          const tr = document.createElement('tr');
          const expertObj = this.state.db.users.find(u => u.id === e.expert_id);
          const formattedDate = new Date(e.block_day + "T00:00:00").toLocaleDateString('es-CL', { day: '2-digit', month: '2-digit' });
          
          let shortType = 'Tutoría';
          if (e.type === 'masterclass') shortType = 'Masterclass';
          if (e.type === 'extra_support') shortType = 'Soporte';
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
      console.warn("Chart.js no está cargado. Omitiendo renderizado de gráficos de auditoría.");
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
            label: 'Horas Reales',
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
      'tutoring': 'Tutoría',
      'masterclass': 'Masterclass',
      'extra_support': 'Soporte',
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
              label: 'Planificado (hrs)',
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
        <strong>Planificado:</strong> ${event.planned_minutes} min (${event.time_start} - ${event.time_end})<br>
        <strong>Fecha:</strong> ${event.block_day}
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
      this.showToast("Error: No se encontró la sesión.", "danger");
      return;
    }
    
    event.status = 'ejecutado';
    event.executed_minutes = realMinutes;
    
    this.saveDatabase();
    this.showToast("Sesión cerrada y auditada con éxito.");
    
    const expert = this.state.activeUser;
    this.sendSMTPAlert(
      "admin",
      "luana@murex.cl",
      `Sesión Cerrada y Auditada: ${event.title}`,
      `Estimada Manager Luana Ortega,\n\nEl experto ${expert.name} ha cerrado y registrado la duración real de la sesión:\n\nSesión: ${event.title}\nJunior: ${this.state.db.users.find(u => u.id === event.junior_id)?.name || 'N/A'}\nTiempo Real Ejecutado: ${realMinutes} minutos.\n\nLa sesión ha sido registrada en el historial de tiempos.`
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
    this.showToast("Historial de horas de calendario restablecido.");
    
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
      this.showToast("El correo electrónico no existe en el sistema.", "danger");
      return;
    }

    if (currentPass !== userInDb.password) {
      this.showToast("La contraseña actual es incorrecta.", "danger");
      return;
    }

    if (newPass !== confirmPass) {
      this.showToast("Las contraseñas nuevas no coinciden.", "danger");
      return;
    }

    if (newPass.length < 4) {
      this.showToast("La nueva contraseña debe tener al menos 4 caracteres.", "warning");
      return;
    }

    userInDb.password = newPass;
    if (this.state.activeUser && this.state.activeUser.email.toLowerCase() === email) {
      this.state.activeUser.password = newPass;
    }
    this.saveDatabase();
    this.showToast("Contraseña actualizada con éxito.");
    this.closeChangePasswordModal();
  },

  handleNewMemberRoleChange(value) {
    const tutorGroup = document.getElementById('new-member-tutor-group');
    if (tutorGroup) {
      tutorGroup.style.display = value === 'JUNIOR' ? 'block' : 'none';
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
    const selectedRol = document.getElementById('new-member-role').value;
    
    // Validate uniqueness of email
    if (this.state.db.users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      this.showToast("El correo electrónico ya está registrado.", "danger");
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
      rol: selectedRol,
      role: selectedRol === 'SENIOR' ? 'senior' : (selectedRol === 'TUTOR' ? 'tutor' : 'consultant')
    };

    let tutorId = null;
    if (selectedRol === 'JUNIOR') {
      newMember.current_week = 1;
      newMember.avg_score = 0;
      newMember.status = "on_track";
      
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
    }
    
    this.state.db.users.push(newMember);
    this.saveDatabase();
    
    this.showToast(`Colaborador ${name} registrado con éxito.`);
    this.closeAddMemberModal();
    this.renderTeamTable();
    this.renderAdminView();

    if (selectedRol === 'JUNIOR' && tutorId) {
      const tutor = this.state.db.users.find(u => u.id === tutorId);
      if (tutor) {
        // Send to Junior
        this.sendSMTPAlert(
          "junior",
          email,
          "Bienvenido al Plan de Habilitación Activa (Murex Finance & PL)",
          `Hola ${name},\n\nSe ha creado tu perfil de onboarding en MXBoard. Tu plan consta de 12 semanas para habilitarte formalmente.\n\nTu tutor asignado es ${tutor.name}. Tu contraseña inicial es 'password'.`
        );
        
        // Send to Tutor
        this.sendSMTPAlert(
          "tutor",
          tutor.email,
          `Nuevo Junior Asignado: ${name}`,
          `Estimado(a) ${tutor.name},\n\nSe ha registrado a un nuevo consultor Junior ${name} en el sistema, y has sido asignado como su Tutor.\n\nPor favor, ponte en contacto con él para agendar tu primera sesión de tutoría.`
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
      const estadoMalla = user.rol === 'JUNIOR' 
        ? `<span class="text-xs bg-pink-100 text-pink-700 px-2.5 py-1 rounded-full font-medium">Semana ${user.semana_actual || user.current_week || 1} (Onboarding)</span>` 
        : `<span class="text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-medium">Habilitado (Autónomo)</span>`;

      // Use user.rol in uppercase if set, otherwise fallback from user.role mapping
      const currentRol = user.rol || (user.role === 'admin' ? 'MANAGER' : user.role === 'tutor' ? 'TUTOR' : user.role === 'senior' ? 'SENIOR' : 'JUNIOR');

      // Tutor Selection
      let tutorCell = '';
      if (currentRol === 'JUNIOR') {
        const currentTutorId = this.state.db.tutor_junior_mapping[user.id] || '';
        const tutorsList = this.state.db.users.filter(u => u.role === 'tutor' || u.role === 'senior');
        tutorCell = `
          <select id="tutor-select-${user.id}" class="bg-gray-50 border border-gray-300 rounded-md p-1.5 text-xs focus:ring-pink-500 team-role-select" style="max-width: 150px;">
            <option value="" ${currentTutorId === '' ? 'selected' : ''}>Sin asignar</option>
            ${tutorsList.map(t => `<option value="${t.id}" ${t.id === currentTutorId ? 'selected' : ''}>${t.nombre || t.name}</option>`).join('')}
          </select>
        `;
      } else {
        tutorCell = `<span class="text-xs text-gray-400">N/A</span>`;
      }

      row.innerHTML = `
        <td class="p-4 font-medium text-gray-800">${user.nombre || user.name}</td>
        <td class="p-4 text-gray-600">${user.email}</td>
        <td class="p-4">
          <select id="role-select-${user.id}" class="bg-gray-50 border border-gray-300 rounded-md p-1.5 text-xs focus:ring-pink-500 team-role-select">
            <option value="JUNIOR" ${currentRol === 'JUNIOR' ? 'selected' : ''}>Junior (En Onboarding)</option>
            <option value="TUTOR" ${currentRol === 'TUTOR' ? 'selected' : ''}>Tutor (Junior Habilitado)</option>
            <option value="SENIOR" ${currentRol === 'SENIOR' ? 'selected' : ''}>Senior Consultant</option>
            <option value="MANAGER" ${currentRol === 'MANAGER' ? 'selected' : ''}>Manager / Admin</option>
          </select>
        </td>
        <td class="p-4">${tutorCell}</td>
        <td class="p-4">${estadoMalla}</td>
        <td class="p-4 text-right">
          <button onclick="app.handleUpdateMemberRole('${user.id}')" class="btn btn-xs" style="background-color: rgba(219, 39, 119, 0.08); color: #db2777; border: 1px solid rgba(219, 39, 119, 0.18); font-weight: 600; display: inline-flex; align-items: center; gap: 4px; transition: all 0.2s ease;" onmouseover="this.style.backgroundColor='rgba(219, 39, 119, 0.15)'" onmouseout="this.style.backgroundColor='rgba(219, 39, 119, 0.08)'">
            <i class="ti ti-refresh" style="font-size: 0.85rem;"></i> Actualizar
          </button>
        </td>
      `;
      container.appendChild(row);
    });
  },

  handleUpdateMemberRole(userId) {
    if (!this.state.activeUser || this.state.activeUser.role !== 'admin') {
      this.showForbiddenError("Error 403: No tienes permisos para modificar roles.");
      return;
    }
    const selectElement = document.getElementById(`role-select-${userId}`);
    if (!selectElement) return;
    const nuevoRol = selectElement.value;

    const user = this.state.db.users.find(u => u.id === userId);
    if (user) {
      const oldRol = user.rol || (user.role === 'admin' ? 'MANAGER' : user.role === 'tutor' ? 'TUTOR' : user.role === 'senior' ? 'SENIOR' : 'JUNIOR');
      user.rol = nuevoRol;
      
      // Cascade update to legacy .role property
      if (nuevoRol === 'MANAGER') user.role = 'admin';
      else if (nuevoRol === 'SENIOR') user.role = 'senior';
      else if (nuevoRol === 'TUTOR') user.role = 'tutor';
      else if (nuevoRol === 'JUNIOR') user.role = 'consultant';

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
      if (nuevoRol === 'JUNIOR' && oldRol !== 'JUNIOR') {
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
      } else if (nuevoRol !== 'JUNIOR' && oldRol === 'JUNIOR') {
        // Business Rule: Transition from Junior to another role (e.g. Tutor)
        // Remove or mark onboarding progress variables as completed/clean
        delete user.semana_actual;
        delete user.current_week;
        delete user.avg_score;
        delete user.status;
        delete this.state.db.tutor_junior_mapping[userId];
      }

      this.saveDatabase();
      this.showToast(`Datos de ${user.nombre || user.name} actualizados con éxito.`);
      this.renderTeamTable();
      this.renderAdminView();
    }
  },

  renderTestCorrectionMode(semanaNumero) {
    const screen = document.getElementById('quiz-engine-screen');
    if (!screen) return;

    const userId = this.state.activeUser.id;
    const attempt = (this.state.db.historial_evaluaciones || []).find(
      h => h.usuario_id === userId && h.semana_malla === semanaNumero
    );

    if (!attempt) {
      this.renderPantallaBloqueo("⛔ INSTANCE LOCKED: INTENTO AGOTADO", "Has completado el límite máximo de 1 intento permitido para esta semana de rampa.");
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
          <span>VISTA DE REVISIÓN: EVALUACIÓN SEMANA ${semanaNumero}</span>
          <span style="color: var(--primary); font-weight: bold;">NOTA: ${attempt.puntaje_obtenido}%</span>
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
          <p style="font-weight: 700; color: var(--neutral-dark); font-size: 0.8rem; margin: 0;">${usuario ? usuario.name : 'Consultor'}</p>
          <span style="font-size: 0.65rem; font-weight: 700; padding: 2px 6px; border-radius: 4px; background: var(--neutral-light); border: 1px solid var(--neutral-border); color: var(--neutral-muted);">Semana ${intento.semana_malla}</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.7rem; color: var(--neutral-muted);">
          <span>Rendido: ${intento.fecha_rendicion}</span>
          <span style="font-weight: 700; color: ${scoreColor}">Nota: ${intento.puntaje_obtenido}%</span>
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
      viewer.innerHTML = '<div class="eval-detail-viewer-empty">Error: Intento no encontrado.</div>';
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
        Todas (${quizPool.length})
      </button>
      <button class="btn btn-outline btn-xs eval-filter-btn" data-filter="correct" onclick="app.filterAuditQuestions(this, 'correct')" style="cursor: pointer;">
        <span style="color: var(--success); margin-right: 4px;">●</span> Buenas (${correctCount})
      </button>
      <button class="btn btn-outline btn-xs eval-filter-btn" data-filter="incorrect" onclick="app.filterAuditQuestions(this, 'incorrect')" style="cursor: pointer;">
        <span style="color: var(--danger); margin-right: 4px;">●</span> Malas (${incorrectCount})
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
            badgeHtml = `<span class="badge-green eval-badge-status"><i class="ti ti-circle-check"></i> Marcó Correcta</span>`;
          } else {
            rowClass = 'incorrect-selected';
            badgeHtml = `<span class="badge-red eval-badge-status"><i class="ti ti-circle-x"></i> Marcó Incorrecta</span>`;
          }
        } else if (oIdx === correctIdx) {
          rowClass = 'correct-option';
          badgeHtml = `<span class="badge-green eval-badge-status" style="opacity: 0.8;">(Respuesta Correcta)</span>`;
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
          <p class="eval-audit-question-title">Pregunta ${idx + 1}: ${q.question}</p>
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
      'tutoring': 'Tutoría',
      'masterclass': 'Masterclass',
      'extra_support': 'Soporte',
      'support': 'Soporte',
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
      const expId = e.expert_id;
      const expertObj = this.state.db.users.find(u => u.id === expId);
      const name = expertObj ? expertObj.name : 'N/A';
      hoursByExpert[name] = (hoursByExpert[name] || 0) + (e.executed_minutes || 0) / 60;
    });

    const expertListContainer = document.getElementById('inspect-hours-expert-list');
    if (expertListContainer) {
      expertListContainer.innerHTML = '';
      const sortedExperts = Object.entries(hoursByExpert).sort((a, b) => b[1] - a[1]);
      if (sortedExperts.length === 0) {
        expertListContainer.innerHTML = '<div style="color: var(--neutral-muted); font-size: 0.75rem; text-align: center; padding: 15px;">Sin horas registradas con expertos.</div>';
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
      const uniqueExpertIds = [...new Set(juniorEvents.map(e => e.expert_id))];
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
        : juniorEvents.filter(e => e.expert_id === selectedExpertId);

      if (filteredEvents.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:15px; color:var(--neutral-muted);">No hay registros para el experto seleccionado.</td></tr>`;
      } else {
        const sortedEvents = [...filteredEvents].sort((a, b) => new Date(b.block_day) - new Date(a.block_day));
        sortedEvents.forEach(e => {
          const expertObj = this.state.db.users.find(u => u.id === e.expert_id);
          const formattedDate = new Date(e.block_day + "T00:00:00").toLocaleDateString('es-CL', { day: '2-digit', month: '2-digit' });
          
          let typeBadgeStyle = 'background-color:rgba(22, 163, 74, 0.1); color:#16a34a; font-weight:700;'; // tutoring
          let shortType = 'Tutoría';
          const typeLower = (e.type || '').toLowerCase();
          
          if (typeLower === 'masterclass') {
            typeBadgeStyle = 'background-color:rgba(147, 51, 234, 0.1); color:#9333ea; font-weight:700;';
            shortType = 'Masterclass';
          } else if (typeLower === 'extra_support' || typeLower === 'support') {
            typeBadgeStyle = 'background-color:rgba(239, 159, 39, 0.1); color:#b26500; font-weight:700;';
            shortType = 'Soporte';
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
              <div style="font-weight:600;">${e.title || 'Sesión'}</div>
              <span class="badge" style="font-size:0.65rem; padding:1px 4px; ${typeBadgeStyle}">Semana ${e.week_number} - ${shortType}</span>
            </td>
            <td>${expertObj?.name || 'N/A'}</td>
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
        expertBarsContainer.innerHTML = '<div style="color:var(--neutral-muted);font-size:0.75rem;text-align:center;padding:20px;">Sin datos</div>';
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

    // Render CSS bar chart: Desviación Planificado vs Real
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
      const devLabels = [['Tutoría','tutoring'],['Masterclass','masterclass'],['Soporte','extra_support'],['Coaching','coaching']];
      const maxDev = Math.max(...devLabels.map(([,k]) => plannedHours[k]), 1);
      desvBarsContainer.innerHTML += `<div style="display:flex;gap:12px;font-size:0.68rem;margin-bottom:8px;">
        <span style="display:flex;align-items:center;gap:4px;"><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:#64748b;"></span>Planificado</span>
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
          <td colspan="4" style="text-align:center; padding:15px; color:var(--neutral-muted);">Sin registros de interacciones.</td>
        </tr>
      `;
    } else {
      Object.keys(expertMap).forEach(expertId => {
        const expertEvents = expertMap[expertId];
        const expertObj = this.state.db.users.find(u => u.id === expertId);
        const expertName = expertObj ? expertObj.name : 'Experto N/A';
        
        let roleLabel = 'Tutor';
        if (expertObj) {
          if (expertObj.role === 'admin') roleLabel = 'Manager';
          else if (expertObj.role === 'senior') roleLabel = 'Senior';
          else if (expertObj.role === 'tutor') {
            const mappingTutorId = this.state.db.tutor_junior_mapping[junior.id];
            roleLabel = expertObj.id === mappingTutorId ? 'Tutor a Cargo' : 'Tutor';
          }
        }
        
        // Group by type to get friendly interaction string
        const typeCounts = {};
        expertEvents.forEach(e => {
          let friendlyType = 'Soporte';
          const typeLower = (e.type || '').toLowerCase();
          if (typeLower === 'tutoring') friendlyType = 'Tutoría';
          else if (typeLower === 'masterclass') friendlyType = 'Masterclass';
          else if (typeLower === 'coaching') friendlyType = 'Coaching';
          else if (typeLower === 'extra_support' || typeLower === 'support') friendlyType = 'Soporte Extra';
          typeCounts[friendlyType] = (typeCounts[friendlyType] || 0) + 1;
        });
        
        const typeList = [];
        if (typeCounts['Tutoría']) typeList.push(`Tutorías (${typeCounts['Tutoría']})`);
        if (typeCounts['Masterclass']) typeList.push(`Masterclass (${typeCounts['Masterclass']})`);
        if (typeCounts['Coaching']) typeList.push(`Coaching (${typeCounts['Coaching']})`);
        if (typeCounts['Soporte Extra']) typeList.push(`Soporte Extra (${typeCounts['Soporte Extra']})`);
        const interDetails = typeList.join(' + ') || 'Ninguna';
        
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
          <i class="ti ti-shield-check" style="color: var(--primary);"></i> Bitácora de Auditoría de Interacciones
        </h3>
      </div>
      <div style="padding: 15px; font-size: 0.75rem;">
        <table class="audit-table" style="width: 100%;">
          <thead>
            <tr>
              <th>Consultor Experto</th>
              <th>Tipo de Interacción</th>
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
