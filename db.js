const mongoose=require("mongoose");                         //importing the mongoose

const connectdb= async()=>{
mongoose.connect("mongodb://localhost:27017/crud_db",{     //connect the database(mongodb)
useNewUrlParser:true,
useUnifiedTopology:true,
},()=>{ console.log("success");                                         //use callback      
})
}

module.exports=connectdb;

// ,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("success");
//     }
//})