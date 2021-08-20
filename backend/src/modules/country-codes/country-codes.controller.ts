import { Controller, Get } from '@nestjs/common';
import { CountryCodesService } from './country-codes.service';
@Controller('country-codes')
export class CountryCodesController {
  constructor(private countryCodeService: CountryCodesService) {}

  @Get()
  findAll() {
    return this.countryCodeService.findAll();
  }
}
