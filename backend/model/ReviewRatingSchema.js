//const { db1 } = require('../index.js');
const mongoose=require("mongoose");
const ReviewRatingSchema=new mongoose.Schema({
    "name":{type:String},
    "email":{type:String},
    "HotalRating":{type:Number},
    "HotalReview":{type:String}
},{
    collection:"Review"
})

module.exports=mongoose.model("ReviewRatingSchema",ReviewRatingSchema);