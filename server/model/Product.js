const mongoose = require('mongoose');
const {model} = require("mongoose");

const ProductModel = mongoose.Schema(
    {
        "id": {
                require: true,
                type: Number,
                unique: true,
                index: true //For better performance
        },
        "name": {
                require: true,
                type: String
        },
        "price": {
                require: true,
                type: Number
        },
        "currency": "LKR",
        "image": {
                require : true,
                type: String
        }

    }
);

const Product= mongoose .model('Product', ProductModel);

module.exports = Product;
