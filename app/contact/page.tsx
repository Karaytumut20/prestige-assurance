import { Phone, Mail, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Portonova USA Headquarters | Atlanta, GA",
  description: "Connect with our American-based commercial and luxury vehicle insurance brokers 24/7. Portonova Headquarters: 100 Peachtree Street, Atlanta.",
  keywords: ["Contact Portonova", "US Insurance Brokers Contact", "Commercial Fleet Agents USA"],
};

export default function Page() {
  const PHONE_DISPLAY = "+1 (628) 999-5230";
  const PHONE_HREF = "tel:+16289995230";

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Navbar />
      <section className="pt-44 pb-20 bg-navy-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif mb-6">Contact Portonova USA Headquarters</h1>
          <p className="text-gray-400">Our American-based teams are available 24/7 for our corporate clients.</p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif text-navy-900 mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-gold-500/10 p-4 rounded-full text-gold-600"><Phone size={24} /></div>
                <div>
                  <h3 className="font-bold text-navy-900">National Phone Support</h3>
                  <p className="text-gray-500 text-sm mb-1">Direct line to agents.</p>
                  <a href={PHONE_HREF} className="text-lg font-serif text-navy-900 hover:text-gold-600">{PHONE_DISPLAY}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold-500/10 p-4 rounded-full text-gold-600"><Mail size={24} /></div>
                <div>
                  <h4 className="font-bold text-navy-900">Email</h4>
                  <p className="text-gray-500 text-sm mb-1">For documents and inquiries.</p>
                  <a href="mailto:info@prestigeassurance.com" className="text-lg font-serif text-navy-900 hover:text-gold-600">info@prestigeassurance.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold-500/10 p-4 rounded-full text-gold-600"><MapPin size={24} /></div>
                <div>
                  <h3 className="font-bold text-navy-900">US Corporate Headquarters</h3>
                  <p className="text-gray-600">100 Peachtree Street, Suite 2500<br />Atlanta, GA 30303</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>
    </main>
  );
}