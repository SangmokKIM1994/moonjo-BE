import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FirstCategories {
  @PrimaryGeneratedColumn()
  firstCategoryId: number;

  @Column()
  firstCategoryName: string;
}
