const express=require('express');
const app=express();
var validation = function(req,res,next){
    console.log("Middle has working");
    next();
}
var validations = function(req,res,next){
    if(req.params.username === "kashif")
    console.log("Authentication successfuly ");
    else 
    console.log("authetnication failed");
    console.log("Second Middle has working:   " + req.params.username);
   // next();
}
//app.use(validation);
app.get('/',validation,(req,res)=>{res.send("hello middle ware")});

app.get('/users/:username',validations,(req,res)=>{
    res.send("users middle ware")
});

app.listen(1000,()=>{console.log("middleware run on port :1000")});