const productModel = require("../models/product.model");

const createProductController = async(req, res)=>{
    try {
        const {name, description, price, category, brand, stock, rating} = req.body;

        if(!name || !description || !price || !category || !brand || !stock){
            return res.status(401).json({
                message:"All Fields are Mandatory."
            })
        }
        const newProduct = await productModel.create({
            name,
            description,
            price,
            category,
            brand,
            stock,
            rating
        })
        return res.status(201).json({
            message:"Product Created!"
        })
    } catch (error) {
        return res.status(500).json({
            message:"Error in Product Creation."
        })
    }
}


module.exports = {
    createProductController
}