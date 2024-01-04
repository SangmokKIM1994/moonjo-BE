import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Managers } from "./managers.entity";
import { Repository } from "typeorm";

@Injectable()
export class ManagersService {
  constructor(
    @InjectRepository(Managers)
    private readonly managerRepository: Repository<Managers>
  ) {}

  async createManager(CreateManagerDto) {
    try {
      const { name, id, password, email } = CreateManagerDto;
      const result = this.managerRepository.create({
        name,
        id,
        password,
        email,
      });
      await this.managerRepository.save(result);
      return result;
    } catch (error) {
      throw new InternalServerErrorException("매니저 추가 시 서버 에러");
    }
  }

  async findManager(managerId: number) {
    try {
      const result = await this.managerRepository.find({
        where: { managerId },
      });
      return result;
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
