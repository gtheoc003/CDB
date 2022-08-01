import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './user.schema';
import { UserService } from './user.service';
import * as userArrayConstants from './user.json';

@Controller('usersMongo')
export class UserController {
  constructor(private userService: UserService) {}

  //get method that automatically populates the Db
  @Get('Seeding')
  async populateDatabase(): Promise<any> {
    await this.userService.seedingManyUsers(userArrayConstants);
    return 'Successfully seeded the user collection!';
  }

  @Get('Users')
  async getAllUsers(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Post('')
  async createNewUser(@Body() userInput: any): Promise<any> {
    return await this.userService.insertUser(userInput);
  }
}
