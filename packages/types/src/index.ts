/**
 * Pawan Putra (PP) Laminate - Core Shared Domain Types
 */

export type StockStatus = 'AVAILABLE' | 'LIMITED' | 'OUT_OF_STOCK';

export type UserRole = 'PARTNER' | 'STAFF' | 'ACCOUNTANT';

export type EnquirySource = 'WHATSAPP' | 'CALL' | 'WEB';

export type PaymentStatus = 'PENDING' | 'PARTIAL' | 'PAID';

export type DeliveryStatus = 'PENDING' | 'DISPATCHED' | 'DELIVERED';

export interface Product {
  id: string;
  code: string; // e.g. "SF2042"
  name: string;
  brand: string;
  category: 'LAMINATE' | 'PLYWOOD' | 'VENEER' | 'HARDWARE';
  finish?: string; // e.g. "High Gloss", "Suede", "Matt"
  thickness?: string; // e.g. "1mm", "0.8mm", "18mm"
  size?: string; // e.g. "8x4 ft"
  publicListPrice: number;
  stockStatus: StockStatus;
  lastPhysicalStockCheck: string; // ISO date string of physical inventory check
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CustomerShop {
  id: string;
  shopName: string;
  ownerName: string;
  phone: string;
  address: string;
  marketArea?: string; // e.g. "Ring Road", "Katargam", "Varachha"
  gstNumber?: string;
  creditLimit: number;
  outstandingBalance: number;
  createdAt: string;
  updatedAt: string;
}

export interface SaleOrderItem {
  id: string;
  productId: string;
  productCode: string;
  productName: string;
  quantity: number;
  publicListPrice: number;
  negotiatedPrice: number;
  totalAmount: number;
}

export interface SaleOrder {
  id: string;
  orderNumber: string;
  shopId: string;
  shopName: string;
  orderDate: string;
  items: SaleOrderItem[];
  listAmount: number;
  negotiatedAmount: number;
  paymentStatus: PaymentStatus;
  deliveryStatus: DeliveryStatus;
  createdById: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface EnquiryPayload {
  customerName: string;
  phone: string;
  productCode?: string;
  message?: string;
  source: EnquirySource;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  timestamp: string;
}

export interface HealthCheckResponse {
  status: 'ok' | 'degraded' | 'error';
  service: string;
  environment: string;
  timestamp: string;
  uptime: number;
}
