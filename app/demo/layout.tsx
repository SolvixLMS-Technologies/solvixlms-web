import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo — SolvixLMS",
  description:
    "Request a personalized SolvixLMS demo tailored to your lab's operations. See process tracking, compliance, and analytics mapped to your workflow.",
  robots: "index, follow",
  alternates: { canonical: "https://www.solvixlms.com/demo" },
  openGraph: {
    title: "Book a Demo — SolvixLMS",
    description:
      "Request a personalized SolvixLMS demo tailored to your lab's operations.",
    url: "https://www.solvixlms.com/demo",
    siteName: "SolvixLMS",
    type: "website",
  },
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
