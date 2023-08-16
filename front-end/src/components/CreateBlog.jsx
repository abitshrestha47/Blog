import  {useState} from 'react';

const CreateBlog = () => {
    //button=>category pass=>create blog and post then
    const [image,setImage]=useState('');
    const handleImageUpload=(e)=>{
        const selectedImage=URL.createObjectURL(e.target.files[0]);
        setImage(selectedImage);
    }
  return (
    <div className="create-blog-container">
      <div className="image-container">
         {image?(
            <img src={image} alt="User's Image"/>):
            (
                <div className='add-image'>
                    <label htmlFor='image-upload' className='image-upload-label'>
                        Add Image
                    </label>
                    <input id='image-upload' type='file' accept='image/*' onChange={handleImageUpload}/>
                </div>
         )}
      </div>
      <input className="title-input" type="text" placeholder="Title" />
      <textarea className="story-input" placeholder="Tell your story" />
      <div className="contain">
      <select className="category">
            <option value="0">Coding</option>
            <option value="1">Education</option>
      </select>
      <button className="publish-btn" type="button">Publish
      </button>
      </div>
    </div>
  );
};

export default CreateBlog;
