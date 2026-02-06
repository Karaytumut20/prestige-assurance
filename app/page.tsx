'use client';
import Hero from '@/components/Hero';
import CarrierLogos from '@/components/CarrierLogos';
import BlogSection from '@/components/BlogSection';
import Newsletter from '@/components/Newsletter';
import { Truck, Car, Heart, ArrowRight, DollarSign, Percent, ShieldCheck, Star, Users, Clock } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: "Commercial Trucking",
    desc: "Cut your fleet operating costs with our low-rate trucking liability programs.",
    icon: <Truck className="w-8 h-8 text-gold-500" />,
    link: "/vehicles"
  },
  {
    title: "Personal Auto",
    desc: "Don't pay dealer rates. Get wholesale pricing for your luxury vehicles.",
    icon: <Car className="w-8 h-8 text-gold-500" />,
    link: "/vehicles"
  },
  {
    title: "Health & Life",
    desc: "Affordable PPO plans that provide top-tier care for less.",
    icon: <Heart className="w-8 h-8 text-gold-500" />,
    link: "/health"
  }
];

const testimonials = [
  { name: "Michael R.", role: "Fleet Owner, TX", text: "Switched our 12-truck fleet to Prestige and saved $24k in the first year. The certificate issuance is instant." },
  { name: "Sarah L.", role: "Ferrari Collector, FL", text: "Standard insurance didn't understand the value of my collection. Prestige got me an Agreed Value policy for 40% less." },
  { name: "Dr. James K.", role: "Surgeon, NY", text: "Finally, a health plan that lets me see any specialist I want without a referral, and it's cheaper than my old HMO." }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Hero />

      {/* NEW: Trust Bar */}
      <CarrierLogos />

      {/* Services Section */}
      <section id="services" className="py-24 px-6 container mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold tracking-widest uppercase text-xs">Our Core Expertise</span>
          <h2 className="text-4xl font-serif text-navy-900 mt-2 mb-4">Complete Protection Portfolio</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto" />
        </div>

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
              <div className="mt-4 text-xs font-bold text-gold-600 uppercase tracking-wider flex items-center gap-1">
                <DollarSign size={14}/> Compare Rates
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* NEW: Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif text-navy-900 mb-4">The Prestige Process</h2>
          <p className="text-gray-500 mb-16 max-w-2xl mx-auto">We've simplified the insurance process to save you time and money.</p>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 hidden md:block"></div>

            <div className="bg-gray-50 p-4 relative">
              <div className="w-16 h-16 bg-navy-900 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold border-4 border-white shadow-lg">1</div>
              <h4 className="text-xl font-bold text-navy-900 mb-2">Request Quote</h4>
              <p className="text-gray-600 text-sm">Call us or submit your details. It takes less than 5 minutes.</p>
            </div>
            <div className="bg-gray-50 p-4 relative">
              <div className="w-16 h-16 bg-navy-900 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold border-4 border-white shadow-lg">2</div>
              <h4 className="text-xl font-bold text-navy-900 mb-2">We Compare</h4>
              <p className="text-gray-600 text-sm">We check rates across 40+ carriers to find the lowest price.</p>
            </div>
            <div className="bg-gray-50 p-4 relative">
              <div className="w-16 h-16 bg-gold-500 text-navy-900 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold border-4 border-white shadow-lg">3</div>
              <h4 className="text-xl font-bold text-navy-900 mb-2">You Save</h4>
              <p className="text-gray-600 text-sm">Bind coverage instantly and start saving on your premiums.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-navy-900 mb-4">Why Clients Switch?</h2>
            <p className="text-xl text-gold-600 font-bold">Answer: We simply cost less.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-8 border border-gray-100 hover:border-gold-500 transition-colors rounded-sm">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600"><DollarSign size={32} /></div>
              <h4 className="text-xl font-bold text-navy-900 mb-2">Wholesale Pricing</h4>
              <p className="text-gray-600">We bypass the middlemen and standard brokers to get you direct-to-carrier pricing.</p>
            </div>
            <div className="p-8 border border-gray-100 hover:border-gold-500 transition-colors rounded-sm">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600"><Percent size={32} /></div>
              <h4 className="text-xl font-bold text-navy-900 mb-2">Fleet Discounts</h4>
              <p className="text-gray-600">Volume discounts for commercial trucking fleets and multi-car family portfolios.</p>
            </div>
            <div className="p-8 border border-gray-100 hover:border-gold-500 transition-colors rounded-sm">
              <div className="w-16 h-16 bg-gold-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-600"><ShieldCheck size={32} /></div>
              <h4 className="text-xl font-bold text-navy-900 mb-2">Better Coverage</h4>
              <p className="text-gray-600">We audit your current policy. 9 out of 10 times, we find better coverage for a lower price.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6">
           <h2 className="text-4xl font-serif text-center mb-16">Trusted by the Best</h2>
           <div className="grid md:grid-cols-3 gap-8">
             {testimonials.map((t, i) => (
               <div key={i} className="bg-white/5 p-8 border border-white/10 rounded-lg backdrop-blur-sm">
                 <div className="flex text-gold-500 mb-4"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                 <p className="text-gray-300 italic mb-6">"{t.text}"</p>
                 <div>
                   <div className="font-bold text-white">{t.name}</div>
                   <div className="text-xs text-gold-500 uppercase tracking-wider">{t.role}</div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-gold-500 text-navy-900">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
           <div><Users size={32} className="mx-auto mb-2 opacity-80"/><div className="text-3xl font-bold">5,000+</div><div className="text-sm font-semibold uppercase opacity-70">Clients Insured</div></div>
           <div><ShieldCheck size={32} className="mx-auto mb-2 opacity-80"/><div className="text-3xl font-bold">$2B+</div><div className="text-sm font-semibold uppercase opacity-70">Assets Protected</div></div>
           <div><Clock size={32} className="mx-auto mb-2 opacity-80"/><div className="text-3xl font-bold">24/7</div><div className="text-sm font-semibold uppercase opacity-70">Support Access</div></div>
           <div><Truck size={32} className="mx-auto mb-2 opacity-80"/><div className="text-3xl font-bold">50</div><div className="text-sm font-semibold uppercase opacity-70">States Covered</div></div>
        </div>
      </section>

      {/* NEW: Blog Section */}
      <BlogSection />

      {/* NEW: Newsletter */}
      <Newsletter />
    </main>
  );
}