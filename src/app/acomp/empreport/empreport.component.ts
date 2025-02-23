import { ChangeDetectorRef, Component } from '@angular/core';
import { ManageempService } from '../../aservices/manageemp.service';
import Swal from 'sweetalert2';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-empreport',
  standalone: false,
  
  templateUrl: './empreport.component.html',
  styleUrl: './empreport.component.css'
})

export class EmpreportComponent {
  constructor(private service:ManageempService,private cd:ChangeDetectorRef){}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
      if (window.scrollY > 200) {
        scrollTopBtn.style.display = 'block';
      } else {
        scrollTopBtn.style.display = 'none';
      }  
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  emp:any;
  ngOnInit(){
    this.service.getAllEmployees().subscribe((data)=>{
      this.emp=data;
      console.log(this.emp)
    })
  }
  result:any;
  deleteItem(empid:any){
     this.result=this.service.deleteEmployee(empid)
         Swal.fire({
            title: this.result,
            icon: "success",
            draggable: true
          });
  }
  dummy:any;
  updatetodummy(emp:any){
    this.dummy=emp;
    console.log(this.dummy);
  }
confirmUpdate(){
  this.result=this.service.updateEmployee(this.dummy);
  Swal.fire({
    title: this.result,
    icon: "success",
    draggable: true
  });
  this.cd.detectChanges();

}
eId:any;
only:any;
searchEmp(){
  if(this.eId){
    this.emp=this.service.getEmployeeById(this.eId)
  }
  else{
    this.service.getAllEmployees().subscribe((data)=>{
      this.emp=data;})
  }
  console.log(this.emp)


}
}
