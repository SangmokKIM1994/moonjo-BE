import { Module } from "@nestjs/common";
import { ManagersController } from "./managers.controller";
import { ManagersService } from "./managers.service";
import { Managers } from "./managers.entity";

@Module({
  imports: [Managers],
  controllers: [ManagersController],
  providers: [ManagersService],
})
export class ManagersModule {}
