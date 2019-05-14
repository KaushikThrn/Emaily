const express=require('express');
const app=express();
const passport =require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy

app.get('/',(req,res)=>{
    res.send({hi: 'there'})
})

passport.use(new GoogleStrategy())

app.listen(5000);