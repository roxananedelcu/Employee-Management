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
@Output() onEditEvent = new EventEmitter<number>();
@Output() onAddEvent = new EventEmitter<Employee>();

  editEmployeeEvent: any;

  constructor() { }

  ngOnInit(): void {
    
  }

  public onDelete(employeeId: number) : void {
    this.onDeleteEvent.emit(employeeId);
    console.log("delete");
  }

  public onEdit(employeeId: number): void{
    this.onEditEvent.emit(employeeId);
    console.log("edit", employeeId);
    

 }
  // public onAdd(Employee: any) : void{
  //   this.onAddEvent.emit(Employee);
  //   this.employees.push(Employee);
  //   console.log("add");
  // }
}

