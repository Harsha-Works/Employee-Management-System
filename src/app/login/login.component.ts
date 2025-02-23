import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ManageempService } from '../aservices/manageemp.service';


@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private route:Router, private service: ManageempService){}
username:any;
password:any;
message:any;
user:any;
onLogin(): void {
  // Call the authenticateUser function from the service
  this.message = this.service.authenticateUser(this.username,this.password);
  if(this.message=="Login successful as employee!"){
    Swal.fire({
      title: "Welcome Back "+this.service.getName(),
      icon: "success",
      draggable: true
    });
    this.route.navigateByUrl("/user/home");
    this.user ={
      username:this.username,
      password: this.password,
      uname: this.service.getEmpDetails().name,
      uid: this.service.getEmpDetails().empid,
    }
    localStorage.setItem('loggedin',JSON.stringify(this.user))
  }else if(this.message=="Login successful as admin"){
    Swal.fire({
      title: "Welcome Back Admin",
      icon: "success",
      draggable: true
    });
    this.route.navigateByUrl("/admin/empreport");
    this.user ={
      username:this.username,
    }
    localStorage.setItem('loggedin',JSON.stringify(this.user))
}
else
Swal.fire({
  icon: "error",
  title: "Invald Login Credentials",
  footer: '<a href="#">Why do I have this issue?</a>'
});



}

}
