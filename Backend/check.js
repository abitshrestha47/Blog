const express=require('express');
const app=express();

const articlesRouter=express.Router();

articlesRouter.get('/',(req,res)=>{
    res.send('List of articles');
})

articlesRouter.get('/:id',(req,res)=>{
    const articleID=req.params.id;
    res.send(`Article ${articleID}`);
})

app.use('/articles',articlesRouter);


app.listen(3000,()=>{
    console.log(`Server listening on http://localhost:3000`)
})