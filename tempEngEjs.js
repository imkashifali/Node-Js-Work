const express=require('express');
const app=express();
//first install npm install pg package
app.set('view engine', 'twig');

//link index file inside the public folder
app.set('views', './public/views');

app.get('/', (req,res)=>{
    res.render('index', { title: 'welcome', message:'hey Twig'});
});
app.get('/', (req,res)=>{
    res.render('index', { title: 'welcome', message:'hey Twig'});
});

app.listen(4444,()=>console.log('server run on port number:44444'));