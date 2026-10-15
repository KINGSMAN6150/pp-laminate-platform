import React from 'react';
import Link from 'next/link';
import { Search, Filter } from 'lucide-react';
import { MOCK_PRODUCTS } from '../../lib/mock-products';
import { StockBadge } from '../../components/stock-badge';
import { WhatsAppCTA } from '../../components/whatsapp-cta';
import { formatCurrency } from '../../lib/utils';

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { search?: string; brand?: string; category?: string };
}) {
  const searchQuery = searchParams?.search?.toLowerCase() || '';
  const brandFilter = searchParams?.brand || '';
  const categoryFilter = searchParams?.category || '';

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesSearch =
      !searchQuery ||
      product.code.toLowerCase().includes(searchQuery) ||
      product.name.toLowerCase().includes(searchQuery) ||
      product.brand.toLowerCase().includes(searchQuery);

    const matchesBrand = !brandFilter || product.brand.toLowerCase() === brandFilter.toLowerCase();
    const matchesCategory =
      !categoryFilter || product.category.toLowerCase() === categoryFilter.toLowerCase();

    return matchesSearch && matchesBrand && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="border-b border-gray-200 pb-5">
        <h1 className="text-3xl font-extrabold text-gray-900">Wholesale Product Catalogue</h1>
        <p className="text-sm text-gray-500 mt-1">
          Showing {filteredProducts.length} of {MOCK_PRODUCTS.length} catalogue products • Prices reflect standard list price
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <form method="GET" action="/products" className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
          <input
            type="text"
            name="search"
            defaultValue={searchParams?.search || ''}
            placeholder="Search code (e.g. SF2042), name, or finish..."
            className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </form>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <Filter className="w-3.5 h-3.5" />
            <span>Category:</span>
          </div>
          <div className="flex gap-2">
            <Link
              href="/products"
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                !categoryFilter
                  ? 'bg-orange-600 text-white border-orange-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              All
            </Link>
            <Link
              href="/products?category=LAMINATE"
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                categoryFilter === 'LAMINATE'
                  ? 'bg-orange-600 text-white border-orange-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              Laminates
            </Link>
            <Link
              href="/products?category=PLYWOOD"
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                categoryFilter === 'PLYWOOD'
                  ? 'bg-orange-600 text-white border-orange-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              Plywood
            </Link>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200 p-8">
          <p className="text-gray-500 text-base">No products found matching your filter criteria.</p>
          <Link href="/products" className="text-orange-600 text-sm font-semibold underline mt-2 inline-block">
            Clear all filters
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold bg-orange-50 text-orange-800 border border-orange-200 px-2 py-0.5 rounded">
                    {product.code}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">{product.brand}</span>
                </div>

                <h2 className="font-bold text-gray-900 text-base">
                  <Link href={`/products/${product.code}`} className="hover:text-orange-600 transition-colors">
                    {product.name}
                  </Link>
                </h2>

                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 pt-1">
                  <div>
                    <span className="text-gray-400 block">Category:</span>
                    <span className="font-medium text-gray-800">{product.category}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block">Finish:</span>
                    <span className="font-medium text-gray-800">{product.finish || 'Standard'}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block">Thickness:</span>
                    <span className="font-medium text-gray-800">{product.thickness || '1mm'}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block">Sheet Size:</span>
                    <span className="font-medium text-gray-800">{product.size || '8x4 ft'}</span>
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

              <div className="pt-4 mt-4 border-t border-gray-100 flex flex-col gap-2">
                <WhatsAppCTA productCode={product.code} productName={product.name} />
                <Link
                  href={`/products/${product.code}`}
                  className="text-center text-xs text-gray-600 hover:text-orange-600 font-medium py-1"
                >
                  View Details & Sheet Specs →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
