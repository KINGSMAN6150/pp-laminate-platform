import React from 'react';
import Link from 'next/link';
import { ClipboardCheck, Plus, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function ErpInventoryPage() {
  const auditLogs = [
    {
      id: "AUD-881",
      date: "14 Oct 2026, 11:30 AM",
      productCode: "SF2042",
      productName: "Royal Burma Teak (1mm High Gloss)",
      previousStatus: "LIMITED",
      newStatus: "AVAILABLE",
      verifiedBy: "Staff (Kishore)",
      notes: "Received new consignment of 50 sheets from factory. Stacked in Rack B4.",
    },
    {
      id: "AUD-880",
      date: "13 Oct 2026, 05:15 PM",
      productCode: "MR4088",
      productName: "Ash Wood Embossed (0.8mm Textured)",
      previousStatus: "LIMITED",
      newStatus: "OUT_OF_STOCK",
      verifiedBy: "Staff (Ramesh)",
      notes: "Last 12 sheets dispatched against SO-2026-102. Physical rack now empty.",
    },
    {
      id: "AUD-879",
      date: "11 Oct 2026, 09:45 AM",
      productCode: "PLY710-18",
      productName: "BWP Marine Grade Plywood 18mm",
      previousStatus: "AVAILABLE",
      newStatus: "AVAILABLE",
      verifiedBy: "Partner (Admin)",
      notes: "Weekly physical count confirmed 85 sheets available.",
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
            <Link href="/" className="hover:text-orange-600">Dashboard</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Inventory Audit</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Physical Stock Verification Log</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Surat warehouse weekly physical audits update public catalogue status. Every check is permanently attributed to staff.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-orange-600 text-white hover:bg-orange-700 shadow-sm"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Record Physical Stock Check</span>
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50">
          <span className="text-xs font-semibold text-slate-700">Audit History Log</span>
        </div>

        <div className="divide-y divide-slate-100">
          {auditLogs.map((log) => (
            <div key={log.id} className="p-5 hover:bg-slate-50 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-800">
                    {log.productCode}
                  </span>
                  <span className="text-xs font-semibold text-slate-900">{log.productName}</span>
                </div>
                <p className="text-xs text-slate-600 italic">"{log.notes}"</p>
                <div className="flex items-center gap-3 text-[11px] text-slate-400">
                  <span>Audit ID: {log.id}</span>
                  <span>•</span>
                  <span>Logged by: <strong className="text-slate-600">{log.verifiedBy}</strong></span>
                  <span>•</span>
                  <span>Time: {log.date}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs text-slate-400">{log.previousStatus}</span>
                <span className="text-xs text-slate-400">→</span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  {log.newStatus}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
