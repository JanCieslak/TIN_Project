import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers() {
    return await this.userService.getUsers();
  }

  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return await this.userService.createUser(user);
  }

  @Delete()
  async deleteUser(@Body() user: DeleteUserDto) {
    return await this.userService.deleteUser(user);
  }
}
