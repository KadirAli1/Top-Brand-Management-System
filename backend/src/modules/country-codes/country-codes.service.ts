import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CountryCode } from './entity/country-code.entity';

@Injectable()
export class CountryCodesService {
  constructor(
    @InjectRepository(CountryCode)
    private countryCodeRepository: Repository<CountryCode>,
  ) {}

  findAll() {
    return this.countryCodeRepository.find();
  }

  findById(id: number) {
    return this.countryCodeRepository.findOne(id);
  }
}
