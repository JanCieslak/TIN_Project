import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { Connection } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly connection: Connection) {}

  async getUsers() {
    return await this.connection.manager.query('SELECT * FROM user;');
  }

  async createUser(user: CreateUserDto) {
    console.log(user);
    const repo = this.connection.getRepository(User);
    await repo.save(user);
  }

  async deleteUser(user: DeleteUserDto) {
    const repo = this.connection.getRepository(User);
    await repo.delete({ id: user.id });
  }
}
