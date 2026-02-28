const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const {
    createProductController
} = require("../controllers/product.controller")
const router = express.Router();


router.post("/create",authMiddleware,createProductController)


module.exports = router;
