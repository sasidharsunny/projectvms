import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SecuritydashboardComponent } from './securitydashboard/securitydashboard.component';
import { SecurityprofileComponent } from './securityprofile/securityprofile.component';
import { SecurityempdetailsComponent } from './securityempdetails/securityempdetails.component';
import { SecuritylogbookComponent } from './securitylogbook/securitylogbook.component';
import { FormsModule } from '@angular/forms';
import { SecuritysearchPipe } from '../securitysearch.pipe';

@NgModule({
  declarations: [SecuritydashboardComponent, SecurityprofileComponent, SecurityempdetailsComponent,
     SecuritylogbookComponent,SecuritysearchPipe],
  imports: [
    CommonModule,
    SecurityRoutingModule,FormsModule
  ]
})
export class SecurityModule { }
