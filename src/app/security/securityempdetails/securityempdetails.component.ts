import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
@Component({
  selector: 'app-securityempdetails',
  templateUrl: './securityempdetails.component.html',
  styleUrls: ['./securityempdetails.component.css']
})
export class SecurityempdetailsComponent implements OnInit {

  constructor(private gs:GlobalService) { }
  empdata:any

  ngOnInit() {
    // this.gs.getdata().subscribe((res)=>{

    //   this.empdata= res['message']
    //   console.log(this.empdata)

     

    // }) this.gs.getdata().subscribe((res2)=>{
     // alert(res2["message"])
  //     if(res2["message"] =="does not exist")
  //     {
  //       alert("no data found")
  //     }
  //     else 
  //     {
  //      this.empdata = (res2["message"])

  //      console.log("this.empdatata",this.empdata)

  //     }

  //   });
  // };





  // }



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

   






  



  
}
