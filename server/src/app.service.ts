import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Author } from './entities/author.entity';

@Injectable()
export class AppService {
  constructor(private readonly connection: Connection) {}

  async findAllAuthors(): Promise<Author[]> {
    // const queryRunner = this.connection.createQueryRunner();
    // await queryRunner.connect();

    // const authors = await queryRunner.manager.find(AuthorEntity);

    // await queryRunner.release();

    return this.connection.manager.find(Author);
  }
}
