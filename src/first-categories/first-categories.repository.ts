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

  async createFirstCategory(managerId: number, category: string) {
    const result = this.firstCategoriesRepository.create({
      managerId,
      firstCategoryName: category,
    });

    await this.firstCategoriesRepository.save(result);
    return result;
  }

  async findAllFirstCategory() {
    const result = this.firstCategoriesRepository.find();

    return result;
  }

  async findOneFirstCategory(firstCategoryId: number) {
    const result = await this.firstCategoriesRepository.findOne({
      where: { firstCategoryId },
    });

    return result;
  }
  async modifyFirstCategory(
    targetFirstCategory: FirstCategories,
    firstCategoryName: string
  ) {
    targetFirstCategory.firstCategoryName = firstCategoryName;
    await this.firstCategoriesRepository.save(targetFirstCategory);

    return;
  }

  async deleteFirstCategory(firstCategoryId: number) {
    await this.firstCategoriesRepository.delete(firstCategoryId);
    
    return;
  }
}
