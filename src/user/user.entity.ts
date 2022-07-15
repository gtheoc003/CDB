import { Auth } from 'src/auth/auth.entity';
import { Cocktail } from 'src/cocktail/cocktail.entity';
import {
  Column,
  Entity,
  OneToOne,
  OneToMany,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'user_id' })
  userId: number;

  @Column('varchar', { length: 155, name: 'first_name' })
  firstName: string;

  @Column('varchar', { length: 155, name: 'last_name' })
  lastName: string;

  @Column({ type: 'date', name: 'created_at' })
  dateTime: Date;
  //one user can only be connected to one auth
  @OneToOne(type => Auth, {
    nullable: false,
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'auth_auth_id' })
  auth: Auth;
  //FOREIGN KEY COLUMN 'auth_id'
  @Column('int', { name: 'auth_id' })
  authId: number;

  @OneToMany(() => Cocktail, (cocktail) => cocktail.user, {
    cascade: true,
  })
  cocktail: Cocktail[];
  //@JoinColumn({ name: 'user_user_id' })
  //cocktail: Cocktail;
  ////FOREIGN KEY COLUMN 'user_id'
  //@Column('int', { name: 'user_id' })
  //userId: number;
//
  //@OneToOne((type) => Userstatus, {
  //  nullable: false,
  //  cascade: true,
  //  onDelete: 'CASCADE',
  //})
  //@JoinColumn({ name: 'status' })
  //status: number;
  ////FOREIGN KEY COLUMN 'userStatus_id'
  //@Column('int', { name: 'userStatus_id' })
  //userStatusId: number;
}
