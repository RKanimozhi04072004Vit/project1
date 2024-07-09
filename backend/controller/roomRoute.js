const express=require("express");
const roomSchema=require("../model/roomSchema");
const roomRoute=express.Router();
const mongoose=require("mongoose");

roomRoute.post("/create-room",(req,res)=>{
    roomSchema.create(req.body,(err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    })
})
roomRoute.get("/",(req,res)=>{
    roomSchema.find((err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    })
})
roomRoute.route("/update-room/:id").get((req,res)=>{
    roomSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    }
    )
}).put((req,res)=>{
    roomSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
        {$set:req.body},
        (err,data)=>{
            if(err)
             return err;
            else
            res.json(data);
        })
})
roomRoute.delete("/delete-room/:id",(req,res)=>{
    roomSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id)
    ,
    (err,data)=>{
    if(err)
    return err;
    else
    res.json(data);
    })
    })
    
roomRoute.route("/update-status/:id").get((req,res)=>{
    roomSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    }
    )
}).put((req,res)=>{
    roomSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
        {$set:req.body},
        (err,data)=>{
            if(err)
             return err;
            else
            res.json(data);
        })
})
module.exports=roomRoute;