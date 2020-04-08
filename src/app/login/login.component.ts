import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { LoginserviceService } from '../loginservice.service';
//import { sign } from 'crypto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ls:LoginserviceService, private router:Router) { }


 

  ngOnInit(): void {

    setTimeout(() => {
      this.ls.logout();
    }, 0);
   
  }
  submitlogin(value)
  {
    
  //     console.log(value)
  //     if(value.role==""){
        
  //       alert("please select a role")
  //     }
  //     else{
  
    
      
  //     this.ls.role=value.role
      
  //    this.ls.logincheck(value).subscribe((data)=>{
  //      //role not selcted
       
  //      //admin
  //     if(value.role=="admin")
  //     {
  //       if(data['message']=="invalid username")
  //       {
  //            alert("invalid username")
  //       }
  //      else if(data['message']=="invalid password")
  //      {
  //          alert("invalid password")
  //      }
  //      else {
  //          alert("login sucessfully")
  //          //store tokken in local storage
  //          localStorage.setItem("token",data['message']);
  
  //          //update user details in login
  //          this.ls.loggedInUsername=data['empid']
  //          this.ls.userloginstatus=true;
  //         this.router.navigate(['/admin/adminprofile/'])
  //     }
  //     this.router.navigate(['/admin/adminprofile/'])
  //   }
  
  
  //   //security
  //    if(value.role=="security")
  //     {
  //       console.log("employeeeeeeeeeeeee")
  //       console.log("security")
  //       if(data['message']=="invalid username")
  //      {
  //           alert("invalidusername")
  //      }
  //     else if(data['message']=="invalid password")
  //     {
  //         alert("invalidpassword")
  //     }
  //     else {
  //       alert("login sucessfully")
  //       //store tokken in local storage
  //       localStorage.setItem("token",data['message']);
  
  //       //update user details in login
  //       this.ls.loggedInUsername=data['empid']
  //       this.ls.userloginstatus=true;
  //       this.router.navigate([`/security/${data['empid']}/Securityprofile`])
         
  //     }
  //     }
    
  
  //     //employee
  //    if(value.role=="employee")
  //     {
  //       console.log("employeeeeeeeeeeeee")
       
  //     if(data['message']=="invalid username")
  //      {
  //           alert("invalidusername")
  //      }
  //     else if(data['message']=="invalid password")
  //     {
  //         alert("invalidpassword")
  //     }
  //     else {
  //       alert("login sucessfully")
  //       //store tokken in local storage
  //       localStorage.setItem("token",data['message']);
        
  //       //update user details in login   
  //       this.ls.loggedInUsername=data['empid']
  //       console.log(data['empid'])
  //       this.ls.userloginstatus=true;
  //         this.router.navigate([`/employee/${data['empid']}/employeeprofile`])
  //     }    
  //   }
  // })
      
  // }  

  this.router.navigate(["/employeedasboard"])
  }
  
  

  }











  
  
  























































// // ///////admin////////
//  if(b.role=="admin")
//  {
//   this.router.navigate(['/Admin'])
//  }
//  else if (b.role=="security")
//  {
//    this.router.navigate(['/security'])
//  }

//   else if(b.role=="employee")
//    {
//     this.router.navigate(['/employee'])
//    }

    
  
  






