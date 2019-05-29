import { Column, Entity, PrimaryColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Assignment } from '../assignment/assignment.entity';

@Entity('department')
export class Department {
  @PrimaryColumn()
  idDepartment: number;

  @Column('text')
  NameDepartment: string;

  // @ManyToOne(type => Assignment, assignment => assignment.idDepartmentName)
  // @JoinColumn()
  // employees: Assignment[];

}