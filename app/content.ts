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
      title: "Back to the Future 2026 | Una experiencia de IA en San Francisco",
      description:
        "Dos días conectados durante SF Tech Week: conversaciones con quienes construyen el futuro de la IA y un Go & See para verla funcionar en empresas reales.",
    },
    languageLabel: "EN",
    languageAria: "Ver la página en inglés",
    requestAccess: "Solicitar acceso",
    requestAccessSubject: "Back to the Future 2026",
    nav: {
      experiences: "Recorrido",
      summit: "Día 1",
      goSee: "Día 2",
      access: "Acceso",
      faq: "Preguntas",
    },
    hero: {
      date: "8–9 de octubre de 2026",
      techWeekLabel: "Durante",
      title: "Back to the Future",
      summary:
        "Una experiencia de dos días para entender hacia dónde va la IA y verla funcionar dentro de empresas reales. Solicita acceso al Summit, al Go & See o a ambos.",
      cta: "Conocer la experiencia",
      imageAlt: "Vista de San Francisco y el Golden Gate construida con un patrón de datos",
    },
    choice: {
      title: "De entender el cambio a verlo en acción.",
      copy:
        "Back to the Future conecta dos días consecutivos en un mismo recorrido. El 8 de octubre reúne las ideas, casos y personas que están moviendo el mercado. El día 9 lleva esa conversación a organizaciones donde la IA ya forma parte de la operación.",
      sequence: {
        note: "Una experiencia · dos días consecutivos",
        purchase: "Puedes solicitar acceso a uno o a ambos días.",
        days: [
          {
            date: "8 de octubre",
            name: "Summit",
            description: "Construye el contexto: qué funciona, qué viene y qué decisiones importan.",
          },
          {
            date: "9 de octubre",
            name: "Go & See",
            description: "Entra a la operación y observa cómo otras organizaciones hicieron el cambio.",
          },
        ],
      },
      tracks: [
        {
          id: "summit",
          number: "01",
          meta: "8 de octubre · Hasta 50 personas",
          name: "Summit",
          promise: "El contexto para entender qué está cambiando.",
          description:
            "Conversaciones pequeñas con founders, operadores e investigadores sobre casos reales, decisiones difíciles y lo que viene para cada industria.",
          audienceLabel: "Acceso",
          audience:
            "Por solicitud. Puedes asistir únicamente al Summit o continuar al Go & See.",
          link: "Ver el día 1",
          href: "#summit",
          image: "/images/summit-event.webp",
          imageAlt: "Asistentes durante una conversación sobre inteligencia artificial en San Francisco",
        },
        {
          id: "go-see",
          number: "02",
          meta: "9 de octubre · Máximo 20 personas",
          name: "Go & See",
          promise: "La evidencia para ver cómo se hizo.",
          description:
            "Visitas y conversaciones privadas con equipos que ya llevaron IA a sus operaciones: qué cambiaron, dónde fallaron y qué funciona hoy.",
          audienceLabel: "Acceso",
          audience:
            "Por solicitud. Puedes asistir únicamente al Go & See o vivir ambos días.",
          link: "Ver el día 2",
          href: "#go-see",
          image: "/images/go-and-see-event.webp",
          imageAlt: "Líderes conversando en un encuentro privado de aprendizaje",
        },
      ],
    },
    premise: {
      title: "Primero construyes criterio. Después ves la operación.",
      copy:
        "No son dos eventos separados. Es una secuencia diseñada para pasar de las ideas y relaciones del Summit a observar decisiones, procesos y equipos en el Go & See.",
      principles: [
        {
          number: "01",
          title: "Entender",
          text: "Contrasta perspectivas con las personas que están construyendo y operando con IA.",
        },
        {
          number: "02",
          title: "Observar",
          text: "Mira cómo cambian el trabajo, los equipos y las decisiones cuando la IA entra en operación.",
        },
        {
          number: "03",
          title: "Aplicar",
          text: "Discute qué aprendizajes sí podrían trasladarse a tu empresa y cuáles no.",
        },
      ],
    },
    summit: {
      date: "8 de octubre de 2026",
      title: "Día 1 · Summit: construye el contexto.",
      copy:
        "Una jornada para conectar perspectiva técnica y decisiones de negocio. Casos concretos, preguntas directas y tiempo para conocer a las personas detrás de las ideas.",
      facts: [
        "Conversaciones y casos prácticos",
        "Acceso a speakers y participantes",
        "Alimentos y bebidas durante el día",
        "Transporte grupal San Francisco–Napa opcional",
      ],
      price: "Desde USD 899",
      speakersTitle: "Una conversación difícil de encontrar en otro lugar.",
      speakersCopy:
        "Esta es nuestra primera lista de speakers propuestos. Las participaciones se anunciarán únicamente después de ser confirmadas.",
      profileAria: "Ver el perfil de {name} en LinkedIn",
    },
    goSee: {
      date: "9 de octubre de 2026",
      title: "Día 2 · Go & See: entra a la operación.",
      copy:
        "Desarrollado en colaboración con OpenAI, es una jornada dentro de organizaciones que ya llevaron IA a la operación. Sus equipos abren el proceso: qué los llevó a cambiar, cómo avanzaron, dónde tropezaron y cómo funciona hoy el trabajo.",
      partner: "En colaboración con",
      imageAlt: "Paisaje tecnológico iluminado sobre colinas verdes",
      featureTitle: "Un caso de estudio en vivo, contado por quienes lo operan.",
      featureDescription:
        "Una serie de visitas para escuchar directamente a líderes y equipos, observar nuevas formas de trabajo y contrastar lo aprendido con los retos de tu empresa.",
      capacity: "Grupo reducido. Acceso por solicitud.",
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
          text: "Discute con el grupo qué sí podría trasladarse a tu organización y qué no.",
        },
      ],
      facts: [
        "Visitas y conversaciones privadas",
        "Dos noches de hospedaje",
        "Transporte durante la experiencia",
        "Sesiones de contraste entre participantes",
      ],
      price: "Desde USD 5,000",
    },
    access: {
      title: "Solicita acceso a uno o ambos días.",
      copy:
        "Cada día puede adquirirse por separado. La experiencia completa reúne el Summit y el Go & See con un precio preferente.",
      explorer: {
        heading: "Elige tu acceso",
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
            "Acceso por solicitud para cuidar la calidad de las conversaciones.",
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
          name: "Go & See",
          capacity: "Máximo 20 participantes",
          audience:
            "Acceso por solicitud para cuidar la calidad de las conversaciones.",
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
            "Acceso por solicitud para quienes quieren vivir el recorrido completo.",
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
            "Son dos días de un mismo recorrido. El Summit construye contexto mediante conversaciones con founders, operadores e investigadores. El Go & See lleva ese contexto a la práctica mediante visitas y conversaciones con organizaciones que ya atravesaron una transformación.",
        },
        {
          question: "¿Cuándo ocurre cada experiencia?",
          answer:
            "El Summit es el jueves 8 de octubre de 2026 y el Go & See es el viernes 9. Están diseñados para suceder uno después del otro, aunque cada día también puede comprarse por separado.",
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
          question: "¿Quién puede solicitar acceso?",
          answer:
            "Founders, operadores, investigadores y líderes de empresas, startups, gobierno u otras organizaciones pueden aplicar al Summit, al Go & See o a ambos. Revisaremos cada solicitud para cuidar la calidad y relevancia de las conversaciones.",
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
      title: "Back to the Future 2026 | A two-day AI experience in San Francisco",
      description:
        "Two connected days during SF Tech Week: conversations with the people building the future of AI and a Go & See to observe it at work inside real companies.",
    },
    languageLabel: "ES",
    languageAria: "View this page in Spanish",
    requestAccess: "Request access",
    requestAccessSubject: "Back to the Future 2026",
    nav: {
      experiences: "Journey",
      summit: "Day 1",
      goSee: "Day 2",
      access: "Access",
      faq: "FAQ",
    },
    hero: {
      date: "October 8–9, 2026",
      techWeekLabel: "During",
      title: "Back to the Future",
      summary:
        "A two-day experience to understand where AI is going and see it at work inside real companies. Request access to the Summit, the Go & See, or both.",
      cta: "Discover the experience",
      imageAlt: "A view of San Francisco and the Golden Gate Bridge built from a data pattern",
    },
    choice: {
      title: "From understanding the change to seeing it in action.",
      copy:
        "Back to the Future connects two consecutive days in one journey. October 8 brings together the ideas, cases and people moving the market. On October 9, that conversation moves inside organizations where AI is already part of the operation.",
      sequence: {
        note: "One experience · two consecutive days",
        purchase: "Request access to either day or both.",
        days: [
          {
            date: "October 8",
            name: "Summit",
            description: "Build the context: what works, what is next and which decisions matter.",
          },
          {
            date: "October 9",
            name: "Go & See",
            description: "Step into operations and observe how other organizations made the change.",
          },
        ],
      },
      tracks: [
        {
          id: "summit",
          number: "01",
          meta: "October 8 · Up to 50 people",
          name: "Summit",
          promise: "The context to understand what is changing.",
          description:
            "Small conversations with founders, operators and researchers about real cases, difficult decisions and what comes next for each industry.",
          audienceLabel: "Access",
          audience:
            "By application. Attend the Summit on its own or continue into the Go & See.",
          link: "See day 1",
          href: "#summit",
          image: "/images/summit-event.webp",
          imageAlt: "Attendees during an artificial intelligence conversation in San Francisco",
        },
        {
          id: "go-see",
          number: "02",
          meta: "October 9 · Up to 20 people",
          name: "Go & See",
          promise: "The evidence to see how it was done.",
          description:
            "Private visits and conversations with teams that moved AI into operations: what changed, where they struggled and what works today.",
          audienceLabel: "Access",
          audience:
            "By application. Attend the Go & See on its own or experience both days.",
          link: "See day 2",
          href: "#go-see",
          image: "/images/go-and-see-event.webp",
          imageAlt: "Leaders in a private peer-learning conversation",
        },
      ],
    },
    premise: {
      title: "First build judgment. Then see the operation.",
      copy:
        "These are not two separate events. The sequence moves from the ideas and relationships of the Summit to observing decisions, processes and teams during the Go & See.",
      principles: [
        {
          number: "01",
          title: "Understand",
          text: "Compare perspectives with the people building and operating with AI.",
        },
        {
          number: "02",
          title: "Observe",
          text: "See how work, teams and decisions change when AI enters the operation.",
        },
        {
          number: "03",
          title: "Apply",
          text: "Discuss which lessons could transfer to your company and which could not.",
        },
      ],
    },
    summit: {
      date: "October 8, 2026",
      title: "Day 1 · Summit: build the context.",
      copy:
        "A day connecting technical perspective with business decisions. Concrete cases, direct questions and time to meet the people behind the ideas.",
      facts: [
        "Conversations and practical cases",
        "Access to speakers and participants",
        "Food and beverages throughout the day",
        "Optional group transportation from San Francisco to Napa",
      ],
      price: "From USD 899",
      speakersTitle: "A conversation that is difficult to find anywhere else.",
      speakersCopy:
        "This is our initial list of proposed speakers. Participation will only be announced once confirmed.",
      profileAria: "View {name}'s LinkedIn profile",
    },
    goSee: {
      date: "October 9, 2026",
      title: "Day 2 · Go & See: step into the operation.",
      copy:
        "Developed in partnership with OpenAI, this day takes place inside organizations that have already moved AI into operations. Their teams open up the process: what led them to change, how they progressed, where they struggled and how the work happens today.",
      partner: "In partnership with",
      imageAlt: "A technological landscape illuminated across green hills",
      featureTitle: "A live case study, told by the people operating it.",
      featureDescription:
        "A series of visits to hear directly from leaders and teams, observe new ways of working and compare those lessons with the challenges inside your company.",
      capacity: "Small group. Access by application.",
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
          text: "Discuss with the group what could transfer to your organization and what could not.",
        },
      ],
      facts: [
        "Private visits and conversations",
        "Two hotel nights",
        "Transportation throughout the experience",
        "Peer discussion sessions",
      ],
      price: "From USD 5,000",
    },
    access: {
      title: "Request access to either day or both.",
      copy:
        "Each day can be purchased separately. The full experience brings the Summit and Go & See together at a preferred price.",
      explorer: {
        heading: "Choose your access",
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
            "Access by application to protect the quality of the conversations.",
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
          name: "Go & See",
          capacity: "Up to 20 participants",
          audience:
            "Access by application to protect the quality of the conversations.",
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
            "Access by application for those who want to experience the full journey.",
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
            "They are two days in the same journey. The Summit builds context through conversations with founders, operators and researchers. The Go & See takes that context into practice through visits and conversations with organizations that have already gone through a transformation.",
        },
        {
          question: "When does each experience take place?",
          answer:
            "The Summit takes place on Thursday, October 8, 2026, followed by the Go & See on Friday, October 9. They are designed to happen back to back, although each day can also be purchased separately.",
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
          question: "Who can request access?",
          answer:
            "Founders, operators, researchers and leaders across companies, startups, government or other organizations can apply to the Summit, the Go & See or both. We review each request to protect the quality and relevance of the conversations.",
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
