import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Terms of Use | Prestige Assurance",
    description: "Terms and conditions for using the Prestige Assurance website and services.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
