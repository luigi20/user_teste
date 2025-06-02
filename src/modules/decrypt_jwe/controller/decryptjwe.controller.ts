import { Controller, Post, Body } from '@nestjs/common';
import { DecryptJWEService } from '../service/decryptjwe.service';

@Controller('decryptjwe')
export class DecryptJweController {
  constructor(private readonly decryptJweService: DecryptJWEService) {}

  @Post()
  async create(@Body() body: { jwe: string }) {
    const result = await this.decryptJweService.execute({
      jwe: body.jwe,
    });
    return result;
  }
}
