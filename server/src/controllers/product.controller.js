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
        console.log(id)
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
            {returnDocument: 'after',
                runValidators:true
            }
        )

        return res.status(200).json({
            message:"Product Updated!",
            product: updatedProduct
        })

    } catch (error) {
        return res.status(500).json({
            message:"There is some error in Updation - Check Again.",
            error:error.message
        })
    }
}

const deleteProductController = async(req, res)=>{
    try {
        let id = req.params.id;
        if(!id){
            return res.status(404).json({
                message:"Product ID not found"
            })
        }

        let product = await productModel.findById(id);
        if(!product){
            return res.status(404).json({
                message:"Product not found."
            })
        }

        let deleteProduct = await productModel.findByIdAndDelete(id);
        return res.status(200).json({
            message:"Product Deleted Successfully."
        })
    } catch (error) {
        return res.status(500).json({
            message:"There is some error in DEletion - Check Again.",
            error:error.message
        })
    }
}

const viewProductListController = async(req, res)=>{
    try {
        const products = await productModel.find();
        if(!products || products.length === 0){
            return res.status(404).json({
                message: "No Product Found"
            })
        }

        return res.status(200).json({
            message:"Products Fetched Successfully",
            total: products.length,
            products: products
        })
    } catch (error) {
        return res.status(500).json({
            message:"There is some error in Fetching all products - Check Again.",
            error:error.message
        })
    }
}


module.exports = {
    createProductController,
    updateProductController,
    deleteProductController,
    viewProductListController
}