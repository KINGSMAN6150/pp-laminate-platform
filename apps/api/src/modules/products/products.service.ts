import { Injectable } from '@nestjs/common';
import { Product } from '@pp/types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  // Fallback initial products for bootstrap & demo before database population
  private readonly fallbackProducts: Product[] = [
    {
      id: 'prod-001',
      code: 'SF2042',
      name: 'Royal Burma Teak',
      brand: 'PP Signature',
      category: 'LAMINATE',
      finish: 'High Gloss',
      thickness: '1mm',
      size: '8x4 ft',
      publicListPrice: 2450.0,
      stockStatus: 'AVAILABLE',
      lastPhysicalStockCheck: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'prod-002',
      code: 'SF2050',
      name: 'Walnut Crown Natural',
      brand: 'PP Signature',
      category: 'LAMINATE',
      finish: 'Suede / Matt',
      thickness: '1mm',
      size: '8x4 ft',
      publicListPrice: 2150.0,
      stockStatus: 'LIMITED',
      lastPhysicalStockCheck: new Date(Date.now() - 3 * 86400000).toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'prod-003',
      code: 'GL1020',
      name: 'Calacatta Marble Gloss',
      brand: 'Greenlam',
      category: 'LAMINATE',
      finish: 'High Gloss',
      thickness: '1mm',
      size: '8x4 ft',
      publicListPrice: 3200.0,
      stockStatus: 'AVAILABLE',
      lastPhysicalStockCheck: new Date(Date.now() - 5 * 86400000).toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'prod-004',
      code: 'MR4088',
      name: 'Ash Wood Embossed',
      brand: 'Merino',
      category: 'LAMINATE',
      finish: 'Textured',
      thickness: '0.8mm',
      size: '8x4 ft',
      publicListPrice: 1650.0,
      stockStatus: 'OUT_OF_STOCK',
      lastPhysicalStockCheck: new Date(Date.now() - 2 * 86400000).toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'prod-005',
      code: 'PLY710-18',
      name: 'BWP Marine Grade Plywood',
      brand: 'Century Club Prime',
      category: 'PLYWOOD',
      finish: 'Calibrated IS:710',
      thickness: '18mm',
      size: '8x4 ft',
      publicListPrice: 4200.0,
      stockStatus: 'AVAILABLE',
      lastPhysicalStockCheck: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  async findAll(query?: { search?: string; brand?: string; category?: string }): Promise<Product[]> {
    let results = [...this.fallbackProducts];

    if (query?.search) {
      const q = query.search.toLowerCase();
      results = results.filter(
        (p) =>
          p.code.toLowerCase().includes(q) ||
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q)
      );
    }

    if (query?.brand) {
      results = results.filter((p) => p.brand.toLowerCase() === query.brand?.toLowerCase());
    }

    if (query?.category) {
      results = results.filter((p) => p.category.toLowerCase() === query.category?.toLowerCase());
    }

    return results;
  }

  async findByCode(code: string): Promise<Product | null> {
    const normalized = code.trim().toLowerCase();
    const product = this.fallbackProducts.find((p) => p.code.toLowerCase() === normalized);
    return product || null;
  }
}
