import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './person.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>
  ) {}

  async findAll() {
    return await this.personRepository.find();
  }
  async create(group: Person): Promise<Person> {
    return await this.personRepository.save(group);
  }

//   async update(department: Group): Promise<UpdateResult> {
//     return await this.groupRepository.update(
//       department.idDepartment,
//       department
//     );
//   }

//   async delete(id): Promise<DeleteResult> {
//     return await this.groupRepository.delete(id);
//   }
}
