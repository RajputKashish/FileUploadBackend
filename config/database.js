const mongoose =require("mongoose");
require("dotenv").config();
exports.connect=()=>{
    mongoose.connect(process.env.Database_URL)
    .then(console.log("Connected to database"))
    .catch((error)=>{
        console.log(error);
        process.exit(1);
    });
};