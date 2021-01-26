import { Injectable } from '@nestjs/common';
import { Wishlist } from 'src/entities/wishlist.entity';
import { Connection } from 'typeorm';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { DeleteWishlistDto } from './dto/delete-wishlist.dto';

@Injectable()
export class WishlistService {
  constructor(private readonly connection: Connection) {}

  async getWishlists() {
    return await this.connection.manager.query('SELECT * FROM wishlist;');
  }

  async createWishlist(wishlist: CreateWishlistDto) {
    const repo = this.connection.getRepository(Wishlist);
    await repo.save(wishlist);
  }

  async deleteWishlist(wishlist: DeleteWishlistDto) {
    const repo = this.connection.getRepository(Wishlist);
    await repo.delete({ id: wishlist.id });
  }
}
