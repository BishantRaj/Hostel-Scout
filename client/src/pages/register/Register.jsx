import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";
import Navbar from "../../components/navbar/Navbar";
import { Image, CloudinaryContext } from "cloudinary-react";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
    phone: undefined,
    city: undefined,
    state: undefined,
    img: undefined,
  });
  const [file, setFile] = useState("");
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    dispatch({ type: "REGISTER_START" });
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/bishu/image/upload",
        data
      );
      const { url } = uploadRes.data;
      credentials.img = url;
      const res = await axios.post("/auth/register", credentials);
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
      navigate("/login");
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
      setErrorMessage('Username is already used');
    }
  };

  return (
    <div className="bod">
      <Navbar />
      <div className="rcenter">
        <h1>Register</h1>
        <div className="left">
          <label htmlFor="img" className="dp">
            <input
              type="file"
              id="img"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              className="profile-picture-img"
            />
          </label>
        </div>
        <form method="post">
          <div className="txt_field">
            <input
              type="text"
              required
              id="username"
              onChange={handleChange}
              className="rInput"
            />
            <span></span>
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input
              type="email"
              required
              id="email"
              onChange={handleChange}
              className="rInput"
            />
            <span></span>
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              required
              id="password"
              onChange={handleChange}
              className="rInput"
            />
            <span></span>
            <label>Password</label>
          </div>
          <div className="txt_field">
            <input
              type="text"
              required
              id="phone"
              onChange={handleChange}
              className="rInput"
            />
            <span></span>
            <label>Phone</label>
          </div>
          <div className="txt_field">
            <input
              type="text"
              required
              id="city"
              onChange={handleChange}
              className="rInput"
            />
            <span></span>
            <label>City</label>
          </div>
          <div className="txt_field">
            <input
              type="text"
              required
              id="state"
              onChange={handleChange}
              className="rInput"
            />
            <span></span>
            <label>State</label>
          </div>
          <input
            disabled={loading}
            onClick={handleClick}
            type="submit"
            value="Register" // Changed the button text from "Login" to "Register"
          />
          {errorMessage && <span className="error">{errorMessage}</span>}
          {error && <span>{error.message}</span>}
          <div className="signup_link">
            Already a member? <a onClick={() => navigate("/login")}>Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
