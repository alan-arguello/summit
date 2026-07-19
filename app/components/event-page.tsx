import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Check,
  Menu,
} from "lucide-react";

import type { EventContent, Locale } from "../content";
import { DocumentLanguage } from "./document-language";
import { PriceExplorer } from "./price-explorer";

type EventPageProps = {
  content: EventContent;
  locale: Locale;
};

const speakers = [
  {
    name: "Alexander Torrenegra",
    title: "CEO, Torre.ai",
    image: "/images/speakers/alexander-torrenegra.webp",
    linkedin: "https://www.linkedin.com/in/alextorrenegra/",
  },
  {
    name: "Tania Zapata",
    title: "Chairwoman, Bunny Inc.",
    image: "/images/speakers/tania-zapata.webp",
    linkedin: "https://www.linkedin.com/in/taniazapata/",
  },
  {
    name: "Freddy Vega",
    title: "CEO & Founder, Platzi",
    image: "/images/speakers/freddy-vega.webp",
    linkedin: "https://www.linkedin.com/in/johnfreddyvega/",
  },
  {
    name: "Christian Van Der Henst",
    title: "Managing Partner, Region Cuatro",
    image: "/images/speakers/christian-van-der-henst.webp",
    linkedin: "https://www.linkedin.com/in/cvander/",
  },
  {
    name: "Bismarck Lepe",
    title: "Co-founder & CEO, MiSalud",
    image: "/images/speakers/bismarck-lepe.webp",
    linkedin: "https://www.linkedin.com/in/bismarcklepe/",
  },
  {
    name: "Pilar Manchón",
    title: "AI Research Strategy, Google",
    image: "/images/speakers/pilar-manchon.webp",
    linkedin: "https://www.linkedin.com/in/pilarmanchon/",
  },
  {
    name: "Guillermo Rauch",
    title: "Founder & CEO, Vercel",
    image: "/images/speakers/guillermo-rauch.webp",
    linkedin: "https://www.linkedin.com/in/rauchg/",
  },
  {
    name: "Pamela Valdes",
    title: "Co-founder & CEO, Musa",
    image: "/images/speakers/pamela-valdes.webp",
    linkedin: "https://www.linkedin.com/in/pamelavaldesesteva/",
  },
];

function Header({ content, locale, requestAccessHref }: EventPageProps & { requestAccessHref: string }) {
  const alternateLocale = locale === "es" ? "en" : "es";

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Back to the Future, back to top">
        <span>Torrenegra</span>
        <span>Back to the Future</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#experience">{content.nav.experiences}</a>
        <a href="#summit">{content.nav.summit}</a>
        <a href="#go-see">{content.nav.goSee}</a>
        <a href="#access">{content.nav.access}</a>
        <a href="#faq">{content.nav.faq}</a>
      </nav>

      <div className="header-actions">
        <Link
          aria-label={content.languageAria}
          className="language-switch"
          href={`/${alternateLocale}`}
          hrefLang={alternateLocale}
        >
          {content.languageLabel}
        </Link>
        <a className="header-cta" href={requestAccessHref}>
          {content.requestAccess}
        </a>
        <details className="mobile-menu">
          <summary aria-label="Open menu">
            <Menu aria-hidden="true" size={22} />
          </summary>
          <nav aria-label="Mobile navigation">
            <a href="#experience">{content.nav.experiences}</a>
            <a href="#summit">{content.nav.summit}</a>
            <a href="#go-see">{content.nav.goSee}</a>
            <a href="#access">{content.nav.access}</a>
            <a href="#faq">{content.nav.faq}</a>
            <Link href={`/${alternateLocale}`} hrefLang={alternateLocale}>
              {content.languageLabel}
            </Link>
            <a href={requestAccessHref}>{content.requestAccess}</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function EventPage({ content, locale }: EventPageProps) {
  const requestAccessHref = `mailto:hola@torrenegra.com?subject=${encodeURIComponent(content.requestAccessSubject)}`;

  return (
    <main id="top">
      <DocumentLanguage locale={locale} />

      <section className="hero">
        <Image
          className="hero-image"
          src="/images/hero-san-francisco.webp"
          alt={content.hero.imageAlt}
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-wash" />
        <Header content={content} locale={locale} requestAccessHref={requestAccessHref} />
        <div className="hero-content">
          <time className="event-date" dateTime="2026-10-08">
            <CalendarDays size={17} aria-hidden="true" />
            {content.hero.date}
          </time>
          <h1>{content.hero.title}</h1>
          <p className="hero-summary">{content.hero.summary}</p>
          <a className="primary-cta" href="#experience">
            {content.hero.cta}
            <ArrowDown size={20} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="experience-choice section-shell" id="experience">
        <div className="choice-intro">
          <h2>{content.choice.title}</h2>
          <p>{content.choice.copy}</p>
        </div>

        <div className="experience-sequence">
          <p className="sequence-note">{content.choice.sequence.note}</p>
          <ol>
            {content.choice.sequence.days.map((day, index) => (
              <li key={day.name}>
                <a href={index === 0 ? "#summit" : "#go-see"}>
                  <time dateTime={index === 0 ? "2026-10-08" : "2026-10-09"}>
                    {day.date}
                  </time>
                  <span>
                    <strong>{day.name}</strong>
                    <small>{day.description}</small>
                  </span>
                  <ArrowDown aria-hidden="true" size={17} />
                </a>
              </li>
            ))}
          </ol>
          <p className="sequence-purchase">{content.choice.sequence.purchase}</p>
        </div>

        <div className="choice-grid">
          {content.choice.tracks.map((track) => (
            <article className={`choice-track choice-track-${track.id}`} key={track.id}>
              <div className="choice-image">
                <Image
                  src={track.image}
                  alt={track.imageAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>
              <div className="choice-copy">
                <div className="choice-meta">
                  <span>{track.number}</span>
                  <span>{track.meta}</span>
                </div>
                <h3>{track.name}</h3>
                <p className="choice-promise">{track.promise}</p>
                <p className="choice-description">{track.description}</p>
                <p className="choice-audience">
                  <span>{track.audienceLabel}</span>
                  {track.audience}
                </p>
                <a href={track.href}>
                  {track.link}
                  <ArrowUpRight aria-hidden="true" size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="premise-section">
        <Image
          className="premise-background"
          src="/images/premise-ascii.jpg"
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="premise-wash" />
        <div className="premise-shell section-shell">
          <div className="premise-intro">
            <h2>{content.premise.title}</h2>
            <p>{content.premise.copy}</p>
          </div>
          <div className="principles">
            {content.premise.principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="summit-section" id="summit">
        <div className="summit-overview section-shell">
          <div className="summit-heading">
            <time className="experience-date" dateTime="2026-10-08">
              {content.summit.date}
            </time>
            <h2>{content.summit.title}</h2>
            <p>{content.summit.copy}</p>
          </div>
          <div className="summit-facts">
            <ul>
              {content.summit.facts.map((fact) => (
                <li key={fact}>
                  <Check aria-hidden="true" size={16} />
                  {fact}
                </li>
              ))}
            </ul>
            <strong>{content.summit.price}</strong>
          </div>
        </div>

        <div className="speakers-shell section-shell">
          <div className="speakers-intro">
            <h2>{content.summit.speakersTitle}</h2>
            <p>{content.summit.speakersCopy}</p>
          </div>

          <div className="speaker-grid">
            {speakers.map((speaker) => (
              <a
                className="speaker-profile"
                href={speaker.linkedin}
                key={speaker.name}
                target="_blank"
                rel="noreferrer"
                aria-label={content.summit.profileAria.replace("{name}", speaker.name)}
              >
                <div className="speaker-photo">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={760}
                    height={950}
                    sizes="(max-width: 760px) 50vw, 25vw"
                  />
                </div>
                <div className="speaker-copy">
                  <div>
                    <h3>{speaker.name}</h3>
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </div>
                  <p title={speaker.title}>{speaker.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="go-see-section" id="go-see">
        <div className="go-see-intro section-shell">
          <div>
            <time className="experience-date" dateTime="2026-10-09">
              {content.goSee.date}
            </time>
            <h2>{content.goSee.title}</h2>
          </div>
          <p>{content.goSee.copy}</p>
        </div>

        <div className="go-see-feature section-shell">
          <Image
            className="go-see-background"
            src="/images/go-see-study.jpg"
            alt={content.goSee.imageAlt}
            fill
            sizes="(max-width: 760px) 100vw, 1220px"
          />
          <div className="go-see-overlay" />
          <div className="go-see-content">
            <div className="go-see-partner">
              <span>{content.goSee.partner}</span>
              <Image
                src="/images/openai-wordmark.png"
                alt="OpenAI"
                width={148}
                height={46}
              />
            </div>
            <h3>{content.goSee.featureTitle}</h3>
            <p className="go-see-description">{content.goSee.featureDescription}</p>
            <span className="go-see-capacity">{content.goSee.capacity}</span>
          </div>
        </div>

        <div className="go-see-details section-shell">
          <div className="go-see-steps">
            {content.goSee.steps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="go-see-includes">
            <ul>
              {content.goSee.facts.map((fact) => (
                <li key={fact}>
                  <Check aria-hidden="true" size={16} />
                  {fact}
                </li>
              ))}
            </ul>
            <strong>{content.goSee.price}</strong>
          </div>
        </div>
      </section>

      <section className="audience-section">
        <div className="section-shell audience-inner">
          <h2>{content.audience.title}</h2>
          <div className="audience-tracks">
            {content.audience.tracks.map((track, index) => (
              <article key={track.name}>
                <span>0{index + 1}</span>
                <h3>{track.name}</h3>
                <div>
                  <p>{track.description}</p>
                  <strong>{track.roles}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="access section-shell" id="access">
        <div className="section-intro access-intro">
          <h2>{content.access.title}</h2>
          <p>{content.access.copy}</p>
        </div>
        <PriceExplorer
          copy={content.access.explorer}
          requestAccessHref={requestAccessHref}
          tracks={content.access.tracks}
        />
      </section>

      <section className="faq section-shell" id="faq">
        <div className="faq-heading">
          <h2>{content.faq.title}</h2>
          <p>{content.faq.copy}</p>
        </div>
        <div className="faq-list">
          {content.faq.questions.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="closing">
        <Image src="/images/closing-ascii.jpg" alt={content.closing.imageAlt} fill sizes="100vw" />
        <div className="closing-wash" />
        <div className="closing-content">
          <p>{content.closing.location}</p>
          <h2>{content.closing.title}</h2>
          <a className="closing-cta" href={requestAccessHref}>
            {content.requestAccess}
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer>
        <span>Torrenegra & Co</span>
        <span>{content.footer}</span>
      </footer>
    </main>
  );
}
