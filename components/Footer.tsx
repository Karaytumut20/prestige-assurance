'use client';
import { ShieldCheck, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold tracking-[0.2em] text-white">PRESTIGE</span>
              <span className="text-[10px] tracking-[0.4em] text-gold-500 uppercase">Assurance Group</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving the ultra-high-net-worth community with bespoke risk management solutions since 1985.
            </p>
            <div className="flex space-x-4 text-gold-500">
              <Linkedin size={20} className="hover:text-white transition-colors cursor-pointer"/>
              <Twitter size={20} className="hover:text-white transition-colors cursor-pointer"/>
              <Instagram size={20} className="hover:text-white transition-colors cursor-pointer"/>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-6">Private Client</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/private-wealth" className="hover:text-white transition-colors">High-Value Home</Link></li>
              <li><Link href="/private-wealth" className="hover:text-white transition-colors">Fine Art & Specie</Link></li>
              <li><Link href="/private-wealth" className="hover:text-white transition-colors">Family Office Liability</Link></li>
              <li><Link href="/private-wealth" className="hover:text-white transition-colors">Kidnap & Ransom</Link></li>
            </ul>
          </div>

          {/* Commercial */}
          <div>
            <h4 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-6">Commercial Risk</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/commercial" className="hover:text-white transition-colors">Directors & Officers</Link></li>
              <li><Link href="/commercial" className="hover:text-white transition-colors">Cyber Liability</Link></li>
              <li><Link href="/commercial" className="hover:text-white transition-colors">M&A Insurance</Link></li>
              <li><Link href="/commercial" className="hover:text-white transition-colors">Global Property</Link></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-white font-serif">HQ:</span>
                100 Park Avenue, Suite 2500<br/>New York, NY 10017
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white font-serif">Ph:</span>
                +1 (800) 555-0199
              </li>
              <li className="pt-4">
                <button className="text-xs border border-white/20 px-4 py-2 hover:bg-gold-500 hover:text-navy-900 transition-all uppercase tracking-wider">
                  Client Portal
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2024 Prestige Assurance Group. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-gold-500 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gold-500 cursor-pointer">Terms of Service</span>
            <span className="hover:text-gold-500 cursor-pointer">Accessibility</span>
            <span className="flex items-center gap-1 text-gold-600"><ShieldCheck size={12}/> Licensed in 50 States</span>
          </div>
        </div>
      </div>
    </footer>
  );
}