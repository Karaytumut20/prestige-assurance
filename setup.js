const fs = require("fs");
const path = require("path");

console.log(">>> Navbar görünürlük sorunu tüm sayfalar için çözülüyor...");

function writeFile(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content.trim());
  console.log(`✔ Navbar Güncellendi: ${filePath}`);
}

// Akıllı Navbar Bileşeni (Sayfaya Göre Renk Değiştiren)
const smartNavbar = `
'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Sayfa kontrolü için eklendi
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Mevcut sayfa yolu

  // Hangi sayfalarda Navbar şeffaf (transparent) başlamalı?
  // Ana sayfa ('/'), Commercial ve Claims sayfalarının tepesinde koyu renk Hero var, bu yüzden şeffaf olabilir.
  const transparentHeroPages = ['/', '/commercial', '/claims', '/specialty'];

  // Eğer mevcut sayfa bu listede YOKSA (örn: Private Wealth), Navbar direkt koyu olsun.
  const isTransparent = transparentHeroPages.includes(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobil menü açıldığında scroll'u kilitle
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

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
        className={\`fixed w-full z-50 transition-all duration-500 \${
          // Mantık: Scroll yapıldıysa VEYA şeffaf olmaması gereken bir sayfadaysak (Private Wealth gibi) -> Koyu Arka Plan
          (scrolled || !isTransparent) && !isOpen
            ? 'bg-navy-900/98 backdrop-blur-md py-3 shadow-2xl border-b border-white/5'
            : 'bg-transparent py-6'
        }\`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center text-white relative z-50">
          <Link href="/" className="flex flex-col group cursor-pointer">
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
          <div className="lg:hidden text-gold-500 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
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
            className="fixed inset-0 bg-navy-900 z-40 lg:hidden px-8 pt-32 flex flex-col space-y-8 h-screen overflow-y-auto"
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
            <button className="w-full bg-gold-500 text-navy-900 py-4 font-bold uppercase tracking-widest mt-8 mb-8">
              Client Portal Login
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
`;

// Dosyayı Yaz
writeFile("components/Navbar.tsx", smartNavbar);

console.log("\n>>> NAVBAR DÜZELTİLDİ! <<<");
console.log(
  "- Private Wealth sayfasında Navbar artık otomatik olarak KOYU renk olacak.",
);
console.log(
  "- Home, Commercial ve Claims sayfalarında ŞEFFAF kalmaya devam edecek.",
);
console.log("Değişiklikleri görmek için sayfayı yenilemeniz yeterli.");
