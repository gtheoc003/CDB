import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { CocktailService } from 'src/collection/cocktail/cocktail.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private cocktailService: CocktailService,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async insertUser(user: any) {
    const newUser = new this.userModel({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    });
    const result = await newUser.save();
    return result;
  }

  //parameterised data insertion in the db
  async seedingManyUsers(userArr: any[]) {
    userArr.forEach(async (user) => {
      const newUser = new this.userModel({
        userId: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      });
      const result = await newUser.save();
    });
    return `Successfully added an array of users!`;
  }

}
