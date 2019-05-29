import { Controller, Get, Post, Body } from "@nestjs/common";
import { PersonService } from "./person.service";
import { Person } from "./person.entity";

@Controller('person')
export class PersonController{
    constructor(
        private readonly personService :PersonService,
    ){}

    @Get()
    index(): Promise<Person[]> {
      return this.personService.findAll();
    }
    @Post('create')
    async create(@Body() person: Person): Promise<any> {
      return this.personService.create(person);
    } 

    // @Put(':id/update')
    // async update(@Param('id') id, @Body() deparData: Group): Promise<any> {
    //     deparData.idDepartment = id;
    //     console.log('Update #' +  deparData.idDepartment)
    //     return this.groupService.update( deparData);
    // }   
    // @Delete(':id/delete')
    // async delete(@Param('id') id): Promise<any> {
    //   return this.groupService.delete(id);
    // }  
}