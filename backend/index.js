const express=require("express");
const mongoose=require("mongoose");
const multer=require('multer')
const contactRoute=require("./controller/contactRoute");
const roomRoute=require("./controller/roomRoute");
const registerRoute=require("./controller/registerRoute");
const addRoomRoute=require("./controller/addRoomRoute");
const FoodRoute=require("./controller/FoodRoute");
const FoodOrderRoute=require("./controller/FoodOrderRoute");
const ReviewRatingRoute=require("./controller/ReviewRatingRoute");
const TravelRoute=require("./controller/TravelRoute");
const TravelBookingRoute=require("./controller/TravelBookingRoute");
const educationRoomRoute=require("./controller/educationRoomRoute");
const bodyParser=require("body-parser");
const cors=require("cors");

const app=express();

mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://test:12345@cluster0.2np1z6v.mongodb.net/contactdatabase");

 var db1=mongoose.connection;

db1.on("open",()=>console.log("Connected to DB1"));
db1.on("error",()=>console.log("Error occurred1"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use("/contactRoute",contactRoute);
app.use("/roomRoute",roomRoute);
app.use("/registerRoute",registerRoute);
app.use("/addRoomRoute",addRoomRoute);
app.use("/FoodRoute",FoodRoute);
app.use("/FoodOrderRoute",FoodOrderRoute);
app.use("/ReviewRatingRoute",ReviewRatingRoute);
app.use("/TravelRoute",TravelRoute);
app.use("/TravelBookingRoute",TravelBookingRoute);
app.use("/educationRoomRoute",educationRoomRoute);
app.set('view engine','ejs')

app.listen(4000,()=>{
    console.log("Server started at 4000");
})
//module.exports={db1};

