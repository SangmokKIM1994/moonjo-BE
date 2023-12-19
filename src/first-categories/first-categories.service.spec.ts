import { Test, TestingModule } from "@nestjs/testing";
import { FirstCategoriesService } from "./first-categories.service";

describe("FirstCategoriesService", () => {
  let service: FirstCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FirstCategoriesService],
    }).compile();

    service = module.get<FirstCategoriesService>(FirstCategoriesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
