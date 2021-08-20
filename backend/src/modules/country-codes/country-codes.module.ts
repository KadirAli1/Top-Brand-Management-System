import { Module } from '@nestjs/common';
import { CountryCodesService } from './country-codes.service';
import { CountryCodesController } from './country-codes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryCode } from './entity/country-code.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CountryCode])],
  providers: [CountryCodesService],
  controllers: [CountryCodesController],
})
export class CountryCodesModule {}
