const express = require('express');
const cors = require('cors');
const User=require('./models/User');
const Blog=require('./models/Blog');
const blogrouter=express.Router();
const getBlogs=express.Router();
const app = express();
const PORT = process.env.PORT || 5000;
const jwt=require('jsonwebtoken');
const loginRouter = require('./routes/loginrouter');
const router=require('./routes/signuprouter');

require('./dbconfig');
//cors to fetch between front and back to solve cors error simpy
app.use(cors());

//to fetch the data from the req.body middleware
app.use(express.json());

//using router for routes

blogrouter.post('/',async(req,res)=>{
    const {title,story,category,image}=req.body;
    try{
        const newBlog=new Blog({title,story,category,image});
        await newBlog.save();
        res.json('success');
    }catch(err){
        res.status(500).json({error:`Failed to create blog`});
    }

})

getBlogs.get('/',async(req,res)=>{
    try{
        const blogs=await Blog.find();
        res.json(blogs);
    }catch(err){
        res.status(500).json({error:`Failed to fetch blogs`});
    }
})


//mounting the routes
app.use('/signup', router);
app.use('/publishingblog',blogrouter);
app.use('/login',loginRouter);
app.use('/',getBlogs);

app.listen(2000,()=>{
    console.log(`Server Listening on http://localhost:2000`);
})