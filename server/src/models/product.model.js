const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true,
        index:true
    },
    brand:{
        type:String,
        required:true,
        index:true
    },
    stock:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        default:0
    }
}
,
{
    timestamps:true,
})

productSchema.index({price:1, rating:-1}); //Compund Indexing

const productModel = mongoose.model("product", productSchema);
module.exports = productModel; 