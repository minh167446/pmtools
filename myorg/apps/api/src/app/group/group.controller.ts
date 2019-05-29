import { Body,Controller,HttpException,HttpStatus,Post,UsePipes, UseInterceptors, UseFilters, BadRequestException } from '@nestjs/common';
import { CreateGroupDto } from '../group/create-group.dto';
import { Group } from './group.entity';
import { GroupService } from './group.service';
import { ValidationPipe } from '../../validation.pipe';
import { NotFoundInterceptor, EntityNotFoundError } from './group.interceptor';
import { HttpErrorFilter } from '../../http-error.filter';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post('get/many')
  @UseInterceptors(NotFoundInterceptor)
  async index(@Body() body: any[]): Promise<Group[]> {
    try {
      return await this.groupService.findAll(body);
    } catch (error) {
      throw new EntityNotFoundError();
    }
  }

  @Post('get/one')
  @UseInterceptors(NotFoundInterceptor)
  async findOne(@Body() body: any): Promise<Group> {
    try {
      return await this.groupService.findOne(body);
    } catch (error) {
      throw new EntityNotFoundError();
    }
  }

  @Post('post')
  @UsePipes(new ValidationPipe())
  @UseFilters(new HttpErrorFilter())  
  async insert(@Body() createGroupDto: CreateGroupDto): Promise<Group> {
    const newGroup = Object.assign(createGroupDto);
    console.log('Insert #' + newGroup.code);

    const result = await this.groupService.create(newGroup);
    if (result === true) {
      throw new HttpException(
        {
          status: HttpStatus.OK,
          message: 'Create Successful!'
        },
        200
      );
    } else {
      throw new HttpErrorFilter();
    }
  }

  @Post('put')
  @UsePipes(new ValidationPipe())
  @UseFilters(new HttpErrorFilter())
  async update(@Body() createGroupDto: CreateGroupDto): Promise<any> {
    console.log('Update #' + createGroupDto.code);

    const result = await this.groupService.update(createGroupDto);
    if (result === true) {
      throw new HttpException(
        {
          status: HttpStatus.OK,
          message: 'Update Successful!'
        },
        200
      );
    } else {
      throw new HttpErrorFilter();
    }
  }

  @Post('delete/one')
  @UseInterceptors(NotFoundInterceptor)
  async deleteone(@Body() body: any): Promise<any> {
    const result = await this.groupService.deleteOne(body);
    if (result === true) {
      throw new HttpException(
        {
          status: HttpStatus.OK,
          message: 'Delete Successful!'
        },
        200
      );
    } else {
      throw new EntityNotFoundError();
    }
  }

  @Post('delete/many')
  @UseFilters(new HttpErrorFilter())
  async deletemany(@Body() body: any[]): Promise<any[]> {
    const result = await this.groupService.deleteMany(body);
    if (result === true) {
      throw new HttpException(
        {
          status: HttpStatus.OK,
          message: 'Selected record delete Successful!'
        },
        200
      );
    } else {
      throw new HttpErrorFilter();
    }
  }
}
