const express = require("express");
const {authMiddleware} = require("../middlewares/auth.middleware");
const {
    createProductController,
    updateProductController,
    deleteProductController,
    viewProductListController
} = require("../controllers/product.controller")
const router = express.Router();


router.post("/create",authMiddleware,createProductController)
router.patch("/:id", authMiddleware, updateProductController)
router.delete("/:id", authMiddleware, deleteProductController)
router.get("/viewAllProducts", authMiddleware, viewProductListController)


module.exports = router;
