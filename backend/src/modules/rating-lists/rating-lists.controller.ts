import { Controller, Get, Param } from '@nestjs/common';
import { RatingListsService } from './rating-lists.service';

@Controller('rating-lists')
export class RatingListsController {
  constructor(private ratingListsService: RatingListsService) {}

  @Get(':countryCodeId')
  findAllByCountryCodeId(@Param('countryCodeId') countryCodeId: number) {
    // Logger.log(countryCodeId);
    return this.ratingListsService.findAllByCountryCode(countryCodeId);
  }
}
