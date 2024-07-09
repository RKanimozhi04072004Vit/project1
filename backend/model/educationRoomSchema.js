const mongoose=require("mongoose");
const educationRoomSchema=new mongoose.Schema({
    "name":{type:String},
    "email":{type:String},
    "dob":{type:Date},
    "phoneno":{type:Number},
    "address":{type:String},
    "beddingType":{type:String},
    "NoRooms":{type:Number},
    "checkDate":{type:Date},
    "status":{type:String},
    "image":{type:String}
},{
    collection:"educationRoom"
})

module.exports=mongoose.model("educationRoomSchema",educationRoomSchema);