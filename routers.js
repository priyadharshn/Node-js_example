const express= require("express");
const router= express.Router();

const ModelRouter =require("./schema");

//const router=express.Router();
//const Model= require('./UserSchema');

router.post('/post',async (req, res) => {
    const data = new ModelRouter({
        username: req.body.username,
       email: req.body.email,
       password: req.body.password
    })
    

// router.get('/get', (req, res) => {
//    res.send('GET API');
await data.save()
res.status(200).json({
    success:true,
    status:200,
    data
});
})

// app.get('/', function (req, res) {
//     res.status(200).send('Status: OK')
// });








router.get('/get', (req, res) => {
        res.send('GET API');

    
 try{

    }
    catch(error){
        
    }
})

module.exports= router;
