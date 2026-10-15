import { Controller, Post, Body } from '@nestjs/common';
import { EnquiriesService } from './enquiries.service';
import { EnquiryPayload, ApiResponse } from '@pp/types';

@Controller('enquiries')
export class EnquiriesController {
  constructor(private readonly enquiriesService: EnquiriesService) {}

  @Post()
  async createEnquiry(@Body() payload: EnquiryPayload): Promise<ApiResponse> {
    return this.enquiriesService.createEnquiry(payload);
  }
}
