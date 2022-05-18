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

  employee: Employee;
  addEmployeeForm: FormGroup;

  constructor(
    public thisDialogRef: MatDialogRef<AddEmployeeDialogComponent>,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.employee = new Employee();

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
  }

  onConfirm() {
  }
}
