import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Plus, Download, Filter } from 'lucide-react';

export default function ErpSalesPage() {
  const orders = [
    {
      id: "SO-2026-104",
      date: "14 Oct 2026",
      shop: "Shree Ganesh Timber & Hardware",
      contact: "+91 98251 12345",
      marketArea: "Ring Road",
      listTotal: 103250,
      negotiatedTotal: 92000,
      paymentStatus: "PARTIAL",
      deliveryStatus: "DISPATCHED",
      createdBy: "Staff (Ramesh)",
    },
    {
      id: "SO-2026-103",
      date: "13 Oct 2026",
      shop: "Krishna Ply & Laminates",
      contact: "+91 94268 87654",
      marketArea: "Katargam",
      listTotal: 128000,
      negotiatedTotal: 115000,
      paymentStatus: "PENDING",
      deliveryStatus: "PENDING",
      createdBy: "Partner (Admin)",
    },
    {
      id: "SO-2026-102",
      date: "12 Oct 2026",
      shop: "Maruti Interior Solutions",
      contact: "+91 98980 11223",
      marketArea: "Varachha",
      listTotal: 64500,
      negotiatedTotal: 58000,
      paymentStatus: "PAID",
      deliveryStatus: "DELIVERED",
      createdBy: "Staff (Ramesh)",
    },
    {
      id: "SO-2026-101",
      date: "10 Oct 2026",
      shop: "Ambica Hardware & Woodcraft",
      contact: "+91 97230 44556",
      marketArea: "Adajan",
      listTotal: 210000,
      negotiatedTotal: 195000,
      paymentStatus: "PAID",
      deliveryStatus: "DELIVERED",
      createdBy: "Partner (Admin)",
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
            <Link href="/" className="hover:text-orange-600">Dashboard</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Sales Records</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Wholesale Sales Orders</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Preserves full audit trail of order creator, negotiated transaction prices, and delivery challans.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-orange-600 text-white hover:bg-orange-700 shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Wholesale Sale</span>
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-700">Orders Registry ({orders.length} Records)</span>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter by: All Market Areas</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 uppercase text-[10px] tracking-wider border-b border-slate-200 font-semibold">
              <tr>
                <th className="px-5 py-3">Order ID</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Customer Shop</th>
                <th className="px-5 py-3">Surat Area</th>
                <th className="px-5 py-3">Public List</th>
                <th className="px-5 py-3">Negotiated Total</th>
                <th className="px-5 py-3">Payment</th>
                <th className="px-5 py-3">Delivery</th>
                <th className="px-5 py-3">Logged By</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-3.5 font-mono font-bold text-slate-800">{order.id}</td>
                  <td className="px-5 py-3.5 text-slate-500">{order.date}</td>
                  <td className="px-5 py-3.5">
                    <span className="font-semibold text-slate-900 block">{order.shop}</span>
                    <span className="text-[10px] text-slate-400">{order.contact}</span>
                  </td>
                  <td className="px-5 py-3.5 text-slate-600">{order.marketArea}</td>
                  <td className="px-5 py-3.5 text-slate-400 line-through">₹ {order.listTotal.toLocaleString('en-IN')}</td>
                  <td className="px-5 py-3.5 font-bold text-slate-900">₹ {order.negotiatedTotal.toLocaleString('en-IN')}</td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${
                        order.paymentStatus === 'PAID'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : order.paymentStatus === 'PARTIAL'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}
                    >
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 font-medium text-slate-700">{order.deliveryStatus}</td>
                  <td className="px-5 py-3.5 text-slate-500 text-[11px]">{order.createdBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
