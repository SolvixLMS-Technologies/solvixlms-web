import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SolvixLMS FAQ — Common Questions About Cannabis Extraction Software",
  description:
    "Answers to the most common questions about SolvixLMS: how it compares to Canix and Distru, Metrc integration, onboarding, data security, pricing, and more.",
  keywords:
    "cannabis LIMS FAQ,cannabis software questions,Metrc alternative,cannabis ERP FAQ,solventless software FAQ,SolvixLMS questions,cannabis compliance software FAQ",
  robots: "index, follow, max-image-preview:large, max-snippet:-1",
  alternates: { canonical: "https://www.solvixlms.com/faq" },
  openGraph: {
    title: "SolvixLMS FAQ — Common Questions About Cannabis Extraction Software",
    description:
      "Answers to the most common questions: comparisons, Metrc integration, onboarding, data security, pricing, and more.",
    url: "https://www.solvixlms.com/faq",
    siteName: "SolvixLMS",
    images: [{ url: "https://www.solvixlms.com/assets/solvix-main-gray.svg", alt: "SolvixLMS FAQ" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SolvixLMS FAQ — Common Questions About Cannabis Extraction Software",
    description:
      "Comparisons, Metrc integration, onboarding, data security, pricing — all answered.",
    images: ["https://www.solvixlms.com/assets/solvix-main-gray.svg"],
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How is SolvixLMS different from Canix, Flourish, or Distru?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Those platforms track inventory and compliance — what you have and where it is. SolvixLMS tracks the process — what happened between receiving flower and shipping concentrate. Wash parameters, press profiles, yield by micron, technician performance. None of that fits in a lot number. That's the category distinction.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need to rip out my current software to try SolvixLMS?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. SolvixLMS runs alongside your existing compliance and state reporting tools. Most customers start with SolvCORE for production tracking and add modules as they need them.",
                },
              },
              {
                "@type": "Question",
                name: "What does onboarding look like?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A structured 30-day program: facility walkthrough, data migration from spreadsheets, SOP capture, team training, and a go-live checkpoint. Our early cohort onboarded in 2–4 weeks depending on facility size.",
                },
              },
              {
                "@type": "Question",
                name: "Is my data secure?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Every deployment is isolated at the tenant level. All traffic over TLS. Role-based access control. Audit trails on every record. SOC 2 readiness is on our 2026 roadmap.",
                },
              },
              {
                "@type": "Question",
                name: "Do you integrate with Metrc and state seed-to-sale?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "SolvCOMP handles Metrc reporting and produces the outputs state systems require. Full Metrc API integration is in active development; reach out if this is blocking.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use SolvixLMS for hydrocarbon, ethanol, or CO₂ extraction?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The platform is method-agnostic at the process layer. Our initial depth is strongest on solventless because that's where we operate, but the data model accommodates any extraction method.",
                },
              },
              {
                "@type": "Question",
                name: "What happens to my data if I cancel?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Your data is yours. Full export (CSV and JSON) available at any time. Cancellation gives you a 60-day grace period to pull anything you need.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to see ROI?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most operators see cost-per-gram clarity inside the first 30 days of clean capture. Yield-improvement gains from parameter analysis typically emerge at the 60–90 day mark.",
                },
              },
              {
                "@type": "Question",
                name: "How does the waitlist work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Join the list, we'll reach out when a slot opens for a facility of your profile and size. No charge to be on the waitlist.",
                },
              },
              {
                "@type": "Question",
                name: "Who do I talk to about enterprise or multi-site deployment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Book a demo and request an enterprise conversation — we'll loop in the right team.",
                },
              },
              {
                "@type": "Question",
                name: "Do you charge per user?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Every plan includes unlimited users. We don't believe in per-seat pricing for production software — your whole team needs access, from technicians to managers.",
                },
              },
              {
                "@type": "Question",
                name: "Can I switch plans?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Upgrade or downgrade at any time. Changes take effect on your next billing cycle. No penalties, no lock-in contracts.",
                },
              },
              {
                "@type": "Question",
                name: "Is there a free trial?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We don't offer self-serve trials. Instead, we do a structured demo and onboarding so you get real value from day one. Book a demo to get started.",
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
