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

const viewProductListController = async (req, res) => {
  try {

    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 8;
    let skip = (page - 1) * limit;

    let query = {};

    if (req.query.category) {
      query.category = req.query.category;
    }

    if (req.query.brand) {
      query.brand = req.query.brand;
    }

    if (req.query.rating) {
      query.rating = { $gte: Number(req.query.rating) };
    }

    if (req.query.inStock === "true") {
      query.stock = { $gt: 0 };
    }

    if (req.query.minPrice || req.query.maxPrice) {
      query.price = {};

      if (req.query.minPrice) {
        query.price.$gte = Number(req.query.minPrice);
      }

      if (req.query.maxPrice) {
        query.price.$lte = Number(req.query.maxPrice);
      }
    }

    if (req.query.search) {
      query.name = {
        $regex: req.query.search,
        $options: "i"
      };
    }

    let sortOption = {};

    switch (req.query.sort) {
      case "priceLowHigh":
        sortOption.price = 1;
        break;

      case "priceHighLow":
        sortOption.price = -1;
        break;

      case "newest":
        sortOption.createdAt = -1;
        break;

      case "topRated":
        sortOption.rating = -1;
        break;

      default:
        sortOption.createdAt = -1;
    }

    const totalProducts = await productModel.countDocuments(query);

    const products = await productModel
      .find(query)
      .sort(sortOption)
      .skip(skip)
      .limit(limit);

    return res.status(200).json({
      message: "Products fetched successfully",
      page,
      limit,
      totalProducts,
      totalPages: Math.ceil(totalProducts / limit),
      products
    });

  } catch (error) {
    return res.status(500).json({
      message: "Error fetching products",
      error: error.message
    });
  }
};

module.exports = {
    createProductController,
    updateProductController,
    deleteProductController,
    viewProductListController
}