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
import { from, Observable } from 'rxjs';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
  findAll(): Observable<Auth[]> {
    return from(this.authService.findAll());
  }

  @Post()
  create(@Body() auth: Auth): Observable<Auth> {
    return from(this.authService.create(auth));
  }

  @Get(':id')
  findOne(@Param('id') id: number): Observable<Auth> {
    return from(this.authService.findOne(id));
  }

  @Put(':id')
  updateOne(@Param('id') id: number, @Body() auth: Auth): Observable<any> {
    return from(this.authService.updateOne(Number(id), auth));
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number): Observable<any> {
    return from(this.authService.deleteOne(id));
  }
}
