import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Get a Free Insurance Quote | Prestige Assurance",
    description: "Compare rates across 40+ carriers for Commercial Trucking, Luxury Auto, and Health Insurance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
