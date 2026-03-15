import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: 'swap', preload: true });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: 'swap', preload: true });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Affordable Commercial Trucking & Luxury Auto Insurance`,
    template: `%s | ${siteConfig.shortName}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteConfig.organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-[#FDFDFD]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}