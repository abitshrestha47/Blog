const verifyToken=(req,res,next)=>{
    const token=req.header('Authorization');
    if(!token){
        return res.status(401).json({error:'Unauthorized'});
    }
    jwt.verify(token,'secret_key',(err,decodedToken)=>{
        if(err){
            return res.status(403).json({error:'Invalid token'});
        }
        req.userId=decodedToken.userId;
        next();
    })
}

app.get('/protected',verifyToken,(req,res)=>{
    res.json({message:'This is a protected route',userId:req.userId});
})