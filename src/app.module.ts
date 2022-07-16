import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from '../ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { Cocktail } from './cocktail/cocktail.entity';
//import { CocktailModule } from './cocktail/cocktail.module';
import { Auth } from './auth/auth.entity';
import { AuthModule } from './auth/auth.module';
import { UserStatusModule } from './user-status/user-status.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql' as any,
      driver: config.default.driver,
      host: config.default.host,
      port: Number(config.default.port),
      username: config.default.user,
      password: config.default.password,
      database: config.default.schema,
      entities: [Auth, User, Cocktail],
      synchronize: true,
      autoLoadEntities: true,
      dropSchema: false,
      keepConnectionAlive: true,
    }),
    AuthModule,
    UserModule,
    //CocktailModule,
    UserStatusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
