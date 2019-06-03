const express=require('express');
const mongoose=require('mongoose')
const keys=require('./config/keys')
require('./services/passport')
const app=express();

app.get('/',(req,res)=>{
    res.send({hi: keys.googleClientID})
})

mongoose.connect('keys.mongoURI')
require('./routes/authRoutes')(app)

app.listen(5000);