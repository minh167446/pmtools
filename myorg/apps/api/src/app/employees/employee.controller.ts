import { Controller, Get, Post, Body, Put, Param, Delete, RequestMapping } from "@nestjs/common";
import { EmployeeService } from "./employee.service";
import { Employee } from "./employee.entity";

@Controller('employee')
export class EmployeeController{
    constructor(
        private readonly employeeService :EmployeeService,
    ){}

    @Get()
    index(): Promise<Employee[]> {
      return this.employeeService.findAll();
    }

    @Get(':id')
    async read(@Param('id') id: String){
      return this.employeeService.findId(id);
    }
    @Post('create')
    async create(@Body() employData: Employee): Promise<any> {
      return this.employeeService.create(employData);
    }
    @Put(':id/update')
    async update(@Param('id') id, @Body() emloyData: Employee): Promise<any> {
        emloyData.idEmployee = id;
        console.log('Update #' +  emloyData.idEmployee)
        return this.employeeService.update( emloyData);
    }
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.employeeService.delete(id);
    }
}
