import "./propertyList.css";
import useFetch from "../../hooks/useFetch.js";
import { SearchContext } from "../../context/SearchContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const [destination, setDestination] = useState("Indrapuri");
  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();

  const images = [
    "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",

    "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/119467716.jpeg?k=63b69100225782d08fbd4d0205bf949c0be894ab946a0366edb8ad48e9c0ef46&o=",

    "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",

    // "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/100235855.jpeg?k=61ef6692e05b5971e2e8dc75687f844e6d0ad295a9a5ace17f7c713f167e61b5&o=",

    // "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/100235855.jpeg?k=61ef6692e05b5971e2e8dc75687f844e6d0ad295a9a5ace17f7c713f167e61b5&o=",
  ];

  const handleClick = (ty) => {
    // inputRef.current.value = city;
    setDestination(ty);
    // console.log(destination);
    dispatch({ type: "NEW_SEARCH", payload: { destination: ty } });
    navigate("/thotels", { state: { destination: ty } });
  };

  return (
    <div className="pList">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListItem"
                  onClick={() => handleClick(data[i]?.type)}
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {" "}
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;

//{data[i].type}
