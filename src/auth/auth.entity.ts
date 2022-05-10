import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('auth')
export class Auth {
  @PrimaryGeneratedColumn({ type: 'int', name: 'auth_id' })
  auth_id: number;

  @Column('varchar', { length: 155, name: 'email', default: 'null@you' })
  email: string;

  @Column('varchar', { length: 155, name: 'password', default: '12222' })
  password: string;
}