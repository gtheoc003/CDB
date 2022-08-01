import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User, UserSchema } from './user.schema';
// eslint-disable-next-line prettier/prettier
import { Cocktail, CocktailSchema } from 'src/collection/cocktail/cocktail.schema';
import { CocktailService } from 'src/collection/cocktail/cocktail.service';
import { CocktailController } from 'src/collection/cocktail/cocktail.controller';
import { CocktailRepository } from 'src/collection/cocktail/cocktail.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema, collection: 'users' },
      { name: Cocktail.name, schema: CocktailSchema, collection: 'cocktails' },
    ]),
  ],
  controllers: [UserController, CocktailController],
  providers: [UserService, CocktailRepository, CocktailService],
})
export class UserModuleMongo {}
