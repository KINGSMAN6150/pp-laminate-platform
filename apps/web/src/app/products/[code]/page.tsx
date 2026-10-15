import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { MOCK_PRODUCTS } from '../../../lib/mock-products';
import { StockBadge } from '../../../components/stock-badge';
import { WhatsAppCTA } from '../../../components/whatsapp-cta';
import { formatCurrency, formatDate } from '../../../lib/utils';

export default function ProductDetailPage({
  params,
}: {
  params: { code: string };
}) {
  const code = params.code.toUpperCase();
  const product = MOCK_PRODUCTS.find((p) => p.code.toUpperCase() === code);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Back button */}
      <div>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-orange-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Catalogue
        </Link>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column: Visual representation placeholder */}
        <div className="space-y-4">
          <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 via-orange-50 to-stone-200 rounded-xl border border-gray-200 flex flex-col items-center justify-center p-6 text-center">
            <span className="text-4xl mb-2">🪵</span>
            <span className="text-xl font-mono font-bold text-gray-800">{product.code}</span>
            <span className="text-sm font-medium text-gray-600">{product.brand}</span>
            <span className="text-xs text-gray-400 mt-2">Sample Finish: {product.finish || 'Natural Woodgrain'}</span>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 flex items-start gap-3">
            <Clock className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
            <div className="text-xs text-orange-900 leading-relaxed">
              <span className="font-bold block">Weekly Stock Physical Verification:</span>
              Our Surat warehouse team physically checked this SKU on <strong>{formatDate(product.lastPhysicalStockCheck)}</strong>. Availability status is approximate.
            </div>
          </div>
        </div>

        {/* Right Column: Specifications & Trade Enquiry */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold bg-orange-100 text-orange-800 px-2 py-0.5 rounded">
                CODE: {product.code}
              </span>
              <span className="text-xs font-medium text-gray-500">{product.category}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">{product.name}</h1>
            <p className="text-sm text-gray-500 mt-1">Brand: <span className="font-semibold text-gray-700">{product.brand}</span></p>
          </div>

          {/* Price and Stock */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-center justify-between">
            <div>
              <span className="text-xs text-gray-500 block">Public List Price</span>
              <span className="text-2xl font-extrabold text-gray-900">{formatCurrency(product.publicListPrice)}</span>
              <span className="text-[11px] text-gray-400 block">per sheet (ex-warehouse Surat)</span>
            </div>
            <StockBadge status={product.stockStatus} lastChecked={product.lastPhysicalStockCheck} />
          </div>

          {/* Specifications Table */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-gray-900">Technical Specifications</h2>
            <div className="border border-gray-200 rounded-lg divide-y divide-gray-200 text-xs">
              <div className="p-3 flex justify-between">
                <span className="text-gray-500">Surface Finish</span>
                <span className="font-medium text-gray-900">{product.finish || 'Standard'}</span>
              </div>
              <div className="p-3 flex justify-between">
                <span className="text-gray-500">Thickness</span>
                <span className="font-medium text-gray-900">{product.thickness || '1.0 mm'}</span>
              </div>
              <div className="p-3 flex justify-between">
                <span className="text-gray-500">Standard Sheet Size</span>
                <span className="font-medium text-gray-900">{product.size || '8 ft x 4 ft (2440 x 1220 mm)'}</span>
              </div>
              <div className="p-3 flex justify-between">
                <span className="text-gray-500">Warehouse Location</span>
                <span className="font-medium text-gray-900">Surat, Gujarat</span>
              </div>
            </div>
          </div>

          {/* Trade enquiry actions */}
          <div className="space-y-3 pt-2">
            <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Wholesale Enquiries & Booking</h2>
            <WhatsAppCTA productCode={product.code} productName={product.name} />
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Negotiated discounts apply on bulk carton / crate wholesale orders.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
