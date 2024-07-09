const mongoose=require("mongoose");

const FoodOrderSchema=new mongoose.Schema({
    "name":{type:String},
    "email":{type:String},
    "phoneno":{type:Number},
    "food":{type:String},
    "members":{type:Number},
   
    
},{
    collection:"FoodOrder"
})
module.exports=mongoose.model("FoodOrderSchema",FoodOrderSchema);