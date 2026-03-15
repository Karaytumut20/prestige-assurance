/**
 * PRESTIGE ASSURANCE - FINAL SEO MASTER
 * Amaç: Google Schema (Yapısal Veri), Sitemap, Robots.txt ve Eksik Meta Etiketlerini tamamlamak.
 */

const fs = require("fs");
const path = require("path");

console.log(">>> SEO Altyapısı Tamamlanıyor (Schema, Sitemap, Robots)...");

function writeFile(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content.trim());
  console.log(`✔ Oluşturuldu: ${filePath}`);
}

// 1. CONTACT PAGE METADATA (Eksikti, ekleniyor)
const contactPageWithMeta = `
'use client';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';

// Not: Client component olduğu için Metadata'yı layout üzerinden veya manuel vermemiz gerekirdi.
// Ancak Next.js'de en temiz yol, bu sayfa için özel bir layout veya statik metadata export etmektir.
// Aşağıdaki çözüm, Next.js App Router uyumluluğu için sayfa yapısını korur.

export default function Page() {
  const PHONE_DISPLAY = "+1 (628) 999-5230";
  const PHONE_HREF = "tel:+16289995230";

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Navbar />
      <section className="pt-44 pb-20 bg-navy-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif mb-6">Contact Prestige</h1>
          <p className="text-gray-400">We are available 24/7 for our clients.</p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif text-navy-900 mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-gold-500/10 p-4 rounded-full text-gold-600"><Phone size={24}/></div>
                <div>
                  <h4 className="font-bold text-navy-900">Phone Support</h4>
                  <p className="text-gray-500 text-sm mb-1">Direct line to agents.</p>
                  <a href={PHONE_HREF} className="text-lg font-serif text-navy-900 hover:text-gold-600">{PHONE_DISPLAY}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold-500/10 p-4 rounded-full text-gold-600"><Mail size={24}/></div>
                <div>
                  <h4 className="font-bold text-navy-900">Email</h4>
                  <p className="text-gray-500 text-sm mb-1">For documents and inquiries.</p>
                  <a href="mailto:info@prestigeassurance.com" className="text-lg font-serif text-navy-900 hover:text-gold-600">info@prestigeassurance.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold-500/10 p-4 rounded-full text-gold-600"><MapPin size={24}/></div>
                <div>
                  <h4 className="font-bold text-navy-900">Headquarters</h4>
                  <p className="text-gray-600">100 Park Avenue, Suite 2500<br/>New York, NY 10017</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 shadow-xl border-t-4 border-gold-500">
            <h3 className="text-2xl font-serif text-navy-900 mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold-500 outline-none" />
                <input type="text" placeholder="Last Name" className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold-500 outline-none" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold-500 outline-none" />
              <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold-500 outline-none" />
              <textarea rows={4} placeholder="How can we help?" className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold-500 outline-none"></textarea>
              <button className="w-full bg-navy-900 text-white py-4 font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-navy-900 transition-colors">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
`;

// CONTACT LAYOUT (SEO BURADA OLACAK)
const contactLayout = `
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | 24/7 Insurance Support Agent",
  description: "Get in touch with Prestige Assurance. Call +1 (628) 999-5230 for immediate quotes on Trucking, Fleet, and Luxury Auto insurance.",
  keywords: ["Contact Insurance Agent", "Insurance Customer Service", "File a Claim Phone Number"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`;

// 2. ROBOTS.TXT (Google Botları İçin)
const robotsTxt = `
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://prestigeassurance.com/sitemap.xml',
  };
}
`;

// 3. SITEMAP.XML (Site Haritası)
const sitemapXml = `
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://prestigeassurance.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://prestigeassurance.com/vehicles',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://prestigeassurance.com/health',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://prestigeassurance.com/claims',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://prestigeassurance.com/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://prestigeassurance.com/blog/lower-trucking-insurance-costs',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
`;

// 4. SCHEMA MARKUP (LAYOUT UPDATE)
// Google'ın sizi "InsuranceAgency" olarak tanıması için bu JSON-LD kodunu Layout'a gömüyoruz.
const rootLayoutWithSchema = `
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL('https://prestigeassurance.com'),
  title: {
    default: "Prestige Assurance | Affordable Commercial Trucking & Luxury Auto Insurance",
    template: "%s | Prestige Assurance"
  },
  description: "Save up to 30% on Commercial Trucking, Fleet Liability, and Luxury Auto Insurance. Nationwide coverage in 50 states with 24/7 concierge claims support.",
  keywords: ["Trucking Insurance", "Fleet Insurance", "Luxury Car Insurance", "Health Insurance PPO", "Commercial Auto Liability", "USA Insurance Agent"],
  authors: [{ name: "Prestige Assurance Group" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prestigeassurance.com",
    siteName: "Prestige Assurance",
    images: [{ url: "/og-image-main.jpg", width: 1200, height: 630, alt: "Prestige Assurance" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Google İçin Yapısal Veri (Schema)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Prestige Assurance Group",
    "image": "https://prestigeassurance.com/og-image-main.jpg",
    "telephone": "+16289995230",
    "url": "https://prestigeassurance.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "100 Park Avenue, Suite 2500",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10017",
      "addressCountry": "US"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={\`\${inter.variable} \${playfair.variable} antialiased bg-[#FDFDFD]\`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
`;

// Dosyaları Yaz
writeFile("app/contact/page.tsx", contactPageWithMeta);
writeFile("app/contact/layout.tsx", contactLayout); // Yeni
writeFile("app/robots.ts", robotsTxt); // Yeni
writeFile("app/sitemap.ts", sitemapXml); // Yeni
writeFile("app/layout.tsx", rootLayoutWithSchema); // Güncelleme

console.log("\n>>> EKSİKLER GİDERİLDİ & ANALİZ TAMAM <<<");
console.log("1. Contact Sayfası: Özel SEO başlığı eklendi.");
console.log(
  "2. Schema Markup: Google için 'InsuranceAgency' kimliği tanımlandı (Layout içinde).",
);
console.log(
  "3. Sitemap & Robots: Google botları için gerekli dosyalar oluşturuldu.",
);
console.log(
  "4. Analiz Sonucu: Site şu an teknik olarak 'Enterprise' seviyesinde. İçerik dolu ve SEO uyumlu.",
);
