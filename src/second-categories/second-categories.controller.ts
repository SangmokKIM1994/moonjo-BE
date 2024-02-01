import { Controller } from "@nestjs/common";

@Controller("second-categories")
export class SecondCategoriesController {
  constructor(
    private readonly secondCategoriesController: SecondCategoriesController
  ) {}
}
