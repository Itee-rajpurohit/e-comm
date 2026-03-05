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
        
        if(decoded.role === "user"){
            return res.status(403).json({
                message: "You are not Admin!"
            })
        }
         let currentUser = await userModel.findById(decoded.id);
            req.user = currentUser;
        next();
    } catch (error) {
        return res.status(401).json({
            message:"Inavalid Token !"
        })
    }
}

async function universalAuth(req, res, next){
    let token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            message:"Please Login!"
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        let currentUser = await userModel.findById(decoded.id);
        req.role = decoded.role;
        req.user = currentUser;
        next();
    } catch (error) {
        return res.status(401).json({
            message:"Invalid Token!"
        })
    }
}

module.exports = {authMiddleware,
    universalAuth
}