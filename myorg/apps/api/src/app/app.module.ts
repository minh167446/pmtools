import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AitCoreModule, entities } from '@aureole/core';
import { dbConfig } from '@aureole/core';
import { controllers, services } from '@aureole/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Group } from './group/group.entity';
import { GroupModule } from './group/group.module';
import { PersonModule } from './person/person.module';
import { Person } from './person/person.entity';
import { GroupController } from './group/group.controller';
import { PersonController } from './person/person.controller';
import { GroupService } from './group/group.service';
import { PersonService } from './person/person.service';

@Module({
  imports: [
    // GroupModule,
    // PersonModule,
    AitCoreModule,
    TypeOrmModule.forRoot({
     ...dbConfig,
     entities: [...entities, Group, Person]
    }),
    TypeOrmModule.forFeature([...entities, Group, Person])
  ],
  controllers: [...controllers, AppController, GroupController, PersonController],
  providers: [...services, AppService, GroupService, PersonService],
})
 export class AppModule {
 constructor(private readonly connection: Connection) {}
 }
