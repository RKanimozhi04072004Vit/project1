const mongoose=require("mongoose");
const TravelSchema=new mongoose.Schema({
    "VehicleName":{type:String},
    "brand":{type:String},
    "charge":{type:String},
    "driverCharge":{type:Number},
    "image":{type:String},
},{
    collection:"Travels"
})
module.exports=mongoose.model("TravelSchema",TravelSchema);