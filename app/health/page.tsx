'use client';
import { motion } from 'framer-motion';
import { Heart, Activity, Users, Phone } from 'lucide-react';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <section className="relative pt-44 pb-20 bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2000')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold-500 tracking-[0.3em] text-xs font-bold uppercase mb-4 block">
             Wellness & Legacy
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-serif text-white mb-6">
            Health & Life
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Comprehensive medical and life insurance solutions for individuals, families, and businesses across the US.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 border border-gray-100 hover:border-gold-500 hover:shadow-xl transition-all group">
            <Heart className="text-navy-900 group-hover:text-gold-500 transition-colors mb-6" size={40} />
            <h3 className="text-2xl font-serif text-navy-900 mb-4">Individual & Family</h3>
            <p className="text-gray-600 mb-6">
              Access to nationwide PPO networks. Find plans that cover your preferred doctors.
            </p>
            <a href="tel:+16289995230" className="text-sm font-bold text-gold-600 hover:underline">Inquire Now &rarr;</a>
          </div>

          {/* Card 2 */}
          <div className="bg-navy-900 text-white p-8 shadow-xl transform md:-translate-y-4">
            <Activity className="text-gold-500 mb-6" size={40} />
            <h3 className="text-2xl font-serif mb-4">Life Insurance</h3>
            <p className="text-gray-300 mb-6">
              Protect your family's financial future. Term & Whole Life options available.
            </p>
            <a href="tel:+16289995230" className="w-full bg-gold-500 text-navy-900 py-3 font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2">
              <Phone size={16}/> Get Life Quote
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 border border-gray-100 hover:border-gold-500 hover:shadow-xl transition-all group">
            <Users className="text-navy-900 group-hover:text-gold-500 transition-colors mb-6" size={40} />
            <h3 className="text-2xl font-serif text-navy-900 mb-4">Group Benefits</h3>
            <p className="text-gray-600 mb-6">
              Retain top talent by offering competitive health, life, and disability benefits.
            </p>
            <a href="tel:+16289995230" className="text-sm font-bold text-gold-600 hover:underline">Contact Business Dept &rarr;</a>
          </div>
        </div>
      </section>
    </main>
  );
}