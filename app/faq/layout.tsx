import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SolvixLMS FAQ — Common Questions About Lab Management Software",
  description:
    "Answers to the most common questions about SolvixLMS: how it compares to a typical LIMS, regulatory reporting, onboarding, data security, pricing, and more.",
  keywords:
    "lab LIMS FAQ,lab software questions,LIMS comparison,lab ERP FAQ,sample tracking FAQ,SolvixLMS questions,lab compliance software FAQ",
  robots: "index, follow, max-image-preview:large, max-snippet:-1",
  alternates: { canonical: "https://www.solvixlms.com/faq" },
  openGraph: {
    title: "SolvixLMS FAQ — Common Questions About Lab Management Software",
    description:
      "Answers to the most common questions: comparisons, regulatory reporting, onboarding, data security, pricing, and more.",
    url: "https://www.solvixlms.com/faq",
    siteName: "SolvixLMS",
    images: [{ url: "https://www.solvixlms.com/assets/solvix-main-gray.svg", alt: "SolvixLMS FAQ" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SolvixLMS FAQ — Common Questions About Lab Management Software",
    description:
      "Comparisons, regulatory reporting, onboarding, data security, pricing — all answered.",
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
                name: "How is SolvixLMS different from a typical LIMS or inventory tool?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Those tools track inventory and compliance — what you have and where it is. SolvixLMS tracks the process — what happened between the flower going in and the concentrate coming out. Where the loss actually occurred: wash, sieve, freeze dry, press, or purge. What the run yielded against what it should have yielded for that cultivar, at that moisture, on that equipment. Run profiles, yield by grade, technician performance. None of that fits in a lot number. That's the category distinction.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need to rip out my current software to try SolvixLMS?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. SolvixLMS runs alongside your existing compliance and state reporting tools. All seven suites are production-ready and deployable today — most operators start with SolvCORE for production tracking and switch on the rest as they need them.",
                },
              },
              {
                "@type": "Question",
                name: "What does onboarding look like?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Self-serve. Operators don't have time for a 30-day onboarding program — you get up and running on your own schedule with guided tutorials and Solvix University (in-depth video walkthroughs and documentation). When you need help, our team is available anytime.",
                },
              },
              {
                "@type": "Question",
                name: "Is my data secure?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Every deployment is isolated at the tenant level. All traffic over TLS. Role-based access control. Audit trails on every record. We're pursuing SOC 2 certification.",
                },
              },
              {
                "@type": "Question",
                name: "Do you integrate with regulatory and state reporting systems?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "SolvCOMP produces the outputs state and regulatory systems require. SolvixLMS is designed to integrate with Metrc and BioTrack, with LeafLink marketplace connectivity in development. Reach out if a specific integration is blocking your evaluation.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use SolvixLMS for my specific workflow?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The platform is method-agnostic at the process layer. Our initial depth is strongest in the areas our own team runs day to day, but the data model accommodates any workflow.",
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
                  text: "We don't offer self-serve trials — access is waitlist-gated. Book a demo to get started.",
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
