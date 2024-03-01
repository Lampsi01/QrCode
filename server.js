
const express= require("express") ;
const path = require("path");
const { nextTick } = require("process");
const app = express() ; 
const bodyParser = require('body-parser');

const  port = 3000 ; 

const qm = require('qr-maker') 
let qr ={}

 
app.use(express.static('public'));
 
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/"  , function(req , res){

    res.render("index.ejs" ,{}); 
    

})


app.get("/about"  , function(req , res){

    res.render("about.ejs" ,{}); 
    


})

app.get("/more"  , function(req , res){

    res.render("more.ejs" ,{}); 
    

})
 
 

app.post("/QrImage" , function(req, res){
     let qr = {
        fullName : req.body.fullName , 
        Qid : req.body.id_student 
    }
    let qrImage = qm("your full name is : " +  qr.fullName + "\n" + "your id student is  :  " + qr.Qid);

 

    res.render("Qrimage.ejs" , {QrImage:  qrImage});

    
    
})

 
 



app.listen(port , function(){
    console.log(`server on : http/localhost:${port}`); 
})