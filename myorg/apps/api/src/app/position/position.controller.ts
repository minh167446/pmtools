import { Controller, Get, Post, Body, Put, Param, Delete } from "@nestjs/common";
import { PositionService } from "./position.service";
import { Position } from "./position.entity";

@Controller('position')
export class PositionController{
    constructor(
        private readonly positionService :PositionService,
    ){}

    @Get()
    index(): Promise<Position[]> {
      return this.positionService.findAll();
    }
    @Post('create')
    async create(@Body() employData: Position): Promise<any> {
      return this.positionService.create(employData);
    } 
    @Put(':id/update')
    async update(@Param('id') id, @Body() posiData: Position): Promise<any> {
        posiData.idPosition = id;
        console.log('Update #' +  posiData.idPosition)
        return this.positionService.update( posiData);
    }   
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.positionService.delete(id);
    }  
}