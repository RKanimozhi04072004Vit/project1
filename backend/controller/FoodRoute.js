const express=require("express");
const FoodSchema=require("../model/FoodSchema");
const FoodRoute=express.Router();
const mongoose=require("mongoose");

FoodRoute.post("/add-food",(req,res)=>{
    FoodSchema.create(req.body,(err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    })
})

FoodRoute.get("/",(req,res)=>{
    FoodSchema.find((err,data)=>{
        
        if(err)
         return err;
        else
         res.json(data);
    })
})

FoodRoute.route("/update-food/:id").get((req,res)=>{
    FoodSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    }
    )
}).put((req,res)=>{
    FoodSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
        {$set:req.body},
        (err,data)=>{
            if(err)
             return err;
            else
            res.json(data);
        })
})



FoodRoute.delete("/delete-food/:id",(req,res)=>{
    FoodSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id)
    ,
    (err,data)=>{
    if(err)
    return err;
    else
    res.json(data);
    })
    })
module.exports=FoodRoute;