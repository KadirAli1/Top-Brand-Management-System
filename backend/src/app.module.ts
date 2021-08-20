import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandsModule } from './modules/brands/brands.module';
import { Brand } from './modules/brands/entity/brand.entity';
import { CountryCodesModule } from './modules/country-codes/country-codes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'top_brands_management_system',
      entities: [Brand],
      synchronize: true,
    }),
    BrandsModule,
    CountryCodesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
