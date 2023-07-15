import "./featured.css";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Bhopal,Patna,Gaya"
  );
  const [add,setAdd]=useState("");
  const {dispatch}=useContext(SearchContext);
  const navigate=useNavigate();
  const handleClick=()=>{
    dispatch({type:"NEW_SEARCH",payload:{add}})
      navigate("/chotels",{state:{add}})
  }

  // console.log("here"+data);
//https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
            
            onClick={handleClick}
              src="https://upload.wikimedia.org/wikipedia/commons/3/32/Deewali_New_market.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Indrapuri</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://im.proptiger.com/1/2022832/6/heights-phase-i-elevation-105310939.jpeg"
              alt=""
              className="featuredImg"
              onClick={handleClick}
            />
            <div className="featuredTitles">
              <h1>Patel Nagar</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://10619-2.s.cdn12.com/rests/original/331_503608467.jpg"
              alt=""
              className="featuredImg"
              onClick={handleClick}
            />
            <div className="featuredTitles">
              <h1>MP Nagar</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
