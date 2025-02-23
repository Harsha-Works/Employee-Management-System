import { Component } from '@angular/core';
import { LeaveservicesService } from '../../aservices/leaveservices.service';

@Component({
  selector: 'app-viewleaves',
  standalone: false,
  
  templateUrl: './viewleaves.component.html',
  styleUrl: './viewleaves.component.css'
})
export class ViewleavesComponent {
  employeeMessage: string = '';  // Variable to store the message

  constructor(private service: LeaveservicesService) { }
  myleaves:any;
  myid:any;
  employeeid:any;
  message:any
  status:any;
  

  ngOnInit() {
    this.myid=localStorage.getItem('loggedin');
    this.myid=JSON.parse(this.myid);
    this.employeeid=this.myid.uid;
    
    console.log(this.employeeid+"EMP ID")
    this.service.getAllLeavesById(this.employeeid).subscribe((data)=>{
      
      this.myleaves=data;
      console.log(this.myleaves);
     
    })

    this.status=this.service.input;
    console.log(this.status);
    // this.service.sendMessage(this.status).subscribe((data)=>{
      
    //   this.message=data;
    //   console.log(this.message);

    // });
        
    
    
    
}
}
