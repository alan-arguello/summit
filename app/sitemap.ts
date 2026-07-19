import type { MetadataRoute } from "next";

import { getSiteUrl } from "./seo";

const LAST_MODIFIED = new Date("2026-07-19T00:00:00-07:00");

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const languages = {
    es: `${siteUrl}/es`,
    en: `${siteUrl}/en`,
    "x-default": `${siteUrl}/es`,
  };

  return ["es", "en"].map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority: 1,
    alternates: { languages },
  }));
}
