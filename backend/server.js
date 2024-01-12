const app=require("../backend/app");
const dotenv=require("dotenv");


const connectDatabase = require("../backend/config/database");




//config
dotenv.config({path:"backend/config/config.env"});


//connect
connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})

//unhandelled Promise rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled Promise rejection`);

    server.close(()=>{
        process.exit(1);
    })
});