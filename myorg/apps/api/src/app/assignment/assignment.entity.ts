import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('assignment')
export class Assignment {
  @PrimaryColumn()
  id: number;
  @Column()
  idEmployee : number;
  
  @Column()
  idDepartmentName: number;

  @Column()
  idPosition: number;

}