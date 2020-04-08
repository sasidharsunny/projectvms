import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private gs:GlobalService) { }
empdata:any
obj:any=[]
SearchTerm:string;
  ngOnInit()  {

    this.gs.getdata().subscribe((res2)=>{
      alert(res2["message"])
      if(res2["message"] =="does not exist")
      {
        alert("no data found")
      }
      else 
      {
       this.empdata = (res2["message"])

       console.log("this.empdatata",this.empdata)

      }

    });
  };




  submitform(x)
  {
    console.log(x)
    this.gs.sendemp(x).subscribe((res)=>{
      alert(res['message'])

    })
  }



  // delete 

delete(v)
{
  this.gs.deletedata(v).subscribe(res=>{
    alert(res["message"])
    this.ngOnInit()
  });
}

update(v)
{
  console.log(v)
  this.gs.supdate(v).subscribe(res=>{
    
    alert(res["message"])
    this.ngOnInit()
  })
}

updatedata(b)
{
  this.obj=b
}

 
}
