import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(
    public thisDialogRef: MatDialogRef<DeleteEmployeeComponent>
  ) { }

  ngOnInit(): void {
  }

  onDecline(){
    this.thisDialogRef.close(false);
  }

  onConfirm(){
    this.thisDialogRef.close(true);
  }

}
