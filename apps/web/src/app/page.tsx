import React from 'react';
import Link from 'next/link';
import { Search, ShieldCheck, Clock, Layers, ArrowRight } from 'lucide-react';
import { MOCK_PRODUCTS } from '../lib/mock-products';
import { StockBadge } from '../components/stock-badge';
import { WhatsAppCTA } from '../components/whatsapp-cta';
import { formatCurrency } from '../lib/utils';

export default function HomePage() {
  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 via-white to-gray-50 border-b border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">
            <span>Surat Wholesale Market</span>
            <span>•</span>
            <span>Pawanputra Trade Portal</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Wholesale Plywood & Laminate Catalogue
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Direct distributor catalogue for dealers, contractors, and retail shops. Search by product code (e.g., <code className="bg-orange-100 px-1.5 py-0.5 rounded font-mono text-orange-900 font-bold">SF2042</code>), verify weekly physical stock status, and request trade quotes.
          </p>

          {/* Quick Search Bar Placeholder */}
          <div className="max-w-xl mx-auto mt-6">
            <form action="/products" method="GET" className="relative flex items-center shadow-md rounded-xl overflow-hidden border border-gray-300 bg-white">
              <Search className="w-5 h-5 text-gray-400 ml-4 shrink-0" />
              <input
                type="text"
                name="search"
                placeholder="Search product code (e.g. SF2042), brand, or finish..."
                className="w-full px-4 py-3.5 text-sm text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-5 py-3.5 text-sm transition-colors"
              >
                Search
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              Popular searches: <Link href="/products?search=SF2042" className="text-orange-600 underline">SF2042</Link>, <Link href="/products?brand=Greenlam" className="text-orange-600 underline">Greenlam</Link>, <Link href="/products?category=PLYWOOD" className="text-orange-600 underline">Marine 710 Plywood</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Transparency & Audit Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="p-3 rounded-lg bg-orange-100 text-orange-700 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Weekly Physical Stock Audit</h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Stock is physically verified on-site roughly weekly by shop staff. We show the exact last-checked timestamp rather than misleading real-time promises.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="p-3 rounded-lg bg-emerald-100 text-emerald-700 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">List vs Negotiated Trade Pricing</h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Our catalogue displays standard list reference prices. Registered wholesale customers receive negotiated trade rates tailored to volume.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="p-3 rounded-lg bg-blue-100 text-blue-700 shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Surat Wholesale Delivery</h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Prompt dispatch to retail hardware shops and project sites across Ring Road, Katargam, Varachha, and South Gujarat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Catalogue Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
            <p className="text-sm text-gray-500">Representative catalogue samples available at our Surat warehouse</p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700"
          >
            <span>View All ({MOCK_PRODUCTS.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_PRODUCTS.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold bg-gray-100 text-gray-800 px-2 py-1 rounded">
                    {product.code}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">{product.brand}</span>
                </div>

                <h3 className="font-bold text-gray-900 text-base">
                  <Link href={`/products/${product.code}`} className="hover:text-orange-600 transition-colors">
                    {product.name}
                  </Link>
                </h3>

                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 pt-1">
                  <div>
                    <span className="text-gray-400 block">Finish:</span>
                    <span className="font-medium text-gray-800">{product.finish || 'Standard'}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block">Thickness:</span>
                    <span className="font-medium text-gray-800">{product.thickness || '1mm'}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-gray-400 block">Public List Price</span>
                    <span className="text-lg font-bold text-gray-900">{formatCurrency(product.publicListPrice)}</span>
                  </div>
                  <StockBadge status={product.stockStatus} lastChecked={product.lastPhysicalStockCheck} />
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100">
                <WhatsAppCTA productCode={product.code} productName={product.name} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
