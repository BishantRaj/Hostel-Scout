import "./mailList.css"
import { useNavigate } from "react-router-dom";

const MailList = () => {
  const navigate = useNavigate();
  return (
    <div className="mail">
        <h1 className="mailTitle">Save time, Save money</h1>
        <span className="mailDesc">Sign up and we'll send the best deals to you</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Your email address"></input>
            <button onClick={() => navigate("/register")}>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList