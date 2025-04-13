import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../styles/LoginUser.css'

const LoginUser = () => {

    const [credentials, setCredentials] = useState({email: "", password: ""});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const response = await axios.post(`http://localhost:6900/api/users/login`, credentials, {withCredentials: true});
            
            if (response.status == 200){
                localStorage.setItem("token", response.data.token);
                alert(`Login successfully! 😎`)
                navigate("/")
            }
        }catch(err){
            console.log(err);
            console.log(`Login failed. Check connection or credentials`)
            alert('Invalid credentials!')
        }
        
    }


    return(
        <div className="login-container">
            <h2>Login Here!</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} placeholder="Email" name="email" type="email" required/>
                <input onChange={handleChange} placeholder="Password" name="password" type="password" required/>
                <button type="submit">Login</button>
            </form>
            <Link to="/sign-up"><p>New user? Sign-Up</p></Link>

        </div>
    )
}

export default LoginUser;