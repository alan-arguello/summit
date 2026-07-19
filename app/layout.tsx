import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Back to the Future | San Francisco 2026",
  description:
    "A conversation-driven Summit and an Executive Go & See inside companies transforming with AI.",
  openGraph: {
    title: "Back to the Future | San Francisco 2026",
    description:
      "Two experiences for leaders who want to understand AI up close during SF Tech Week.",
    type: "website",
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
