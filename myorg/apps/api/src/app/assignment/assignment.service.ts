import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Assignment } from './Assignment.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class AssignmentService {
  constructor(
    @InjectRepository(Assignment)
    private AssignmentRepository: Repository<Assignment>
  ) {}

  async findAll() {
    return await this.AssignmentRepository.find();
  }
  async create(Assignment: Assignment): Promise<Assignment> {
    return await this.AssignmentRepository.save(Assignment);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.AssignmentRepository.delete(id);
  }
}
