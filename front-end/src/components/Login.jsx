import {useState} from 'react';
import axios from 'axios'
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



const Login=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            const response=await axios.post('http://localhost:2000/login',{
                email,
                password,
            })
            if(response.data==='wrongpassword'){
                toast(`Wrong password!`);
            }
            else if(response.status===200){
                console.log('check');
                toast(`Login successful!`);
                setTimeout(()=>{
                    // navigate('/login', { replace: false });
                    if (navigate) {
                        navigate('/', { replace: false });
                      }
                },1000)
            }
        }catch(e){
            console.log(`Error:${e.message}`);
        }
    }
    return(
        <div className='login'>
            <ToastContainer />
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <label>Email:</label>
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div className='input-group'>
                    <label>Password:</label>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}
export default Login;