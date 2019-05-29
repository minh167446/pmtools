import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Employee } from '@myorg/datas';
import { EmployeeService } from '../employee.service';



@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeesComponent implements OnInit {

  Employees: Employee[];

  constructor(private EmployeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees(): void {
      this.EmployeeService.findAll().subscribe(data=>{
      this.Employees = data;
    });
  };
}
