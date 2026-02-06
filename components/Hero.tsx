'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, ChevronRight, Phone } from 'lucide-react';

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
          {/* BUTTON 1: DIRECT CALL */}
          <a
            href="tel:+16289995230"
            className="bg-gold-500 text-navy-900 px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Phone size={18} />
            Request Consultation
          </a>

          {/* BUTTON 2: SCROLL TO SERVICES */}
          <a
            href="#services"
            className="border border-white/20 text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Explore Services <ChevronRight size={16} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}