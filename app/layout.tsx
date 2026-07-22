import type { Metadata } from "next";
import "./globals.css";

import { getSiteUrl } from "./seo";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Becoming AI Native Retreat",
  title: "Becoming AI Native | Private retreat in Napa Valley",
  description:
    "A private two-day retreat to understand what AI is changing, see it across industries and apply it to a real situation inside your organization.",
  authors: [{ name: "Torrenegra & Co", url: "https://www.torrenegra.com" }],
  creator: "Torrenegra & Co",
  publisher: "Torrenegra & Co",
  category: "Executive education and technology event",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Becoming AI Native | Private retreat in Napa Valley",
    description:
      "Two days in Napa to understand what AI is changing, learn across industries and apply that perspective to your organization.",
    type: "website",
    siteName: "Becoming AI Native Retreat",
    url: siteUrl,
    images: [{ url: "/images/og.webp", width: 1200, height: 630, alt: "Becoming AI Native Retreat in Napa Valley" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Becoming AI Native | Private retreat in Napa Valley",
    description: "Learn what is changing across companies and industries, then apply that perspective to one real case of your own.",
    images: ["/images/og.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
