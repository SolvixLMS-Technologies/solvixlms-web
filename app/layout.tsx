import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SolvixLMS — The Operating System for the Modern Lab",
  description:
    "The only platform built to track your process at parameter depth — not just inventory. Sample and batch tracking, compliance, and analytics for modern, regulated labs.",
  keywords: [
    "lab management software",
    "laboratory information management system",
    "LIMS",
    "sample tracking software",
    "batch tracking software",
    "lab workflow management",
    "lab compliance software",
    "SolvixLMS",
  ],
  openGraph: {
    type: "website",
    url: "https://www.solvixlms.com",
    title: "SolvixLMS — The Operating System for the Modern Lab",
    description:
      "The only platform built to track your process at parameter depth — not just inventory. Built for modern, regulated labs.",
    siteName: "SolvixLMS",
  },
  twitter: {
    card: "summary_large_image",
    title: "SolvixLMS — The Operating System for the Modern Lab",
    description:
      "The only platform built to track your process at parameter depth — not just inventory. Built for modern, regulated labs.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://www.solvixlms.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="Km5i7GCA4dX6an1X4UHtbEa3THcNrixRQDV1Ddc0XZc" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "SolvixLMS",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "Laboratory operations platform — purpose-built for modern, regulated labs.",
              url: "https://www.solvixlms.com",
              publisher: {
                "@type": "Organization",
                name: "SolvixLMS Technologies Inc.",
                url: "https://www.solvixlms.com",
              },
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "USD",
                lowPrice: "599",
                highPrice: "1499",
                offerCount: "3",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
