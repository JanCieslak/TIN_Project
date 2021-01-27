import { Injectable } from '@nestjs/common';
import { Author } from 'src/entities/author.entity';
import { Game } from 'src/entities/game.entity';
import { Connection } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { DeleteGameDto } from './dto/delete-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GameService {
  constructor(private readonly connection: Connection) {}

  async getGames() {
    return await this.connection.manager.query('SELECT * FROM game;');
  }

  async createGame(gameDto: CreateGameDto) {
    const gameRepo = this.connection.getRepository(Game);
    const authorRepo = this.connection.getRepository(Author);

    const author = await authorRepo.findOne(gameDto.authorId);
    await gameRepo.save({ title: gameDto.title, price: gameDto.price, author: author });
  }

  async deleteGame(gameDto: DeleteGameDto) {
    const repo = this.connection.getRepository(Game);
    await repo.delete({ id: gameDto.id });
  }

  async updateGame(gameDto: UpdateGameDto) {
    const gameRepo = this.connection.getRepository(Game);
    const game = await gameRepo.findOne(gameDto.gameId);

    game.title = gameDto.title;
    game.price = gameDto.price;
    
    if (gameDto.authorId !== null) {
      const authorRepo = this.connection.getRepository(Author);
      const author = await authorRepo.findOne(gameDto.authorId);
      game.author = author;
    }
    
    await gameRepo.save(game);
  }
}
