import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: "Commercial Trucking & Luxury Fleet Insurance | Portonova USA",
  description: "Specialized US insurance for Commercial Trucks, Logistics Fleets, and Luxury Cars. Low rates, instant certificates, and Federal DOT compliance assistance nationwide.",
  keywords: ["US Commercial Truck Insurance", "American Fleet Insurance", "Semi Truck Insurance USA", "Luxury Car Insurance America", "Exotic Car Deals Valid in 50 States", "DOT Compliant Auto Insurance"],
  alternates: {
    canonical: `${siteConfig.url}/vehicles`,
  },
  openGraph: {
    title: "Commercial Trucking & Luxury Fleet Insurance | Portonova USA",
    description: "Lower your operational costs with our US wholesale insurance rates valid in all 50 states.",
    url: `${siteConfig.url}/vehicles`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: ["/og-vehicles.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Truck & Fleet Insurance Quotes",
    description: "Serving American truckers and fleets with fast DOT certs and 30% savings.",
  },
  category: "transportation",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}