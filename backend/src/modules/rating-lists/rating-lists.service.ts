import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CountryCodesService } from '../country-codes/country-codes.service';
import { RatingList } from './entity/rating-list.entity';

@Injectable()
export class RatingListsService {
  constructor(
    @InjectRepository(RatingList)
    private ratingListsRepository: Repository<RatingList>,
    private countryCodeService: CountryCodesService,
  ) {}

  findAllByCountryCode(countryCodeId: number) {
    // const countryCodeCode = this.countryCodeService.findById(countryCodeId);
    return this.ratingListsRepository.find({
      where: { countryCode: countryCodeId },
    });
    // Logger.log(countryCodeId);
    // return this.ratingListsRepository.find();
  }
}
