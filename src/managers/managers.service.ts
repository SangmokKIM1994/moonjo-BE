import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Managers } from "./managers.entity";
import { Repository } from "typeorm";

@Injectable()
export class ManagersService {
  constructor(
    @InjectRepository(Managers)
    private readonly managerRepository: Repository<Managers>
  ) {}
}
