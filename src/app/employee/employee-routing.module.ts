import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { EmployeeprofileComponent } from './employeeprofile/employeeprofile.component';



const routes: Routes = [{path:"employeedasboard",component:EmployeedashboardComponent,
children:[{path:"employeeprofile",component:EmployeeprofileComponent},
{path:"employeedetails",component:EmployeedetailsComponent}]}];

// [{path:"employeedasboard",component:EmployeedashboardComponent,
// children:[{path:"employeeprofile",component:EmployeeprofileComponent},
// {path:"employeedetails",component:EmployeedetailsComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
