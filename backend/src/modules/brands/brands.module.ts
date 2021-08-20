import { Module } from '@nestjs/common';
import { BrandsController } from './brands.controller';
import { BrandsService } from './brands.service';

@Module({
  providers: [BrandsService],
  controllers: [BrandsController],
})
export class BrandsModule {}
