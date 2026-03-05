import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: 255, unique: true})
  name: string;

  @Column({ type: 'integer', nullable: true })
  price: number | null;
}
