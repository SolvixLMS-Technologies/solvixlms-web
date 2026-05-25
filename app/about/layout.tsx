import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SolvixLMS — Built by Operators, for Operators",
  description:
    "SolvixLMS Technologies Inc. is a majority-owned subsidiary of Growth Stalk Holdings Corp (OTC: GSTK). Built by extraction operators who got tired of running multi-million dollar facilities on spreadsheets.",
  keywords:
    "SolvixLMS company,cannabis software company,Growth Stalk Holdings,GSTK,cannabis technology company,SolvixLMS team,cannabis extraction technology",
  robots: "index, follow, max-image-preview:large, max-snippet:-1",
  alternates: { canonical: "https://www.solvixlms.com/about" },
  openGraph: {
    title: "About SolvixLMS — Built by Operators, for Operators",
    description:
      "Built on the production floor of one of the largest solventless extraction facilities in the U.S. A majority-owned subsidiary of Growth Stalk Holdings Corp (OTC: GSTK).",
    url: "https://www.solvixlms.com/about",
    siteName: "SolvixLMS",
    images: [{ url: "https://www.solvixlms.com/assets/solvix-main-gray.svg", alt: "About SolvixLMS" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About SolvixLMS — Built by Operators, for Operators",
    description:
      "Built on the production floor. Backed by Growth Stalk Holdings Corp (OTC: GSTK).",
    images: ["https://www.solvixlms.com/assets/solvix-main-gray.svg"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SolvixLMS Technologies Inc.",
            url: "https://www.solvixlms.com",
            description:
              "Operations management platform for cannabis extraction and processing facilities. Seven integrated suites covering production, compliance, analytics, client management, and more.",
            parentOrganization: {
              "@type": "Corporation",
              name: "Growth Stalk Holdings Corp",
              tickerSymbol: "OTC:GSTK",
            },
            founder: {
              "@type": "Person",
              name: "Joe Neihart",
              jobTitle: "Founder & President",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
