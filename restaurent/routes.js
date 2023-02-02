const express = require('express');
const router = express.Router(); 
const {addRecord,singleRecordByid,allrestaurentBycity,filterRestaurent}=require("./controllers");
const {validations}=require("./validations");

//add new record
router.post("/addrestaurent",validations,addRecord)
//all records
//router.get("/getallmealtype",allRecords)

//single record by id
router.get("/details/:id",singleRecordByid)

//all record by name ?name=Delhi
router.get("/all/:location_id?",allrestaurentBycity)

//filter restaurent by mealtype
router.get("/filter",filterRestaurent)

module.exports = router;