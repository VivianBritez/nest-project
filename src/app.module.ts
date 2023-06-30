import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandModule } from './brand/brand.module';

@Module({
  imports: [CarsModule, BrandModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
