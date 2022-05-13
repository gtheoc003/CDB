import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
//import { User } from 'src/user/user.entity';
import {
  InsertValuesMissingError,
  Repository,
  DeleteResult,
  FindConditions,
  ObjectID,
} from 'typeorm';
import { Auth } from './auth.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
  ) {}

  async findAll(): Promise<Auth[]> {
    return await this.authRepository.find();
  }

  async findOne(Id: number): Promise<Auth> {
    return await this.authRepository.findOne({ where: { auth_id: Id } });
  }

  async create(auth: Auth): Promise<Auth> {
    return await this.authRepository.save(auth);
  }

  async updateOne(auth_id: number, auth: Auth): Promise<any> {
    return await this.authRepository.update(auth_id, auth);
  }

  async deleteOne(auth_id: number): Promise<any> {
    return await this.authRepository.delete(auth_id);
  }
}
