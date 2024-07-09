const express=require("express");
const TravelSchema=require("../model/TravelSchema");
const TravelRoute=express.Router();
const mongoose=require("mongoose");

TravelRoute.post("/create-travel",(req,res)=>{
    TravelSchema.create(req.body,(err,data)=>{
        if(err)
        return err;
      else
       res.json(data);
    })
})
TravelRoute.get("/",(req,res)=>{
    TravelSchema.find((err,data)=>{
        if(err)
        return err;
      else
       res.json(data);
    })
})

TravelRoute.route("/update-travel/:id").get((req,res)=>{
    TravelSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
          return err;
        else
         res.json(data);
    })
}).put((req,res)=>{
    TravelSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),{$set:req.body},(err,data)=>{
        if(err)
        return err;
      else
       res.json(data);
    })
})

TravelRoute.delete("/delete-travel/:id",(req,res)=>{
    TravelSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    })
})

module.exports=TravelRoute;