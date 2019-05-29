import { Module } from '@nestjs/common';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';

@Module({
    // imports:[TypeOrmModule.forFeature([Group])],
    providers:[GroupService],
    controllers:[GroupController],
})
export class GroupModule{}