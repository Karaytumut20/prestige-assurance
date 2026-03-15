import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: "Contact Us | Portonova Insurance Agency Atlanta, USA",
  description: "Get in touch with Portonova Assurance. Call our US-based agents at +1 (628) 999-5230 for immediate quotes on Commercial Trucking, Fleet, Health, and Luxury Auto insurance nationwide.",
  keywords: ["Contact Insurance Agent USA", "Portonova Customer Service", "Atlanta Insurance Brokers", "Commercial Trucking Insurance Agents US", "Health Insurance Support America"],
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact Us | Portonova USA",
    description: "Reach our US-based insurance agents for immediate fleet and luxury auto quotes.",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Portonova Insurance USA",
    description: "Get nationwide quotes for auto and health insurance today.",
  },
  category: "business",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}