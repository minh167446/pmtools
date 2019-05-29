import { Controller, Get, Post, Body, Put, Param, Delete } from "@nestjs/common";
import { AssignmentService } from "./assignment.service";
import { Assignment } from "./assignment.entity";

@Controller('assignment')
export class assignmentController{
    constructor(
        private readonly assignmentService :AssignmentService,
    ){}

    @Get()
    index(): Promise<Assignment[]> {
      return this.assignmentService.findAll();
    }
    @Post('create')
    async create(@Body() employData: Assignment): Promise<any> {
      return this.assignmentService.create(employData);
    } 
   /* @Put(':id/update')
    async update(@Param('id') id, @Body() emloyData: Assignment): Promise<any> {
        emloyData.idassignment = id;
        console.log('Update #' +  emloyData.idassignment)
        return this.assignmentService.update( emloyData);
    }*/   
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.assignmentService.delete(id);
    }  
}