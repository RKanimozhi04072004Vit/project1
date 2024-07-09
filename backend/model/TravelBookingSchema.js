const mongoose=require("mongoose");
const TravelBookingSchema=new mongoose.Schema({
    "name":{type:String},
    "email":{type:String},
    "phoneno":{type:Number},
    "Time":{type:String},
    "VehicleName":{type:String},
    "PickupPlace":{type:String},
    "DropPlace":{type:String},
    "date":{type:String},
    "time":{type:String}
},{
    collection:"UserTravelBooking"
})
module.exports=mongoose.model("TravelBookingSchema",TravelBookingSchema);