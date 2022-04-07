import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomValidatorsService } from '../custom-validators.service';
import { EmployeeServiceService } from '../shared/employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  submitted = false;
  constructor(private customValidator: CustomValidatorsService,private fb:FormBuilder,
    private employeeService : EmployeeServiceService) { }

  ngOnInit(): void {
    
  }
  employeeForm = this.fb.group({
    firstName : new FormControl('',[Validators.required]),
    lastName : new FormControl('',[Validators.required]),
    DateOfBirth : new FormControl('',[Validators.required,this.customValidator.minimumAgeValidator(18)]),
    age : new FormControl('10'),
    salary : new FormControl('',[Validators.required,Validators.min(1000)]),
    username : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(8)]),
    confirmPassword : new FormControl('',[Validators.required,Validators.minLength(8)]),
  },{
    validator:[
      this.customValidator.compareValidator("confirmPassword", "password")
    ]
  })
  get f():{[key: string]: AbstractControl}{
    return this.employeeForm.controls;
  }
  onSubmit(){
    this.submitted = true; 
    if(this.employeeForm.valid){
      this.employeeService.postEmployee(this.employeeForm.value).subscribe(
        (res)=>{
          
        },
        (error)=>{
          console.log(error);
        }
      )
    }  
    
    
  }

  // resetForm(employeeForm?:FormGroup){
  //   if(employeeForm != null)
  //      employeeForm.resetForm();
  //      this.employeeService.employeeData ={
  //         id: 0,
  //         firstName : '',
  //         lastName : '',
  //         age : 0,
  //         dateOBirth:'',
  //         salary:0,
  //         username:'',
  //         password:''

  //      }
  // }
}

