const productModel = require("../models/product.model");

const createProductController = async(req, res)=>{
    try {
        console.log("Controller reached");
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
        console.log("Created Product:", newProduct);
        return res.status(201).json({
            message: "BRO THIS IS THE NEW CONTROLLER",
            data: newProduct
        })
    } catch (error) {
        return res.status(500).json({
            message:"Error in Product Creation."
        })
    }
}



const updateProductController = async(req, res)=>{
    try {
        console.log("controller reached")
        let id = req.params.id;
                if(!id){
                    return res.status(404).json({
                        message:"Id not found"
                    })
                }
                console.log(id)
        let product = await productModel.findById(id)
        console.log(id);
        console.log(product)
        if(!product){
            return res.status(404).json({
                message:"Product Unavailable."
            })
        }

        const updatedProduct = await productModel.findByIdAndUpdate(
            id,
            {$set:req.body},
            {new:true}
        )

        return res.status(200).json({
            message:"Product Updated!",
            product: updatedProduct
        })

    } catch (error) {
        return res.status(500).json({
            message:"There is some error in Updation - Check Again."
        })
    }
}

module.exports = {
    createProductController,
    updateProductController
}