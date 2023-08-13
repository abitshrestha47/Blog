import {useState} from 'react';
import axios from 'axios'

const Signup=()=>{
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
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
            console.log(response.data);
        }catch(error){
            console.error(`error: ${error.message}`);
        }
    }
    return(
        <div className='signup'>
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