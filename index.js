
// const bodyParser = require("body-parser");

// const express = require("express"); // Importing the express module
// const ejs=require("ejs")
// const path=require("path")

// const mongoose=require('mongoose');

//  const routers=require("./routers");

//  const app=express();                // Initializing the express and call      

//  const regis=path.join(__dirname,'regis')

// app.set('view engine','ejs')
// app.set("views",regis)

// app.use(bodyParser.json())


// app.get('/',(err,res)=>{
//        res.render('register')//{title:'Register'})
//  })
    


// const connectdb = require("./db");
// connectdb();


// app.use(express.json());                                  ////Calling the express.json() method for parsing





// app.use("/User",routers);
// app.use("/api",(req,res)  =>                                   //middleware//accessing
//  {
//      res.send("Nodejs")
//  })
// const port=3000;                                           // Initializing the  port number

// app.listen(port, () => {                                // Listening to the port
//     console.log(`Server Started at ${port}`);  
  
// })
// -------------------------------------------------------------------------------

//const ModelRouter = require('./routers');
//app.use("Info",ModelRouter);


// mongoose.connect('mongodb://localhost:27017/crud_db',
// {
//     useNewUrlParser:true,useUnifiedTopology:true
// },()=>{
//     console.log("DB connected");
// })

// ----------------------------------------------------------------------------------------------




const express = require("express"); 

const mongoose=require('mongoose');

 const routers=require("./routers");

 const bodyParser = require("body-parser");
//  const ejs=require("ejs");


 const app=express(); 
 

const connectdb = require("./db");
 connectdb();


app.use(express.json());
app.set('view engine','ejs')


app.use(bodyParser.json())




app.use("/",routers);
// app.use("/api",(req,res)  =>                                   
//  {
//      res.send("Nodejs")
//  })
const port=3000;                                           

app.listen(port, () => {                                
    console.log(`Server Started at ${port}`);  
  
})
