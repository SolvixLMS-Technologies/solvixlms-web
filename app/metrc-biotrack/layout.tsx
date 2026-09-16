import type { Metadata } from "next";

const OG = {
  url: "https://www.solvixlms.com/og-image.png",
  width: 1200,
  height: 630,
  alt: "SolvixLMS",
};

export const metadata: Metadata = {
  title: "SolvixLMS with Metrc & BioTrack — Complementary, Not a Replacement",
  description:
    "Metrc and BioTrack track regulated inventory movement. SolvixLMS tracks how your batch was made. Designed to complement state track-and-trace — not replace it.",
  alternates: { canonical: "https://www.solvixlms.com/metrc-biotrack" },
  openGraph: {
    title: "SolvixLMS + Metrc / BioTrack",
    description:
      "State track-and-trace answers where inventory moved. SolvixLMS answers how the batch was made.",
    url: "https://www.solvixlms.com/metrc-biotrack",
    siteName: "SolvixLMS",
    images: [OG],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "SolvixLMS + Metrc / BioTrack",
    description: "Complementary process ops alongside state track-and-trace systems.",
    images: [OG.url],
  },
};

export default function MetrcLayout({ children }: { children: React.ReactNode }) {
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
            name: "Metrc & BioTrack",
            item: "https://www.solvixlms.com/metrc-biotrack",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Does SolvixLMS replace Metrc or BioTrack?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Metrc and BioTrack are state track-and-trace systems for regulated inventory. SolvixLMS is designed to complement them by capturing process parameters, yields, and production operations that track-and-trace systems do not store.",
            },
          },
          {
            "@type": "Question",
            name: "Do you integrate with Metrc or BioTrack today?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "SolvixLMS is designed to integrate with state track-and-trace workflows. Integration depth and timing vary by jurisdiction — book a demo for the current status for your state.",
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
