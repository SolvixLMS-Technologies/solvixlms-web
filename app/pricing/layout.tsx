import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SolvixLMS Pricing — Plans for Every Lab",
  description:
    "Three plans starting at $599/month. Unlimited users on every tier. All core modules included. No per-seat charges. See what's included in Essentials, Professional, and Enterprise.",
  keywords:
    "lab software pricing,LIMS pricing,lab management software cost,sample tracking plans,lab ERP pricing,compliance software cost,laboratory software subscription",
  robots: "index, follow, max-image-preview:large, max-snippet:-1",
  alternates: { canonical: "https://www.solvixlms.com/pricing" },
  openGraph: {
    title: "SolvixLMS Pricing — Plans for Every Lab",
    description:
      "Three plans from $599/mo. Unlimited users. All core modules. No per-seat pricing.",
    url: "https://www.solvixlms.com/pricing",
    siteName: "SolvixLMS",
    images: [{ url: "https://www.solvixlms.com/assets/solvix-main-gray.svg", alt: "SolvixLMS Pricing" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SolvixLMS Pricing — Plans for Every Lab",
    description: "Three plans from $599/mo. Unlimited users. All core modules.",
    images: ["https://www.solvixlms.com/assets/solvix-main-gray.svg"],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
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
            offers: [
              {
                "@type": "Offer",
                name: "Essentials",
                price: "599",
                priceCurrency: "USD",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: "599",
                  priceCurrency: "USD",
                  billingDuration: "P1M",
                },
              },
              {
                "@type": "Offer",
                name: "Professional",
                price: "999",
                priceCurrency: "USD",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: "999",
                  priceCurrency: "USD",
                  billingDuration: "P1M",
                },
              },
              {
                "@type": "Offer",
                name: "Enterprise",
                price: "1499",
                priceCurrency: "USD",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: "1499",
                  priceCurrency: "USD",
                  billingDuration: "P1M",
                },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
