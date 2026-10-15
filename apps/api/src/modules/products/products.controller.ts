import { Controller, Get, Param, Query, NotFoundException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiResponse, Product } from '@pp/types';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts(
    @Query('search') search?: string,
    @Query('brand') brand?: string,
    @Query('category') category?: string,
  ): Promise<ApiResponse<Product[]>> {
    const data = await this.productsService.findAll({ search, brand, category });
    return {
      success: true,
      data,
      timestamp: new Date().toISOString(),
    };
  }

  @Get(':code')
  async getProductByCode(@Param('code') code: string): Promise<ApiResponse<Product>> {
    const product = await this.productsService.findByCode(code);
    if (!product) {
      throw new NotFoundException(`Product with code '${code}' not found in catalogue.`);
    }
    return {
      success: true,
      data: product,
      timestamp: new Date().toISOString(),
    };
  }
}
