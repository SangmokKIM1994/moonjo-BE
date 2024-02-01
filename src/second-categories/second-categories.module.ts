import { Module } from "@nestjs/common";
import { SecondCategoriesController } from "./second-categories.controller";
import { SecondCategoriesService } from "./second-categories.service";

@Module({
  controllers: [SecondCategoriesController],
  providers: [SecondCategoriesService],
})
export class SecondCategoriesModule {}
