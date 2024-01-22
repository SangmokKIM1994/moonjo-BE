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

  //첫번째 카테고리 추가
  async createFirstCategory(managerId: number, category: string) {
    const result = this.firstCategoriesRepository.create({
      managerId,
      firstCategoryName: category,
    });

    await this.firstCategoriesRepository.save(result);
    return result;
  }

  //모든 첫번째 카테고리 조회
  async findAllFirstCategory() {
    const result = this.firstCategoriesRepository.find();

    return result;
  }

  //첫번째 카테고리 수정
  async modifyFirstCategory(firstCategoryId:number,firstCategoryName:string){
    const firstCategory = await this.firstCategoriesRepository.findOne({where:{firstCategoryId}})
    await firstCategory.firstCategoryName = firstCategoryName

    await this.firstCategoriesRepository.save(firstCategory)
    return
  }
}
