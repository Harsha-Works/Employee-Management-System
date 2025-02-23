import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './ucomp/userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './acomp/admindashboard/admindashboard.component';
import { EmpreportComponent } from './acomp/empreport/empreport.component';
import { AddempComponent } from './acomp/addemp/addemp.component';
import { LeavereqComponent } from './acomp/leavereq/leavereq.component';
import { HomeComponent } from './ucomp/home/home.component';
import { ViewdetailsComponent } from './ucomp/viewdetails/viewdetails.component';
import { ViewleavesComponent } from './ucomp/viewleaves/viewleaves.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'viewdetails',component:ViewdetailsComponent},
      {path:'viewleaves',component:ViewleavesComponent},
      
    ]
  },
  {path:'admin', component:AdmindashboardComponent,
    children:[
      {path:'empreport',component:EmpreportComponent},
      {path:'addemp',component:AddempComponent},
      {path:'leavereq',component: LeavereqComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
