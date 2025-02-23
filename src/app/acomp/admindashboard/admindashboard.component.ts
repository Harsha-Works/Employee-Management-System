import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveservicesService } from '../../aservices/leaveservices.service';

@Component({
  selector: 'app-admindashboard',
  standalone: false,
  
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {
  constructor(private route:Router, private service:LeaveservicesService){}
  isSidebarOpen: boolean = false;  // ✅ Sidebar toggle state
  leng: number = 0;
  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  logOut(){
    localStorage.removeItem('loggedIn');
    this.route.navigateByUrl('/');
  }
  len:any;
  ngDoCheck(){
      this.len=this.service.getLeavereqLength();
      
  }


}
