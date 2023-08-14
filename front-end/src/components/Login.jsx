import {useState} from 'react';
import axios from 'axios'

const Login=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            const response=await axios.post('http://localhost:2000/login',{
                email,
                password,
            })
            await console.log(response);
        }catch(e){
            console.log(`Error:${e.message}`);
        }
    }
    return(
        <div className='login'>
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