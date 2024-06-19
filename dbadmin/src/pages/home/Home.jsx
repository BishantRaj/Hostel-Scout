import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
// import { Route } from "react-router-dom";

const Home = () => {
  return (

    <div className="home">
        <Sidebar />
      <Navbar />
    </div>
  );
};

export default Home;
