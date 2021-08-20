import { Module } from '@nestjs/common';
import { RatingListsService } from './rating-lists.service';
import { RatingListsController } from './rating-lists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryCodesModule } from '../country-codes/country-codes.module';
import { RatingList } from './entity/rating-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RatingList]), CountryCodesModule],
  providers: [RatingListsService],
  controllers: [RatingListsController],
})
export class RatingListsModule {}
