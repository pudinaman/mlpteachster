const express=require("express");
const app=express();
const errorMiddleware=require("../backend/middlewares/error");
const cookieParser=require("cookie-parser");
const cors=require("cors")
app.use(express.json());
app.use(cookieParser);
app.use(cors());
//Route Imports
const user=require("./routes/userRoutes");
app.use("/api/ver1",user);


module.exports=app;

//middleware for error
app.use(errorMiddleware);