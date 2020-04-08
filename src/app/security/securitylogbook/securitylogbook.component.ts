import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';






@Component({
  selector: 'app-securitylogbook',
  templateUrl: './securitylogbook.component.html',
  styleUrls: ['./securitylogbook.component.css']
})
export class SecuritylogbookComponent implements OnInit {

  constructor(private gs: GlobalService) { }
  seclog: any;
  seclogobj:any=[];
  search:any;
  file:File;
  as:any;
  ngOnInit() {

    this.gs.getdata().subscribe((res2) => {
      alert(res2["message"])
      if (res2["message"] == "does not exist") {
        alert("no data found")
      }
      else {
        this.seclog = (res2["message"])

        console.log("this.empdatata", this.seclog)

      }

    });
  };



  //post

  seclogbook(b) 
  {
    console.log(b)
    this.gs.sendlog(b).subscribe((res) => {
      alert(res['message'])
    })

  }

  // update logbook


  updateseclog(b) 
  {
    console.log(b)
    this.gs.updateservice(b).subscribe((res) => {
      alert(res['message'])
      this.ngOnInit()
    })
  }


  updatedata(g) 
  {
    this.seclogobj=g;
    console.log('data in updatedata',this.seclogobj)
  }


}




// //upload file


// fileUpload(filedata){
// this.file=filedata.target.files[0];
// }



// uploadExcel(data){
// let formdata = new FormData();
// //formdata.append("branch",data.branch);
// //formdata.append("year",data.year);
// formdata.append("uploadfile",this.file,this.file.name);
// this.as.setAttendence(formdata).subscribe((res)=>{
// if(res["message"]=="Attendence Sheet uploaded successfully")
// {
// alert(res["message"]);
// }
// else if(res["err_desc"]=="Corupted excel file"){
// alert(res["err_desc"]);
// }

// })
// }
// }





