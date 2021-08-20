import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  // @MaxLength(64)
  // @IsAlphanumeric()
  name: string;

  @Column()
  // @MaxLength(255)
  description: string;
}
