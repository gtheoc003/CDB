import {
  Body,
  Controller,
  Get,
  Query,
  Post,
  Delete,
  Param,
  Put,
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

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Auth> {
    return await this.authService.findOne(id);
  }

  @Put(':id')
  async updateOne(@Param('id') id: number, @Body() auth: Auth): Promise<any> {
    return await this.authService.updateOne(Number(id), auth);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number): Promise<any> {
    return await this.authService.deleteOne(id);
  }
}