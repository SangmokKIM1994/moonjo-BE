import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { FirstCategoriesService } from "./first-categories.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("first-categories")
@Controller("first-categories")
export class FirstCategoriesController {
  constructor(
    private readonly firstCategoriesService: FirstCategoriesService
  ) {}

  @ApiOperation({ summary: "첫번째 카테고리 생성" })
  @ApiResponse({ status: 201, description: "첫번째 카테고리 생성 성공" })
  @Post("/")
  async createFirstCategory() {
    const firstCategory = await this.firstCategoriesService.createFirstCategory(
      managerId,
      category
    );
    return firstCategory;
  }
}
