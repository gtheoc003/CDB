import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(): Observable<User[]> {
    return from(this.userRepository.find());
  }

  //findOne(Id: number): Observable<User> {
  //  return from(this.userRepository.findOne({ where: { user_id: Id } }));
  //}

  create(user: User): Observable<User> {
    return from(this.userRepository.save(user));
  }

  updateOne(user_id: number, user: User): Observable<any> {
    return from(this.userRepository.update(user_id, user));
  }

  deleteOne(user_id: number): Observable<any> {
    return from(this.userRepository.delete(user_id));
  }
}
