import type { Metadata } from "next";

const OG = {
  url: "https://www.solvixlms.com/og-image.png",
  width: 1200,
  height: 630,
  alt: "SolvixLMS",
};

export const metadata: Metadata = {
  title: "SolvixLMS vs Traditional LIMS — Process Depth, Not Just Inventory",
  description:
    "Traditional LIMS tracks samples and inventory. SolvixLMS tracks how the batch was made — parameters, yields, and technician attribution. See the difference for extraction labs.",
  alternates: { canonical: "https://www.solvixlms.com/vs-lims" },
  openGraph: {
    title: "SolvixLMS vs Traditional LIMS",
    description:
      "They track products. We track the process. Why process-depth ops beats inventory-first LIMS for modern labs.",
    url: "https://www.solvixlms.com/vs-lims",
    siteName: "SolvixLMS",
    images: [OG],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "SolvixLMS vs Traditional LIMS",
    description: "Process depth vs inventory-first LIMS for regulated extraction labs.",
    images: [OG.url],
  },
};

export default function VsLimsLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.solvixlms.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "vs Traditional LIMS",
            item: "https://www.solvixlms.com/vs-lims",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is SolvixLMS a LIMS?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "SolvixLMS overlaps with LIMS on sample and lot tracking, but it is built as a process operations platform — capturing how a batch was run at parameter depth, not only what inventory remains.",
            },
          },
          {
            "@type": "Question",
            name: "Can SolvixLMS replace our existing LIMS?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Many facilities replace spreadsheet-heavy workflows and inventory tools with SolvixLMS. If you already run a clinical-style LIMS, book a demo — fit depends on whether your bottleneck is process knowledge or sample custody alone.",
            },
          },
        ],
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
