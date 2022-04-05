import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit{
@Input() employees : Employee[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }
}

