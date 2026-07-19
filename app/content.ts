export type Locale = "es" | "en";

export type PriceTrack = {
  id: "summit" | "go-see" | "combined";
  tab: string;
  name: string;
  capacity: string;
  audience: string;
  description: string;
  includes: string[];
  phases: Array<{
    name: string;
    window: string;
    price: string;
  }>;
};

export const content = {
  es: {
    locale: "es" as const,
    metadata: {
      title: "Back to the Future 2026 | Summit de IA y Go & See",
      description:
        "Summit de IA el 8 de octubre y Executive Go & See el día 9, durante SF Tech Week. Dos experiencias para líderes en San Francisco y Napa.",
    },
    languageLabel: "EN",
    languageAria: "Ver la página en inglés",
    requestAccess: "Solicitar acceso",
    requestAccessSubject: "Back to the Future 2026",
    nav: {
      experiences: "Experiencias",
      summit: "Summit",
      goSee: "Go & See",
      access: "Acceso",
      faq: "Preguntas",
    },
    hero: {
      date: "8–9 de octubre de 2026 · Durante SF Tech Week",
      title: "Back to the Future",
      summary:
        "Dos días consecutivos para entender qué viene con la IA y verlo operar dentro de empresas reales. Elige el Summit, el Go & See o vive ambos.",
      cta: "Explorar las experiencias",
      imageAlt: "San Francisco al atardecer, con el Golden Gate y un tranvía",
    },
    choice: {
      title: "Una experiencia en dos capítulos.",
      copy:
        "El Summit abre la conversación el 8 de octubre; el Executive Go & See la lleva a la operación el día 9. Compra un día por separado o vive ambos de principio a fin.",
      sequence: {
        note: "Diseñados para suceder uno después del otro",
        purchase: "Elige un día o vive la experiencia completa.",
        days: [
          {
            date: "8 de octubre",
            name: "Summit",
            description: "Amplía tu perspectiva y conoce a quienes están construyendo el mercado.",
          },
          {
            date: "9 de octubre",
            name: "Executive Go & See",
            description: "Entra a la operación y observa cómo otras compañías hicieron el cambio.",
          },
        ],
      },
      tracks: [
        {
          id: "summit",
          number: "01",
          meta: "8 de octubre · Hasta 50 personas",
          name: "Summit",
          promise: "Entender qué viene y conocer a quienes ya lo están construyendo.",
          description:
            "Una reunión pequeña con founders, operadores e investigadores para hablar de lo que ya funciona, lo que sigue inmaduro y las decisiones que vienen para cada industria.",
          audienceLabel: "Para",
          audience:
            "Founders, CEOs, líderes de SMBs, startups, scaleups, gobierno y corporativos.",
          link: "Explorar el Summit",
          href: "#summit",
          image: "/images/experience-summit.jpg",
          imageAlt: "Paisaje abstracto construido con puntos de colores",
        },
        {
          id: "go-see",
          number: "02",
          meta: "9 de octubre · Máximo 20 ejecutivos",
          name: "Executive Go & See",
          promise: "Aprender de organizaciones que ya hicieron el recorrido.",
          description:
            "Una experiencia de aprendizaje entre pares para observar el trabajo real y conversar directamente con quienes llevaron IA a la operación.",
          audienceLabel: "Para",
          audience:
            "Corporate VPs, managers y C-levels responsables de transformar una organización existente.",
          link: "Explorar el Go & See",
          href: "#go-see",
          image: "/images/experience-go-see.jpg",
          imageAlt: "Paisaje construido con puntos de colores",
        },
      ],
    },
    premise: {
      title: "Primero entiendes el cambio. Después lo ves funcionar.",
      copy:
        "Los dos días siguen una misma secuencia: escuchar a quienes están construyendo, observar cómo otras compañías operan y contrastar esos aprendizajes con tu empresa.",
      principles: [
        {
          number: "01",
          title: "Escuchar",
          text: "Habla directamente con las personas que están construyendo y operando con IA.",
        },
        {
          number: "02",
          title: "Observar",
          text: "Mira cómo cambian el trabajo, los equipos y las decisiones cuando la IA entra en operación.",
        },
        {
          number: "03",
          title: "Contrastar",
          text: "Lleva cada aprendizaje a la realidad de tu empresa, no a un caso idealizado.",
        },
      ],
    },
    summit: {
      date: "8 de octubre de 2026",
      title: "Summit: una conversación pequeña sobre lo que viene.",
      copy:
        "Un día para conectar la perspectiva técnica con decisiones de negocio. Sin una sucesión interminable de presentaciones: casos concretos, preguntas directas y tiempo para conocer a las personas detrás de las ideas.",
      facts: [
        "Conversaciones y casos prácticos",
        "Acceso a speakers y participantes",
        "Alimentos y bebidas durante el día",
        "Transporte grupal San Francisco–Napa opcional",
      ],
      price: "Desde USD 899",
      speakersTitle: "Personas que queremos reunir en la misma conversación.",
      speakersCopy:
        "Esta es nuestra primera lista de speakers propuestos. Las participaciones se anunciarán únicamente después de ser confirmadas.",
      profileAria: "Ver el perfil de {name} en LinkedIn",
    },
    goSee: {
      date: "9 de octubre de 2026",
      title: "Executive Go & See: aprende de quienes ya hicieron el recorrido.",
      copy:
        "Desarrollado en colaboración con OpenAI, es una jornada de aprendizaje entre pares dentro de organizaciones que ya llevaron IA a la operación. Los equipos anfitriones abren el proceso: qué los llevó a cambiar, cómo avanzaron, dónde tropezaron y cómo funciona hoy el trabajo.",
      partner: "En colaboración con",
      imageAlt: "Paisaje tecnológico iluminado sobre colinas verdes",
      featureTitle: "La transformación, contada en el lugar donde ocurrió.",
      featureDescription:
        "Una serie de visitas para escuchar directamente a líderes y equipos, observar nuevas formas de trabajo y contrastar lo aprendido con los retos de tu empresa.",
      capacity: "Máximo 20 corporate VPs, managers y C-levels.",
      steps: [
        {
          number: "01",
          title: "Ver cómo opera",
          text: "Observa procesos, nuevas formas de trabajo y ejemplos reales en el lugar donde ocurren.",
        },
        {
          number: "02",
          title: "Escuchar a quienes lo hicieron",
          text: "Conoce las decisiones, resistencias, errores y aprendizajes detrás de la transformación.",
        },
        {
          number: "03",
          title: "Contrastar con tu empresa",
          text: "Discute con un grupo ejecutivo qué sí podría trasladarse a tu organización y qué no.",
        },
      ],
      facts: [
        "Visitas y conversaciones privadas",
        "Dos noches de hospedaje",
        "Transporte durante la experiencia",
        "Grupo ejecutivo curado",
      ],
      price: "Desde USD 5,000",
    },
    audience: {
      title: "Dos capítulos conectados, con un grupo ideal para cada uno.",
      tracks: [
        {
          name: "Summit: amplitud y contexto",
          description:
            "Quieres ampliar tu perspectiva, conocer a quienes están construyendo el mercado y entender qué oportunidades podrían importar para tu empresa o sector.",
          roles: "Founders, CEOs, líderes de SMBs, startups, scaleups, gobierno y corporativos.",
        },
        {
          name: "Go & See: profundidad operativa",
          description:
            "Ya tienes una organización en marcha y necesitas ver cómo otros líderes convirtieron una idea de IA en cambios reales de operación, talento o producto.",
          roles: "Corporate VPs, managers y C-levels con responsabilidad de transformación.",
        },
      ],
    },
    access: {
      title: "Elige un día o vive la experiencia completa.",
      copy:
        "El Summit del 8 de octubre y el Go & See del día 9 se venden por separado. La experiencia completa reúne ambos días con un precio preferente.",
      explorer: {
        heading: "Selecciona tu experiencia",
        subheading: "El precio cambia por fecha y disponibilidad.",
        tabsAria: "Tipo de acceso",
        currentPrice: "Precio actual",
        cta: "Solicitar acceso",
        phasesHeading: "Cómo sube el precio",
        phasesCopy:
          "Cada fase cierra en la fecha indicada o cuando se agotan sus lugares.",
        note: "Precios por persona. Los vuelos no están incluidos.",
      },
      tracks: [
        {
          id: "summit",
          tab: "Summit",
          name: "Summit",
          capacity: "Hasta 50 participantes",
          audience:
            "Founders, CEOs y líderes de SMBs, startups, scaleups, gobierno y corporativos.",
          description:
            "Un día de conversaciones, casos y relaciones para entender qué ya funciona y qué conviene hacer ahora.",
          includes: [
            "Acceso al Summit",
            "Alimentos y bebidas",
            "Transporte grupal a Napa opcional",
          ],
          phases: [
            { name: "Preventa inicial", window: "Hasta el 1 de agosto", price: "$899" },
            { name: "Acceso anticipado", window: "2–31 de agosto", price: "$1,100" },
            { name: "Venta general", window: "1–20 de septiembre", price: "$1,250" },
            { name: "Últimos lugares", window: "Desde el 21 de septiembre", price: "$1,400" },
          ],
        },
        {
          id: "go-see",
          tab: "Go & See",
          name: "Executive Go & See",
          capacity: "Máximo 20 ejecutivos",
          audience:
            "Corporate VPs, managers y C-levels responsables de transformar una organización existente.",
          description:
            "Visitas y conversaciones para observar cómo otras compañías llevaron IA a su operación y discutir esas decisiones en contexto.",
          includes: [
            "Visitas y conversaciones privadas",
            "Dos noches de hospedaje",
            "Transporte local",
          ],
          phases: [
            { name: "Preventa inicial", window: "Hasta el 1 de agosto", price: "$5,000" },
            { name: "Acceso anticipado", window: "2–31 de agosto", price: "$6,000" },
            { name: "Venta general", window: "1–20 de septiembre", price: "$6,750" },
            { name: "Últimos lugares", window: "Desde el 21 de septiembre", price: "$7,500" },
          ],
        },
        {
          id: "combined",
          tab: "Experiencia completa",
          name: "Summit + Go & See",
          capacity: "Máximo 5 accesos combinados",
          audience:
            "Líderes que quieren ampliar la conversación en el Summit y después profundizar dentro del grupo ejecutivo.",
          description:
            "Los dos días consecutivos con precio preferente, presentaciones relevantes y una sesión personalizada de 60 minutos.",
          includes: [
            "Summit y Go & See",
            "Presentaciones relevantes",
            "Sesión personalizada de 60 minutos",
          ],
          phases: [
            { name: "Preventa inicial", window: "Hasta el 1 de agosto", price: "$5,750" },
            { name: "Acceso anticipado", window: "2–31 de agosto", price: "$6,750" },
            { name: "Venta general", window: "1–20 de septiembre", price: "$7,500" },
            { name: "Últimos lugares", window: "Desde el 21 de septiembre", price: "$8,300" },
          ],
        },
      ] satisfies PriceTrack[],
    },
    faq: {
      title: "Preguntas frecuentes",
      copy: "Lo esencial antes de solicitar acceso.",
      questions: [
        {
          question: "¿Cuál es la diferencia entre el Summit y el Go & See?",
          answer:
            "Son dos capítulos de un mismo recorrido. El Summit ofrece amplitud: conversaciones con founders, operadores e investigadores, distintos casos y una red más amplia. El Go & See ofrece profundidad: un grupo ejecutivo entra al contexto de compañías que ya atravesaron una transformación para entender cómo ocurrió en la práctica.",
        },
        {
          question: "¿Cuándo ocurre cada experiencia?",
          answer:
            "El Summit es el jueves 8 de octubre de 2026 y el Executive Go & See es el viernes 9. Están diseñados para suceder uno después del otro, aunque cada día también puede comprarse por separado.",
        },
        {
          question: "¿Puedo comprar solo una de las experiencias?",
          answer:
            "Sí. Summit y Go & See se venden por separado. También puedes comprar la experiencia completa, que reúne ambos días con un precio menor que adquirirlos individualmente.",
        },
        {
          question: "¿Qué ocurre durante el Summit?",
          answer:
            "Es un día de conversaciones, casos y encuentros con founders, ejecutivos, investigadores y builders. El formato busca dejar tiempo para preguntas y relaciones, no llenar la agenda con presentaciones consecutivas.",
        },
        {
          question: "¿Qué ocurre durante el Go & See?",
          answer:
            "Visitamos organizaciones anfitrionas para aprender directamente de líderes y equipos que ya atravesaron una transformación. Observamos ejemplos reales del nuevo modo de trabajo, conversamos sobre avances y dificultades, y después contrastamos esos aprendizajes con los retos del grupo.",
        },
        {
          question: "¿Quién debería asistir al Summit?",
          answer:
            "Founders, CEOs y líderes de SMBs, startups, scaleups, gobierno o corporativos que quieren entender hacia dónde se mueve la IA y construir relaciones con quienes ya están trabajando en ella.",
        },
        {
          question: "¿Quién debería solicitar acceso al Go & See?",
          answer:
            "Corporate VPs, managers y C-levels responsables de decisiones de operación, talento, producto, tecnología o transformación. Revisaremos cada solicitud para cuidar la composición del grupo y que las conversaciones sean útiles para todos.",
        },
        {
          question: "¿Es una conferencia tradicional?",
          answer:
            "No. El Summit está diseñado para conversaciones pequeñas con espacio real para preguntas. El Go & See es todavía más reducido y sucede alrededor de compañías, equipos y decisiones concretas.",
        },
        {
          question: "¿Qué gastos están incluidos?",
          answer:
            "El Summit incluye alimentos y bebidas durante el día. El Go & See incluye dos noches de hospedaje y transporte durante la experiencia. Los vuelos hacia y desde San Francisco no están incluidos.",
        },
        {
          question: "¿Mi empresa puede comprar el acceso?",
          answer:
            "Sí. Las experiencias están diseñadas para que una empresa pueda patrocinar la participación de sus líderes. Los detalles de facturación se coordinan al confirmar el acceso.",
        },
        {
          question: "¿Cuándo se anunciarán speakers, aliados y compañías anfitrionas?",
          answer:
            "Los primeros anuncios se harán antes de abrir la venta general. Cada participación se publicará únicamente cuando esté confirmada.",
        },
        {
          question: "¿Por qué cambia el precio?",
          answer:
            "Cada experiencia tiene cupos limitados y requiere planeación anticipada. El precio aumenta por fases conforme se acerca la fecha o se agotan los lugares disponibles.",
        },
      ],
    },
    closing: {
      location: "San Francisco · 8–9 de octubre de 2026",
      title: "Dos días. Una forma más clara de decidir qué sigue.",
      imageAlt: "Paisaje de colinas en estilo ASCII",
    },
    footer: "Back to the Future · 2026",
  },
  en: {
    locale: "en" as const,
    metadata: {
      title: "Back to the Future 2026 | AI Summit & Executive Go & See",
      description:
        "An AI Summit on October 8 and Executive Go & See on October 9 during SF Tech Week. Two experiences for leaders in San Francisco and Napa.",
    },
    languageLabel: "ES",
    languageAria: "View this page in Spanish",
    requestAccess: "Request access",
    requestAccessSubject: "Back to the Future 2026",
    nav: {
      experiences: "Experiences",
      summit: "Summit",
      goSee: "Go & See",
      access: "Access",
      faq: "FAQ",
    },
    hero: {
      date: "October 8–9, 2026 · During SF Tech Week",
      title: "Back to the Future",
      summary:
        "Two consecutive days to understand what is next in AI and see it operating inside real companies. Choose the Summit, the Go & See, or experience both.",
      cta: "Explore the experiences",
      imageAlt: "San Francisco at sunset, with the Golden Gate Bridge and a cable car",
    },
    choice: {
      title: "One experience in two chapters.",
      copy:
        "The Summit opens the conversation on October 8; the Executive Go & See takes it into operations on the 9th. Buy either day on its own or experience both from beginning to end.",
      sequence: {
        note: "Designed to happen one after the other",
        purchase: "Choose one day or experience the full journey.",
        days: [
          {
            date: "October 8",
            name: "Summit",
            description: "Broaden your perspective and meet the people building the market.",
          },
          {
            date: "October 9",
            name: "Executive Go & See",
            description: "Step into operations and observe how other companies made the change.",
          },
        ],
      },
      tracks: [
        {
          id: "summit",
          number: "01",
          meta: "October 8 · Up to 50 people",
          name: "Summit",
          promise: "Understand what is coming and meet the people already building it.",
          description:
            "A small gathering of founders, operators and researchers to discuss what already works, what remains immature and the decisions every industry will face next.",
          audienceLabel: "For",
          audience:
            "Founders, CEOs, and leaders across SMBs, startups, scaleups, government and corporations.",
          link: "Explore the Summit",
          href: "#summit",
          image: "/images/experience-summit.jpg",
          imageAlt: "Abstract landscape built from colored points",
        },
        {
          id: "go-see",
          number: "02",
          meta: "October 9 · Up to 20 executives",
          name: "Executive Go & See",
          promise: "Learn from organizations that have already made the journey.",
          description:
            "A peer-learning experience to observe the work itself and speak directly with the people who moved AI into operations.",
          audienceLabel: "For",
          audience:
            "Corporate VPs, managers and C-level leaders responsible for transforming an existing organization.",
          link: "Explore the Go & See",
          href: "#go-see",
          image: "/images/experience-go-see.jpg",
          imageAlt: "Landscape built from colored points",
        },
      ],
    },
    premise: {
      title: "First understand the change. Then see it at work.",
      copy:
        "Both days follow the same sequence: hear from the people building, observe how other companies operate and compare those lessons with your own organization.",
      principles: [
        {
          number: "01",
          title: "Listen",
          text: "Speak directly with the people building and operating with AI.",
        },
        {
          number: "02",
          title: "Observe",
          text: "See how work, teams and decisions change when AI enters the operation.",
        },
        {
          number: "03",
          title: "Compare",
          text: "Bring each lesson back to the reality of your company, not an idealized case.",
        },
      ],
    },
    summit: {
      date: "October 8, 2026",
      title: "Summit: a small conversation about what comes next.",
      copy:
        "One day connecting technical perspective with business decisions. No endless sequence of presentations: concrete cases, direct questions and time to meet the people behind the ideas.",
      facts: [
        "Conversations and practical cases",
        "Access to speakers and participants",
        "Food and beverages throughout the day",
        "Optional group transportation from San Francisco to Napa",
      ],
      price: "From USD 899",
      speakersTitle: "People we want in the same conversation.",
      speakersCopy:
        "This is our initial list of proposed speakers. Participation will only be announced once confirmed.",
      profileAria: "View {name}'s LinkedIn profile",
    },
    goSee: {
      date: "October 9, 2026",
      title: "Executive Go & See: learn from those who made the journey.",
      copy:
        "Developed in partnership with OpenAI, this is a day of peer learning inside organizations that have already moved AI into operations. Host teams open up the process: what led them to change, how they progressed, where they struggled and how the work happens today.",
      partner: "In partnership with",
      imageAlt: "A technological landscape illuminated across green hills",
      featureTitle: "The transformation, told where it happened.",
      featureDescription:
        "A series of visits to hear directly from leaders and teams, observe new ways of working and compare those lessons with the challenges inside your company.",
      capacity: "Up to 20 corporate VPs, managers and C-level leaders.",
      steps: [
        {
          number: "01",
          title: "See how it operates",
          text: "Observe processes, new ways of working and live examples where they actually happen.",
        },
        {
          number: "02",
          title: "Hear from the people who did it",
          text: "Understand the decisions, resistance, mistakes and lessons behind the transformation.",
        },
        {
          number: "03",
          title: "Compare it with your company",
          text: "Discuss with a curated executive group what could transfer to your organization and what could not.",
        },
      ],
      facts: [
        "Private visits and conversations",
        "Two hotel nights",
        "Transportation throughout the experience",
        "Curated executive group",
      ],
      price: "From USD 5,000",
    },
    audience: {
      title: "Two connected chapters, each designed for a different group.",
      tracks: [
        {
          name: "Summit: breadth and context",
          description:
            "You want a broader perspective, access to people building the market and a clearer view of which opportunities could matter to your company or industry.",
          roles:
            "Founders, CEOs, and leaders across SMBs, startups, scaleups, government and corporations.",
        },
        {
          name: "Go & See: operational depth",
          description:
            "You already run an organization and need to see how other leaders turned an AI idea into real changes across operations, talent or product.",
          roles: "Corporate VPs, managers and C-level leaders responsible for transformation.",
        },
      ],
    },
    access: {
      title: "Choose one day or experience the full journey.",
      copy:
        "The October 8 Summit and the October 9 Go & See are sold separately. The full experience brings both days together at a preferred price.",
      explorer: {
        heading: "Select your experience",
        subheading: "Pricing changes by date and availability.",
        tabsAria: "Access type",
        currentPrice: "Current price",
        cta: "Request access",
        phasesHeading: "How pricing changes",
        phasesCopy:
          "Each phase closes on the listed date or when its available spots sell out.",
        note: "Prices are per person. Flights are not included.",
      },
      tracks: [
        {
          id: "summit",
          tab: "Summit",
          name: "Summit",
          capacity: "Up to 50 participants",
          audience:
            "Founders, CEOs, and leaders across SMBs, startups, scaleups, government and corporations.",
          description:
            "One day of conversations, cases and relationships to understand what already works and what is worth doing now.",
          includes: [
            "Summit access",
            "Food and beverages",
            "Optional group transportation to Napa",
          ],
          phases: [
            { name: "Initial presale", window: "Through August 1", price: "$899" },
            { name: "Early access", window: "August 2–31", price: "$1,100" },
            { name: "General sale", window: "September 1–20", price: "$1,250" },
            { name: "Final spots", window: "Starting September 21", price: "$1,400" },
          ],
        },
        {
          id: "go-see",
          tab: "Go & See",
          name: "Executive Go & See",
          capacity: "Up to 20 executives",
          audience:
            "Corporate VPs, managers and C-level leaders responsible for transforming an existing organization.",
          description:
            "Visits and conversations to observe how other companies brought AI into operations and discuss those decisions in context.",
          includes: [
            "Private visits and conversations",
            "Two hotel nights",
            "Local transportation",
          ],
          phases: [
            { name: "Initial presale", window: "Through August 1", price: "$5,000" },
            { name: "Early access", window: "August 2–31", price: "$6,000" },
            { name: "General sale", window: "September 1–20", price: "$6,750" },
            { name: "Final spots", window: "Starting September 21", price: "$7,500" },
          ],
        },
        {
          id: "combined",
          tab: "Full experience",
          name: "Summit + Go & See",
          capacity: "Up to 5 combined passes",
          audience:
            "Leaders who want to broaden the conversation at the Summit, then go deeper with the executive group.",
          description:
            "Both consecutive days at a preferred price, relevant introductions and a personalized 60-minute session.",
          includes: [
            "Summit and Go & See",
            "Relevant introductions",
            "Personalized 60-minute session",
          ],
          phases: [
            { name: "Initial presale", window: "Through August 1", price: "$5,750" },
            { name: "Early access", window: "August 2–31", price: "$6,750" },
            { name: "General sale", window: "September 1–20", price: "$7,500" },
            { name: "Final spots", window: "Starting September 21", price: "$8,300" },
          ],
        },
      ] satisfies PriceTrack[],
    },
    faq: {
      title: "Frequently asked questions",
      copy: "What to know before requesting access.",
      questions: [
        {
          question: "What is the difference between the Summit and the Go & See?",
          answer:
            "They are two chapters of the same journey. The Summit offers breadth: conversations with founders, operators and researchers, a range of cases and a broader network. The Go & See offers depth: a small executive group steps into the context of companies that have already gone through a transformation to understand how it happened in practice.",
        },
        {
          question: "When does each experience take place?",
          answer:
            "The Summit takes place on Thursday, October 8, 2026, followed by the Executive Go & See on Friday, October 9. They are designed to happen back to back, although each day can also be purchased separately.",
        },
        {
          question: "Can I purchase only one experience?",
          answer:
            "Yes. The Summit and Go & See are sold separately. You can also purchase the full experience, which brings both days together at a lower price than buying them individually.",
        },
        {
          question: "What happens during the Summit?",
          answer:
            "It is one day of conversations, cases and encounters with founders, executives, researchers and builders. The format leaves room for questions and relationships instead of filling the agenda with back-to-back presentations.",
        },
        {
          question: "What happens during the Go & See?",
          answer:
            "We visit host organizations to learn directly from leaders and teams that have already gone through a transformation. We observe live examples of the new way of working, discuss progress and challenges, and then compare those lessons with the needs of the group.",
        },
        {
          question: "Who should attend the Summit?",
          answer:
            "Founders, CEOs, and leaders across SMBs, startups, scaleups, government or corporations who want to understand where AI is heading and build relationships with people already working on it.",
        },
        {
          question: "Who should request access to the Go & See?",
          answer:
            "Corporate VPs, managers and C-level leaders responsible for decisions across operations, talent, product, technology or transformation. We review each request to protect the quality and relevance of the group.",
        },
        {
          question: "Is this a traditional conference?",
          answer:
            "No. The Summit is designed around small conversations with real room for questions. The Go & See is even smaller and takes place around companies, teams and concrete decisions.",
        },
        {
          question: "Which expenses are included?",
          answer:
            "The Summit includes food and beverages during the day. The Go & See includes two hotel nights and transportation throughout the experience. Flights to and from San Francisco are not included.",
        },
        {
          question: "Can my company purchase my access?",
          answer:
            "Yes. The experiences are designed so companies can sponsor their leaders' participation. Invoicing details are coordinated when access is confirmed.",
        },
        {
          question: "When will speakers, partners and host companies be announced?",
          answer:
            "The first announcements will be made before general sales open. Each participant or host will only be published once confirmed.",
        },
        {
          question: "Why does the price change?",
          answer:
            "Each experience has limited capacity and requires advance planning. Pricing increases by phase as the date approaches or available spots sell out.",
        },
      ],
    },
    closing: {
      location: "San Francisco · October 8–9, 2026",
      title: "Two days. A clearer way to decide what comes next.",
      imageAlt: "Hill landscape rendered in an ASCII style",
    },
    footer: "Back to the Future · 2026",
  },
};

export type EventContent = (typeof content)[Locale];
