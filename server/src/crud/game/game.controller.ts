import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { DeleteGameDto } from './dto/delete-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { GameService } from './game.service';

@Controller('/game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  async getGames() {
    return await this.gameService.getGames();
  }

  @Post()
  async createGame(@Body() game: CreateGameDto) {
    return await this.gameService.createGame(game);
  }

  @Delete()
  async deleteGame(@Body() game: DeleteGameDto) {
    return await this.gameService.deleteGame(game);
  }

  @Put()
  async updateGame(@Body() game: UpdateGameDto) {
    return await this.gameService.updateGame(game);
  }
}
