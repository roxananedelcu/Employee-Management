import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeCardComponent,
    DeleteEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule, 
    MatButtonModule,
    MatDialogModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
