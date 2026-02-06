/**
 * PRESTIGE ASSURANCE - FIX & UPDATE SCRIPT
 * Bu script tüm sayfaları Next.js App Router uyumlu hale getirir,
 * 'use client' hatalarını çözer ve SEO içeriklerini günceller.
 */

const fs = require("fs");
const path = require("path");

console.log(">>> Proje onarımı ve içerik güncellemesi başlatılıyor...");

// Dosya Yazma Fonksiyonu
function writeFile(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content.trim());
  console.log(`✔ Düzeltildi: ${filePath}`);
}

// 1. NAVBAR (Mobil Menü ve Z-Index Düzeltmesi)
const navbarComp = `
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Private Wealth', href: '/private-wealth' },
    { name: 'Commercial', href: '/commercial' },
    { name: 'Specialty', href: '/specialty' },
    { name: 'Claims Center', href: '/claims' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={\`fixed w-full z-[100] transition-all duration-500 \${scrolled ? 'bg-navy-900/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/5' : 'bg-transparent py-6'}\`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center text-white">
          <Link href="/" className="flex flex-col group cursor-pointer relative z-[101]">
            <span className="text-2xl font-serif font-bold tracking-[0.3em] group-hover:text-gold-400 transition-colors">PRESTIGE</span>
            <span className="text-[10px] tracking-[0.5em] text-gold-500 uppercase">Assurance Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 items-center font-medium tracking-widest text-[11px] uppercase">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-gold-500 transition-colors duration-300 relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <div className="h-6 w-px bg-white/20 mx-2" />
            <button className="flex items-center gap-2 bg-gold-500 text-navy-900 px-6 py-2.5 hover:bg-white transition-all duration-300 font-bold text-xs tracking-wider">
              <PhoneCall size={14} />
              Contact Agent
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden text-gold-500 cursor-pointer relative z-[101]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-navy-900 z-[99] lg:hidden px-8 flex flex-col justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-serif text-white flex items-center justify-between border-b border-white/10 pb-4 group"
              >
                {link.name}
                <ChevronRight className="text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
            <button className="w-full bg-gold-500 text-navy-900 py-4 font-bold uppercase tracking-widest mt-8">
              Client Portal Login
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
`;

// 2. HERO COMPONENT (Use Client Eklendi)
const heroComp = `
'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-navy-900 flex items-center justify-center">
      {/* Background Gradient & Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-[#0A192F] to-black z-0" />
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <span className="flex items-center space-x-3 border border-white/10 bg-white/5 px-6 py-2 rounded-full text-xs text-gold-400 uppercase tracking-[0.2em] backdrop-blur-sm">
            <ShieldCheck size={14} />
            <span>Excellence Since 1985</span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1]"
        >
          Preserving <br />
          <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-amber-700 bg-clip-text text-transparent italic pr-2">
            Legacy & Wealth
          </span>
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
          className="flex flex-col md:flex-row gap-5 justify-center"
        >
          <button className="bg-gold-500 text-navy-900 px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300">
            Request Consultation
          </button>
          <button className="border border-white/20 text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2">
            Explore Services <ChevronRight size={16} />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
`;

// 3. SAYFA ŞABLONU OLUŞTURUCU ('use client' Eklendi & Meta Veri Temizlendi)
const generatePageContent = (title, subtitle, description, features) => `
'use client'; // BU SATIR KRİTİKTİR - Framer Motion için gerekli
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Globe, Clock, ArrowRight } from 'lucide-react';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 bg-navy-900 text-white overflow-hidden">
        {/* Abstract Background - Görsel yerine CSS pattern kullanıldı (daha hızlı yüklenir) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-navy-800 via-navy-900 to-black opacity-90" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-gold-500"></div>
            <span className="text-gold-500 uppercase tracking-[0.3em] text-xs font-bold">
              Premium Coverage
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif mb-6 leading-tight"
          >
            ${title}
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed"
          >
            ${subtitle}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-navy-900 mb-8">
              Bespoke Risk Management
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              ${description}
            </p>

            <div className="grid gap-6">
              ${features
                .map(
                  (f) => `
                <div className="flex items-start gap-4 p-4 border border-gray-100 hover:border-gold-500/30 hover:shadow-lg transition-all rounded-sm bg-white">
                  <div className="text-gold-500 mt-1">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-navy-900 font-bold tracking-wide text-sm mb-1">${f}</h4>
                    <p className="text-gray-500 text-xs">Comprehensive protection included.</p>
                  </div>
                </div>
              `,
                )
                .join("")}
            </div>
          </motion.div>

          {/* Right Column: CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-navy-900 text-white p-10 lg:p-14 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-bl-full" />

            <h3 className="text-3xl font-serif mb-6 italic">
              "True wealth requires <br/> <span className="text-gold-500">uncompromising protection.</span>"
            </h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <ShieldCheck className="text-gold-500" size={18} />
                <span>Confidential Portfolio Review</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <Globe className="text-gold-500" size={18} />
                <span>Global Asset Coverage</span>
              </div>
            </div>

            <button className="w-full bg-gold-500 text-navy-900 py-4 px-6 font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center justify-between group">
              <span>Start Consultation</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform"/>
            </button>

            <p className="text-xs text-center text-gray-500 mt-6 uppercase tracking-wider">
              Licensed in all 50 States
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 text-xs uppercase tracking-[0.3em] mb-12">Trusted by Leading Family Offices</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Buraya normalde logolar gelir, şimdilik ikonik temsiller */}
             <div className="flex flex-col items-center gap-3">
                <ShieldCheck size={40} className="text-navy-900" />
                <span className="font-serif font-bold text-navy-900">A++ CARRIERS</span>
             </div>
             <div className="flex flex-col items-center gap-3">
                <Globe size={40} className="text-navy-900" />
                <span className="font-serif font-bold text-navy-900">GLOBAL REACH</span>
             </div>
             <div className="flex flex-col items-center gap-3">
                <Clock size={40} className="text-navy-900" />
                <span className="font-serif font-bold text-navy-900">24/7 CONCIERGE</span>
             </div>
             <div className="flex flex-col items-center gap-3">
                <CheckCircle2 size={40} className="text-navy-900" />
                <span className="font-serif font-bold text-navy-900">100% PRIVACY</span>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
`;

// Sayfa Verileri (Aynı veriler, şablona gömülecek)
const pages = [
  {
    path: "app/private-wealth/page.tsx",
    title: "Private Wealth <br/> Protection",
    subtitle:
      "Sophisticated coverage for high-net-worth individuals, family offices, and complex estates.",
    description:
      "Our Private Wealth division understands that standard insurance products often fall short for the discerning client. We provide specialized protection for high-value properties, jewelry collections, and international travel liability.",
    features: [
      "Family Office Liability",
      "Kidnap & Ransom Protection",
      "High-Limit Umbrella Liability",
      "Cyber Defense for Individuals",
    ],
  },
  {
    path: "app/commercial/page.tsx",
    title: "Commercial <br/> Risk Management",
    subtitle:
      "Strategic insurance solutions for industry leaders and growing enterprises.",
    description:
      "In the complex landscape of U.S. business, Prestige Assurance Group acts as more than an agency; we are your risk consultants. From D&O liability to complex worker's compensation strategies.",
    features: [
      "Directors & Officers (D&O)",
      "Professional Indemnity",
      "Cyber Risk Insurance",
      "Global Supply Chain Protection",
    ],
  },
  {
    path: "app/specialty/page.tsx",
    title: "Aviation & <br/> Marine Specialty",
    subtitle:
      "Global hull and liability protection for your most valuable mobility assets.",
    description:
      "Whether you are navigating international waters or soaring through the skies, our specialty experts provide ironclad protection for superyachts and private aircraft.",
    features: [
      "Hull & Machinery Coverage",
      "Crew Medical & Liability",
      "Charter Operations Insurance",
      "Private Jet Liability",
    ],
  },
  {
    path: "app/claims/page.tsx",
    title: "Expedited <br/> Claims Center",
    subtitle:
      "A concierge approach to claims processing when every second matters.",
    description:
      "We redefine the claims experience with our 'White Glove' service. Our team manages the entire process on your behalf, ensuring maximum recovery and minimal disruption to your lifestyle.",
    features: [
      "24/7 Dedicated Claims Advocate",
      "Direct Adjuster Access",
      "Rental & Replacement Concierge",
      "Rapid Settlement Protocol",
    ],
  },
];

// 4. DOSYALARI YAZMA İŞLEMİ
writeFile("components/Navbar.tsx", navbarComp);
writeFile("components/Hero.tsx", heroComp);

pages.forEach((p) => {
  writeFile(
    p.path,
    generatePageContent(p.title, p.subtitle, p.description, p.features),
  );
});

console.log(
  "\n>>> ONARIM TAMAMLANDI! Tüm sayfalar 'use client' ile güncellendi.",
);
console.log("Lütfen projeyi tekrar başlatın: npm run dev");
