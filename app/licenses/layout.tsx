import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
    title: "State Insurance Licenses | Portonova Assurance USA",
    description: "Portonova Assurance is a licensed insurance brokerage operating nationwide across 50 states. View our National Producer Number and state-specific license verifications.",
    keywords: ["US Insurance Licenses", "Portonova National Producer Number", "NPN Insurance Lookup", "Licensed Insurance Agency USA", "50 State Coverage Broker"],
    alternates: {
      canonical: `${siteConfig.url}/licenses`,
    },
    openGraph: {
      title: "State Insurance Licenses | Portonova Assurance USA",
      description: "Verify our state insurance licenses across the United States. NPN: 123456789.",
      url: `${siteConfig.url}/licenses`,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
