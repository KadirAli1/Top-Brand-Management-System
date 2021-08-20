import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Brand } from '../../brands/entity/brand.entity';
import { CountryCode } from '../../country-codes/entity/country-code.entity';

@Entity()
export class RatingList {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  rating: number;

  @ManyToOne(() => CountryCode)
  countryCode: CountryCode;

  @ManyToOne(() => Brand)
  brand: Brand;
}
