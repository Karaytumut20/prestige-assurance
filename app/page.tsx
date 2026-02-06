'use client';
import Hero from '@/components/Hero';
import { Truck, Car, Heart, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: "Commercial Trucking",
    desc: "Liability, Cargo & Physical Damage for fleets and owner-operators.",
    icon: <Truck className="w-8 h-8 text-gold-500" />,
    link: "/vehicles"
  },
  {
    title: "Personal Auto",
    desc: "Luxury and daily vehicle protection with agreed value coverage.",
    icon: <Car className="w-8 h-8 text-gold-500" />,
    link: "/vehicles"
  },
  {
    title: "Health & Life",
    desc: "Medical PPO plans and Life insurance for families and groups.",
    icon: <Heart className="w-8 h-8 text-gold-500" />,
    link: "/health"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Hero />

      {/* Services Section with ID for Scroll */}
      <section id="services" className="py-24 px-6 container mx-auto relative z-10 -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Link key={idx} href={service.link} className="bg-white p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-t-4 border-gold-500 group cursor-pointer block transform hover:-translate-y-2">
              <div className="mb-6 bg-navy-900 p-4 w-fit rounded-full group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif text-navy-900 mb-3 flex items-center gap-2">
                {service.title} <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity text-gold-500"/>
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif text-navy-900 mb-12">Why Choose Prestige?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <ShieldCheck className="mx-auto text-gold-500 mb-4" size={48} />
              <h4 className="text-lg font-bold text-navy-900 mb-2">DOT & FMCSA Experts</h4>
              <p className="text-gray-600 text-sm">We specialize in commercial trucking filings and compliance across all 50 states.</p>
            </div>
            <div>
              <ShieldCheck className="mx-auto text-gold-500 mb-4" size={48} />
              <h4 className="text-lg font-bold text-navy-900 mb-2">Agreed Value Protection</h4>
              <p className="text-gray-600 text-sm">For your luxury vehicles, we ensure you get paid what the car is actually worth.</p>
            </div>
            <div>
              <ShieldCheck className="mx-auto text-gold-500 mb-4" size={48} />
              <h4 className="text-lg font-bold text-navy-900 mb-2">Nationwide Networks</h4>
              <p className="text-gray-600 text-sm">Access to the best hospitals and doctors through our premier PPO health partners.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}