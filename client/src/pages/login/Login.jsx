import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import Navbar from "../../components/navbar/Navbar";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const [errorMessage, setErrorMessage] = useState('');
  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      setErrorMessage('Incorrect username or password');
    }
  };

  // console.log(user);

  return (
    <div className="bod">
      <Navbar />

      <div class="center">
        <h1>Login</h1>
        <form method="post">
          <div class="txt_field">
            <input
              type="text"
              required
              id="username"
              onChange={handleChange}
              className="lInput"
            />
            <span></span>
            <label>Username</label>
          </div>
          <div class="txt_field">
            <input
              type="password"
              required
              id="password"
              onChange={handleChange}
              className="lInput"
            />
            <span></span>
            <label>Password</label>
          </div>
          <input
            disabled={loading}
            onClick={handleClick}
            type="submit"
            value="Login"
          />
          {errorMessage && <span className="error">{errorMessage}</span>}
          {error && <span>{error.message}</span>}
          <div class="signup_link">
            Not a member? <a onClick={()=>navigate('/register')}>Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
