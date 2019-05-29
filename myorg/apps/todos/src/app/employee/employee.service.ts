import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '@myorg/datas';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) { }
  baseurl: string = "/api/";
  findAll() {
     return  this.httpClient.get<Employee[]>(this.baseurl + 'employee');
    }
}

