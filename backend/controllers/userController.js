const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors=require("../middlewares/catchAsyncError");
const User=require("../models/userModel");
const sendTokken =require("../utils/jwtToken");

//Register our user
exports.registerUser=catchAsyncErrors(async(req,res,next)=>{
    const{name,email,password}=req.body;

    const user=await User.create({
        name,email,password,
        avatar:{
            public_id:"this is a sample id",
            url:"profilepicUrl",
        },
    });
    const token =user.getJWTToken();
    res.status(200).json({
        success:true,
        token,
    });
});

//login user

exports.loginUser=catchAsyncErrors(async(req,res,next)=>{
    const {email,password}=req.body;
    //checking if user has give password and email both

    if(!email||!password){
        return next(new ErrorHandler("Please enter email & password",400))
    }

    const user=await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHandler("invalid email or password",401));

    }
    const isPasswordMatched =await user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler("invalid email or password",401));

    }
   sendTokken(user,200,res);
})