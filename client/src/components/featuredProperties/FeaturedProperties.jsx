import "./FeaturedProperties.css";
import useFetch from "../../hooks/useFetch.js";
import { SearchContext } from "../../context/SearchContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");


  const [destination, setDestination] = useState("Indrapuri");
  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleClick = (feat) => {
    // inputRef.current.value = city;
    setDestination(feat);
    // console.log(destination);
    dispatch({ type: "NEW_SEARCH", payload: { destination: feat } });
    navigate("/fhotels", { state: { destination: feat } });
  };


  return (
    <div className="fp">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          {data.map((item) => (
            
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="fpImg"
                onClick={() => handleClick(item.name)}
              />
              
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from Rs {item.CheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
  
};

export default FeaturedProperties;
