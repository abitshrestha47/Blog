import homeImage from '../../images/home.jpg';
const Home=()=>{
    return(
        <>
        <img src={homeImage} alt="Home" className='image'/>
        <button type="button" className='btn'>Create Blog</button>
        </>
    );
}

export default Home;