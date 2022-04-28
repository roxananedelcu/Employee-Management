import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-edit-employee-dialog',
  templateUrl: './edit-employee-dialog.component.html',
  styleUrls: ['./edit-employee-dialog.component.scss']
})
export class EditEmployeeDialogComponent implements OnInit {

  constructor(
    public thisDialogRef: MatDialogRef<EditEmployeeDialogComponent>
) { }

  ngOnInit(): void {
  }

onDecline (){
  this.thisDialogRef.close(false)
  }

onConfirm(){
  this.thisDialogRef.close(true)
  }
}
