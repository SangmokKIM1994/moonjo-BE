import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcrypt";
import { InternalServerErrorException } from "@nestjs/common";

@Entity()
export class Managers {
  @PrimaryGeneratedColumn()
  mamangerId: number;

  @Column()
  name: string;

  @Column()
  id: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    try {
      const hashKey = process.env.HASHKEY;
      this.password = await bcrypt.hash(this.password, Number(hashKey));
    } catch (error) {
      throw new InternalServerErrorException(
        "비밀번호 암호화에 문제가 생겼습니다."
      );
    }
  }

  @Column()
  email: string;
}
