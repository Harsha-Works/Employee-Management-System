import { Injectable } from '@angular/core';
import { employee } from './employee';
import{of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageempService {

  constructor() { }
  empList:employee[]= [
    { empid: "1", name: "Alice Johnson", role: "Testing", contact: "1234567890", email: "alice.johnson@example.com", address:"", salary:"50000" },
    { empid: "2", name: "Bob Smith", role: "Developer", contact: "9876543210", email: "bob.smith@example.com", address:"", salary:"85000" },
    { empid: "3", name: "Carol Davis", role: "Designer", contact: "4567891230", email: "carol.davis@example.com" , address:"", salary:"35000" },
    { empid: "4", name: "David Wilson", role: "HR", contact: "7891234560", email: "david.wilson@example.com" , address:"", salary:"45000" },
    { empid: "5", name: "Eve Brown", role: "Analyst", contact: "3216549870", email: "eve.brown@example.com",  address:"", salary:"25000" },
    { empid: "6", name: "Frank Garcia", role: "Tester", contact: "6549871230", email: "frank.garcia@example.com",  address:"", salary:"55000" },
    { empid: "7", name: "Grace Martinez", role: "Consultant", contact: "7894561230", email: "grace.martinez@example.com",  address:"", salary:"20000" },
    { empid: "8", name: "Hank Moore", role: "Admin", contact: "1237894560", email: "hank.moore@example.com" , address:"", salary:"100000"},
    { empid: "9", name: "Ivy Taylor", role: "Lead Developer", contact: "9873216540", email: "ivy.taylor@example.com",  address:"", salary:"75000"},
    { empid: "10", name: "Jack White", role: "Engineer", contact: "6541239870", email: "jack.white@example.com", address:"", salary:"45000" },
    { empid: "11", name: "Karen Lee", role: "Researcher", contact: "4561237890", email: "karen.lee@example.com",  address:"", salary:"65000" },
    { empid: "12", name: "Leo Walker", role: "Support", contact: "3219876540", email: "leo.walker@example.com",  address:"", salary:"35000" },
    { empid: "13", name: "Mia Hall", role: "Product Manager", contact: "7896541230", email: "mia.hall@example.com",  address:"", salary:"75000" },
    { empid: "14", name: "Noah Allen", role: "Intern", contact: "9874563210", email: "noah.allen@example.com",  address:"", salary:"20000" },
    { empid: "15", name: "Olivia Young", role: "Data Scientist", contact: "1236547890", email: "olivia.young@example.com",  address:"", salary:"35000"},
    { empid: "16", name: "Paul Adams", role: "Architect", contact: "4569871230", email: "paul.adams@example.com",  address:"", salary:"42000" },
    { empid: "17", name: "Quinn Baker", role: "Trainer", contact: "3217896540", email: "quinn.baker@example.com",  address:"", salary:"19000" },
    { empid: "18", name: "Rachel Carter", role: "Finance", contact: "6543219870", email: "rachel.carter@example.com",  address:"", salary:"38000" },
    { empid: "19", name: "Sam Edwards", role: "Developer", contact: "7891236540", email: "sam.edwards@example.com",  address:"", salary:"62000" },
    { empid: "20", name: "Tina Flores", role: "Marketing", contact: "9876541230", email: "tina.flores@example.com",  address:"", salary:"38000"},
    { empid: "21", name: "Harsha Vardhan", role: "Developer", contact: "9908357282", email: "harsha.rock.3273@gmail.com",  address:"", salary:"69696"}
  ];
  name:any;
  index:any
  getName(){
    return this.empList[this.index].name
    }
    getEmpDetails(){
      return this.empList[this.index]
    }
    addnewEmployee(newemp:any){
      this.empList.push(newemp);
      }
  authenticateUser(username: any, password: any,): string {
    // First, check if the username is "admin"
    if (username === "admin@gmail.com") {
      // Admin login, check if the password is correct
      if (password ==="HCK@admin") {
        return 'Login successful as admin';
       
      } else {
        return 'Invalid Password';
      }
    }
  
    // If not admin, check for employee
    const user = this.empList.find(emp => emp.email === username);
    this.index = this.empList.findIndex(emp => emp.email === username);


    const pwd="HCK@"+this.empList[this.index].empid


  
    if (user) {
      // If an employee is found, check the password
      if (password==pwd) {
        return 'Login successful as employee!';
        
      } else {
        return 'Invalid Password';
      }
    }
  
    // If no user or admin is found, return invalid login
    return 'Invalid login';
  }

  getAllEmployees(){
    return of(this.empList)
  }
  
  deleteEmployee(eid:any){
    const index=this.empList.findIndex((e)=>e.empid==eid)
    if(index!=-1){
      this.empList.splice(index,1);
      return "Deleted SuccessFully";

    }
    else
    return "Element Not Found";
    
  }
updateEmployee(updateemp:any){
  const index=this.empList.findIndex((e)=>e.empid==updateemp.empid)
  this.empList.splice(index,1,updateemp);
  return "Updated Successfully"

}
user:any;
getEmployeeById(eId:any){
  return this.empList.find((e)=>e.empid==eId)

}


}
