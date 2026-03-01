const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const {
    createProductController,
    updateProductController
} = require("../controllers/product.controller")
const router = express.Router();


router.post("/create",authMiddleware,createProductController)
router.patch("/:id", authMiddleware, updateProductController)


module.exports = router;
