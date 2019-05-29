    
// import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
// import { GroupService } from './group.service';
// import { Injectable } from '@nestjs/common';
// import { Repository } from 'typeorm';
// import { Group } from './group.entity';

// @ValidatorConstraint({ name: 'isGroupAlreadyExist', async: true })
// @Injectable()
// export class IsCodeAlreadyExist implements ValidatorConstraintInterface {
//     constructor(protected readonly groupService: GroupService,
//         private groupRepository: Repository<Group>) {}

// 	async validate(text: string) {
// 		const user = await this.groupRepository.findOne({
//             name: text
//         });
// 		return !user;
// 	}
// }