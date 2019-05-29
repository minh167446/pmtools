import {  IsOptional ,IsDateString ,IsNumber ,IsBoolean, MaxLength, IsNotEmpty, IsEmail, IsString, Length, Validate } from 'class-validator';

export class CreateGroupDto {

    @IsNotEmpty({
        message: "Company is required!"
    }) company:string;

    @IsNotEmpty({
        message: "Language is required!"
    }) lang:string;

    @MaxLength(10, {
        message: "Code is not valid!"
    })
    @IsNotEmpty({
        message: "Code is required!"
    }) code:string;

    @IsString() 
    @MaxLength(100, {
        message: "Name Group is not valid!"
    })
    @IsNotEmpty({
        message: "Name Group is required!"
    }) name: string;

    @IsBoolean()
    @IsNotEmpty({
        message: "Active Flag is required!"
    }) active_flag: boolean;

    @MaxLength(20, {
        message: "Department code is not valid!"
    })
    @IsOptional()
    @IsString({
        message: "Department code must be a string!"
    }) department_code: string;
    
    @MaxLength(250, {
        message: "Address 1 is not valid!"
    })
    @IsOptional()
    @IsString({
        message: "Address 1 must be a string!"
    }) address1: string;

    @MaxLength(250, {
        message: "Address 2 is not valid!"
    })
    @IsOptional()
    @IsString({
        message: "Address 2 must be a string!"
    }) address2: string;

    @MaxLength(50, {
        message: "Telephone 1 is not valid!"
    })
    @IsOptional()
    @IsString({
        message: "Telephone 1 is not valid!"
    }) tel1: string;

    @MaxLength(50, {
        message: "Telephone 2 is not valid!"
    })
    @IsOptional()
    @IsString({
        message: "Telephone 2 is not valid!"
    }) tel2: string;

    @MaxLength(50, {
        message: "Email is not valid!"
    })
    @IsOptional()
    @IsEmail() email: string;

    @IsNumber()
    @IsNotEmpty({
        message: "Change Count is required!"
    }) change_count: number;

    @IsString({
        message: "EmployeeID Creator must be a string"
    }) 
    @MaxLength(20, {
        message: "EmployeeID Creator is not valid!"
    })
    @IsNotEmpty({
        message: "EmployeeID Creator is required!"
    }) create_emp_id: string;

    @IsDateString()
    @IsNotEmpty({
        message: "Create DateTime is required!"
    }) create_datetime: string;

    @IsString() 
    @MaxLength(20)
    @IsNotEmpty({
        message: "EmployeeID Changer is required!"
    }) change_emp_id: string;

    @IsDateString()
    @IsNotEmpty({
        message: "EmployeeID Changer is required!"
    }) change_datetime: string;

    @IsNotEmpty({
        message: "Data Flag is required!"
    })
    @Length(1) data_flag: string;

}
