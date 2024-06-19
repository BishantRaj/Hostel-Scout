import "./single.scss";
import { useContext } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router-dom";

const Single = () => {
  const { username, email, address, phone, state } = useParams();
  const {user} = useContext(AuthContext);
  console.log(username);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            {/* <div className="editButton">Edit</div> */}
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={user.img}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{user.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    {user.city}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">State:</span>
                  <span className="itemValue">{user.state}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
