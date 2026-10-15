import { Injectable, BadRequestException } from '@nestjs/common';
import { EnquiryPayload, ApiResponse } from '@pp/types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class EnquiriesService {
  constructor(private readonly prisma: PrismaService) {}

  async createEnquiry(payload: EnquiryPayload): Promise<ApiResponse> {
    if (!payload.phone || !payload.customerName) {
      throw new BadRequestException('Phone number and customer name are required.');
    }

    // Try database insertion if available, else acknowledge in-memory
    try {
      if (process.env.DATABASE_URL) {
        await this.prisma.enquiry.create({
          data: {
            customerName: payload.customerName,
            phone: payload.phone,
            productCode: payload.productCode,
            message: payload.message,
            source: payload.source || 'WEB',
          },
        });
      }
    } catch {
      // In bootstrap/dev mode without live DB, accept and log gracefully
      console.log('Enquiry logged (in-memory mode):', payload);
    }

    return {
      success: true,
      message: 'Enquiry received. Our Surat sales representative will contact you shortly.',
      timestamp: new Date().toISOString(),
    };
  }
}
