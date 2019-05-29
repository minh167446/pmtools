import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>
  ) {}

  async findAll() {
    return await this.employeeRepository.find();
  }
  async findId(id) {
    return await this.employeeRepository.findOne(id);
  }
  async create(Employee: Employee): Promise<Employee> {
    return await this.employeeRepository.save(Employee);
  }
  async update(Employee: Employee): Promise<UpdateResult> {
    return await this.employeeRepository.update(Employee.idEmployee, Employee);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.employeeRepository.delete(id);
  }
}
