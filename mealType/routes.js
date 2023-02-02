const express = require('express');
const router = express.Router(); 
const {addRecord,allRecords}=require("./controllers");
const {validations}=require("./validations");

//add new record
router.post("/addmealtype",validations,addRecord)
//all records
router.get("/getallmealtype",allRecords)

module.exports = router;