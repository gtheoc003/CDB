import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from '../user/user.schema';

export type CocktailDocument = Cocktail & Document;

@Schema()
export class Cocktail {
  @Prop({ required: true })
  cocktailName: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User;
}

export const CocktailSchema = SchemaFactory.createForClass(Cocktail);
