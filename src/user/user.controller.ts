import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('users')
  async getAllUsers(): Promise<User[]> {
    return await this.userService.findAll();
  }
}