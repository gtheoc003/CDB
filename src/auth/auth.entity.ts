import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('auth')
export class Auth {
  @PrimaryGeneratedColumn({ type: 'int', name: 'auth_id' })
  auth_id: number;

  @Column('varchar', { length: 155, name: 'email', unique: true })
  email: string;

  @Column('varchar', { length: 155, name: 'password' })
  password: string;
}