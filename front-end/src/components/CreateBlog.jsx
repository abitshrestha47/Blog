import  {useState} from 'react';
import axios from 'axios'


const CreateBlog = () => {
    //button=>category pass=>create blog and post then
    const [image,setImage]=useState('');
    const [showImage,setshowImage]=useState('');
    const [title,setTitle]=useState('');
    const [story,setStory]=useState('');
    const [category, setCategory] = useState('0'); 

    const handleImageUpload=(e)=>{
        const selectedImage=URL.createObjectURL(e.target.files[0]);
        setshowImage(selectedImage);
        setImage(e.target.files[0]);
    }
    const saveBlog=async (e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append('title',title);
        formData.append('story',story);
        formData.append('category',category);
        formData.append('image',image);
        try{
            const response=await axios.post('http://localhost:2000/publishingblog',formData,{
                headers:{"Content-Type":"multipart/form-data"},
            });
            console.log(response);
        }catch(e){
            console.log(`Error message:${e.message}`);
        }
    }
  return (
    <div className="create-blog-container">
        <form onSubmit={saveBlog}>
        <div className="image-container">
        {image?
        (
            <img src={showImage} alt='your image'/>
        ):
        (
            <div className='add-image'>
                <label htmlFor='image-upload' className='image-upload-label'>
                    Add Image
                </label>
                <input type='file' accept='image/*' onChange={handleImageUpload} id='image-upload' name="image"/>
            </div>
        )}
      </div>
      <input className="title-input" type="text" placeholder="Title" id='title' onChange={(e)=>setTitle(e.target.value)} name='title' required />
      <textarea className="story-input" name="story" placeholder="Tell your story" id='story' onChange={(e)=>setStory(e.target.value)}/>
      <div className="contain">
      <select className="category" id='category' onChange={(e)=>setCategory(e.target.value)} name='category'>
            <option value="0">Coding</option>
            <option value="1">Education</option>
      </select>
      <button className="publish-btn" type="submit">Publish
      </button>
      </div>
        </form>
    </div>
  );
};

export default CreateBlog;
