import { Module } from '@nestjs/common';
import { CountryCodesService } from './country-codes.service';
import { CountryCodesController } from './country-codes.controller';

@Module({
  providers: [CountryCodesService],
  controllers: [CountryCodesController]
})
export class CountryCodesModule {}
