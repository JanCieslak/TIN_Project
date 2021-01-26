import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Author } from './entities/author.entity';

@Injectable()
export class AppService {
  constructor(private readonly connection: Connection) {}
}
