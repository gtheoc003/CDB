import { Body, HttpCode, Controller, Get, Post, Delete, Param, Put, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './models/dto/CreateUser.dto';
import { LoginUserDto } from './models/dto/LoginUser.dto';
import { UserService } from './user.service';
import { UserI, UserRole } from './models/user.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserIsUserGuard } from 'src/auth/guards/UserIsUser';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { hasRoles } from 'src/auth/decorators/roles.decorator';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // Rest Call: POST http://localhost:3000/users'/
  @Post('create')
  create(@Body() createdUserDto: CreateUserDto): Observable<UserI> {
    return this.userService.create(createdUserDto);
  }

  // Rest Call: POST http://localhost:3000/user/login
  @Post('login')
  @HttpCode(200)
  login(@Body() loginUserDto: LoginUserDto): Observable<Object> {
    return this.userService.login(loginUserDto).pipe(
      map((jwt: string) => {
        return {
          access_token: jwt,
          token_type: 'JWT',
          expires_in: 10000,
        }
      })
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number): Observable<UserI> {
    return from(this.userService.findOne(id));
  }

  @UseGuards(JwtAuthGuard, UserIsUserGuard)
  @Put(':id')
  updateOne(@Param('id') id: number, @Body() user: UserI): Observable<UserI> {
    return from(this.userService.updateOne(Number(id), user));
  }

  @hasRoles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put(':id/role')
  // eslint-disable-next-line prettier/prettier
  updateRoleOfUser(@Param('id') id: number, @Body() user: UserI): Observable<UserI> {
    return this.userService.updateRoleOfUser(Number(id), user);
  }

  @UseGuards(JwtAuthGuard) //checking if there is a valid jwt in our request
  @Get()
  findAll(): Observable<UserI[]> {
    return from(this.userService.findAll());
  }

  @hasRoles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  deleteOne(@Param('id') id: number): Observable<any> {
    return from(this.userService.deleteOne(id));
  }
}
