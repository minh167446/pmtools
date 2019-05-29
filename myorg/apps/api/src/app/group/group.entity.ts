import { Column, Entity, PrimaryColumn} from 'typeorm';

@Entity('biz_m_group')
export class Group {
    @PrimaryColumn('character varying', {length: 20})
    company: string;
    
    @PrimaryColumn('character varying', {length: 20})
    lang: string;
    
    @PrimaryColumn('character varying', {length: 20})
    code: string;

    @Column('character varying', {length: 100})
    name: string;

    @Column('boolean')
    active_flag: boolean;

    @Column('character varying', {length: 20, nullable: true})
    department_code: string;

    @Column('character varying', {length: 250, nullable: true})
    address1: string;

    @Column('character varying', {length: 250, nullable: true})
    address2: string;

    @Column('character varying', {length: 50, nullable: true})
    tel1: string;

    @Column('character varying', {length: 50, nullable: true})
    tel2: string;

    @Column('character varying', {length: 50, nullable: true})
    email: string;

    @Column('integer')
    change_count: number;

    @Column('character varying', {length: 20})
    create_emp_id: string;

    @Column('timestamp without time zone')
    create_datetime: string;

    @Column('character varying', {length: 20})
    change_emp_id: string;

    @Column('timestamp without time zone')
    change_datetime: string;
    
    @Column('character', {length:1})
    data_flag: string;
}