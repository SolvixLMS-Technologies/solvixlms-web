import type { Metadata } from "next";

const OG = {
  url: "https://www.solvixlms.com/og-image.png",
  width: 1200,
  height: 630,
  alt: "SolvixLMS",
};

export const metadata: Metadata = {
  title: "Privacy Policy — SolvixLMS",
  description:
    "How SolvixLMS Technologies Inc. collects, uses, and protects personal information on solvixlms.com and related services.",
  alternates: { canonical: "https://www.solvixlms.com/privacy" },
  openGraph: {
    title: "Privacy Policy — SolvixLMS",
    description: "Privacy practices for SolvixLMS Technologies Inc.",
    url: "https://www.solvixlms.com/privacy",
    siteName: "SolvixLMS",
    images: [OG],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — SolvixLMS",
    images: [OG.url],
  },
  robots: { index: true, follow: true },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
