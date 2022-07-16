import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  //async findOne(Id: number): Promise<User> {
  //  return await this.userRepository.findOne({ where: { user_id: Id } });
  //}

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async updateOne(user_id: number, user: User): Promise<any> {
    return await this.userRepository.update(user_id, user);
  }

  async deleteOne(user_id: number): Promise<any> {
    return await this.userRepository.delete(user_id);
  }
}