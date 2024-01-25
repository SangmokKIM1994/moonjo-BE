import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { FirstCategoriesModule } from "./first-categories/first-categories.module";
import { ManagersModule } from "./managers/managers.module";
import { SecondCategoriesModule } from './second-categories/second-categories.module';

@Module({
  imports: [FirstCategoriesModule, ManagersModule, SecondCategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
