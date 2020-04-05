const express=require('express');
const bodyParser = require('body-parser');

const app=express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//first install npm install pg package
app.set('view engine', 'twig');

//link index file inside the public folder
app.set('views', './public/views');

app.get('/', (req,res)=>{
    res.render('index', { title: 'login form', message:'Enter username password'});
});
app.post('/', (req,res)=>{
    res.render('login', { title: 'login form', username:req.body.username, password:req.body.password,});
});

app.get('/about/:a-:b', (req,res)=>{
    res.render('about', { title: 'About', sum:parseInt(req.params.a) +parseInt(req.params.b),
    substr:parseInt(req.params.a) - parseInt(req.params.b), 
    multi:parseInt(req.params.a) *  parseInt(req.params.b)});
});

app.listen(5555,()=>console.log('server run on port number:5555'));

