import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-edit-employee-dialog',
  templateUrl: './edit-employee-dialog.component.html',
  styleUrls: ['./edit-employee-dialog.component.scss'],
})
export class EditEmployeeDialogComponent implements OnInit {

  editEmployeeForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public employee: Employee,
    public thisDialogRef: MatDialogRef<EditEmployeeDialogComponent>,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.editEmployeeForm = this.fb.group({
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
    if(this.editEmployeeForm.valid){
      this.employee.firstName = this.editEmployeeForm.get('firstName')?.value;
      this.employee.lastName = this.editEmployeeForm.get('lastName')?.value;
      this.employee.age = this.editEmployeeForm.get('age')?.value;
      this.employee.dateOfBirth = this.editEmployeeForm.get('dateOfBirth')?.value;
      this.employee.company = this.editEmployeeForm.get('company')?.value;
      this.employee.isDirector = this.editEmployeeForm.get('isDirector')?.value;
      this.thisDialogRef.close(true);
    } else {
      this.editEmployeeForm.markAllAsTouched();
    }
  }
}
