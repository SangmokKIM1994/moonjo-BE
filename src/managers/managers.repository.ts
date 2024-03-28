import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Managers } from "./managers.entity";
import { Repository } from "typeorm";

export class managerRepository {
  constructor(
    @InjectRepository(Managers)
    private readonly managersRepository: Repository<Managers>
  ) {}
}
