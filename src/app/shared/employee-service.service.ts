import { Injectable } from '@angular/core';
import { Employees } from '../models/employees';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  employeeData : Employees | undefined;
  employeeList: Employees[] = [];
  readonly rootUrl = 'https://localhost:44398/api';
  constructor(private http: HttpClient) { }

  postEmployee(employeeData: Employees){
    return this.http.post(this.rootUrl+"/Employees/AddNewEmployee",employeeData)
  }
  getEmployees(){
    return this.http.get(this.rootUrl+"/Employees/GetAllEmployees")
    .toPromise()
    .then(res => this.employeeList = res as Employees[])
  }
  
}
