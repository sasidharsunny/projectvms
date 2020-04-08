import { Component, OnInit, ɵConsole } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  constructor(private gs: GlobalService) { }
 // securitydata: any;
  secobj: any = []
 securitydata:any

  ngOnInit() {

 

     this.gs.getreceive().subscribe((res3) => {
      alert(res3['message'])

       if (res3['message'] == "does not exist") {
         alert("no data found")
       }
       else {
         this.securitydata = res3['message']
         console.log(this.securitydata)
       }

     })
   }





  secdetails(c) {
     console.log(c)
    this.gs.secreceive(c).subscribe((res4) => {
       alert(res4["message"])


    })

  }

  //delete security handler

  deletesec(d) {
    console.log(d)
    this.gs.deletesecdata(d).subscribe((res5) => {
      if (res5['message'] == 'no data found') {
        alert(res5['message'])
      }
      else {
        alert('data deleted ')
        this.ngOnInit()
      }

    })
  }

  update(u) {
    console.log(u)
    this.gs.updates(u).subscribe((res6) => {
      alert(res6['message'])
      this.ngOnInit()
    })
  }

  secupdate(s) {
    this.secobj = s
    this.ngOnInit()
  }

}
