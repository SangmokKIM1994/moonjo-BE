import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Managers } from "./managers.entity";
import { Repository } from "typeorm";

export class ManagerRepository {
  constructor(
    @InjectRepository(Managers)
    private readonly managersRepository: Repository<Managers>
  ) {}

  async createManager(CreateManagerDto) {
    const { name, id, password, email } = CreateManagerDto;
    const result = this.managersRepository.create({
      name,
      id,
      password,
      email,
    });

    await this.managersRepository.save(result);
    
    return result;
  }
}
