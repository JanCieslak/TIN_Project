import { Injectable } from '@nestjs/common';
import { Game } from 'src/entities/game.entity';
import { Order } from 'src/entities/order.entity';
import { OrderedGame } from 'src/entities/ordered.game.entity';
import { Person } from 'src/entities/person.entity';
import { Connection } from 'typeorm';
import { CreateOrderedGameDto } from './dto/create-ordered-game.dto';
import { DeleteOrderedGameDto } from './dto/delete-ordered-game.dto';
import { UpdateOrderedGameDto } from './dto/update-ordered-game.dto';

@Injectable()
export class OrderedGameService {
  constructor(private readonly connection: Connection) {}

  async getOrderedGames() {
    return await this.connection.manager.query('SELECT * FROM orderedGame;');
  }

  async createOrderedGame(orderedGameDto: CreateOrderedGameDto) {
    const orderedGameRepo = this.connection.getRepository(OrderedGame);
    const gameRepo = this.connection.getRepository(Game);
    const orderRepo = this.connection.getRepository(Order);

    const game = await gameRepo.findOne(orderedGameDto.gameId);
    const order = await orderRepo.findOne(orderedGameDto.orderId);

    await orderedGameRepo.save({ amount: orderedGameDto.amount, game: game, order: order });
  }

  async deleteOrderedGame(orderedGameDto: DeleteOrderedGameDto) {
    const repo = this.connection.getRepository(OrderedGame);
    await repo.delete({ id: orderedGameDto.id });
  }

  async updateOrderedGame(orderedGameDto: UpdateOrderedGameDto) {
    const orderedGameRepo = this.connection.getRepository(OrderedGame);
    const orderRepo = this.connection.getRepository(Order);
    const gameRepo = this.connection.getRepository(Game);

    const orderedGame = await orderedGameRepo.findOne(orderedGameDto.orderedGameId);
    const order = await orderRepo.findOne(orderedGameDto.orderId);
    const game = await gameRepo.findOne(orderedGameDto.gameId);

    orderedGame.amount = orderedGameDto.amount;
    orderedGame.order = order;
    orderedGame.game = game;

    await orderedGameRepo.save(orderedGame);
  }
}
