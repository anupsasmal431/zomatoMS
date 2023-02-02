const express = require('express');
const router = express.Router(); 
const {addRecord,allRecords}=require("./controllers");
const {validations}=require("./validations");

//add new record
router.post("/additem",validations,addRecord)
//all records
router.get("/getallitem/:id",allRecords)

module.exports = router;