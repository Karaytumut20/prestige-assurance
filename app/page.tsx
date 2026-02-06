'use client';
import Hero from '@/components/Hero';
import { Building2, Plane, Gem, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  { title: "High-Value Property", desc: "Comprehensive coverage for estates and penthouses.", icon: <Building2 className="w-8 h-8 text-gold-500" />, link: "/private-wealth" },
  { title: "Yacht & Aviation", desc: "Global liability and hull protection.", icon: <Plane className="w-8 h-8 text-gold-500" />, link: "/specialty" },
  { title: "Fine Art & Jewelry", desc: "Specialized valuation and protection.", icon: <Gem className="w-8 h-8 text-gold-500" />, link: "/private-wealth" },
  { title: "Executive Liability", desc: "D&O and professional indemnity.", icon: <Shield className="w-8 h-8 text-gold-500" />, link: "/commercial" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Hero />

      {/* Services Section */}
      <section className="py-24 px-6 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-navy-900 mb-4">The Art of Protection</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <Link key={idx} href={service.link} className="bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-t-2 border-transparent hover:border-gold-500 group cursor-pointer block">
              <div className="mb-6 bg-navy-900/5 p-4 w-fit rounded-full group-hover:bg-gold-500/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif text-navy-800 mb-3 flex items-center gap-2">
                {service.title} <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-gold-500"/>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </Link>
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
              We operate discreetly and effectively, ensuring your lifestyle remains uninterrupted.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-8 text-center">
            <div><div className="text-4xl font-serif text-gold-500 mb-2">$5B+</div><div className="text-xs uppercase tracking-widest text-gray-500">Assets Insured</div></div>
            <div><div className="text-4xl font-serif text-gold-500 mb-2">50</div><div className="text-xs uppercase tracking-widest text-gray-500">States Covered</div></div>
            <div><div className="text-4xl font-serif text-gold-500 mb-2">24/7</div><div className="text-xs uppercase tracking-widest text-gray-500">Concierge Claims</div></div>
            <div><div className="text-4xl font-serif text-gold-500 mb-2">100%</div><div className="text-xs uppercase tracking-widest text-gray-500">Privacy Guaranteed</div></div>
          </div>
        </div>
      </section>
    </main>
  );
}