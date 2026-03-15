import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | 24/7 Insurance Support Agent",
  description: "Get in touch with Prestige Assurance. Call +1 (628) 999-5230 for immediate quotes on Trucking, Fleet, and Luxury Auto insurance.",
  keywords: ["Contact Insurance Agent", "Insurance Customer Service", "File a Claim Phone Number"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}