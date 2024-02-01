import { Test, TestingModule } from "@nestjs/testing";
import { SecondCategoriesController } from "./second-categories.controller";

describe("SecondCategoriesController", () => {
  let controller: SecondCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecondCategoriesController],
    }).compile();

    controller = module.get<SecondCategoriesController>(
      SecondCategoriesController
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
