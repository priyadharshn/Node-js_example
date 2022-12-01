const express= require("express");
const router= express.Router();
const homeSchema= require('./models/homeSchema');

////////const ModelRouter =require("./schema");

//const router=express.Router();
//const Model= require('./UserSchema');



// //post
// router.post('/post',async (req, res) => {
//     const data = new ModelRouter({
//         username: req.body.username,
//        email: req.body.email,
//        password: req.body.password
//     })
    

// // router.get('/get', (req, res) => {
// //    res.send('GET API');
// await data.save()
// res.status(200).json({
//     success:true,
//     status:200,
//     data
// });
// })


// //getAll

// router.get('/getall', async(req, res) =>{

// const findData= await ModelRouter.find();
    
// res.status(200).json(findData);
//     //success:true,


// })
// //get One
// router.get('/getOne/:id', async (req, res) => {
//     try{
//         const OneData = await ModelRouter.findById(req.params.id);
//         res.json(OneData)
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// })


// //Update
// router.put('/update/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const UpdateData = req.body;
//         const options = { new: true };

//         const Update= await ModelRouter.findByIdAndUpdate(id, UpdateData, options)

//         res.json(Update)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })


// //Delete
// router.delete('/delete/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const DelData = await ModelRouter.findByIdAndDelete(id)
//         res.json(DelData)
//         // res.json(`Document with ${DelData.name} has been deleted..`)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })




// router.get('/get', (req, res) => {
//         res.send('GET API');

    
//  try{

//     }
//     catch(error){
//        console.log(error)
//     }
// })

//module.exports= router;
 


// ----------------------------------------------------------------------------------------------------------------

router.get('/get',(err,res)=>{
    res.render("register");
})

 

 

router.post('/register',async (req, res) => {
    const data = new homeSchema({
        UserName: req.body.UserName,
        MobileNumber:req.body.MobileNumber,
       Email: req.body.Email,
       Password: req.body.Password,
       ConfirmPassword: req.body.ConfirmPassword
    })
    

await data.save()
res.status(200).json({
    success:true,
    status:200,
    data
});
})



module.exports=router;