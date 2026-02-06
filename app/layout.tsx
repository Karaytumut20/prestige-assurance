import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

// GLOBAL METADATA (Varsayılan)
export const metadata: Metadata = {
  metadataBase: new URL('https://prestigeassurance.com'), // Kendi domaininizle değiştirin
  title: {
    default: "Prestige Assurance | Affordable Commercial Trucking & Luxury Auto Insurance",
    template: "%s | Prestige Assurance"
  },
  description: "Save up to 30% on Commercial Trucking, Fleet Liability, and Luxury Auto Insurance. Nationwide coverage in 50 states with 24/7 concierge claims support.",
  keywords: ["Trucking Insurance", "Fleet Insurance", "Luxury Car Insurance", "Health Insurance PPO", "Commercial Auto Liability", "USA Insurance Agent"],
  authors: [{ name: "Prestige Assurance Group" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prestigeassurance.com",
    siteName: "Prestige Assurance",
    images: [
      {
        url: "/og-image-main.jpg", // Public klasörüne bu isimde bir görsel ekleyin
        width: 1200,
        height: 630,
        alt: "Prestige Assurance - Elite Coverage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@prestigeassurance",
    creator: "@prestigeassurance",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-[#FDFDFD]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}