import type { Metadata } from "next";

const OG = {
  url: "https://www.solvixlms.com/og-image.png",
  width: 1200,
  height: 630,
  alt: "SolvixLMS",
};

export const metadata: Metadata = {
  title: "Solventless Yield Tracking Software — Capture the Process Behind Every Wash",
  description:
    "Track solventless yields by fraction and grade with the process parameters that produced them. Built by operators for ice water hash and rosin facilities replacing spreadsheets.",
  alternates: { canonical: "https://www.solvixlms.com/solventless-yield" },
  openGraph: {
    title: "Solventless Yield Tracking — SolvixLMS",
    description:
      "Parameter-depth yield tracking for ice water hash and rosin — not another inventory spreadsheet.",
    url: "https://www.solvixlms.com/solventless-yield",
    siteName: "SolvixLMS",
    images: [OG],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solventless Yield Tracking — SolvixLMS",
    description: "Capture wash parameters, grades, and yields so best batches become repeatable.",
    images: [OG.url],
  },
};

export default function YieldLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.solvixlms.com/" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Solventless yield tracking",
            item: "https://www.solvixlms.com/solventless-yield",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Solventless Yield Tracking Software",
        description:
          "How process-depth software helps solventless labs reproduce yields and stop losing batch knowledge.",
        image: "https://www.solvixlms.com/og-image.png",
        author: { "@type": "Organization", name: "SolvixLMS Technologies Inc." },
        publisher: {
          "@type": "Organization",
          name: "SolvixLMS Technologies Inc.",
          logo: { "@type": "ImageObject", url: "https://www.solvixlms.com/og-image.png" },
        },
        datePublished: "2026-09-16",
        dateModified: "2026-09-16",
        mainEntityOfPage: "https://www.solvixlms.com/solventless-yield",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
