import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
    title: "Terms of Use | Portonova Assurance US Service Terms",
    description: "Terms and conditions for using the Portonova Assurance website and quoting engines. Applicable to all users accessing our services from within the United States.",
    keywords: ["Terms of Use Portonova", "US Insurance Terms of Service", "Portonova Legal Agreement", "Website Terms US"],
    alternates: {
      canonical: `${siteConfig.url}/terms`,
    },
    openGraph: {
      title: "Terms of Use | Portonova USA",
      description: "Service terms and legal conditions for Portonova Assurance US operations.",
      url: `${siteConfig.url}/terms`,
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
