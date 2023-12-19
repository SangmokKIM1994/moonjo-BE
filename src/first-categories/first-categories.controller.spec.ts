import { Test, TestingModule } from "@nestjs/testing";
import { FirstCategoriesController } from "./first-categories.controller";

describe("FirstCategoriesController", () => {
  let controller: FirstCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FirstCategoriesController],
    }).compile();

    controller = module.get<FirstCategoriesController>(
      FirstCategoriesController
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
