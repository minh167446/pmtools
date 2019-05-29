import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './department.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>
  ) {}

  async findAll() {
    return await this.departmentRepository.find();
  }
  async create(department: Department): Promise<Department> {
    return await this.departmentRepository.save(department);
  }
  async update(department: Department): Promise<UpdateResult> {
    return await this.departmentRepository.update(
      department.idDepartment,
      department
    );
  }

  async delete(id): Promise<DeleteResult> {
    return await this.departmentRepository.delete(id);
  }
}
