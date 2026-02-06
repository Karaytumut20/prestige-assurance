/**
 * LUXURY INSURANCE WEBSITE SETUP SCRIPT
 * * Bu script:
 * 1. Next.js projesini (App Router, TypeScript, Tailwind) kurar.
 * 2. Lüks animasyonlar için Framer Motion ve ikonlar için Lucide-React yükler.
 * 3. Lüks tasarıma uygun dosya yapısını ve kodları otomatik oluşturur.
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const PROJECT_NAME = "prestige-assurance";

// Renk Paleti ve Fontlar
const LUXURY_THEME = {
  gold: "#D4AF37",
  deepNavy: "#0A192F",
  offWhite: "#F8F9FA",
  charcoal: "#1A1A1A",
};

console.log(
  `\x1b[36m%s\x1b[0m`,
  `>>> ${PROJECT_NAME} için Lüks Kurulum Başlatılıyor...`,
);

// 1. Next.js Projesi Oluşturma
try {
  if (fs.existsSync(PROJECT_NAME)) {
    console.error(
      `HATA: '${PROJECT_NAME}' klasörü zaten var. Lütfen silin veya başka bir yerde çalıştırın.`,
    );
    process.exit(1);
  }

  console.log(
    ">>> Next.js projesi oluşturuluyor (Bu işlem birkaç dakika sürebilir)...",
  );
  execSync(
    `npx create-next-app@latest ${PROJECT_NAME} --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --use-npm`,
    { stdio: "inherit" },
  );

  // Çalışma dizinini proje içine değiştir
  process.chdir(PROJECT_NAME);

  console.log(
    ">>> Ekstra kütüphaneler yükleniyor (Framer Motion, Lucide, clsx)...",
  );
  execSync("npm install framer-motion lucide-react clsx tailwind-merge", {
    stdio: "inherit",
  });
} catch (error) {
  console.error("Kurulum sırasında hata oluştu:", error);
  process.exit(1);
}

// 2. Dosya İçeriklerini Hazırlama

// --- TAILWIND CONFIG (Lüks Renkler ve Fontlar) ---
const tailwindConfig = `
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#E5C558',
          500: '#D4AF37', // Classic Gold
          600: '#AA8C2C',
        },
        navy: {
          800: '#0A192F', // Deep Royal Navy
          900: '#050D18',
        },
        marble: '#F9F9F9',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(to right bottom, #0A192F, #050D18)',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #E5C558 50%, #AA8C2C 100%)',
      }
    },
  },
  plugins: [],
};
export default config;
`;

// --- GLOBAL CSS (Yumuşak Geçişler ve Scrollbar) ---
const globalCss = `
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 10, 25, 47;
  --background-start-rgb: 248, 249, 250;
  --background-end-rgb: 255, 255, 255;
}

body {
  color: #0A192F;
  background: #F8F9FA;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-playfair), serif;
}

/* Custom Scrollbar for Luxury Feel */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #0A192F;
}
::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #D4AF37;
}

.text-gradient-gold {
  background: linear-gradient(135deg, #D4AF37, #FFE585, #AA8C2C);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`;

// --- LAYOUT (Google Fonts Entegrasyonu - Playfair Display & Inter) ---
const layoutTsx = `
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Prestige Assurance | Elite Wealth Protection",
  description: "Bespoke insurance solutions for the discerning individual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={\`\${inter.variable} \${playfair.variable} antialiased\`}>
        {children}
      </body>
    </html>
  );
}
`;

// --- COMPONENT: NAVBAR ---
const navbarComp = `
'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={\`fixed w-full z-50 transition-all duration-500 \${scrolled ? 'bg-navy-900/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}\`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center text-white">
        <div className="text-2xl font-serif font-bold tracking-widest">
          PRESTIGE<span className="text-gold-500">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center font-light tracking-wide text-sm">
          {['Private Client', 'Business', 'Yacht & Aviation', 'About Us'].map((item) => (
            <a key={item} href="#" className="hover:text-gold-500 transition-colors duration-300 uppercase">
              {item}
            </a>
          ))}
          <button className="border border-gold-500 text-gold-500 px-6 py-2 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 uppercase tracking-wider text-xs font-semibold">
            Client Portal
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-gold-500 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-navy-900 text-white px-6 py-8 space-y-4 border-t border-white/10"
        >
          {['Private Client', 'Business', 'Yacht & Aviation', 'About Us', 'Contact'].map((item) => (
            <a key={item} href="#" className="block text-lg font-serif hover:text-gold-500">{item}</a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
`;

// --- COMPONENT: HERO SECTION ---
const heroComp = `
'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-navy-900 flex items-center justify-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-luxury-gradient opacity-90 z-0" />

      {/* Abstract Gold Accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <span className="flex items-center space-x-2 border border-white/20 px-4 py-1 rounded-full text-xs text-gold-400 uppercase tracking-widest backdrop-blur-sm">
            <ShieldCheck size={14} />
            <span>Excellence Since 1985</span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight"
        >
          Preserving <br />
          <span className="text-gradient-gold italic">Legacy & Wealth</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Bespoke insurance solutions curated for high-net-worth individuals and enterprises across the United States.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <button className="bg-gold-500 text-navy-900 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300">
            Request Consultation
          </button>
          <button className="border border-white/30 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
            Explore Services <ChevronRight size={16} />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
`;

// --- MAIN PAGE (Landing Page) ---
const pageTsx = `
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { Building2, Plane, Gem, Shield } from 'lucide-react';

const services = [
  {
    title: "High-Value Property",
    desc: "Comprehensive coverage for estates, penthouses, and multiple dwellings.",
    icon: <Building2 className="w-8 h-8 text-gold-500" />
  },
  {
    title: "Yacht & Aviation",
    desc: "Global liability and hull protection for private jets and superyachts.",
    icon: <Plane className="w-8 h-8 text-gold-500" />
  },
  {
    title: "Fine Art & Jewelry",
    desc: "Specialized valuation and protection for your most accrued collections.",
    icon: <Gem className="w-8 h-8 text-gold-500" />
  },
  {
    title: "Executive Liability",
    desc: "D&O and professional indemnity for industry leaders.",
    icon: <Shield className="w-8 h-8 text-gold-500" />
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-marble">
      <Navbar />
      <Hero />

      {/* Services Section */}
      <section className="py-24 px-6 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-navy-900 mb-4">The Art of Protection</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-t-2 border-transparent hover:border-gold-500 group">
              <div className="mb-6 bg-navy-900/5 p-4 w-fit rounded-full group-hover:bg-gold-500/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif text-navy-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-navy-900 text-white py-24">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Uncompromising <br /> <span className="text-gold-500">Standards.</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-md">
              We operate discreetly and effectively, ensuring your lifestyle remains uninterrupted, no matter the circumstance.
            </p>
            <button className="text-gold-500 border-b border-gold-500 pb-1 hover:text-white hover:border-white transition-colors uppercase text-sm tracking-widest">
              Read Our Philosophy
            </button>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-8 text-center">
            <div>
              <div className="text-4xl font-serif text-gold-500 mb-2">$5B+</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">Assets Insured</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-gold-500 mb-2">50</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">US States Covered</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-gold-500 mb-2">24/7</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">Concierge Claims</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-gold-500 mb-2">100%</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">Privacy Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-60 text-xs">
          <p>&copy; 2024 Prestige Assurance. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-500">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500">Terms of Service</a>
            <a href="#" className="hover:text-gold-500">Licensing</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
`;

// --- DOSYALARI YAZMA FONKSİYONU ---
function writeFile(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content.trim());
  console.log(`\x1b[32m✔ Oluşturuldu:\x1b[0m ${filePath}`);
}

// 3. Dosyaları Uygulama
console.log(">>> Dosyalar yazılıyor...");

// Klasörleri oluştur
const componentsDir = path.join(process.cwd(), "components");
if (!fs.existsSync(componentsDir)) fs.mkdirSync(componentsDir);

// Konfigürasyonları yaz
writeFile("tailwind.config.ts", tailwindConfig);
writeFile("app/globals.css", globalCss);
writeFile("app/layout.tsx", layoutTsx);
writeFile("app/page.tsx", pageTsx);

// Bileşenleri yaz
writeFile("components/Navbar.tsx", navbarComp);
writeFile("components/Hero.tsx", heroComp);

console.log("\n\x1b[33m>>> KURULUM TAMAMLANDI! <<<\x1b[0m");
console.log("Projeyi başlatmak için şu komutları çalıştırın:\n");
console.log(`   cd ${PROJECT_NAME}`);
console.log(`   npm run dev`);
console.log("\nArdından tarayıcıda http://localhost:3000 adresine gidin.");
