const mongoose = require('mongoose');

const mealtypeSchema = mongoose.Schema({
    meal_type:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
}, {timestamps:true})

module.exports = mongoose.model("mealType",mealtypeSchema);