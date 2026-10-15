import React from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Boxes,
  FileText,
  ShieldAlert,
  Layers,
} from 'lucide-react';

export function Sidebar() {
  const navItems = [
    { label: 'Dashboard Overview', href: '/', icon: LayoutDashboard },
    { label: 'Sales & Orders', href: '/sales', icon: ShoppingCart },
    { label: 'Shop Accounts & Credit', href: '/customers', icon: Users },
    { label: 'Stock Physical Check', href: '/inventory', icon: Boxes },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 min-h-screen flex flex-col justify-between shrink-0">
      <div>
        {/* Brand */}
        <div className="p-5 border-b border-slate-800 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-orange-600 flex items-center justify-center text-white font-bold">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-white text-sm block">PP Wholesale ERP</span>
            <span className="text-[10px] text-orange-400 font-medium block">Pawanputra • Surat</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium hover:bg-slate-800 hover:text-white transition-colors"
              >
                <Icon className="w-4 h-4 text-slate-400" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Role & Audit Status Footer */}
      <div className="p-4 border-t border-slate-800 space-y-2">
        <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/50">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Role: Partner / Admin</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-1 leading-normal">
            Financial changes preserve audit history. Silent overwrites are prevented.
          </p>
        </div>

        <div className="text-[10px] text-slate-500 text-center">
          Pawanputra Laminate v0.1-scaffold
        </div>
      </div>
    </aside>
  );
}
