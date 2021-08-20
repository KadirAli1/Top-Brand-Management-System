import { Controller, Get, Param } from '@nestjs/common';
import { BrandsService } from './brands.service';

@Controller('brands')
export class BrandsController {
  constructor(private brndsService: BrandsService) {}

  @Get()
  findAll() {
    return this.brndsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.brndsService.findOne(id);
  }
}
