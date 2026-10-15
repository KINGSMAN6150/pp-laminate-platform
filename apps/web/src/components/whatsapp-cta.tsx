import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

interface WhatsAppCTAProps {
  productCode?: string;
  productName?: string;
}

export function WhatsAppCTA({ productCode, productName }: WhatsAppCTAProps) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210';
  const text = productCode
    ? `Hello Pawanputra Laminate, I want to enquire about product code: ${productCode} (${productName || ''}) for wholesale delivery in Surat.`
    : `Hello Pawanputra Laminate, I want to enquire about plywood/laminate wholesale catalogue rates.`;

  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  const callUrl = `tel:+${phone}`;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm"
      >
        <MessageSquare className="w-4 h-4" />
        WhatsApp Enquiry
      </a>
      <a
        href={callUrl}
        className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium px-3 py-2 rounded-lg transition-colors"
      >
        <Phone className="w-4 h-4" />
        Call Sales
      </a>
    </div>
  );
}
