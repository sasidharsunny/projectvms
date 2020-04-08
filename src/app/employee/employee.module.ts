import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeeprofileComponent } from './employeeprofile/employeeprofile.component';
import { Employeedashboard1Component } from './employeedashboard1/employeedashboard1.component';


@NgModule({
  declarations: [EmployeedashboardComponent, EmployeedetailsComponent, EmployeeprofileComponent, Employeedashboard1Component],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
