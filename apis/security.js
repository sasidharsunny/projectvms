//creating mini express
const exp=require("express");

const securityapp=exp.Router();


//exporting securityapi

module.exports=securityapp;

// //importing mongodb

const mc = require("mongodb").MongoClient

// //body parsing

securityapp.use(exp.json());


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


 //post handler of security

 securityapp.post('/secempregister',(req,res)=>{
     
     dbo.collection("empcollection").insertOne(req.body,(err,result)=>{
         console.log(req.body)
         if(err)
         {
             console.log("err is occured",err)
         }
         else
         {
             res.send({message:"inserted"})
         }

     })
 })


 //get request handler

 
securityapp.get('/secempget', (req, res) => {
    dbo.collection("empcollection").find().toArray((err, secarray) => {
        if (err) {
            console.log("err is occured", err)
        }
        else if (secarray == 0) {
            res.send({ message: "does not exist" })
        }
        else {
            res.send({ message: secarray })
        }

    })
})

//POST HANDLER OF LOG 

securityapp.post('/seclog',(req,res)=>{
    dbo.collection("empcollection").insertOne(req.body,(err,result)=>{
        if(err)
        {
            console.log("err is occured",err)
        }
        else
        {
            res.send({message:"inserted log successfully"})
        }

    })
})




// PUT HANDLER OF LOG

securityapp.put("/updateseclog",(req,res)=>{
     console.log(req.body)
    dbo.collection("empcollection").updateOne({logempid:req.body.logempid},
        {$set:{logename:req.body.logename,
           logephone:req.body.logephone,logcheckin:req.body.logcheckin,
           logcheckout:req.body.logcheckout}},
        (err,result)=>{
            if(err)
            {
                console.log("err is occured",err)
            }
            else
            {
                res.send({message:"updated successfully"})
            }

    });
});



/*


//uploaed a file by post handler

//import require modules
const multer = require('multer');
const xlsxtojson=require("xlsx-to-json-lc");
const xlstojson=require("xls-to-json-lc");
//multers disk storage settings
var storage = multer.diskStorage({
 destination: function (req, file, cb) {
 cb(null, './uploads/')
 },
 filename: function (req, file, cb) {
 var datetimestamp = Date.now();
 cb(null, `${new Date().getTime()}_${file.originalname}`)
 }
});
// upload middleware
const upload = multer({ storage: storage});
// convert excel to json route
securityapp.post("/uploadattendence",upload.single('uploadfile'),(req,res)=>{
 if(req.file.originalname.split('.')[req.file.originalname.split('.').length1] === 'xlsx'){
 exceltojson = xlsxtojson;
 } else {
 exceltojson = xlstojson;
 }
 try {
 exceltojson({
 input: req.file.path, //the same path where we uploaded our file
 output: null, //since we don't need output.json
 lowerCaseHeaders:true
 }, function(err,result){
 if(err) {
 return res.json({error_code:1,err_desc:err, data: null});
 }
 dbo.collection("empcollection").insertMany(result, (err, data) => {
 console.log(data);
 res.json({error_code:0,err_desc:null, data:
data["ops"],"message":"Attendence Sheet uploaded successfully"});
 });

 });
 } catch (e){
 res.json({error_code:1,err_desc:"Corupted excel file"});
 }
 });
 */