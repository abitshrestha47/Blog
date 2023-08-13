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
        <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} method='post'>
                <div>
                    <label>Username:</label>
                    <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                <button type='submit'>Sign Up</button>
            </form>
        </>
    );
}
export default Signup;