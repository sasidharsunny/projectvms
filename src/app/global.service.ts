import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  userloginstatus:boolean=false;
loginname:string
loggedInUsername:any
empid:any;
 profiledata:object

  constructor(private Hc:HttpClient) { }

  ngOnInit(): void {


  }
   
   
    //emp params
    sendempparams()
    {
     return this.empid;
   }
   
   
    profile(empid)
    {
      console.log(empid)
      return this.Hc.get("/employee/profile/"+empid)
    }
   
  
    










  
  // post 
  sendemp(c):Observable<any>

  {
    console.log()
      return this.Hc.post('/admin/register',c)
  }

  //Get
  getdata():Observable<any>
  {
    return  this.Hc.get('/admin/readall')
  }

  deletedata(v):Observable<any>
  {
      return this.Hc.delete("/admin/remove/"+v)
  }

  supdate(v):Observable<any>
  {
    console.log(v)
     return  this.Hc.put("/admin/update",v)
  }






//   admin security services

secreceive(s):Observable<any>
{
    return this.Hc.post("/admin/secregister",s);
}


getreceive():Observable<any>
{
  console.log()
  
       return  this.Hc.get('/admin/secregister')
}

deletesecdata(d):Observable<any>
{
  console.log(d)
    return this.Hc.delete(`/admin/secremove/${d}`)
}




updates(u):Observable<any>
{
  console.log(u)
  return this.Hc.put("/admin/updateall",u)
}


////security empdetails services


//post secempdetails 


// //securityservice(s):Observable<any>
// {
//   console.log(s)

//     return this.Hc.post("/security/secempregister",s);
// }


//get handler

secgetdata():Observable<any>
{
    return this.Hc.get('/security/secempget')
}



//update handler

// updateserve(f):Observable<any>
// {
//     return this.Hc.put('/security/secempupdate',f)
// }

///LOG POST 

sendlog(l):Observable<any>
{

     return this.Hc.post('/security/seclog',l)
}

//LOG update

updateservice(e):Observable<any>
{
  console.log(e)
   return  this.Hc.put('/security/updateseclog',e)
}




setAttendence(e):Observable<any>
{
  return this.Hc.post("/security/uploadattendence",e);
  }







// LOGOUT SERVICE
logout()
{
 localStorage.removeItem("token")
 this.userloginstatus=false;
}


   























}
