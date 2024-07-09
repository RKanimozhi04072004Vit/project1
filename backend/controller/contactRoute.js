const express=require("express");
const contactSchema=require("../model/contactSchema");
const contactRoute=express.Router();
const mongoose=require("mongoose");

contactRoute.post("/create-user",(req,res)=>{
    contactSchema.create(req.body,(err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    })
})
contactRoute.get("/",(req,res)=>{
    contactSchema.find((err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    })
})
contactRoute.route("/update-user/:id").get((req,res)=>{
    contactSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    }
    )
}).put((req,res)=>{
    contactSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
        {$set:req.body},
        (err,data)=>{
            if(err)
             return err;
            else
            res.json(data);
        })
})
contactRoute.delete("/delete-user/:id",(req,res)=>{
    contactSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id)
    ,
    (err,data)=>{
    if(err)
    return err;
    else
    res.json(data);
    })
    })
module.exports=contactRoute;