import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: "Affordable Health Insurance PPO & Life Coverage | Portonova USA",
  description: "Find the best US health insurance plans with nationwide PPO networks. Low premiums for individuals, families, and small businesses across America.",
  keywords: ["Health Insurance PPO USA", "Affordable US Health Insurance", "Life Insurance America", "US Group Health Benefits", "Medical Insurance Brokers USA", "ACA Compliant Health Plans"],
  alternates: {
    canonical: `${siteConfig.url}/health`,
  },
  openGraph: {
    title: "Affordable Health & Life Insurance | Portonova USA",
    description: "Get nationwide PPO coverage across 50 states for less. Compare quotes today.",
    url: `${siteConfig.url}/health`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: ["/og-health.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Health Insurance PPO | Portonova",
    description: "Nationwide PPO health insurance networks with unbeatable rates.",
  },
  category: "health",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}