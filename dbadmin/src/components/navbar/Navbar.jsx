import "./navbar.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const {user} = useContext(AuthContext);
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
        <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
          <img src={user.img} alt="Profile" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
