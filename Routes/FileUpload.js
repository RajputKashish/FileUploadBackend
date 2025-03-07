const express =require("express");
const router =express.Router();
const {localFileUpload}=require("../controllers/fileUpload.js");
router.post("/localFileUpload",localFileUpload);
module.exports=router;