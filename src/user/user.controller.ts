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
import { from, Observable } from 'rxjs';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll(): Observable<User[]> {
    return from(this.userService.findAll());
  }

  @Post()
  create(@Body() user: User): Observable<User> {
    return from(this.userService.create(user));
  }

  //@Get(':id')
  //findOne(@Param('id') id: number): Observable<User> {
  //  return from(this.userService.findOne(id));
  //}

  @Put(':id')
  updateOne(@Param('id') id: number, @Body() user: User): Observable<any> {
    return from(this.userService.updateOne(Number(id), user));
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number): Observable<any> {
    return from(this.userService.deleteOne(id));
  }
}
