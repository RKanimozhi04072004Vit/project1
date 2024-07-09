const mongoose=require("mongoose");

const addroomSchema=new mongoose.Schema({
    "roomClass":{type:String},
    "roomType":{type:String},
    "NoOfRooms":{type:Number},
    "cost":{type:Number},
    "ratings":{type:Number},
    "image":{type:String}
    
},{
    collection:"Addrooms"
})
module.exports=mongoose.model("addroomSchema",addroomSchema);

