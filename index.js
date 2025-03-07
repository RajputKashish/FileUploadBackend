const express = require("express");
const app=express();
require("dotenv").config();
const PORT = 4000;
app.use(express.json());
const fileupload =require("express-fileupload");
app.use(fileupload());

const db=require("./config/database");
db.connect();

const cloudinary =require("./config/cloudinary");
cloudinary.cloudinaryConnect();



const Upload=require("./Routes/FileUpload");
app.use('/api/upload',Upload);

app.listen(PORT,()=>{
    console.log(`App is running ${PORT}`);
});