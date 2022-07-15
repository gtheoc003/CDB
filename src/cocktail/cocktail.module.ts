import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CocktailService } from './cocktail.service';
import { CocktailController } from './cocktail.controller';
import { Cocktail } from './entities/cocktail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cocktail])],
  controllers: [CocktailController],
  providers: [CocktailService],
})
export class CocktailModule {}
