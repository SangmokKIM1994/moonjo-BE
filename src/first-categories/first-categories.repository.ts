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
}
