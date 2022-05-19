import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EditEmployeeDialogComponent } from '../edit-employee-dialog/edit-employee-dialog.component';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-add-employee-dialog',
  templateUrl: './add-employee-dialog.component.html',
  styleUrls: ['./add-employee-dialog.component.scss']
})
export class AddEmployeeDialogComponent implements OnInit {
  addEmployeeForm: FormGroup;

  constructor(
    public thisDialogRef: MatDialogRef<AddEmployeeDialogComponent>,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.addEmployeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      company: ['', Validators.required],
      isDirector: ['']
    })
  }

  onDecline() {
    this.thisDialogRef.close(false);
  }

  onConfirm() {
    let employee = new Employee();
    
    if(this.addEmployeeForm.valid){
      employee.firstName = this.addEmployeeForm.get('firstName')?.value;
      employee.lastName = this.addEmployeeForm.get('lastName')?.value;
      employee.age = this.addEmployeeForm.get('age')?.value;
      employee.dateOfBirth = this.addEmployeeForm.get('dateOfBirth')?.value;
      employee.company = this.addEmployeeForm.get('company')?.value;
      employee.isDirector = this.addEmployeeForm.get('isDirector')?.value;
      this.thisDialogRef.close(employee);
    } else {
      this.addEmployeeForm.markAllAsTouched();
    }
  }
}
