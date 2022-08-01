import { Body, Controller, Get, Post } from '@nestjs/common';
import { Cocktail } from './cocktail.schema';
import { CocktailService } from './cocktail.service';
import { CocktailCreateDTO } from './dto/CocktailCreate.dto';

@Controller('cocktailsMongo')
export class CocktailController {
  constructor(private cocktailService: CocktailService) {}

  @Post()
  async create(
    @Body() cocktailCreateDto: CocktailCreateDTO,
  ): Promise<Cocktail> {
    let ret = await this.cocktailService.create(cocktailCreateDto);
    return ret;
  }

  @Get('Cocktails')
  async getAll(): Promise<Cocktail[]> {
    return await this.cocktailService.getAll();
  }
}
