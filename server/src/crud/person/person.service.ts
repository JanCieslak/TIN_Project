import { Injectable } from '@nestjs/common';
import { Person } from 'src/entities/person.entity';
import { Connection } from 'typeorm';
import { CreatePersonDto } from './dto/create-person.dto';
import { DeletePersonDto } from './dto/delete-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonService {
  constructor(private readonly connection: Connection) {}

  async getPeople() {
    return await this.connection.manager.query('SELECT * FROM person;');
  }

  async createPerson(personDto: CreatePersonDto) {
    const repo = this.connection.getRepository(Person);
    await repo.save(personDto);
  }

  async deletePerson(personDto: DeletePersonDto) {
    const repo = this.connection.getRepository(Person);
    await repo.delete({ id: personDto.id });
  }

  async updatePerson(personDto: UpdatePersonDto) {
    const repo = this.connection.getRepository(Person);
    const person = await repo.findOne(personDto.personId);

    person.firstname = personDto.firstname;
    person.lastname = personDto.lastname;
    person.email = personDto.email;

    await repo.save(person);
  }
}
