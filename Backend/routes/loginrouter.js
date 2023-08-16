const express=require('express');
const app = express();
const loginRouter=express.Router();
const User=require('../models/User');
const bcrypt=require('bcrypt');
const cors = require('cors');
require('../dbconfig');


//cors to fetch between front and back to solve cors error simpy
app.use(cors());

//to fetch the data from the req.body middleware
app.use(express.json());

loginRouter.post('/',async (req,res)=>{
    const {email,password}=req.body;
    try{
        const existEmail=await User.findOne({email});
        if(existEmail){
            const passwordMatch=await bcrypt.compare(password,existEmail.password);
            if(!passwordMatch){
                res.json(`wrongpassword`);
            }
            else{
                console.log(`check`);
                const secretKey='secret_key';
                const token=jwt.sign({userId:existEmail._id},secretKey,{expiresIn:'1h'});
                res.status(200).json({message:'success'});
            }
        }
    }catch(e){

    }
})

module.exports=loginRouter;
