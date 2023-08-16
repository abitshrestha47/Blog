import homeImage from '../../images/home.jpg';
import {useNavigate} from 'react-router-dom'
import {useEffect,useState} from 'react';
import axios from 'axios'

const Home=()=>{
    const navigate=useNavigate();
    const [blogs,setBlogs]=useState([]);
    const createBlog=()=>{
        navigate('/createBlog',{replace:false});
    }
    const fetchBlogs=async ()=>{
        try{
            const response=await axios.get('http://localhost:2000')
            console.log(response);
            setBlogs(response.data);
        }catch(error){
            console.log('Error fetching blogs:', error);
        }
    }
    useEffect(()=>{
        fetchBlogs();
    },[]);
    return(
        <>
        <img src={homeImage} alt="Home" className='image'/>
        <button type="button" className='btn' onClick={createBlog}>Create Blog</button>
        <div className="blogs">
        {blogs.map(blog => (
          <div key={blog._id} className="blog">
            <h2>{blog.title}</h2>
            <p>{blog.story}</p>
            <p>Category: {blog.category}</p>
            <img src={blog.image} alt='image'  width="300" />
          </div>
        ))}
      </div>
        </>
    );
}

export default Home;