import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  MapPin,
  Menu,
  Users,
} from "lucide-react";

const requestAccessHref =
  "mailto:hola@torrenegra.com?subject=Torrenegra%20AI%20Summit%202026";

const experiences = [
  {
    name: "Summit",
    meta: "1 día · Hasta 50 personas",
    audience: "Founders, CEOs, líderes de SMBs, startups, scaleups, gobierno y corporativos.",
    description:
      "Conversaciones directas con personas que están construyendo y operando con IA, casos concretos y espacio para hacer las preguntas que no caben en una conferencia masiva.",
    includes: [
      "Conversaciones y casos prácticos",
      "Acceso a speakers y participantes",
      "Alimentos y bebidas durante el día",
      "Transporte grupal San Francisco–Napa opcional",
    ],
    price: "Desde USD 899",
  },
  {
    name: "Executive Go & See",
    meta: "Cupos limitados · Máximo 20 ejecutivos",
    audience: "Corporate VPs, managers y C-levels responsables de transformar una organización existente.",
    description:
      "Una experiencia en grupos pequeños para observar compañías, equipos y casos en su contexto; entender cómo toman decisiones y contrastarlo con los retos de tu empresa.",
    includes: [
      "Visitas y conversaciones privadas",
      "Dos noches de hospedaje",
      "Transporte durante la experiencia",
      "Grupo ejecutivo curado",
    ],
    price: "Desde USD 5,000",
  },
];

const accessOptions = [
  {
    name: "Summit",
    price: "$899",
    note: "Preventa inicial",
    description: "El punto de entrada para vivir las conversaciones, los casos y la red del evento.",
  },
  {
    name: "Executive Go & See",
    price: "$5,000",
    note: "Máximo 20 lugares",
    description: "Para líderes corporativos que necesitan ver cómo otras organizaciones están actuando.",
  },
  {
    name: "Summit + Go & See",
    price: "$5,750",
    note: "Máximo 5 lugares",
    description: "Ambas experiencias, intros relevantes y una sesión personalizada de 60 minutos.",
  },
];

const questions = [
  {
    question: "¿Es una conferencia tradicional?",
    answer:
      "No. El Summit está diseñado para conversaciones con espacio real para preguntas y relaciones. El Go & See reduce aún más el grupo para observar casos y discutir decisiones en contexto.",
  },
  {
    question: "¿Puedo comprar solo una de las experiencias?",
    answer:
      "Sí. Summit y Go & See se venden por separado. También existe una opción combinada con un precio menor que comprarlos individualmente.",
  },
  {
    question: "¿Quién debería aplicar al Go & See?",
    answer:
      "VPs, managers y C-levels de compañías existentes que estén tomando decisiones de adopción, operación, talento o inversión en IA. Revisaremos cada solicitud para cuidar la composición del grupo.",
  },
  {
    question: "¿Los vuelos están incluidos?",
    answer:
      "No. El Go & See incluye dos noches de hospedaje y transporte durante la experiencia, pero cada participante organiza su llegada a San Francisco.",
  },
  {
    question: "¿Cuándo se anunciarán speakers y aliados?",
    answer:
      "Los primeros anuncios se harán antes de abrir la venta general. Las participaciones se publicarán únicamente cuando estén confirmadas.",
  },
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Torrenegra AI Summit, volver al inicio">
        <span>Torrenegra</span>
        <span>AI Summit</span>
      </a>

      <nav className="desktop-nav" aria-label="Navegación principal">
        <a href="#experience">Experiencia</a>
        <a href="#access">Acceso</a>
        <a href="#faq">Preguntas</a>
      </nav>

      <div className="header-actions">
        <a className="header-cta" href={requestAccessHref}>
          Solicitar acceso
        </a>
        <details className="mobile-menu">
          <summary aria-label="Abrir menú">
            <Menu aria-hidden="true" size={22} />
          </summary>
          <nav aria-label="Navegación móvil">
            <a href="#experience">Experiencia</a>
            <a href="#access">Acceso</a>
            <a href="#faq">Preguntas</a>
            <a href={requestAccessHref}>Solicitar acceso</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <main id="top">
      <section className="hero">
        <Image
          className="hero-image"
          src="/images/hero.webp"
          alt="Ilustración de un parque con la ciudad de San Francisco al fondo"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-wash" />
        <Header />
        <div className="hero-content">
          <p className="event-date">
            <CalendarDays size={17} aria-hidden="true" />
            5–11 de octubre de 2026 · Durante SF Tech Week
          </p>
          <h1>
            Torrenegra AI Summit
            <em>Mira de cerca lo que viene.</em>
          </h1>
          <p className="hero-summary">
            Conversaciones, casos y visitas privadas en San Francisco y Napa para líderes que necesitan decidir qué hacer con IA en su empresa.
          </p>
          <a className="primary-cta" href={requestAccessHref}>
            Solicitar acceso
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
        <div className="hero-location">
          <MapPin size={17} aria-hidden="true" />
          San Francisco + Napa, California
        </div>
      </section>

      <section className="opening section-shell">
        <div className="opening-heading">
          <h2>Escuchar sobre IA no es lo mismo que verla operar.</h2>
        </div>
        <p className="opening-copy">
          El evento reúne a quienes están construyendo la tecnología con quienes tienen que aplicarla dentro de una empresa real. Menos predicciones; más contexto para entender qué ya funciona, qué sigue inmaduro y qué decisión conviene tomar ahora.
        </p>
        <div className="principles">
          <article>
            <span>01</span>
            <h3>Preguntas directas</h3>
            <p>Conversaciones pequeñas, sin guiones largos ni paneles diseñados para decir poco.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Casos en contexto</h3>
            <p>Ver cómo se organiza el trabajo alrededor de IA, no únicamente escuchar una demo.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Relaciones útiles</h3>
            <p>Un grupo curado de líderes, builders y operadores que también están tomando decisiones.</p>
          </article>
        </div>
      </section>

      <section className="signal-section">
        <div className="signal-inner">
          <div className="signal-copy">
            <h2>La diferencia no estará en tener acceso a IA. Estará en saber qué hacer con ella.</h2>
            <p>
              Por eso el Summit combina perspectiva técnica, experiencia operativa y conversaciones entre pares. El objetivo no es salir con más herramientas guardadas, sino con mejor contexto para decidir.
            </p>
          </div>
          <div className="signal-visual">
            <Image
              src="/images/signal.webp"
              alt="Paisaje abstracto construido con puntos de colores"
              fill
              sizes="(max-width: 760px) 100vw, 58vw"
            />
          </div>
        </div>
      </section>

      <section className="experience section-shell" id="experience">
        <div className="section-intro">
          <h2>Dos experiencias. Puedes elegir una o vivir ambas.</h2>
          <p>
            El Summit abre la conversación. El Go & See la lleva a grupos más pequeños, compañías y decisiones concretas.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article className="experience-row" key={experience.name}>
              <div className="experience-index">0{index + 1}</div>
              <div className="experience-main">
                <p>{experience.meta}</p>
                <h3>{experience.name}</h3>
                <p className="experience-description">{experience.description}</p>
                <p className="experience-audience">{experience.audience}</p>
              </div>
              <div className="experience-includes">
                <ul>
                  {experience.includes.map((item) => (
                    <li key={item}>
                      <Check size={17} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <strong>{experience.price}</strong>
              </div>
            </article>
          ))}
        </div>

        <div className="go-see-feature">
          <Image
            src="/images/go-see.webp"
            alt="Paisaje abierto bajo un cielo azul"
            fill
            sizes="(max-width: 760px) 100vw, 52vw"
          />
          <div className="go-see-overlay" />
          <div className="go-see-content">
            <p>Executive Go & See</p>
            <h3>Sal del escenario. Entra al lugar donde se toman las decisiones.</h3>
            <span>Máximo 20 corporate VPs, managers y C-levels.</span>
          </div>
        </div>
      </section>

      <section className="audience-section">
        <div className="section-shell audience-inner">
          <div>
            <Users size={26} aria-hidden="true" />
            <h2>Una sala diseñada para quienes tienen que mover una organización.</h2>
          </div>
          <div className="audience-list">
            <p><span>Founders y CEOs</span> que están definiendo cómo cambia su compañía.</p>
            <p><span>Corporate leaders</span> responsables de operación, talento, producto o tecnología.</p>
            <p><span>Líderes de gobierno</span> que necesitan adoptar sin improvisar.</p>
            <p><span>Builders y AI engineers</span> cerca de problemas reales y decisiones de negocio.</p>
          </div>
        </div>
      </section>

      <section className="access section-shell" id="access">
        <div className="section-intro access-intro">
          <h2>Elige el nivel de acceso</h2>
          <p>Los precios aumentarán conforme se acerque el evento y se confirmen speakers, aliados y visitas.</p>
        </div>

        <div className="access-grid">
          {accessOptions.map((option, index) => (
            <article className={`access-card${index === 2 ? " access-card-featured" : ""}`} key={option.name}>
              <div>
                <p>{option.note}</p>
                <h3>{option.name}</h3>
                <span>Desde</span>
                <strong>{option.price}</strong>
              </div>
              <p>{option.description}</p>
              <a href={requestAccessHref}>
                Solicitar acceso
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
        <p className="access-note">Precios por persona antes de impuestos. Los vuelos no están incluidos.</p>
      </section>

      <section className="faq section-shell" id="faq">
        <div className="faq-heading">
          <h2>Preguntas frecuentes</h2>
          <p>Lo esencial antes de solicitar acceso.</p>
        </div>
        <div className="faq-list">
          {questions.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="closing">
        <Image
          src="/images/closing.webp"
          alt="Paisaje abstracto en blanco y negro"
          fill
          sizes="100vw"
        />
        <div className="closing-wash" />
        <div className="closing-content">
          <p>San Francisco · Octubre de 2026</p>
          <h2>Acércate a las personas y lugares que están definiendo lo que sigue.</h2>
          <a className="closing-cta" href={requestAccessHref}>
            Solicitar acceso
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer>
        <span>Torrenegra & Co</span>
        <span>AI Summit · 2026</span>
      </footer>
    </main>
  );
}
