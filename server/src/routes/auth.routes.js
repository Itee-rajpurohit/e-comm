const express = require("express");
const {registerController,
    loginController,
    logoutController,
    profileController
} = require("../controllers/auth.controllers");
const {universalAuth} = require("../middlewares/auth.middleware")


const router = express.Router();
router.post('/register',registerController)
router.post('/login',loginController)
router.get('/logout',logoutController)
router.get('/profile', universalAuth, profileController)


module.exports = router;