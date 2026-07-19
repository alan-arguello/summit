import type { EventContent, Locale } from "./content";

const LOCAL_URL = "http://localhost:3000";

function normalizeSiteUrl(value: string) {
  const withProtocol = /^https?:\/\//.test(value) ? value : `https://${value}`;

  return withProtocol.replace(/\/$/, "");
}

export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL);
  }

  return LOCAL_URL;
}

export function absoluteUrl(path = "") {
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}

const organization = {
  "@type": "Organization",
  "@id": "https://www.torrenegra.com/#organization",
  name: "Torrenegra & Co",
  url: "https://www.torrenegra.com",
  email: "hola@torrenegra.com",
  founder: {
    "@type": "Person",
    name: "Alexander Torrenegra",
    url: "https://www.linkedin.com/in/alextorrenegra/",
  },
};

const locations = [
  {
    "@type": "Place",
    name: "San Francisco Bay Area",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  {
    "@type": "Place",
    name: "Napa Valley",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Napa",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
];

export function getStructuredData(locale: Locale, content: EventContent) {
  const pageUrl = absoluteUrl(`/${locale}`);
  const imageUrl = absoluteUrl("/images/og.webp");
  const isSpanish = locale === "es";

  const summit = {
    "@type": "BusinessEvent",
    "@id": `${pageUrl}#summit-event`,
    name: isSpanish
      ? "Back to the Future Summit 2026"
      : "Back to the Future Summit 2026",
    description: content.summit.copy,
    startDate: "2026-10-08",
    endDate: "2026-10-08",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: locations,
    image: [imageUrl],
    url: `${pageUrl}#summit`,
    organizer: { "@id": organization["@id"] },
    inLanguage: locale,
    maximumAttendeeCapacity: 50,
    audience: {
      "@type": "BusinessAudience",
      audienceType: content.access.tracks[0].audience,
    },
    offers: {
      "@type": "Offer",
      name: content.access.tracks[0].phases[0].name,
      url: `${pageUrl}#access`,
      price: "899",
      priceCurrency: "USD",
      priceValidUntil: "2026-08-01",
      availability: "https://schema.org/LimitedAvailability",
    },
  };

  const goSee = {
    "@type": "BusinessEvent",
    "@id": `${pageUrl}#go-see-event`,
    name: "Back to the Future Executive Go & See 2026",
    description: content.goSee.copy,
    startDate: "2026-10-09",
    endDate: "2026-10-09",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: locations[0],
    image: [imageUrl],
    url: `${pageUrl}#go-see`,
    organizer: { "@id": organization["@id"] },
    contributor: {
      "@type": "Organization",
      name: "OpenAI",
      url: "https://openai.com",
    },
    inLanguage: locale,
    maximumAttendeeCapacity: 20,
    audience: {
      "@type": "BusinessAudience",
      audienceType: content.access.tracks[1].audience,
    },
    offers: {
      "@type": "Offer",
      name: content.access.tracks[1].phases[0].name,
      url: `${pageUrl}#access`,
      price: "5000",
      priceCurrency: "USD",
      priceValidUntil: "2026-08-01",
      availability: "https://schema.org/LimitedAvailability",
    },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "WebSite",
        "@id": `${getSiteUrl()}/#website`,
        url: getSiteUrl(),
        name: "Back to the Future 2026",
        publisher: { "@id": organization["@id"] },
        inLanguage: ["es", "en"],
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: content.metadata.title,
        description: content.metadata.description,
        isPartOf: { "@id": `${getSiteUrl()}/#website` },
        about: { "@id": `${pageUrl}#event` },
        inLanguage: locale,
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      },
      {
        "@type": "BusinessEvent",
        "@id": `${pageUrl}#event`,
        name: "Back to the Future 2026",
        description: content.metadata.description,
        startDate: "2026-10-08",
        endDate: "2026-10-09",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: locations,
        image: [imageUrl],
        url: pageUrl,
        organizer: { "@id": organization["@id"] },
        inLanguage: locale,
        subEvent: [
          { "@id": summit["@id"] },
          { "@id": goSee["@id"] },
        ],
      },
      summit,
      goSee,
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq-schema`,
        url: `${pageUrl}#faq`,
        inLanguage: locale,
        mainEntity: content.faq.questions.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
