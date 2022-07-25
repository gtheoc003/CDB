import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from 'src/user/models/user.entity';

@Entity('cocktail')
export class Cocktail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'cocktail_id' })
  cocktailId: number;
  //@ManyToOne((type) => UserEntity, (user) => user.cocktail, {})
  //user: UserEntity;
}
