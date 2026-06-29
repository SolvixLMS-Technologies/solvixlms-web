import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SolvixLMS — Built by Operators, for Operators",
  description:
    "SolvixLMS Technologies Inc. builds lab management software for modern, regulated labs. Built by operators who got tired of running multi-million dollar facilities on spreadsheets.",
  keywords:
    "SolvixLMS company,lab software company,laboratory technology company,SolvixLMS team,lab management technology",
  robots: "index, follow, max-image-preview:large, max-snippet:-1",
  alternates: { canonical: "https://www.solvixlms.com/about" },
  openGraph: {
    title: "About SolvixLMS — Built by Operators, for Operators",
    description:
      "Built on the production floor of one of the highest-volume production facilities in its category.",
    url: "https://www.solvixlms.com/about",
    siteName: "SolvixLMS",
    images: [{ url: "https://www.solvixlms.com/assets/solvix-main-gray.svg", alt: "About SolvixLMS" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About SolvixLMS — Built by Operators, for Operators",
    description:
      "Built on the production floor — by operators, for operators.",
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
              "Operations management platform for modern, regulated labs. Seven integrated suites covering production, compliance, analytics, client management, and more.",
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
