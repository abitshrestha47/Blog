import  {useState} from 'react';
import axios from 'axios'

const CreateBlog = () => {
    //button=>category pass=>create blog and post then
    const [image,setImage]=useState('');
    const [title,setTitle]=useState('');
    const [story,setStory]=useState('');
    const [category, setCategory] = useState('0'); 

    const handleImageUpload=(e)=>{
        const selectedImage=URL.createObjectURL(e.target.files[0]);
        setImage(selectedImage);
    }
    const saveBlog=async (e)=>{
        e.preventDefault();
        try{
            const response=await axios.post('http://localhost:2000/publishingblog',
            {
                title,story,image,category
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
            <img src={image} alt='your image'/>
        ):
        (
            <div className='add-image'>
                <label htmlFor='image-upload' className='image-upload-label'>
                    Add Image
                </label>
                <input type='file' accept='image/*' id='image-upload' onChange={handleImageUpload} name="image"/>
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
