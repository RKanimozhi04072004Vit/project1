const express=require("express");
const ReviewRatingSchema=require("../model/ReviewRatingSchema");
const ReviewRatingRoute=express.Router();
const mongoose=require("mongoose");

ReviewRatingRoute.post("/create-rating",(req,res)=>{
    ReviewRatingSchema.create(req.body,(err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    })
})
ReviewRatingRoute.get("/",(req,res)=>{
    ReviewRatingSchema.find((err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    })
})
ReviewRatingRoute.route("/update-rating/:id").get((req,res)=>{
    ReviewRatingSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    }
    )
}).put((req,res)=>{
    ReviewRatingSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
        {$set:req.body},
        (err,data)=>{
            if(err)
             return err;
            else
            res.json(data);
        })
})
ReviewRatingRoute.delete("/delete-rating/:id",(req,res)=>{
    ReviewRatingSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id)
    ,
    (err,data)=>{
    if(err)
    return err;
    else
    res.json(data);
    })
    })
module.exports=ReviewRatingRoute;