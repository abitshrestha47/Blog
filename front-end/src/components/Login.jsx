import {useState} from 'react';


const Login=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return(
        <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                <button type='submit'>Login</button>
            </form>
        </>
    );
}
export default Login;