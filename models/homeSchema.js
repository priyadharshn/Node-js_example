// const mongoose=require("mongoose");

// const userSchema=new mongoose.Schema({

//     UserName : {
//         type: String,     
//         required:true,
//         //required: [true,'username is required'],
//         // unique:true
//     },
//     MobileNumber : {
//         type: Number,
//         required:true,
//     },
//     Email : {
//         type:String,
//         required:true,
//         unique: true,
//     },
//     Password : {
//         type:String,
//         required:true,
//         minlength:6,

//     },
//     ConfirmPassword : {
//         type:String,
//         required:true,
//     },
    
// });

// module.exports = mongoose.model('User',userSchema);

// --------------------------------------------------------------------------------------------------------


const mongoose=require("mongoose");

const schema=mongoose.Schema;
const userSchema=new schema({

    UserName : {
        type: String,     
        required:true,
        //required: [true,'username is required'],
        // unique:true
    },
    MobileNumber : {
        type: Number,
        required:true,
    },
    Email : {
        type:String,
        required:true,
        unique: true,
    },
    Password : {
        type:String,
        required:true,

    },
    ConfirmPassword : {
        type:String,
        required:true,
    },
    
});

module.exports = mongoose.model('User',userSchema);
