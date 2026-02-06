import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Commercial Trucking & Luxury Fleet Insurance | Save 30%",
  description: "Specialized insurance for Commercial Trucks, Logistics Fleets, and Luxury Cars. Low rates, instant certificates, and DOT compliance assistance.",
  keywords: ["Commercial Truck Insurance", "Fleet Insurance", "Semi Truck Insurance", "Luxury Car Insurance", "Exotic Car Insurance"],
  openGraph: {
    title: "Commercial Trucking & Luxury Fleet Insurance",
    description: "Lower your operational costs with our wholesale insurance rates.",
    images: ["/og-vehicles.jpg"],
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}