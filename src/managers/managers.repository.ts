import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Managers } from "./managers.entity";
import { Repository } from "typeorm";

export class ManagerRepository {
  constructor(
    @InjectRepository(Managers)
    private readonly managerRepository: Repository<Managers>
  ) {}

  async createManager(CreateManagerDto) {
    const { name, id, password, email } = CreateManagerDto;
    const result = this.managerRepository.create({
      name,
      id,
      password,
      email,
    });

    await this.managerRepository.save(result);

    return result;
  }

  async findOneManager(managerId: number) {
    const result = await this.managerRepository.find({
      where: { managerId },
    });

    return result
  }
}
