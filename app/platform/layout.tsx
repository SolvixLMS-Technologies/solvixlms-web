import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SolvixLMS Platform — Seven Integrated Suites for the Modern Lab",
  description:
    "SolvixLMS replaces spreadsheets and disconnected tools with seven integrated suites: SolvCORE for production tracking, SolvCOMP for compliance, SolvERP for operations, and more. Built for modern, regulated labs.",
  keywords:
    "lab LIMS,sample tracking software,lab production software,batch tracking,lab ERP,lab compliance software,regulatory reporting,laboratory batch tracking,process tracking software",
  robots: "index, follow, max-image-preview:large, max-snippet:-1",
  alternates: { canonical: "https://www.solvixlms.com/platform" },
  openGraph: {
    title: "SolvixLMS Platform — Seven Suites, One System",
    description:
      "Production tracking, compliance, analytics, client portal, workflow scheduling, and more — all sharing one data model. No integrations to maintain.",
    url: "https://www.solvixlms.com/platform",
    siteName: "SolvixLMS",
    images: [
      {
        url: "https://www.solvixlms.com/assets/solvix-main-gray.svg",
        alt: "SolvixLMS Platform Overview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SolvixLMS Platform — Seven Suites, One System",
    description:
      "Production tracking, compliance, analytics, client portal, workflow — all sharing one data model.",
    images: ["https://www.solvixlms.com/assets/solvix-main-gray.svg"],
  },
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
              "Seven integrated suites for modern lab operations: production tracking, compliance, analytics, client portal, inventory, workflow scheduling, and command center.",
            featureList: [
              "Batch-level process tracking",
              "Process temperature and grade yield capture",
              "Run profile and technician performance analytics",
              "Regulatory-compatible compliance reporting",
              "Consumables and cost-per-gram tracking",
              "Client portal with split-contract support",
              "Production workflow and scheduling",
              "Real-time command center dashboard",
            ],
            offers: [
              { "@type": "Offer", name: "Essentials", price: "599", priceCurrency: "USD" },
              { "@type": "Offer", name: "Professional", price: "999", priceCurrency: "USD" },
              { "@type": "Offer", name: "Enterprise", price: "1499", priceCurrency: "USD" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
