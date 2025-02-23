import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LeaveservicesService {
  leaves:{username:any,empid:any,name:any,reason:any,startddate:any,enddate:any,status:any,leaveId:any

  }[]=[];

  constructor( ) { }
  addleaves(x:any){
    this.leaves.push({ ...x, status: 'p',leaveId:this.leaves.length+1 })
  }
  input:any
  getstatus(id:any,status:any){
    const leave = this.leaves.find((e) => e.leaveId == id);
    if (leave) {
        leave.status = status; 
    }
  }
  sendMessage(accepted: boolean) {
    this.input=accepted;
    console.log(this.input)
    if (accepted) {
        Swal.fire({
                  title: "Leave Accepted",
                  icon: "success",
                  draggable: true
                });
      return of("Approved");
    } else {
      alert("Leave rejected");
      return of("Rejected");
    }
  }
  getLeavereqLength(){
    return this.leaves.length;
  }
  getAllLeavesById(employeeid:any){
    console.log(employeeid);
    //console.log(this.leaves.filter((e)=>e.empid==employeeid))
    return of(this.leaves.filter((e)=>e.empid==employeeid))

  }

  getAllLeacesbyUsername(uname:any){
    console.log(this.leaves)
  return of (this.leaves.filter((e)=>e.username==uname))   
  }
}
