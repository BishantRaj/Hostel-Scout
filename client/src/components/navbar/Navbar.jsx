import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import React from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
// import logo from './logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { logout } = useContext(AuthContext);

  const renderUserIcon = () => {
    if (user.img) {
      return <img src={user.img} alt="User" className="logo" />;
    } else if (user.details.img) {
      return <img src={user.details.img} alt="User" className="logo" />;
    } else if (user.details.username) {
      const firstLetter = user.details.username.charAt(0).toUpperCase();
      return <span className="logo2">{firstLetter}</span>;
    } else if (user.username) {
      const firstLetter = user.username.charAt(0).toUpperCase();
      return <span className="logo2">{firstLetter}</span>;
    } else {
    }
  };

  const handleLogoClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <div className="navbar">
        {/* <img className="logo" src={logo} alt="" /> */}
        <div className="navContainer">
          <Link
            to="/"
            className="hg"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <span className="logo1">Hostel-Scout.com</span>
          </Link>
          {user ? (
            <div className="lt">
              <div className="logo-container">
                <div className="" onClick={handleLogoClick}>
                  {renderUserIcon()}
                </div>
                {showMenu && (
                  <ul className="menu" typeof="none">
                    <li>
                      <Link to="/profile" className="opt">
                        Profile
                      </Link>
                    </li>
                    <li onClick={handleLogout} className="opt">
                      Logout
                    </li>
                  </ul>
                )}
              </div>
            </div>
          ) : (
            <div className="navItems">
              {/* <button className="navButton" onClick={()=>navigate('/register')}>Register</button>
                    <button className="navButton" onClick={()=>navigate('/login')}>Login</button> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
