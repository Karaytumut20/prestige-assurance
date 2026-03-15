import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
    title: "Privacy Policy | Portonova Assurance US Privacy Terms",
    description: "Learn how Portonova Assurance collects, uses, and protects your personal information across our United States insurance operations in compliance with US privacy frameworks.",
    keywords: ["US Insurance Privacy Policy", "Portonova Assurance Privacy", "US Consumer Privacy Rights", "Data Protection USA"],
    alternates: {
      canonical: `${siteConfig.url}/privacy`,
    },
    openGraph: {
      title: "Privacy Policy | Portonova USA",
      description: "US-compliant consumer privacy disclosures for Portonova Assurance.",
      url: `${siteConfig.url}/privacy`,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    robots: {
      index: false,
      follow: true,
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
