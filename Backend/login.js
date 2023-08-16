const express=require('express');
const app = express();
const loginRouter=express.Router();
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

app.use('/login',loginRouter);

