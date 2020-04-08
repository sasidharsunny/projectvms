import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css']
})
export class EmployeedashboardComponent implements OnInit {


    empid:any;
    constructor(private gs:GlobalService ,private ar:ActivatedRoute) { }
   
    ngOnInit(): void {
    //   //getting username by paramMap
    // this.ar.paramMap.subscribe((param)=>{
    //   //sending data to login service
    //   this.gs.empid=param.get("empid")
    //   console.log(this.gs.empid)
      
    // })
    }

}
