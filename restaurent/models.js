const mongoose = require('mongoose');

const restaurentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    cuisine:{
        type:String,
        required:true
    },
    min_price:{
        type:Number,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    locality:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    meal_type: {
        type: Array,
        required: true
    }
}, {timestamps:true})

module.exports = mongoose.model("restaurent",restaurentSchema);