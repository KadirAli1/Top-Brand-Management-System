import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
}
