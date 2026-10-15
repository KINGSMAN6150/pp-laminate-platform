import React from 'react';
import Link from 'next/link';
import { Layers, PhoneCall } from 'lucide-react';

export function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center text-white font-bold">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <span className="text-lg font-bold text-gray-900 tracking-tight block leading-tight">
              PP LAMINATE
            </span>
            <span className="text-[11px] font-medium text-orange-600 block uppercase tracking-wider">
              Pawanputra • Surat Wholesale
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-orange-600 transition-colors">
            Home
          </Link>
          <Link href="/products" className="hover:text-orange-600 transition-colors">
            Product Catalogue
          </Link>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600 transition-colors"
          >
            Surat Market Enquiries
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-xs bg-orange-50 text-orange-800 px-3 py-1.5 rounded-full border border-orange-200 font-medium">
            <span>🌐 English / हिंदी</span>
          </div>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-1.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors shadow-sm"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call Us</span>
          </a>
        </div>
      </div>
    </header>
  );
}
