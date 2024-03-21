import { Module } from "@nestjs/common";
import { FirstCategoriesController } from "./first-categories.controller";
import { FirstCategoriesService } from "./first-categories.service";
import { FirstCategoriesRepository } from "./first-categories.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FirstCategories } from "./first-categories.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([FirstCategories]),
    FirstCategoriesRepository,
  ],
  controllers: [FirstCategoriesController],
  providers: [FirstCategoriesService],
})
export class FirstCategoriesModule {}
