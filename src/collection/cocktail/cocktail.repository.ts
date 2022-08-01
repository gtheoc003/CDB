import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CocktailCreateDTO } from './dto/CocktailCreate.dto';
import { Cocktail, CocktailDocument } from './Cocktail.schema';

@Injectable()
export class CocktailRepository {
  constructor(
    @InjectModel(Cocktail.name) private cocktailModel: Model<CocktailDocument>,
  ) {}

  async create(cocktailCreateDto: CocktailCreateDTO): Promise<Cocktail> {
    // eslint-disable-next-line prefer-const
    let newCocktail = new this.cocktailModel(cocktailCreateDto);
    return await newCocktail.save();
  }

  async findAll() {
    return await this.cocktailModel.find().populate('userId');
  }
}
