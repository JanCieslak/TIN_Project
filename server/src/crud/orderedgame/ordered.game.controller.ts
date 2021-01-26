import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateOrderedGameDto } from './dto/create-ordered-game.dto';
import { DeleteOrderedGameDto } from './dto/delete-ordered-game.dto';
import { OrderedGameService } from './ordered.game..service';

@Controller('orderedGame')
export class OrderedGameController {
  constructor(private readonly orderedGameService: OrderedGameService) {}

  @Get()
  async getOrderedGames() {
    return await this.orderedGameService.getOrderedGames();
  }

  @Post()
  async createOrderedGame(@Body() orderedGame: CreateOrderedGameDto) {
    return await this.orderedGameService.createOrderedGame(orderedGame);
  }

  @Delete()
  async deleteOrder(@Body() orderedGame: DeleteOrderedGameDto) {
    return await this.orderedGameService.deleteOrderedGame(orderedGame);
  }
}
