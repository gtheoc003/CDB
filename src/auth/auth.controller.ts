import {
  Body,
  Controller,
  Get,
  Query,
  Post,
  Delete,
  Param,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth } from './auth.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
  async findAll(): Promise<Auth[]> {
    return await this.authService.findAll();
  }

  @Post()
  async create(@Body() auth: Auth): Promise<Auth> {
    return await this.authService.create(auth);
  }

  @Get(':Id')
  async findOne(@Param('Id') Id: number): Promise<Auth> {
    return await this.authService.findOne(Id);
  }

  @Delete(':deleteOne')
  async deleteOne(@Param() deleteOne: number): Promise<any> {
    return await this.authService.deleteOne(deleteOne);
  }
}