import { Controller } from "@nestjs/common";

@Controller("first-categories")
export class FirstCategoriesController {
  constructor(
    private readonly firstCategoriesController: FirstCategoriesController
  ) {}
}
