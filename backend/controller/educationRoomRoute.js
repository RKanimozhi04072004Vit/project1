const express=require("express");
const educationRoomSchema=require("../model/educationRoomSchema");
const educationRoomRoute=express.Router();
const mongoose=require("mongoose");

educationRoomRoute.post("/create-eduroom",(req,res)=>{
    educationRoomSchema.create(req.body,(err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    })
})

educationRoomRoute.get("/",(req,res)=>{
    educationRoomSchema.find((err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    })
})

educationRoomRoute.route("/update-eduroom/:id",(req,res)=>{
    educationRoomSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
         return err;
        else
        res.json(data);
    })
}).put((req,res)=>{
    educationRoomSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),{$set:req.body},(err,data)=>{
        if(err)
         return err;
        else
        res.json(data);
    })
})
educationRoomRoute.delete("/delete-eduroom/:id",(req,res)=>{
    educationRoomSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
        return err;
       else
        res.json(data);
    })
})
module.exports=educationRoomRoute;