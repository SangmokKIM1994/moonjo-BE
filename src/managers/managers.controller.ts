import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from "@nestjs/common";
import { ManagersService } from "./managers.service";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateManagerDto } from "./dto/create.managers.dto";

@ApiTags("managers")
@Controller("managers")
export class ManagersController {
  constructor(private readonly managerService: ManagersService) {}

  @ApiOperation({ summary: "매니저 생성" })
  @ApiBody({ type: CreateManagerDto })
  @ApiResponse({ status: 201, description: "매니저 생성 성공" })
  @Post("/")
  async createManager(
    @Body(ValidationPipe) createManagerDto: CreateManagerDto
  ) {
    const result = await this.managerService.createManager(createManagerDto);
    return result;
  }

  @ApiOperation({ summary: "매니저 조회" })
  @ApiResponse({ status: 200, description: "매니저 조회 성공" })
  @Get("/:managerId")
  async findManagerByManagerId(@Param() managerId: number) {
    const result = await this.managerService.findManager(managerId);
    return result;
  }
}
