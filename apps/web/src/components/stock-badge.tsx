import React from 'react';
import { StockStatus } from '@pp/types';
import { cn } from '../lib/utils';

interface StockBadgeProps {
  status: StockStatus;
  lastChecked?: string;
  className?: string;
}

export function StockBadge({ status, lastChecked, className }: StockBadgeProps) {
  const configs = {
    AVAILABLE: {
      label: 'Available in Stock',
      bg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      dot: 'bg-emerald-500',
    },
    LIMITED: {
      label: 'Limited Stock',
      bg: 'bg-amber-50 text-amber-800 border-amber-200',
      dot: 'bg-amber-500',
    },
    OUT_OF_STOCK: {
      label: 'Out of Stock',
      bg: 'bg-rose-50 text-rose-800 border-rose-200',
      dot: 'bg-rose-500',
    },
  };

  const config = configs[status] || configs.AVAILABLE;

  return (
    <div className={cn('inline-flex flex-col gap-0.5', className)}>
      <span
        className={cn(
          'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border',
          config.bg
        )}
      >
        <span className={cn('w-2 h-2 rounded-full', config.dot)} />
        {config.label}
      </span>
      {lastChecked && (
        <span className="text-[10px] text-gray-400 italic">
          Physical check: {new Date(lastChecked).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
        </span>
      )}
    </div>
  );
}
