const express=require("express");
const {registerUser, loginUser}=require("../controllers/userController");
const router =express.Router();

router.route("/register1").post(registerUser);
router.route("/login1").post(loginUser);

module.exports=router;