import { Body,
  Controller,
  Get,
  Query,
  Post,
  Delete,
  Param,
  Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return await this.userService.create(user);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return await this.userService.findOne(id);
  }

  @Put(':id')
  async updateOne(@Param('id') id: number, @Body() user: User): Promise<any> {
    return await this.userService.updateOne(Number(id), user);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number): Promise<any> {
    return await this.userService.deleteOne(id);
  }
}