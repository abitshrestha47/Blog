import {useState} from 'react';
import axios from 'axios'
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Signup=()=>{
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            //using axios to minimize the fetching processes
            const response=await axios.post('http://localhost:2000/signup',{
                username,
                email,
                password,
            })
            console.log(`sent`);
            if(response.data==='success'){
                toast('Signup successful');
                setTimeout(() => {
                  navigate('/', { replace: false });
                }, 1000);
            }
            else if(response.data==="existed"){
                toast(`Email already taken`);
                setTimeout(()=>{
                    setEmail('');
                    setPassword('');
                },500)
            }
            else{
                toast(`Failed to register`);
            }
        }catch(error){
            console.error(`error: ${error.message}`);
        }
    }
    return(
        <div className='signup'>
            <ToastContainer />
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} method='post'>
                <div className='input-group'>
                    <label>Username:</label>
                    <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                </div>
                <div className='input-group'>
                    <label>Email:</label>
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div className='input-group'>
                    <label>Password:</label>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
}
export default Signup;