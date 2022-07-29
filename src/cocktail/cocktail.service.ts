import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cocktail } from './cocktail.entity';
import { Repository } from 'typeorm';
import { Observable, from } from 'rxjs';

@Injectable()
export class CocktailService {
  constructor (
    @InjectRepository(Cocktail)
    private cocktailRepository: Repository<Cocktail>
  ) {}

  create(cocktail: Cocktail): Observable<Cocktail> {
    return from(this.cocktailRepository.save(cocktail));
  }

  findAll(): Observable<Cocktail[]> { 
    return from(this.cocktailRepository.find());
  }

  findOne(id: number) {
    return `This action returns a #${id} cocktail`;
  }

  update(id: number) {
    return `This action updates a #${id} cocktail`;
  }

  remove(id: number) {
    return `This action removes a #${id} cocktail`;
  }
}
