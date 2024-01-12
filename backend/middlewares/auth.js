const catchAsyncError = require("./catchAsyncError");

exports.isSuthenticatedUser=catchAsyncError(async(req,res,next)=>{
    const token = req.cookie;
    console.log(cookie);
});
 