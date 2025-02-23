import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManageempService } from '../../aservices/manageemp.service';

@Component({
  selector: 'app-userdashboard',
  standalone: false,
  
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
  constructor(private route:Router, private service: ManageempService ){}
  isSidebarOpen: boolean = false;


  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  Logout(){
    localStorage.removeItem('loggedin');
    this.route.navigateByUrl('/');
  }
empName:any;
ngOnInit(){
  this.empName=this.service.getName();
  console.log(this.empName)
}

}
