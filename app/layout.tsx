import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://advisorymagnolia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Magnolia Advisory Group | Bookkeeping, Fractional CFO & M&A Advisory",
    template: "%s | Magnolia Advisory Group",
  },
  description:
    "Magnolia Advisory Group gives owner-operated service businesses clean books, fractional CFO guidance, and M&A transaction advisory, without big-firm complexity or fees.",
  keywords: [
    "bookkeeping services",
    "small business bookkeeping",
    "fractional CFO",
    "outsourced CFO",
    "M&A advisory",
    "M&A transaction advisory",
    "financial advisory for small business",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Magnolia Advisory Group",
    title: "Magnolia Advisory Group | Bookkeeping, Fractional CFO & M&A Advisory",
    description:
      "Clean books, fractional CFO guidance, and M&A transaction advisory for owner-operated service businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Magnolia Advisory Group",
  description:
    "Bookkeeping, fractional CFO, and M&A transaction advisory services for owner-operated service businesses.",
  url: siteUrl,
  areaServed: "US",
  priceRange: "$$",
  email: "contact@advisorymagnolia.com",
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bookkeeping Services" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fractional CFO Services" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "M&A Transaction Advisory" } },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
