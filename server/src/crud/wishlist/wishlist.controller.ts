import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { DeleteWishlistDto } from './dto/delete-wishlist.dto';
import { WishlistService } from './wishlist.service';

@Controller('/wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Get()
  async getWishlists() {
    return await this.wishlistService.getWishlists();
  }

  @Post()
  async crateWishlist(@Body() wishlist: CreateWishlistDto) {
    return await this.wishlistService.createWishlist(wishlist);
  }

  @Delete()
  async deleteWishlist(@Body() wishlist: DeleteWishlistDto) {
    return await this.wishlistService.deleteWishlist(wishlist);
  }
}
