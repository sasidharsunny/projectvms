//creating mini express
const exp=require("express");
const adminExpressApp=exp.Router();

//exporting adminapi

module.exports=adminExpressApp;

//body parsing

adminExpressApp.use(exp.json());

//importing mongodb

const mc = require("mongodb").MongoClient

// import dburl

dburl = "mongodb+srv://sasidharsunny:sasi@cluster0-fucba.mongodb.net/test?retryWrites=true&w=majority"

//connecting to database
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



//employee details

// post handler

adminExpressApp.post("/register", (req, res) => {
    dbo.collection("empcollection").insertOne(req.body, (err, clientobj) => {
        console.log(req.body)
        if (err) {
            console.log("err is occured", err)

        }
        else {
            res.send({ message: "inserted successfully" })
        }

    });
});

// Get handler

adminExpressApp.get('/readall', (req, res) => {
    dbo.collection("empcollection").find().toArray((err, emparray) => {
        if (err) {
            console.log("err is occured", err)
        }
        else if (emparray == 0) {
            res.send({ message: "does not exist" })
        }
        else {
            res.send({ message: emparray })
        }

    })
})


//delete handler

adminExpressApp.delete('/remove/:v', (req, res) => {

    // console.log(+req.params.v)

    let vehiclenumber = (+req.params.v)
      dbo.collection("empcollection").deleteOne({ vehiclenumber: vehiclenumber }, (err, result) => {
        if (err) {
            console.log("err is deleted", err)
        }
        else {
            res.send({ message: "order number removed" })
        }
    })
});



// update

adminExpressApp.put("/update",(req,res)=>{
    // console.log(req.body)
    dbo.collection("empcollection").updateOne({vehiclenumber:req.body.vehiclenumber},
        {$set:{empid:req.body.empid,
            ename:req.body.ename,empphone:req.body.empphone,
            empemail:req.body.empemail,emppassword:req.body.emppassword }},
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


//security details

// post handler

adminExpressApp.post("/secregister", (req, res) => {
    dbo.collection("empcollection").insertOne(req.body, (err, clientobj) => {
        // console.log(req.body)
        if (err) {
            console.log("err is occured", err)

        }
        else {
            res.send({ message: "inserted successfully" })
        }

    });
});

//security get handler

adminExpressApp.get('/secregister',(req,res)=>{
    dbo.collection("empcollection").find().toArray((err,secarray)=>{
        // console.log(secarray)
        if(err)
        {
            console.log("err is occured",err)
        }
        else if(secarray==null)
        {
            res.send({message:"does not exist"})
        }
        else
        {
            res.send({message:secarray})
        }

    })

    
})


// delete handler

adminExpressApp.delete('/secremove/:d',(req,res)=>{
    console.log(req.params)
    var e=(+req.params.d)
    dbo.collection('empcollection').findOne({ephone:e},(err,empobj)=>{
        if(err)
        {
            console.log('err in find',err)
        }
         else if (empobj==null)
         {
             res.send({message:'no data found'})
         }
        else
        {
            dbo.collection('empcollection').deleteOne({ephone:e},(err,empobject)=>{
                if(err)
                {
                    console.log('err in delete',err)
                }
                else
                {
                    res.send({message:'data deleted success'})
                }
            })
        }
    })
    

})


// update handler

adminExpressApp.put("/updateall",(req,res)=>{
    // console.log(req.body)
    dbo.collection("empcollection").updateOne({secid:req.body.secid},
    {$set:{secname:req.body.secname,
        secphone:req.body.secphone,
        secemail:req.body.secemail,secdate:req.body.secdate}},(err,result)=>{
           if(err)
           {
               console.log("err is occured",err)
           }
           else
           {
               res.send({message:"updated"})
           }
    })
})



























///LOGIN SERVICE









// UserExpressapp.post("/register",(req,res)=>{
//     console.log(req.body)
//     // res.send({message:"resistered successfully"})
//     dbo.collection("empcollection").findOne({name:req.body.name},(err,userobj)=>{
//     if(err){
//     console.log("err in read",err)
//     }
//     else if(userobj==null)
//     {
//     bcrypt.hash(req.body.password,6,(err,hashedpassword)=>{
//     if(err)
//     {
//     console.log("err in hashing",err)
//     }
//     req.body.password=hashedpassword;
//     //replace plain text with hashed password
//     dbo.collection("empcollection").insertOne(req.body,(err,result)=>{
//     if(err)
//     {
//     console.log("err is",err);
//     }
//     else
//     {
//     res.send({message:"insert successfully"});
//     }
//     })
//     })
    
//     }
//     else
//     {
//     res.send({message:"already existed"});
//     }
    
//     })
    
//     })
    
//     //LOGIN
//     UserExpressapp.post("/login",(req,res)=>{
//     console.log(req.body)
//     dbo.collection("empcollection").findOne({name:req.body.name},(err,userobj)=>{
//     if(err){
//     console.log("err in read",err)
    
//     }
//     else if(userobj==null){
//     res.send({message:"invalid name"})
//     }
//     else
//     //compare the password
//     bcrypt.compare(req.body.password,userobj.password,(err,isMatched)=>{
//     if(err)
//     {
//     console.log("err in compare",err)
//     }
//     else if(isMatched==false){
//     //send is invalid password
//     res.send({message:"invalid password"})
//     }
//     else
//     {
//     //generate jwt and sign it
//     jwt.sign({name:userobj.name},"haii",{expiresIn:60},(err,signedtoken)=>{
//     if(err)
//     {
//     console.log("err sign",err)
//     }
//     else{
//     res.send({message:signedtoken});
//     }
//     })
//     }
//     })
//     })
//     })
    



