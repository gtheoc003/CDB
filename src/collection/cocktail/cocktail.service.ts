import { Injectable } from '@nestjs/common';
import { Cocktail } from './cocktail.schema';
import { CocktailCreateDTO } from './dto/CocktailCreate.dto';
import { CocktailRepository } from './cocktail.repository';

@Injectable()
export class CocktailService {
  constructor(private cocktailRepository: CocktailRepository) {}
  async create(cocktailCreateDTO: CocktailCreateDTO): Promise<Cocktail> {
    return await this.cocktailRepository.create(cocktailCreateDTO);
  }
  async getAll(): Promise<Cocktail[]> {
    return await this.cocktailRepository.findAll();
  }
}
