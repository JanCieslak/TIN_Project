import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Author } from './entities/author.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  hello(): string {
    return 'Hi';
  }

  @Get("/authors")
  getAuthors(): Promise<Author[]> {
    return this.appService.findAllAuthors();
  }
}
