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

const location = {
  "@type": "Place",
  name: "Alex Torrenegra's private residence in Napa Valley",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Napa",
    addressRegion: "CA",
    addressCountry: "US",
  },
};

const hosts = [
  {
    "@type": "Person",
    name: "Alexander Torrenegra",
    url: "https://www.linkedin.com/in/alextorrenegra/",
  },
  {
    "@type": "Person",
    name: "Tania Zapata",
    url: "https://www.linkedin.com/in/taniazapata/",
  },
  {
    "@type": "Person",
    name: "Alan Arguello",
    url: "https://www.linkedin.com/in/alan-arguello/",
  },
];

export function getStructuredData(locale: Locale, content: EventContent) {
  const pageUrl = absoluteUrl(`/${locale}`);
  const imageUrl = absoluteUrl("/images/og.webp");

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "WebSite",
        "@id": `${getSiteUrl()}/#website`,
        url: getSiteUrl(),
        name: "Becoming AI Native Retreat",
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
        name: "Becoming AI Native Retreat 2026",
        description: content.metadata.description,
        startDate: "2026-10-05T11:00:00-07:00",
        endDate: "2026-10-06T17:30:00-07:00",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location,
        image: [imageUrl],
        url: pageUrl,
        organizer: { "@id": organization["@id"] },
        performer: hosts,
        inLanguage: locale,
        maximumAttendeeCapacity: 50,
        audience: {
          "@type": "BusinessAudience",
          audienceType: content.access.copy,
        },
        offers: {
          "@type": "AggregateOffer",
          url: `${pageUrl}#access`,
          lowPrice: "1450",
          highPrice: "2450",
          priceCurrency: "USD",
          offerCount: "4",
          availability: "https://schema.org/LimitedAvailability",
        },
      },
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
