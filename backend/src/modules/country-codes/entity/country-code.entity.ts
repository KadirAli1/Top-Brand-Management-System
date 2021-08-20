import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CountryCode {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  code: string;
}
