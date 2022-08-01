import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from '../ormconfig';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/models/user.entity';
import { Cocktail } from './cocktail/cocktail.entity';
import { CocktailModule } from './cocktail/cocktail.module';
import { AuthModule } from './auth/auth.module';
import { UserModuleMongo } from './collection/user/user.module';
import { MONGO_CONNECTION } from 'mongoconfig';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql' as any,
      driver: config.default.driver,
      host: config.default.host,
      port: Number(config.default.port),
      username: config.default.user,
      password: config.default.password,
      database: config.default.schema,
      entities: [UserEntity, Cocktail],
      synchronize: true,
      autoLoadEntities: true,
      dropSchema: false,
      keepConnectionAlive: true,
    }),
    AuthModule,
    UserModule,
    CocktailModule,
    MongooseModule.forRoot(MONGO_CONNECTION),
    UserModuleMongo,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
