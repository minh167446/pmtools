import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Assignment } from "./assignment.entity";
import { AssignmentService } from "./assignment.service";
import { assignmentController } from "./assignment.controller";

@Module({
        imports:[TypeOrmModule.forFeature([Assignment])],
        providers:[AssignmentService],
        controllers:[assignmentController],
})
export class AssignmentModule{}