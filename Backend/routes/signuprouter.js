const express=require('express');
const app= express();
const cors = require('cors');
const router=express.Router();
const bcrypt=require('bcrypt');
const User=require('../models/User');
require('../dbconfig');


//cors to fetch between front and back to solve cors error simpy
app.use(cors());

//to fetch the data from the req.body middleware
app.use(express.json());

router.post('/',async (req,res)=>{
    const {username,email,password}=req.body;
    //to bcrypt password on 2^10 computational cost 
    const hashedPassword=await bcrypt.hash(password,10);
    try{
        const existingUser=await User.findOne({email});
        if(existingUser){
            res.json('existed');
        }else{
            const newUser=new User({username,email,password:hashedPassword});
            await newUser.save();
            console.log(newUser);
            res.json('success');
        }
    }catch(error){
        res.status(500).json({error:`Failed to signup ${error.message}`});
    }
})

module.exports=router;