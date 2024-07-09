const express=require("express");
const TravelBookingSchema=require("../model/TravelBookingSchema");
const TravelBookingRoute=express.Router();
const mongoose=require("mongoose");

TravelBookingRoute.post("/create-travelbooking",(req,res)=>{
    TravelBookingSchema.create(req.body,(err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    })
})

TravelBookingRoute.get("/",(req,res)=>{
    TravelBookingSchema.find((err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    })
})

TravelBookingRoute.route("/update-travelbooking/:id").get((req,res)=>{
    TravelBookingSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    })
}).put((req,res)=>{
    TravelBookingSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),{$set:req.body},(err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    })
})
 TravelBookingRoute.delete("/delete-travelbooking/:id",(req,res)=>{
    TravelBookingSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
        return err;
       else
       res.json(data);
    })
 })
 module.exports=TravelBookingRoute;