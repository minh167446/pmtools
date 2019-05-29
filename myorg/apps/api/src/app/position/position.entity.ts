import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('position')
export class Position {
  
  @PrimaryColumn()
  idPosition: number;

  @Column('text')
  NamePosition: string;

}