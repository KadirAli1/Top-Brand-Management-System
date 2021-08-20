import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandsModule } from './brands/brands.module';
import { BrandsService } from './brands/brands.service';

@Module({
  imports: [BrandsModule],
  controllers: [AppController],
  providers: [AppService, BrandsService],
})
export class AppModule {}
