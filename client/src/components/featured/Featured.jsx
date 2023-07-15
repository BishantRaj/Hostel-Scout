import "./featured.css";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Indrapuri,Patel Nagar,MP Nagar"
  );
  const [destination, setDestination] = useState("Indrapuri");
  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleClick = (city) => {
    // inputRef.current.value = city;
    setDestination(city);
    // console.log(destination);
    dispatch({ type: "NEW_SEARCH", payload: { destination: city } });
    navigate("/chotels", { state: { destination: city } });
  };

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              onClick={() => handleClick("Indrapuri")}
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
              onClick={() => handleClick("Patel Nagar")}
              src="https://im.proptiger.com/1/2022832/6/heights-phase-i-elevation-105310939.jpeg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Patel Nagar</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              // onChange={(e) => setDestination("MP Nagar")}
              onClick={() => handleClick("MP Nagar")}
              src="https://10619-2.s.cdn12.com/rests/original/331_503608467.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              {/* <button onClick={q}>abc</button> */}
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
