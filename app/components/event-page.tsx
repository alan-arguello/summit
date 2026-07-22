import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Instagram,
  Linkedin,
  MapPin,
  Menu,
  Youtube,
} from "lucide-react";

import type { EventContent, Locale } from "../content";
import { AdoptionBenchmark } from "./adoption-benchmark";
import { ApplicationForm } from "./application-form";
import { DocumentLanguage } from "./document-language";
import { PriceExplorer } from "./price-explorer";

type EventPageProps = {
  content: EventContent;
  locale: Locale;
};

function Header({
  content,
  locale,
  requestAccessHref,
}: EventPageProps & { requestAccessHref: string }) {
  const alternateLocale = locale === "es" ? "en" : "es";

  const links = [
    ["#experience", content.nav.experience],
    ["#method", content.nav.method],
    ["#program", content.nav.program],
    ["#hosts", content.nav.hosts],
    ["#access", content.nav.access],
    ["#faq", content.nav.faq],
  ];

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={content.hero.title}>
        <span>Torrenegra</span>
        <span>Becoming AI Native</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([href, label]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
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
            <Menu aria-hidden="true" size={21} />
          </summary>
          <nav aria-label="Mobile navigation">
            {links.map(([href, label]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
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

function SocialProofSection({ content }: Pick<EventPageProps, "content">) {
  return (
    <section className="proof-section" id="proof">
      <div className="section-shell proof-shell">
        <div className="proof-intro">
          <h2>{content.socialProof.title}</h2>
          <p>{content.socialProof.copy}</p>
        </div>

        <div className="proof-groups">
          <div className="proof-group proof-group-partnerships">
            <p className="proof-label">{content.socialProof.partnershipsLabel}</p>
            <div className="proof-logo-grid proof-logo-grid-partnerships">
              {content.socialProof.partnerships.map((partner) => (
                <div className="proof-logo" key={partner.name} title={partner.name}>
                  <Image src={partner.image} alt={partner.name} fill sizes="180px" />
                </div>
              ))}
            </div>
          </div>

          <div className="proof-group proof-group-events">
            <p className="proof-label">{content.socialProof.eventSupportLabel}</p>
            <div className="proof-logo-grid proof-logo-grid-events">
              {content.socialProof.eventSupporters.map((supporter) => (
                <div className="proof-logo" key={supporter.name} title={supporter.name}>
                  <Image src={supporter.image} alt={supporter.name} fill sizes="180px" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="event-gallery" aria-label={content.socialProof.galleryAria}>
        <p className="proof-label section-shell">{content.socialProof.galleryLabel}</p>
        <div className="event-gallery-viewport">
          <div className="event-gallery-track">
            {[...content.socialProof.events, ...content.socialProof.events].map(
              (event, index) => (
                <figure
                  aria-hidden={index >= content.socialProof.events.length}
                  className="event-gallery-frame"
                  key={`${event.image}-${index}`}
                >
                  <Image
                    src={event.image}
                    alt={index < content.socialProof.events.length ? event.alt : ""}
                    fill
                    sizes="(max-width: 700px) 74vw, 31vw"
                  />
                </figure>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function EventPage({ content, locale }: EventPageProps) {
  const requestAccessHref = "#application";

  return (
    <main id="top">
      <DocumentLanguage locale={locale} />

      <section className="hero">
        <Image
          className="hero-image"
          src="/images/hero-napa-residence.webp"
          alt={content.hero.imageAlt}
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-color-wash" />
        <Header content={content} locale={locale} requestAccessHref={requestAccessHref} />

        <div className="hero-content">
          <div className="event-meta">
            <time dateTime="2026-10-05">
              <CalendarDays size={16} aria-hidden="true" />
              {content.hero.date}
            </time>
            <span className="event-meta-divider" aria-hidden="true" />
            <span>
              <MapPin size={16} aria-hidden="true" />
              {content.hero.location}
            </span>
          </div>
          <h1>{content.hero.title}</h1>
          <p className="hero-summary">{content.hero.summary}</p>
          <a className="primary-cta" href="#experience">
            {content.hero.cta}
            <ArrowDown size={19} aria-hidden="true" />
          </a>
        </div>

        <div className="hero-footer">
          <div className="hero-facts" aria-label={locale === "es" ? "Datos del evento" : "Event facts"}>
            {content.hero.facts.map((fact) => (
              <span key={fact}>{fact}</span>
            ))}
          </div>
          <div className="tech-week-lockup">
            <span>{content.hero.techWeekLabel}</span>
            <Image
              className="tech-week-logo"
              src="/images/sf-tech-week-white.webp"
              alt="SF Tech Week"
              width={480}
              height={270}
              sizes="76px"
            />
          </div>
        </div>
      </section>

      <section className="promise-section section-shell" id="experience">
        <div className="promise-intro">
          <h2>{content.promise.title}</h2>
          <p>{content.promise.copy}</p>
        </div>
        <div className="outcome-grid">
          {content.promise.outcomes.map((outcome) => (
            <article key={outcome.number}>
              <span>{outcome.number}</span>
              <h3>{outcome.title}</h3>
              <p>{outcome.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="method-section" id="method">
        <div className="method-shell section-shell">
          <div className="method-copy">
            <h2>{content.method.title}</h2>
            <p>{content.method.copy}</p>
          </div>
          <figure className="method-image">
            <Image
              src="/images/retreat-ai-session-2026.webp"
              alt={content.method.imageAlt}
              fill
              sizes="(max-width: 800px) 100vw, 48vw"
            />
          </figure>
          <div className="method-steps">
            {content.method.steps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="method-note">{content.method.note}</p>
        </div>
      </section>

      <section className="program-section" id="program">
        <div className="program-heading">
          <Image
            className="program-background"
            src="/images/program-horizon.webp"
            alt=""
            fill
            sizes="100vw"
            aria-hidden="true"
          />
          <div className="program-heading-wash" />
          <div className="section-shell">
            <h2>{content.program.title}</h2>
            <p>{content.program.copy}</p>
          </div>
        </div>

        <div className="program-days section-shell">
          {content.program.days.map((day, dayIndex) => (
            <article className="program-day" key={day.id}>
              <header>
                <div className="program-day-number">0{dayIndex + 1}</div>
                <div className="program-day-meta">
                  <time dateTime={dayIndex === 0 ? "2026-10-05" : "2026-10-06"}>
                    {day.date}
                  </time>
                  <span>
                    <Clock3 size={15} aria-hidden="true" />
                    {day.time}
                  </span>
                </div>
                <h3>{day.title}</h3>
                <p>{day.description}</p>
              </header>

              <ol className="session-list">
                {day.sessions.map((session) => (
                  <li key={`${day.id}-${session.time}`}>
                    <time>{session.time}</time>
                    <div>
                      <h4>{session.title}</h4>
                      <p>{session.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>

        <p className="transport-note section-shell">
          <MapPin size={17} aria-hidden="true" />
          {content.program.transport}
        </p>

        <aside className="week-context section-shell">
          <p>{content.program.weekContext.label}</p>
          <div>
            <h3>{content.program.weekContext.title}</h3>
            <p>{content.program.weekContext.copy}</p>
          </div>
        </aside>
      </section>

      <section className="working-section section-shell">
        <div className="working-media">
          <Image
            src="/images/alexander-nestle.jpeg"
            alt={content.workingSession.imageAlt}
            fill
            sizes="(max-width: 800px) 100vw, 44vw"
          />
        </div>
        <div className="working-copy">
          <h2>{content.workingSession.title}</h2>
          <p className="working-lead">{content.workingSession.copy}</p>
          <div className="working-lists">
            <div>
              <h3>{content.workingSession.bringTitle}</h3>
              <ul>
                {content.workingSession.bring.map((item) => (
                  <li key={item}>
                    <Check size={15} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>{content.workingSession.leaveTitle}</h3>
              <ul>
                {content.workingSession.leave.map((item) => (
                  <li key={item}>
                    <Check size={15} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <AdoptionBenchmark content={content.research} locale={locale} />

      <section className="hosts-section" id="hosts">
        <div className="section-shell">
          <div className="hosts-intro">
            <h2>{content.hosts.title}</h2>
            <p>{content.hosts.copy}</p>
          </div>
          <div className="host-grid">
            {content.hosts.people.map((person) => (
              <article className="host-profile" key={person.name}>
                <div className="host-photo">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                  />
                </div>
                <div className="host-copy">
                  <div className="host-heading">
                    <h3>
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={content.hosts.profileAria.replace("{name}", person.name)}
                      >
                        {person.name}
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    </h3>
                  </div>
                  <p className="host-role">{person.role}</p>
                  <p className="host-bio">{person.bio}</p>
                  <div className="host-evidence">
                    <p>{content.hosts.credentialsLabel}</p>
                    <ul>
                      {person.credentials.map((credential) => (
                        <li key={credential}>{credential}</li>
                      ))}
                    </ul>
                    <div className="host-logos">
                      {person.logos.map((logo) => (
                        <div className="host-logo" key={logo.name} title={logo.name}>
                          <Image src={logo.image} alt={logo.name} fill sizes="96px" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SocialProofSection content={content} />

      <section className="access-section section-shell" id="access">
        <div className="access-intro">
          <h2>{content.access.title}</h2>
          <p>{content.access.copy}</p>
        </div>
        <PriceExplorer
          copy={content.access.explorer}
          phases={content.access.phases}
          requestAccessHref={requestAccessHref}
        />
        <div className="application-layout" id="application">
          <div className="application-process">
            <h3>{content.access.processTitle}</h3>
            <ol>
              {content.access.process.map((item, index) => (
                <li key={item}>
                  <span>0{index + 1}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </div>
          <ApplicationForm
            copy={content.access.form}
            locale={locale}
          />
        </div>
      </section>

      <section className="faq-section section-shell" id="faq">
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

      <section className="closing-section">
        <Image
          src="/images/closing-spectrum.webp"
          alt={content.closing.imageAlt}
          fill
          sizes="100vw"
        />
        <div className="closing-wash" />
        <div className="closing-content">
          <p>{content.closing.location}</p>
          <h2>{content.closing.title}</h2>
          <a className="closing-cta" href={requestAccessHref}>
            {content.requestAccess}
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-meta">
          <span>Torrenegra & Co</span>
          <span>{content.footer}</span>
        </div>
        <nav className="footer-social" aria-label={content.socialsLabel}>
          {content.socials.map((social) => (
            <a href={social.href} key={social.label} rel="noreferrer" target="_blank">
              {social.label === "LinkedIn" ? <Linkedin aria-hidden="true" size={15} /> : null}
              {social.label === "YouTube" ? <Youtube aria-hidden="true" size={16} /> : null}
              {social.label === "Instagram" ? <Instagram aria-hidden="true" size={15} /> : null}
              <span>{social.label}</span>
            </a>
          ))}
        </nav>
      </footer>
    </main>
  );
}
