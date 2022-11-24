
const express = require("express"); // Importing the express module
const app=express();                // Initializing the express and call      

const mongoose=require('mongoose');

const connectdb = require("./db");
connectdb();


//app.use('api',routers);
app.use(express.json());                                  ////Calling the express.json() method for parsing
//app.use('api',routers);

const routers=require("./routers");


app.use("/User",routers);
app.use("/",(req,res)  =>                                   //middleware//accessing
 {
     res.send("Nodejs")
 })
const port=3000;                                           // Initializing the  port number

app.listen(port, () => {                                // Listening to the port
    console.log(`Server Started at ${port}`);  
  
})

//const ModelRouter = require('./routers');
//app.use("Info",ModelRouter);


// mongoose.connect('mongodb://localhost:27017/crud_db',
// {
//     useNewUrlParser:true,useUnifiedTopology:true
// },()=>{
//     console.log("DB connected");
// })



