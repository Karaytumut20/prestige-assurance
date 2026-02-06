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
        className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-navy-900/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/5' : 'bg-transparent py-6'}`}
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