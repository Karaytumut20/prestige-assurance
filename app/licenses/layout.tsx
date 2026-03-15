import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "State Licenses | Prestige Assurance",
    description: "Prestige Assurance Group is a licensed insurance brokerage operating nationwide. View our state license numbers.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
