const express = require('express');
const router = express.Router(); 
const {addRecord,allRecords}=require("./controllers");
const {validations}=require("./validations");

//add new record
router.post("/addcity",validations,addRecord)
//all records
router.get("/getallcity",allRecords)

module.exports = router;