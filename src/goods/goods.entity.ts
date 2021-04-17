import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GoodsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
