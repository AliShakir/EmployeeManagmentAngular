import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../shared/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(public employeeService : EmployeeServiceService) { }

  ngOnInit(): void {
    // Get all employees
    this.employeeService.getEmployees();
  }

}
