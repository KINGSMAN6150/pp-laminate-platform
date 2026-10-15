import React from 'react';
import { Bell, Wifi, WifiOff, User } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <h1 className="text-base font-bold text-slate-800">Wholesale Operations Dashboard</h1>
        <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
          Surat Node: Active
        </span>
      </div>

      <div className="flex items-center gap-4">
        {/* Offline sync status placeholder indicator */}
        <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600 border border-slate-200">
          <Wifi className="w-3.5 h-3.5 text-emerald-600" />
          <span className="font-medium text-[11px]">Sync: Online</span>
        </div>

        <button
          type="button"
          className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
          title="Audit Notifications"
        >
          <Bell className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
          <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-xs">
            PP
          </div>
          <div className="hidden md:block text-left">
            <span className="text-xs font-semibold text-slate-800 block leading-tight">Partner Account</span>
            <span className="text-[10px] text-slate-400 block leading-tight">partner@pawanputra.in</span>
          </div>
        </div>
      </div>
    </header>
  );
}
