const express=require("express");
const addroomSchema=require("../model/addroomSchema");
const addRoomRoute=express.Router();
const mongoose=require("mongoose");

addRoomRoute.post("/add-room",(req,res)=>{
    addroomSchema.create(req.body,(err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    })
})

addRoomRoute.get("/",(req,res)=>{
    addroomSchema.find((err,data)=>{
        
        if(err)
         return err;
        else
         res.json(data);
    })
})

addRoomRoute.route("/update-addroom/:id").get((req,res)=>{
    addroomSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
         return err;
        else
         res.json(data);
    }
    )
}).put((req,res)=>{
    addroomSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
        {$set:req.body},
        (err,data)=>{
            if(err)
             return err;
            else
            res.json(data);
        })
})


// app.put('/roomRoute/update-status/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//       const updatedRoom = await Room.findByIdAndUpdate(
//         id,
//         { status: 'approved' },
//         { new: true }
//       );
//       res.status(200).json(updatedRoom);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
addRoomRoute.delete("/delete-addroom/:id",(req,res)=>{
    addroomSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id)
    ,
    (err,data)=>{
    if(err)
    return err;
    else
    res.json(data);
    })
    })
module.exports=addRoomRoute;

