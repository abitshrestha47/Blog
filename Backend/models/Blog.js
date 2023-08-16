const mongoose=require('mongoose');
const blogSchema=new mongoose.Schema({
    title:String,
    story:String,
    image:String,
    category:String,
});

module.exports=mongoose.model('blogs',blogSchema);