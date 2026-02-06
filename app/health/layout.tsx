import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Affordable Health Insurance PPO & Life Coverage | Prestige",
  description: "Find the best health insurance plans with nationwide PPO networks. Low premiums for individuals, families, and small businesses.",
  keywords: ["Health Insurance PPO", "Affordable Health Insurance", "Life Insurance", "Group Benefits", "Medical Insurance USA"],
  openGraph: {
    title: "Affordable Health & Life Insurance",
    description: "Get nationwide PPO coverage for less. Compare quotes today.",
    images: ["/og-health.jpg"],
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}