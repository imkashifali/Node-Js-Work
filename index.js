//create server using express js
const express=require('express');
const app=express();
//add custom dirctory virtual path
app.use('/static', express.static('public'));
//add custom dirctory virtual path
// app.get('/',(req,res)=>{res.sendFile(__dirname + '/my.html')});


app.get('/users/:id?',(req,res)=>{
    if (req.params.id == undefined)
    res.send('Welcome All users');
    else
    res.send('Welcome users'+ req.params.id);

});
// This route path will match acd and abcd.
app.get('/ab?cd',(req,res)=>{
    res.send('hello comm')});







//SEARCH TWO FIELD PARAMETER
app.get('/flights/:FROM?.:TO?',(req,res)=>{
console.log(req.params);
res.send("search flights" + "from" + req.params.FROM + "TO" + req.params.TO);
});
















app.post('/users/profile',(req,res)=>{res.send('Welcome users profile')});


app.listen('5000',()=>console.log('run the code on port number :5000'));