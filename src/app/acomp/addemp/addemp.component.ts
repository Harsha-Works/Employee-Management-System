import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManageempService } from '../../aservices/manageemp.service';

@Component({
  selector: 'app-addemp',
  standalone: false,
  
  templateUrl: './addemp.component.html',
  styleUrl: './addemp.component.css'
})
export class AddempComponent {
  addnewempForm:FormGroup=new FormGroup({})
  constructor(private fb:FormBuilder,private service:ManageempService){
    this.addnewempForm=fb.group({
      empid:fb.control('',Validators.required),
      name:fb.control('',Validators.required),
      role:fb.control('',Validators.required),
      contact:fb.control('',Validators.required),
      email:fb.control('',Validators.required),
      salary:fb.control('',Validators.required),
      
    })
  }
  addEmployee(){
    
    if (this.addnewempForm.valid) {
    this.service.addnewEmployee(this.addnewempForm.value);
    console.log(this.addnewempForm.value)
    alert("Employee Added Successfully");}
  }


}
