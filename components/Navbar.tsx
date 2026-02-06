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
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-navy-900/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}
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