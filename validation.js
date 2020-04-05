const express=require('express');
const bodyParser = require('body-parser')
// ...rest of the initial code omitted for simplicity.
const {matchedData,sanitizebody,check, validationResult } = require('express-validator');

const app=express();
//first install npm install pg package
app.set('view engine', 'twig');
//link index file inside the public folder
app.set('views', './public/views');
// create application/json parser
const jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/', (req,res)=>{
    res.render('form', { title: 'login form', message:'Enter username password'});
});
app.post('/',urlencodedParser,[
    check('username','username should be email id').trim().isEmail(),
    check('password','password must b 5 character').trim().isLength({min:5}),
    check('cpassword').custom((value,{req})=>{
        if(value !=req.body.password){
            throw new Error('Password confirmation does not match password');
        }
        return true;
    })

],(req,res)=>{
    const errors = validationResult(req);
    console.log(errors.mapped());
    if(!errors.isEmpty()){
        const user=matchedData(req);
        res.render('form', {title:'login form',error:errors.mapped(),user:user});
    }else{
    const user=matchedData(req);
    console.log(user);
        res.render('login',{title:'hello beloved data', user:user})
    }
});


app.listen(8888,()=>console.log('server run on port number:8888'));

