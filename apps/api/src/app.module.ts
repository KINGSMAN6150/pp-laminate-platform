import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { HealthModule } from './health/health.module';
import { ProductsModule } from './modules/products/products.module';
import { EnquiriesModule } from './modules/enquiries/enquiries.module';

@Module({
  imports: [
    PrismaModule,
    HealthModule,
    ProductsModule,
    EnquiriesModule,
  ],
})
export class AppModule {}
