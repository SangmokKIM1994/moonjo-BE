import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FirstCategories } from "./first-categories.entity";
import { Managers } from "src/managers/managers.entity";
import { Repository } from "typeorm";
import { FirstCategoriesRepository } from "./first-categories.repository";

@Injectable()
export class FirstCategoriesService {
  constructor(
    private readonly firstCategoriesRepository: FirstCategoriesRepository
  ) {}

  //첫번째 카테고리 추가
  async createFirstCategory(managerId: number, category: string) {
    try {
      const firstCategory =
        await this.firstCategoriesRepository.createFirstCategory(
          managerId,
          category
        );

      return firstCategory;
    } catch (error) {
      throw new InternalServerErrorException(
        "첫번째 카테고리 생성 시 서버 에러"
      );
    }
  }

  //모든 첫번째 카테고리 조회
  async findAllFirstCategory() {
    try {
      const allFirstCategory =
        this.firstCategoriesRepository.findAllFirstCategory;

      return allFirstCategory;
    } catch (error) {
      throw new InternalServerErrorException(
        "첫번째 카테고리 조회 시 서버 에러"
      );
    }
  }

  //첫번째 카테고리 수정
  async modifyFirstCategory(
    firstCategoryId: number,
    firstCategoryName: string
  ) {
    try {
      const firstCategory = await this.firstCategoriesRepository.findOne({
        where: { firstCategoryId },
      });
      firstCategory.firstCategoryName = firstCategoryName;

      await this.firstCategoriesRepository.save(firstCategory);
      return;
    } catch (error) {
      throw new InternalServerErrorException(
        "첫번째 카테고리 수정 시 서버 에러"
      );
    }
  }
}
