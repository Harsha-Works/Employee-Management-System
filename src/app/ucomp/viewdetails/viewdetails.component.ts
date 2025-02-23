import { Component } from '@angular/core';
import { ManageempService } from '../../aservices/manageemp.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaveservicesService } from '../../aservices/leaveservices.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewdetails',
  standalone: false,
  
  templateUrl: './viewdetails.component.html',
  styleUrl: './viewdetails.component.css'
})
export class ViewdetailsComponent {
  constructor(private service:ManageempService,private route: Router,private bs:FormBuilder,private leave:LeaveservicesService){}
  empDetails:any;
  idstorage:any;
  leaveForm:FormGroup=new FormGroup({})

   ngOnInit(){
    this.leaveForm = this.bs.group({
      empid: [{ value: '', disabled: true }],
      name: [{ value: '', disabled: true }],
      role: [{ value: '', disabled: true }],
      contact: [{ value: '', disabled: true }],
      email: [{ value: '', disabled: true }],
      reason: ['', Validators.required],
      startdate: ['', Validators.required],
      enddate: ['', Validators.required],
    });
    

    
    this.empDetails=this.service.getEmpDetails();

    if (this.empDetails) {
      this.populateForm(this.empDetails);
    }
    
   }  

   populateForm(data: any) {
    // Populate all fields except for reason, startdate, and enddate
    this.leaveForm.patchValue({
      empid: data.empid,
      name: data.name,
      role: data.role,
      contact: data.contact,
      email: data.email,
      reason: '', // Leave reason field empty
      startdate: '', // Leave start date field empty
      enddate: '' // Leave end date field empty
    });
  }



  onSubmit() {
    if (this.leaveForm.valid) {
      // console.log(this.empDetails.empid)
      this.leave.addleaves({
        username:this.empDetails.username,
        empid:this.empDetails.empid,
        name:this.empDetails.name,
        reason:this.leaveForm.value.reason,
        startdate:this.leaveForm.value.startdate,
        enddate:this.leaveForm.value.enddate
      })
        Swal.fire({
            title: "Request has been submitted",
            icon: "success",
            draggable: true
          });
    }
    this.idstorage={empid:this.empDetails.empid}
    localStorage.setItem('checkId',JSON.stringify(this.idstorage));
  }
  
  }
