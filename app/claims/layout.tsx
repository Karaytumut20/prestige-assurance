import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "File a Claim | 24/7 Concierge Support Center",
  description: "Report an incident or track your claim status. Our dedicated claims advocates are available 24/7/365 to assist you.",
  robots: {
    index: false, // Claims sayfasını Google'da öne çıkarmak istemeyebiliriz, müşteri odaklıdır.
    follow: true,
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}