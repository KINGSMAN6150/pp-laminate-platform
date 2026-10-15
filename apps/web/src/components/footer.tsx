import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <h3 className="text-white font-bold text-base">Pawanputra Laminate (PP)</h3>
            <p className="text-xs leading-relaxed text-gray-400">
              Wholesale distributor of premium decorative laminates, marine grade plywood, and veneers serving shops and contractors across Surat, Gujarat.
            </p>
            <p className="text-xs text-orange-400">
              📍 Surat Market, Gujarat, India
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Product Categories</h4>
            <ul className="space-y-2 text-xs">
              <li>1mm Decorative Laminates</li>
              <li>0.8mm Liner & Standard Sheets</li>
              <li>IS:710 Marine Grade Plywood</li>
              <li>Calibrated Commercial Plywood</li>
              <li>Natural & Reconstituted Veneers</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Catalogue Transparency</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Public prices shown are standard list reference prices. Physical inventory is audited weekly by shop staff. Final negotiated trade rates are settled upon order confirmation.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Wholesale Trade Enquiry</h4>
            <p className="text-xs text-gray-400 mb-2">
              Fast order placement and volume delivery dispatch for retail shops:
            </p>
            <p className="text-sm font-semibold text-emerald-400">
              WhatsApp: +91 98765 43210
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Languages: English & Hindi (हिंदी)
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Pawanputra Laminate. All rights reserved.</p>
          <p>Wholesale Trade Platform • Surat Market</p>
        </div>
      </div>
    </footer>
  );
}
