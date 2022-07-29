import { Cocktail } from 'src/cocktail/cocktail.entity';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToOne, OneToMany, JoinColumn, PrimaryGeneratedColumn,
} from 'typeorm';
import { UserRole } from './user.interface';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'user_id' })
  id: number;

  @Column('varchar', { length: 155, name: 'first_name' })
  firstName: string;

  @Column('varchar', { length: 155, name: 'last_name' })
  lastName: string;

  @Column('varchar', { unique: true, length: 155, name: 'email' })
  email: string;

  @Column('varchar', { select: false, length: 155, name: 'password' })
  password: string;

  @Column('varchar', { length: 155, name: 'role' })
  role: UserRole;

  @BeforeInsert()
  @BeforeUpdate()
  emailToLowerCase() {
    this.email = this.email.toLowerCase();
  }

  //one user can only be connected to one auth
  //@OneToOne(type => AuthEntity, {
  //  nullable: false,
  //  cascade: true,
  //  onDelete: 'CASCADE',
  //})
  //@JoinColumn({ name: 'auth_auth_id' })
  //auth: AuthEntity;
  ////FOREIGN KEY COLUMN 'auth_id'
  //@Column('int', { name: 'auth_id' })
  //authId: number;

  ////@OneToOne((type) => Userstatus, {
  ////  nullable: false,
  ////  cascade: true,
  ////  onDelete: 'CASCADE',
  ////})
  ////@JoinColumn({ name: 'status' })
  ////status: number;
  //////FOREIGN KEY COLUMN 'userStatus_id'
  ////@Column('int', { name: 'userStatus_id' })
  ////userStatusId: number;
}
