import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { Building2, Plane, Gem, Shield } from 'lucide-react';

const services = [
  {
    title: "High-Value Property",
    desc: "Comprehensive coverage for estates, penthouses, and multiple dwellings.",
    icon: <Building2 className="w-8 h-8 text-gold-500" />
  },
  {
    title: "Yacht & Aviation",
    desc: "Global liability and hull protection for private jets and superyachts.",
    icon: <Plane className="w-8 h-8 text-gold-500" />
  },
  {
    title: "Fine Art & Jewelry",
    desc: "Specialized valuation and protection for your most accrued collections.",
    icon: <Gem className="w-8 h-8 text-gold-500" />
  },
  {
    title: "Executive Liability",
    desc: "D&O and professional indemnity for industry leaders.",
    icon: <Shield className="w-8 h-8 text-gold-500" />
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-marble">
      <Navbar />
      <Hero />

      {/* Services Section */}
      <section className="py-24 px-6 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-navy-900 mb-4">The Art of Protection</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-t-2 border-transparent hover:border-gold-500 group">
              <div className="mb-6 bg-navy-900/5 p-4 w-fit rounded-full group-hover:bg-gold-500/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif text-navy-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
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
              We operate discreetly and effectively, ensuring your lifestyle remains uninterrupted, no matter the circumstance.
            </p>
            <button className="text-gold-500 border-b border-gold-500 pb-1 hover:text-white hover:border-white transition-colors uppercase text-sm tracking-widest">
              Read Our Philosophy
            </button>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-8 text-center">
            <div>
              <div className="text-4xl font-serif text-gold-500 mb-2">$5B+</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">Assets Insured</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-gold-500 mb-2">50</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">US States Covered</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-gold-500 mb-2">24/7</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">Concierge Claims</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-gold-500 mb-2">100%</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">Privacy Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-60 text-xs">
          <p>&copy; 2024 Prestige Assurance. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-500">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500">Terms of Service</a>
            <a href="#" className="hover:text-gold-500">Licensing</a>
          </div>
        </div>
      </footer>
    </main>
  );
}