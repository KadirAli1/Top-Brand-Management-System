import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateUpdateBrandDto } from './dto/creaate-update-brand.dto';

@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @Get()
  findAll() {
    return this.brandsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.brandsService.findOne(id);
  }
  @Post()
  create(@Body() createBrandDto: CreateUpdateBrandDto) {
    return this.brandsService.create(createBrandDto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateBrandDto: CreateUpdateBrandDto,
  ) {
    return this.brandsService.update(id, updateBrandDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.brandsService.delete(id);
  }
}
