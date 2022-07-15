import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity('cocktail')
export class Cocktail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'cocktail_id' })
  cocktailId: number;
  @ManyToOne((type) => User, (user) => user.cocktail, {})
  user: User;
}
