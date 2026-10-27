import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { COMPANY_INFO } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-next",
  display: "swap",
});

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display-next",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const metadataBase = new URL(
  process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : COMPANY_INFO.domain,
);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default:
      "Gilmer, TX - Raymond Hardin Roofing | East Texas's Most Trusted Roofer Since 1995",
    template: "%s | Raymond Hardin Roofing",
  },
  description:
    "Established in 1995 in Gilmer, TX, Raymond Hardin Roofing provides free same-day/next-day roof inspections, shingle roofs, metal roofs, torch-down rubber roofs, tear-offs, and re-decks across East Texas. Call (903) 797-2756.",
  keywords: [
    "Raymond Hardin Roofing",
    "Gilmer TX roofer",
    "roofing contractor Gilmer TX",
    "Longview TX roofing company",
    "Tyler TX roofer",
    "Pittsburg TX roofing",
    "Mount Pleasant TX roofer",
    "Gladewater TX roofer",
    "White Oak TX roofer",
    "Mineola TX roofer",
    "shingle roof East Texas",
    "metal roof Gilmer TX",
    "torch-down rubber roof East Texas",
    "roof tear-off and re-deck Gilmer TX",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: metadataBase.origin,
    siteName: COMPANY_INFO.name,
    title: "Reputation and experience you can trust.",
    description:
      "Family-owned in Gilmer since 1995. Shingle, metal, and torch-down rubber roofs, tear-offs, and repairs across East Texas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reputation and experience you can trust.",
    description:
      "Family-owned in Gilmer since 1995. Shingle, metal, and torch-down rubber roofs, tear-offs, and repairs across East Texas.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-[#0e0e0e]">
        <Header />
        <main className="min-w-0 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
