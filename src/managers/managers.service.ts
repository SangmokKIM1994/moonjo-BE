import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Managers } from "./managers.entity";
import { ManagerRepository } from "./managers.repository";

@Injectable()
export class ManagersService {
  constructor(
    @InjectRepository(Managers)
    private readonly managerRepository: ManagerRepository
  ) {}

  async createManager(CreateManagerDto) {
    try {
      const manager = this.managerRepository.createManager(CreateManagerDto);

      return manager;
    } catch (error) {
      throw new InternalServerErrorException("매니저 추가 시 서버 에러");
    }
  }

  async findManager(managerId: number) {
    try {
      const manager = await this.managerRepository.find({
        where: { managerId },
      });

      return manager;
    } catch (error) {
      throw new InternalServerErrorException("매니저 조회 시 서버 에러");
    }
  }

  async deleteManager(managerId: number) {
    try {
      const manager = await this.managerRepository.find({
        where: { managerId },
      });
      if (!manager) {
        throw new NotFoundException("매니저가 존재하지 않습니다.");
      }
      await this.managerRepository.delete({ managerId });

      return;
    } catch (error) {
      throw new InternalServerErrorException("매니저 조회 시 서버 에러");
    }
  }
}
