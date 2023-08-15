const express = require('express');
const cors = require('cors');
const User=require('./models/User');
const router=express.Router();
const loginRouter=express.Router();
const app = express();
const PORT = process.env.PORT || 5000;
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

require('./dbconfig');
//cors to fetch between front and back to solve cors error simpy
app.use(cors());

//to fetch the data from the req.body middleware
app.use(express.json());

//using router for routes
router.post('/',async (req,res)=>{
    const {username,email,password}=req.body;
    //to bcrypt password on 2^10 computational cost 
    const hashedPassword=await bcrypt.hash(password,10);
    try{
        const existingUser=await User.findOne({email});
        if(existingUser){
            res.json('existed');
        }else{
            console.log(hashedPassword);
            const newUser=new User({username,email,password:hashedPassword});
            await newUser.save();
            console.log(newUser);
            res.json('success');
        }
    }catch(error){
        res.status(500).json({error:`Failed to signup ${error.message}`});
    }
})

loginRouter.post('/',async (req,res)=>{
    const {email,password}=req.body;
    console.log(password)
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

//mounting the routes
app.use('/signup', router);
app.use('/login',loginRouter);

app.listen(2000,()=>{
    console.log(`Server Listening on http://localhost:2000`);
})