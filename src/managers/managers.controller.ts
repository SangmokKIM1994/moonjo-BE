import { Controller } from "@nestjs/common";
import { ManagersService } from "./managers.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("managers")
@Controller("managers")
export class ManagersController {
  constructor(private readonly managerService: ManagersService) {}
}
