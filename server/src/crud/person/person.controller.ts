import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { DeletePersonDto } from './dto/delete-person.dto';
import { PersonService } from './person.service';

@Controller('/person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  async getPeople() {
    return await this.personService.getPeople();
  }
  
  @Post()
  async createPerson(@Body() person: CreatePersonDto) {
    return await this.personService.createPerson(person);
  }
  
  @Delete()
  async deletePerson(@Body() person: DeletePersonDto) {
    return await this.personService.deletePerson(person);
  }
}