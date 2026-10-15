import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { PrismaService } from '../../prisma/prisma.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: PrismaService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return products list', async () => {
    const products = await service.findAll();
    expect(products.length).toBeGreaterThan(0);
  });

  it('should find product by code SF2042', async () => {
    const product = await service.findByCode('SF2042');
    expect(product).toBeDefined();
    expect(product?.code).toBe('SF2042');
    expect(product?.name).toBe('Royal Burma Teak');
  });

  it('should return null for non-existent code', async () => {
    const product = await service.findByCode('NON_EXISTENT');
    expect(product).toBeNull();
  });
});
