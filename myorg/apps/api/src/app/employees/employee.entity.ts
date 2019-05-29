import { Column, Entity, PrimaryColumn} from 'typeorm';
import { Assignment } from '../assignment/assignment.entity';

@Entity('employees')
export class Employee {
  @PrimaryColumn()
  idEmployee: number;

  @Column('text')
  fullName: string;

  @Column('text')
  address: string;

  @Column('boolean')
  genDer: boolean;

  @Column('date')
  birthday: Date;

  @Column('text')
  mobile: string;

  @Column('text')
  email: string;

  @Column('boolean')
  admin: boolean;

  // @OneToMany(type => Assignment, assignment => assignment.idEmployee)
  // @JoinColumn({ name: 'departments', referencedColumnName: ''})
  // departments: Assignment[];
	}


