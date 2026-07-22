export type Locale = "es" | "en";

export type PricingPhase = {
  name: string;
  availability: string;
  price: string;
};

export const content = {
  es: {
    locale: "es" as const,
    metadata: {
      title: "Becoming AI Native | Retiro privado en Napa Valley",
      description:
        "Un retiro privado de dos días para entender qué está cambiando con la IA, contrastarlo con otras industrias y aplicarlo a una situación real de tu organización.",
    },
    languageLabel: "EN",
    languageAria: "Ver la página en inglés",
    requestAccess: "Solicitar acceso",
    nav: {
      experience: "Experiencia",
      method: "Método",
      program: "Programa",
      hosts: "Anfitriones",
      access: "Acceso",
      faq: "Preguntas",
    },
    hero: {
      date: "5–6 de octubre de 2026",
      location: "Residencia privada de Alex Torrenegra · Napa Valley",
      techWeekLabel: "Durante",
      title: "Volviéndote AI Native",
      summary:
        "Dos días en Napa para distinguir qué está cambiando de verdad con la IA, ver cómo otras organizaciones lo están abordando y trabajar una situación propia hasta convertirla en una primera prueba.",
      cta: "Conocer la experiencia",
      imageAlt:
        "Viñedos de Napa Valley al amanecer junto a una residencia privada",
      facts: ["2 días de trabajo", "50 lugares", "Acceso por solicitud"],
    },
    promise: {
      title: "No necesitas otra lista de herramientas. Necesitas criterio para decidir qué cambiar.",
      copy:
        "El ruido cambia cada semana; las decisiones de tu organización no pueden hacerlo. Reunimos lo aprendido trabajando con compañías, usando las herramientas todos los días, conversando con laboratorios y observando Silicon Valley para ayudarte a mirar desde afuera una situación real, elegir dónde actuar y probar una primera versión durante el retiro.",
      outcomes: [
        {
          number: "01",
          title: "Criterio para separar señal de ruido",
          text: "Separa los cambios estructurales del ruido semanal usando patrones que ya aparecen en distintas industrias, mercados y tipos de organización.",
        },
        {
          number: "02",
          title: "Tu realidad vista desde afuera",
          text: "Contrasta cómo opera hoy tu empresa o área con otros casos para detectar supuestos, oportunidades y límites que desde dentro son difíciles de ver.",
        },
        {
          number: "03",
          title: "Una primera prueba propia",
          text: "Convierte lo aprendido en una prueba concreta que pueda mover a tu empresa, área o institución y que tú puedas impulsar al regresar.",
        },
      ],
    },
    method: {
      title: "La perspectiva se comparte. El trabajo ocurre sobre tu realidad.",
      copy:
        "Cada bloque comienza con un aprendizaje o caso de otra industria, lo aplicamos en vivo sobre la situación de un participante y después cada persona trabaja en la suya. Los anfitriones recorren la sala, responden dudas y cerramos comparando decisiones, no acumulando teoría.",
      imageAlt:
        "Alan Arguello compartiendo aprendizajes de inteligencia artificial frente a colaboraciones tecnológicas previas",
      steps: [
        {
          number: "01",
          title: "Perspectiva y casos",
          text: "Compartimos el patrón, las decisiones y los límites que hemos observado en otras organizaciones, sin convertir el retiro en una sucesión de presentaciones.",
        },
        {
          number: "02",
          title: "Caso voluntario en vivo",
          text: "Trabajamos un caso frente al grupo para hacer visibles las preguntas, decisiones y límites del método.",
        },
        {
          number: "03",
          title: "Trabajo sobre tu caso",
          text: "Traducimos lo aprendido a una situación real dentro de tu empresa, área o institución y tú desarrollas tu propia respuesta.",
        },
        {
          number: "04",
          title: "Puesta en común",
          text: "Revisamos resultados seleccionados, comparamos enfoques y corregimos antes de avanzar.",
        },
      ],
      note:
        "El formato funciona tanto si buscas hacer crecer una compañía como si quieres impulsar el cambio desde un área dentro de una empresa, scaleup o entidad de gobierno.",
    },
    socialProof: {
      title: "Una perspectiva que no viene de una sola empresa ni de una sola industria.",
      copy:
        "Reunimos lo aprendido al trabajar con cientos de compañías, construir y operar empresas tecnológicas, usar las herramientas y conversar con laboratorios, fundadores y líderes en Latinoamérica y Silicon Valley. No presentamos una receta: contrastamos patrones, casos y límites entre industrias.",
      partnershipsLabel: "Alianzas y membresías",
      partnerships: [
        {
          name: "OpenAI Partner Network",
          image: "/images/logos/partners/openai-partner-network.png",
        },
        { name: "Fedesoft", image: "/images/logos/partners/fedesoft.png.webp" },
        { name: "Cenisoft", image: "/images/logos/partners/cenisoft.png" },
      ],
      eventSupportLabel: "Empresas que han apoyado nuestros eventos",
      eventSupporters: [
        { name: "OpenAI", image: "/images/logos/collaborations/openai.png" },
        { name: "Anthropic", image: "/images/logos/collaborations/anthropic.png" },
        { name: "Google DeepMind", image: "/images/logos/collaborations/deepmind.png" },
        { name: "Lovable", image: "/images/logos/collaborations/lovable.png" },
        { name: "Supabase", image: "/images/logos/collaborations/supabase.png" },
        { name: "v0", image: "/images/logos/collaborations/v0.svg" },
      ],
      galleryLabel: "Encuentros y sesiones anteriores",
      galleryAria: "Eventos y sesiones organizados por el equipo",
      events: [
        {
          image: "/images/events/builders-night.webp",
          alt: "Builders' Night en el Consulado General de Colombia en San Francisco",
        },
        {
          image: "/images/events/ai-native-consulate.webp",
          alt: "Fireside chat sobre empresas AI Native en San Francisco",
        },
        {
          image: "/images/events/tactical-conversation.webp",
          alt: "Conversación con fundadores y operadores de tecnología",
        },
        {
          image: "/images/events/founder-summit.webp",
          alt: "Encuentro de fundadores y líderes de tecnología en Latinoamérica",
        },
        {
          image: "/images/events/private-workshop.webp",
          alt: "Encuentro privado para builders en una residencia",
        },
        {
          image: "/images/events/community-summit.webp",
          alt: "Comunidad de fundadores reunida durante un summit",
        },
      ],
    },
    research: {
      title:
        "El uso individual ya es común. La capacidad organizacional todavía no.",
      copy:
        "En nuestro benchmark, 80,9% de la muestra se concentra en uso individual: existe productividad personal, pero todavía no un flujo compartido, un responsable ni una métrica común. El retiro trabaja justamente esa transición sobre un caso real.",
      distributionLabel: "Distribución observada por nivel de adopción",
      evidenceLabel: "Qué significa",
      nextMoveLabel: "Qué falta para avanzar",
      focus:
        "El retiro trabaja especialmente esta transición: pasar del uso individual a un primer flujo compartido, con un caso claro, un responsable y criterios para evaluar si realmente mejora el trabajo.",
      note:
        "Muestra autoseleccionada y direccional de personas y organizaciones interesadas en IA; no representa un censo regional.",
      sourceLabel: "Explorar el benchmark completo",
      sourceHref:
        "https://www.torrenegra.com/es/insights/ai-adoption-latin-america",
      stages: [
        {
          level: 0,
          percentage: 6.3,
          color: "#d8e3df",
          title: "Sin uso relevante",
          shortLabel: "Sin uso",
          evidence:
            "La IA todavía no aparece en tareas recurrentes ni en conversaciones operativas del equipo.",
          nextMove:
            "Elegir una tarea frecuente, reversible y fácil de revisar.",
        },
        {
          level: 1,
          percentage: 80.9,
          color: "#7bc7b8",
          title: "Uso individual",
          shortLabel: "Uso individual",
          evidence:
            "Hay productividad personal, pero no existe un flujo compartido, un responsable ni una métrica común.",
          nextMove:
            "Escoger un flujo concreto y medir cómo funciona hoy antes de cambiarlo.",
        },
        {
          level: 2,
          percentage: 9.3,
          color: "#27a68f",
          title: "Pilotos aislados",
          shortLabel: "Pilotos",
          evidence:
            "La demostración funciona, aunque todavía depende de trabajo manual, datos preparados o seguimiento constante.",
          nextMove:
            "Asignar un responsable, usar datos reales y comparar el piloto contra una línea base.",
        },
        {
          level: 3,
          percentage: 1.9,
          color: "#087f6f",
          title: "Adopción operativa",
          shortLabel: "Operación",
          evidence:
            "La IA participa en un proceso recurrente con usuarios, reglas de revisión y una métrica de negocio.",
          nextMove:
            "Documentar controles y repetir el patrón en un proceso adyacente.",
        },
        {
          level: 4,
          percentage: 1.5,
          color: "#052823",
          title: "Escala institucional",
          shortLabel: "Escala",
          evidence:
            "La organización puede repetir la adopción entre áreas con estándares, responsables y evaluación continua.",
          nextMove:
            "Estandarizar arquitectura, permisos y criterios para escalar o retirar iniciativas.",
        },
      ],
    },
    program: {
      title: "Primero amplías la perspectiva. Después la aplicas.",
      copy:
        "Pocas sesiones, casos de distintas industrias y tiempo protegido para trabajar. Cada bloque conecta lo que estamos viendo fuera con una decisión dentro de tu organización.",
      days: [
        {
          id: "day-one",
          date: "Lunes 5 de octubre",
          time: "11:00 a.m. – 9:00 p.m.",
          title: "Día 1 · Ver el cambio con más contexto",
          description:
            "Primero conectamos lo aprendido en compañías, laboratorios y Silicon Valley para separar cambios estructurales de novedades pasajeras. Después usamos esa perspectiva para mirar tu organización desde afuera.",
          sessions: [
            {
              time: "11:00 – 12:30",
              title: "Lo que estamos viendo desde distintos frentes",
              text: "Patrones que aparecen al trabajar con compañías, usar las herramientas, conversar con laboratorios de IA y observar Silicon Valley: qué cambia de verdad y qué sigue siendo ruido.",
            },
            {
              time: "12:30 – 1:30",
              title: "Almuerzo",
              text: "Una mesa compartida para conocer el contexto de los demás participantes.",
            },
            {
              time: "1:30 – 5:30",
              title: "Ver tu organización con otros ojos",
              text: "Caso voluntario en vivo y trabajo propio para cuestionar cómo opera hoy una tarea o proceso, compararlo con otros enfoques y rediseñarlo con las capacidades actuales.",
            },
            {
              time: "5:30 – 6:30",
              title: "Contraste entre industrias",
              text: "Presentamos resultados seleccionados, comparamos decisiones y afinamos qué vale la pena probar al día siguiente.",
            },
            {
              time: "7:00 – 9:00",
              title: "Cena en la residencia",
              text: "Conversación abierta entre participantes y anfitriones.",
            },
          ],
        },
        {
          id: "day-two",
          date: "Martes 6 de octubre",
          time: "11:00 a.m. – 5:30 p.m.",
          title: "Día 2 · Convertir perspectiva en capacidad",
          description:
            "Convertimos la nueva forma de ver el caso en instrucciones, contexto y criterios de calidad; después construimos una primera versión para aprender haciendo.",
          sessions: [
            {
              time: "11:00 – 12:30",
              title: "Construir para poder evaluar",
              text: "Cómo definir el resultado esperado, entregar contexto, dividir el trabajo y diseñar verificaciones que no dependan de una respuesta que simplemente suene bien.",
            },
            {
              time: "12:30 – 1:30",
              title: "Almuerzo",
              text: "Pausa antes del bloque práctico de construcción.",
            },
            {
              time: "1:30 – 4:15",
              title: "Laboratorio de construcción y prueba",
              text: "Demo en vivo, trabajo individual y apoyo en sala para crear una primera versión con una herramienta de IA y probarla con tres ejemplos sin información sensible.",
            },
            {
              time: "4:15 – 5:30",
              title: "Resultado y siguiente decisión",
              text: "Comparamos calidad, tiempo y límites; definimos qué vale la pena probar después, quién debería participar y qué evidencia justificaría continuar.",
            },
          ],
        },
      ],
      transport:
        "El transporte grupal saldrá de San Francisco el lunes por la mañana y regresará el martes después del cierre. El punto exacto se compartirá con los participantes confirmados.",
      weekContext: {
        label: "Al inicio de SF Tech Week",
        title: "Empieza la semana con dos días de foco.",
        copy:
          "El retiro ocurre el lunes 5 y martes 6 de octubre, al comienzo de SF Tech Week. Después tendrás el resto de la semana libre para asistir a otros eventos, reunirte con el ecosistema o continuar tu agenda en San Francisco.",
      },
    },
    workingSession: {
      title: "El valor no es salir sabiendo más. Es poder hacer algo distinto.",
      copy:
        "Trabajarás sobre algo que ya ocurre en tu organización y usarás la perspectiva del grupo para convertirlo en una primera prueba. Al terminar tendrás evidencia para proponer el siguiente cambio, no solo argumentos para hablar de IA.",
      imageAlt:
        "Alexander Torrenegra durante una sesión con el equipo de Nestlé",
      bringTitle: "Antes de llegar",
      bring: [
        "Elige una tarea, un entregable o un proceso que ocurra al menos dos veces al mes.",
        "Trae tres ejemplos reales sin datos confidenciales.",
        "Lleva tu computadora y acceso a una herramienta de IA aprobada por tu organización.",
      ],
      leaveTitle: "Al terminar",
      leave: [
        "Un caso priorizado y una métrica de éxito.",
        "El mapa actual y el flujo propuesto.",
        "Una primera versión probada con evidencia.",
        "Criterios claros para decidir si conviene continuar, corregir o detener.",
      ],
    },
    hosts: {
      title: "Tres anfitriones para conectar los puntos.",
      copy:
        "Combinamos experiencia técnica, construcción e inversión en compañías con lo aprendido dentro de organizaciones, eventos y conversaciones con el ecosistema de IA. Nuestro trabajo en Napa será convertir todo ese contexto en preguntas y decisiones útiles para tu realidad.",
      credentialsLabel: "Experiencia relevante",
      profileAria: "Ver el perfil de {name} en LinkedIn",
      people: [
        {
          name: "Alexander Torrenegra",
          role: "Fundador tecnológico, inversionista ángel y LP",
          bio: "Fundador de Torre, Voice123 y Bunny Studio. Construyó marketplaces globales, vendió Voice123 y participó como inversionista en Shark Tank Colombia y México.",
          image: "/images/speakers/alexander-torrenegra.webp",
          linkedin: "https://www.linkedin.com/in/alextorrenegra/",
          credentials: ["MIT Innovator Under 35", "WEF Young Global Leader", "Endeavor Entrepreneur"],
          logos: [
            { name: "Torre.ai", image: "/images/logos/hosts/torre-ai.png" },
            { name: "Bunny Inc.", image: "/images/logos/hosts/bunnyinc.svg" },
            { name: "Shark Tank", image: "/images/logos/hosts/shark-tank.png" },
            { name: "Endeavor", image: "/images/logos/hosts/endeavor.svg" },
          ],
        },
        {
          name: "Tania Zapata",
          role: "Fundadora, operadora, inversionista ángel y LP",
          bio: "Cofundó y lideró Voice123, adquirida por Backstage en 2021, y hoy preside Bunny Inc. También invierte y asesora startups en Latinoamérica y Estados Unidos.",
          image: "/images/speakers/tania-zapata.webp",
          linkedin: "https://www.linkedin.com/in/taniazapata/",
          credentials: ["Co-founder & former CEO, Voice123", "Chairwoman, Bunny Inc.", "Stanford Endeavor Leadership Program"],
          logos: [
            { name: "Bunny Inc.", image: "/images/logos/hosts/bunnyinc.svg" },
            { name: "Stanford University", image: "/images/logos/hosts/stanford.png" },
            { name: "Endeavor", image: "/images/logos/hosts/endeavor.svg" },
          ],
        },
        {
          name: "Alan Arguello",
          role: "Ingeniero de software, fundador y operador",
          bio: "MSc en Computer Science en Georgia Tech. Cofundó una startup respaldada por Platanus Ventures y ha construido software, productos de IA y programas para fundadores en Latinoamérica.",
          image: "/images/speakers/alan-arguello-sf.webp",
          linkedin: "https://www.linkedin.com/in/alan-arguello/",
          credentials: ["MSc Computer Science · Georgia Tech", "Software Engineer · Beek, Citi y NWL", "Platanus Ventures Alumni"],
          logos: [
            { name: "Georgia Tech", image: "/images/logos/hosts/georgia.png" },
            { name: "Platanus Ventures", image: "/images/logos/hosts/platanus.png" },
            { name: "On Deck", image: "/images/logos/hosts/odf.svg" },
          ],
        },
      ],
    },
    access: {
      title: "50 lugares. Acceso por solicitud.",
      copy:
        "La sala está pensada para fundadores, dueños y líderes que puedan usar una perspectiva externa para mover una compañía, un área o una institución. La solicitud nos permite reunir contextos distintos y cuidar que la conversación sea relevante para todos.",
      explorer: {
        heading: "Precio según fecha de confirmación",
        subheading:
          "La experiencia es la misma para todos. El precio cambia en las fechas indicadas.",
        currentLabel: "Hasta el 31 de julio",
        cta: "Solicitar acceso",
        phasesHeading: "Fases de acceso",
        phasesCopy:
          "El precio aplicable depende de la fecha en que confirmes tu lugar.",
        includedTitle: "Tu acceso incluye",
        included: [
          "Los dos días completos de trabajo",
          "Almuerzo y cena el lunes; almuerzo el martes",
          "Café, bebidas y snacks durante ambas jornadas",
          "Transporte grupal San Francisco–Napa–San Francisco",
          "Materiales, plantillas y apoyo de facilitadores en sala",
        ],
        note:
          "Precios por persona. Hospedaje y vuelos no incluidos. Compartiremos opciones cercanas con quienes sean aceptados.",
      },
      phases: [
        { name: "Precio 1", availability: "Hasta el 31 de julio", price: "1,450" },
        { name: "Precio 2", availability: "1–15 de agosto", price: "1,750" },
        { name: "Precio 3", availability: "16–31 de agosto", price: "2,150" },
        { name: "Precio 4", availability: "Desde el 1 de septiembre", price: "2,450" },
      ] satisfies PricingPhase[],
      processTitle: "Cómo funciona la solicitud",
      process: [
        "Cuéntanos tu rol, organización y el caso que te gustaría trabajar.",
        "Confirmamos si el formato puede aportarte valor y si tu perfil complementa la sala.",
        "Al ser aceptado, conservamos durante 48 horas el precio vigente en esa fecha.",
      ],
      form: {
        title: "Cuéntanos lo suficiente para evaluar el fit.",
        intro:
          "Toma cerca de dos minutos. Revisamos cada solicitud para cuidar que la experiencia y la sala sean relevantes.",
        fields: {
          name: "Nombre completo",
          email: "Correo de trabajo",
          organization: "Empresa u organización",
          role: "Cargo o función",
          linkedin: "Perfil de LinkedIn",
          linkedinHint: "Opcional, pero nos ayuda a entender tu contexto.",
          outcome: "¿Qué te gustaría trabajar durante los dos días?",
          outcomePlaceholder:
            "Describe brevemente la situación que quieres entender, rediseñar o probar.",
          payment: "¿Cómo esperas cubrir el acceso?",
          paymentPlaceholder: "Selecciona una opción",
          paymentOptions: [
            { value: "organization", label: "Mi organización cubriría el acceso" },
            { value: "self", label: "Lo pagaría personalmente" },
            { value: "internal-approval", label: "Necesito aprobación interna" },
            { value: "evaluating", label: "Aún lo estoy evaluando" },
          ],
        },
        attendance:
          "Puedo estar en Napa el 5 y 6 de octubre y entiendo que el acceso comienza en USD 1,450 por persona.",
        privacy:
          "Usaremos esta información únicamente para revisar tu solicitud.",
        submit: "Enviar solicitud",
        submitting: "Enviando solicitud",
        success:
          "Recibimos tu solicitud. Te escribiremos después de revisar el fit con la experiencia.",
        error:
          "No pudimos enviar la solicitud. Intenta de nuevo en unos minutos.",
      },
    },
    faq: {
      title: "Preguntas frecuentes",
      copy: "Lo esencial antes de solicitar acceso.",
      questions: [
        {
          question: "¿Qué voy a tener al terminar los dos días?",
          answer:
            "Una lectura más amplia de lo que está cambiando, referencias de otras industrias y un caso propio trabajado de principio a fin: cómo funciona hoy, cómo podría funcionar y una primera versión probada con ejemplos reales.",
        },
        {
          question: "¿Quién debería solicitar acceso?",
          answer:
            "Fundadores y dueños de empresa, así como líderes de áreas en startups, scaleups, corporativos o entidades públicas. Lo importante es que puedas trabajar sobre una situación real y tengas margen para impulsar una prueba al regresar.",
        },
        {
          question: "¿Necesito saber programar?",
          answer:
            "No. El laboratorio parte del problema y del flujo de trabajo. Cada persona puede llegar a una profundidad distinta según su experiencia; habrá facilitadores para apoyar la parte práctica.",
        },
        {
          question: "¿Qué tipo de caso debo llevar?",
          answer:
            "Una tarea, entregable o proceso recurrente que tenga entradas y un resultado reconocible. Debe estar dentro de tu área de influencia y ocurrir al menos dos veces al mes para que puedas probarlo después del retiro.",
        },
        {
          question: "¿Debo compartir información confidencial?",
          answer:
            "No. Pedimos llevar ejemplos sin datos personales, secretos comerciales ni información restringida. El método debe poder aplicarse sin exponer información sensible.",
        },
        {
          question: "¿Cuáles son los horarios?",
          answer:
            "El lunes 5 de octubre trabajaremos de 11:00 a.m. a 6:30 p.m. y tendremos una cena de 7:00 a 9:00 p.m. El martes 6 trabajaremos de 11:00 a.m. a 5:30 p.m.",
        },
        {
          question: "¿Qué incluye el acceso?",
          answer:
            "Incluye las dos jornadas, alimentos y bebidas indicados, materiales, apoyo en sala y transporte grupal desde San Francisco a Napa el lunes y de regreso el martes. No incluye hospedaje ni vuelos.",
        },
        {
          question: "¿Dónde será el retiro?",
          answer:
            "En la residencia privada de Alex Torrenegra en Napa Valley. El aforo es limitado y la dirección exacta, junto con los detalles de llegada, se comparte únicamente con participantes confirmados.",
        },
        {
          question: "¿Mi empresa puede pagar mi acceso?",
          answer:
            "Sí. Podemos emitir la documentación de pago a nombre de la empresa. El acceso y el precio son por persona.",
        },
        {
          question: "¿Por qué cambia el precio?",
          answer:
            "El retiro tiene 50 lugares y el costo de planeación aumenta conforme se acerca la fecha. La tarifa aplicable es la publicada para el día en que cada participante confirma su lugar.",
        },
      ],
    },
    closing: {
      location: "Napa Valley · 5–6 de octubre de 2026",
      title: "Vuelve con una perspectiva que pueda cambiar lo que tu organización hace.",
      imageAlt: "Colinas de Napa Valley representadas en estilo ASCII",
    },
    socialsLabel: "Sigue nuestro trabajo",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/school/torrenegraorg/" },
      { label: "YouTube", href: "https://www.youtube.com/@torrenegraconsulting" },
      { label: "Instagram", href: "https://www.instagram.com/torrenegraconsulting/" },
    ],
    footer: "Becoming AI Native · Retiro privado · 2026",
  },
  en: {
    locale: "en" as const,
    metadata: {
      title: "Becoming AI Native | Private retreat in Napa Valley",
      description:
        "A private two-day retreat to understand what AI is changing, see it across industries and apply it to a real situation inside your organization.",
    },
    languageLabel: "ES",
    languageAria: "View this page in Spanish",
    requestAccess: "Request access",
    nav: {
      experience: "Experience",
      method: "Method",
      program: "Program",
      hosts: "Hosts",
      access: "Access",
      faq: "FAQ",
    },
    hero: {
      date: "October 5–6, 2026",
      location: "Alex Torrenegra’s private residence · Napa Valley",
      techWeekLabel: "During",
      title: "Becoming AI Native",
      summary:
        "Two days in Napa to distinguish what is really changing with AI, see how other organizations are responding and work through one situation of your own until it becomes a first test.",
      cta: "Explore the experience",
      imageAlt:
        "Napa Valley vineyards at sunrise beside a private residence",
      facts: ["2 working days", "50 seats", "Application only"],
    },
    promise: {
      title: "You do not need another list of tools. You need judgment about what to change.",
      copy:
        "The noise changes every week; your organization's decisions cannot. We bring together what we have learned from working with companies, using the tools every day, talking with AI labs and watching Silicon Valley to help you view one real situation from outside, choose where to act and test a first version during the retreat.",
      outcomes: [
        {
          number: "01",
          title: "Judgment to separate signal from noise",
          text: "Separate structural shifts from the weekly noise using patterns already appearing across industries, markets and types of organization.",
        },
        {
          number: "02",
          title: "Your reality viewed from outside",
          text: "Compare how your company or team operates today with other cases to uncover assumptions, opportunities and limits that are difficult to see from within.",
        },
        {
          number: "03",
          title: "A first test of your own",
          text: "Turn what you learn into a concrete test that can move your company, team or institution forward and that you can champion when you return.",
        },
      ],
    },
    method: {
      title: "The perspective is shared. The work happens on your reality.",
      copy:
        "Every block starts with a lesson or case from another industry, applies it live to one participant's situation and then gives everyone time to work on their own. Hosts move around the room, answer questions and close by comparing decisions rather than accumulating theory.",
      imageAlt:
        "Alan Arguello sharing artificial intelligence lessons in front of previous technology collaborations",
      steps: [
        {
          number: "01",
          title: "Perspective and cases",
          text: "We share the pattern, decisions and limits observed in other organizations without turning the retreat into a sequence of presentations.",
        },
        {
          number: "02",
          title: "Live volunteer case",
          text: "We work through one case in front of the room to make the method's questions, decisions and limits visible.",
        },
        {
          number: "03",
          title: "Work on your case",
          text: "Translate the lesson into a real situation inside your company, team or institution and develop your own response.",
        },
        {
          number: "04",
          title: "Group review",
          text: "Review selected results, compare approaches and correct course before moving on.",
        },
      ],
      note:
        "The format works whether you are growing a company or leading change from a team inside a business, scaleup or public institution.",
    },
    socialProof: {
      title: "A perspective that does not come from one company or one industry.",
      copy:
        "We bring together what we have learned from working with hundreds of companies, building and operating technology businesses, using the tools and talking with AI labs, founders and leaders across Latin America and Silicon Valley. We do not present a recipe; we compare patterns, cases and limits across industries.",
      partnershipsLabel: "Partnerships and memberships",
      partnerships: [
        {
          name: "OpenAI Partner Network",
          image: "/images/logos/partners/openai-partner-network.png",
        },
        { name: "Fedesoft", image: "/images/logos/partners/fedesoft.png.webp" },
        { name: "Cenisoft", image: "/images/logos/partners/cenisoft.png" },
      ],
      eventSupportLabel: "Companies that have supported our events",
      eventSupporters: [
        { name: "OpenAI", image: "/images/logos/collaborations/openai.png" },
        { name: "Anthropic", image: "/images/logos/collaborations/anthropic.png" },
        { name: "Google DeepMind", image: "/images/logos/collaborations/deepmind.png" },
        { name: "Lovable", image: "/images/logos/collaborations/lovable.png" },
        { name: "Supabase", image: "/images/logos/collaborations/supabase.png" },
        { name: "v0", image: "/images/logos/collaborations/v0.svg" },
      ],
      galleryLabel: "Previous gatherings and working sessions",
      galleryAria: "Events and working sessions organized by the team",
      events: [
        {
          image: "/images/events/builders-night.webp",
          alt: "Builders' Night at the Consulate General of Colombia in San Francisco",
        },
        {
          image: "/images/events/ai-native-consulate.webp",
          alt: "AI Native fireside chat in San Francisco",
        },
        {
          image: "/images/events/tactical-conversation.webp",
          alt: "Conversation with technology founders and operators",
        },
        {
          image: "/images/events/founder-summit.webp",
          alt: "Gathering of technology founders and leaders in Latin America",
        },
        {
          image: "/images/events/private-workshop.webp",
          alt: "Private gathering for builders at a residence",
        },
        {
          image: "/images/events/community-summit.webp",
          alt: "Founder community gathered during a summit",
        },
      ],
    },
    research: {
      title:
        "Individual use is already common. Organizational capability is not.",
      copy:
        "In our benchmark, 80.9% of the sample is concentrated in individual use: personal productivity exists, but a shared workflow, owner and common metric do not. The retreat works on precisely this transition through a real case.",
      distributionLabel: "Observed distribution by adoption level",
      evidenceLabel: "What it means",
      nextMoveLabel: "What is needed to advance",
      focus:
        "The retreat works specifically on this transition: moving from individual use to a first shared workflow with a clear case, an owner and criteria for deciding whether it actually improves the work.",
      note:
        "A directional, self-selected sample of people and organizations already interested in AI; it is not a regional census.",
      sourceLabel: "Explore the full benchmark",
      sourceHref:
        "https://www.torrenegra.com/en/insights/ai-adoption-latin-america",
      stages: [
        {
          level: 0,
          percentage: 6.3,
          color: "#d8e3df",
          title: "No meaningful use",
          shortLabel: "No use",
          evidence:
            "AI does not yet appear in recurring tasks or in the team's operating conversations.",
          nextMove:
            "Choose one frequent, reversible task that is easy to review.",
        },
        {
          level: 1,
          percentage: 80.9,
          color: "#7bc7b8",
          title: "Individual use",
          shortLabel: "Individual use",
          evidence:
            "There is personal productivity, but no shared workflow, owner or common metric.",
          nextMove:
            "Choose a concrete workflow and measure how it performs today before changing it.",
        },
        {
          level: 2,
          percentage: 9.3,
          color: "#27a68f",
          title: "Isolated pilots",
          shortLabel: "Pilots",
          evidence:
            "The demo works, but still depends on manual work, prepared data or constant follow-up.",
          nextMove:
            "Assign an owner, use real data and compare the pilot against a baseline.",
        },
        {
          level: 3,
          percentage: 1.9,
          color: "#087f6f",
          title: "Operational adoption",
          shortLabel: "Operations",
          evidence:
            "AI participates in a recurring process with users, review rules and a business metric.",
          nextMove:
            "Document controls and repeat the pattern in an adjacent process.",
        },
        {
          level: 4,
          percentage: 1.5,
          color: "#052823",
          title: "Institutional scale",
          shortLabel: "Scale",
          evidence:
            "The organization can repeat adoption across teams with standards, owners and continuous evaluation.",
          nextMove:
            "Standardize architecture, permissions and criteria for scaling or retiring initiatives.",
        },
      ],
    },
    program: {
      title: "First widen your perspective. Then apply it.",
      copy:
        "A small number of sessions, cases from different industries and protected time to work. Every block connects what we are seeing outside with a decision inside your organization.",
      days: [
        {
          id: "day-one",
          date: "Monday, October 5",
          time: "11:00 a.m. – 9:00 p.m.",
          title: "Day 1 · See the change with more context",
          description:
            "First, connect what we have learned across companies, AI labs and Silicon Valley to separate structural shifts from passing novelty. Then use that perspective to look at your organization from outside.",
          sessions: [
            {
              time: "11:00 – 12:30",
              title: "What we are seeing from different vantage points",
              text: "Patterns from working with companies, using the tools, talking with AI labs and watching Silicon Valley: what is actually changing and what remains noise.",
            },
            {
              time: "12:30 – 1:30",
              title: "Lunch",
              text: "A shared table to understand the context of the other participants.",
            },
            {
              time: "1:30 – 5:30",
              title: "See your organization with fresh eyes",
              text: "A live volunteer case followed by individual work to question how a task or process operates today, compare it with other approaches and redesign it around current capabilities.",
            },
            {
              time: "5:30 – 6:30",
              title: "Cross-industry comparison",
              text: "Share selected results, compare decisions and refine what is worth testing the following day.",
            },
            {
              time: "7:00 – 9:00",
              title: "Dinner at the residence",
              text: "An open conversation between participants and hosts.",
            },
          ],
        },
        {
          id: "day-two",
          date: "Tuesday, October 6",
          time: "11:00 a.m. – 5:30 p.m.",
          title: "Day 2 · Turn perspective into capability",
          description:
            "Turn the new way of seeing the case into instructions, context and quality criteria; then build a first version so you can learn by doing.",
          sessions: [
            {
              time: "11:00 – 12:30",
              title: "Build in order to evaluate",
              text: "Define the expected result, supply the right context, divide the work and design checks that do not depend on an answer merely sounding good.",
            },
            {
              time: "12:30 – 1:30",
              title: "Lunch",
              text: "A break before the hands-on building block.",
            },
            {
              time: "1:30 – 4:15",
              title: "Build-and-test lab",
              text: "A live demo, individual work and in-room support to create a first version with an AI tool and test it against three examples with sensitive information removed.",
            },
            {
              time: "4:15 – 5:30",
              title: "Result and next decision",
              text: "Compare quality, time and limits; define what is worth testing next, who should participate and what evidence would justify continuing.",
            },
          ],
        },
      ],
      transport:
        "Group transportation will leave San Francisco on Monday morning and return after Tuesday's closing session. The exact meeting point will be shared with confirmed participants.",
      weekContext: {
        label: "At the start of SF Tech Week",
        title: "Start the week with two focused days.",
        copy:
          "The retreat takes place on Monday, October 5 and Tuesday, October 6, at the beginning of SF Tech Week. The rest of the week remains open for other events, meetings and time with the San Francisco ecosystem.",
      },
    },
    workingSession: {
      title: "The value is not leaving knowing more. It is being able to do something differently.",
      copy:
        "You will work on something that already happens inside your organization and use the room's perspective to turn it into a first test. You will leave with evidence for proposing the next change, not only arguments for talking about AI.",
      imageAlt:
        "Alexander Torrenegra during a session with the Nestlé team",
      bringTitle: "Before you arrive",
      bring: [
        "Choose a task, deliverable or process that happens at least twice a month.",
        "Bring three real examples with sensitive data removed.",
        "Bring your laptop and access to an AI tool approved by your organization.",
      ],
      leaveTitle: "When you leave",
      leave: [
        "A prioritized case and a success metric.",
        "A map of the current and proposed workflows.",
        "A first version tested with evidence.",
        "Clear criteria to decide whether to continue, correct or stop.",
      ],
    },
    hosts: {
      title: "Three hosts to connect the dots.",
      copy:
        "We combine technical experience, company building and investing with what we have learned inside organizations, at events and in conversations across the AI ecosystem. Our work in Napa is to turn that context into useful questions and decisions for your reality.",
      credentialsLabel: "Relevant experience",
      profileAria: "View {name}'s LinkedIn profile",
      people: [
        {
          name: "Alexander Torrenegra",
          role: "Technology founder, angel investor and LP",
          bio: "Founder of Torre, Voice123 and Bunny Studio. He built global marketplaces, sold Voice123 and appeared as an investor on Shark Tank Colombia and Mexico.",
          image: "/images/speakers/alexander-torrenegra.webp",
          linkedin: "https://www.linkedin.com/in/alextorrenegra/",
          credentials: ["MIT Innovator Under 35", "WEF Young Global Leader", "Endeavor Entrepreneur"],
          logos: [
            { name: "Torre.ai", image: "/images/logos/hosts/torre-ai.png" },
            { name: "Bunny Inc.", image: "/images/logos/hosts/bunnyinc.svg" },
            { name: "Shark Tank", image: "/images/logos/hosts/shark-tank.png" },
            { name: "Endeavor", image: "/images/logos/hosts/endeavor.svg" },
          ],
        },
        {
          name: "Tania Zapata",
          role: "Exited founder, operator, angel investor and LP",
          bio: "She co-founded and led Voice123, acquired by Backstage in 2021, and now chairs Bunny Inc. She also invests in and advises startups across Latin America and the United States.",
          image: "/images/speakers/tania-zapata.webp",
          linkedin: "https://www.linkedin.com/in/taniazapata/",
          credentials: ["Co-founder & former CEO, Voice123", "Chairwoman, Bunny Inc.", "Stanford Endeavor Leadership Program"],
          logos: [
            { name: "Bunny Inc.", image: "/images/logos/hosts/bunnyinc.svg" },
            { name: "Stanford University", image: "/images/logos/hosts/stanford.png" },
            { name: "Endeavor", image: "/images/logos/hosts/endeavor.svg" },
          ],
        },
        {
          name: "Alan Arguello",
          role: "Software engineer, founder and operator",
          bio: "Computer Science MSc candidate at Georgia Tech. He co-founded a Platanus Ventures-backed startup and has built software, AI products and founder programs across Latin America.",
          image: "/images/speakers/alan-arguello-sf.webp",
          linkedin: "https://www.linkedin.com/in/alan-arguello/",
          credentials: ["MSc Computer Science · Georgia Tech", "Software Engineer · Beek, Citi and NWL", "Platanus Ventures Alumni"],
          logos: [
            { name: "Georgia Tech", image: "/images/logos/hosts/georgia.png" },
            { name: "Platanus Ventures", image: "/images/logos/hosts/platanus.png" },
            { name: "On Deck", image: "/images/logos/hosts/odf.svg" },
          ],
        },
      ],
    },
    access: {
      title: "50 seats. Access by application.",
      copy:
        "The room is designed for founders, owners and leaders who can use an outside perspective to move a company, team or institution forward. The application helps us bring together different contexts while keeping the conversation relevant for everyone.",
      explorer: {
        heading: "Pricing by confirmation date",
        subheading:
          "The experience is identical for everyone. Pricing changes on the dates listed below.",
        currentLabel: "Through July 31",
        cta: "Request access",
        phasesHeading: "Access phases",
        phasesCopy:
          "Your price is determined by the date on which you confirm your seat.",
        includedTitle: "Your access includes",
        included: [
          "Both full working days",
          "Monday lunch and dinner; Tuesday lunch",
          "Coffee, beverages and snacks on both days",
          "Group transportation San Francisco–Napa–San Francisco",
          "Materials, templates and support from in-room facilitators",
        ],
        note:
          "Prices are per person. Lodging and flights are not included. Accepted participants will receive a list of nearby options.",
      },
      phases: [
        { name: "Price 1", availability: "Through July 31", price: "1,450" },
        { name: "Price 2", availability: "August 1–15", price: "1,750" },
        { name: "Price 3", availability: "August 16–31", price: "2,150" },
        { name: "Price 4", availability: "From September 1", price: "2,450" },
      ] satisfies PricingPhase[],
      processTitle: "How the application works",
      process: [
        "Tell us about your role, organization and the case you would like to work on.",
        "We confirm whether the format can help and whether your profile complements the room.",
        "Once accepted, we hold the price available on that date for 48 hours.",
      ],
      form: {
        title: "Tell us enough to evaluate fit.",
        intro:
          "This takes about two minutes. We review every application to keep the experience and the room relevant.",
        fields: {
          name: "Full name",
          email: "Work email",
          organization: "Company or organization",
          role: "Role or title",
          linkedin: "LinkedIn profile",
          linkedinHint: "Optional, but helpful for understanding your context.",
          outcome: "What would you like to work on during the two days?",
          outcomePlaceholder:
            "Briefly describe the situation you want to understand, redesign or test.",
          payment: "How do you expect to cover access?",
          paymentPlaceholder: "Select an option",
          paymentOptions: [
            { value: "organization", label: "My organization would cover access" },
            { value: "self", label: "I would pay personally" },
            { value: "internal-approval", label: "I need internal approval" },
            { value: "evaluating", label: "I am still evaluating" },
          ],
        },
        attendance:
          "I can be in Napa on October 5 and 6 and understand that access starts at USD 1,450 per person.",
        privacy:
          "We will use this information only to review your application.",
        submit: "Submit application",
        submitting: "Submitting application",
        success:
          "We received your application. We will follow up after reviewing the fit with the experience.",
        error:
          "We could not submit your application. Please try again in a few minutes.",
      },
    },
    faq: {
      title: "Frequently asked questions",
      copy: "What to know before requesting access.",
      questions: [
        {
          question: "What will I have at the end of the two days?",
          answer:
            "A wider view of what is changing, references from other industries and one case of your own worked from end to end: how it operates today, how it could operate and a first version tested with real examples.",
        },
        {
          question: "Who should request access?",
          answer:
            "Founders and business owners, as well as team leaders inside startups, scaleups, enterprises or public institutions. What matters is that you can work on a real situation and have room to run a test when you return.",
        },
        {
          question: "Do I need to know how to code?",
          answer:
            "No. The lab starts with the problem and the workflow. Each participant can go to a different technical depth depending on their experience, and facilitators will support the hands-on work.",
        },
        {
          question: "What kind of case should I bring?",
          answer:
            "A recurring task, deliverable or process with recognizable inputs and an output. It should be within your sphere of influence and happen at least twice a month so you can test it after the retreat.",
        },
        {
          question: "Do I need to share confidential information?",
          answer:
            "No. We ask you to bring examples with personal data, trade secrets and restricted information removed. The method should work without exposing sensitive material.",
        },
        {
          question: "What are the hours?",
          answer:
            "On Monday, October 5, we will work from 11:00 a.m. to 6:30 p.m., followed by dinner from 7:00 to 9:00 p.m. On Tuesday, October 6, we will work from 11:00 a.m. to 5:30 p.m.",
        },
        {
          question: "What does access include?",
          answer:
            "Both working days, the listed food and beverages, materials, in-room support and group transportation from San Francisco to Napa on Monday and back on Tuesday. Lodging and flights are not included.",
        },
        {
          question: "Where will the retreat take place?",
          answer:
            "At Alex Torrenegra's private residence in Napa Valley. Capacity is limited, and the exact address and arrival details are shared only with confirmed participants.",
        },
        {
          question: "Can my company pay for my access?",
          answer:
            "Yes. We can issue payment documentation to the company. Access and pricing are per person.",
        },
        {
          question: "Why does the price change?",
          answer:
            "The retreat has 50 seats and planning costs rise as the date approaches. The applicable price is the one published for the day on which each participant confirms their seat.",
        },
      ],
    },
    closing: {
      location: "Napa Valley · October 5–6, 2026",
      title: "Return with a perspective that can change what your organization does.",
      imageAlt: "Napa Valley hills rendered in an ASCII style",
    },
    socialsLabel: "Follow our work",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/school/torrenegraorg/" },
      { label: "YouTube", href: "https://www.youtube.com/@torrenegraconsulting" },
      { label: "Instagram", href: "https://www.instagram.com/torrenegraconsulting/" },
    ],
    footer: "Becoming AI Native · Private Retreat · 2026",
  },
};

export type EventContent = (typeof content)[Locale];
