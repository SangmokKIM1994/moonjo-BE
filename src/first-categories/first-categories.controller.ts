import { Controller } from "@nestjs/common";
import { FirstCategoriesService } from "./first-categories.service";

@Controller("first-categories")
export class FirstCategoriesController {
  constructor(
    private readonly firstCategoriesService: FirstCategoriesService
  ) {}
}
