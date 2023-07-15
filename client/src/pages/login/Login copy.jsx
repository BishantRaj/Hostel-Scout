import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import Navbar from "../../components/navbar/Navbar"

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const {loading, error, dispatch } = useContext(AuthContext);

  const navigate=useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick=async e=>{
    e.preventDefault()
    dispatch({type:"LOGIN_START"})
    try{
        const res=await axios.post("/auth/login",credentials)
        dispatch({type:"LOGIN_SUCCESS",payload:res.data})
        navigate("/")
    }catch(err){
        dispatch({type:"LOGIN_FAILURE",payload:err.response.data})
    }
  }

  // console.log(user);
  

  return (
    <div className="bod">
    <Navbar />
    
    <div className="center">
    <h1 className="heading">Sign in or create an account</h1>
      <div className="lContainer">
      <div class="txt_field">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
          required
        />
        <span></span>
          <label>Username</label>
        </div>

        <div class="txt_field">
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
          required
        />
        <span></span>
          <label>Password</label>
          </div>


        <button disabled={loading} onClick={handleClick} className="lButton">Login</button>
        {error && <span>{error.message}</span>}
      <div class="signup_link">
          Not a member? <a href="#">Signup</a>
        </div></div>
    </div></div>
  );
};

export default Login;
