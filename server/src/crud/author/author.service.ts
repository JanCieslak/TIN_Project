import { Injectable } from '@nestjs/common';
import { Author } from 'src/entities/author.entity';
import { Connection } from 'typeorm';
import { CreateAuthorDto } from './dto/create-author.dto';
import { DeleteAuthorDto } from './dto/delete-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorService {
  constructor(private readonly connection: Connection) {}

  async getAuthors() {
    return await this.connection.manager.query('SELECT * FROM author;');
  }

  async createAuthor(authorDto: CreateAuthorDto) {
    const repo = this.connection.getRepository(Author);
    await repo.save(authorDto);
  }

  async deleteAuthor(authorDto: DeleteAuthorDto) {
    const repo = this.connection.getRepository(Author);
    await repo.delete({ id: authorDto.id });
  }

  async updateAuthor(authorDto: UpdateAuthorDto) {
    const repo = this.connection.getRepository(Author);
    const author = await repo.findOne(authorDto.authorId);

    author.companyName = authorDto.companyName;
    author.foundedIn = authorDto.foundedIn;
    
    await repo.save(author);
  }
}
