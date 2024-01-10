import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FirstCategories } from "./first-categories.entity";
import { Managers } from "src/managers/managers.entity";
import { Repository } from "typeorm";

@Injectable()
export class FirstCategoriesService {
  constructor(
    @InjectRepository(FirstCategories)
    private readonly firstCategoriesRepository: Repository<FirstCategories>,
    @InjectRepository(Managers)
    private readonly managerRepository: Repository<Managers>
  ) {}
}
