/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable, switchMap } from 'rxjs';
import { Repository } from 'typeorm';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from 'src/auth/auth.service';
import { UserI } from './models/user.interface';
import { UserEntity } from './models/user.entity';
import { CreateUserDto } from './models/dto/CreateUser.dto';
import { LoginUserDto } from './models/dto/LoginUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private authService: AuthService,
  ) {}

  create(createdUserDto: CreateUserDto): Observable<UserI> {
    return this.mailExists(createdUserDto.email.toLowerCase()).pipe(
      switchMap((exists: boolean) => {
        if (!exists) {
          return this.authService.hashPassword(createdUserDto.password).pipe(
            switchMap((passwordHash: string) => {
              //overwrite the user password with the hash and store it to the db
              createdUserDto.password = passwordHash;
              return from(this.userRepository.save(createdUserDto)).pipe(
              // return the user object without the password
                map((savedUser: UserI) => {
                  // return all the remaining properties
                  const { password, ...user } = savedUser;
                  return user;
                })
              )
            })
          )
        } else {
            throw new HttpException('Email already in use', HttpStatus.CONFLICT);
        }
      })
    )
  }

  login(loginUserDto: LoginUserDto): Observable<string> {
    return this.findUserByEmail(loginUserDto.email.toLowerCase()).pipe(
      switchMap((user: UserI) => {
        if (user) {
          return this.validatePassword(loginUserDto.password, user.password).pipe(
            switchMap((passwordsMatches: boolean) => {
              if (passwordsMatches) {
                return this.findOne(user.id).pipe(
                  switchMap((user: UserI) => this.authService.generateJwt(user))
                )
              } else {
                throw new HttpException('Login was not Successfulll', HttpStatus.UNAUTHORIZED);
              }
            })
          )
        } else {
          throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
      }
      )
    )
  }

  findAll(): Observable<UserI[]> {
    return from(this.userRepository.find());
  }

  findOne(id: number): Observable<UserI> {
    return from(this.userRepository.findOne({ where: { id: id } }));
  }

  updateOne(id: number, user: UserI): Observable<UserI> {
    delete user.email;
    delete user.password;
    return from(this.userRepository.update(id, user)).pipe(
      switchMap(() => this.findOne(id)),
    );
  }

  deleteOne(id: number): Observable<any> {
    return from(this.userRepository.delete(id));
  }

  private findUserByEmail(email: string): Observable<UserI> {
    // eslint-disable-next-line prettier/prettier
    return from(this.userRepository.findOne({ where: { email: email }, select: ['id', 'firstName', 'lastName', 'email', 'password'] }));
  }

  // eslint-disable-next-line prettier/prettier
  private validatePassword(password: string, storedPasswordHash: string): Observable<boolean> {
    return this.authService.comparePasswords(password, storedPasswordHash);
  }

  private mailExists(email: string): Observable<boolean> {
    email = email.toLowerCase();
    return from(this.userRepository.findOne({ where: { email: email } })).pipe(
      map((user: UserI) => {
        if (user) {
          return true;
        } else {
          return false;
        }
      })
    )
  }
}
