'use client';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function Page() {
  const PHONE_DISPLAY = "+1 (628) 999-5230";
  const PHONE_HREF = "tel:+16289995230";

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Navbar />
      <section className="pt-44 pb-20 bg-navy-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif mb-6">Contact Prestige</h1>
          <p className="text-gray-400">We are available 24/7 for our clients.</p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif text-navy-900 mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-gold-500/10 p-4 rounded-full text-gold-600"><Phone size={24}/></div>
                <div>
                  <h4 className="font-bold text-navy-900">Phone Support</h4>
                  <p className="text-gray-500 text-sm mb-1">Direct line to agents.</p>
                  <a href={PHONE_HREF} className="text-lg font-serif text-navy-900 hover:text-gold-600">{PHONE_DISPLAY}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold-500/10 p-4 rounded-full text-gold-600"><Mail size={24}/></div>
                <div>
                  <h4 className="font-bold text-navy-900">Email</h4>
                  <p className="text-gray-500 text-sm mb-1">For documents and inquiries.</p>
                  <a href="mailto:info@prestigeassurance.com" className="text-lg font-serif text-navy-900 hover:text-gold-600">info@prestigeassurance.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold-500/10 p-4 rounded-full text-gold-600"><MapPin size={24}/></div>
                <div>
                  <h4 className="font-bold text-navy-900">Headquarters</h4>
                  <p className="text-gray-600">100 Park Avenue, Suite 2500<br/>New York, NY 10017</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Visual Only) */}
          <div className="bg-white p-8 shadow-xl border-t-4 border-gold-500">
            <h3 className="text-2xl font-serif text-navy-900 mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold-500 outline-none" />
                <input type="text" placeholder="Last Name" className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold-500 outline-none" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold-500 outline-none" />
              <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold-500 outline-none" />
              <textarea rows={4} placeholder="How can we help?" className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold-500 outline-none"></textarea>
              <button className="w-full bg-navy-900 text-white py-4 font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-navy-900 transition-colors">
                Submit Request
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}