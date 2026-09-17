import type { Metadata } from "next";

const OG = {
  url: "https://www.solvixlms.com/og-image.png",
  width: 1200,
  height: 630,
  alt: "SolvixLMS",
};

export const metadata: Metadata = {
  title: "Terms of Service — SolvixLMS",
  description:
    "Terms governing use of the SolvixLMS website, waitlist and demo requests, and related marketing services.",
  alternates: { canonical: "https://www.solvixlms.com/terms" },
  openGraph: {
    title: "Terms of Service — SolvixLMS",
    description: "Website and marketing terms for SolvixLMS Technologies Inc.",
    url: "https://www.solvixlms.com/terms",
    siteName: "SolvixLMS",
    images: [OG],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service — SolvixLMS",
    images: [OG.url],
  },
  robots: { index: true, follow: true },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
