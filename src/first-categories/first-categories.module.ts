import { Module } from '@nestjs/common';
import { FirstCategoriesController } from './first-categories.controller';
import { FirstCategoriesService } from './first-categories.service';

@Module({
  controllers: [FirstCategoriesController],
  providers: [FirstCategoriesService]
})
export class FirstCategoriesModule {}
