import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public employees: Employee[] = []; 

  constructor()
  {
  }
  
  ngOnInit(){
    let employee = new Employee();
    employee.id = 1;
    employee.age = 24;
    employee.firstName = "Roxana";
    employee.lastName = "Nedelcu";
    employee.dateOfBirth = new Date(1997, 11, 5)
    employee.company = "OWL";
    employee.isDirector = true;

    let employee2 = new Employee();
    employee2.id = 2;
    employee2.age = 25;
    employee2.firstName = "Alexandru";
    employee2.lastName = "Biris";
    employee2.dateOfBirth = new Date(1996, 9, 7)
    employee2.company = "Intel";
    employee2.isDirector = false;

    let employee3 = new Employee();
    employee3.id = 3;
    employee3.age = 23;
    employee3.firstName = "Fabian";
    employee3.lastName = "Ardeiu";
    employee3.dateOfBirth = new Date(1998, 10, 5)
    employee3.company = "Google";
    employee3.isDirector = false;

    let employee4 = new Employee();
    employee4.id = 4;
    employee4.age = 23;
    employee4.firstName = "Giulia";
    employee4.lastName = "Popescu";
    employee4.dateOfBirth = new Date(1998, 5, 5)
    employee4.company = "Nokia";
    employee4.isDirector = false;

    this.employees.push(employee);
    this.employees.push(employee2);
    this.employees.push(employee3);
    this.employees.push(employee4);
  }

  public deleteEmployee(employeeId:number) : void {
    this.employees = this.employees.filter(e => e.id != employeeId);
  }
}

