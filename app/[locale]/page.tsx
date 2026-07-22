import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { EventPage } from "../components/event-page";
import { content, type Locale } from "../content";
import { getStructuredData } from "../seo";

const locales: Locale[] = ["es", "en"];

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const pageContent = content[locale];

  return {
    title: pageContent.metadata.title,
    description: pageContent.metadata.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es",
        en: "/en",
        "x-default": "/es",
      },
    },
    openGraph: {
      title: pageContent.metadata.title,
      description: pageContent.metadata.description,
      url: `/${locale}`,
      siteName: "Becoming AI Native Retreat",
      locale: locale === "es" ? "es_MX" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_MX"],
      type: "website",
      images: [
        {
          url: "/images/og.webp",
          width: 1200,
          height: 630,
          alt: "Becoming AI Native Retreat in Napa Valley",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageContent.metadata.title,
      description: pageContent.metadata.description,
      images: ["/images/og.webp"],
    },
  };
}

export default async function LocalizedPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const pageContent = content[locale];
  const structuredData = JSON.stringify(
    getStructuredData(locale, pageContent),
  ).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <EventPage content={pageContent} locale={locale} />
    </>
  );
}
