const userModel = require("../models/user.model");
const bcryptJs = require('bcryptjs');
const jwt = require("jsonwebtoken");


const registerController = async(req, res)=>{
    try {
        const {fullName, email, password} = req.body; 
        if(!fullName || !email || !password){
            return res.status(400).json({
                message:"All Fields Required!"
            })
        }
        console.log("chala1");
        let existingUser = await userModel.findOne({email});
         console.log("chala2");
        if(existingUser){
            return res.status(422).json({
                message:"User already exists"
            })
        }
         console.log("chala3");

        const hashedPassword = await bcryptJs.hash(password, 10);
         console.log("chala4");

        let newUser = await userModel.create({
            fullName,
            email,
            password: hashedPassword,
        })
         console.log("chala5");

         console.log(process.env.JWT_SECRET);
        const token = jwt.sign({id:newUser._id, role:newUser.role}, process.env.JWT_SECRET, {expiresIn:"7d"})
        res.cookie("token",token);

        const userObj = newUser.toObject(); //copy of original object
        delete userObj.password;

        return res.status(201).json({
            message:"USer Created Successfully",
            user:userObj,
        })

    } catch (error) {
        return res.status(500).json({
            message:"Error in creating User",
            error:error.message,
        })
    }
}


const loginController = async(req, res)=>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                message: "All fileds required!"
            })
        }
        let existingUser = await userModel.findOne({
            email
        })
        if(!existingUser){
            return res.status(400).json({
                message: "USer not found"
            })
        }
        let comparePassword = await bcryptJs.compare(password, existingUser.password)
        if(!comparePassword){
            return res.status(401).json({
                message:"Invalid Creds!"
            })
        }
        console.log(existingUser);
        const token = jwt.sign({id:existingUser._id, role:existingUser.role}, process.env.JWT_SECRET, {expiresIn: '7d'});
        res.cookie('token',token)

        const userObj = existingUser.toObject();
        delete userObj.password;

        return res.status(200).json({
            message:"User Successfully Logged In ",
            user:userObj
        })
    } catch (error) {
        return res.status(500).json({
            message:"Error in Logging User",
            error:error.message,
        })
    }
}



const logoutController = async(req,res)=>{
    try {
        res.clearCookie("token");
        return res.status(200).json({
            message: "USer logged out successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message:"Logout Failed",
            error:error.message,
        })
    }
}



module.exports = {
    registerController,
    loginController,
    logoutController
}