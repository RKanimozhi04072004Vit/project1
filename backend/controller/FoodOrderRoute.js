const express=require("express");
const FoodOrderSchema=require("../model/FoodOrderSchema");
const FoodOrderRoute=express.Router();
const mongoose=require("mongoose");

FoodOrderRoute.post("/add-foodOrder",(req,res)=>{
    FoodOrderSchema.create(req.body,(err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    })
})

FoodOrderRoute.get("/",(req,res)=>{
    FoodOrderSchema.find((err,data)=>{
        
        if(err)
         return err;
        else
         res.json(data);
    })
})

FoodOrderRoute.route("/update-foodOrder/:id").get((req,res)=>{
    FoodOrderSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    }
    )
}).put((req,res)=>{
    FoodOrderSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
        {$set:req.body},
        (err,data)=>{
            if(err)
             return err;
            else
            res.json(data);
        })
})



FoodOrderRoute.delete("/delete-foodOrder/:id",(req,res)=>{
    FoodOrderSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id)
    ,
    (err,data)=>{
    if(err)
    return err;
    else
    res.json(data);
    })
    })
module.exports=FoodOrderRoute;