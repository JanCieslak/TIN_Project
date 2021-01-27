import { Injectable } from '@nestjs/common';
import { Person } from 'src/entities/person.entity';
import { User } from 'src/entities/user.entity';
import { Connection } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly connection: Connection) {}

  async getUsers() {
    return await this.connection.manager.query('SELECT * FROM user;');
  }

  async createUser(userDto: CreateUserDto) {
    const userRepo = this.connection.getRepository(User);
    const personRepo = this.connection.getRepository(Person);

    const person = await personRepo.findOne(userDto.personId);

    await userRepo.save({ username: userDto.username, password: userDto.password, person: person });
  }

  async deleteUser(userDto: DeleteUserDto) {
    const repo = this.connection.getRepository(User);
    await repo.delete({ id: userDto.id });
  }

  async updateUser(userDto: UpdateUserDto) {
    const userRepo = this.connection.getRepository(User);
    const user = await userRepo.findOne(userDto.userId);
    
    user.username = userDto.username;
    user.password = userDto.password;

    if (userDto.personId !== null) {
      const personRepo = this.connection.getRepository(Person);
      const person = await personRepo.findOne(userDto.personId);
      user.person = person;
    }

    await userRepo.save(user);
  }
}
