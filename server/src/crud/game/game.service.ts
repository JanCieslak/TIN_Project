import { Injectable } from '@nestjs/common';
import { Game } from 'src/entities/game.entity';
import { Connection } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { DeleteGameDto } from './dto/delete-game.dto';

@Injectable()
export class GameService {
  constructor(private readonly connection: Connection) {}

  async getGames() {
    return await this.connection.manager.query('SELECT * FROM game;');
  }

  async createGame(game: CreateGameDto) {
    const repo = this.connection.getRepository(Game);
    await repo.save(game);
  }

  async deleteGame(game: DeleteGameDto) {
    const repo = this.connection.getRepository(Game);
    await repo.delete({ id: game.id });
  }
}
