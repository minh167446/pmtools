import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Position } from "./position.entity";
import { Repository, UpdateResult, DeleteResult } from "typeorm";

@Injectable()
export class PositionService{
    constructor(
        @InjectRepository(Position)
        private  positionRepository: Repository<Position>,

    ){}

    async  findAll(){
        return await this.positionRepository.find();
    }
    async  create(position: Position): Promise<Position> {
        return await this.positionRepository.save(position);
    }
    async update(position: Position): Promise<UpdateResult> {
        return await this.positionRepository.update(position.idPosition, position);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.positionRepository.delete(id);
    }
}