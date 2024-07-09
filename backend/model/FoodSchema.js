const mongoose=require("mongoose");

const FoodSchema=new mongoose.Schema({
    "food":{type:String},
    "cost":{type:Number},
    "discount":{type:Number},
    "foodType":{type:String},
    "foodTime":{type:String},
    "image":{type:String}
    
},{
    collection:"Food"
})
module.exports=mongoose.model("FoodSchema",FoodSchema);