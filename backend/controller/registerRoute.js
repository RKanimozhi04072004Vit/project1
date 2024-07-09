const express = require("express");
const registerSchema = require("../model/registerSchema");
const registerRoute = express.Router();
const mongoose = require("mongoose");

registerRoute.post("/login",(req,res)=>{
    const{email,password}=req.body;
    registerSchema.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json(user);
            }
            else{
                res.json("the password is incorrect");
            }
        }
        else{
            res.json("No record existing");
        }
    })
})

registerRoute.post("/login",(req,res)=>{
    registerSchema.create(req.body,(err,data)=>{
      if(err)
       return err;
      else
       res.json(data);
    })
  })
registerRoute.get("/",(req,res)=>{
    registerSchema.find((err,data)=>{
        if(err)
         return err;
        else 
         res.json(data);
    })
})
registerRoute.post("/register",(req,res)=>{
    registerSchema.create(req.body)
    .then(contactdatabase=>res.json(contactdatabase))
    .catch(err=>res.json(err));
}) 

module.exports=registerRoute;