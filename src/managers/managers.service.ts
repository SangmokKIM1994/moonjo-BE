import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Managers } from "./managers.entity";
import { Repository } from "typeorm";

@Injectable()
export class ManagersService {
  constructor(
    @InjectRepository(Managers)
    private readonly managerRepository: Repository<Managers>
  ) {}

  async createManager() {
    try {
      
    } catch (error) {
      throw new InternalServerErrorException("매니저 추가 시 서버 에러");
    }
  }
}
