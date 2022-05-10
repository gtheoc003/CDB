import { Auth } from 'src/auth/auth.entity';
import {
  Column,
  Entity,
  OneToOne,
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

  //@OneToOne((type) => Auth, {
  //  nullable: false,
  //  cascade: true,
  //  onDelete: 'CASCADE',
  //})
  //@JoinColumn({ name: 'auth_auth_id' })
  //auth: Auth;

  //@OneToOne((type) => userstatus, {
  //  nullable: false,
  //  cascade: true,
  //  onDelete: 'CASCADE',
  //})
  //@JoinColumn({ name: 'status' })
  //status: status;
}
