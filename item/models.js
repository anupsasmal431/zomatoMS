const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    restaurantId: {
        type: String,
        required: true
    },
    ingridients: {
        type: Array,
        required:true
    },
    image: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    price:{
        type:Number,
        required:true
    }
}, {timestamps:true})

module.exports = mongoose.model("item",itemSchema);