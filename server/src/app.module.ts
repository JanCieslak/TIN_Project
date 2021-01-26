import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorService } from './crud/author/author.service';
import { GameService } from './crud/game/game.service';
import { OrderService } from './crud/order/order.service';
import { OrderedGameService } from './crud/orderedgame/ordered.game..service';
import { PersonService } from './crud/person/person.service';
import { UserService } from './crud/user/user.service';
import { WishlistService } from './crud/wishlist/wishlist.service';
import { OrderedGameController } from './crud/orderedgame/ordered.game.controller';
import { WishlistController } from './crud/wishlist/wishlist.controller';
import { AuthorController } from './crud/author/author.controller';
import { GameController } from './crud/game/game.controller';
import { OrderController } from './crud/order/order.controller';
import { PersonController } from './crud/person/person.controller';
import { UserController } from './crud/user/user.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'toor',
      database: 'tindb',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      insecureAuth: true,
    })
  ],
  controllers: [AppController, AuthorController, GameController, OrderController, OrderedGameController, PersonController, UserController, WishlistController],
  providers: [AppService, AuthorService, GameService, OrderService, OrderedGameService, PersonService, UserService, WishlistService],
})
export class AppModule {}
