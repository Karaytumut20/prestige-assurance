import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: "Health & Life Insurance Solutions | Portonova USA",
  description: "Secure your family's financial future with US-based Private Health PPO plans, Term Life, and Concierge Medical access across all 50 states.",
  keywords: ["US Life Insurance", "Private Health PPO USA", "Executive Medical Insurance", "Concierge Medicine America", "Term Life Insurance US", "Group Health Benefits USA"],
  alternates: {
    canonical: `${siteConfig.url}/health-life`,
  },
  openGraph: {
    title: "Health & Life Insurance | Portonova USA",
    description: "Multi-million dollar US life policies and premier PPO health coverage nationwide.",
    url: `${siteConfig.url}/health-life`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Health & Life Insurance Solutions USA",
    description: "Protecting American families with premier health and life policies.",
  },
  category: "health",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
