import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@pp/database';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    // Only connect if DATABASE_URL is configured
    if (process.env.DATABASE_URL) {
      try {
        await this.$connect();
      } catch (err) {
        console.warn('Prisma could not connect to PostgreSQL on startup (development mode):', err);
      }
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
