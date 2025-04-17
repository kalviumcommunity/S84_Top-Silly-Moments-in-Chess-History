    import { useState, useEffect } from "react";
    import { data, useNavigate, Link } from "react-router-dom";
    import LoginUser from "./LoginUser";
    import axios from "axios";
    import '../styles/SignUpUser.css'


    const SignUpUser = () => {
        const [user, setUser] = useState({name: "", email: "", password: ""})
        const navigate = useNavigate();

        const handleChange = (e) => {
            setUser({...user, [e.target.name]: e.target.value})
        }
        
        const handleSubmit = async(e) => {
            e.preventDefault();
            try{
                const response = await axios.post(`https://top-silly-moments-in-chess.onrender.com/api/users`, user, {withCredentials: true})
                localStorage.setItem("token", response.data.token);
                if (response.status === 201){
                    localStorage.setItem("token", response.data.token);
                    alert(`Sign-Up Successfully ! 😘`);
                    navigate('/')
                }
            }catch(err){
                if (err.response?.status === 409){
                    alert(`This mail already exist. Please use a different mail!`)
                }
                console.error(`Sign-Up failed. Check connection or credentials`, err);
            }
        }


        return(
            <div className="signup-container">
                <h2>Sign-Up Here!</h2>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} placeholder="Name" name="name" type="text" required/>
                    <input onChange={handleChange} placeholder="Email" name="email" type="email" required/>
                    <input onChange={handleChange} placeholder="Password" name="password" type="password" required/>
                    <button type="submit">Sign-Up</button>
                </form>
                <Link to="/log-in"><p>Already have an account? Login</p></Link>
                
            </div>
        )
    }
    export default SignUpUser;