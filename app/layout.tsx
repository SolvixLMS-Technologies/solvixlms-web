import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SolvixLMS — The OS for Cannabis Processing",
  description:
    "The only platform built to track cannabis production at parameter depth — not just inventory. Purpose-built for extraction. Designed for every processor.",
  keywords: [
    "cannabis processing software",
    "solventless extraction software",
    "bubble hash tracking",
    "live rosin production",
    "cannabis ERP",
    "extraction lab management",
    "cannabis compliance software",
    "SolvixLMS",
  ],
  openGraph: {
    type: "website",
    url: "https://www.solvixlms.com",
    title: "SolvixLMS — The OS for Cannabis Processing",
    description:
      "The only platform built to track cannabis production at parameter depth. Purpose-built for extraction.",
    siteName: "SolvixLMS",
  },
  twitter: {
    card: "summary_large_image",
    title: "SolvixLMS — The OS for Cannabis Processing",
    description:
      "The only platform built to track cannabis production at parameter depth. Purpose-built for extraction.",
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
                "Cannabis processing operating system — purpose-built for extraction labs.",
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
