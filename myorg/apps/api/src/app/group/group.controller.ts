import { Body,Controller,HttpException,HttpStatus,Post,UsePipes } from '@nestjs/common';
import { CreateGroupDto } from '../group/create-group.dto';
import { Group } from './group.entity';
import { GroupService } from './group.service';
import { ValidationPipe } from '../../validation.pipe';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post('get/many')
  async index(@Body() body: any[]): Promise<Group[]> {
    try {
      return await this.groupService.findAll(body);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Error!'
        },
        500
      );
    }
  }

  @Post('get/one')
  async findOne(@Body() body: any) {
    try {
      return await this.groupService.findOne(body);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          message: 'Not Found!'
        },
        400
      );
    }
  }

  @Post('post')
  @UsePipes(new ValidationPipe())
  async insert(@Body() createGroupDto: CreateGroupDto): Promise<any> {
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
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Error!'
        },
        500
      );
    }
  }

  @Post('put')
  @UsePipes(new ValidationPipe())
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
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Error!'
        },
        500
      );
    }
  }

  @Post('delete/one')
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
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          message: 'Not Found!'
        },
        400
      );
    }
  }

  @Post('delete/many')
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
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Error!'
        },
        500
      );
    }
  }
}
