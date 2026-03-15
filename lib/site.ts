export const siteConfig = {
  name: "Portonova",
  shortName: "Portonova",
  description: "Save up to 30% on Commercial Trucking, Fleet Liability, and Luxury Auto Insurance. Nationwide coverage in 50 states with 24/7 concierge claims support.",
  url: "https://www.portonova.net",
  ogImage: "https://www.portonova.net/og-image-main.jpg",
  links: {
    twitter: "https://twitter.com/portonova",
    github: "https://github.com/portonova",
  },
  keywords: [
    "Trucking Insurance",
    "Fleet Insurance",
    "Luxury Car Insurance",
    "Health Insurance PPO",
    "Commercial Auto Liability",
    "USA Insurance Agent"
  ],
  organizationSchema: {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Portonova",
    "image": "https://www.portonova.net/og-image-main.jpg",
    "telephone": "+16289995230",
    "url": "https://www.portonova.net",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "100 Peachtree Street, Suite 2500",
      "addressLocality": "Atlanta",
      "addressRegion": "GA",
      "postalCode": "30303",
      "addressCountry": "US"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$"
  }
};

export type SiteConfig = typeof siteConfig;
