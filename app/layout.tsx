import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Torrenegra AI Summit | San Francisco 2026",
  description:
    "Summit y experiencia ejecutiva en San Francisco y Napa para líderes que quieren entender cómo la IA está cambiando empresas reales.",
  openGraph: {
    title: "Torrenegra AI Summit | San Francisco 2026",
    description:
      "Conversaciones, casos y visitas privadas durante SF Tech Week.",
    type: "website",
    locale: "es_US",
    images: [{ url: "/images/og.webp", width: 1200, height: 630, alt: "Torrenegra AI Summit en San Francisco" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Torrenegra AI Summit | San Francisco 2026",
    description: "Conversaciones, casos y visitas privadas durante SF Tech Week.",
    images: ["/images/og.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
