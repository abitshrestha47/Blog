import homeImage from '../../images/home.jpg';
import {useNavigate} from 'react-router-dom'
const Home=()=>{
    const navigate=useNavigate();
    const createBlog=()=>{
        navigate('/createBlog',{replace:false});
    }
    return(
        <>
        <img src={homeImage} alt="Home" className='image'/>
        <button type="button" className='btn' onClick={createBlog}>Create Blog</button>
        </>
    );
}

export default Home;