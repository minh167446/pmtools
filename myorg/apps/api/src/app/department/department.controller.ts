import { Controller, Get, Post, Body, Put, Param, Delete } from "@nestjs/common";
import { DepartmentService } from "./department.service";
import { Department } from "./department.entity";

@Controller('department')
export class DepartmentController{
    constructor(
        private readonly departmentService :DepartmentService,
    ){}

    @Get()
    index(): Promise<Department[]> {
      return this.departmentService.findAll();
    }
    @Post('create')
    async create(@Body() employData: Department): Promise<any> {
      return this.departmentService.create(employData);
    } 
    @Put(':id/update')
    async update(@Param('id') id, @Body() deparData: Department): Promise<any> {
        deparData.idDepartment = id;
        console.log('Update #' +  deparData.idDepartment)
        return this.departmentService.update( deparData);
    }   
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.departmentService.delete(id);
    }  
}