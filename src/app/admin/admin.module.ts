import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms"
import { AdminRoutingModule } from './admin-routing.module';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { EmployeeComponent } from './employee/employee.component';
import { SecurityComponent } from './security/security.component';
import { LogbookComponent } from './logbook/logbook.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminsearchPipe } from '../adminsearch.pipe';
@NgModule({
  declarations: [AdmindashboardComponent,
     AdminprofileComponent,
      EmployeeComponent,
       SecurityComponent,
        LogbookComponent, AdminsearchPipe],
  imports: [
    CommonModule,
    AdminRoutingModule,FormsModule,HttpClientModule,
  ]
})
export class AdminModule { }
