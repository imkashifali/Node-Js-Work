const express=require('express');
const app=express();
//first install npm install pg package
app.set('view engine', 'pug');

//link index file inside the public folder
app.set('views', './public/views');

app.get('/', (req,res)=>{
    res.render('index', { title: 'welcome', message:'hey there'});
});

app.listen(2222,()=>console.log('server run on port number:2222'));