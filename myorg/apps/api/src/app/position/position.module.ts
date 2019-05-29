import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Position } from "./position.entity";
import { PositionService } from "./position.service";
import { PositionController } from "./position.controller";

@Module({
        imports:[TypeOrmModule.forFeature([Position])],
        providers:[PositionService],
        controllers:[PositionController],
})
export class PositionModule{}