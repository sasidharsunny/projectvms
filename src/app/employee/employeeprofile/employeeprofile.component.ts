import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-employeeprofile',
  templateUrl: './employeeprofile.component.html',
  styleUrls: ['./employeeprofile.component.css']
})
export class EmployeeprofileComponent implements OnInit {

  constructor(private gs:GlobalService) { }
  empid:any
  profiledata:any
  ngOnInit(): void {


    this.empid=this.gs.sendempparams()
    console.log(this.empid)
   
    
             //getting profile data
             this.gs.profile(this.empid).subscribe((data)=>{
               this.profiledata=data['message']
               console.log(this.profiledata)
  
             })
       
  }

}
