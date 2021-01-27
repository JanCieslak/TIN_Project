import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { DeleteAuthorDto } from './dto/delete-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Controller('/author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  async getAuthors() {
    return await this.authorService.getAuthors();
  }

  @Post()
  async crateAuthor(@Body() author: CreateAuthorDto) {
    return await this.authorService.createAuthor(author);
  }
  
  @Delete()
  async deleteAuthor(@Body() author: DeleteAuthorDto) {
    return await this.authorService.deleteAuthor(author);
  }

  @Put()
  async updateAuthor(@Body() author: UpdateAuthorDto) {
    return await this.authorService.updateAuthor(author);
  }
}
