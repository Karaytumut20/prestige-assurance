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