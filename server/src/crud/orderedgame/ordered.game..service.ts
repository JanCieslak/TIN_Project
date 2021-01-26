import { Injectable } from '@nestjs/common';
import { Order } from 'src/entities/order.entity';
import { OrderedGame } from 'src/entities/ordered.game.entity';
import { Connection } from 'typeorm';
import { CreateOrderedGameDto } from './dto/create-ordered-game.dto';
import { DeleteOrderedGameDto } from './dto/delete-ordered-game.dto';

@Injectable()
export class OrderedGameService {
  constructor(private readonly connection: Connection) {}

  async getOrderedGames() {
    return await this.connection.manager.query('SELECT * FROM ordered_game;');
  }

  async createOrderedGame(orderedGame: CreateOrderedGameDto) {
    const repo = this.connection.getRepository(OrderedGame);
    await repo.save(orderedGame);
  }

  async deleteOrderedGame(orderedGame: DeleteOrderedGameDto) {
    const repo = this.connection.getRepository(OrderedGame);
    await repo.delete({ id: orderedGame.id });
  }
}
