import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { EmployeeComponent } from './employee/employee.component';
import { LogbookComponent } from './logbook/logbook.component';
import { SecurityComponent } from './security/security.component';
import { SecuritydashboardComponent } from '../security/securitydashboard/securitydashboard.component';


const routes: Routes = [{path:"Admin",component:AdmindashboardComponent,
children:[{path:"adminprofile",component:AdminprofileComponent},
{path:"employee",component:EmployeeComponent},
{path:"security",component:SecurityComponent},
{path:"logbook",component:LogbookComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
