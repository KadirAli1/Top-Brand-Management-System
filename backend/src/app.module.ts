import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandsModule } from './modules/brands/brands.module';

@Module({
  imports: [BrandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
