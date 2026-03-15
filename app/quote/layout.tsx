import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
    title: "Get a Free Insurance Quote | Portonova USA",
    description: "Compare rates across 40+ US-based carriers for Commercial Trucking, Luxury Auto, and Health Insurance. Get a free, no-obligation quote from Portonova today.",
    keywords: ["Free Insurance Quote Online", "Compare Insurance Rates USA", "Commercial Trucking Quote", "Best Auto Insurance Rates America", "Affordable US Health Insurance Quote"],
    alternates: {
      canonical: `${siteConfig.url}/quote`,
    },
    openGraph: {
      title: "Get a Free Insurance Quote | Portonova USA",
      description: "Compare rates across 40+ US-based carriers for auto, health, and commercial insurance.",
      url: `${siteConfig.url}/quote`,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Get a Free Insurance Quote from Portonova",
      description: "Lower your premiums in 50 states today.",
    },
    category: "finance",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
