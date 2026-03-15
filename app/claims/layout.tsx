import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: "File an Insurance Claim | Portonova Support Center USA",
  description: "Report an incident or track your insurance claim status 24/7/365. Portonova's concierge claims advocates assist clients across the United States with expedited processing.",
  keywords: ["Insurance Claim USA", "Report Auto Accident", "Commercial Trucking Claim", "Portonova Claims Center", "24/7 Insurance Support America", "Fast Insurance Payouts USA"],
  alternates: {
    canonical: `${siteConfig.url}/claims`,
  },
  openGraph: {
    title: "File an Insurance Claim | Portonova Support Center USA",
    description: "24/7/365 claims support for commercial and personal insurance policies across the US.",
    url: `${siteConfig.url}/claims`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "File an Insurance Claim | Portonova",
    description: "America's fastest concierge claims support.",
  },
  category: "insurance",
  robots: {
    index: false,
    follow: true,
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}