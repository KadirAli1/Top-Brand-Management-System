import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUpdateBrandDto } from './dto/creaate-update-brand.dto';
import { Brand } from './entity/brand.entity';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand) private brandsRepository: Repository<Brand>,
  ) {}

  findAll() {
    return this.brandsRepository.find();
  }

  findOne(id: number) {
    return this.brandsRepository.findOne(id);
  }
  create(createBrandDto: CreateUpdateBrandDto) {
    return this.brandsRepository.save(createBrandDto);
  }

  update(id: number, updateBrandDto: CreateUpdateBrandDto) {
    return this.brandsRepository.update(id, updateBrandDto);
  }

  delete(id: number) {
    return this.brandsRepository.delete(id);
  }
}
