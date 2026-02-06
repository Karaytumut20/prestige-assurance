'use client';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold tracking-[0.2em] text-white">PRESTIGE</span>
              <span className="text-[10px] tracking-[0.4em] text-gold-500 uppercase">Assurance Group</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Specialized insurance for Vehicles, Fleets, and Health.
            </p>
          </div>

          <div>
            <h4 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-6">Products</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/vehicles" className="hover:text-white transition-colors">Commercial Trucking</Link></li>
              <li><Link href="/vehicles" className="hover:text-white transition-colors">Personal Auto</Link></li>
              <li><Link href="/health" className="hover:text-white transition-colors">Health Insurance</Link></li>
              <li><Link href="/health" className="hover:text-white transition-colors">Life Insurance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/claims" className="hover:text-white transition-colors">File a Claim</Link></li>
              <li><Link href="/claims" className="hover:text-white transition-colors">Trucking Certificate (COI)</Link></li>
              <li><Link href="/claims" className="hover:text-white transition-colors">Policy Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">HQ: New York, NY 10017</li>
              <li className="flex items-center gap-3 font-bold text-gold-500">
                <a href="tel:+16289995230">Ph: +1 (628) 999-5230</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2024 Prestige Assurance Group. Licensed in 50 States.</p>
        </div>
      </div>
    </footer>
  );
}