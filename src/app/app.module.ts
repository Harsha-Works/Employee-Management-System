import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './acomp/admindashboard/admindashboard.component';
import { EmpreportComponent } from './acomp/empreport/empreport.component';
import { AddempComponent } from './acomp/addemp/addemp.component';
import { LeavereqComponent } from './acomp/leavereq/leavereq.component';
import { UserdashboardComponent } from './ucomp/userdashboard/userdashboard.component';
import { HomeComponent } from './ucomp/home/home.component';
import { ViewdetailsComponent } from './ucomp/viewdetails/viewdetails.component';
import { ViewleavesComponent } from './ucomp/viewleaves/viewleaves.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdmindashboardComponent,
    EmpreportComponent,
    AddempComponent,
    LeavereqComponent,
    UserdashboardComponent,
    HomeComponent,
    ViewdetailsComponent,
    ViewleavesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
