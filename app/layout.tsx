import type { Metadata } from "next";
import "./globals.css";

import { getSiteUrl } from "./seo";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Back to the Future 2026",
  title: "Back to the Future | San Francisco 2026",
  description:
    "A conversation-driven Summit and an Executive Go & See inside companies transforming with AI.",
  authors: [{ name: "Torrenegra & Co", url: "https://www.torrenegra.com" }],
  creator: "Torrenegra & Co",
  publisher: "Torrenegra & Co",
  category: "Business and technology event",
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
    title: "Back to the Future | San Francisco 2026",
    description:
      "Two experiences for leaders who want to understand AI up close during SF Tech Week.",
    type: "website",
    siteName: "Back to the Future 2026",
    url: siteUrl,
    images: [{ url: "/images/og.webp", width: 1200, height: 630, alt: "Back to the Future in San Francisco" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Back to the Future | San Francisco 2026",
    description: "A Summit and an Executive Go & See during SF Tech Week.",
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
