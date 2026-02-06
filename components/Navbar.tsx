'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall } from 'lucide-react';
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/98 backdrop-blur-md py-3 shadow-2xl' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center text-white">
        <Link href="/" className="flex flex-col group cursor-pointer">
          <span className="text-2xl font-serif font-bold tracking-[0.3em]">PRESTIGE</span>
          <span className="text-[10px] tracking-[0.5em] text-gold-500 uppercase">Assurance Group</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8 items-center font-medium tracking-widest text-[11px] uppercase">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-gold-500 transition-colors duration-300">
              {link.name}
            </Link>
          ))}
          <div className="h-6 w-px bg-white/20 mx-2" />
          <button className="flex items-center gap-2 bg-gold-500 text-slate-950 px-6 py-2.5 hover:bg-white transition-all duration-300 font-bold">
            <PhoneCall size={14} />
            Contact Agent
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden text-gold-500 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed inset-0 top-0 bg-slate-950 z-40 lg:hidden px-8 py-24 flex flex-col space-y-8"
          >
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-3xl font-serif text-white border-b border-white/10 pb-4">
                {link.name}
              </Link>
            ))}
            <button className="w-full bg-gold-500 text-slate-950 py-5 font-bold uppercase tracking-widest mt-4">
              Client Portal Login
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}