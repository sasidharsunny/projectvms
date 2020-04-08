import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminModule } from './admin/admin.module';
import { SecurityModule } from './security/security.module';
//import { RegisterComponent } from '/register/register.component';
import { RegisterModule } from './register/register.module';

//import { SecuritysearchPipe } from './securitysearch.pipe';
//import { AdminsearchPipe } from './adminsearch.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactusComponent,
    AboutusComponent,
    //RegisterComponent,
    
   // SecuritysearchPipe,
   // AdminsearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    FormsModule,
    SecurityModule,RegisterModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
