import { Entity, ManyToOne, PrimaryGeneratedColumn, Column, JoinColumn } from 'typeorm';
import { UserEntity } from 'src/user/models/user.entity';

@Entity('cocktail')
export class Cocktail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'cocktail_id' })
  cocktailId: number;

  @Column('varchar', { length: 45, name: 'name' })
  cocktailName: string;

  //one user can have many cocktails
  @ManyToOne((type) => UserEntity, {
    cascade: true,
  })

  @JoinColumn({ name: 'user_id' })
  cocktail: Cocktail;
  //FOREIGN KEY COLUMN 'user_id'
  @Column('int', { name: 'user_id' })
  userId: number;

}
