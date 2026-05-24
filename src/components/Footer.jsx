'use client';

import React from 'react';
import Link from 'next/link';
import { Stethoscope, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Logo & Description Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-all duration-300">
                <Stethoscope className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                DocAppoint
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Connecting patients with top-tier, trusted medical practitioners. Schedule appointments securely, read genuine reviews, and manage your health journey in one beautiful platform.
            </p>
            
            {/* Social Icons Container (X রিব্র্যান্ডেড লোগো সহ) */}
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-gradient-to-r hover:from-teal-500 hover:to-emerald-500 hover:text-white flex items-center justify-center transition-all duration-300 text-slate-400 hover:scale-110" 
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1H13c-3.3 0-5 1.7-5 5v2z" />
                </svg>
              </a>
              
              {/* নতুন X লোগো (টুইটার রিব্র্যান্ড) */}
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-gradient-to-r hover:from-teal-500 hover:to-emerald-500 hover:text-white flex items-center justify-center transition-all duration-300 text-slate-400 hover:scale-110" 
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-gradient-to-r hover:from-teal-500 hover:to-emerald-500 hover:text-white flex items-center justify-center transition-all duration-300 text-slate-400 hover:scale-110" 
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-gradient-to-r hover:from-teal-500 hover:to-emerald-500 hover:text-white flex items-center justify-center transition-all duration-300 text-slate-400 hover:scale-110" 
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide border-l-3 border-teal-500 pl-3">Quick Navigation</h3>
            <ul className="space-y-3">
              {[
                { name: "Home Page", path: "/" },
                { name: "All Appointments", path: "/all-appointments" },
                { name: "User Dashboard", path: "/dashboard" },
                { name: "Login Portal", path: "/login" },
                { name: "Account Registration", path: "/register" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path} 
                    className="hover:text-teal-400 transition-all duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide border-l-3 border-teal-500 pl-3">Contact Details</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="group">
                <span className="block text-teal-400 text-xs uppercase tracking-wider mb-1">📍 Address</span>
                <span className="group-hover:text-white transition-colors">House 45, Road 11, Dhanmondi, Dhaka, Bangladesh</span>
              </li>
              <li className="group">
                <span className="block text-teal-400 text-xs uppercase tracking-wider mb-1">📞 Phone Hotline</span>
                <span className="group-hover:text-white transition-colors">+880 1712-345678, +880 2-9876543</span>
              </li>
              <li className="group">
                <span className="block text-teal-400 text-xs uppercase tracking-wider mb-1">✉️ Email Inquiry</span>
                <span className="group-hover:text-white transition-colors">support@docappoint.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide border-l-3 border-teal-500 pl-3">Newsletter</h3>
            <p className="text-sm leading-relaxed mb-4 text-slate-400">
              Subscribe to stay updated with monthly health advice, newly added doctors, and appointment offers.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
              <input 
                type="email" 
                placeholder="Enter your email..." 
                className="w-full text-sm bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" 
                required
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-lg p-2.5 transition-all duration-300 flex items-center justify-center hover:scale-105 hover:shadow-lg"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="pt-8 mt-8 border-t border-slate-800 text-center flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} DocAppoint Manager. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-teal-400 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-teal-400 transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}