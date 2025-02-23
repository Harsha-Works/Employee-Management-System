import { Component } from '@angular/core';
import { LeaveservicesService } from '../../aservices/leaveservices.service';

@Component({
  selector: 'app-leavereq',
  standalone: false,
  
  templateUrl: './leavereq.component.html',
  styleUrl: './leavereq.component.css'
})
export class LeavereqComponent {
  constructor(private service:LeaveservicesService){}
  leavereq:any;
   ngDoCheck(){
    this.leavereq=this.service.leaves
    console.log(this.leavereq)
   }
   leaveAccepted(id:any,isaccepted:boolean){
    if(isaccepted){
      this.service.getstatus(id,'Accepted')
    }
    else{
      this.service.getstatus(id,'Rejected')
    }
    this.service.sendMessage(isaccepted);
   }
  
  
  
}
