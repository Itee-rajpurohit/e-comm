//Middleware is needed in this project bcz Only Admin can add the Products & not user

const userModel = require('../models/user.model');
const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next){
    let token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            message:"Please Login First"
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Chala11" ,decoded);
        if(decoded.role === "user"){
            return res.status(403).json({
                message: "You are not Admin!"
            })
        }
        console.log("Chala12");

         let currentUser = await userModel.findById(decoded.id);
            req.user = currentUser;
        next();
    } catch (error) {
        return res.status(401).json({
            message:"Inavalid Token !"
        })
    }
}

module.exports = authMiddleware