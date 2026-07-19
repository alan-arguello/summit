import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { EventPage } from "../components/event-page";
import { content, type Locale } from "../content";

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
      locale: locale === "es" ? "es_MX" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_MX"],
      type: "website",
      images: [
        {
          url: "/images/og.webp",
          width: 1200,
          height: 630,
          alt: "Back to the Future 2026",
        },
      ],
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

  return <EventPage content={content[locale]} locale={locale} />;
}
