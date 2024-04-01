import { Injectable, InternalServerErrorException } from "@nestjs/common";
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
      const targetFirstCategory =
        await this.firstCategoriesRepository.findOneFirstCategory(
          firstCategoryId
        );
      await this.firstCategoriesRepository.modifyFirstCategory(
        targetFirstCategory,
        firstCategoryName
      );
      return;
    } catch (error) {
      throw new InternalServerErrorException(
        "첫번째 카테고리 수정 시 서버 에러"
      );
    }
  }

  //첫번째 카테고리 삭제
  async deleteFirstCategory(firstCategoryId: number) {
    try {
      await this.firstCategoriesRepository.deleteFirstCategory(firstCategoryId);

      return;
    } catch (error) {
      throw new InternalServerErrorException(
        "첫번째 카테고리 삭제 시 서버 에러"
      );
    }
  }
}
