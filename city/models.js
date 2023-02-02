const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    location_id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
}, {timestamps:true})

module.exports = mongoose.model("city",citySchema);