import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {DBserviceService} from '../dbservice.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  employees:Employee;
  employee:Employee[];
  

  constructor(public dbservice:DBserviceService) { }

  ngOnInit() {
    this.getEmployee();
  }
  getEmployee():void{
    this.dbservice.getAllEmployee().subscribe(employee =>this.employees=employee);
    }

    deleteEmp(id:number):void {
      console.log(id);
      console.log('inside deleteempl');
      this.dbservice.deleteEmployee(id as number).subscribe(empl=>{console.log('inside delete')});
      
      console.log('invoked delete empl')
      
    }
    }




     // this.dbservice.deleteEmployee(id).subscribe((res)=>{
       // this.employee.find((eid:Employee,index)=>{
         // if(eid.empId==id){
           // this.employee.splice(index,1);
            //return true;
         // }
        //  (err) => {
          //  console.error(err)
         // }
       // })
     // })
  
