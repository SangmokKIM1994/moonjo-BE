import { Managers } from "src/managers/managers.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class FirstCategories {
  @PrimaryGeneratedColumn()
  firstCategoryId: number;

  @Column()
  firstCategoryName: string;

  @ManyToOne(() => Managers, (manager) => manager.firstCategory)
  @JoinColumn({ name: "managerId" })
  manager: Managers;

  @Column()
  managerId: number;
}
