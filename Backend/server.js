const express = require('express');
const cors = require('cors');
const User=require('./models/User');
const router=express.Router();
const app = express();
const PORT = process.env.PORT || 5000;

require('./dbconfig');
//cors to fetch between front and back to solve cors error simpy
app.use(cors());

//to fetch the data from the req.body middleware
app.use(express.json());

//using router for routes
router.post('/',async (req,res)=>{
    const {username,email,password}=req.body;
    try{
        const existingUser=await User.findOne({email});
        if(existingUser){
            res.json('existed');
        }else{
            const newUser=new User({username,email,password});
            await newUser.save();
            res.json('success');
        }
    }catch(error){
        res.status(500).json({error:`Failed to signup ${error.message}`});
    }
})

router.post('/login',async (req,res)=>{
    const {email,password}=req.body;
    try{
        const existEmail=await User.findOne({email});
        if(existEmail){
        }
    }catch(e){

    }
})

//mounting the routes
app.use('/signup', router);

app.listen(2000,()=>{
    console.log(`Server Listening on http://localhost:2000`);
})