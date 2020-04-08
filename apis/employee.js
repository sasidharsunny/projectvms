//creating mini express
const exp = require("express");
const employeeapp = exp.Router();



const mc = require("mongodb").MongoClient

// //body parsing
employeeapp.use(exp.json());

const jwt=require("jsonwebtoken")
// // import dburl

dburl = "mongodb+srv://sasidharsunny:sasi@cluster0-fucba.mongodb.net/test?retryWrites=true&w=majority"

// //connecting to database
 var dbo;

 mc.connect(dburl, { useUnifiedTopology: true, useUnifiedTopology: true }, (err, clientobj) => {
     if (err) {
         console.log("err is occured", err);
     }
     else {

      // connecting to data base

       dbo = clientobj.db("empdb")


        console.log("connecting to database")

    }
 });












//exporting adminapi
employeeapp.post("/employeelogin",(req,res)=>{
     console.log(req.body)
    dbo.collection("empcollection").findOne({empid:req.body.empid},(err,empobj)=>{
        // console.log(empobj)
        if(err)
        {
            console.log("err in employeeusername",err)
        }
        else if(empobj==null)
        {
            res.send({message:"invalid username"})
        }
        else
        {
            dbo.collection("empcollection").findOne({emppassword:empobj.emppassword},(err,paswobj)=>{
                console.log(paswobj)
                if(err)
                {
                    console.log("err in employeeusername",err)
                }
                else if(paswobj==null)
                {
                    res.send({message:"invalid password"})
                }
                else{
                    jwt.sign({empid:empobj.empid},"ishh",{expiresIn:60},
                    (err,signedtoken)=>{
                        
                        if(err)
                        {
                          console.log("err in token is",err)
                        }
                        else
                        {                         
                       res.send({message:signedtoken,empid:req.body.empid})   
                         
                        }
                    })
                }
            })
        }
    })
})

/////////////////////////////////profile/////////////////////////////////
employeeapp.get("/profile/:empid",(req,res)=>{
    
    
    dbo.collection("empcollection").findOne({empid:req.params.empid},(err,empObj)=>{
        if(err)
        {
            console.log("error in profile find",err)
        }
        else {
            res.send({message:empObj})
        } 
    })










})

//exporting employee

module.exports = employeeapp;