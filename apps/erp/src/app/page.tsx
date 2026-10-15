import React from 'react';
import Link from 'next/link';
import {
  IndianRupee,
  Users,
  AlertTriangle,
  ClipboardCheck,
  ArrowUpRight,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

export default function ErpDashboardPage() {
  const kpis = [
    {
      title: "Today's Wholesale Billing",
      value: "₹ 1,84,500",
      change: "+12% vs last week",
      icon: IndianRupee,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      title: "Shop Outstanding Receivables",
      value: "₹ 14,25,800",
      subtext: "Across 28 dealer accounts in Surat",
      icon: AlertTriangle,
      color: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
      title: "Active Retail Hardware Shops",
      value: "64 Shops",
      subtext: "Ring Road, Varachha, Katargam",
      icon: Users,
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      title: "Stock Verified SKUs (Weekly)",
      value: "142 / 160",
      subtext: "Audited by warehouse staff",
      icon: ClipboardCheck,
      color: "text-purple-600 bg-purple-50 border-purple-200",
    },
  ];

  const recentOrders = [
    {
      id: "SO-2026-104",
      shop: "Shree Ganesh Timber & Hardware",
      area: "Ring Road",
      items: "SF2042 x 25 sheets, PLY710 x 10 sheets",
      listAmount: "₹ 1,03,250",
      negotiatedAmount: "₹ 92,000",
      paymentStatus: "PARTIAL",
      deliveryStatus: "DISPATCHED",
    },
    {
      id: "SO-2026-103",
      shop: "Krishna Ply & Laminates",
      area: "Katargam",
      items: "GL1020 x 40 sheets",
      listAmount: "₹ 1,28,000",
      negotiatedAmount: "₹ 1,15,000",
      paymentStatus: "PENDING",
      deliveryStatus: "PENDING",
    },
    {
      id: "SO-2026-102",
      shop: "Maruti Interior Solutions",
      area: "Varachha",
      items: "SF2050 x 30 sheets",
      listAmount: "₹ 64,500",
      negotiatedAmount: "₹ 58,000",
      paymentStatus: "PAID",
      deliveryStatus: "DELIVERED",
    },
  ];

  return (
    <div className="space-y-8 max-w-7xl">
      {/* Milestone Architecture Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-900 leading-relaxed">
          <strong className="block font-semibold">Scaffold Milestone 1 — Placeholder Architecture:</strong>
          This internal ERP interface is an architectural placeholder for the Pawanputra wholesale platform. Business rules, real accounting ledgers, GST calculations, and offline synchronization protocols will be implemented deliberately after accountant workflow confirmation.
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div
              key={kpi.title}
              className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">{kpi.title}</span>
                <div className={`p-2 rounded-lg border ${kpi.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-3">
                <span className="text-2xl font-bold text-slate-900 block">{kpi.value}</span>
                <span className="text-xs text-slate-500 block mt-1">
                  {kpi.change || kpi.subtext}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Orders Overview */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">Recent Wholesale Orders</h2>
            <p className="text-xs text-slate-500 mt-0.5">Tracking list vs negotiated trade billing & outstanding balances</p>
          </div>
          <Link
            href="/sales"
            className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700"
          >
            <span>View All Orders</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 uppercase text-[10px] tracking-wider border-b border-slate-200 font-semibold">
              <tr>
                <th className="px-5 py-3">Order No</th>
                <th className="px-5 py-3">Customer Shop</th>
                <th className="px-5 py-3">Surat Area</th>
                <th className="px-5 py-3">Items</th>
                <th className="px-5 py-3">List Value</th>
                <th className="px-5 py-3">Negotiated Total</th>
                <th className="px-5 py-3">Payment</th>
                <th className="px-5 py-3">Delivery</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-3.5 font-mono font-bold text-slate-800">{order.id}</td>
                  <td className="px-5 py-3.5 font-medium text-slate-900">{order.shop}</td>
                  <td className="px-5 py-3.5 text-slate-500">{order.area}</td>
                  <td className="px-5 py-3.5 text-slate-600 max-w-xs truncate">{order.items}</td>
                  <td className="px-5 py-3.5 text-slate-400 line-through">{order.listAmount}</td>
                  <td className="px-5 py-3.5 font-bold text-slate-900">{order.negotiatedAmount}</td>
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
                  <td className="px-5 py-3.5">
                    <span className="text-slate-600 font-medium">{order.deliveryStatus}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
