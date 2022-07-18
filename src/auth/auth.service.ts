import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from './auth.entity';
import { Observable, from } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
  ) {}

  findAll(): Observable<Auth[]> {
    return from(this.authRepository.find());
  }

  findOne(Id: number): Observable<Auth> {
    return from(this.authRepository.findOne({ where: { auth_id: Id } }));
  }

  create(auth: Auth): Observable<Auth> {
    return from(this.authRepository.save(auth));
  }

  updateOne(auth_id: number, auth: Auth): Observable<any> {
    return from(this.authRepository.update(auth_id, auth));
  }

  deleteOne(auth_id: number): Observable<any> {
    return from(this.authRepository.delete(auth_id));
  }
}
