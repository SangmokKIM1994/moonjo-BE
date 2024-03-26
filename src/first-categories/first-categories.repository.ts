import { Managers } from "src/managers/managers.entity";
import { FirstCategories } from "./first-categories.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

export class FirstCategoriesRepository {
  constructor(
    @InjectRepository(FirstCategories)
    private readonly firstCategoriesRepository: Repository<FirstCategories>,
    @InjectRepository(Managers)
    private readonly managerRepository: Repository<Managers>
  ) {}

  async createFirstCategory (managerId: number, category: string) {
    const result = this.firstCategoriesRepository.create({
      managerId,
      firstCategoryName: category,
    });

    await this.firstCategoriesRepository.save(result);
    return result;
  }
}
