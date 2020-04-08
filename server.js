//create express object
const exp=require("express");
const app=exp();

//const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")


const path=require("path")
app.use(exp.static(path.join(__dirname,"/dist/projectvms")))
//import user and admins apps




const securityapp=require("./apis/security");
const adminapp=require("./apis/admin")
const employeeapp=require('./apis/employee')

//forward to specific api based on path


app.use("/admin",adminapp);
 app.use("/security",securityapp);
 app.use("/employee",employeeapp);

//import path



//Assign port number

const port=7800;
app.listen(7800,()=>{
console.log("server is successfully running on port number 7800");
});

// app.get("/user",(err,res)=>{
//     if(err)
//     {
//         console.log({message:"the request handler",err})
//     }
//     else
//     {
//         res.send({message:"the response of request handler"})
//     }
// })

