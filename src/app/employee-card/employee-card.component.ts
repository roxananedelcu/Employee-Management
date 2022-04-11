import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit{
@Input() employees : Employee[] = [];
@Output() onDeleteEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    
  }

  public onDelete(employeeId: number) : void {
    this.onDeleteEvent.emit(employeeId);
  }
}

