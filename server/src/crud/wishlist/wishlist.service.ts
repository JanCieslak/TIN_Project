import { Injectable } from '@nestjs/common';
import { Game } from 'src/entities/game.entity';
import { Person } from 'src/entities/person.entity';
import { Wishlist } from 'src/entities/wishlist.entity';
import { Connection } from 'typeorm';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { DeleteWishlistDto } from './dto/delete-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';

@Injectable()
export class WishlistService {
  constructor(private readonly connection: Connection) {}

  async getWishlists() {
    return await this.connection.manager.query('SELECT * FROM wishlist;');
  }

  async createWishlist(wishlistDto: CreateWishlistDto) {
    const wishlistRepo = this.connection.getRepository(Wishlist);
    const personRepo = this.connection.getRepository(Wishlist);
    const gameRepo = this.connection.getRepository(Wishlist);

    const game = await gameRepo.findOne(wishlistDto.gameId);
    const person = await personRepo.findOne(wishlistDto.personId);

    await wishlistRepo.save({ game: game, person: person });
  }

  async deleteWishlist(wishlistDto: DeleteWishlistDto) {
    const repo = this.connection.getRepository(Wishlist);
    await repo.delete({ id: wishlistDto.id });
  }

  async updateWishlist(wishlistDto: UpdateWishlistDto) {
    const wishlistRepo = this.connection.getRepository(Wishlist);
    const personRepo = this.connection.getRepository(Person);
    const gameRepo = this.connection.getRepository(Game);

    const wishlist = await wishlistRepo.findOne(wishlistDto.wishlistId);
    const game = await gameRepo.findOne(wishlistDto.gameId);
    const person = await personRepo.findOne(wishlistDto.personId);

    wishlist.game = game;
    wishlist.person = person;

    await wishlistRepo.save(wishlist);
  }
}
