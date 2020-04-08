import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecuritydashboardComponent } from './securitydashboard/securitydashboard.component';
import { SecurityprofileComponent } from './securityprofile/securityprofile.component';
import { SecurityempdetailsComponent } from './securityempdetails/securityempdetails.component';
import { SecuritylogbookComponent } from './securitylogbook/securitylogbook.component';


const routes: Routes = [{path:"security",component:SecuritydashboardComponent,
children:[{path:"securityprofile",component:SecurityprofileComponent},
{path:"securityempdetails",component:SecurityempdetailsComponent},
{path:"securitylogbook",component:SecuritylogbookComponent}]}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
