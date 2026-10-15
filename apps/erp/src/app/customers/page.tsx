import React from 'react';
import Link from 'next/link';
import { Plus, Search, AlertCircle, Phone, MapPin } from 'lucide-react';

export default function ErpCustomersPage() {
  const shops = [
    {
      id: "shop-01",
      shopName: "Shree Ganesh Timber & Hardware",
      ownerName: "Pravinbhai Patel",
      phone: "+91 98251 12345",
      address: "14, Timber Market, Near Ring Road Flyover",
      marketArea: "Ring Road, Surat",
      creditLimit: 300000,
      outstandingBalance: 142000,
      gst: "24AAECP1234F1Z5",
      status: "ACTIVE",
    },
    {
      id: "shop-02",
      shopName: "Krishna Ply & Laminates",
      ownerName: "Mukeshbhai Shah",
      phone: "+91 94268 87654",
      address: "B-22, GIDC Commercial Complex",
      marketArea: "Katargam, Surat",
      creditLimit: 250000,
      outstandingBalance: 115000,
      gst: "24ABBCS5678G2Z1",
      status: "ACTIVE",
    },
    {
      id: "shop-03",
      shopName: "Maruti Interior Solutions",
      ownerName: "Ketanbhai Savani",
      phone: "+91 98980 11223",
      address: "Shop 5, Mini Bazar",
      marketArea: "Varachha, Surat",
      creditLimit: 200000,
      outstandingBalance: 32000,
      gst: "24ACDMS9012H3Z8",
      status: "ACTIVE",
    },
    {
      id: "shop-04",
      shopName: "Ambica Hardware & Woodcraft",
      ownerName: "Rameshbhai Prajapati",
      phone: "+91 97230 44556",
      address: "Main Road, Near Gujarat Gas Circle",
      marketArea: "Adajan, Surat",
      creditLimit: 500000,
      outstandingBalance: 485000,
      gst: "24ADEAP3456J4Z2",
      status: "NEAR_LIMIT",
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
            <Link href="/" className="hover:text-orange-600">Dashboard</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Customer Shops</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Retail Shop Accounts & Outstanding Balances</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Wholesale credit monitoring, outstanding recovery status, and GST party ledger tracking in Surat.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-orange-600 text-white hover:bg-orange-700 shadow-sm"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Retailer Shop</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {shops.map((shop) => (
          <div
            key={shop.id}
            className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-base font-bold text-slate-900">{shop.shopName}</h2>
                  <p className="text-xs text-slate-500">Contact: <strong className="text-slate-700">{shop.ownerName}</strong></p>
                </div>
                {shop.status === 'NEAR_LIMIT' && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                    <AlertCircle className="w-3 h-3" />
                    Credit Alert
                  </span>
                )}
              </div>

              <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>{shop.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{shop.address} ({shop.marketArea})</span>
                </div>
                <div className="text-[11px] font-mono text-slate-500">
                  GST: {shop.gst}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">Outstanding Due</span>
                <span className="text-base font-bold text-slate-900">₹ {shop.outstandingBalance.toLocaleString('en-IN')}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block uppercase">Approved Limit</span>
                <span className="text-xs font-semibold text-slate-600">₹ {shop.creditLimit.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
