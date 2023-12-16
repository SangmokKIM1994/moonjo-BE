import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
